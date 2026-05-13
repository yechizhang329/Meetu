// Block 3: 换个说法 CTA (PRD v2.3 §7 Block 3).
// 当 (sceneId, roleId) 组合只有 1 条 variant 时禁用 + 提示文案.
// Lucy 扩量后 variant 池 ≥2 即自动 enabled.

interface Props {
  /** 当前 (sceneId, roleId) 组合的 variant 总数. */
  variantCount: number;
  onClick: () => void;
}

export function Block3ChangeWording({ variantCount, onClick }: Props) {
  const enabled = variantCount > 1;
  const label = enabled ? '换个说法' : '暂无更多说法';
  return (
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
  );
}
