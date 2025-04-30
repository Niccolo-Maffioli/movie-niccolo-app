import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'html',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    target: 'esnext',
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'html/index.html'),
      },
    },
  },
});
