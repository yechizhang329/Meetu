// Block2: 当前嘴替角色卡 — neutral placeholder skeleton.
// 视觉 / 卡片样式 / role image 渲染等待 Phoebe v0.1+ 视觉 brief 收口后重写.

import type { Role, RoleQuote } from '../data/types';

interface Props {
  role: Role;
  quote?: RoleQuote;
}

export function CurrentRoleCard({ role, quote }: Props) {
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
        image: {role.imageRef}
      </div>
      <div style={{ fontWeight: 700 }}>{role.roleName}</div>
      <div style={{ fontSize: 13, opacity: 0.85 }}>{role.stylePhrase}</div>
      <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>{role.personalityLine}</div>
      {quote ? (
        <div style={{ marginTop: 8, fontSize: 13, fontStyle: 'italic' }}>“{quote.text}”</div>
      ) : null}
    </div>
  );
}
