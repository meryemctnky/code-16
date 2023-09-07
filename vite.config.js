import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    }),
  ],
  optimizeDeps: {
    include: ['./src/main.js'],
  },
});
