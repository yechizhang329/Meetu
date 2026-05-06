import { useEffect, useState } from 'react';

const PHRASES = [
  '正在读取你的社交电量',
  '正在翻译你的群聊人格',
  '正在拆解你的「已读不回」理由',
  '正在分析你的微信营业时间',
  '正在还原你脑内弹幕',
  '正在匹配你的社交动物',
  '正在生成一份不太严肃的结果',
];

interface Props {
  onDone: () => void;
  duration?: number;
}

export function LoadingPage({ onDone, duration = 1300 }: Props) {
  const [phrase] = useState(() => PHRASES[Math.floor(Math.random() * PHRASES.length)]);

  useEffect(() => {
    const t = window.setTimeout(onDone, duration);
    return () => window.clearTimeout(t);
  }, [onDone, duration]);

  return (
    <section className="app-shell">
      <div className="loading-screen">
        <div className="loading-mascot" role="img" aria-label="loading animal">
          🐾
        </div>
        <div className="loading-text">{phrase}…</div>
        <span className="sticky-label blue">请稍等一下</span>
      </div>
    </section>
  );
}
