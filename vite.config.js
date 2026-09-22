import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Relative URLs work in local development and when deployed below /love/ on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
