// Mobile navigation toggle
document.querySelector('.panel-all').addEventListener('click', function() {
    document.querySelector('.panel-ops').classList.toggle('active');
});

// Responsive search bar
const searchBar = document.querySelector('.nav-search');
const searchInput = document.querySelector('.Search-input');

searchBar.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        searchBar.style.width = '100%';
        searchInput.focus();
    }
});

// Close search when clicking outside
document.addEventListener('click', function(event) {
    if (!searchBar.contains(event.target) && window.innerWidth <= 768) {
        searchBar.style.width = '620px';
    }
});

// Responsive product boxes
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        }
    });
    
    box.addEventListener('mouseleave', function() {
        if (window.innerWidth > 768) {
            this.style.transform = 'scale(1)';
        }
    });
});

// Smooth scroll for back to top button
document.querySelector('.foot-panel1').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        searchBar.style.width = '620px';
        document.querySelector('.panel-ops').classList.remove('active');
    }
});

// Add active class to current navigation item
const navLinks = document.querySelectorAll('.panel-ops a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Hero Section Slideshow
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Function to show next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to show previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Add click event listeners to navigation buttons
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Function to reset the interval
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Start the slideshow
    showSlide(0);
    slideInterval = setInterval(nextSlide, 5000);

    // Pause slideshow on hover
    const heroSection = document.querySelector('.hero-section');
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    heroSection.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Add CTA button functionality
const ctaButtons = document.querySelectorAll('.hero-cta');
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add your CTA button action here
        console.log('CTA button clicked');
    });
}); 