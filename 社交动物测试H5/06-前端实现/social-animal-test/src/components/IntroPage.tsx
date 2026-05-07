import type { ReactNode } from 'react';
import type { Source } from '../utils/source';

interface Props {
  onStart: () => void;
  source?: Source;
}

// Source-specific intro copy. Only 入口页 changes; quiz/result/share untouched.
// Defaults stay the same as the original P0 intro.
const COPY: Record<Source, {
  topTag: string;
  topTagVariant?: 'default' | 'wechat' | 'xhs' | 'friend';
  subtitle: ReactNode;
  disclaimer: string;
}> = {
  default: {
    topTag: '测着玩 / 可能有点像',
    subtitle: (
      <>
        12 个小场景，<strong>大概 1 分钟</strong>。<br />
        不算心理诊断，<strong>但可能会有点像你</strong>。
      </>
    ),
    disclaimer: '本测试仅供娱乐和自我观察，不代表专业心理测评。',
  },
  wechat_mp: {
    topTag: '公众号来的 / 先别急着装死',
    topTagVariant: 'wechat',
    subtitle: (
      <>
        12 个小场景，<strong>大概 1 分钟</strong>。<br />
        看看群友能不能<strong>一眼认出你</strong>。
      </>
    ),
    disclaimer: '本测试仅供娱乐和自我观察，不代表专业心理测评。',
  },
  xhs: {
    topTag: '小红书来的 / 先别剧透',
    topTagVariant: 'xhs',
    subtitle: (
      <>
        12 个小场景，<strong>大概 1 分钟</strong>。<br />
        测完在评论区<strong>认领一下</strong>。
      </>
    ),
    disclaimer: '本测试仅供娱乐和自我观察，不代表专业心理测评。',
  },
  friend_share: {
    topTag: '朋友发来的 / 先别急着认',
    topTagVariant: 'friend',
    subtitle: (
      <>
        12 个小场景，<strong>大概 1 分钟</strong>。<br />
        测完告诉朋友<strong>他看走眼没</strong>。
      </>
    ),
    disclaimer: '本测试仅供娱乐和自我观察，不代表专业心理测评。',
  },
};

export function IntroPage({ onStart, source = 'default' }: Props) {
  const copy = COPY[source];
  return (
    <section className="app-shell">
      <div className="intro-hero">
        <span className="sticky-label">社交动物测试</span>
        <span
          className={`sticky-label ${copy.topTagVariant === 'wechat' ? 'blue' : copy.topTagVariant === 'xhs' ? 'orange' : copy.topTagVariant === 'friend' ? 'yellow' : 'pink'}`}
        >
          {copy.topTag}
        </span>
      </div>

      <h1 className="intro-title">
        看看你在
        <br />
        社交场里
        <br />
        <span className="line2">更像哪种动物</span>
      </h1>

      <p className="intro-subtitle">{copy.subtitle}</p>

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

      <p className="intro-disclaimer">{copy.disclaimer}</p>
      <p className="intro-footer-brand">Meetu · nice to meetu</p>
    </section>
  );
}
