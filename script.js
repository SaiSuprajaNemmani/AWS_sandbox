// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Skill pill animations
    document.querySelectorAll('.skill-pill').forEach(pill => {
        pill.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        pill.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});