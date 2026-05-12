// Block 2: 嘴替 profile 介绍 (PRD v2.3 §7 Block 2).
// Profile 头像 + 角色名 + stylePhrase + 3 条 master quotes 并列 (DavidC 23:32) + 2 tags.
// 注意: profile 只作头像小范围使用 (DavidC 23:20), section 背景统一 #F9F7F3.

import type { Role, RoleQuote } from '../data/types';

interface Props {
  role: Role;
  masterQuotes: RoleQuote[];
}

export function Block2RoleProfile({ role, masterQuotes }: Props) {
  return (
    <section
      className="vnext-block2"
      data-block="2"
      aria-label="嘴替介绍"
      style={{
        margin: '24px 0',
        padding: '20px 20px 24px',
        background: '#FFF',
        border: '1px solid #2221',
        borderRadius: 16,
      }}
    >
      <header style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <img
          src={role.imageRef.profile}
          alt={role.roleName}
          width={56}
          height={56}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            objectFit: 'cover',
            background: role.profileBgColor,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 17, fontWeight: 700 }}>{role.roleName}</div>
          <div style={{ fontSize: 12, opacity: 0.6, marginTop: 2 }}>{role.stylePhrase}</div>
        </div>
      </header>

      <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
        {role.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              padding: '3px 10px',
              border: '1px solid #2223',
              borderRadius: 11,
              opacity: 0.8,
            }}
          >
            #{t}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 18, borderTop: '1px dashed #2221', paddingTop: 16 }}>
        <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 10 }}>角色资料</div>

        {/* 个人资料 (DavidC 00:49 调整: 改为外显) */}
        <div
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            padding: '10px 12px',
            background: '#F9F7F3',
            borderRadius: 10,
            marginBottom: 12,
            opacity: 0.85,
          }}
        >
          {role.roleProfile}
        </div>

        {/* 3 条 master quotes 并列 */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {masterQuotes.map((q) => (
            <li
              key={q.quoteId}
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                padding: '8px 12px',
                background: '#F9F7F3',
                borderRadius: 10,
              }}
            >
              “{q.text}”
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
