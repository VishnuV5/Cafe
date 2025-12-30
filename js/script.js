document.addEventListener('DOMContentLoaded', () => {
    // Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Mobile dropdown toggle
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Navbar shrink on scroll
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Fade in sections
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.style.animationDelay = '0.2s';
            entry.target.classList.toggle('fade-in', entry.isIntersecting);
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
});
