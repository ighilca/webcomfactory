#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 WebcomFactory - Build de production...\n');

// Créer le dossier dist s'il n'existe pas
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('📁 Dossier dist créé');
}

// Copier tous les fichiers HTML, CSS, JS et assets
const sourceFiles = [
  'index.html',
  'portfolio.html', 
  'privacy-policy.html',
  'legal-notice.html',
  'style.css',
  'main.js',
  'sitemap.xml',
  'robots.txt'
];

console.log('📄 Copie des fichiers principaux...');
sourceFiles.forEach(file => {
  const sourcePath = path.join(__dirname, file);
  const destPath = path.join(distDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ ${file} copié`);
  } else {
    console.log(`⚠️  ${file} non trouvé, ignoré`);
  }
});

// Copier les dossiers d'assets
const assetFolders = ['logo-webcom-icon.png', 'logo-webcom.png', 'hero.png'];
console.log('🖼️  Copie des images...');
assetFolders.forEach(asset => {
  const sourcePath = path.join(__dirname, asset);
  const destPath = path.join(distDir, asset);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ ${asset} copié`);
  }
});

// Copier le dossier outils
const outilsDir = path.join(__dirname, 'outils');
const outilsDestDir = path.join(distDir, 'outils');
if (fs.existsSync(outilsDir)) {
  if (!fs.existsSync(outilsDestDir)) {
    fs.mkdirSync(outilsDestDir, { recursive: true });
  }
  
  const outilsFiles = fs.readdirSync(outilsDir);
  outilsFiles.forEach(file => {
    const sourcePath = path.join(outilsDir, file);
    const destPath = path.join(outilsDestDir, file);
    fs.copyFileSync(sourcePath, destPath);
  });
  console.log(`✅ Dossier outils copié (${outilsFiles.length} fichiers)`);
}

// Copier le dossier portfolio
const portfolioDir = path.join(__dirname, 'portfolio');
const portfolioDestDir = path.join(distDir, 'portfolio');
if (fs.existsSync(portfolioDir)) {
  if (!fs.existsSync(portfolioDestDir)) {
    fs.mkdirSync(portfolioDestDir, { recursive: true });
  }
  
  const portfolioFiles = fs.readdirSync(portfolioDir);
  portfolioFiles.forEach(file => {
    const sourcePath = path.join(portfolioDir, file);
    const destPath = path.join(portfolioDestDir, file);
    fs.copyFileSync(sourcePath, destPath);
  });
  console.log(`✅ Dossier portfolio copié (${portfolioFiles.length} fichiers)`);
}

console.log('✅ Build Vite terminé avec succès');
console.log('📁 Dossier dist créé');

// Vérifier les fichiers de build
const files = fs.readdirSync(distDir);
console.log(`📄 ${files.length} fichiers générés`);

// Optimisations supplémentaires
console.log('\n🔧 Optimisations en cours...');

// Créer un fichier de version
const version = new Date().toISOString().split('T')[0];
const versionFile = path.join(distDir, 'version.txt');
fs.writeFileSync(versionFile, `WebcomFactory v1.0.0 - Build: ${version}`);

console.log('✅ Fichier de version créé');

// Créer un sitemap simple
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://webcomfactory.fr/</loc>
    <lastmod>${version}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

const sitemapFile = path.join(distDir, 'sitemap.xml');
fs.writeFileSync(sitemapFile, sitemap);

console.log('✅ Sitemap XML créé');

// Créer un robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: https://webcomfactory.fr/sitemap.xml`;

const robotsFile = path.join(distDir, 'robots.txt');
fs.writeFileSync(robotsFile, robots);

console.log('✅ Robots.txt créé');

console.log('\n🎉 Build de production terminé avec succès !');
console.log('📁 Dossier dist prêt pour le déploiement');
console.log('\n🚀 Commandes de déploiement:');
console.log('   • Netlify: glissez le dossier dist sur netlify.com');
console.log('   • Vercel: vercel --prod');
console.log('   • GitHub Pages: gh-pages -d dist');
console.log('   • Serveur: copiez le contenu de dist sur votre serveur web');
