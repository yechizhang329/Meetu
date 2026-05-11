// Block3: 换个说法.
// 当 (sceneId, roleId) 组合只有 1 条 variant 时禁用 + 提示文案 (per Fiona 18:39 非阻塞建议).
// P1.5 Lucy 扩量后, variant 池 ≥2 即自动 enabled.

interface Props {
  /** 当前 (sceneId, roleId) 组合的 variant 总数. */
  variantCount: number;
  onClick: () => void;
}

export function ChangeWordingButton({ variantCount, onClick }: Props) {
  const enabled = variantCount > 1;
  const title = enabled ? '换个说法' : '暂无更多说法';
  return (
    <button
      className="vnext-change-wording"
      onClick={onClick}
      disabled={!enabled}
      title={title}
      style={{
        padding: '8px 16px',
        cursor: enabled ? 'pointer' : 'not-allowed',
        opacity: enabled ? 1 : 0.45,
      }}
    >
      {title}
    </button>
  );
}
