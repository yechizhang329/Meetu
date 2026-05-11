// Block2: 当前嘴替角色卡 — neutral placeholder skeleton.
// 视觉细节等 P2 视觉 brief 收口后重写.
// SoT (post personality_line removal): 角色卡人格/说明位用 §3/§4 quotes (按 usage='role_card') 替代.

import type { Role, RoleQuote } from '../data/types';

interface Props {
  role: Role;
  /** role_card quote — 替代原 personality_line 的人格说明文案. */
  roleCardQuote?: RoleQuote;
}

export function CurrentRoleCard({ role, roleCardQuote }: Props) {
  return (
    <div
      className="vnext-current-role-card"
      data-role-id={role.id}
      style={{
        border: '1px dashed #BBB',
        padding: 16,
        margin: '12px 0',
        background: '#FAF7EE',
      }}
    >
      <div style={{ fontSize: 11, opacity: 0.5 }}>[Block2 当前嘴替角色卡 · placeholder]</div>
      <div
        className="vnext-role-image-slot"
        data-image-ref={role.imageRef}
        style={{
          width: 120,
          height: 120,
          background: '#E5E0D2',
          margin: '8px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          color: '#999',
        }}
      >
        {`image: ${role.imageRef}`}
      </div>
      <div style={{ fontWeight: 700 }}>{role.roleName}</div>
      {roleCardQuote ? (
        <div style={{ marginTop: 8, fontSize: 14 }}>“{roleCardQuote.text}”</div>
      ) : null}
    </div>
  );
}
