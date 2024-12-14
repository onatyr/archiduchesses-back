import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import * as path from "node:path";
import { config as dotenvConfig } from 'dotenv';
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),],
  define: {
    'process.env': dotenvConfig({path: path.resolve(__dirname, '../../.env')})
  },
  build: {
    emptyOutDir: true,
    outDir: '../../dist/plant-app',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
      '@shared': fileURLToPath(new URL('../shared/', import.meta.url)),
    },
  }
});