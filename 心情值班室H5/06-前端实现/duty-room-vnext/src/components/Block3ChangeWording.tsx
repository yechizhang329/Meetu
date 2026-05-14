// Block 3: 换个说法 CTA (PRD v2.3 §7 Block 3).
// 当 (sceneId, roleId) 组合只有 1 条 variant 时禁用 + 提示文案.
// Lucy 扩量后 variant 池 ≥2 即自动 enabled.
// 计数反馈: 按钮显示 "换个说法 (n/N)", round-robin 循环回 (1/N) 时短暂提示"已看完，再点循环".

import { useEffect, useRef, useState } from 'react';

interface Props {
  /** 当前 (sceneId, roleId) 组合的 variant 总数. */
  variantCount: number;
  /** 当前 variant 在 pool 中的 0-based 位置 (-1 兜底, 显示为 1/N). */
  variantIndex: number;
  onClick: () => void;
}

const LOOP_HINT_MS = 1500;

export function Block3ChangeWording({ variantCount, variantIndex, onClick }: Props) {
  const enabled = variantCount > 1;

  // round-robin 检测: 当 variantIndex 从大值跳回 0 (或更小), 触发"已看完"轻提示
  const prevIndexRef = useRef<number>(variantIndex);
  const [showLoopHint, setShowLoopHint] = useState(false);

  useEffect(() => {
    if (variantIndex < prevIndexRef.current) {
      // index 倒退 = 刚 round-robin 一圈
      setShowLoopHint(true);
      const t = setTimeout(() => setShowLoopHint(false), LOOP_HINT_MS);
      prevIndexRef.current = variantIndex;
      return () => clearTimeout(t);
    }
    prevIndexRef.current = variantIndex;
  }, [variantIndex]);

  // 显示用的 1-based 位置, 兜底 1
  const displayIndex = variantIndex >= 0 ? variantIndex + 1 : 1;
  const label = enabled
    ? `换个说法 (${displayIndex}/${variantCount})`
    : '暂无更多说法';

  return (
    <div style={{ width: '100%' }}>
      <button
        className="vnext-block3"
        data-block="3"
        onClick={onClick}
        disabled={!enabled}
        title={enabled ? '同一场景同一嘴替, 换一句结果文案' : '当前组合只有 1 条文案'}
        style={{
          width: '100%',
          padding: '14px 16px',
          fontSize: 15,
          fontWeight: 600,
          background: enabled ? '#1FE07B' : '#E5E5E5',
          color: enabled ? '#1A1715' : '#999',
          border: 'none',
          borderRadius: 12,
          cursor: enabled ? 'pointer' : 'not-allowed',
          opacity: enabled ? 1 : 0.5,
        }}
      >
        {label}
      </button>
      {/* 轻提示: round-robin 一圈后短暂出现, 不抢视觉焦点 */}
      <div
        aria-live="polite"
        style={{
          minHeight: 16,
          marginTop: 6,
          fontSize: 11,
          textAlign: 'center',
          color: '#1A1715',
          opacity: showLoopHint ? 0.55 : 0,
          transition: 'opacity 200ms ease-out',
          pointerEvents: 'none',
        }}
      >
        已看完，再点循环
      </div>
    </div>
  );
}
