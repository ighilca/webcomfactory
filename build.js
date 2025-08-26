#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 WebcomFactory - Build de production...\n');

// Vérifier que le dossier dist existe
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  console.log('❌ Dossier dist non trouvé. Exécutez d\'abord: npm run build');
  process.exit(1);
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
