// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = 'white';
    }
});

// Search functionality
const searchButton = document.querySelector('.search-bar button');
searchButton.addEventListener('click', function() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput.value.trim() !== '') {
        alert('Searching for restaurants near: ' + searchInput.value);
        // Here you would typically make an API call to search for restaurants
    }
});

// Restaurant card hover effect
const restaurantCards = document.querySelectorAll('.restaurant-card');
restaurantCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Login and Signup button functionality
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Login functionality will be implemented here');
});

document.querySelector('.signup-btn').addEventListener('click', function() {
    alert('Signup functionality will be implemented here');
});

// Add animation to category cards on scroll
const categoryCards = document.querySelectorAll('.category-card');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

categoryCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});
