// 心情值班室 v1.0 — Slip receipt data model
// Architecture: sceneBase × characterLayer → full 32 combo matrix.
// Jonathan: "8×4 = 32 结果组合, 不要固定绑定"
// Fiona: "scene / character 分离建模; renderReceipt({ sceneId, characterId })"
//
// Design notes:
// - sceneBase provides: scope line, stamp category, scene-level copy
// - characterLayer provides: animal name, sign/accent, avatar descriptor
// - overrides[sceneId][characterId] allows per-combo tweaks (Lucy v1.1)
// - `resolveSlipFields(sceneId, characterId)` merges all three layers

import type { SceneId, RoleId } from './types';

// ─── Scene base layer ───────────────────────────────────────────────────────
export interface SceneBase {
  id: SceneId;
  /** L2 凭条副标题 / 今日状态描述 */
  statusLine: string;
  /** L3 负责范围 / scope — what the animal is "managing" in this scene */
  scopeContent: string;
  /** L5 footer actions — self-deprecating CTA list */
  footerActions: string;
  /** Stamp category text (top line of red seal) */
  stampCategory: string;
}

export const SCENE_BASE: Record<SceneId, SceneBase> = {
  S1_stubborn_deny: {
    id: 'S1_stubborn_deny',
    statusLine: '今日状态：已嘴硬',
    scopeContent: '一切需要承认的事',
    footerActions: '否认现实 / 拒绝被看穿 / 保持矛盾',
    stampCategory: '嘴硬',
  },
  S2_low_battery: {
    id: 'S2_low_battery',
    statusLine: '今日状态：电量不足',
    scopeContent: '所有需要我营业的事',
    footerActions: '拒绝营业 / 自动关机 / 请勿充电',
    stampCategory: '低电量',
  },
  S3_ddl_procrast: {
    id: 'S3_ddl_procrast',
    statusLine: '今日状态：拖延中',
    scopeContent: '截止日期和所有"该做的事"',
    footerActions: '延期申请 / 心理建设 / 假装没看见',
    stampCategory: '拖延',
  },
  S4_polite_overflow: {
    id: 'S4_polite_overflow',
    statusLine: '今日状态：表面正常',
    scopeContent: '所有"好的没问题"背后的崩溃',
    footerActions: '微笑遮挡 / 后台崩盘 / 体面撑住',
    stampCategory: '后台崩',
  },
  S5_need_quiet: {
    id: 'S5_need_quiet',
    statusLine: '今日状态：勿扰',
    scopeContent: '所有打扰和需要回应的事',
    footerActions: '静音模式 / 不在服务区 / 请留言',
    stampCategory: '勿扰',
  },
  S6_invited_out: {
    id: 'S6_invited_out',
    statusLine: '今日状态：不想动',
    scopeContent: '朋友约我出门这件事',
    footerActions: '就地瘫痪 / 身体罢工 / 改天吧',
    stampCategory: '不动',
  },
  S7_msg_unreplied: {
    id: 'S7_msg_unreplied',
    statusLine: '今日状态：消息已读',
    scopeContent: '所有等待我回复的消息',
    footerActions: '已读不回 / 嘴巴罢工 / 明天再说',
    stampCategory: '已读',
  },
  S8_pushed_along: {
    id: 'S8_pushed_along',
    statusLine: '今日状态：被催了',
    scopeContent: '所有催我的人和事',
    footerActions: '被动前进 / 被安排明白 / 不情愿执行',
    stampCategory: '被催',
  },
};

// ─── Character layer ────────────────────────────────────────────────────────
export interface CharacterLayer {
  id: RoleId;
  /** 动物名 (display) */
  animalName: string;
  /** 岗位签名 — appears below stamp */
  signLine: string;
  /** Accent color for this character (stamp tint, avatar ring) */
  accent: string;
  /** Avatar descriptor — shown on receipt as role identity */
  avatarDesc: string;
  /** Tone qualifier — modifies scope/footer voice */
  tone: string;
}

export const CHARACTER_LAYER: Record<RoleId, CharacterLayer> = {
  stubborn_goose: {
    id: 'stubborn_goose',
    animalName: '嘴硬鹅',
    signLine: '否认部部长',
    accent: '#D4574A',
    avatarDesc: '大白鹅 · 昂首挺胸',
    tone: '死不承认',
  },
  low_battery_cat: {
    id: 'low_battery_cat',
    animalName: '低电量猫',
    signLine: '电量管理员',
    accent: '#E8734A',
    avatarDesc: '橘猫 · 瘫软',
    tone: '没电了',
  },
  ddl_hamster: {
    id: 'ddl_hamster',
    animalName: 'DDL 仓鼠',
    signLine: '截止日期专员',
    accent: '#D49B2A',
    avatarDesc: '仓鼠 · 慌张',
    tone: '等会再说',
  },
  backstage_alpaca: {
    id: 'backstage_alpaca',
    animalName: '后台羊驼',
    signLine: '前台正常员',
    accent: '#6B8F6B',
    avatarDesc: '羊驼 · 微笑面具',
    tone: '表面正常',
  },
};

// ─── Per-combo overrides (sparse — only cells that need special copy) ────────
/** Override specific fields for a scene×character combo. Partial — unset fields
 *  fall through to sceneBase/characterLayer defaults. */
export type ComboOverride = Partial<{
  statusLine: string;
  scopeContent: string;
  footerActions: string;
  stampCategory: string;
  signLine: string;
}>;

/** Sparse override map. Not all 32 cells need overrides. */
export const COMBO_OVERRIDES: Partial<Record<SceneId, Partial<Record<RoleId, ComboOverride>>>> = {
  // Example: low_battery_cat in S1 (stubborn deny) — unique voice
  S1_stubborn_deny: {
    low_battery_cat: {
      statusLine: '今日状态：嘴硬 + 没电',
      footerActions: '否认没电 / 否认疲劳 / 继续瘫',
    },
  },
  // More overrides can be added by Lucy v1.1 — architecture supports it
};

// ─── Resolution function ────────────────────────────────────────────────────
export interface ResolvedSlipFields {
  // Scene layer
  statusLine: string;
  scopeContent: string;
  footerActions: string;
  stampCategory: string;
  // Character layer
  animalName: string;
  signLine: string;
  accent: string;
  avatarDesc: string;
  tone: string;
  // Composed
  stampText: string;       // `${stampCategory} / 值班中`
  serialNo: string;        // `No.${hash}`
  title: string;           // '今日代班凭条'
  scopeLabel: string;      // '今日状态'
  actionsIntro: string;    // '这张单子可以：'
}

/** Resolve the full slip copy fields for any scene×character combo.
 *  This is the single entry point — Canvas + Result page both call this. */
export function resolveSlipFields(sceneId: SceneId, characterId: RoleId): ResolvedSlipFields {
  const scene = SCENE_BASE[sceneId];
  const char = CHARACTER_LAYER[characterId];
  const override = COMBO_OVERRIDES[sceneId]?.[characterId];

  const statusLine = override?.statusLine ?? scene.statusLine;
  const scopeContent = override?.scopeContent ?? scene.scopeContent;
  const footerActions = override?.footerActions ?? scene.footerActions;
  const stampCategory = override?.stampCategory ?? scene.stampCategory;
  const signLine = override?.signLine ?? char.signLine;

  // Serial number: deterministic from combo (not random)
  const comboIdx = ALL_SCENE_IDS.indexOf(sceneId) * 4 + ALL_ROLE_IDS.indexOf(characterId);
  const serialNo = `No.${String(comboIdx + 1).padStart(3, '0')}`;

  return {
    statusLine,
    scopeContent,
    footerActions,
    stampCategory,
    animalName: char.animalName,
    signLine,
    accent: char.accent,
    avatarDesc: char.avatarDesc,
    tone: char.tone,
    stampText: `${stampCategory} / 值班中`,
    serialNo,
    title: '今日代班凭条',
    scopeLabel: '今日状态',
    actionsIntro: '这张单子可以：',
  };
}

// ─── Enumeration helpers ────────────────────────────────────────────────────
export const ALL_SCENE_IDS: SceneId[] = [
  'S1_stubborn_deny',
  'S2_low_battery',
  'S3_ddl_procrast',
  'S4_polite_overflow',
  'S5_need_quiet',
  'S6_invited_out',
  'S7_msg_unreplied',
  'S8_pushed_along',
];

export const ALL_ROLE_IDS: RoleId[] = [
  'stubborn_goose',
  'low_battery_cat',
  'ddl_hamster',
  'backstage_alpaca',
];

/** Generate the full 32-combo matrix. Used by batch export + QA. */
export function generateFullMatrix(): Array<{ sceneId: SceneId; characterId: RoleId }> {
  const combos: Array<{ sceneId: SceneId; characterId: RoleId }> = [];
  for (const sceneId of ALL_SCENE_IDS) {
    for (const characterId of ALL_ROLE_IDS) {
      combos.push({ sceneId, characterId });
    }
  }
  return combos;
}
