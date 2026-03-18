import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/testing-task-1/',
  server: {
    proxy: {
      '/api': {
        target: 'https://jetlend.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  }
});