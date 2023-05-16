import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~/': `${path.resolve(__dirname, './')}/`
    }
  },
  build: {
    assetsDir: 'static/img/',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 5000
  },
  server: {
    proxy: {
      '/daibi': {
        // target: 'http://microchat-fileservice.fiamichattest.com',
        changeOrigin: true
        // rewrite: path => path.replace(/^\/api/, '')
      },
    },
    host: '0.0.0.0' // 显示IP位置
  }
})
