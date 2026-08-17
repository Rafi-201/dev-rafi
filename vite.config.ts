import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths keep the build working on a GitHub Pages project subpath
  // and on a custom domain without a rebuild.
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    // Default hashed filenames in dist/assets — needed for cache busting.
    outDir: 'dist',
  },
})
