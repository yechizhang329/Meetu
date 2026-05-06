import { useRef, useState } from 'react';
import { results } from '../data/results';
import type { AnimalType } from '../data/types';
import { AnimalIllustration } from './AnimalIllustration';
import { RarityBadge } from './RarityBadge';
import { ShareCard } from './ShareCard';
import { exportShareCard, isLikelyWeChat } from '../utils/shareImage';

interface Props {
  resultId: AnimalType;
  onRetake: () => void;
}

export function ResultPage({ resultId, onRetake }: Props) {
  const result = results[resultId];
  const shareRef = useRef<HTMLDivElement | null>(null);
  const [saving, setSaving] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  const onSave = async () => {
    if (!shareRef.current || saving) return;
    setSaving(true);
    try {
      await exportShareCard(shareRef.current, `social-animal-${result.id}.png`);
      setHint(
        isLikelyWeChat()
          ? '微信里请滑到下方预览，长按图片保存 → 转发给朋友。'
          : '图片已下载，可以直接发群 / 朋友圈 / 小红书。',
      );
    } catch (err) {
      console.error(err);
      setHint('浏览器没支持直接下载，滑到下方长按预览图保存 → 转发给朋友。');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="app-shell">
      <div className="result-topline">
        <span className="sticky-label">社交动物测试</span>
        <span className="sticky-label pink">#{result.keywords[0]}</span>
      </div>

      <RarityBadge rarity={result.rarity} variant="page" />

      <h1 className="result-animal-name">
        我是 <em>「{result.name}」</em>
      </h1>

      <div className="paper-card result-hero-card" style={{ background: result.accentColor }}>
        <div className="result-hero-illus">
          <AnimalIllustration
            type={result.id}
            size={170}
            primary={result.themeColor}
            accent="#fffdf5"
          />
        </div>
        <p className="result-one-liner">{result.oneLiner}</p>
        <div className="result-keywords">
          {result.keywords.map((k, i) => (
            <span key={k} className={`sticky-label ${['plain', 'blue', 'yellow'][i % 3]}`}>
              #{k}
            </span>
          ))}
        </div>
      </div>

      <div className="paper-card">
        <h3 className="result-block-title">朋友锐评</h3>
        <div className="friend-roast">{result.friendRoast}</div>
      </div>

      <div className="paper-card">
        <h3 className="result-block-title">直接发朋友圈的那句</h3>
        <div className="self-recognition">
          <span className="self-label">配文直接用</span>
          {result.selfRecognition}
        </div>
      </div>

      <div className="paper-card">
        <h3 className="result-block-title">你在社交场里的常见模式</h3>
        <p className="result-body-text">{result.mode}</p>
      </div>

      <div className="paper-card">
        <h3 className="result-block-title">你容易被朋友识别的一面</h3>
        <p className="result-body-text">{result.friendView}</p>
      </div>

      <div className="paper-card">
        <h3 className="result-block-title">你更适合的社交氛围</h3>
        <p className="result-body-text">{result.vibe}</p>
      </div>

      <div className="paper-card">
        <h3 className="result-block-title">3 条社交 tips</h3>
        <ul className="result-tips">
          {result.tips.map((t, i) => (
            <li key={i} className="result-tip">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="result-actions">
        <button
          type="button"
          className="big-btn"
          onClick={onSave}
          disabled={saving}
        >
          {saving ? '生成中…' : '发给朋友看 ✦'}
        </button>
        <button type="button" className="big-btn secondary" onClick={onRetake}>
          再测一次
        </button>
        {hint ? <p className="intro-disclaimer">{hint}</p> : null}
      </div>

      {/* Visible preview for long-press save on WeChat */}
      <div className="paper-card share-preview" style={{ marginTop: 24 }}>
        <ShareCard result={result} />
        <p className="share-preview-hint">
          微信里长按这张图就能存。<br />
          朋友看到你愿意发，就成功了。
        </p>
      </div>

      {/* Off-screen clone used for html2canvas export */}
      <div className="share-card-viewport" aria-hidden>
        <div ref={shareRef}>
          <ShareCard result={result} />
        </div>
      </div>

      <p className="result-footer">Meetu · nice to meetu · 测着玩，但可能有点像</p>
    </section>
  );
}
