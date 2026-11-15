import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(['index', 'about', 'services', 'industries', 'candidates', 'insights', 'contact'].map(page => [page, resolve(root, `${page}.html`)])),
    },
  },
})
