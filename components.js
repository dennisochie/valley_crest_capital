/* components.js — wires up the inline header and footer. */
(function () {
  function initHeader() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    const header = document.getElementById('site-header');
    const dd = document.querySelector('.has-dropdown');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      if (!open && dd) dd.classList.remove('mobile-open');
    });
    if (dd) dd.querySelector('.nav-link--dropdown').addEventListener('click', (e) => {
      e.preventDefault();
      if (window.innerWidth <= 900) dd.classList.toggle('mobile-open');
    });
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll); onScroll();
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link,.dropdown a').forEach(a => {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });
    if (document.querySelector('.dropdown a.active') && dd) dd.querySelector('.nav-link--dropdown').classList.add('active');
  }

  function init() {
    initHeader();
    const year = document.getElementById('footer-year');
    if (year) year.textContent = new Date().getFullYear();
  }
  document.addEventListener('DOMContentLoaded', init);
})();
