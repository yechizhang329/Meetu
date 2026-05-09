// 心情值班室 v1.0 — SceneSelectPage
// 便签桌面流 per Phoebe task #32 v0.3: 8 scene notes in a vertical scroll with
// first 4-5 visible on first paint. Each note = scene label + subtle role hint.

import { SCENES } from '../data/scenes';
import { ROLES } from '../data/roles';
import type { SceneMeta } from '../data/types';

interface Props {
  artBaseUrl: string;
  onBack: () => void;
  onPick: (scene: SceneMeta) => void;
}

export function SceneSelectPage({ artBaseUrl, onBack, onPick }: Props) {
  return (
    <div className="scene-page">
      <div className="scene-top">
        <button type="button" className="scene-back" onClick={onBack}>
          ← 值班室首页
        </button>
        <div className="scene-title">今天是什么状态？</div>
        <div className="scene-sub">挑一张最接近你的便签，值班的他替你说。</div>
      </div>
      <div className="scene-list">
        {SCENES.map((scene, idx) => {
          const role = ROLES[scene.primary];
          const src = role.artPath ? `${artBaseUrl}${role.artPath}` : undefined;
          return (
            <button
              type="button"
              className={`scene-note scene-note-tilt-${idx % 3}`}
              key={scene.id}
              onClick={() => onPick(scene)}
            >
              <div className="scene-note-pick">{scene.userPick}</div>
              <div className="scene-note-role">
                {src ? <img src={src} alt={role.name} /> : null}
                <span>{role.name}值班</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
