// vNext IntroPage — 占位 entry, 等视觉/文案 brief 收口后重写.

interface Props {
  onStart: () => void;
}

export function IntroPage({ onStart }: Props) {
  return (
    <div className="vnext-intro" style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22 }}>心情值班室 vNext (P0 prework)</h1>
      <p style={{ fontSize: 13, opacity: 0.7 }}>
        当前是技术底座 placeholder。文案 / 视觉等定稿后接入。
      </p>
      <button onClick={onStart} style={{ marginTop: 16, padding: '8px 16px' }}>
        开始 (选状态/场景)
      </button>
    </div>
  );
}
