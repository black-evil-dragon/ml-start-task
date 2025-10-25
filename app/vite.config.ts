import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";


// https://vite.dev/config/
export default defineConfig({

  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@app/styles/globals.scss" as *;`
      }
    }
  },


  build: {
    minify: 'esbuild',
    target: 'esnext',

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },

  
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  
})
