# 📧 Configuration EmailJS - WebcomFactory

## 🎯 **Vue d'ensemble**

Ce guide vous explique comment configurer EmailJS pour permettre l'envoi d'emails directement depuis le formulaire de contact de votre site WebcomFactory, sans avoir besoin d'un backend.

## ✨ **Avantages d'EmailJS**

- **Pas de backend** : Envoi d'emails directement depuis le navigateur
- **Gratuit** : 200 emails/mois gratuits
- **Facile à configurer** : Interface web intuitive
- **Sécurisé** : Clés d'API et validation
- **Templates** : Emails personnalisables
- **Intégration** : Compatible avec tous les services d'email

## 🔧 **Étapes de Configuration**

### **1. Créer un compte EmailJS**

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez votre compte
3. Vérifiez votre email et connectez-vous

### **2. Créer un Service Email**

1. Dans votre dashboard, cliquez sur "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email :
   - **Gmail** (recommandé pour commencer)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Autres services SMTP**

#### **Configuration Gmail :**
- **Service Name** : `webcomfactory_gmail`
- **Gmail** : Votre adresse Gmail
- **Password** : Votre mot de passe Gmail
- **Template ID** : `template_webcomfactory_contact`

### **3. Créer un Template d'Email**

1. Cliquez sur "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez votre template :

#### **Template Recommandé :**
```html
<h2>Nouveau message de contact - WebcomFactory</h2>

<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{from_email}}</p>
<p><strong>Téléphone :</strong> {{from_phone}}</p>
<p><strong>Message :</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Ce message a été envoyé depuis le formulaire de contact de webcomfactory.com</em></p>
```

#### **Variables du Template :**
- `{{from_name}}` : Nom de l'expéditeur
- `{{from_email}}` : Email de l'expéditeur
- `{{from_phone}}` : Téléphone de l'expéditeur
- `{{message}}` : Message de l'expéditeur
- `{{subject}}` : Sujet de l'email

### **4. Récupérer vos Identifiants**

1. **Service ID** : Copiez l'ID de votre service email
2. **Template ID** : Copiez l'ID de votre template
3. **Public Key** : Copiez votre clé publique depuis "Account" > "API Keys"

### **5. Configurer le Fichier emailjs-config.js**

Remplacez les valeurs dans `emailjs-config.js` :

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'service_webcomfactory_gmail',        // Votre Service ID
  templateId: 'template_webcomfactory_contact',    // Votre Template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE',               // Votre Public Key
  
  fromName: 'WebcomFactory Contact',
  toEmail: 'hello@webcomfactory.com',
  subject: 'Nouveau message de contact - WebcomFactory'
};
```

## 🚀 **Test de la Configuration**

### **1. Test Local**
1. Ouvrez la console de votre navigateur
2. Remplissez le formulaire de contact
3. Soumettez le formulaire
4. Vérifiez les logs dans la console

### **2. Test en Production**
1. Déployez sur Vercel
2. Testez le formulaire en production
3. Vérifiez la réception des emails

## 📋 **Structure des Fichiers**

```
webcom/
├── index.html              # Formulaire de contact
├── emailjs-config.js       # Configuration EmailJS
├── main.js                 # Gestion du formulaire
└── EMAILJS_SETUP.md        # Ce guide
```

## 🔍 **Dépannage**

### **Erreur "EmailJS not loaded"**
- Vérifiez que le CDN EmailJS est chargé
- Vérifiez l'ordre des scripts dans index.html

### **Erreur "Service not found"**
- Vérifiez votre Service ID
- Vérifiez que le service est actif

### **Erreur "Template not found"**
- Vérifiez votre Template ID
- Vérifiez que le template est publié

### **Erreur "Invalid public key"**
- Vérifiez votre Public Key
- Vérifiez que la clé est active

## 📊 **Monitoring et Analytics**

### **EmailJS Dashboard**
- Suivi des emails envoyés
- Statistiques d'utilisation
- Logs d'erreurs

### **Console Browser**
- Logs de succès/erreur
- Validation des données
- Performance d'envoi

## 🔒 **Sécurité**

### **Bonnes Pratiques**
- **Ne partagez jamais** votre clé privée
- **Limitez** l'utilisation de votre clé publique
- **Validez** toutes les données côté client
- **Surveillez** l'utilisation de votre compte

### **Limitations**
- **200 emails/mois** gratuits
- **Validation côté client** uniquement
- **Pas de protection anti-spam** avancée

## 📈 **Optimisations**

### **Performance**
- **Lazy loading** d'EmailJS
- **Validation** avant envoi
- **Gestion d'erreurs** robuste

### **UX**
- **Feedback visuel** pendant l'envoi
- **Messages d'erreur** clairs
- **Confirmation** de succès

## 🎯 **Prochaines Étapes**

### **Court terme**
1. **Configurer** EmailJS avec vos identifiants
2. **Tester** en local
3. **Déployer** sur Vercel

### **Moyen terme**
1. **Personnaliser** le template d'email
2. **Ajouter** des champs supplémentaires
3. **Optimiser** la validation

### **Long terme**
1. **Analytics** des formulaires
2. **A/B testing** des templates
3. **Intégration** CRM

---

**Version** : 1.0  
**Dernière mise à jour** : 25 août 2024  
**Statut** : ✅ Configuration complète  
**Prochaine révision** : Après la première utilisation
