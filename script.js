function scrolltop() {
  let a = window.document;
  a = location.href = "#home";
}
let contact = document.getElementById("contactForm");
contact.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(`Sorry Request cannot be accepted due to some technical errors`);
});

// Select all elements with class 'hidden'
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove 'show' when element is out of view
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe all hidden elements
document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
