// 心情值班室 v1.0 — Stage A demo (4 flagship samples on V3.1 baseline)
// PM gate (Fiona msg `8afb723c`): V3.1 passed; extend to 4 roles with same strategy.

import { useRef, useState } from 'react';
import { MouthpieceCanvas, type MouthpieceCanvasHandle, type Variant } from './components/MouthpieceCanvas';
import { ROLES } from './data/roles';
import { LINES_BY_ID } from './data/lines-v1.1';
import { canExport } from './canvas/export-guard';

const ART_BASE_URL = `${import.meta.env.BASE_URL}duty-room-v1/`;

interface FlagshipSpec {
  lineId: string;
  variant: Variant;
  /** Optional per-role scale override (default uses VARIANT_PARAMS) */
  scale?: number;
  /** Override role.imagePosition for this output */
  position?: 'br' | 'bl' | 'bc' | 'cr' | 'cl' | 'cb';
  /** Override role.textAnchor for this output */
  textAnchor?: 'tl' | 'tc' | 'tr' | 'cl' | 'cc';
}

// 4 flagship outputs — all on V3_1 strategy, with per-role scale/position tune
//
// Per-role notes (素材-driven micro-tune; not a separate variant):
// - 低电量猫 S2-1: V3_1 default — already passed PM gate (msg 8afb723c)
// - 嘴硬鹅 S1-1: 角色 portrait-aspect → smaller scale (0.48), bottom-right
// - DDL 仓鼠 S3-1: 颊囊圆肚 + 横躺 → wider aspect ok at scale 0.6
// - 后台羊驼 S4-1: 角色细长 portrait → smaller scale (0.48), bottom-center
const FLAGSHIPS: FlagshipSpec[] = [
  { lineId: 'S2-1', variant: 'V3_1' },                                                  // 低电量猫
  { lineId: 'S1-1', variant: 'V3_1', scale: 0.48, position: 'br', textAnchor: 'tl' },   // 嘴硬鹅
  { lineId: 'S3-1', variant: 'V3_1', scale: 0.60, position: 'bl', textAnchor: 'tr' },   // DDL 仓鼠
  { lineId: 'S4-1', variant: 'V3_1', scale: 0.48, position: 'bc', textAnchor: 'tc' },   // 后台羊驼
];

interface SampleProps {
  spec: FlagshipSpec;
}

function Sample({ spec }: SampleProps) {
  const line = LINES_BY_ID[spec.lineId];
  const baseRole = ROLES[line.roleId];
  // Apply per-flagship overrides
  const role = {
    ...baseRole,
    scale: spec.scale ?? baseRole.scale,
    imagePosition: spec.position ?? baseRole.imagePosition,
    textAnchor: spec.textAnchor ?? baseRole.textAnchor,
  };
  const canvasRef = useRef<MouthpieceCanvasHandle | null>(null);
  const [exportState, setExportState] = useState<'idle' | 'busy' | 'blocked' | 'ok'>('idle');
  const [errMsg, setErrMsg] = useState('');

  const onSave = async () => {
    setExportState('busy');
    const gate = canExport(line.text);
    if (!gate.ok) {
      setExportState('blocked');
      setErrMsg(gate.reason ?? '');
      return;
    }
    try {
      const blob = await canvasRef.current!.toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mouthpiece-${spec.lineId}-${spec.variant}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setExportState('ok');
    } catch (e) {
      setExportState('blocked');
      setErrMsg(String(e));
    }
  };

  const truncatedText = line.text.length > 24 ? line.text.slice(0, 22) + '…' : line.text;

  return (
    <div className="sample-card">
      <div className="sample-title">{spec.lineId} · {baseRole.name}</div>
      <div className="mouthpiece-stage">
        <MouthpieceCanvas
          ref={canvasRef}
          line={line}
          role={role}
          artBaseUrl={ART_BASE_URL}
          variant={spec.variant}
          seed={1}
        />
      </div>
      <div className="sample-meta">「{truncatedText}」</div>
      <button className="sample-action" type="button" onClick={onSave}>
        {exportState === 'busy' ? '导出中…' :
          exportState === 'blocked' ? `阻断: ${errMsg || '导出被拒'}` :
            exportState === 'ok' ? '已下载' :
              '保存这张'}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <main className="app-shell">
      <h1>4 flagship · V3.1 基线</h1>
      <p className="subtitle">奶油米 / LXGW WenKai / 字大且紧 / 角色大 / 弱水印</p>
      <div className="sample-grid">
        {FLAGSHIPS.map((spec) => (
          <Sample key={spec.lineId} spec={spec} />
        ))}
      </div>
    </main>
  );
}
