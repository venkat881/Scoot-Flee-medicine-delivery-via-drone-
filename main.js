// main.js

// Navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Theme toggle (optional)
const toggle = document.getElementById("theme-toggle");

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.setAttribute('aria-pressed', document.body.classList.contains("dark-mode"));
});
