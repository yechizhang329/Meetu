// 心情值班室 v1.1.1 — Slip data adapter
//
// PRD v1.1 (Fiona 23:39) + Lucy lock table v2 (task #19, 23:38):
//   - sceneBase / characterLayer / overrides three-layer structure
//   - 32 combos = 8 scenes × 4 characters with 24 character-level L2 overrides
//
// v1.1.1 fix (Lucy raise, task #25):
//   - Filename keys now use PRD snake_case directly:
//       receipts/{S1_stubborn_deny..S8_pushed_along}-{stubborn_goose|low_battery_cat|ddl_hamster|backstage_alpaca}.png
//   - batch-data.json is now Lucy v2 lock table (replaces Phoebe v0.2 placeholder copy)
//   - sign = 后驼 (was 羊后); character keys = backstage_alpaca (was backend-alpaca)
//   - 24 character overrides applied at render time (Result page 4-animal switch shows
//     genuinely different L2 lines, not the same scene line × 4 colour skins)
//
// This module is the single source of truth for scene × character resolution.

import type { RoleId, SceneId } from './types';
import batchDataRaw from './batch-data.json';

// ─── Lucy v2 lock-table types ───────────────────────────────────────────────
// Internal RoleId/SceneId already match Lucy's keys, no translation needed.
type LucySceneShortId = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6' | 'S7' | 'S8';

const SCENE_ID_TO_SHORT: Record<SceneId, LucySceneShortId> = {
  S1_stubborn_deny: 'S1',
  S2_low_battery: 'S2',
  S3_ddl_procrast: 'S3',
  S4_polite_overflow: 'S4',
  S5_need_quiet: 'S5',
  S6_invited_out: 'S6',
  S7_msg_unreplied: 'S7',
  S8_pushed_along: 'S8',
};

interface CharacterData {
  name: string;
  sign: string;
  accent: string;
  avatarType: string;
  stampStyle: string;
  tone?: string;
  signaturePattern?: string;
}

interface SceneData {
  id?: string;
  title: string;
  scope: string;
  stampLine1: string;
  stampLine2: string;
  primaryCharacter?: RoleId;
  l2: [string, string, string];
  footer: [string, string, string];
  validity: string;
}

interface OverrideData {
  l2?: [string, string, string];
  stampLine1?: string;
  stampLine2?: string;
}

interface BatchData {
  characters: Record<RoleId, CharacterData>;
  scenes: Record<LucySceneShortId, SceneData>;
  overrides: Record<string, OverrideData>;
}

const BATCH_DATA = batchDataRaw as unknown as BatchData;

// ─── Public API ─────────────────────────────────────────────────────────────

/** Resolve a scene + character to its pre-rendered receipt PNG path.
 *  baseUrl already ends with `/Meetu/duty-room-v1/duty-room-v1/` (App.tsx
 *  composes it as `${import.meta.env.BASE_URL}duty-room-v1/`).
 *  Receipts live at `<baseUrl>receipts/<sceneIdFull>-<roleId>.png`. */
export function getReceiptImagePath(
  baseUrl: string,
  sceneId: SceneId,
  roleId: RoleId,
): string {
  return `${baseUrl}receipts/${sceneId}-${roleId}.png`;
}

/** Suggested filename for download */
export function getReceiptDownloadName(sceneId: SceneId, roleId: RoleId): string {
  return `mouthpiece-${sceneId}-${roleId}.png`;
}

/** Get scene-level metadata (Lucy v2 base copy) */
export function getSceneData(sceneId: SceneId): SceneData {
  return BATCH_DATA.scenes[SCENE_ID_TO_SHORT[sceneId]];
}

/** Get character-level metadata (Lucy v2 character layer) */
export function getCharacterData(roleId: RoleId): CharacterData {
  return BATCH_DATA.characters[roleId];
}

/** Get the resolved L2 / stamp lines for a specific scene × character combo,
 *  with Lucy v2 overrides applied. Used by any page that wants to display the
 *  text *outside* the receipt PNG (e.g. as a caption next to the image). */
export function resolveComboCopy(sceneId: SceneId, roleId: RoleId): {
  l2: [string, string, string];
  stampLine1: string;
  stampLine2: string;
  isOverride: boolean;
} {
  const sceneShort = SCENE_ID_TO_SHORT[sceneId];
  const scene = BATCH_DATA.scenes[sceneShort];
  const overrideKey = `${sceneShort}__${roleId}`;
  const override = BATCH_DATA.overrides[overrideKey] || {};
  return {
    l2: (override.l2 ?? scene.l2) as [string, string, string],
    stampLine1: override.stampLine1 ?? scene.stampLine1,
    stampLine2: override.stampLine2 ?? scene.stampLine2,
    isOverride: Boolean(override.l2),
  };
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
