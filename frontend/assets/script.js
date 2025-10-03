(() => {
  'use strict';

  // Module: DOM helpers
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  // Module: Mobile navigation
  function initMobileNav() {
    const toggle = $('.header__menu-toggle');
    const nav = $('.header__nav');
    if (!toggle || !nav) return;

    const list = $('#primary-navigation');
    function setExpanded(expanded) {
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', expanded);
      // Trap focus could be added for an advanced drawer; keeping simple here.
    }

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    // Close on escape and on link click
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setExpanded(false);
      }
    });
    if (list) {
      list.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && nav.classList.contains('is-open')) {
          setExpanded(false);
        }
      });
    }
  }

  // Module: Newsletter form
  function initNewsletter() {
    const form = $('.footer__newsletter');
    if (!form) return;
    const input = $('#newsletter-email');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input?.value?.trim();
      if (!email) {
        input?.focus();
        input?.setAttribute('aria-invalid', 'true');
        input?.setAttribute('aria-describedby', 'newsletter-help');
        return;
      }
      input?.removeAttribute('aria-invalid');
      // Placeholder: integrate with real endpoint
      // eslint-disable-next-line no-console
      console.info('Newsletter submitted:', email);
      form.reset();
    });
  }

  // Module: Lightbox scaffold (if gallery added later)
  function initGalleryLightbox() {
    // Placeholder to wire up future lightbox with ARIA
    // Keep no-op to avoid errors
  }

  // Init
  function init() {
    initMobileNav();
    initNewsletter();
    initGalleryLightbox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
