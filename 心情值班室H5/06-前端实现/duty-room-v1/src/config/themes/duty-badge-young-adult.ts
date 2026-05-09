// 心情值班室 v1.0 — `duty-badge-young-adult` theme (P0 主线 scaffolding).
//
// PM gate (Fiona 23:09): Lucy passed B-young-adult final stress test.
// PM decision: P0 主线 = 「今日代班凭条」 / young-adult duty slip
// (奶茶小票 / 登机牌 / 取件码 / 生活凭条 / 签收感).
//
// SCAFFOLDING ONLY — this file is INACTIVE.
// `ACTIVE_THEME_ID` in src/config/theme.ts is still 'proof'. Do NOT flip it
// until Phoebe's 23:40 low-fi v0.2 lands and PM gate passes.
//
// Locked finals (PM 23:09):
//   - slipCopy.scopeLabel    = '今日状态'        (was 「受理信息」)
//   - slipCopy.actionsIntro  = '这张单子可以：'   (was 「凭此单可」)
//   - slipCopy.serial        = 'No.007'           (footer 删域名 only weak No.007)
// Placeholders (await Phoebe v0.2):
//   - title / handoffLine / scopeLine / stampText / signature / footerActions
//
// Token policy (per 23:00 deep dive + 22:55 young-adult gate):
//   - 谱系：热敏小票 / 生活凭条，不是档案凭证、不是公文工牌、不是学生证
//   - 颜色：小票白偏米，不是纯白；印字偏棕黑，不是纯黑；红只用在斜歪橡皮章
//   - 字体：等宽 mono 主导（小票印字感），serif 仅 footer 自嘲句
//   - 不出现：国徽 / 五角星 / 红头横条 / 校徽 / 学号 / 课代表 / 员工编号 / 工位
//
// Values below are TENTATIVE — they will be re-tuned when Phoebe's v0.2 visual
// board lands (~23:40). They are good enough for inactive scaffolding compile +
// type checks, NOT for visual review.

import type { Theme } from './types';

export const DUTY_BADGE_YOUNG_ADULT_THEME: Theme = {
  id: 'duty-badge-young-adult',
  label: 'duty-badge-young-adult · 今日代班凭条 (scaffolding, awaiting Phoebe v0.2)',
  cssVars: {
    // tentative小票白偏米；Phoebe v0.2 之后再调
    bg: '#F0E9D8',
    surface: '#FAF7F0',
    // tentative 热敏打印感深棕黑
    ink: '#1A1614',
    inkMuted: '#6B5F50',
    // tentative 橡皮章红 — 仅斜章用，UI accent 不该用纯红
    accent: '#1A1614',
    accentInk: '#FAF7F0',
    divider: 'rgba(26, 22, 20, 0.10)',
    // tentative 等宽 mono + serif italic 自嘲
    fontPrimary:
      '"JetBrains Mono", "IBM Plex Mono", "Menlo", "PingFang SC", system-ui, monospace',
    fontHand:
      '"Noto Serif SC", "Songti SC", "PingFang SC", serif',
    // 小票方角，不要圆角太大
    radiusPill: '4px',
    radiusCard: '2px',
  },
  layoutPreset: 'duty_slip',
  // PM 23:09 final lock (3) + Phoebe v0.2 placeholder (6).
  slipCopy: {
    title: '',          // ⏳ Phoebe v0.2 — working assumption「今日代班凭条」, NOT default
    serial: 'No.007',   // ✅ PM lock 23:09
    handoffLine: '',    // ⏳ Phoebe v0.2
    scopeLabel: '今日状态',     // ✅ PM lock 23:09
    scopeLine: '',      // ⏳ Phoebe v0.2
    stampText: '',      // ⏳ Phoebe v0.2
    signature: '',      // ⏳ Phoebe v0.2
    actionsIntro: '这张单子可以：',  // ✅ PM lock 23:09
    footerActions: '',  // ⏳ Phoebe v0.2
  },
};
