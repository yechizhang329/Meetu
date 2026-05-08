import type { Source } from '../utils/source';

interface Props {
  onStart: () => void;
  source?: Source;
}

const COPY: Record<Source, { tag: string; tagVariant: 'green' | 'blue' | 'orange' | 'purple'; sub: string }> = {
  default: {
    tag: '心情值班室 / 替你顶一会儿',
    tagVariant: 'green',
    sub: '选一下今天的状态，让值班动物替你顶一会儿。',
  },
  wechat_mp: {
    tag: '公众号来的 / 别急着装死',
    tagVariant: 'blue',
    sub: '今天值班的动物可能会替你说一些你不想承认的话。',
  },
  xhs: {
    tag: '小红书来的 / 先别剧透',
    tagVariant: 'orange',
    sub: '点完别急着发，先看朋友怎么说。',
  },
  friend_share: {
    tag: '朋友发来的 / 先别认',
    tagVariant: 'purple',
    sub: '朋友说这只像你。你自己看看像不像。',
  },
};

export function IntroPage({ onStart, source = 'default' }: Props) {
  const c = COPY[source];
  return (
    <section className="app-shell">
      <div className="intro-tags">
        <span className="dr-sticky">心情值班室</span>
        <span className={`dr-sticky ${c.tagVariant}`}>{c.tag}</span>
      </div>

      <h1 className="intro-title">
        今天派谁出来
        <br />
        <em>替你说话？</em>
      </h1>

      <p className="intro-sub">{c.sub}</p>

      <ul className="intro-points">
        <li className="intro-point">
          <span className="num">1</span>
          <span>选一下今天比较像哪种状态。</span>
        </li>
        <li className="intro-point">
          <span className="num">2</span>
          <span>系统派一只值班动物，替你说一句。</span>
        </li>
        <li className="intro-point is-highlight">
          <span className="num">3</span>
          <span>
            <strong>发出去</strong>，看朋友会不会说<strong>"这不就是你？"</strong>
          </span>
        </li>
      </ul>

      <button className="dr-btn" type="button" onClick={onStart}>
        叫一个出来 ✦
      </button>

      <p className="intro-disclaimer">本工具不是心理诊断，只是替你说今天不想自己说的话。</p>
      <p className="intro-footer-brand">Meetu · 心情值班室</p>
    </section>
  );
}
