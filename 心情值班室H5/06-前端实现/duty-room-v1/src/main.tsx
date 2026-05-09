import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/reset.css';
import './styles/app.css';
import { activeTheme } from './config/theme';

const root = document.getElementById('root');
if (!root) throw new Error('root element missing');

// task #24: inject theme tokens as CSS vars at :root BEFORE React mounts so
// page CSS never sees a "no-theme" flash. When `ACTIVE_THEME_ID` flips, all
// CSS vars flip in one place.
(function applyTheme() {
  const el = document.documentElement;
  for (const [key, value] of Object.entries(activeTheme.cssVars)) {
    el.style.setProperty(`--theme-${kebab(key)}`, value);
  }
  el.dataset.theme = activeTheme.id;
})();

function kebab(s: string): string {
  return s.replace(/([A-Z])/g, '-$1').toLowerCase();
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
