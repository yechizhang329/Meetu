// Block1: 结果图占位. 视觉定稿后由 Phoebe spec 决定结构.

import type { Scene, Role, ResultVariant } from '../data/types';

interface Props {
  scene: Scene;
  role: Role;
  variant: ResultVariant | undefined;
}

export function ResultImage({ scene, role, variant }: Props) {
  return (
    <div
      className="vnext-result-image"
      style={{
        border: '1px dashed #BBB',
        padding: 24,
        margin: '12px 0',
        background: '#FFF',
        minHeight: 240,
      }}
    >
      <div style={{ fontSize: 11, opacity: 0.5 }}>[Block1 结果图 · placeholder · waiting Phoebe visual brief]</div>
      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 12, opacity: 0.7 }}>scene: {scene.id} · role: {role.id}</div>
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 16 }}>{variant?.resultText ?? '(no variant)'}</div>
      </div>
    </div>
  );
}
