import type { CandidateCard } from '../data/types';
import { ROLES } from '../data/roles';

interface Props {
  card: CandidateCard;
}

/**
 * ShareCard — 4:5 (360×450 logical → 1080×1350 export at 3x).
 * Positioning follows Phoebe2's `share-card-spec-v1.md`:
 *   - Top brand band: y=0..60 (logical 0..20)
 *   - Main visual:    y=60..1100 (logical 20..366)
 *   - Friend verdict: y=1100..1280 (logical 366..426) — front overlay, blank line for 朋友鉴定
 *   - Footer:         y=1280..1350 (logical 426..450)
 */
export function ShareCard({ card }: Props) {
  const role = ROLES[card.roleId];

  return (
    <div className="share-card" data-role={card.roleId}>
      <div className="share-topline">
        <span>心情值班室</span>
        <span>仅供娱乐</span>
      </div>

      <h2 className="share-name">
        今日值班：<em>「{role.name}」</em>
      </h2>

      <div className="share-hero">
        <div
          className="share-illus"
          style={{ background: role.themeColor }}
        >
          <img src={role.assets.main} alt={role.name} draggable={false} />
        </div>
        <p className="share-text">{card.styledText}</p>
      </div>

      <div className="share-tags">
        {card.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {/* 朋友鉴定区 · 前端图层留白触发器 (PRD §9.2) */}
      <div className="friend-verdict-slot">
        <span className="label">朋友鉴定区</span>
        <span>
          今日值班评价：<span className="blank" />
        </span>
      </div>

      <div className="share-footer">Meetu · 心情值班室 · 今天派谁出来？</div>
    </div>
  );
}
