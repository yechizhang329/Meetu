// vNext SceneSelectPage — 6 scene 选择 (PRD §4.1 P1).
// Click scene → 进入 P2 RoleSelectPage (in-scene 选嘴替).

import type { Scene } from '../data/types';
import { SCENES } from '../config/scenes.config';

interface Props {
  onPick: (scene: Scene) => void;
  onBack: () => void;
}

export function SceneSelectPage({ onPick, onBack }: Props) {
  return (
    <div
      className="vnext-scene-select"
      style={{
        padding: 24,
        minHeight: '100vh',
        background: '#F9F7F3',
        fontFamily: '"PingFang SC", "Hiragino Sans GB", system-ui, sans-serif',
      }}
    >
      <button
        onClick={onBack}
        style={{ fontSize: 12, background: 'transparent', border: 'none', opacity: 0.6, cursor: 'pointer', padding: 0 }}
      >
        ← 返回
      </button>
      <h2 style={{ fontSize: 22, marginTop: 16, fontWeight: 700 }}>现在是哪种状态？</h2>
      <p style={{ fontSize: 13, opacity: 0.6, marginTop: 8 }}>选一个最像当下的场景。</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginTop: 20 }}>
        {SCENES.map((s) => (
          <button
            key={s.id}
            onClick={() => onPick(s)}
            style={{
              padding: 18,
              textAlign: 'left',
              border: '1px solid #2221',
              borderRadius: 14,
              background: '#FFF',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <div style={{ fontSize: 11, opacity: 0.45, letterSpacing: 1 }}>{s.id}</div>
            <div style={{ fontSize: 17, fontWeight: 600, marginTop: 6 }}>{s.sceneTitle}</div>
            <div style={{ fontSize: 12, opacity: 0.55, marginTop: 8, lineHeight: 1.5 }}>
              {s.sceneExamples}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
