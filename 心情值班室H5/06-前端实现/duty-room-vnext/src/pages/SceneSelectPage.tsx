// vNext SceneSelectPage — 6 scene 占位.

import type { Scene } from '../data/types';
import { SCENES } from '../config/scenes.config';

interface Props {
  onPick: (scene: Scene) => void;
  onBack: () => void;
}

export function SceneSelectPage({ onPick, onBack }: Props) {
  return (
    <div className="vnext-scene-select" style={{ padding: 24 }}>
      <button onClick={onBack} style={{ fontSize: 12 }}>← 返回</button>
      <h2 style={{ fontSize: 18, marginTop: 16 }}>选状态 / 场景</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginTop: 12 }}>
        {SCENES.map((s) => (
          <button
            key={s.id}
            onClick={() => onPick(s)}
            style={{
              padding: 16,
              textAlign: 'left',
              border: '1px dashed #BBB',
              background: '#FAF7EE',
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: 11, opacity: 0.6 }}>{s.id}</div>
            <div style={{ fontWeight: 600 }}>{s.externalDirection}</div>
            <div style={{ fontSize: 11, opacity: 0.5, marginTop: 4 }}>
              pool: {s.rolePool.join(' / ')} · default: {s.defaultRoleId}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
