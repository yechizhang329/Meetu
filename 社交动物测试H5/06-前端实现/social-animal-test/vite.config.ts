import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed as a subfolder of the Meetu GitHub Pages site:
//   https://yechizhang329.github.io/Meetu/social-animal-test/
// The base must match that subpath so all asset URLs are relative to it.
export default defineConfig({
  plugins: [react()],
  base: '/Meetu/social-animal-test/',
});
