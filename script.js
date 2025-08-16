// Updated Portfolio JavaScript with Theme Toggle Functionality

// ===== THEME TOGGLE FUNCTIONALITY =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply the saved theme on page load
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply new theme
    html.setAttribute('data-theme', newTheme);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    updateThemeIcon(newTheme);
    
    // Add button animation based on screen size
    const isDesktop = window.innerWidth >= 1024;
    
    if (isDesktop) {
        themeToggle.style.transform = 'translateY(-50%) scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'translateY(-50%) scale(1)';
        }, 150);
    } else {
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
});

// Function to update theme icon
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.style.color = '#000000';
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.style.color = '#ffffff';
    }
}

// ===== SCROLL TO TOP FUNCTIONALITY =====
function scrolltop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
const scrollBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
        scrollBtn.style.opacity = "1";
    } else {
        scrollBtn.style.opacity = "0";
        setTimeout(() => {
            if (window.scrollY <= 300) {
                scrollBtn.style.display = "none";
            }
        }, 300);
    }
});

// ===== CONTACT FORM HANDLING =====
const contact = document.getElementById("contactForm");
if (contact) {
    contact.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("textarea").value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields!');
            return;
        }
        
        // Show success message with better styling
        showNotification('Message sent successfully! Thank you for contacting me.', 'success');
        
        // Reset form
        contact.reset();
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--text-secondary);
        color: var(--bg-secondary);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 15px var(--shadow);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for styling
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll (optional)
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== APPLY SCROLL ANIMATIONS =====
    // Add animation classes to elements
    const homeLeft = document.querySelector('.home-left');
    if (homeLeft) {
        homeLeft.classList.add('hidden', 'slide-right');
    }
    
    const homeRight = document.querySelector('.home-right');
    if (homeRight) {
        homeRight.classList.add('hidden', 'slide-left');
    }
    
    const aboutLeft = document.querySelector('.about-left');
    if (aboutLeft) {
        aboutLeft.classList.add('hidden', 'slide-right');
    }
    
    const aboutRight = document.querySelector('.about-right');
    if (aboutRight) {
        aboutRight.classList.add('hidden', 'slide-left');
    }
    
    // Add animation to services cards with staggered delay
    const serviceItems = document.querySelectorAll('.test-item');
    serviceItems.forEach((item, index) => {
        item.classList.add('hidden', 'fade-up');
        item.style.transitionDelay = `${index * 200}ms`;
    });

    // Add animation to project cards
    const projectItems = document.querySelectorAll('.projects-item');
    projectItems.forEach((item, index) => {
        item.classList.add('hidden', 'fade-up');
        item.style.transitionDelay = `${index * 150}ms`;
    });
    
    // Add animation to contact form
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.classList.add('hidden', 'zoom');
    }
    
    // Add animation to section titles
    const sectionTitles = document.querySelectorAll('section h1');
    sectionTitles.forEach(title => {
        title.classList.add('hidden', 'fade-up');
    });
    
    // Observe all elements with animations
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el) => observer.observe(el));
});

// ===== TYPING ANIMATION FOR HOME SECTION =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing animation to home section subtitle
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.home-left h4');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 100);
        }, 1000);
    }
});
