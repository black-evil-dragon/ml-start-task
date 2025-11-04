import { defineConfig } from 'vite'


import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


import path from "path";

const DEBUG = process.env.NODE_ENV == 'development';

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

      "@styles": path.resolve(__dirname, "./src/app/styles"),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css']
  },



  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),

    ViteImageOptimizer({
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80, lossless: false },
      svg: {}
    }),
    
  ],



  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `          
          @use "@app/styles/globals.scss" as *;
        `
      }
    },
    modules: {
      generateScopedName: DEBUG ? '[name]__[local]' : '[hash:base64:8]',
      localsConvention: 'camelCase'
    },
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
    },
  },
})
