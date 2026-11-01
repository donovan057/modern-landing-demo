// ---------- Thème clair / sombre ----------
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
    toggle.textContent = current === 'dark' ? '☀️' : '🌙';
});

// ---------- Navbar : effet au scroll ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ---------- Menu mobile ----------
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
});
navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('mobile-open'))
);

// ---------- Année dynamique ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Animations au scroll ----------
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ---------- Compteurs animés du dashboard ----------
const counters = [
    { Selector: '.dashboard-stat:nth-child(1) .dash-num', end: 248, suffix: '%', prefix: '+' },
    { Selector: '.dashboard-stat:nth-child(2) .dash-num', end: 12.4, suffix: 'k', prefix: '', decimals: 1 },
    { Selector: '.dashboard-stat:nth-child(3) .dash-num', end: 99.9, suffix: '%', prefix: '', decimals: 1 },
];

function animateCounter(el, { end, suffix = '', prefix = '', decimals = 0 }) {
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = (end * eased).toFixed(decimals);
        el.textContent = prefix + value + suffix;
        if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
}

// Lancer les compteurs quand le dashboard devient visible
const dashObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counters.forEach((c) => {
                    const el = document.querySelector(c.Selector);
                    if (el) animateCounter(el, c);
                });
                dashObserver.disconnect();
            }
        });
    },
    { threshold: 0.4 }
);

const previewEl = document.querySelector('.hero-preview');
if (previewEl) dashObserver.observe(previewEl);