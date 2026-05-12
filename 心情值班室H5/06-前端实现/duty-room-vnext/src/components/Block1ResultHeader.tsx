// Block 1: 嘴替结果展示区 (PRD v2.3 §7 Block 1).
// 单角色 PNG + 角色名 + 一句 result_text (当前 variant).

import type { Role, ResultVariant } from '../data/types';

interface Props {
  role: Role;
  variant: ResultVariant | undefined;
}

export function Block1ResultHeader({ role, variant }: Props) {
  return (
    <section
      className="vnext-block1"
      data-block="1"
      aria-label="嘴替结果"
      style={{
        padding: '16px 24px 24px',
        background: '#F9F7F3',
        borderRadius: 20,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          maxWidth: 360,
          margin: '0 auto',
          background: '#F9F7F3', // 与 PNG 底色一致, 避免色差 (DavidC 23:20)
        }}
      >
        <img
          src={role.imageRef.single}
          alt={role.roleName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
      <div style={{ marginTop: 8, textAlign: 'center' }}>
        <div style={{ fontSize: 13, opacity: 0.55, letterSpacing: 1 }}>{role.roleName}</div>
      </div>
      <div
        style={{
          marginTop: 16,
          padding: '20px 18px',
          background: '#FFF',
          border: '1px solid #2221',
          borderRadius: 14,
          fontFamily: "'ZCOOL KuaiLe', cursive",
          fontSize: 28, // 72pt ≈ 96px CSS, 缩放到移动端 28px (spec §7.1 + §11.3)
          lineHeight: 1.45,
          fontWeight: 400,
          color: '#1A1715',
          textAlign: 'center',
        }}
      >
        {variant?.resultText ?? '(暂无 variant)'}
      </div>
    </section>
  );
}
