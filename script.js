function scrolltop() {
  let a = window.document;
  a = location.href = "#home";
}
let contact = document.getElementById("contactForm");
contact.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(`Sorry Request cannot be accepted due to some technical errors`);
});

// Scroll to top button
const scrollBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

function scrolltop() {
    window.scrollTo(0, 0);
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Apply animations when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const homeLeft = document.querySelector('.home-left');
    homeLeft.classList.add('hidden', 'slide-right');
    
    const homeRight = document.querySelector('.home-right');
    homeRight.classList.add('hidden', 'slide-left');
    
    const aboutLeft = document.querySelector('.about-left');
    aboutLeft.classList.add('hidden', 'slide-right');
    
    const aboutRight = document.querySelector('.about-right');
    aboutRight.classList.add('hidden', 'slide-left');
    
    // Add animation to services cards with delay
    const serviceItems = document.querySelectorAll('.test-item');
    serviceItems.forEach((item, index) => {
        item.classList.add('hidden', 'fade-up');
        item.style.transitionDelay = `${index * 200}ms`;
    });
    
    // Add animation to contact form
    const contactForm = document.querySelector('.form');
    contactForm.classList.add('hidden', 'zoom');
    
    // Observe all elements with animations
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el) => observer.observe(el));
});
