// Duty Room domain types — PRD v0.8 §6 §7 §10

export type DutyRole =
  | 'stubborn_goose'      // 嘴硬鹅 · 否认部部长
  | 'low_battery_cat'     // 低电量猫 · 电量管理员
  | 'ddl_hamster'         // DDL 仓鼠 · 截止日期专员
  | 'backstage_alpaca';   // 后台羊驼 · 前台正常员
// P1 候补（不进入 P0 推荐链路）：
// 'boundary_hedgehog' (勿扰刺猬), 'cozy_capybara' (被窝水豚), 'night_owl' (夜班猫头鹰)

export type Scene =
  | 'no_energy'         // 今天不想营业
  | 'called_out'        // 朋友突然约我出门
  | 'got_called_out'    // 被说中了但不想认
  | 'brain_overload'    // 脑子很吵
  | 'deadline'          // DDL/期末/事情堆着
  | 'need_space';       // 想安静一点

export type Tone =
  | 'stubborn'        // 嘴硬
  | 'lazy'            // 摆烂
  | 'polite_dnd'      // 礼貌勿扰
  | 'pretend_normal'; // 假装正常

export interface SceneOption {
  id: Scene;
  label: string;          // 用户看到的口语化选项（PRD §7.2）
}

export interface ToneOption {
  id: Tone;
  label: string;          // 用户视角口语化（PRD §7.3）
}

/** 文案池每条记录（PRD §10.3） */
export interface RoleSceneCopy {
  roleId: DutyRole;
  sceneId: Scene;
  baseText: string;
  tags: string[];
  riskChecked: boolean;
}

/** 推荐路由（PRD §11.1） */
export interface SceneRoute {
  scene: Scene;
  primary: DutyRole;
  fallback: DutyRole;
}

/** 角色全量定义（PRD §6.4） */
export interface DutyRoleDef {
  id: DutyRole;
  name: string;             // 嘴硬鹅
  station: string;          // 岗位（如 否认部部长）
  emotionTag: string;       // 情绪关键词
  oneLiner: string;         // 标志金句
  prop: string;             // 标志道具（设计参考）
  themeColor: string;       // 主色 HEX
  accentColor: string;      // 辅色 HEX
  highlightColor: string;   // 强调色 HEX
  primaryScene: Scene;      // 主场景
  notOverlap: DutyRole[];   // 不可重叠对象
  assets: {
    masterSheet: string;    // role_*_master_v1.png
    main: string;           // role_*_main_v1.png（透明 PNG）
    background: string;     // role_*_bg_desk_v1.png
  };
}

/** 用户一次会话的状态 */
export interface DutySession {
  scene: Scene | null;
  tone: Tone | null;
  recommendedRole: DutyRole | null;
  candidateCards: CandidateCard[];
}

export interface CandidateCard {
  roleId: DutyRole;
  sceneId: Scene;
  toneId: Tone;
  baseText: string;     // 从 RoleSceneCopy.baseText 取
  styledText: string;   // 经 ToneFilter 改写后的文本
  tags: string[];
}
