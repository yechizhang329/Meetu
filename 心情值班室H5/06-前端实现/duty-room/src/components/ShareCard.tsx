import type { CandidateCard } from '../data/types';
import { ROLES } from '../data/roles';

interface Props {
  card: CandidateCard;
}

/**
 * ShareCard — design-language-v1 §6 分享图 4:5 落点规则
 *   logical 360×450 → export 1080×1350 @3x
 *
 * 顶部 6px 黄条（1080 × 6）→ 360 框中 = 2px 黄条
 * 主视觉占中段 40-50%（角色立绘 contain；不烧文字到底图）
 * 朋友鉴定区前端图层：1080×1350 坐标 {x:80, y:1130, w:920, h:130}
 *   → 360×450 换算 {x:27, y≈377, w≈306, h≈43}
 * 底部水印 70/1350 → 23px；先不烧域名
 */
export function ShareCard({ card }: Props) {
  const role = ROLES[card.roleId];

  return (
    <div className="share-card" data-role={card.roleId}>
      <div className="share-banner" aria-hidden />
      <div className="share-topline">
        <span>心情值班室</span>
        <span>{role.emotionTag}</span>
      </div>

      <div className="share-hero">
        <img src={role.assets.main} alt={role.name} draggable={false} />
      </div>

      <p className="share-quote">
        「{card.styledText}」
      </p>

      <div className="share-friend-slot">
        <span className="blank" aria-hidden />
      </div>

      <div className="share-watermark">Meetu · 心情值班室</div>
    </div>
  );
}
