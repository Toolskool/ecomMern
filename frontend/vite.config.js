import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://ecommern-wyll.onrender.com", //"http://localhost:5000"
      "/uploads/": "https://ecommern-wyll.onrender.com", //"http://localhost:5000"
    },
  },
});
