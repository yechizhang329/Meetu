// P2 RoleSelectPage — 当前场景下的 3 个嘴替中选一个 (PRD v2.3 §4.1 P2).
// 展示: 角色头像 (profile 图) + 角色名 + stylePhrase + tag (master).
// 顺序: default role 置顶, 然后 backup 1, backup 2.

import type { Scene, RoleId } from '../data/types';
import { ROLE_BY_ID } from '../config/roles.config';

interface Props {
  scene: Scene;
  onPick: (roleId: RoleId) => void;
  onBack: () => void;
}

export function RoleSelectPage({ scene, onPick, onBack }: Props) {
  const roles = scene.rolePool.map((rid) => ROLE_BY_ID[rid]).filter(Boolean);

  return (
    <div
      className="vnext-role-select"
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
        ← 返回选场景
      </button>
      <div style={{ fontSize: 11, opacity: 0.45, letterSpacing: 1, marginTop: 16 }}>{scene.id}</div>
      <h2 style={{ fontSize: 20, marginTop: 4, fontWeight: 700 }}>{scene.sceneTitle}</h2>
      <p style={{ fontSize: 12, opacity: 0.55, marginTop: 8 }}>{scene.sceneExamples}</p>

      <h3 style={{ fontSize: 14, opacity: 0.7, marginTop: 28, fontWeight: 500 }}>让谁替你说？</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
        {roles.map((r) => (
          <button
            key={r.id}
            onClick={() => onPick(r.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 14,
              textAlign: 'left',
              border: '1px solid #2221',
              borderRadius: 14,
              background: '#FFF',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <img
              src={r.imageRef.profile}
              alt={r.roleName}
              width={64}
              height={64}
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                objectFit: 'cover',
                background: r.profileBgColor,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{r.roleName}</div>
              <div style={{ fontSize: 12, opacity: 0.6, marginTop: 2 }}>{r.stylePhrase}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                {r.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      padding: '2px 8px',
                      background: '#2220',
                      border: '1px solid #2221',
                      borderRadius: 10,
                      opacity: 0.7,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 18, opacity: 0.4 }}>›</div>
          </button>
        ))}
      </div>

      <p style={{ fontSize: 11, opacity: 0.4, marginTop: 32, textAlign: 'center' }}>
        默认 {ROLE_BY_ID[scene.defaultRoleId]?.roleName} 置顶 · 共 3 个嘴替
      </p>
    </div>
  );
}
