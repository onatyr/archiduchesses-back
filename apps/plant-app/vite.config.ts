import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "node:path";
import dotenv from 'dotenv';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': dotenv.config({ path: path.resolve(__dirname, '../../.env') })
    },
    build: {
        outDir: '../../dist/plant-app',
    },
});
