// vNext hash router. Pattern reused from v1.x App.tsx parseHash/writeHash 思路 (工程能力, 不带产品假设).
// Routes: '#/' (intro), '#/scenes' (scene select), '#/result/<sceneId>' (result page)

import type { Scene } from '../data/types';
import { SCENE_BY_ID } from '../config/scenes.config';

export type Route =
  | { name: 'intro' }
  | { name: 'scenes' }
  | { name: 'result'; scene: Scene };

export function parseHash(): Route {
  const h = typeof window !== 'undefined' ? window.location.hash || '#/' : '#/';
  const m = h.match(/^#\/result\/([A-Za-z0-9_-]+)$/);
  if (m) {
    const s = SCENE_BY_ID[m[1]];
    if (s) return { name: 'result', scene: s };
    return { name: 'scenes' };
  }
  if (h === '#/scenes') return { name: 'scenes' };
  return { name: 'intro' };
}

export function writeHash(r: Route) {
  if (typeof window === 'undefined') return;
  switch (r.name) {
    case 'intro':
      window.location.hash = '#/';
      break;
    case 'scenes':
      window.location.hash = '#/scenes';
      break;
    case 'result':
      window.location.hash = `#/result/${r.scene.id}`;
      break;
  }
}
