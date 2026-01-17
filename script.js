// Disable Right Click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) || 
        (e.ctrlKey && e.keyCode == 85)) {
        e.preventDefault();
        return false;
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Sticky Navigation on Scroll
const navbar = document.getElementById('main-nav');
let navOffset = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navOffset) {
        navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
    } else {
        navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
    }
});

// Hero Slider (only on home page)
if (document.querySelector('.hero-slider')) {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const heroTexts = [
        "Dependable home and property maintenance services you can count on!",
        "Leaking pipes, kitchen repairs, flooring - we've got you covered!",
        "From windows and doors to locks and repairs - we do it all!",
        "Keep your property in great shape with our expert services!",
        "Professional maintenance for bathrooms, kitchens, floors and more!"
    ];

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        
        // Update hero text
        const heroText = document.querySelector('.hero-text');
        heroText.style.animation = 'none';
        setTimeout(() => {
            heroText.textContent = heroTexts[currentSlide];
            heroText.style.animation = 'fadeInUp 1s ease-out';
        }, 50);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);

    // Slider controls
    document.querySelector('.slider-next').addEventListener('click', () => {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });

    document.querySelector('.slider-prev').addEventListener('click', () => {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Pause slider on hover
    const heroSection = document.querySelector('.hero-slider');
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    heroSection.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100; // Adjust for fixed header
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// WhatsApp click tracking
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
        // Add your analytics tracking here if needed
    });
});

// Phone click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone link clicked');
        // Add your analytics tracking here if needed
    });
});

// Email click tracking
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Email link clicked');
        // Add your analytics tracking here if needed
    });
});

// FAQ Toggle functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle answer visibility
        answer.classList.toggle('hidden');
        
        // Rotate icon
        if (answer.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

console.log('London Handyman Pro - Website Loaded Successfully!');
