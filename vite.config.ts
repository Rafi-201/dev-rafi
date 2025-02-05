import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensure all paths are relative (important for deployment)
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs', // Output all files to the docs folder
    rollupOptions: {
      output: {
        // This ensures that files will be placed directly in the docs folder, not in subfolders
        assetFileNames: '[name][extname]', // Directly place assets in docs folder
        chunkFileNames: '[name].js', // Directly place chunked JS in docs folder
        entryFileNames: '[name].js', // Directly place entry JS in docs folder
      }
    },
  }
})
