import { useEffect, useState } from 'react';

const PHRASES = [
  '正在通知值班动物起床',
  '正在让它换上岗位制服',
  '正在替你想今天不想自己说的话',
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
        <span className="dr-loading-dot" aria-hidden />
        <p className="dr-loading-text">{phrase}…</p>
      </div>
    </section>
  );
}
