# Script de déploiement Vercel pour WebcomFactory
# Exécutez ce script depuis PowerShell

Write-Host "🚀 Déploiement WebcomFactory sur Vercel..." -ForegroundColor Green

# Vérifier si Vercel CLI est installé
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI détecté: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI non installé. Installation..." -ForegroundColor Yellow
    npm install -g vercel
}

# Nettoyer le cache et les modules
Write-Host "🧹 Nettoyage du cache..." -ForegroundColor Blue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# Installer les dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Blue
npm install

# Build de production
Write-Host "🔨 Build de production..." -ForegroundColor Blue
npm run build:prod

# Vérifier que le build a réussi
if (Test-Path "dist") {
    Write-Host "✅ Build réussi !" -ForegroundColor Green
    
    # Déployer sur Vercel
    Write-Host "🚀 Déploiement sur Vercel..." -ForegroundColor Blue
    vercel --prod
    
    Write-Host "🎉 Déploiement terminé !" -ForegroundColor Green
    Write-Host "🌐 Vérifiez votre site sur Vercel" -ForegroundColor Cyan
} else {
    Write-Host "❌ Échec du build !" -ForegroundColor Red
    exit 1
}
