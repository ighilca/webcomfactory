# Script de déploiement Vercel pour WebcomFactory
# Utilisation: .\deploy-vercel.ps1

Write-Host "🚀 Déploiement WebcomFactory sur Vercel" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green

# Vérifier que Vercel CLI est installé
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI détecté: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI non installé. Installation..." -ForegroundColor Red
    npm install -g vercel
}

# Nettoyer les builds précédents
Write-Host "🧹 Nettoyage des builds précédents..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
    Write-Host "✅ Dossier dist supprimé" -ForegroundColor Green
}

# Installation des dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
npm install

# Build de production
Write-Host "🔨 Build de production..." -ForegroundColor Yellow
npm run build:prod

# Vérifier que le build a réussi
if (Test-Path "dist") {
    Write-Host "✅ Build réussi dans le dossier dist" -ForegroundColor Green
} else {
    Write-Host "❌ Échec du build" -ForegroundColor Red
    exit 1
}

# Déploiement sur Vercel
Write-Host "🚀 Déploiement sur Vercel..." -ForegroundColor Yellow
Write-Host "⚠️  Assurez-vous d'être connecté à Vercel (vercel login)" -ForegroundColor Yellow

# Demander confirmation
$confirmation = Read-Host "Continuer le déploiement ? (y/N)"
if ($confirmation -eq "y" -or $confirmation -eq "Y") {
    vercel --prod
} else {
    Write-Host "❌ Déploiement annulé" -ForegroundColor Red
}

Write-Host "✅ Script terminé" -ForegroundColor Green
