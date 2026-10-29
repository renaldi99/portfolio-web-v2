// Icons
if (window.lucide) lucide.createIcons();

// Theme toggle (dark default, persisted)
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const setTheme = (t) => {
  if (t === 'light') root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
  themeBtn.innerHTML = `<i data-lucide="${t === 'light' ? 'sun' : 'moon'}"></i>`;
  if (window.lucide) lucide.createIcons();
  localStorage.setItem('theme', t);
};
setTheme(localStorage.getItem('theme') || 'dark');
themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));

// Active nav tab on scroll
const navTabs = [...document.querySelectorAll('.nav .tab')];
const sections = navTabs.map(t => document.querySelector(t.getAttribute('href')));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navTabs.forEach(t => t.classList.toggle('active', t.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => s && io.observe(s));

// Project filter
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.toggle('active', b === btn));
  const f = btn.dataset.filter;
  projects.forEach(p => p.classList.toggle('is-hidden', f !== 'all' && p.dataset.cat !== f));
}));

// Copy email
const copyBtn = document.getElementById('copyEmail');
copyBtn.addEventListener('click', async () => {
  const label = copyBtn.querySelector('span');
  try { await navigator.clipboard.writeText(copyBtn.dataset.email); } catch (_) {}
  label.textContent = 'Copied!';
  setTimeout(() => (label.textContent = copyBtn.dataset.email), 1600);
});
