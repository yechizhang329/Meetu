// 心情值班室 v1.0 — Stage A demo (3 variants of S2-1 low-battery cat)
// PRD v1.0 §9.1 + Fiona/Jonathan task #23 thread (Jonathan f7a98482, Fiona dde4438d):
// PM gate is on a single line — S2-1 「人在。/ 电不在。」— rendered three ways
// (V1 clean, V2 note-paper frame, V3 background fusion + alt font/typography).

import { useRef, useState } from 'react';
import { MouthpieceCanvas, type MouthpieceCanvasHandle, type Variant } from './components/MouthpieceCanvas';
import { ROLES } from './data/roles';
import { LINES_BY_ID } from './data/lines-v1.1';
import { canExport } from './canvas/export-guard';

const ART_BASE_URL = `${import.meta.env.BASE_URL}duty-room-v1/`;

const VARIANTS: Array<{
  variant: Variant;
  title: string;
  paramSummary: string;
}> = [
  {
    variant: 'V3_1',
    title: 'V3.1 · 背景融合 + 字体/版式（PM gate iteration）',
    paramSummary:
      'paper #FBF6E8 / scale 0.72 / fontFamily LXGW WenKai / fs ×1.32 / lh 1.12 / padding 70 / textTopOffset +80 / jitter ×1.4 / signature 16px α0.42',
  },
];

interface SampleProps {
  variant: Variant;
  title: string;
  paramSummary: string;
}

function Sample({ variant, title, paramSummary }: SampleProps) {
  // All variants render S2-1 "人在 / 电不在" with low-battery cat
  const line = LINES_BY_ID['S2-1'];
  const role = ROLES[line.roleId];
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
      a.download = `mouthpiece-${variant}.png`;
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

  return (
    <div className="sample-card">
      <div className="sample-title">{title}</div>
      <div className="mouthpiece-stage">
        <MouthpieceCanvas
          ref={canvasRef}
          line={line}
          role={role}
          artBaseUrl={ART_BASE_URL}
          variant={variant}
          seed={1}
        />
      </div>
      <div className="sample-meta">{paramSummary}</div>
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
      <h1>S2-1 低电量猫 · 「人在。/ 电不在。」</h1>
      <p className="subtitle">3 variants — 同一行嘴替，不同布局/字体/底色</p>
      <div className="sample-grid">
        {VARIANTS.map((v) => (
          <Sample key={v.variant} {...v} />
        ))}
      </div>
    </main>
  );
}
