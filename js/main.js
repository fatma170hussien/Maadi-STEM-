// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Header scroll effect - TRANSPARENT HEADER VERSION
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize header state
if (window.pageYOffset > 50) {
    header.classList.add('scrolled');
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// Check on load and scroll
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to content when clicking on hero scroll indicator
document.querySelector('.hero-scroll').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.welcome').offsetTop - 100,
        behavior: 'smooth'
    });
});

// Add hover effect to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const cardImg = card.querySelector('.card-img');
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
});

// Add pink tint to hero image on hover
const heroImage = document.querySelector('.hero-bg');
if (heroImage) {
    heroImage.addEventListener('mouseenter', () => {
        heroImage.style.filter = 'brightness(0.85) sepia(0.4) hue-rotate(-10deg) saturate(1.3)';
    });
    
    heroImage.addEventListener('mouseleave', () => {
        heroImage.style.filter = 'brightness(0.8) sepia(0.3) hue-rotate(-10deg) saturate(1.2)';
    });
}