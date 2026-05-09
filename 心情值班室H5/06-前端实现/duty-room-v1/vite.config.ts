import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prdGuard from './plugins/vite-plugin-prd-guard';

// Two deploy targets:
//   - GitHub Pages (default):  https://yechizhang329.github.io/Meetu/duty-room-v1/
//                              base = '/Meetu/duty-room-v1/'
//   - Aliyun OSS / 自有域名 root: base = '/'
const target = process.env.SA_DEPLOY_TARGET ?? 'gh-pages';
const base = target === 'oss' ? '/' : '/Meetu/duty-room-v1/';

export default defineConfig({
  plugins: [react(), prdGuard()],
  base,
});
