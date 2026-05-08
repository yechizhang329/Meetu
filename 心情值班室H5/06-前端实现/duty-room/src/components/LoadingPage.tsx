import { useEffect, useState } from 'react';

const PHRASES = [
  '正在通知值班动物起床',
  '正在让它换上岗位制服',
  '正在替你想说什么不想自己说的话',
  '正在记下今天的心情值班表',
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
      <div className="dr-loading">
        <div className="dr-loading-icon" role="img" aria-label="loading">
          🛎️
        </div>
        <div className="dr-loading-text">{phrase}…</div>
        <span className="dr-sticky blue">请稍等一下</span>
      </div>
    </section>
  );
}
