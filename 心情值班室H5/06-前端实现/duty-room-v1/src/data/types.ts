// 心情值班室 v1.0 — Domain types
// PRD v1.0 §2 (4 roles) + §3 (8 scenes) + Lucy v1.1 (56 lines + 2 launch packs)

export type RoleId =
  | 'stubborn_goose'      // 嘴硬鹅 · 否认部部长
  | 'low_battery_cat'     // 低电量猫 · 电量管理员
  | 'ddl_hamster'         // DDL 仓鼠 · 截止日期专员
  | 'backstage_alpaca';   // 后台羊驼 · 前台正常员

export type SceneId =
  | 'S1_stubborn_deny'    // 嘴硬否认
  | 'S2_low_battery'      // 低电量拒绝营业
  | 'S3_ddl_procrast'     // DDL / 拖延
  | 'S4_polite_overflow'  // 表面正常后台崩
  | 'S5_need_quiet'       // 想安静 / 勿扰
  | 'S6_invited_out'      // 被约出门但不想动
  | 'S7_msg_unreplied'    // 消息不想回
  | 'S8_pushed_along';    // 被安排 / 被催

/** Mouthpiece line — Lucy v1.1 row */
export interface MouthpieceLine {
  /** Stable line id (e.g. "S1-1", "B-G3"). Used as React key + analytics. */
  lineId: string;
  sceneId: SceneId;
  roleId: RoleId;
  /** 用户原话 — only used for offline reference, not rendered to user. */
  userOriginal: string;
  /** 嘴替句 — the line shown on the canvas. May contain "/" as a soft-break hint. */
  text: string;
  /** 朋友接话 — surfaced on UI as caption suggestion. */
  friendReply: string;
  /** 配文建议 — copy-and-share caption. */
  caption: string;
  /** PRD §3.1 5 问 score: 5 = A tier, 4 = B backup. */
  selfCheck: 5 | 4;
  /** Visual mode tag — directs only the text renderer / Phoebe2 image work, not layout. */
  visualMode: string;
  /** A tier (40 lines) vs B backup (16 lines) */
  tier: 'A' | 'B';
  /** PRD §10.1 — exclude from launch pool when true. Set explicitly per Fiona msg 053ccbc7. */
  excludedFromFlagship?: boolean;
}

/** Scene metadata — PRD §3 routing table */
export interface SceneMeta {
  id: SceneId;
  /** UI-facing scene title — what the user picks. */
  userPick: string;
  /** Internal label, not shown to user. */
  internalLabel: string;
  /** Primary recommended role */
  primary: RoleId;
  /** Fallback role */
  fallback: RoleId;
}

/** Role definition + visual asset hints (used by MouthpieceCanvas to position image) */
export interface RoleDef {
  id: RoleId;
  /** Display name */
  name: string;
  /** Internal station label — kept off-canvas. */
  station: string;
  /** Path to character PNG (no text). Phoebe2 task. */
  artPath: string | null;
  /** Default canvas image scale (0..1 of canvas width) */
  scale: number;
  /** Default art anchor (where the character sits on the 1080x1350 canvas) */
  imagePosition: 'br' | 'bl' | 'bc' | 'cr' | 'cl' | 'cb';
  /** Default text anchor */
  textAnchor: 'tl' | 'tc' | 'tr' | 'cl' | 'cc';
}

/** Launch pack — PRD §7 + Lucy v1.1 §3 */
export interface LaunchPack {
  /** "A" cat-stable / "B" goose-interactive */
  variant: 'A' | 'B';
  roleId: RoleId;
  primaryLineId: string;
  titles: [string, string, string]; // 3 titles, first is recommended
  body: string;
  firstReview: string;
  dmReply: string;
}
