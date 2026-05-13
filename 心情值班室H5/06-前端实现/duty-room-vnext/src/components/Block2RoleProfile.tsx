// Block 2: 嘴替 profile 介绍 (PRD v2.3 §7 Block 2).
// Profile 头像 + 角色名 + stylePhrase + 4 板块角色资料 (Lucy v2 扩充) + 2 tags.
// 注意: profile 只作头像小范围使用 (DavidC 23:20), section 背景统一 #F9F7F3.

import type { Role, RoleQuote } from '../data/types';

interface Props {
  role: Role;
  masterQuotes: RoleQuote[];
  friendsView: string[]; // 板块 3: 朋友眼中的 TA (3-4 条短句)
  funFact: string; // 板块 4: Fun Fact (1 段)
}

export function Block2RoleProfile({ role, masterQuotes, friendsView, funFact }: Props) {
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
        {/* 板块 1: 个人资料 */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 8 }}>个人资料</div>
          <div
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              padding: '10px 12px',
              background: '#F9F7F3',
              borderRadius: 10,
              opacity: 0.85,
              marginBottom: 8,
            }}
          >
            {role.roleProfile}
          </div>
          {/* 专业/辅修 分行展示, 颜色区分 (DavidC 08:16: 拆分独立字段, 5 角色统一格式+颜色) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              marginTop: 2,
            }}
          >
            <div
              style={{
                fontSize: 12,
                padding: '6px 12px',
                background: '#EFE8DA', // 专业 — 主色 (warm beige + black text)
                color: '#1A1715',
                borderRadius: 10,
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 11, opacity: 0.7, letterSpacing: 1 }}>专业</span>
              <span style={{ fontWeight: 600 }}>{role.major}</span>
            </div>
            <div
              style={{
                fontSize: 12,
                padding: '6px 12px',
                background: '#F4F0E6', // 辅修 — 副色 (稍浅 warm beige)
                color: '#6B6660',
                borderRadius: 10,
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 11, opacity: 0.7, letterSpacing: 1 }}>辅修</span>
              <span style={{ fontWeight: 600 }}>{role.minor}</span>
            </div>
          </div>
        </div>

        {/* 板块 2: 经典语录 (3 master quotes) — 对话气泡 + 荧光绿边框 (Phoebe2 commit 1c616ef 方案 A) */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 8 }}>经典语录</div>
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
                  background: '#F9F7F3',
                  padding: '10px 14px',
                  borderRadius: 16,
                  fontSize: 13,
                  lineHeight: 1.5,
                  position: 'relative',
                  borderLeft: '3px solid #1FE07B',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 8,
                    top: 6,
                    fontSize: 20,
                    opacity: 0.2,
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  "
                </span>
                {q.text}
              </li>
            ))}
          </ul>
        </div>

        {/* 板块 3: 朋友眼中的 TA — 图标 bullet (👤 emoji) (Phoebe2 commit 1c616ef 方案 B) */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 8 }}>朋友眼中的 TA</div>
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
            {friendsView.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>👤</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 板块 4: Fun Fact — 卡片式 + ✨ emoji 装饰 (Phoebe2 commit 1c616ef 方案 C) */}
        <div>
          <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: 1, marginBottom: 8 }}>Fun Fact</div>
          <div
            style={{
              background: 'linear-gradient(135deg, #F9F7F3 0%, #F5F1E8 100%)',
              padding: '14px 16px',
              borderRadius: 12,
              border: '1px solid rgba(0,0,0,0.06)',
              fontSize: 13,
              lineHeight: 1.6,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                position: 'absolute',
                right: 12,
                top: 12,
                fontSize: 20,
                opacity: 0.3,
              }}
            >
              ✨
            </span>
            {funFact}
          </div>
        </div>
      </div>
    </section>
  );
}
