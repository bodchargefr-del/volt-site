// Protection du tableau de bord privé de Jules (bodcharge.com/tableau-de-bord) — 15/10/2026.
// Tout ce qui est sous /tableau-de-bord demande un mot de passe, sauf l'icône et le manifeste
// (nécessaires pour l'ajout à l'écran d'accueil du téléphone).
// Réglage dans Vercel (Settings → Environment Variables) : TDB_MOT_DE_PASSE.
// Une fois connecté, un cookie garde la connexion 1 an sur l'appareil. Changer le mot de passe déconnecte tous les appareils.
// Sans réglage, le tableau de bord reste fermé.

export const config = { matcher: ['/tableau-de-bord', '/tableau-de-bord/:path*'] };

const COOKIE = 'bod_tdb';
const UN_AN = 365 * 24 * 3600;
const LIBRES = /^\/tableau-de-bord\/(icones\/.+|manifest\.json)$/;

async function jeton(motDePasse) {
  const cle = await crypto.subtle.importKey('raw', new TextEncoder().encode(motDePasse), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', cle, new TextEncoder().encode('bod-tableau-de-bord-v1'));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function lireCookie(request, nom) {
  const m = (request.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + nom + '=([^;]+)'));
  return m ? m[1] : null;
}
function egal(a, b) { // comparaison à temps constant
  if (!a || !b || a.length !== b.length) return false;
  let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

function pageConnexion(erreur, statut) {
  const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow"><title>BOD · Tableau de bord</title>
<link rel="apple-touch-icon" href="/tableau-de-bord/icones/apple-touch-icon.png?v=3"><link rel="manifest" href="/tableau-de-bord/manifest.json">
<meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="BOD"><meta name="theme-color" content="#FBF9F8">
<style>@font-face{font-family:"Plus Jakarta Sans";font-weight:200 800;src:url(/fonts/plus-jakarta-sans-latin.woff2) format("woff2")}
*{box-sizing:border-box}html,body{margin:0;height:100%;background:#FBF9F8;color:#1B1C1C;font-family:"Plus Jakarta Sans",system-ui,sans-serif}
main{min-height:100%;display:flex;align-items:center;justify-content:center;padding:24px}
.carte{width:100%;max-width:380px;background:#fff;border:1px solid rgba(27,28,28,.08);border-radius:24px;padding:32px 26px;box-shadow:0 18px 40px -24px rgba(27,28,28,.3)}
img{height:34px;display:block}h1{font-size:24px;letter-spacing:-.03em;margin:22px 0 6px}p{margin:0 0 20px;color:rgba(27,28,28,.6);font-size:14px}
input{width:100%;font:inherit;font-size:16px;padding:15px 18px;border-radius:14px;border:1.5px solid rgba(27,28,28,.15);background:#FBF9F8;outline:none}
input:focus{border-color:#1B1C1C}button{width:100%;margin-top:12px;font:inherit;font-weight:800;font-size:16px;padding:15px;border:0;border-radius:999px;background:#D0FF00;color:#1B1C1C;cursor:pointer}
.err{color:#C4363B;font-size:13px;font-weight:700;margin:10px 0 0}</style></head>
<body><main><form class="carte" method="post" action="/tableau-de-bord/connexion">
<img src="/images/logo-bod.png" alt="bod"><h1>Tableau de bord</h1><p>Accès réservé. Entrez votre mot de passe.</p>
<input type="password" name="mot_de_passe" placeholder="Mot de passe" autocomplete="current-password" autofocus required>
${erreur ? '<div class="err">Mot de passe incorrect.</div>' : ''}<button type="submit">Ouvrir</button></form></main></body></html>`;
  return new Response(html, { status: statut, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}

export default async function middleware(request) {
  const url = new URL(request.url);
  if (LIBRES.test(url.pathname)) return; // icône et manifeste : libres
  const motDePasse = process.env.TDB_MOT_DE_PASSE;
  if (!motDePasse) return new Response('Tableau de bord fermé : mot de passe non configuré.', { status: 503, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  const attendu = await jeton(motDePasse);

  if (url.pathname === '/tableau-de-bord/connexion') {
    if (request.method !== 'POST') return Response.redirect(new URL('/tableau-de-bord/', url), 303);
    const form = await request.formData();
    if (!egal(String(form.get('mot_de_passe') || ''), motDePasse)) {
      await new Promise(r => setTimeout(r, 800)); // ralentit les essais au hasard
      return pageConnexion(true, 401);
    }
    return new Response(null, { status: 303, headers: {
      location: '/tableau-de-bord/',
      'set-cookie': `${COOKIE}=${attendu}; Path=/tableau-de-bord; Max-Age=${UN_AN}; HttpOnly; Secure; SameSite=Lax`,
      'cache-control': 'no-store' } });
  }
  if (egal(lireCookie(request, COOKIE), attendu)) return; // connecté : on laisse passer
  return pageConnexion(false, 401);
}
