# 🚀 Déploiement Vercel - WebcomFactory

## 📋 Vue d'ensemble

Ce guide détaille le processus de déploiement de WebcomFactory sur Vercel, avec toutes les optimisations et configurations nécessaires.

## ✨ **Avantages du déploiement Vercel**

- **Performance** : CDN global et edge functions
- **Automatisation** : Déploiement automatique à chaque push
- **Scalabilité** : Infrastructure serverless
- **Analytics** : Métriques de performance intégrées
- **HTTPS** : Certificats SSL automatiques
- **Preview** : Déploiements de test pour chaque PR

## 🔧 **Prérequis**

### **1. Compte Vercel**
- Créer un compte sur [vercel.com](https://vercel.com)
- Connecter votre compte GitHub/GitLab/Bitbucket

### **2. Vercel CLI (optionnel)**
```bash
npm install -g vercel
```

### **3. Dépôt Git**
- Projet synchronisé avec GitHub/GitLab/Bitbucket
- Tous les fichiers de configuration présents

## 📁 **Fichiers de Configuration Vercel**

### **vercel.json**
- Configuration des routes et redirections
- Headers de sécurité et cache
- Configuration des builds

### **.vercelignore**
- Exclusion des fichiers de développement
- Optimisation de la taille du déploiement

### **env.production**
- Variables d'environnement de production
- Configuration SEO et analytics

## 🚀 **Méthodes de Déploiement**

### **Méthode 1: Interface Web Vercel (Recommandée)**

#### **Étape 1: Import du projet**
1. Aller sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquer sur "New Project"
3. Importer depuis votre dépôt Git
4. Sélectionner le dépôt WebcomFactory

#### **Étape 2: Configuration du projet**
```json
{
  "Framework Preset": "Vite",
  "Root Directory": "./",
  "Build Command": "npm run vercel-build",
  "Output Directory": "dist",
  "Install Command": "npm install"
}
```

#### **Étape 3: Variables d'environnement**
Ajouter dans l'interface Vercel :
```
NODE_ENV=production
VITE_APP_ENV=production
VITE_APP_URL=https://webcomfactory.com
VITE_GA_MEASUREMENT_ID=G-VOTREID
VITE_GTM_CONTAINER_ID=GTM-VOTREID
```

#### **Étape 4: Déploiement**
1. Cliquer sur "Deploy"
2. Attendre la fin du build
3. Vérifier le déploiement

### **Méthode 2: Vercel CLI**

#### **Étape 1: Connexion**
```bash
vercel login
```

#### **Étape 2: Déploiement initial**
```bash
vercel
```

#### **Étape 3: Déploiement en production**
```bash
vercel --prod
```

### **Méthode 3: Script PowerShell**

#### **Utilisation du script**
```powershell
.\deploy-vercel.ps1
```

## ⚙️ **Configuration Avancée**

### **Routes et Redirections**
```json
{
  "routes": [
    {
      "src": "/",
      "dest": "/index.html"
    },
    {
      "src": "/portfolio",
      "dest": "/portfolio.html"
    }
  ]
}
```

### **Headers de Sécurité**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### **Cache et Performance**
```json
{
  "headers": [
    {
      "source": "/(.*\\.(css|js|png|jpg|jpeg|gif|ico|svg))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 🔍 **Vérification du Déploiement**

### **1. Test des URLs**
- ✅ Page d'accueil : `https://votre-domaine.vercel.app/`
- ✅ Portfolio : `https://votre-domaine.vercel.app/portfolio`
- ✅ Politique : `https://votre-domaine.vercel.app/politique-confidentialite`
- ✅ Mentions : `https://votre-domaine.vercel.app/mentions-legales`

### **2. Test des fonctionnalités**
- ✅ Navigation responsive
- ✅ Formulaire de contact
- ✅ Système de cookies
- ✅ Modal portfolio
- ✅ Animations CSS

### **3. Test des performances**
- ✅ PageSpeed Insights
- ✅ Core Web Vitals
- ✅ Lighthouse Audit
- ✅ Vercel Analytics

## 📊 **Monitoring et Analytics**

### **Vercel Analytics**
- Métriques de performance
- Core Web Vitals
- Erreurs et logs
- Utilisation des ressources

### **Google Analytics**
- Configuration automatique
- Tracking des conversions
- Rapports de performance

### **Google Search Console**
- Indexation des pages
- Performance SEO
- Erreurs de crawl

## 🔄 **Déploiement Automatique**

### **Configuration GitHub Actions**
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### **Webhooks Vercel**
- Déclenchement automatique
- Notifications Slack/Discord
- Intégration CI/CD

## 🚨 **Résolution des Problèmes**

### **Erreurs de Build**
```bash
# Vérifier les dépendances
npm install

# Nettoyer le cache
npm run clean

# Build en mode debug
npm run build -- --debug
```

### **Erreurs de Déploiement**
```bash
# Vérifier la configuration
vercel --debug

# Logs de déploiement
vercel logs

# Rollback vers une version précédente
vercel rollback
```

### **Problèmes de Performance**
- Vérifier la taille des images
- Optimiser le CSS et JS
- Utiliser le lazy loading
- Configurer le cache

## 📈 **Optimisations Post-Déploiement**

### **1. Domaines personnalisés**
- Ajouter `webcomfactory.com`
- Configuration DNS
- Certificats SSL

### **2. CDN et Edge Functions**
- Configuration des régions
- Optimisation des assets
- Cache intelligent

### **3. Monitoring avancé**
- Alertes de performance
- Surveillance des erreurs
- Métriques business

## 🎯 **Prochaines Étapes**

### **Court terme (1-2 semaines)**
1. **Premier déploiement** sur Vercel
2. **Configuration** des domaines personnalisés
3. **Test** de toutes les fonctionnalités
4. **Monitoring** des performances

### **Moyen terme (1-2 mois)**
1. **Automatisation** des déploiements
2. **Optimisation** des performances
3. **Configuration** des analytics
4. **Tests** de charge

### **Long terme (3+ mois)**
1. **Edge Functions** pour la logique métier
2. **A/B Testing** avec Vercel
3. **Internationalisation** (i18n)
4. **PWA** et fonctionnalités avancées

---

**Version** : 1.0  
**Dernière mise à jour** : 25 août 2024  
**Statut** : ✅ Prêt pour le déploiement  
**Prochaine révision** : Après le premier déploiement
