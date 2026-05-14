// vNext ResultPage — P3, 6 blocks per PRD v2.3 §7.

import type { Scene, RoleId, RoleQuote } from '../data/types';
import { useResultPageState } from '../state/useResultPageState';
import { ROLE_BY_ID } from '../config/roles.config';
import { masterQuotesOf, pickPreviewQuote } from '../config/quotes.config';
import { VARIANTS } from '../config/variants.config';
import { Block1ResultHeader } from '../components/Block1ResultHeader';
import { Block2RoleProfile } from '../components/Block2RoleProfile';
import { Block3ChangeWording } from '../components/Block3ChangeWording';
import { Block4AlternateRoles } from '../components/Block4AlternateRoles';
import { Block5ShareImage } from '../components/Block5ShareImage';
import { Block6MeetuCTA } from '../components/Block6MeetuCTA';

interface Props {
  scene: Scene;
  initialRoleId: RoleId;
  onBackToSceneSelect: () => void;
}

export function ResultPage({ scene, initialRoleId, onBackToSceneSelect }: Props) {
  const { state, changeWording, switchRole, alternateRoleIds, variantIndex, variantCount } =
    useResultPageState(scene, initialRoleId);
  const currentRole = ROLE_BY_ID[state.currentRoleId];
  const variant = VARIANTS.find((v) => v.variantId === state.variantId);
  const masterQuotes = masterQuotesOf(state.currentRoleId);

  const alternateRoles = alternateRoleIds.map((rid) => ROLE_BY_ID[rid]).filter(Boolean);
  const previewQuoteByRole: Partial<Record<RoleId, RoleQuote>> = {};
  for (const rid of alternateRoleIds) {
    const q = pickPreviewQuote(rid);
    if (q) previewQuoteByRole[rid] = q;
  }

  return (
    <div
      className="vnext-result-page"
      style={{
        padding: '12px 16px 40px',
        maxWidth: 480,
        margin: '0 auto',
        fontFamily: '"PingFang SC", "Hiragino Sans GB", system-ui, sans-serif',
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          fontSize: 12,
          opacity: 0.65,
          padding: '8px 4px',
        }}
      >
        <button
          onClick={onBackToSceneSelect}
          style={{ background: 'transparent', border: 'none', fontSize: 12, cursor: 'pointer', padding: 0 }}
        >
          ← 重选场景
        </button>
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: 11, opacity: 0.55 }}>
          {scene.id} · {scene.sceneTitle}
        </span>
      </header>

      <Block1ResultHeader role={currentRole} variant={variant} />

      <div style={{ marginTop: 16 }}>
        <Block3ChangeWording
          variantCount={variantCount}
          variantIndex={variantIndex}
          onClick={changeWording}
        />
      </div>

      <Block2RoleProfile
        role={currentRole}
        masterQuotes={masterQuotes}
        friendsView={currentRole.friendsView}
        funFact={currentRole.funFact}
      />

      <Block4AlternateRoles
        alternateRoles={alternateRoles}
        previewQuoteByRole={previewQuoteByRole}
        onPick={switchRole}
      />

      <Block5ShareImage role={currentRole} variant={variant} />

      <Block6MeetuCTA />
    </div>
  );
}
