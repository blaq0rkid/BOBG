import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        intelligence: resolve(__dirname, 'intelligence.html'),
        contact: resolve(__dirname, 'contact.html'),
        article: resolve(__dirname, 'article.html'),
        'federal-market-snapshot-intake': resolve(__dirname, 'federal-market-snapshot-intake.html'),
        'black-orchid-blueprint-intake': resolve(__dirname, 'black-orchid-blueprint-intake.html'),
        'agency-alignment-map-intake': resolve(__dirname, 'agency-alignment-map-intake.html'),
        'thank-you': resolve(__dirname, 'thank-you.html')
      }
    }
  }
})
