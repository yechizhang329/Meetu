import { useState } from 'react';
import type { Scene } from '../data/types';
import { SCENES } from '../data/scenes';

interface Props {
  onPick: (scene: Scene) => void;
  onBack: () => void;
}

export function SceneSelectPage({ onPick, onBack }: Props) {
  const [selected, setSelected] = useState<Scene | null>(null);

  const choose = (s: Scene) => {
    setSelected(s);
    window.setTimeout(() => onPick(s), 240);
  };

  return (
    <section className="app-shell">
      <button type="button" className="dr-back" onClick={onBack}>
        ‹ 返回
      </button>
      <div className="select-header">
        <h1 className="select-title">今天比较像哪种？</h1>
        <p className="select-sub">挑一条最像今天的你。可以矫情，没人会知道。</p>
      </div>
      <ul className="option-list">
        {SCENES.map((opt) => (
          <li key={opt.id}>
            <button
              type="button"
              className={`option-card ${selected === opt.id ? 'is-selected' : ''}`}
              onClick={() => choose(opt.id)}
            >
              {opt.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
