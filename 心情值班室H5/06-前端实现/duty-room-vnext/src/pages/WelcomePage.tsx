// P0 WelcomePage — 欢迎页, 引导进入 (PRD v2.3 §4.1 P0).
// 文案: P0 文案未走 Lucy final, 先用编辑判断版 (Fiona 23:38 PRD §4.1 只定义"产品介绍/引导进入", slogan/引导语未拍, 工程层使用 reasonable default 等 Lucy 后续 patch).

interface Props {
  onStart: () => void;
}

export function WelcomePage({ onStart }: Props) {
  return (
    <div
      className="vnext-welcome"
      style={{
        padding: '40px 24px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#F9F7F3', // 浅米, PRD §13.6 标准底色
        fontFamily: '"PingFang SC", "Hiragino Sans GB", system-ui, sans-serif',
      }}
    >
      <div>
        <div style={{ fontSize: 13, opacity: 0.55, letterSpacing: 1 }}>Meetu · 觅遇社</div>
        <h1 style={{ fontSize: 32, lineHeight: 1.4, margin: '24px 0 12px', fontWeight: 700 }}>
          心情值班室
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.75, marginTop: 16 }}>
          这句话我不想自己说，
          <br />
          让一个嘴替替我说。
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.55, marginTop: 24 }}>
          选一个状态，挑一个嘴替——
          <br />
          它说出你想说但懒得开口的话。
        </p>
      </div>
      <div style={{ paddingBottom: 24 }}>
        <button
          onClick={onStart}
          style={{
            width: '100%',
            padding: '16px 0',
            fontSize: 17,
            fontWeight: 600,
            background: '#222',
            color: '#F9F7F3',
            border: 'none',
            borderRadius: 12,
            cursor: 'pointer',
            letterSpacing: 2,
          }}
        >
          值班室进
        </button>
      </div>
    </div>
  );
}
