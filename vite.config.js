import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default {
  plugins: [react({
    babel: {
      plugins: [
        ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
      ]
    },
    include: [/\.jsx?$/, /\.tsx?$/]
  })],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  root: resolve(__dirname, 'frontend'),
  build: {
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, 'frontend/index.jsx')
    }
  },
};
