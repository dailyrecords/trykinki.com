(() => {
  'use strict';
  // Preview is visual only: never execute a transaction here.
  document.addEventListener('submit', function(e) {
    const form = e.target;
    if (!form.matches('form[data-preview-form]')) return;
    e.preventDefault();
    const destination = form.getAttribute('action') || 'https://trykinki.com/';
    window.location.href = destination;
  }, true);
  document.addEventListener('click', function(e) {
    const b = e.target.closest('button');
    if (!b) return;
    const label = ((b.textContent || '') + ' ' + (b.getAttribute('aria-label') || '')).toLowerCase();
    if (/add to cart|buy now|checkout|quick add|purchase/.test(label)) {
      e.preventDefault();
      window.location.href = 'https://trykinki.com/';
    }
  }, true);
  document.addEventListener('contextmenu', (e) => e.preventDefault());
})();
