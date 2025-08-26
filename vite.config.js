import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  
  // Configuration serveur de développement
  server: {
    port: 3000,
    open: true
  },
  
  // Configuration pour la production
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vite']
        }
      }
    }
  },
  
  // Préfixe des assets pour Vercel
  base: '/',
  
  // Optimisations de performance
  optimizeDeps: {
    include: ['vite']
  }
})
