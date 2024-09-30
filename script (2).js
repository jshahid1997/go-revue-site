// Smooth scrolling for "Join the Waitlist" button
document.querySelectorAll('.cta-btn').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
