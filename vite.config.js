import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
        'federal-diagnostic': resolve(__dirname, 'federal-diagnostic.html'),
        'federal-diagnostic-intake': resolve(__dirname, 'federal-diagnostic-intake.html'),
        'agency-alignment-blueprint-intake': resolve(__dirname, 'agency-alignment-blueprint-intake.html'),
        'agency-alignment-map-intake': resolve(__dirname, 'agency-alignment-map-intake.html'),
        article: resolve(__dirname, 'article.html'),
        intelligence: resolve(__dirname, 'intelligence.html'),
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
