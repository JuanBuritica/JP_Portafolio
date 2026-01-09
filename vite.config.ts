
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change 'YOUR_REPO_NAME' to your actual repository name on GitHub
  // If your URL is https://username.github.io/my-portfolio/, base should be '/my-portfolio/'
  base: './', 
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
