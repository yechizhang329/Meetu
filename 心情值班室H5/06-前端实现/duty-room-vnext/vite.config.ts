import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vNext deploy target: GitHub Pages https://yechizhang329.github.io/Meetu/duty-room-vnext/
// base = '/Meetu/duty-room-vnext/'  (与 v1.x /Meetu/duty-room-v1/ 物理隔离)
const target = process.env.DEPLOY_TARGET ?? 'gh-pages';
const base = target === 'local' ? '/' : '/Meetu/duty-room-vnext/';

export default defineConfig({
  plugins: [react()],
  base,
});
