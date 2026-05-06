import type { AnimalResult } from '../data/types';
import { AnimalIllustration } from './AnimalIllustration';
import { RarityBadge } from './RarityBadge';
import { keywordPillStyle } from '../utils/color';

interface Props {
  result: AnimalResult;
}

/**
 * ShareCard — rendered both as an on-screen preview (inside .share-preview)
 * and off-screen inside .share-card-viewport for html2canvas capture.
 * 3:4 ratio ≈ 360×480 px logical; exported at 3x for final 1080×1440.
 */
export function ShareCard({ result }: Props) {
  return (
    <div className="share-card" data-animal={result.id}>
      <div className="share-topline">
        <span>社交动物测试</span>
        <RarityBadge rarity={result.rarity} variant="card" />
      </div>

      <h2 className="share-title">
        我是 <em>「{result.name}」</em>
      </h2>

      <div className="share-hero-row">
        <div className="share-illus" style={{ background: result.themeColor, borderRadius: 14 }}>
          <AnimalIllustration
            type={result.id}
            size={96}
            primary={result.themeColor}
          />
        </div>
        <div className="share-oneliner">{result.oneLiner}</div>
      </div>

      <div className="share-keywords">
        {result.keywords.map((k, i) => (
          <span
            key={k}
            className="sticky-label keyword-pill"
            style={keywordPillStyle(result.themeColor, i)}
          >
            #{k}
          </span>
        ))}
      </div>

      <div className="share-roast">
        <span className="share-roast-label">朋友锐评</span>
        {result.friendRoast}
      </div>

      <div className="share-self">
        <span className="share-roast-label">可以直接当配文</span>
        {result.selfRecognition}
      </div>

      <div className="share-vibe">
        <span className="share-vibe-label">适合的氛围</span>
        {result.vibe}
      </div>

      <div className="share-footer">测着玩，但可能有点像 · Meetu</div>
    </div>
  );
}
