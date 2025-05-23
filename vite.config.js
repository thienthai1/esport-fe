import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import tailwindcss from 'tailwindcss'
// import { visualizer } from 'rollup-plugin-visualizer';

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      features : {
        customElement: true,
      }
    }),
    svgLoader(),
    // visualizer({ open: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  devServer: {
    proxy: {
      '/events': {
        target: 'https://honest-platform-socket.changyed.com',
        changeOrigin: true,
        secure: false,
        ws: true // Enable WebSocket proxying
      }
    }
  },
  build: {
    sourcemap: 'inline',
    rollupOptions: {
      output: {
        // Maintain original file names
        entryFileNames: 'soccer-app.js',
        format: 'iife'
      },
      external: ['postcss', 'url', 'source-map-js'],
    },
  },
  server: {
    port: 5174
  }
})
