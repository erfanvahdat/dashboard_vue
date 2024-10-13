import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  server: {
    port: 5170, // Default port, you can change this later
    proxy: {
      '/api': {
        target: 'http://localhost:3005', // Your Express server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Rewrite path if needed
      }
    }
  }



})