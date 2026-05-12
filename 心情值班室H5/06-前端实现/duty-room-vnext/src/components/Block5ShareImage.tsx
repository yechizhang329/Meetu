// Block 5: 分享图 (PRD v2.3 §7 Block 5, DavidC 23:53 final v3).
// 3:4 竖版: 顶部标题「心情值班室·{角色名}」+ 角色图 + result_text + Meetu branding.
// Block 3 CTA 切 variant 时, Block 5 result_text 与 Block 1 联动同步 (DavidC 23:53).
// 不含: tags / quote / stylePhrase / 单独角色名槽.
// 生成分享图按钮 → html2canvas-pro 截图 → 用户长按保存.

import { useCallback, useRef, useState } from 'react';
import type { Role, ResultVariant } from '../data/types';

interface Props {
  role: Role;
  variant: ResultVariant | undefined;
}

export function Block5ShareImage({ role, variant }: Props) {
  const shareRef = useRef<HTMLDivElement>(null);
  const [saving, setSaving] = useState(false);
  const [savedDataUrl, setSavedDataUrl] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const handleCapture = useCallback(async () => {
    if (!shareRef.current) return;
    setSaving(true);
    setErr(null);
    setSavedDataUrl(null);
    try {
      const mod = await import('html2canvas-pro');
      const html2canvas = mod.default ?? mod;
      const canvas = await html2canvas(shareRef.current, {
        backgroundColor: '#F9F7F3',
        scale: 2,
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL('image/png');
      setSavedDataUrl(dataUrl);
    } catch (e) {
      setErr(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  }, []);

  return (
    <section
      className="vnext-block5"
      data-block="5"
      aria-label="分享图"
      style={{ margin: '24px 0' }}
    >
      <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 10 }}>分享图</div>

      {/* 分享图渲染区 — 3:4 竖版, html2canvas 截此 div */}
      <div
        ref={shareRef}
        data-share-canvas
        style={{
          width: '100%',
          aspectRatio: '3 / 4',
          background: '#F9F7F3',
          border: '1px solid #2221',
          borderRadius: 16,
          padding: '24px 22px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 2,
            textAlign: 'center',
          }}
        >
          心情值班室 · {role.roleName}
        </div>
        <div
          style={{
            flex: 1,
            width: '100%',
            margin: '8px 0 4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={role.imageRef.single}
            alt={role.roleName}
            crossOrigin="anonymous"
            style={{
              maxWidth: '82%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 17,
            fontWeight: 700,
            lineHeight: 1.45,
            textAlign: 'center',
            margin: '6px 0 14px',
            minHeight: '2.9em',
            padding: '0 4px',
          }}
        >
          {variant?.resultText ?? ''}
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3 }}>觅遇社</div>
          <div style={{ fontSize: 10, opacity: 0.55, marginTop: 2, letterSpacing: 1 }}>Nice to Meetu</div>
        </div>
      </div>

      {/* 操作区 — 在分享图外, 不进入截图 */}
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button
          onClick={handleCapture}
          disabled={saving}
          style={{
            flex: 1,
            padding: '12px 16px',
            fontSize: 14,
            fontWeight: 600,
            background: saving ? '#2221' : '#222',
            color: saving ? '#222' : '#F9F7F3',
            border: 'none',
            borderRadius: 10,
            cursor: saving ? 'wait' : 'pointer',
          }}
        >
          {saving ? '生成中...' : '生成分享图'}
        </button>
      </div>

      {err ? (
        <div style={{ fontSize: 11, color: '#B33', marginTop: 8 }}>截图失败: {err}</div>
      ) : null}

      {savedDataUrl ? (
        <div
          style={{
            marginTop: 14,
            padding: 14,
            background: '#FFF',
            border: '1px dashed #2223',
            borderRadius: 12,
          }}
        >
          <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 8 }}>
            长按图片 → 保存到相册，然后分享到朋友圈/小红书/群聊
          </div>
          <img
            src={savedDataUrl}
            alt={`分享图 - ${role.roleName}`}
            style={{ width: '100%', display: 'block', borderRadius: 8 }}
          />
        </div>
      ) : null}
    </section>
  );
}
