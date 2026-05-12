// vNext hash router. Pattern reused from v1.x App.tsx parseHash/writeHash 思路 (工程能力, 不带产品假设).
// Routes:
//   '#/'                      → P0 welcome
//   '#/scenes'                → P1 scene select
//   '#/role/<sceneId>'        → P2 role select (pick within scene.rolePool)
//   '#/result/<sceneId>/<roleId>' → P3 result page

import type { Scene, RoleId } from '../data/types';
import { SCENE_BY_ID } from '../config/scenes.config';

const ROLE_IDS: readonly RoleId[] = ['A', 'B', 'C', 'D', 'E'];
function isRoleId(s: string): s is RoleId {
  return (ROLE_IDS as readonly string[]).includes(s);
}

export type Route =
  | { name: 'welcome' }
  | { name: 'scenes' }
  | { name: 'role'; scene: Scene }
  | { name: 'result'; scene: Scene; roleId: RoleId };

export function parseHash(): Route {
  const h = typeof window !== 'undefined' ? window.location.hash || '#/' : '#/';
  let m: RegExpMatchArray | null;
  m = h.match(/^#\/result\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)$/);
  if (m) {
    const s = SCENE_BY_ID[m[1]];
    const r = m[2];
    if (s && isRoleId(r) && s.rolePool.includes(r)) return { name: 'result', scene: s, roleId: r };
    return { name: 'scenes' };
  }
  m = h.match(/^#\/role\/([A-Za-z0-9_-]+)$/);
  if (m) {
    const s = SCENE_BY_ID[m[1]];
    if (s) return { name: 'role', scene: s };
    return { name: 'scenes' };
  }
  if (h === '#/scenes') return { name: 'scenes' };
  return { name: 'welcome' };
}

export function writeHash(r: Route) {
  if (typeof window === 'undefined') return;
  switch (r.name) {
    case 'welcome':
      window.location.hash = '#/';
      break;
    case 'scenes':
      window.location.hash = '#/scenes';
      break;
    case 'role':
      window.location.hash = `#/role/${r.scene.id}`;
      break;
    case 'result':
      window.location.hash = `#/result/${r.scene.id}/${r.roleId}`;
      break;
  }
}
