// Import du CSS
import './style.css'

// Gestion de la navigation mobile
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Navigation smooth scroll
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Ajustement pour la navbar fixe
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animation de la navbar au scroll
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  });

  // Animation des éléments au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observer les cartes de services
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Observer les éléments "pourquoi nous"
  const whyUsItems = document.querySelectorAll('.why-us-item');
  whyUsItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Observer les cartes de réalisations
  const realisationCards = document.querySelectorAll('.realisation-card');
  realisationCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Gestion des formulaires
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Récupération des données du formulaire
      const formData = new FormData(this);
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;
      
      // Validation basique
      if (!name || !email || !message) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
      }
      
      // Tracking SEO - Envoi du formulaire
      if (window.SEOConfig && window.SEOConfig.trackContactForm) {
        window.SEOConfig.trackContactForm({ name, email, message });
      }
      
      // Simulation d'envoi
      showNotification('Envoi en cours...', 'info');
      
      setTimeout(() => {
        showNotification('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.', 'success');
        this.reset();
      }, 2000);
    });
  }

  // Gestion des boutons CTA
  const ctaButtons = document.querySelectorAll('.cta-primary:not(.portfolio-link), .cta-secondary-btn, .cta-final');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Scroll vers le formulaire de contact
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Gestion du téléchargement du guide
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showNotification('Téléchargement du guide en cours...', 'info');
      
      // Simulation de téléchargement
      setTimeout(() => {
        showNotification('Guide téléchargé avec succès !', 'success');
      }, 1500);
    });
  }

  // Animation des engrenages au hover
  const digitalGears = document.querySelector('.digital-gears');
  if (digitalGears) {
    digitalGears.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    
    digitalGears.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }

  // Effet parallaxe subtil sur le hero
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }
});

// Fonctions utilitaires
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
  // Supprimer les notifications existantes
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Créer la notification
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Styles de la notification
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  `;
  
  // Couleurs selon le type
  switch(type) {
    case 'success':
      notification.style.background = '#38a169';
      break;
    case 'error':
      notification.style.background = '#e53e3e';
      break;
    case 'info':
      notification.style.background = '#3182ce';
      break;
    default:
      notification.style.background = '#3182ce';
  }
  
  // Ajouter au DOM
  document.body.appendChild(notification);
  
  // Animation d'entrée
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto-suppression
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Animation des statistiques
function animateNumbers() {
  const statsElements = document.querySelectorAll('.stat-number');
  statsElements.forEach(element => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 secondes
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 16);
  });
}

// Lazy loading des images (pour les futures optimisations)
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Gestion du menu mobile responsive
function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Animation des barres du hamburger
      const spans = this.querySelectorAll('span');
      if (this.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Fermer le menu en cliquant sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
}

// Initialisation des fonctionnalités
document.addEventListener('DOMContentLoaded', function() {
  // Masquer le spinner et afficher le contenu progressivement
  hideLoadingSpinner();
  
  initMobileMenu();
  lazyLoadImages();
  
  // Animation des engrenages au chargement
  setTimeout(() => {
    const gears = document.querySelectorAll('.gear-large, .gear-medium, .gear-small');
    gears.forEach(gear => {
      gear.style.opacity = '0.3';
    });
  }, 500);
  
  // Initialisation de la modale des projets portfolio
  initPortfolioModal();
  
  // Initialisation du système de gestion des cookies
  initCookieConsent();
});

// Fonction pour masquer le spinner et afficher le contenu progressivement
function hideLoadingSpinner() {
  const spinner = document.getElementById('loading-spinner');
  const sections = document.querySelectorAll('.navbar, .hero, .services, .why-us, .tools-section, .realisations, .contact, .footer');
  
  // Masquer le spinner
  if (spinner) {
    spinner.classList.add('hidden');
  }
  
  // Afficher les sections progressivement
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('loaded');
    }, index * 100); // Délai progressif de 100ms entre chaque section
  });
}

// Système de gestion des cookies et consentement
function initCookieConsent() {
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieModal = document.getElementById('cookie-modal');
  const cookieSettingsBtn = document.getElementById('cookie-settings-btn');
  
  // Vérifier si l'utilisateur a déjà fait un choix
  const cookieConsent = getCookieConsent();
  
  if (!cookieConsent) {
    // Afficher le banner si aucun choix n'a été fait
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 1000);
  } else {
    // Masquer le banner et afficher le bouton de gestion
    cookieBanner.style.display = 'none';
    cookieSettingsBtn.style.display = 'block';
  }
  
  // Gestionnaire pour accepter tous les cookies
  document.getElementById('accept-all-cookies').addEventListener('click', function() {
    const consent = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true,
      timestamp: Date.now()
    };
    setCookieConsent(consent);
    hideCookieBanner();
    showCookieSettingsButton();
    showNotification('Tous les cookies ont été acceptés.', 'success');
  });
  
  // Gestionnaire pour refuser les cookies non-essentiels
  document.getElementById('reject-cookies').addEventListener('click', function() {
    const consent = {
      essential: true,
      analytics: false,
      preferences: false,
      marketing: false,
      timestamp: Date.now()
    };
    setCookieConsent(consent);
    hideCookieBanner();
    showCookieSettingsButton();
    showNotification('Seuls les cookies essentiels ont été acceptés.', 'info');
  });
  
  // Gestionnaire pour personnaliser les cookies
  document.getElementById('customize-cookies').addEventListener('click', function() {
    openCookieModal();
  });
  
  // Gestionnaire pour ouvrir la modal depuis le bouton de gestion
  cookieSettingsBtn.addEventListener('click', function() {
    openCookieModal();
  });
  
  // Gestionnaire pour fermer la modal
  document.getElementById('close-cookie-modal').addEventListener('click', function() {
    closeCookieModal();
  });
  
  // Gestionnaire pour sauvegarder les préférences
  document.getElementById('save-cookie-preferences').addEventListener('click', function() {
    saveCookiePreferences();
  });
  
  // Gestionnaire pour accepter tous les cookies depuis la modal
  document.getElementById('accept-all-cookies-modal').addEventListener('click', function() {
    const consent = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true,
      timestamp: Date.now()
    };
    setCookieConsent(consent);
    closeCookieModal();
    showNotification('Tous les cookies ont été acceptés.', 'success');
  });
  
  // Fermer la modal en cliquant en dehors
  cookieModal.addEventListener('click', function(e) {
    if (e.target === cookieModal) {
      closeCookieModal();
    }
  });
  
  // Fermer la modal avec la touche Échap
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cookieModal.classList.contains('show')) {
      closeCookieModal();
    }
  });
  
  // Charger les préférences actuelles dans la modal
  loadCookiePreferences();
}

// Fonctions utilitaires pour la gestion des cookies
function getCookieConsent() {
  const consent = localStorage.getItem('webcomfactory_cookie_consent');
  return consent ? JSON.parse(consent) : null;
}

function setCookieConsent(consent) {
  localStorage.setItem('webcomfactory_cookie_consent', JSON.stringify(consent));
  
  // Appliquer les préférences
  applyCookiePreferences(consent);
}

function applyCookiePreferences(consent) {
  if (consent.analytics) {
    // Activer Google Analytics ou autres outils d'analyse
    console.log('Analytics cookies activés');
  }
  
  if (consent.preferences) {
    // Activer les cookies de préférences
    console.log('Preference cookies activés');
  }
  
  if (consent.marketing) {
    // Activer les cookies marketing
    console.log('Marketing cookies activés');
  }
  
  // Les cookies essentiels sont toujours activés
  console.log('Essential cookies toujours activés');
}

function hideCookieBanner() {
  const cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.classList.remove('show');
  setTimeout(() => {
    cookieBanner.style.display = 'none';
  }, 300);
}

function showCookieSettingsButton() {
  const cookieSettingsBtn = document.getElementById('cookie-settings-btn');
  cookieSettingsBtn.style.display = 'block';
}

function openCookieModal() {
  const cookieModal = document.getElementById('cookie-modal');
  cookieModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCookieModal() {
  const cookieModal = document.getElementById('cookie-modal');
  cookieModal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

function loadCookiePreferences() {
  const consent = getCookieConsent();
  if (consent) {
    document.getElementById('analytics-cookies').checked = consent.analytics;
    document.getElementById('preference-cookies').checked = consent.preferences;
    document.getElementById('marketing-cookies').checked = consent.marketing;
  } else {
    // Valeurs par défaut
    document.getElementById('analytics-cookies').checked = false;
    document.getElementById('preference-cookies').checked = false;
    document.getElementById('marketing-cookies').checked = false;
  }
}

function saveCookiePreferences() {
  const consent = {
    essential: true,
    analytics: document.getElementById('analytics-cookies').checked,
    preferences: document.getElementById('preference-cookies').checked,
    marketing: document.getElementById('marketing-cookies').checked,
    timestamp: Date.now()
  };
  
  setCookieConsent(consent);
  closeCookieModal();
  showNotification('Vos préférences de cookies ont été enregistrées.', 'success');
}

// Fonctionnalité de modale pour le portfolio
function initPortfolioModal() {
  const projectModal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.querySelector('.close-modal');
  
  if (!projectModal) return; // Sortir si on n'est pas sur la page portfolio
  
  // Fonction pour ouvrir la modale
  function openProjectModal(imageSrc, title, category, description) {
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalDescription.textContent = description;
    
    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
  }
  
  // Fonction pour fermer la modale
  function closeProjectModal() {
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restaure le scroll de la page
  }
  
  // Ajouter les événements de clic sur les images des projets
  const portfolioImages = document.querySelectorAll('.portfolio-image img');
  
  portfolioImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      const portfolioItem = this.closest('.portfolio-item');
      const title = portfolioItem.querySelector('h3').textContent;
      const category = portfolioItem.querySelector('.project-category').textContent;
      const description = portfolioItem.querySelector('.project-description').textContent;
      
      openProjectModal(this.src, title, category, description);
    });
  });
  
  // Fermer la modale en cliquant sur le bouton de fermeture
  if (closeModal) {
    closeModal.addEventListener('click', closeProjectModal);
  }
  
  // Fermer la modale en cliquant en dehors du contenu
  projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
  
  // Fermer la modale avec la touche Échap
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal.classList.contains('show')) {
      closeProjectModal();
    }
  });
}
