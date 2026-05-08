import { useEffect, useMemo, useRef, useState } from 'react';
import type { CandidateCard, Scene, Tone } from '../data/types';
import { ROLES } from '../data/roles';
import { FRIEND_CAPTIONS, SELF_COMMENTS } from '../data/copy';
import { rerollOneCard } from '../data/sampling';
import { ShareCard } from './ShareCard';
import { exportShareCard, isLikelyWeChat, renderShareCardImage } from '../utils/shareImage';

interface Props {
  scene: Scene;
  tone: Tone;
  initialCards: CandidateCard[];
  onRetake: () => void;
}

export function DutyResultPage({ scene, tone, initialCards, onRetake }: Props) {
  const [cards, setCards] = useState<CandidateCard[]>(initialCards);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hint, setHint] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [previewLoading, setPreviewLoading] = useState(true);
  const [selfLine, setSelfLine] = useState<string | null>(null);
  const [friendCaption, setFriendCaption] = useState<string | null>(null);

  const shareRef = useRef<HTMLDivElement | null>(null);
  const previewImgRef = useRef<HTMLImageElement | null>(null);
  const inWeChat = useMemo(() => isLikelyWeChat(), []);

  const active = cards[activeIdx];
  const role = active ? ROLES[active.roleId] : null;

  // Render preview PNG whenever active card changes.
  useEffect(() => {
    if (!shareRef.current) return;
    let cancelled = false;
    setPreviewLoading(true);
    const t = window.setTimeout(() => {
      if (!shareRef.current) return;
      renderShareCardImage(shareRef.current)
        .then((dataUrl) => {
          if (!cancelled) {
            setPreviewSrc(dataUrl);
            setPreviewLoading(false);
          }
        })
        .catch((err) => {
          console.error(err);
          if (!cancelled) {
            setPreviewSrc(null);
            setPreviewLoading(false);
            setHint('分享图生成失败，可以先截屏整页发给朋友。');
          }
        });
    }, 120);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [active?.baseText, active?.toneId]);

  if (!active || !role) {
    return (
      <section className="app-shell">
        <p>没有可显示的卡片。</p>
        <button type="button" className="dr-btn" onClick={onRetake}>
          重新来一次
        </button>
      </section>
    );
  }

  const reroll = () => {
    setCards((cur) => rerollOneCard(cur, activeIdx, scene, tone));
  };

  const copyCaption = async () => {
    const pool = FRIEND_CAPTIONS[active.roleId] ?? [];
    const pick = pool[Math.floor(Math.random() * pool.length)] ?? active.styledText;
    setFriendCaption(pick);
    try {
      await navigator.clipboard.writeText(pick);
      setHint('配文已复制，发图前粘贴在文字框里。');
    } catch {
      setHint('已生成配文（复制失败，长按选中复制即可）。');
    }
  };

  const selfComment = () => {
    const pool = SELF_COMMENTS[active.roleId] ?? [];
    const pick = pool[Math.floor(Math.random() * pool.length)] ?? '本人不认。';
    setSelfLine(pick);
  };

  const onSave = async () => {
    if (!shareRef.current || saving) return;
    setSaving(true);
    try {
      if (inWeChat) {
        if (!previewSrc) {
          const dataUrl = await renderShareCardImage(shareRef.current);
          setPreviewSrc(dataUrl);
        }
        window.requestAnimationFrame(() => {
          previewImgRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        setHint('滑到下面 → 长按那张图 → "保存图片" 或 "转发给朋友"。');
      } else {
        await exportShareCard(shareRef.current, `duty-room-${active.roleId}-${active.sceneId}.png`);
        setHint('图片已下载，可以直接发群 / 朋友圈 / 小红书。');
      }
    } catch (err) {
      console.error(err);
      setHint('生成失败，可以先截屏整页发给朋友。');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="app-shell">
      <div className="result-topline">
        <span className="dr-sticky">心情值班室</span>
        <span className="dr-sticky orange">{role.emotionTag}</span>
      </div>

      <h1 className="result-name">
        今天替你值班的：<em>「{role.name}」</em>
      </h1>
      <p className="result-station">岗位 · {role.station}</p>

      <div className="cards-stack">
        {cards.map((c, i) => {
          const r = ROLES[c.roleId];
          const isActive = i === activeIdx;
          return (
            <article
              key={`${c.baseText}-${i}`}
              className="candidate-card"
              style={{ borderColor: isActive ? r.accentColor : undefined }}
              onClick={() => setActiveIdx(i)}
            >
              <span className="role-badge">{r.name}</span>
              <p className="text">{c.styledText}</p>
              <div className="tags">
                {c.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="actions">
                <button type="button" className="action" onClick={() => { setActiveIdx(i); reroll(); }}>
                  换一句
                </button>
                <button
                  type="button"
                  className="action primary"
                  onClick={() => setActiveIdx(i)}
                  disabled={isActive}
                >
                  {isActive ? '当前选中' : '选这一句'}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <h3 className="dr-section-title">自评一句</h3>
      <div className="self-comment-box">
        {selfLine ?? '点下方按钮，给评论区补一条起手白。'}
      </div>
      <button type="button" className="dr-btn secondary" onClick={selfComment}>
        生成自评一句 ✦
      </button>

      <h3 className="dr-section-title">复制给朋友的配文</h3>
      <div className="friend-caption-box">
        {friendCaption ?? '点下方按钮生成一条带问题的配文，方便朋友接话。'}
      </div>
      <button type="button" className="dr-btn secondary" onClick={copyCaption}>
        复制配文 ✦
      </button>

      <div className="dr-actions">
        <button type="button" className="dr-btn" onClick={onSave} disabled={saving}>
          {saving ? '生成中…' : inWeChat ? '看下方分享图 ✦' : '下载分享图 ✦'}
        </button>
        <button type="button" className="dr-btn secondary" onClick={onRetake}>
          换一次心情
        </button>
        {hint ? <p className="intro-disclaimer">{hint}</p> : null}
      </div>

      <div className="share-preview">
        <h3 className="share-preview-title">长按这张图发给朋友</h3>
        {previewSrc ? (
          <img
            ref={previewImgRef}
            className="share-preview-img"
            src={previewSrc}
            alt={`${role.name}心情值班卡`}
            draggable={false}
          />
        ) : (
          <div className="share-preview-loading">
            {previewLoading ? '正在生成可长按保存的图片…' : '分享图暂时没生成，请点上方按钮重试。'}
          </div>
        )}
        <p className="share-preview-hint">
          {inWeChat ? '微信里长按上方图片 → 保存图片 或 转发给朋友。' : '非微信浏览器：点上方按钮直接下载；也可以长按图片保存。'}
        </p>
      </div>

      <div className="share-viewport" aria-hidden>
        <div ref={shareRef}>
          <ShareCard card={active} />
        </div>
      </div>

      <p className="result-footer">Meetu · 心情值班室 · 今天派谁出来？</p>
    </section>
  );
}
