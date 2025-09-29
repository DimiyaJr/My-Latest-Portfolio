// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: "/My-Latest-Portfolio/",  // ❌ Remove this line for Vercel
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
