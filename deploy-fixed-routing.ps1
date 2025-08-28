# Script de déploiement pour corriger le routage WebcomFactory
# PowerShell Script - Déploiement Vercel

Write-Host "🚀 Déploiement WebcomFactory - Routage Corrigé" -ForegroundColor Cyan
Write-Host "===============================================" -ForegroundColor Cyan

# Vérifier que Vercel CLI est installé
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI détecté: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI non trouvé. Installation..." -ForegroundColor Red
    npm install -g vercel
}

# Vérifier le statut git
Write-Host "📋 Vérification du statut Git..." -ForegroundColor Yellow
git status

# Ajouter les fichiers modifiés
Write-Host "📁 Ajout des fichiers modifiés..." -ForegroundColor Yellow
git add vercel.json test-routing-fixed.html deploy-fixed-routing.ps1

# Commit des corrections
Write-Host "💾 Commit des corrections de routage..." -ForegroundColor Yellow
git commit -m "🔧 Correction du système de routage - Suppression de la règle de fallback problématique"

# Push vers le repository
Write-Host "🚀 Push vers le repository..." -ForegroundColor Yellow
git push

# Déploiement Vercel
Write-Host "🌐 Déploiement sur Vercel..." -ForegroundColor Yellow
Write-Host "⚠️  ATTENTION: Ce déploiement va corriger le problème de routage!" -ForegroundColor Red
Write-Host "📝 Toutes les pages devraient maintenant être accessibles normalement" -ForegroundColor Green

$confirmation = Read-Host "Continuer avec le déploiement? (y/N)"
if ($confirmation -eq "y" -or $confirmation -eq "Y") {
    Write-Host "🚀 Lancement du déploiement..." -ForegroundColor Green
    vercel --prod
} else {
    Write-Host "❌ Déploiement annulé" -ForegroundColor Red
    Write-Host "💡 Vous pouvez déployer manuellement avec: vercel --prod" -ForegroundColor Yellow
}

Write-Host "✅ Script terminé!" -ForegroundColor Green
Write-Host "🔗 Testez le routage sur: https://webcomfactory.vercel.app" -ForegroundColor Cyan
