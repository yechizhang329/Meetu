// Block 4: 换个嘴替帮你说 CTA (PRD v2.3 §7 Block 4).
// 展示 scene.rolePool 内除 currentRoleId 外的 2 个角色.
// 每张卡: profile 头像 + 角色名 + stylePhrase + quote preview.

import type { Role, RoleQuote, RoleId } from '../data/types';

interface Props {
  alternateRoles: Role[];
  previewQuoteByRole: Partial<Record<RoleId, RoleQuote>>;
  onPick: (roleId: RoleId) => void;
}

export function Block4AlternateRoles({ alternateRoles, previewQuoteByRole, onPick }: Props) {
  return (
    <section
      className="vnext-block4"
      data-block="4"
      aria-label="换个嘴替"
      style={{ margin: '24px 0' }}
    >
      <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 10 }}>
        换个嘴替帮你说
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {alternateRoles.map((r) => {
          const q = previewQuoteByRole[r.id];
          return (
            <button
              key={r.id}
              onClick={() => onPick(r.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '16px 10px 14px',
                background: '#FFF',
                border: '1px solid #2221',
                borderRadius: 14,
                cursor: 'pointer',
                fontFamily: 'inherit',
                textAlign: 'center',
              }}
            >
              <img
                src={r.imageRef.profile}
                alt={r.roleName}
                width={56}
                height={56}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  background: r.profileBgColor,
                }}
              />
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{r.roleName}</div>
              <div style={{ fontSize: 11, opacity: 0.6, lineHeight: 1.4 }}>{r.stylePhrase}</div>
              {q ? (
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                    fontStyle: 'italic',
                    opacity: 0.75,
                    lineHeight: 1.4,
                  }}
                >
                  “{q.text}”
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
