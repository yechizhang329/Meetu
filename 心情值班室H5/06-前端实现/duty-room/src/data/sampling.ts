import type { CandidateCard, DutyRole, Scene, Tone } from './types';
import { recommendRoleByScene } from './scenes';
import { pickFromPool, ROLE_TAGS } from './copy';
import { applyToneFilter } from './tones';

const N_CANDIDATES = 3;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generate the 3 candidate cards for the result page.
 * Strategy:
 *   - First N_CANDIDATES come from (primaryRole, scene). If pool < N, fill from
 *     (primaryRole, primaryScene) of that role, then from (fallbackRole, scene).
 *   - Each baseText is run through the tone filter to produce styledText.
 */
export function buildCandidateCards(scene: Scene, tone: Tone): CandidateCard[] {
  const { primary, fallback } = recommendRoleByScene(scene);
  const buckets: { role: DutyRole; scene: Scene }[] = [
    { role: primary, scene },
    { role: primary, scene: 'no_energy' }, // generic fallback bucket
    { role: fallback, scene },
  ];

  const seen = new Set<string>();
  const out: CandidateCard[] = [];

  for (const b of buckets) {
    const pool = shuffle(pickFromPool(b.role, b.scene));
    for (const item of pool) {
      if (seen.has(item.baseText)) continue;
      seen.add(item.baseText);
      out.push({
        roleId: item.roleId,
        sceneId: item.sceneId,
        toneId: tone,
        baseText: item.baseText,
        styledText: applyToneFilter(item.baseText, tone),
        tags: shuffle(ROLE_TAGS[item.roleId]).slice(0, 2),
      });
      if (out.length >= N_CANDIDATES) return out;
    }
    if (out.length >= N_CANDIDATES) break;
  }

  return out;
}

/**
 * "Reroll" replaces a single card at index with a fresh sample from the same
 * role × scene pool, avoiding the texts already shown.
 */
export function rerollOneCard(
  current: CandidateCard[],
  index: number,
  scene: Scene,
  tone: Tone,
): CandidateCard[] {
  if (index < 0 || index >= current.length) return current;
  const target = current[index];
  const taken = new Set(current.map((c) => c.baseText));

  const pool = shuffle(pickFromPool(target.roleId, target.sceneId)).filter(
    (item) => !taken.has(item.baseText),
  );

  // Fall back to fallback role if pool exhausted.
  let pick = pool[0];
  if (!pick) {
    const fallback = recommendRoleByScene(scene).fallback;
    const altPool = shuffle(pickFromPool(fallback, scene)).filter(
      (item) => !taken.has(item.baseText),
    );
    pick = altPool[0];
  }
  if (!pick) return current;

  const next = [...current];
  next[index] = {
    roleId: pick.roleId,
    sceneId: pick.sceneId,
    toneId: tone,
    baseText: pick.baseText,
    styledText: applyToneFilter(pick.baseText, tone),
    tags: shuffle(ROLE_TAGS[pick.roleId]).slice(0, 2),
  };
  return next;
}
