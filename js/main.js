// Main JavaScript file for DRAMSOC website
// Contains primary interactive functionality

(function() {
  'use strict';

  // ==========================================
  // Hamburger Menu Toggle
  // ==========================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a');

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
  }

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ==========================================
  // Smooth Scrolling
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // Intersection Observer for Fade-in Effects
  // ==========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections for fade-in effect
  document.querySelectorAll('.section, .card, .article-item').forEach(element => {
    observer.observe(element);
  });

  // ==========================================
  // Navigation Active Link Highlighting
  // ==========================================
  function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightActiveNavLink();
  window.addEventListener('hashchange', highlightActiveNavLink);

  // ==========================================
  // Articles Filter Chips
  // ==========================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const articleItems = document.querySelectorAll('.article-item');

  filterChips.forEach(chip => {
    chip.addEventListener('click', filterArticles);
  });

  function filterArticles(e) {
    const category = e.target.getAttribute('data-filter');

    // Update chip styling
    filterChips.forEach(chip => {
      chip.classList.remove('active');
    });
    e.target.classList.add('active');

    // Filter articles
    articleItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
        setTimeout(() => {
          item.classList.add('fade-in');
        }, 10);
      } else {
        item.style.display = 'none';
        item.classList.remove('fade-in');
      }
    });
  }

  // ==========================================
  // Form Validation
  // ==========================================
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
  }

  function validateForm(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');
    
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Validate name
    if (!name || name.value.trim() === '') {
      showError(name, 'Name is required');
      isValid = false;
    }

    // Validate email
    if (!email || !isValidEmail(email.value)) {
      showError(email, 'Valid email is required');
      isValid = false;
    }

    // Validate message
    if (!message || message.value.trim() === '') {
      showError(message, 'Message is required');
      isValid = false;
    }

    if (isValid) {
      // Form is valid - you can submit it
      console.log('Form is valid');
      // In a real application, you would submit the form to a server here
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    }
  }

  function showError(element, message) {
    if (element) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      element.parentElement.appendChild(errorDiv);
      element.style.borderColor = '#dc3545';
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // ==========================================
  // Smooth Scroll to Top Button
  // ==========================================
  const scrollTopBtn = document.querySelector('.scroll-to-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // Page Load Analytics
  // ==========================================
  window.addEventListener('load', () => {
    console.log('DRAMSOC website loaded successfully');
    // Track page view (you can replace with your analytics service)
    trackPageView();
  });

  function trackPageView() {
    const currentPage = window.location.pathname;
    console.log('Page view tracked: ' + currentPage);
  }

  // ==========================================
  // Keyboard Navigation Enhancement
  // ==========================================
  document.addEventListener('keydown', (e) => {
    // Close menu with Escape key
    if (e.key === 'Escape' && hamburger && hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

})();
