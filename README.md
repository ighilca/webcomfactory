# WebcomFactory - Landing Page

Une landing page moderne et professionnelle pour l'agence web WebcomFactory, construite avec Vite et des technologies web modernes.

## 🚀 Fonctionnalités

### Design & UX
- **Design moderne** avec une palette de couleurs professionnelle
- **Responsive design** optimisé pour tous les appareils
- **Animations fluides** et interactions engageantes
- **Logo animé** avec des engrenages digitaux en rotation
- **Navigation fixe** avec effet de transparence

### Sections de la Landing Page
1. **Hero Section** - Titre accrocheur avec CTA principal
2. **Services** - Présentation des 4 services principaux
3. **Pourquoi nous choisir** - Différenciateurs clés
4. **Réalisations** - Études de cas avec métriques
5. **Preuve sociale** - Logos clients et certifications
6. **CTA Secondaire** - Appel à l'action renforcé
7. **Ressources** - Guide téléchargeable et blog
8. **Contact** - Formulaire complet avec validation
9. **Footer** - Navigation et informations légales

### Interactivité
- **Smooth scroll** pour la navigation
- **Animations au scroll** avec Intersection Observer
- **Validation de formulaires** en temps réel
- **Notifications toast** pour le feedback utilisateur
- **Menu mobile responsive** avec animations
- **Effets hover** sur les éléments interactifs

## 🛠️ Technologies Utilisées

- **Vite** - Build tool moderne et rapide
- **HTML5** - Structure sémantique
- **CSS3** - Styles avec variables CSS et animations
- **JavaScript ES6+** - Interactivité et animations
- **Google Fonts** - Typographie Inter
- **CSS Grid & Flexbox** - Layouts modernes

## 📁 Structure du Projet

```
webcom/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── main.js             # JavaScript principal
├── package.json        # Dépendances et scripts
├── vite.config.js      # Configuration Vite
└── README.md           # Documentation
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la build de production
npm run preview
```

### Commandes Disponibles
- `npm run dev` - Lance le serveur de développement sur http://localhost:3000
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la build de production

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `:root` du CSS :
```css
:root {
  --primary-color: #e53e3e;      /* Rouge principal */
  --primary-dark: #c53030;       /* Rouge foncé */
  --secondary-color: #2d3748;    /* Gris foncé */
  --accent-color: #3182ce;       /* Bleu accent */
  --text-primary: #1a202c;       /* Texte principal */
  --text-secondary: #4a5568;     /* Texte secondaire */
}
```

### Contenu
- **Textes** : Modifiez le contenu dans `index.html`
- **Images** : Remplacez les placeholders par vos vraies images
- **Liens** : Mettez à jour les URLs dans le HTML et JavaScript

### Animations
- **Vitesse** : Ajustez les durées dans le CSS et JavaScript
- **Délais** : Modifiez les `transition-delay` pour les séquences
- **Effets** : Personnalisez les `transform` et `opacity`

## 📱 Responsive Design

La landing page est optimisée pour :
- **Desktop** : 1200px et plus
- **Tablet** : 768px - 1199px
- **Mobile** : 320px - 767px

### Breakpoints CSS
```css
@media (max-width: 768px) { /* Tablet et mobile */ }
@media (max-width: 480px) { /* Mobile uniquement */ }
```

## 🔧 Optimisations

### Performance
- **Lazy loading** des images (préparé pour le futur)
- **CSS optimisé** avec variables et réutilisation
- **JavaScript modulaire** avec gestion d'événements optimisée
- **Animations CSS** pour de meilleures performances

### SEO
- **Meta tags** complets
- **Structure HTML** sémantique
- **Alt text** pour les images
- **Titres** hiérarchisés

### Accessibilité
- **Navigation au clavier** supportée
- **Contraste** des couleurs optimisé
- **Labels** pour les formulaires
- **ARIA** labels préparés

## 🚀 Déploiement

### Production Build
```bash
npm run build:prod
```

Le dossier `dist/` contiendra tous les fichiers optimisés pour la production.

### Vercel (Recommandé) 🚀
**Configuration optimisée et prête pour le déploiement !**

#### Déploiement automatique :
1. **Prérequis** : Compte Vercel + dépôt Git connecté
2. **Configuration** : Vercel détecte automatiquement Vite
3. **Build Command** : `npm run vercel-build`
4. **Output Directory** : `dist`
5. **Déploiement** : Automatique à chaque push

#### Déploiement manuel :
```bash
# Installer Vercel CLI
npm install -g vercel

# Déploiement initial
vercel

# Déploiement en production
vercel --prod
```

#### Script PowerShell :
```powershell
.\deploy-vercel.ps1
```

#### Fichiers de configuration :
- **vercel.json** : Routes, headers, cache, sécurité
- **.vercelignore** : Exclusion des fichiers de développement
- **env.production** : Variables d'environnement
- **Scripts** : `vercel-build` optimisé

### Autres options d'hébergement :
- **Netlify** - Déploiement automatique depuis Git
- **GitHub Pages** - Gratuit pour les projets open source
- **Serveur web classique** - Apache/Nginx

## 📈 Analytics et Tracking

### Google Analytics
Ajoutez votre code GA dans le `<head>` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Formulaires
- **Validation côté client** implémentée
- **Préparation pour backend** (PHP, Node.js, etc.)
- **Intégration CRM** possible (HubSpot, Salesforce, etc.)

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche feature
3. Committez vos changements
4. Poussez vers la branche
5. Créez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 📞 Support

Pour toute question ou support :
- **Email** : contact@webcomfactory.fr
- **Site web** : https://webcomfactory.fr

---

**WebcomFactory** - Transformez vos idées en expériences digitales qui performent. 🚀
