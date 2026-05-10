// Block5: 保存 / 复制 / 重选状态. 占位; canvas 导出 + save flow 等视觉定稿后接入.

interface Props {
  onReselect: () => void;
}

export function ResultActions({ onReselect }: Props) {
  return (
    <div className="vnext-result-actions" style={{ display: 'flex', gap: 8, marginTop: 12 }}>
      <button disabled style={{ padding: '6px 12px', opacity: 0.5 }} title="canvas 导出待 P2 视觉接入">
        保存图片
      </button>
      <button disabled style={{ padding: '6px 12px', opacity: 0.5 }} title="结果文案待 P1 文案接入">
        复制配文
      </button>
      <button onClick={onReselect} style={{ padding: '6px 12px', cursor: 'pointer' }}>
        重选状态
      </button>
    </div>
  );
}
