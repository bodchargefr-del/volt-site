/* BOD — petites animations communes à toutes les pages.
   Tout est ajouté par ce script : s'il ne se charge pas, la page s'affiche normalement, sans rien de caché. */
(function () {
  'use strict';

  // Questions fréquentes : une seule réponse ouverte à la fois. Ouvrir une question referme les autres.
  document.addEventListener('toggle', function (e) {
    var d = e.target;
    if (!d.open || d.tagName !== 'DETAILS' || !d.parentNode) return;
    [].forEach.call(d.parentNode.children, function (o) { if (o !== d && o.tagName === 'DETAILS') o.open = false; });
  }, true);

  // Téléphone : bouton « Devenir partenaire » fixe en bas de l'écran (apparaît après le premier écran), et menu plein écran.
  // Tout est masqué sur ordinateur par le CSS.
  (function () {
    var here = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
    var root = document.documentElement;
    if (here !== 'partenaire') {
      var bar = document.createElement('div'); bar.className = 'bod-cta-bar';
      bar.innerHTML = '<a href="partenaire.html"><span data-i18n="nav.cta">Devenir Partenaire</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
      document.body.appendChild(bar); root.classList.add('has-cta-bar');
      var show = function () { bar.classList.toggle('is-in', window.scrollY > 320); };
      window.addEventListener('scroll', show, { passive: true }); show();
    }
    // menu ouvert : la page derrière ne défile plus, et le bouton du bas se cache (le menu a le sien)
    var menu = document.getElementById('mobile-menu');
    if (menu && 'MutationObserver' in window) {
      new MutationObserver(function () { root.classList.toggle('menu-open', !menu.classList.contains('hidden')); }).observe(menu, { attributes: true, attributeFilter: ['class'] });
    }
  })();

  // Menus déroulants : la liste du navigateur (surbrillance bleue, non modifiable) est remplacée par une liste aux couleurs BOD.
  // Le <select> d'origine reste dans la page, caché : c'est toujours lui que le formulaire envoie.
  [].forEach.call(document.querySelectorAll('select'), function (sel) {
    var box = document.createElement('div'); box.className = 'bod-select';
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = sel.className + ' bod-select-btn';
    btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false');
    var lab = document.createElement('span');
    btn.appendChild(lab);
    btn.insertAdjacentHTML('beforeend', '<svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true"><path d="M1.5 1.5 7 7l5.5-5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    var list = document.createElement('ul'); list.className = 'bod-select-list'; list.setAttribute('role', 'listbox'); list.hidden = true;
    sel.parentNode.insertBefore(box, sel); box.appendChild(sel); box.appendChild(btn); box.appendChild(list);
    sel.style.display = 'none';
    var cur = 0;
    function label() { var o = sel.options[sel.selectedIndex]; lab.textContent = o ? o.textContent.trim() : ''; }
    function mark(i) { cur = i; [].forEach.call(list.children, function (li, k) { li.classList.toggle('is-cur', k === i); }); }
    function build() {
      list.innerHTML = '';
      [].forEach.call(sel.options, function (o, i) {
        var li = document.createElement('li'); li.setAttribute('role', 'option'); li.textContent = o.textContent.trim();
        var on = i === sel.selectedIndex; li.setAttribute('aria-selected', on); if (on) li.classList.add('is-on');
        li.addEventListener('mouseenter', function () { mark(i); });
        li.addEventListener('mousedown', function (e) { e.preventDefault(); choose(i); });
        list.appendChild(li);
      });
      mark(Math.max(0, sel.selectedIndex));
    }
    function open() { build(); list.hidden = false; box.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
    function close() { list.hidden = true; box.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    function choose(i) { sel.selectedIndex = i; sel.dispatchEvent(new Event('change', { bubbles: true })); label(); close(); btn.focus(); }
    btn.addEventListener('click', function () { if (list.hidden) open(); else close(); });
    btn.addEventListener('blur', close);
    btn.addEventListener('keydown', function (e) {
      var n = sel.options.length;
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); if (list.hidden) { open(); return; }
        mark((cur + (e.key === 'ArrowDown' ? 1 : n - 1)) % n);
      } else if ((e.key === 'Enter' || e.key === ' ') && !list.hidden) { e.preventDefault(); choose(cur); }
    });
    // le texte des options change quand on change de langue : l'étiquette suit
    if ('MutationObserver' in window) new MutationObserver(label).observe(sel, { childList: true, subtree: true, characterData: true });
    sel.addEventListener('change', label);
    label();
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  root.classList.add('anim-on');

  // Apparition douce des blocs au défilement.
  // On anime les sections qui n'ont pas déjà leurs propres éléments animés (classe .reveal), et jamais la première.
  var sections = [].slice.call(document.querySelectorAll('main section')).filter(function (s, i) {
    return i > 0 && !s.querySelector('.reveal');
  });
  var blocks = [];
  sections.forEach(function (s) {
    var inner = s.firstElementChild && s.children.length === 1 ? s.firstElementChild : s;
    [].slice.call(inner.children).forEach(function (el, i) { el.classList.add('anim-up'); el.style.transitionDelay = Math.min(i, 3) * 90 + 'ms'; blocks.push(el); });
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    blocks.forEach(function (b) { io.observe(b); });
  } else {
    blocks.forEach(function (b) { b.classList.add('is-in'); });
  }
})();
