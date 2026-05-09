// 心情值班室 v1.0 — IntroPage
// 首屏 per Phoebe task #32 v0.3 direction: 便签桌面 + 4 animals naturally present
// + primary CTA. Page reads ONLY from theme CSS vars (--theme-*) — no hard-
// coded colors — so flipping `ACTIVE_THEME_ID` re-skins this page.

import { ROLES, ROLE_IDS } from '../data/roles';
import type { RoleId } from '../data/types';

interface Props {
  artBaseUrl: string;
  onStart: () => void;
}

export function IntroPage({ artBaseUrl, onStart }: Props) {
  return (
    <div className="intro-page">
      <div className="intro-desk">
        <div className="intro-headline">心情值班室</div>
        <div className="intro-sub">不想自己讲，让替我们说。</div>
        <div className="intro-role-row">
          {ROLE_IDS.map((id: RoleId, idx: number) => {
            const role = ROLES[id];
            const src = role.artPath ? `${artBaseUrl}${role.artPath}` : undefined;
            return (
              <div className={`intro-role intro-role-${idx}`} key={id}>
                {src ? <img src={src} alt={role.name} /> : null}
                <div className="intro-role-name">{role.name}</div>
              </div>
            );
          })}
        </div>
        <button type="button" className="intro-cta" onClick={onStart}>
          让他们替我说
        </button>
        <div className="intro-caption">今天不想营业？把话交给值班的他们。</div>
      </div>
    </div>
  );
}
