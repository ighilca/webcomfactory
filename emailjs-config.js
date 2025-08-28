// Configuration EmailJS pour WebcomFactory
// Ce fichier contient la configuration pour l'envoi d'emails via EmailJS

// Configuration EmailJS
const EMAILJS_CONFIG = {
  // Remplacez par vos vrais IDs EmailJS
  serviceId: 'service_webcomfactory', // ID de votre service EmailJS
  templateId: 'template_webcomfactory_contact', // ID de votre template
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // Votre clé publique EmailJS
  
  // Configuration des emails
  fromName: 'WebcomFactory Contact',
  toEmail: 'hello@webcomfactory.com',
  subject: 'Nouveau message de contact - WebcomFactory'
};

// Initialisation d'EmailJS
function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('✅ EmailJS initialisé avec succès');
  } else {
    console.error('❌ EmailJS non chargé');
  }
}

// Fonction d'envoi d'email
async function sendEmail(formData) {
  try {
    // Préparation des paramètres du template
    const templateParams = {
      from_name: formData.name || 'Anonyme',
      from_email: formData.email || 'Aucun email',
      from_phone: formData.phone || 'Aucun téléphone',
      message: formData.message || 'Aucun message',
      to_name: 'WebcomFactory',
      to_email: EMAILJS_CONFIG.toEmail,
      subject: EMAILJS_CONFIG.subject,
      reply_to: formData.email || 'noreply@webcomfactory.com'
    };

    // Envoi de l'email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('✅ Email envoyé avec succès:', response);
    return { success: true, message: 'Email envoyé avec succès !' };

  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    return { 
      success: false, 
      message: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
    };
  }
}

// Fonction de validation des données du formulaire
function validateContactForm(formData) {
  const errors = [];

  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push('Veuillez entrer une adresse email valide');
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }

  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

// Validation d'email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Export des fonctions pour utilisation globale
window.EmailJSConfig = {
  initEmailJS,
  sendEmail,
  validateContactForm,
  isValidEmail,
  EMAILJS_CONFIG
};

// Initialisation automatique quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
  initEmailJS();
});

// Instructions de configuration
console.log(`
📧 Configuration EmailJS - WebcomFactory

Pour configurer EmailJS :

1. Créez un compte sur https://www.emailjs.com/
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Remplacez dans ce fichier :
   - serviceId: 'VOTRE_SERVICE_ID'
   - templateId: 'VOTRE_TEMPLATE_ID'
   - publicKey: 'VOTRE_CLE_PUBLIQUE'

Template recommandé :
- Nom: {{from_name}}
- Email: {{from_email}}
- Téléphone: {{from_phone}}
- Message: {{message}}
- Sujet: {{subject}}
`);
