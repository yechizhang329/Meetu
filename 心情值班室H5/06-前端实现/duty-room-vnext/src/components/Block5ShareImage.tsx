// Block 5: 分享图 (PRD v2.3 §7 Block 5, DavidC 23:53 final v3 + 00:49 调整).
// 3:4 竖版: 顶部标题「心情值班室·{角色名}」+ 角色图 + result_text + Meetu branding.
// Block 3 CTA 切 variant 时, Block 5 result_text 与 Block 1 联动同步 (DavidC 23:53).
// 不含: tags / quote / stylePhrase / 单独角色名槽.
//
// 交互 (DavidC 00:49):
//   - 移除"生成分享图"按钮
//   - 自动用 html2canvas-pro 把渲染区截图为 <img>，用户直接长按 <img> 触发系统保存
//   - 必须用真实 <img> 元素（不是 div），系统长按菜单才会出现"保存图片"

import { useEffect, useRef, useState } from 'react';
import type { Role, ResultVariant } from '../data/types';

interface Props {
  role: Role;
  variant: ResultVariant | undefined;
}

export function Block5ShareImage({ role, variant }: Props) {
  const sourceRef = useRef<HTMLDivElement>(null);
  const [snapshotUrl, setSnapshotUrl] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // 自动生成 snapshot — 每次 role / variant 变化时重新截图
  useEffect(() => {
    let cancelled = false;
    setSnapshotUrl(null);
    setErr(null);

    // 给浏览器一帧时间渲染最新内容，避免空 / 残留
    const t = setTimeout(async () => {
      if (cancelled || !sourceRef.current) return;
      try {
        const mod = await import('html2canvas-pro');
        const html2canvas = mod.default ?? mod;
        const canvas = await html2canvas(sourceRef.current, {
          backgroundColor: '#F9F7F3',
          scale: 2,
          useCORS: true,
        });
        if (cancelled) return;
        setSnapshotUrl(canvas.toDataURL('image/png'));
      } catch (e) {
        if (!cancelled) setErr(e instanceof Error ? e.message : String(e));
      }
    }, 100);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [role.id, role.imageRef.single, role.roleName, variant?.variantId, variant?.resultText]);

  return (
    <section
      className="vnext-block5"
      data-block="5"
      aria-label="分享图"
      style={{ margin: '24px 0' }}
    >
      <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 10 }}>分享图</div>

      {/* 渲染源 — html2canvas 截此 div, 用绝对定位 + 不可见但参与布局 */}
      <div
        ref={sourceRef}
        data-share-source
        aria-hidden
        style={{
          position: 'absolute',
          left: -99999,
          top: 0,
          width: 540, // 控制 source DOM 渲染尺寸; scale=2 后输出 1080x1440
          aspectRatio: '3 / 4',
          background: '#F9F7F3',
          padding: '24px 22px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          pointerEvents: 'none',
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

      {/* 实际展示的 <img> — 用户长按这里触发系统保存 */}
      <div
        style={{
          width: '100%',
          aspectRatio: '3 / 4',
          background: '#F9F7F3',
          border: '1px solid #2221',
          borderRadius: 16,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {snapshotUrl ? (
          <img
            src={snapshotUrl}
            alt={`分享图 - ${role.roleName}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        ) : err ? (
          <div style={{ fontSize: 12, color: '#B33', padding: 16, textAlign: 'center' }}>
            生成失败: {err}
          </div>
        ) : (
          <div style={{ fontSize: 12, opacity: 0.5 }}>生成中...</div>
        )}
      </div>

      <div style={{ fontSize: 11, opacity: 0.5, marginTop: 10, textAlign: 'center' }}>
        长按图片保存到相册
      </div>
    </section>
  );
}
