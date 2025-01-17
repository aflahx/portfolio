// JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate form submission
        console.log('Form Submitted:', { name, email, message });

        alert('Thank you for reaching out! I will get back to you soon.');

        // Reset form fields
        contactForm.reset();
    });

    // Smooth Scroll for Navbar Links
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
