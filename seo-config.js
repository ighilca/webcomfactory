// Configuration SEO et Analytics pour WebcomFactory
// Ce fichier contient les configurations pour Google Analytics, Google Tag Manager et autres outils SEO

// Configuration Google Analytics 4
const GA_CONFIG = {
  measurementId: 'G-XXXXXXXXXX', // Remplacer par votre ID GA4
  debugMode: false,
  anonymizeIp: true,
  enableLinkId: true,
  allowAdFeatures: false
};

// Configuration Google Tag Manager
const GTM_CONFIG = {
  containerId: 'GTM-XXXXXXX', // Remplacer par votre ID GTM
  dataLayerName: 'dataLayer'
};

// Configuration des événements de conversion
const CONVERSION_EVENTS = {
  contactForm: 'contact_form_submit',
  portfolioView: 'portfolio_view',
  serviceClick: 'service_click',
  ctaClick: 'cta_click'
};

// Initialisation de Google Analytics 4
function initGoogleAnalytics() {
  if (typeof gtag !== 'undefined') {
    // Configuration de base
    gtag('config', GA_CONFIG.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: GA_CONFIG.anonymizeIp,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    
    // Événement de page vue
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_referrer: document.referrer
    });
  }
}

// Initialisation de Google Tag Manager
function initGoogleTagManager() {
  if (typeof dataLayer !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    
    // Configuration de base
    dataLayer.push({
      'event': 'gtm.js',
      'gtm.start': new Date().getTime()
    });
  }
}

// Tracking des événements de conversion
function trackConversionEvent(eventName, parameters = {}) {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: 'engagement',
      event_label: window.location.pathname,
      ...parameters
    });
  }
  
  // Google Tag Manager
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({
      'event': eventName,
      'event_category': 'engagement',
      'event_label': window.location.pathname,
      ...parameters
    });
  }
  
  // Console log pour le développement
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Event tracked:', eventName, parameters);
  }
}

// Tracking des formulaires de contact
function trackContactForm(formData) {
  trackConversionEvent(CONVERSION_EVENTS.contactForm, {
    form_type: 'contact',
    form_source: 'main_page',
    form_data: {
      has_name: !!formData.name,
      has_email: !!formData.email,
      has_phone: !!formData.phone,
      has_message: !!formData.message
    }
  });
}

// Tracking des clics sur les services
function trackServiceClick(serviceName) {
  trackConversionEvent(CONVERSION_EVENTS.serviceClick, {
    service_name: serviceName,
    service_category: 'web_services'
  });
}

// Tracking des clics sur les CTA
function trackCTAClick(ctaType, ctaLocation) {
  trackConversionEvent(CONVERSION_EVENTS.ctaClick, {
    cta_type: ctaType,
    cta_location: ctaLocation
  });
}

// Tracking des vues de portfolio
function trackPortfolioView(projectName) {
  trackConversionEvent(CONVERSION_EVENTS.portfolioView, {
    project_name: projectName,
    project_category: 'portfolio'
  });
}

// Configuration des cookies et consentement
function configureAnalyticsConsent(consent) {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': consent.analytics ? 'granted' : 'denied',
      'ad_storage': consent.marketing ? 'granted' : 'denied',
      'functionality_storage': consent.preferences ? 'granted' : 'denied'
    });
  }
}

// Export des fonctions pour utilisation globale
window.SEOConfig = {
  initGoogleAnalytics,
  initGoogleTagManager,
  trackConversionEvent,
  trackContactForm,
  trackServiceClick,
  trackCTAClick,
  trackPortfolioView,
  configureAnalyticsConsent,
  CONVERSION_EVENTS
};

// Initialisation automatique si le consentement est accordé
document.addEventListener('DOMContentLoaded', function() {
  const cookieConsent = localStorage.getItem('webcomfactory_cookie_consent');
  if (cookieConsent) {
    const consent = JSON.parse(cookieConsent);
    if (consent.analytics) {
      initGoogleAnalytics();
    }
    if (consent.marketing) {
      initGoogleTagManager();
    }
  }
});
