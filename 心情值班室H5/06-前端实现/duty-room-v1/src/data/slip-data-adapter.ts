// 心情值班室 v1.0 — Slip data adapter
// Bridges:
//   - Phoebe's batch-data.json (canonical visual + copy source from task #33)
//   - Internal RoleId / SceneId types (used by Lines, ROLES, SCENES)
//
// Phoebe shipped 32 pre-rendered PNGs at 1080×1350 named:
//   {S1..S8}-{tough-mouth-goose|low-battery-cat|ddl-hamster|backend-alpaca}.png
// They live at /public/duty-room-v1/receipts/<id>.png
//
// PRD v1.1 (Fiona 23:39): scene × character must be independently configurable
// — this module is the single source of truth for that mapping.

import type { RoleId, SceneId } from './types';
import batchDataRaw from './batch-data.json';

// ─── Phoebe's batch IDs (from batch-data.json) ──────────────────────────────
type PhoebeRoleId = 'low-battery-cat' | 'tough-mouth-goose' | 'ddl-hamster' | 'backend-alpaca';
type PhoebeSceneId = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'S8';

// ─── Internal ID ↔ Phoebe ID mapping ────────────────────────────────────────
const ROLE_ID_TO_PHOEBE: Record<RoleId, PhoebeRoleId> = {
  stubborn_goose: 'tough-mouth-goose',
  low_battery_cat: 'low-battery-cat',
  ddl_hamster: 'ddl-hamster',
  backstage_alpaca: 'backend-alpaca',
};

const SCENE_ID_TO_PHOEBE: Record<SceneId, PhoebeSceneId> = {
  S1_stubborn_deny: 'S1',
  S2_low_battery: 'S2',
  S3_ddl_procrast: 'S3',
  S4_polite_overflow: 'S4',
  S5_need_quiet: 'S5',
  S6_invited_out: 'S6',
  S7_msg_unreplied: 'S7',
  S8_pushed_along: 'S8',
};

// ─── Typed view of batch-data.json ─────────────────────────────────────────
interface PhoebeCharacterData {
  name: string;
  accent: string;
  sign: string;
  avatarType: string;
  stampStyle: string;
}

interface PhoebeSceneData {
  title: string;
  l2: [string, string, string];
  scope: string;
  stampLine1: string;
  stampLine2: string;
  footer: [string, string, string];
  validity: string;
}

interface BatchData {
  characters: Record<PhoebeRoleId, PhoebeCharacterData>;
  scenes: Record<PhoebeSceneId, PhoebeSceneData>;
}

const BATCH_DATA = batchDataRaw as BatchData;

// ─── Public API ─────────────────────────────────────────────────────────────

/** Resolve a scene + character to its pre-rendered receipt PNG path.
 *  baseUrl already ends with `/Meetu/duty-room-v1/duty-room-v1/` (App.tsx
 *  composes it as `${import.meta.env.BASE_URL}duty-room-v1/`).  Receipts live
 *  at `<baseUrl>receipts/<phoebeScene>-<phoebeRole>.png`. */
export function getReceiptImagePath(
  baseUrl: string,
  sceneId: SceneId,
  roleId: RoleId,
): string {
  const phoebeScene = SCENE_ID_TO_PHOEBE[sceneId];
  const phoebeRole = ROLE_ID_TO_PHOEBE[roleId];
  return `${baseUrl}receipts/${phoebeScene}-${phoebeRole}.png`;
}

/** Suggested filename for download */
export function getReceiptDownloadName(sceneId: SceneId, roleId: RoleId): string {
  const phoebeScene = SCENE_ID_TO_PHOEBE[sceneId];
  const phoebeRole = ROLE_ID_TO_PHOEBE[roleId];
  return `mouthpiece-${phoebeScene}-${phoebeRole}.png`;
}

/** Get scene-level metadata from Phoebe's canonical data */
export function getSceneData(sceneId: SceneId): PhoebeSceneData {
  return BATCH_DATA.scenes[SCENE_ID_TO_PHOEBE[sceneId]];
}

/** Get character-level metadata from Phoebe's canonical data */
export function getCharacterData(roleId: RoleId): PhoebeCharacterData {
  return BATCH_DATA.characters[ROLE_ID_TO_PHOEBE[roleId]];
}

/** Generate the full 32-combo matrix as iterable. */
export function generateFullMatrix(): Array<{
  sceneId: SceneId;
  roleId: RoleId;
  imagePath: (baseUrl: string) => string;
  downloadName: string;
}> {
  const SCENES: SceneId[] = [
    'S1_stubborn_deny',
    'S2_low_battery',
    'S3_ddl_procrast',
    'S4_polite_overflow',
    'S5_need_quiet',
    'S6_invited_out',
    'S7_msg_unreplied',
    'S8_pushed_along',
  ];
  const ROLES: RoleId[] = [
    'stubborn_goose',
    'low_battery_cat',
    'ddl_hamster',
    'backstage_alpaca',
  ];
  const combos: Array<{
    sceneId: SceneId;
    roleId: RoleId;
    imagePath: (baseUrl: string) => string;
    downloadName: string;
  }> = [];
  for (const sceneId of SCENES) {
    for (const roleId of ROLES) {
      combos.push({
        sceneId,
        roleId,
        imagePath: (baseUrl) => getReceiptImagePath(baseUrl, sceneId, roleId),
        downloadName: getReceiptDownloadName(sceneId, roleId),
      });
    }
  }
  return combos;
}
