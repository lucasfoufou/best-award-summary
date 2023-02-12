import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~root': path.resolve(__dirname, '.'),
      '~src': path.resolve(__dirname, 'src'),
      '~utils': path.resolve(__dirname, 'src/utils'),
      '~style': path.resolve(__dirname, 'src/style'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~routes': path.resolve(__dirname, 'src/routes'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
    }
  },
  server: {
    port: 8030,
    strictPort: true,
    hmr: {
      clientPort: 443,
      port: 8030
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        fourofour: path.resolve(__dirname, '404.html'),
      },
    },
  },
  base: '/best-award-summary/',
});
