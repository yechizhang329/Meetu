import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Two deploy targets:
// - GitHub Pages (default):  https://yechizhang329.github.io/Meetu/social-animal-test/
//                            base = '/Meetu/social-animal-test/'
// - Aliyun OSS / 自有域名 root: base = '/'
//
// Switch with `SA_DEPLOY_TARGET=oss npm run build` (or use `npm run build:oss`).
const target = process.env.SA_DEPLOY_TARGET ?? 'gh-pages';
const base = target === 'oss' ? '/' : '/Meetu/social-animal-test/';

export default defineConfig({
  plugins: [react()],
  base,
});
