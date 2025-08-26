import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  base: './', // 👈 important for Render so paths work
})
