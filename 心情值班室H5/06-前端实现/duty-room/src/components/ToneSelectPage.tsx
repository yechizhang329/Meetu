import { useState } from 'react';
import type { Tone } from '../data/types';
import { TONES } from '../data/tones';

interface Props {
  onPick: (tone: Tone) => void;
  onBack: () => void;
}

export function ToneSelectPage({ onPick, onBack }: Props) {
  const [selected, setSelected] = useState<Tone | null>(null);

  const choose = (t: Tone) => {
    setSelected(t);
    window.setTimeout(() => onPick(t), 240);
  };

  return (
    <section className="app-shell">
      <button type="button" className="dr-back" onClick={onBack}>
        ‹ 返回
      </button>
      <div className="select-header">
        <h1 className="select-title">想用哪种语气说？</h1>
        <p className="select-sub">同样一只动物，不同语气会说出不一样的话。</p>
      </div>
      <ul className="option-list">
        {TONES.map((opt) => (
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
