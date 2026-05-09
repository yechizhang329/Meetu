// Defence line 2/3 — export-time PLACEHOLDER guard.
// tech-selection-v1.md §5.2 — disabled download button + toast if text smells of
// placeholder / internal ID.

export interface ExportGate {
  ok: boolean;
  reason?: string;
}

export function canExport(text: string): ExportGate {
  const t = (text ?? '').trim();
  if (!t) return { ok: false, reason: '文案为空' };
  if (/__PLACEHOLDER/i.test(t)) return { ok: false, reason: 'placeholder 未替换' };
  if (/__tag_[a-z_0-9]+__/i.test(t)) return { ok: false, reason: '技术 tag 未替换' };
  if (/^[a-z][a-z0-9_-]*$/i.test(t)) return { ok: false, reason: '看起来是内部 ID' };
  return { ok: true };
}
