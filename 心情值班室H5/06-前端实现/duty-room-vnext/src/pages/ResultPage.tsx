// vNext ResultPage — 5 block layout per PRD §7 + SoT §6.

import type { Scene, RoleId, RoleQuote } from '../data/types';
import { useResultPageState } from '../state/useResultPageState';
import { ROLE_BY_ID } from '../config/roles.config';
import { pickRoleCardQuote, pickPreviewQuote } from '../config/quotes.config';
import { VARIANTS, variantCountOf } from '../config/variants.config';
import { ResultImage } from '../components/ResultImage';
import { CurrentRoleCard } from '../components/CurrentRoleCard';
import { ChangeWordingButton } from '../components/ChangeWordingButton';
import { AlternateRoleCards } from '../components/AlternateRoleCards';
import { ResultActions } from '../components/ResultActions';

interface Props {
  scene: Scene;
  onBackToSelect: () => void;
}

export function ResultPage({ scene, onBackToSelect }: Props) {
  const { state, changeWording, switchRole, alternateRoleIds } = useResultPageState(scene);
  const currentRole = ROLE_BY_ID[state.currentRoleId];
  const variant = VARIANTS.find((v) => v.variantId === state.variantId);
  const currentRoleCardQuote = pickRoleCardQuote(state.currentRoleId);

  const alternateRoles = alternateRoleIds.map((rid) => ROLE_BY_ID[rid]).filter(Boolean);
  const previewQuoteByRole: Partial<Record<RoleId, RoleQuote>> = {};
  for (const rid of alternateRoleIds) {
    const q = pickPreviewQuote(rid);
    if (q) previewQuoteByRole[rid] = q;
  }

  return (
    <div className="vnext-result-page" style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
      <button onClick={onBackToSelect} style={{ fontSize: 12 }}>← 重选场景</button>
      <h2 style={{ fontSize: 16, marginTop: 12 }}>
        {scene.id}: {scene.sceneTitle}
      </h2>
      <div style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>{scene.sceneExamples}</div>

      <ResultImage scene={scene} role={currentRole} variant={variant} />

      <CurrentRoleCard role={currentRole} roleCardQuote={currentRoleCardQuote} />

      <div style={{ margin: '12px 0' }}>
        <ChangeWordingButton
          variantCount={variantCountOf(state.sceneId, state.currentRoleId)}
          onClick={changeWording}
        />
      </div>

      <AlternateRoleCards
        alternateRoles={alternateRoles}
        previewQuoteByRole={previewQuoteByRole}
        onPick={switchRole}
      />

      <ResultActions onReselect={onBackToSelect} />
    </div>
  );
}
