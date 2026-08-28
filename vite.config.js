import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        newsletter: 'newsletter.html',
        startYourBrand: 'start-your-brand.html',
        socialEngine: 'social-engine.html',
        proposalKit: 'proposal-kit.html',
        portraitStudio: 'portrait-studio.html',
        growthRadar: 'growth-radar.html',
        digitalPresence: 'digital-presence.html',
      },
    },
  },
})
