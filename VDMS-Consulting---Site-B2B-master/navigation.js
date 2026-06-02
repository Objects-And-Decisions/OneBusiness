// ============================================================
// VDMS CONSULTING — NAVIGATION & CINÉMATIQUE v1
// Scroll progress · Back-to-top · Dropdown nav · Scroll reveal
// Compteurs animés · Transitions de page
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ── 0. BARRE D'ANNONCE SOLDES ─────────────────────────────
  const SOLDES_END = new Date('2026-07-31T23:59:59');

  if (Date.now() < SOLDES_END) {
    const bar = document.createElement('div');
    bar.id = 'soldes-bar';
    bar.innerHTML = `
      <span class="soldes-badge">🔥 Soldes B2B</span>
      <span class="soldes-text">
        Jusqu'à <strong>−50 %</strong> sur les commandes groupées — Offre limitée
      </span>
      <span class="soldes-countdown" id="soldes-cd" title="Fin des soldes">
        ⏱ Fin dans&nbsp;: <span id="soldes-timer">--:--:--</span>
      </span>
      <a href="produits.html" class="soldes-cta">Voir les offres →</a>
      <button class="soldes-close" id="soldes-close" aria-label="Fermer l'annonce">✕</button>
    `;

    // Insérer avant le header
    const header = document.querySelector('header');
    if (header) header.before(bar);
    else document.body.prepend(bar);

    // Compte à rebours
    function updateTimer() {
      const diff = SOLDES_END - Date.now();
      if (diff <= 0) { document.getElementById('soldes-timer').textContent = 'Expiré'; return; }
      const d  = Math.floor(diff / 86400000);
      const h  = Math.floor((diff % 86400000) / 3600000);
      const m  = Math.floor((diff % 3600000) / 60000);
      const s  = Math.floor((diff % 60000) / 1000);
      const pad = n => String(n).padStart(2, '0');
      const timer = document.getElementById('soldes-timer');
      if (timer) timer.textContent = d > 0 ? `${d}j ${pad(h)}h ${pad(m)}m` : `${pad(h)}:${pad(m)}:${pad(s)}`;
    }
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    // Fermeture
    document.getElementById('soldes-close').addEventListener('click', () => {
      bar.classList.add('hiding');
      clearInterval(timerInterval);
      setTimeout(() => bar.remove(), 380);
    });
  }

  // ── 1. BARRE DE PROGRESSION DU SCROLL ─────────────────────
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', updateProgress, { passive: true });
  function updateProgress() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // ── 2. BOUTON RETOUR EN HAUT ──────────────────────────────
  const backToTop = document.createElement('button');
  backToTop.id        = 'back-to-top';
  backToTop.innerHTML = '↑';
  backToTop.title     = 'Retour en haut';
  backToTop.setAttribute('aria-label', 'Retour en haut de page');
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('btt-visible', window.scrollY > 400);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── 3. DROPDOWN « À PROPOS » DANS LA NAV ─────────────────
  const nav = document.getElementById('nav-menu');
  if (nav) {
    const groupLinks = [
      { href: 'qui-sommes-nous.html', label: 'Qui Sommes-Nous', icon: '👥' },
      { href: 'rendez-vous.html',     label: 'Rendez-vous',     icon: '📅' },
      { href: 'evenement.html',       label: 'Événement',       icon: '🎯' },
      { href: 'scenarios.html',       label: 'Scénarios',       icon: '🗺️' },
    ];

    // Retirer les liens individuels déjà présents
    groupLinks.forEach(({ href }) => {
      const a = nav.querySelector(`a[href="${href}"]`);
      if (a) a.remove();
    });

    // Détecter si une page du groupe est active
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isGroupActive = groupLinks.some(l => l.href === currentPage);

    // Construire le dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'nav-dropdown' + (isGroupActive ? ' group-active' : '');

    const trigger = document.createElement('button');
    trigger.className = 'nav-dropdown-trigger' + (isGroupActive ? ' active' : '');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = 'À propos <span class="nav-arrow">▾</span>';

    const menu = document.createElement('div');
    menu.className = 'nav-dropdown-menu';
    menu.setAttribute('role', 'menu');

    groupLinks.forEach(({ href, label, icon }) => {
      const a = document.createElement('a');
      a.href      = href;
      a.innerHTML = `<span class="dd-icon">${icon}</span>${label}`;
      a.setAttribute('role', 'menuitem');
      if (href === currentPage) a.classList.add('active');
      menu.appendChild(a);
    });

    dropdown.appendChild(trigger);
    dropdown.appendChild(menu);
    nav.appendChild(dropdown);

    // Ouvrir / fermer le dropdown
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen);
    });

    // Fermer en cliquant ailleurs
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });

    // Fermer sur Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── 4. TRANSITION DE PAGE ─────────────────────────────────
  // Fade in à l'arrivée
  document.body.classList.add('page-transition');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('page-visible');
    });
  });

  // Fade out au départ (sauf ancres, mailto, tel, js)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    if (
      href.startsWith('#') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      href.startsWith('javascript') ||
      link.target === '_blank' ||
      e.ctrlKey || e.metaKey || e.shiftKey
    ) return;

    e.preventDefault();
    document.body.classList.remove('page-visible');
    setTimeout(() => { window.location.href = href; }, 260);
  });

  // ── 5. SCROLL REVEAL ──────────────────────────────────────
  const revealSelectors = [
    '.card', '.stat-card', '.service-card', '.fournisseur-card',
    '.section-box', '.team-card', '.secteur-card', '.step-item',
    '.contact-info-item', '.rdv-spec-card', '.rdv-reseau-card',
    '.evt-valeur-card', '.evt-offre-card', '.graph-section',
    '.sim-card', '.mini-card', '.panier-summary',
  ];

  const revealEls = document.querySelectorAll(revealSelectors.join(', '));

  // Groupes de 4 pour le décalage en cascade
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // Reveal aussi les titres h2 de section
  document.querySelectorAll('main section > h2, main section > h3').forEach((el, i) => {
    el.classList.add('reveal-title');
    el.style.transitionDelay = i * 40 + 'ms';
  });

  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed-title');
        titleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-title').forEach(el => titleObserver.observe(el));

  // ── 6. COMPTEURS ANIMÉS (stat-val) ────────────────────────
  function animateCounter(el) {
    const raw    = el.textContent.trim();
    const num    = parseFloat(raw.replace(/[^0-9.]/g, ''));
    const suffix = raw.replace(/[0-9.]/g, '').trim();
    if (isNaN(num) || num === 0) return;

    const duration = 1400;
    const startTime = performance.now();
    const isFloat   = !Number.isInteger(num);

    function tick(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 4); // ease-out quart
      const value    = eased * num;
      el.textContent = (isFloat ? value.toFixed(1) : Math.round(value)) + (suffix ? '\u00a0' + suffix : '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const val = entry.target.querySelector('.stat-val');
        if (val && !val.dataset.counted) {
          val.dataset.counted = '1';
          animateCounter(val);
        }
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.stat-card').forEach(el => counterObserver.observe(el));

  // ── 7. BANDEAU COOKIE CONSENT ─────────────────────────────
  const COOKIE_KEY = 'vdms_cookie_consent';

  function getCookieConsent() {
    try { return localStorage.getItem(COOKIE_KEY); } catch(e) { return null; }
  }
  function setCookieConsent(value) {
    try { localStorage.setItem(COOKIE_KEY, value); } catch(e) {}
  }

  if (!getCookieConsent()) {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <div class="cb-text">
        <p>
          <strong>🍪 Cookies &amp; confidentialité</strong><br>
          VDMS Consulting utilise des cookies pour assurer le bon fonctionnement du site et, avec votre consentement, pour mesurer l'audience et personnaliser votre expérience.
          <a href="mentions-legales.html#cookies">En savoir plus</a>
        </p>
      </div>
      <div class="cb-actions">
        <button class="cb-btn-accept" id="cb-accept">✓ Tout accepter</button>
        <button class="cb-btn-refuse" id="cb-refuse">Refuser</button>
        <button class="cb-btn-params" id="cb-params">Personnaliser</button>
      </div>
    `;
    document.body.appendChild(banner);

    // Afficher avec animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => banner.classList.add('cb-visible'));
    });

    function closeBanner() {
      banner.classList.remove('cb-visible');
      setTimeout(() => banner.remove(), 400);
    }

    document.getElementById('cb-accept').addEventListener('click', () => {
      setCookieConsent('all');
      closeBanner();
    });
    document.getElementById('cb-refuse').addEventListener('click', () => {
      setCookieConsent('essential');
      closeBanner();
    });
    document.getElementById('cb-params').addEventListener('click', () => {
      window.location.href = 'mentions-legales.html#cookies';
    });
  }

  // ── 8. LIEN MENTIONS LÉGALES DANS CHAQUE FOOTER ───────────
  const footerBottom = document.querySelector('.footer-bottom');
  if (footerBottom && !footerBottom.querySelector('a[href*="mentions-legales"]')) {
    const legalBand = document.createElement('div');
    legalBand.className = 'footer-legal-band';
    legalBand.innerHTML =
      '<a href="mentions-legales.html">Mentions légales</a> · ' +
      '<a href="mentions-legales.html#cookies">Politique cookies</a> · ' +
      '<a href="mentions-legales.html#droits">Vos droits RGPD</a> · ' +
      '<a href="mentions-legales.html#contact-dpo">Contact DPO</a> · ' +
      '<span>© 2026 VDMS Consulting — Tous droits réservés</span>';
    const footer = document.querySelector('.footer');
    if (footer) footer.after(legalBand);
  }

  // ── 9. HERO — ANIMATION D'ENTRÉE ──────────────────────────
  const hero = document.querySelector('.hero, .qsn-hero, .rdv-hero, .evt-hero');
  if (hero) {
    hero.classList.add('hero-animate');
    setTimeout(() => hero.classList.add('hero-visible'), 80);
  }

});
