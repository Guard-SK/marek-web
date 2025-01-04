// src/scripts/scroll-reveal.js

document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // Optional: Remove for repeated animations
          }
        });
      },
      {
        threshold: 0.3  , // Trigger when 20% of the element is visible
      }
    );
  
    scrollElements.forEach((el) => observer.observe(el));
  });
  