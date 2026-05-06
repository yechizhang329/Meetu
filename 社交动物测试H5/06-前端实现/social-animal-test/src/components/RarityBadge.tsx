import { RARITY_COPY } from '../data/results';
import type { RarityTier } from '../data/types';

interface Props {
  rarity: RarityTier;
  variant?: 'page' | 'card';
}

const TIER_BG: Record<RarityTier, string> = {
  legendary: '#ffe15a',
  rare: '#c7a4ff',
  uncommon: '#9dd7ff',
  common: '#fff8ea',
};

/**
 * RarityBadge — small "tier label | tagline" sticker rendered on the result
 * page (above name) and inside the share card. Designed not to compete with
 * the result name + oneLiner.
 */
export function RarityBadge({ rarity, variant = 'page' }: Props) {
  const copy = RARITY_COPY[rarity];
  return (
    <span
      className={`rarity-badge rarity-${variant} rarity-tier-${rarity}`}
      style={{ background: TIER_BG[rarity] }}
    >
      <strong>{copy.label}</strong>
      <span className="rarity-sep">｜</span>
      <span className="rarity-tagline">{copy.tagline}</span>
    </span>
  );
}
