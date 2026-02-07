// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Animations - Fade in on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .product-card, .service-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Form Validation and Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[name="name"]').value.trim();
    const phone = this.querySelector('input[name="phone"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();

    // Validation
    if (!name) {
      showFormMessage('Please enter your name', 'error');
      return;
    }

    if (!message) {
      showFormMessage('Please enter a message', 'error');
      return;
    }

    // Phone validation (optional field but validate if provided)
    if (phone && !isValidPhone(phone)) {
      showFormMessage('Please enter a valid phone number', 'error');
      return;
    }

    // Show success message
    showFormMessage('Thank you! We will get back to you soon.', 'success');

    // Open mailto as fallback
    const mailtoLink = `mailto:aain.canada@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}${phone ? '%0A%0APhone: ' + encodeURIComponent(phone) : ''}`;
    window.location.href = mailtoLink;

    // Reset form
    this.reset();
  });
}

function isValidPhone(phone) {
  // Basic phone validation - allows various formats
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function showFormMessage(message, type) {
  // Remove existing message
  const existingMsg = document.querySelector('.form-message');
  if (existingMsg) existingMsg.remove();

  // Create new message
  const msgDiv = document.createElement('div');
  msgDiv.className = `form-message ${type}`;
  msgDiv.textContent = message;

  contactForm.insertBefore(msgDiv, contactForm.firstChild);

  // Auto-remove after 5 seconds
  setTimeout(() => msgDiv.remove(), 5000);
}

// Header scroll effect - add shadow on scroll
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Animate numbers (for any stats if added)
function animateNumber(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = Math.round(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current);
    }
  }, 16);
}

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Add current year to footer if needed
const yearElements = document.querySelectorAll('.current-year');
if (yearElements.length > 0) {
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);
}

// Alert for age-restricted products (tobacco, lottery)
const ageRestrictedLinks = document.querySelectorAll('[data-age-restricted]');
ageRestrictedLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const ageLimit = link.dataset.ageRestricted;
    if (!confirm(`This product requires age verification (${ageLimit}+). Are you of legal age?`)) {
      e.preventDefault();
    }
  });
});
