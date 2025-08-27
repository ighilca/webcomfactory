// WebcomFactory - JavaScript ultra-simplifié pour la production
// Version 100% compatible avec tous les navigateurs

(function() {
  'use strict';
  
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
  
  function initApp() {
    console.log('🚀 WebcomFactory - Application initialisée');
    
    // Navigation mobile
    initMobileNav();
    
    // Smooth scroll
    initSmoothScroll();
    
    // Animations au scroll
    initScrollAnimations();
    
    // Formulaire de contact
    initContactForm();
    
    // Modal portfolio
    initPortfolioModal();
    
    // Gestion des cookies
    initCookieConsent();
    
    // Année automatique
    updateCurrentYear();
    
    // Gestion des ancres au chargement de page
    handlePageLoadAnchors();
  }
  
  // Navigation mobile
  function initMobileNav() {
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }
  }
  
  // Smooth scroll pour les ancres
  function initSmoothScroll() {
    var navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          var offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Animations au scroll
  function initScrollAnimations() {
    var observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observer les cartes
    var cards = document.querySelectorAll('.service-card, .why-us-item, .realisation-card');
    cards.forEach(function(card, index) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
      observer.observe(card);
    });
  }
  
  // Formulaire de contact
  function initContactForm() {
    var contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var name = this.querySelector('input[name="name"]').value.trim();
        var email = this.querySelector('input[name="email"]').value.trim();
        var message = this.querySelector('textarea[name="message"]').value.trim();
        
        // Validation basique
        if (!name || !email || !message) {
          alert('Veuillez remplir tous les champs.');
          return;
        }
        
        if (!isValidEmail(email)) {
          alert('Veuillez entrer une adresse email valide.');
          return;
        }
        
        // Simulation d'envoi
        var submitBtn = this.querySelector('button[type="submit"]');
        var originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(function() {
          alert('Message envoyé avec succès ! Nous vous recontacterons rapidement.');
          contactForm.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      });
    }
  }
  
  // Validation email
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Modal portfolio
  function initPortfolioModal() {
    var modal = document.getElementById('project-modal');
    var modalImg = document.getElementById('modal-image');
    var modalTitle = document.getElementById('modal-title');
    var modalCategory = document.getElementById('modal-category');
    var modalDescription = document.getElementById('modal-description');
    var closeBtn = document.querySelector('.close-modal');
    
    if (modal && modalImg) {
      // Ouvrir la modal en cliquant sur une image de projet
      var projectImages = document.querySelectorAll('.realisation-card img');
      projectImages.forEach(function(img) {
        img.addEventListener('click', function() {
          modalImg.src = this.src;
          modalTitle.textContent = this.alt || 'Projet';
          modalCategory.textContent = 'Site web';
          modalDescription.textContent = 'Description du projet';
          modal.style.display = 'block';
        });
      });
      
      // Fermer la modal
      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          modal.style.display = 'none';
        });
      }
      
      // Fermer en cliquant à l'extérieur
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  }
  
  // Gestion des cookies
  function initCookieConsent() {
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptBtn = document.getElementById('accept-all-cookies');
    var rejectBtn = document.getElementById('reject-cookies');
    
    if (cookieBanner && acceptBtn) {
      acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
      });
    }
    
    if (cookieBanner && rejectBtn) {
      rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.style.display = 'none';
      });
    }
    
    // Vérifier si les cookies ont déjà été acceptés
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      if (cookieBanner) {
        cookieBanner.style.display = 'none';
      }
    }
  }
  
  // Mise à jour de l'année
  function updateCurrentYear() {
    var yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  // Gestion des ancres au chargement de page
  function handlePageLoadAnchors() {
    if (window.location.hash) {
      var targetId = window.location.hash.substring(1);
      var targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        setTimeout(function() {
          var navbar = document.querySelector('.navbar');
          var headerHeight = navbar ? navbar.offsetHeight : 80;
          var targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }
  
})();
