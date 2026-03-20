document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el);
  });

  // Sticky Navbar background blur
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(15, 17, 21, 0.85)';
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    } else {
      navbar.style.background = 'rgba(15, 17, 21, 0.7)';
      navbar.style.boxShadow = 'none';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
});
