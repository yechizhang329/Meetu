// Block4: 换个嘴替帮你说. 显示 scene.rolePool 内除 currentRoleId 外的 2 个角色.
// 每张 CTA 卡含: imageRef + roleName + preview-quote (取该角色 usage=preview 的 master quote).

import type { Role, RoleQuote, RoleId } from '../data/types';

interface Props {
  alternateRoles: Role[];
  previewQuoteByRole: Partial<Record<RoleId, RoleQuote>>;
  onPick: (roleId: RoleId) => void;
}

export function AlternateRoleCards({ alternateRoles, previewQuoteByRole, onPick }: Props) {
  return (
    <div className="vnext-alternate-cards" style={{ display: 'flex', gap: 12, margin: '12px 0' }}>
      <div style={{ fontSize: 11, opacity: 0.5, alignSelf: 'center' }}>[Block4 换个嘴替帮你说]</div>
      {alternateRoles.map((r) => {
        const q = previewQuoteByRole[r.id];
        return (
          <button
            key={r.id}
            className="vnext-alternate-card"
            data-role-id={r.id}
            onClick={() => onPick(r.id)}
            style={{
              flex: 1,
              border: '1px dashed #BBB',
              padding: 12,
              background: '#FFF',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <div
              data-image-ref={r.imageRef}
              style={{
                width: 60,
                height: 60,
                background: '#E5E0D2',
                marginBottom: 4,
                fontSize: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
              }}
            >
              image
            </div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{r.roleName}</div>
            {q ? <div style={{ marginTop: 4, fontSize: 12, fontStyle: 'italic' }}>“{q.text}”</div> : null}
          </button>
        );
      })}
    </div>
  );
}
