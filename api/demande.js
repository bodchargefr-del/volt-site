// Formulaires Contact et Partenaire → base Airtable « BOD — CRM » de Jules (14/10/2026).
// Remplace l'automatisation n8n qui tournait sur le serveur d'Alexis.
// Réglages dans Vercel (Settings → Environment Variables), jamais dans le code :
//   AIRTABLE_TOKEN : clé d'accès Airtable (droit « data.records:write » sur la base BOD — CRM uniquement)
//   AIRTABLE_BASE  : identifiant de la base (commence par « app », visible dans l'adresse Airtable)
// L'e-mail de prévenance est envoyé par une automatisation Airtable (« quand une ligne est créée »).

const TABLES = {
  partenaire: { table: 'Partenaires', champs: { nom: 'Nom', email: 'Email', etablissement: 'Établissement', type: 'Type', ville: 'Ville', message: 'Message' } },
  contact: { table: 'Contacts', champs: { nom: 'Nom', email: 'Email', sujet: 'Sujet', message: 'Message' } },
};

const propre = v => String(v == null ? '' : v).trim().slice(0, 5000);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const { AIRTABLE_TOKEN, AIRTABLE_BASE } = process.env;
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE) return res.status(503).json({ ok: false, erreur: 'non configuré' });

  let d = req.body || {};
  if (typeof d === 'string') { try { d = JSON.parse(d); } catch (e) { d = {}; } }
  const conf = TABLES[d.formulaire];
  if (!conf) return res.status(400).json({ ok: false });
  if (d.site) return res.status(200).json({ ok: true }); // case cachée remplie = robot
  if (!propre(d.nom) || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(propre(d.email))) return res.status(400).json({ ok: false });

  const fields = { 'Statut': 'Nouveau', 'Date soumission': new Date().toISOString() };
  for (const [cle, champ] of Object.entries(conf.champs)) if (propre(d[cle])) fields[champ] = propre(d[cle]);

  // Si un champ n'existe pas dans la table Airtable, on le retire et on réessaie (jusqu'à 4 fois) :
  // la demande est enregistrée même si une colonne a été renommée.
  for (let essai = 0; essai < 5; essai++) {
    const r = await fetch('https://api.airtable.com/v0/' + AIRTABLE_BASE + '/' + encodeURIComponent(conf.table), {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + AIRTABLE_TOKEN, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: [{ fields }], typecast: true }),
    });
    if (r.ok) return res.status(200).json({ ok: true });
    const err = await r.json().catch(() => ({}));
    const m = /Unknown field name: "([^"]+)"/.exec((err.error && err.error.message) || '');
    if (m && fields[m[1]] !== undefined) { delete fields[m[1]]; continue; }
    console.error('Airtable', r.status, JSON.stringify(err));
    return res.status(502).json({ ok: false });
  }
  return res.status(502).json({ ok: false });
};
