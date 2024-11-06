// You can add any interactive JavaScript functionality here, 
// such as dynamic product displays, animations, or event listeners.
// For now, let's keep it simple and add a smooth scroll for navigation.

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
