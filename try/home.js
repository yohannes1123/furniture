// Hamburger menu functionality

alert("goo");


// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Hamburger Menu
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); // Toggle the 'show' class to open/close the sidebar
});

// Toggle Hamburger Menu
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); // Toggle the 'show' class to open/close the sidebar
});

// Optional: Close button functionality
document.querySelector('.close-btn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('show'); // Remove the 'show' class to hide the sidebar
});

