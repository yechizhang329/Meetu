// vNext ResultPage — 5 block layout per PRD §7.

import type { Scene } from '../data/types';
import { useResultPageState } from '../state/useResultPageState';
import { ROLE_BY_ID } from '../config/roles.config';
import { QUOTES_BY_ROLE } from '../config/quotes.config';
import { VARIANTS } from '../config/variants.config';
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
  const currentRoleQuote = QUOTES_BY_ROLE[state.currentRoleId]?.find((q) => q.usage === 'role_card');

  const alternateRoles = alternateRoleIds.map((rid) => ROLE_BY_ID[rid]).filter(Boolean);
  const quotePreviewByRole = Object.fromEntries(
    alternateRoleIds.map((rid) => [rid, QUOTES_BY_ROLE[rid]?.find((q) => q.usage === 'alternate_card')]),
  );

  return (
    <div className="vnext-result-page" style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
      <button onClick={onBackToSelect} style={{ fontSize: 12 }}>← 重选场景</button>
      <h2 style={{ fontSize: 16, marginTop: 12 }}>
        {scene.id}: {scene.externalDirection}
      </h2>

      <ResultImage scene={scene} role={currentRole} variant={variant} />

      <CurrentRoleCard role={currentRole} quote={currentRoleQuote} />

      <div style={{ margin: '12px 0' }}>
        <ChangeWordingButton onClick={changeWording} />
      </div>

      <AlternateRoleCards
        alternateRoles={alternateRoles}
        quotePreviewByRole={quotePreviewByRole}
        onPick={switchRole}
      />

      <ResultActions onReselect={onBackToSelect} />
    </div>
  );
}
