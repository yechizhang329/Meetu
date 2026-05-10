// 心情值班室 vNext — Domain types
// SoT: Meetu/产品文档/2026-05-10-心情值班室-vNext-PRD-v2.1-角色嘴替重构中文版.md
// 不依赖 / 不复用 / 不 import duty-room-v1 任何 product module。
// 字段名按 PRD §8 (英文); 字段值按文案/视觉定稿后填中文。

/** 角色 ID — A/B/C/D/E 内部码, 最终命名由文案侧定 (PRD §10.3) */
export type RoleId = 'A' | 'B' | 'C' | 'D' | 'E';

/** 场景 ID — S1-S6, PRD §6 */
export type SceneId = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6';

/** quote 在结果页的展示位置 */
export type QuoteUsage = 'role_card' | 'alternate_card' | 'result_support';

/** quote 强度档 — 内部用, 不外显 */
export type QuoteIntensity = 'safe' | 'strong';

export interface Role {
  id: RoleId;
  /** 角色名称, 外显. P0 阶段值是 placeholder (TBD-NOT-FINAL-COPY-...). */
  roleName: string;
  /** 角色形象资源 key. P0 阶段值是 placeholder. */
  imageRef: string;
  /** 极短风格短语, 外显. */
  stylePhrase: string;
  /** 一句人格状态, 外显. */
  personalityLine: string;
  /** 内部声线规则, 不外显. */
  voiceRules: string[];
  /** 内部红线 (该角色不能做的事), 不外显. */
  forbiddenMoves: string[];
}

export interface RoleQuote {
  roleId: RoleId;
  /** 稳定 ID, 用于 React key + variant supportQuoteId 引用. */
  quoteId: string;
  /** quote 文本. P0 阶段是 placeholder. */
  text: string;
  usage: QuoteUsage;
  /** 内部强度档, 不外显. */
  intensity: QuoteIntensity;
  /** 可选 — quote 适配哪些 scene; 留空表示通用. */
  sceneFit?: SceneId[];
}

export interface Scene {
  id: SceneId;
  /** 用户看到的场景方向, 外显. P0 阶段是 placeholder. */
  externalDirection: string;
  defaultRoleId: RoleId;
  /** P0 PRD §6 固定 3 个. 类型层用 tuple 锁长度. */
  rolePool: readonly [RoleId, RoleId, RoleId];
}

export interface ResultVariant {
  sceneId: SceneId;
  roleId: RoleId;
  /** 稳定 ID, 用于"换个说法"的 next-pointer + analytics. */
  variantId: string;
  /** 结果句, 外显. P0 阶段是 placeholder. */
  resultText: string;
  /** 可选 — 该 variant 引用的 quote (作为氛围补充). */
  supportQuoteId?: string;
}

/** 结果页状态机 state — PRD §7.3/§7.4 + Fiona 23:01 #2 */
export interface ResultPageState {
  sceneId: SceneId;
  currentRoleId: RoleId;
  /** 来自 scene.rolePool, 切换嘴替时不变. */
  rolePool: readonly [RoleId, RoleId, RoleId];
  variantId: string;
}
