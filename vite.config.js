import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` must match your GitHub repo name exactly (case included).
// If you deploy to <username>.github.io (a user site), change it to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
});
