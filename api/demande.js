// Formulaires Contact et Partenaire → base Airtable « BOD — CRM » de Jules + e-mails (14/10/2026).
// Remplace l'automatisation n8n qui tournait sur le serveur d'Alexis.
// Réglages dans Vercel (Settings → Environment Variables), jamais dans le code :
//   AIRTABLE_TOKEN     : clé d'accès Airtable (droit « data.records:write » sur la base BOD — CRM uniquement)
//   AIRTABLE_BASE      : identifiant de la base (commence par « app », visible dans l'adresse Airtable)
//   GMAIL_USER         : bod.chargefr@gmail.com (boîte qui envoie les e-mails)
//   GMAIL_APP_PASSWORD : « mot de passe d'application » Gmail (16 lettres), pas le vrai mot de passe
// À chaque demande : 1) ligne ajoutée dans Airtable, 2) alerte « Nouvelle demande » à Jules,
// 3) accusé de réception au visiteur, signé Jules — BOD (comme le faisait l'ancien n8n, signé Alexis).

const nodemailer = require('nodemailer');

const TABLES = {
  partenaire: { table: 'Partenaires', champs: { nom: 'Nom', email: 'Email', etablissement: 'Établissement', type: 'Type', ville: 'Ville', message: 'Message' } },
  contact: { table: 'Contacts', champs: { nom: 'Nom', email: 'Email', sujet: 'Sujet', message: 'Message' } },
};

const propre = v => String(v == null ? '' : v).trim().slice(0, 5000);
const uneLigne = v => propre(v).replace(/[\r\n]+/g, ' ').slice(0, 200);

async function enregistrer(conf, d) {
  const { AIRTABLE_TOKEN, AIRTABLE_BASE } = process.env;
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE) return false;
  const fields = { 'Statut': '🆕 Nouveau', // même étiquette que dans le CRM (avec l'icône)
    'Date soumission': new Date().toISOString() };
  for (const [cle, champ] of Object.entries(conf.champs)) if (propre(d[cle])) fields[champ] = propre(d[cle]);
  // Si un champ n'existe pas dans la table Airtable, on le retire et on réessaie (jusqu'à 4 fois) :
  // la demande est enregistrée même si une colonne a été renommée.
  for (let essai = 0; essai < 5; essai++) {
    const r = await fetch('https://api.airtable.com/v0/' + AIRTABLE_BASE + '/' + encodeURIComponent(conf.table), {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + AIRTABLE_TOKEN, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: [{ fields }], typecast: true }),
    });
    if (r.ok) return true;
    const err = await r.json().catch(() => ({}));
    const m = /Unknown field name: "([^"]+)"/.exec((err.error && err.error.message) || '');
    if (m && fields[m[1]] !== undefined) { delete fields[m[1]]; continue; }
    console.error('Airtable', r.status, JSON.stringify(err));
    return false;
  }
  return false;
}

function courrier() {
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return null;
  return nodemailer.createTransport({ service: 'gmail', auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD.replace(/\s+/g, '') } });
}

async function envoyer(t, mail) {
  try { await t.sendMail(mail); return true; } catch (e) { console.error('E-mail', e && e.message); return false; }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  let d = req.body || {};
  if (typeof d === 'string') { try { d = JSON.parse(d); } catch (e) { d = {}; } }
  const conf = TABLES[d.formulaire];
  if (!conf) return res.status(400).json({ ok: false });
  if (d.site) return res.status(200).json({ ok: true }); // case cachée remplie = robot
  if (!propre(d.nom) || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(propre(d.email))) return res.status(400).json({ ok: false });

  const enregistre = await enregistrer(conf, d);

  const t = courrier();
  let prevenu = false;
  if (t) {
    const moi = process.env.GMAIL_USER;
    const nom = uneLigne(d.nom), email = uneLigne(d.email);
    const lignes = Object.entries(conf.champs).filter(([cle]) => propre(d[cle])).map(([cle, champ]) => champ + ' : ' + propre(d[cle])).join('\n');
    const partenaire = d.formulaire === 'partenaire';
    const sujet = partenaire ? 'Nouvelle demande partenaire : ' + (uneLigne(d.etablissement) || nom) : 'Nouveau message : ' + (uneLigne(d.sujet) || 'Contact') + ' — ' + nom;

    prevenu = await envoyer(t, {
      from: '"Site BOD" <' + moi + '>', to: moi, replyTo: email, subject: sujet,
      text: (partenaire ? 'Nouvelle demande de partenariat sur bodcharge.com' : 'Nouveau message sur bodcharge.com') + '\n\n' + lignes +
        '\n\n' + (enregistre ? 'Enregistrée dans Airtable (BOD — CRM).' : 'ATTENTION : non enregistrée dans Airtable, à recopier à la main.') +
        '\nPour répondre, il suffit de répondre à cet e-mail.',
    });

    if (enregistre || prevenu) {
      await envoyer(t, {
        from: '"BOD" <' + moi + '>', to: email, replyTo: moi, subject: 'Votre demande BOD a bien été reçue ✓',
        text: 'Bonjour ' + nom + ',\n\n' +
          (partenaire ? 'Nous avons bien reçu votre demande de partenariat' + (uneLigne(d.etablissement) ? ' pour ' + uneLigne(d.etablissement) : '') + '.'
                      : 'Nous avons bien reçu votre message.') +
          '\n\nNotre équipe vous recontacte sous 24h' + (partenaire ? " pour convenir d'un échange." : '.') +
          '\n\nÀ très vite,\nJules — BOD\nbodcharge.com',
      });
    }
  }

  if (enregistre || prevenu) return res.status(200).json({ ok: true });
  return res.status(502).json({ ok: false });
};
