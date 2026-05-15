// 心情值班室 vNext — Domain types
// SoT (文案):
//   Meetu/产品文档/2026-05-12-心情值班室-vNext-copy-sot-v2.md
// SoT (产品):
//   Meetu/产品文档/2026-05-12-心情值班室-vNext-PRD-v2.3.md
// 不依赖 / 不复用 / 不 import duty-room-v1 任何 product module。
//
// vNext role names (final, locked by DavidC 22:25 + 12:18 sloth rename):
//   A = 嘴硬章鱼 / B = 断电猫 / C = 躺平树懒 / D = 整活吗喽 / E = 高情商刺猬

/** 角色 ID — A/B/C/D/E 内部码; SoT §2 final 命名见 Role.roleName. */
export type RoleId = 'A' | 'B' | 'C' | 'D' | 'E';

/** 场景 ID — S1-S6, SoT §1. */
export type SceneId = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6';

/** quote 在结果页的展示位置. SoT §5 quote 使用规则:
 *   - role_card    : 中长可独立成立的一句, 承担当前嘴替核心识别 (前端角色卡人格/说明位由此取, 替代原 personality line)
 *   - preview      : ≤8 字短句, 换嘴替 CTA 卡 quote_preview 槽位
 *   - result_support : 极短或氛围补充, 结果图下方/角色说明区小字
 * 注意: 一条 quote 的 usage 字段是 string array (multi-usage), SoT 中如 "role_card / preview" 表示该 quote 同时可作两种用途.
 */
export type QuoteUsage = 'role_card' | 'preview' | 'result_support';

/** 角色形象资源路径. PRD v2.3 §8 拆 single/profile 双 ref. */
export interface RoleImageRef {
  /** 单角色 PNG, 1080x1080, 浅米底 #F9F7F3. 用于 Block 1 / Block 5. */
  single: string;
  /** profile 头像图, 1200x1200, 极低饱和彩色背景. 用于 Block 2 / Block 4 / P2. */
  profile: string;
}

export interface Role {
  id: RoleId;
  /** 角色名称, 外显. SoT §2 final. */
  roleName: string;
  /** 角色形象资源 (PRD v2.3 §8). */
  imageRef: RoleImageRef;
  /** 风格短语 master, 7-12 字, 外显 (SoT §5.1 final, 22:47 更新版). 用于 Block 2 + Block 4. */
  stylePhrase: string;
  /** 角色标签 [master, backup], 外显 (SoT §9.1 final, 21:08 final). 用于 Block 2 + Block 5. */
  tags: readonly [string, string];
  /** profile 图自身视觉属性 (图片自带 5 色背景). 不驱动 section 背景色 (DavidC 23:20: profile 只作头像小范围使用, 不影响页面整体背景). */
  profileBgColor: string;
  /** Block 2 经典语录 borderLeft 色 (Phoebe2 P1: 从 profileBgColor HSL 派生, contrast ≥ 3.9:1, 角色身份化). */
  quoteBorderColor: string;
  /** SoT §2 个人资料: 第三人称半口语档案. DavidC 00:49 调整: 改为外显, 在 Block 2 "角色资料"区展示 (个人资料 + 3 master quotes). */
  roleProfile: string;
  /** SoT §2 专业 (DavidC 08:07 拆分独立字段). 外显. */
  major: string;
  /** SoT §2 辅修 (DavidC 08:07 拆分独立字段). 外显. */
  minor: string;
  /** Lucy v2 扩充 板块 3: 朋友眼中的 TA (3-4 条短句, 第三人称视角). 外显. */
  friendsView: string[];
  /** Lucy v2 扩充 板块 4: Fun Fact (1 段, 40-100 字, 动物特性 + 角色反差). 外显. */
  funFact: string;
  /** SoT §2 voice principle: 内部声线核心 (一句). 不外显. */
  voicePrinciple: string;
  /** SoT §2 do: 该角色应该这么写的方式 (内部, 不外显). */
  do: string[];
  /** SoT §2 don't: 该角色不能这么写的方式 (内部, 不外显). */
  dont: string[];
  /** SoT §2 redline: 角色硬红线, 不外显. */
  redline: string[];
  /** 该角色的默认 scenes (SoT §2 default scene; B 有 S2+S5 两个). */
  defaultScenes: SceneId[];
  /** 该角色作为备选的 scenes (SoT §2 backup scenes); 与 defaultScenes 不重叠. */
  backupScenes: SceneId[];
}

export interface RoleQuote {
  roleId: RoleId;
  /** 稳定 ID, 用于 React key + variant supportQuoteId 引用. */
  quoteId: string;
  /** quote 文本, 外显. */
  text: string;
  /** quote 适用位置 (SoT §5 quote 使用规则). 一条 quote 可有多个 usage. */
  usages: QuoteUsage[];
  /** SoT §3/§4 master vs backup 池区分. master 优先. */
  tier: 'master' | 'backup';
}

export interface Scene {
  id: SceneId;
  /** 用户看到的场景标题, 外显 (SoT §1 scene_title). */
  sceneTitle: string;
  /** 用户在场景卡上看到的触发举例, 外显 (SoT §1 scene_examples, "/" 分隔的短例). */
  sceneExamples: string;
  /** 默认角色 (SoT §1 默认角色). */
  defaultRoleId: RoleId;
  /** 备选 1 + 备选 2; 类型层固定 3 (SoT §1 默认+备选1+备选2 共构成 rolePool). */
  rolePool: readonly [RoleId, RoleId, RoleId];
}

export interface ResultVariant {
  sceneId: SceneId;
  roleId: RoleId;
  /** 稳定 ID, 用于"换个说法"的 next-pointer + analytics. */
  variantId: string;
  /** 结果句, 外显. SoT §6 final. */
  resultText: string;
  /** 可选 — 该 variant 引用的 quote (作为氛围补充). */
  supportQuoteId?: string;
}

/** 结果页状态机 state (PRD §7.3/§7.4). */
export interface ResultPageState {
  sceneId: SceneId;
  currentRoleId: RoleId;
  rolePool: readonly [RoleId, RoleId, RoleId];
  variantId: string;
}
