import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/sugar-calculator/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: '설탕양 계산기',
        short_name: '설탕양 계산기',
        description: 'A simple app to calculate sugar intake.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'h-icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'h-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
})
