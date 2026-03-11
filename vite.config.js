import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// [https://vite.dev/config/](https://vite.dev/config/)
export default defineConfig({
  base: '/', // Set to '/' for root domain deployments like sky-map-team.github.io
  plugins: [
    react(),
    tailwindcss(),
  ],
})
