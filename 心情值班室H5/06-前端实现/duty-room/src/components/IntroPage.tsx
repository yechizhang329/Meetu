import type { Source } from '../utils/source';

interface Props {
  onStart: () => void;
  source?: Source;
}

const COPY: Record<Source, { tag: string; sub: string }> = {
  default: {
    tag: '替你顶一会儿',
    sub: '选一下今天的状态，让一只小动物替你说一句心里话。',
  },
  wechat_mp: {
    tag: '公众号来的',
    sub: '今天值班的动物会替你说一句你不太想自己说的话。',
  },
  xhs: {
    tag: '小红书来的',
    sub: '点完别急着发，先看朋友怎么说。',
  },
  friend_share: {
    tag: '朋友发来的',
    sub: '朋友说这只像你。你自己看看像不像。',
  },
};

export function IntroPage({ onStart, source = 'default' }: Props) {
  const c = COPY[source];
  return (
    <section className="app-shell">
      <span className="intro-eyebrow">心情值班室 · Meetu</span>

      <span className="intro-source-tag">{c.tag}</span>

      <h1 className="intro-title">
        今天派谁出来
        <br />
        替你说话？
      </h1>

      <p className="intro-sub">{c.sub}</p>

      <ul className="intro-points">
        <li className="intro-point">
          <span className="num">1</span>
          <span>选一下今天像哪种状态。</span>
        </li>
        <li className="intro-point">
          <span className="num">2</span>
          <span>派一只值班动物，替你说一句。</span>
        </li>
        <li className="intro-point">
          <span className="num">3</span>
          <span>
            发出去，看朋友会不会说<strong>"这不就是你？"</strong>
          </span>
        </li>
      </ul>

      <div className="intro-cta-wrap">
        <button className="btn-primary" type="button" onClick={onStart}>
          叫一个出来
        </button>
      </div>

      <p className="intro-disclaimer">不是心理诊断，只是替你说今天不想自己说的话。</p>
      <p className="intro-footer-brand">Meetu · 心情值班室</p>
    </section>
  );
}
