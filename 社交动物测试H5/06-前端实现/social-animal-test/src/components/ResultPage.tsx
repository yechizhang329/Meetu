import { useEffect, useMemo, useRef, useState } from 'react';
import { results } from '../data/results';
import type { AnimalType } from '../data/types';
import { AnimalIllustration } from './AnimalIllustration';
import { RarityBadge } from './RarityBadge';
import { ShareCard } from './ShareCard';
import { keywordPillStyle, readableTextOn } from '../utils/color';
import { exportShareCard, isLikelyWeChat, renderShareCardImage } from '../utils/shareImage';

interface Props {
  resultId: AnimalType;
  onRetake: () => void;
}

export function ResultPage({ resultId, onRetake }: Props) {
  const result = results[resultId];
  const shareRef = useRef<HTMLDivElement | null>(null);
  const previewImgRef = useRef<HTMLImageElement | null>(null);
  const [saving, setSaving] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [previewState, setPreviewState] = useState<{ resultId: AnimalType; image: string | null; loading: boolean }>({
    resultId,
    image: null,
    loading: true,
  });
  // UA check runs once per mount; stable for the life of the page.
  const inWeChat = useMemo(() => isLikelyWeChat(), []);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (!shareRef.current) return;
      renderShareCardImage(shareRef.current)
        .then((dataUrl) => {
          if (!cancelled) setPreviewState({ resultId: result.id, image: dataUrl, loading: false });
        })
        .catch((error) => {
          console.error(error);
          if (!cancelled) {
            setHint('分享图生成失败，可以先截图结果页发给朋友。');
            setPreviewState({ resultId: result.id, image: null, loading: false });
          }
        });
    }, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [result.id]);

  // In WeChat: button scrolls to the generated <img> and nudges the user to
  // long-press. Download link would trigger a file attachment UX instead of
  // an image transfer, which is exactly what DavidC flagged as broken.
  // In other browsers: regular download link via html2canvas export.
  const onAction = async () => {
    if (!shareRef.current || saving) return;

    if (inWeChat) {
      // Ensure the image is rendered before scrolling — re-generate if the
      // useEffect one-shot hasn't finished yet.
      setSaving(true);
      try {
        if (!previewState.image) {
          const dataUrl = await renderShareCardImage(shareRef.current);
          setPreviewState({ resultId: result.id, image: dataUrl, loading: false });
        }
        window.requestAnimationFrame(() => {
          previewImgRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        setHint('滑到下面，长按那张图 → 选择"保存图片"或"转发给朋友"。');
      } catch (err) {
        console.error(err);
        setHint('生成分享图失败，可以先截屏整页发给朋友。');
      } finally {
        setSaving(false);
      }
      return;
    }

    // Non-WeChat path: download the PNG as a file.
    setSaving(true);
    try {
      const dataUrl = await exportShareCard(shareRef.current, `social-animal-${result.id}.png`);
      setPreviewState({ resultId: result.id, image: dataUrl, loading: false });
      setHint('图片已下载，可以直接发群 / 朋友圈 / 小红书。');
    } catch (err) {
      console.error(err);
      setHint('浏览器没支持直接下载，请长按下方图片保存 → 转发给朋友。');
    } finally {
      setSaving(false);
    }
  };

  const heroTextColor = readableTextOn(result.themeColor);

  const primaryButtonLabel = saving
    ? '生成中…'
    : inWeChat
      ? '看下方分享图 ✦'
      : '下载分享图 ✦';

  const previewHint = inWeChat
    ? '长按这张图 → 保存图片 或 转发给朋友。'
    : '非微信环境：点上方按钮直接下载；也可以长按这张图保存。';

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

      <div className="paper-card result-hero-card" style={{ background: result.themeColor, color: heroTextColor }}>
        <div className="result-hero-illus">
          <AnimalIllustration
            type={result.id}
            size={170}
            primary={result.themeColor}
          />
        </div>
        <p className="result-one-liner" style={{ color: heroTextColor }}>{result.oneLiner}</p>
        <div className="result-keywords">
          {result.keywords.map((k, i) => (
            <span key={k} className="sticky-label keyword-pill" style={keywordPillStyle(result.themeColor, i)}>
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
          onClick={onAction}
          disabled={saving}
        >
          {primaryButtonLabel}
        </button>
        <button type="button" className="big-btn secondary" onClick={onRetake}>
          再测一次
        </button>
        {hint ? <p className="intro-disclaimer">{hint}</p> : null}
      </div>

      <div className="paper-card share-preview share-preview-primary" style={{ marginTop: 24 }}>
        <h3 className="share-preview-title">长按这张图发给朋友</h3>
        {previewState.resultId === result.id && previewState.image ? (
          <img
            ref={previewImgRef}
            className="share-preview-img"
            src={previewState.image}
            alt={`${result.name}分享海报`}
            draggable={false}
          />
        ) : (
          <div className="share-preview-loading">
            {previewState.resultId !== result.id || previewState.loading ? '正在生成可长按保存的图片…' : '分享图暂时没生成，请点上方按钮重试。'}
          </div>
        )}
        <p className="share-preview-hint">{previewHint}</p>
      </div>

      {/* Off-screen clone used for html2canvas export and PNG preview generation */}
      <div className="share-card-viewport" aria-hidden>
        <div ref={shareRef}>
          <ShareCard result={result} />
        </div>
      </div>

      <p className="result-footer">Meetu · nice to meetu · 测着玩，但可能有点像</p>
    </section>
  );
}
