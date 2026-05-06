interface Props {
  onStart: () => void;
}

export function IntroPage({ onStart }: Props) {
  return (
    <section className="app-shell">
      <div className="intro-hero">
        <span className="sticky-label">社交动物测试</span>
        <span className="sticky-label pink">测着玩 / 可能有点像</span>
      </div>

      <h1 className="intro-title">
        看看你在
        <br />
        社交场里
        <br />
        <span className="line2">更像哪种动物</span>
      </h1>

      <p className="intro-subtitle">
        12 个小场景，<strong>大概 1 分钟</strong>。<br />
        不算心理诊断，<strong>但可能会有点像你</strong>。
      </p>

      <ul className="intro-points">
        <li className="intro-point">
          <span className="num">1</span>
          <span>看场景，选一个最像你会做的。</span>
        </li>
        <li className="intro-point">
          <span className="num">2</span>
          <span>测完拿一张你的社交动物卡。</span>
        </li>
        <li className="intro-point is-highlight">
          <span className="num">3</span>
          <span>
            <strong>发群里</strong>，看朋友会不会说<strong>"这不就是你？"</strong>
          </span>
        </li>
      </ul>

      <button className="big-btn" onClick={onStart} type="button">
        开始测试 ✦
      </button>

      <p className="intro-disclaimer">
        本测试仅供娱乐和自我观察，不代表专业心理测评。
      </p>
      <p className="intro-footer-brand">Meetu · nice to meetu</p>
    </section>
  );
}
