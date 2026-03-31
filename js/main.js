/* ============================================================
   DE GROOTE NV — MAIN JAVASCRIPT
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     NAVIGATION — SCROLL & MOBILE MENU
  ---------------------------------------------------------- */
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  // Scroll state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  // Init on load (in case page starts scrolled)
  if (window.scrollY > 30) nav.classList.add('nav--scrolled');

  // Mobile menu toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ----------------------------------------------------------
     HERO ANIMATIONS (GSAP when available, CSS fallback)
  ---------------------------------------------------------- */
  function initHeroAnimations() {
    if (typeof gsap === 'undefined') {
      // CSS fallback: simply make elements visible
      const els = document.querySelectorAll(
        '.hero__label, .hero__headline, .hero__text, .hero__actions, .hero__scroll'
      );
      els.forEach((el, i) => {
        el.style.transition = `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`;
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const label    = document.querySelector('.hero__label');
    const headline = document.querySelector('.hero__headline');
    const text     = document.querySelector('.hero__text');
    const actions  = document.querySelector('.hero__actions');
    const scroll   = document.querySelector('.hero__scroll');

    if (label) {
      tl.to(label,    { opacity: 1, y: 0, duration: 0.9 }, 0.25)
        .to(headline, { opacity: 1, y: 0, duration: 1.1 }, 0.45)
        .to(text,     { opacity: 1, y: 0, duration: 0.9 }, 0.7)
        .to(actions,  { opacity: 1, y: 0, duration: 0.8 }, 0.88)
        .to(scroll,   { opacity: 1,        duration: 1.2 }, 1.1);
    }

    // Scroll-triggered reveals
    gsap.utils.toArray('.reveal').forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 87%',
        onEnter: () => el.classList.add('visible')
      });
    });
  }

  // Wait for GSAP to be available (it's loaded via CDN)
  if (typeof gsap !== 'undefined') {
    initHeroAnimations();
  } else {
    window.addEventListener('load', initHeroAnimations);
  }

  /* ----------------------------------------------------------
     INTERSECTION OBSERVER — Reveal animation fallback
  ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------
     STATS COUNTER ANIMATION
  ---------------------------------------------------------- */
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = Math.round(easeOutCubic(progress) * target);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numEl = entry.target.querySelector('[data-target]');
        if (numEl) animateCounter(numEl);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stats__item').forEach(item => statsObserver.observe(item));

  /* ----------------------------------------------------------
     LANGUAGE SWITCHER
  ---------------------------------------------------------- */
  document.querySelectorAll('.nav__lang-btn, .mobile-nav__lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.nav__lang, .mobile-nav__footer');
      if (!group) return;
      group.querySelectorAll('.nav__lang-btn, .mobile-nav__lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ----------------------------------------------------------
     SERVICE CHIPS (Industriële Verhuizing page)
  ---------------------------------------------------------- */
  const chips = document.querySelectorAll('.service-chip[data-target]');
  const serviceSections = document.querySelectorAll('.service-section[id]');

  if (chips.length && serviceSections.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const targetId = chip.dataset.target;
        const section = document.getElementById(targetId);
        if (section) {
          const navHeight = nav.offsetHeight;
          const chipNavHeight = document.querySelector('.services-nav')?.offsetHeight || 0;
          const top = section.getBoundingClientRect().top + window.scrollY - navHeight - chipNavHeight - 20;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    // Update active chip on scroll
    window.addEventListener('scroll', () => {
      const scrollMid = window.scrollY + window.innerHeight / 2.5;
      let activeId = null;

      serviceSections.forEach(s => {
        const top = s.offsetTop;
        const bottom = top + s.offsetHeight;
        if (scrollMid >= top && scrollMid < bottom) activeId = s.id;
      });

      if (activeId) {
        chips.forEach(c => c.classList.toggle('active', c.dataset.target === activeId));
      }
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     MACHINE TABS
  ---------------------------------------------------------- */
  const machineTabs = document.querySelectorAll('.machine-tab');
  const machineCategories = document.querySelectorAll('.machine-category');

  if (machineTabs.length) {
    machineTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        machineTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.category;

        machineCategories.forEach(group => {
          const show = cat === 'all' || group.dataset.category === cat;
          group.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ----------------------------------------------------------
     CASES FILTER
  ---------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards  = document.querySelectorAll('.case-card');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        caseCards.forEach(card => {
          const show = filter === 'all' || card.dataset.sector === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ----------------------------------------------------------
     CONTACT FORM
  ---------------------------------------------------------- */
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Verzonden ✓';
      btn.disabled = true;
      btn.style.background = '#16a34a';
      btn.style.borderColor = '#16a34a';

      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        form.reset();
      }, 4000);
    });
  });

  /* ----------------------------------------------------------
     SMOOTH ACTIVE NAV LINK (highlight current page)
  ---------------------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
