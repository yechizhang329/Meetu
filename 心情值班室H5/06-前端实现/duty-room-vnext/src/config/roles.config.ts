// vNext roles config — final, sourced from SoT v2 §2 (post personality_line removal) + §5.1 stylePhrase + §9 tags.
// SoT: Meetu/产品文档/2026-05-12-心情值班室-vNext-copy-sot-v2.md
// PRD: Meetu/产品文档/2026-05-12-心情值班室-vNext-PRD-v2.3.md
//
// 不外显字段 (内部 voice gate / 编辑护栏): roleProfile / voicePrinciple / do / dont / redline.
// 外显字段 (前端): roleName / stylePhrase / tags / imageRef.{single,profile}.

import type { Role } from '../data/types';

/** Vite base + path 注入. import.meta.env.BASE_URL 在 dev=`/Meetu/duty-room-vnext/`, build 后同. */
const BASE = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
const ASSET = (rel: string) => `${BASE}${rel}`.replace(/\/{2,}/g, '/');

export const ROLES: readonly Role[] = [
  {
    id: 'A',
    roleName: '嘴硬章鱼',
    imageRef: {
      single: ASSET('assets/role-A-octopus.png'),
      profile: ASSET('assets/profile-A-octopus.png'),
    },
    stylePhrase: '高僧烧完剩舍利子，我烧完剩张嘴',
    tags: ['嘴硬', '死不承认'] as const,
    profileBgColor: '#E8F0ED', // 极浅薄荷
    roleProfile:
      '八只手都在硬撑，嘴上永远没事。专业：永不承认，辅修：自我伪装。被关心时嘴上永远不承认，但心里其实希望被追问。最不擅长被人盯着看第二眼。',
    voicePrinciple: '嘴硬掩饰脆弱，渴望被关心但真实意图不明说',
    do: ['先否认情绪 + 客观借口推卸 / 虚张声势的决绝', '句末留一个出卖的小细节'],
    dont: ['直接说"我难过/我希望被关心"', '自我揭示"其实我..."', '卖惨'],
    redline: ['不能让用户看到 A 在求安慰', '不能滑向脆弱诊断'],
    defaultScenes: ['S1'],
    backupScenes: ['S2', 'S5'],
  },
  {
    id: 'B',
    roleName: '断电猫',
    imageRef: {
      single: ASSET('assets/role-B-cat.png'),
      profile: ASSET('assets/profile-B-cat.png'),
    },
    stylePhrase: '状态：隐身',
    tags: ['低能量', '请勿打扰'] as const,
    profileBgColor: '#F5EDE8', // 极浅暖米
    roleProfile:
      '长期处于"隐身"状态。专业：装没听见，辅修：配额管理。承认看到了消息，但回应这件事本身已经超出今日预算。不冷不傲不解释，不是不合群，是低能量人群。',
    voicePrinciple: '入口关闭/低能量；承认看见但行为或态度失能',
    do: ['用系统/配额/状态/在线/低能量等技术化词描述自己关闭', '承认接收'],
    dont: ['说"懒得理你/别烦我"', '带怒气', '把不接入解释成针对某个具体的人'],
    redline: ['不能冷暴力', '不能高姿态'],
    defaultScenes: ['S2', 'S5'],
    backupScenes: ['S1'],
  },
  {
    id: 'C',
    roleName: '躺平树懒',
    imageRef: {
      single: ASSET('assets/role-C-sloth.png'),
      profile: ASSET('assets/profile-C-sloth.png'),
    },
    stylePhrase: '我知道你很急，但你先别急',
    tags: ['拖延', '卷不动'] as const,
    profileBgColor: '#E8EDF2', // 极浅天蓝
    roleProfile:
      '要做的事在那，它也在这，中间断线了。专业：慢，辅修：新建文件夹。最擅长凝视进度条，最不擅长启动；但对自己卡住这件事完全自知，不甩锅、不真摆烂。',
    voicePrinciple: '知道任务在但启动不了；保留自知，不真摆烂不甩锅',
    do: ['用任务实操词反讽承认没动（文件夹/在写/明天/进度条）', '保留自知动作'],
    dont: ['甩锅别人', '说"我做不到"撂挑子', '真摆烂式宣言'],
    redline: ['不能消极弃权', '不能怪外部'],
    defaultScenes: ['S3'],
    backupScenes: ['S4', 'S6'],
  },
  {
    id: 'D',
    roleName: '整活吗喽',
    imageRef: {
      single: ASSET('assets/role-D-monkey.png'),
      profile: ASSET('assets/profile-D-monkey.png'),
    },
    stylePhrase: '已读乱回',
    tags: ['抽象', '已读乱回'] as const,
    profileBgColor: '#F5F0E8', // 极浅柠檬
    roleProfile:
      '主见暂存中。专业：疯癫抽象，辅修：已读乱回。最擅长把任何问题升维成系统问题，最不擅长正常回答。问什么答什么但句句不对——离谱但能圆回来。',
    voicePrinciple: '现实回答失效，切到另一个解释系统（伪术语/伪逻辑/同字套娃/废话哲学）；离谱但成立',
    do: ['用伪术语/伪学术/同字反复/废话哲学绕开正常回答'],
    dont: ['写正常解释', '用病/症/崩溃/抑郁/疯字', '胡言乱语到读不懂'],
    redline: ['不能精神疾病隐喻', '不能完全没逻辑只为搞怪'],
    defaultScenes: ['S4'],
    backupScenes: ['S1', 'S3', 'S6'],
  },
  {
    id: 'E',
    roleName: '高情商刺猬',
    imageRef: {
      single: ASSET('assets/role-E-hedgehog.png'),
      profile: ASSET('assets/profile-E-hedgehog.png'),
    },
    stylePhrase: '我没意见，我有看法',
    tags: ['看破不说破', '体面'] as const,
    profileBgColor: '#EDE8F0', // 极浅薰衣草
    roleProfile:
      '虽然没直说但你也能看到刺。专业：维护表面和平，辅修：听您的。最擅长让对方读到态度但抓不到把柄，最不擅长直接开怼。表面体面，里子有刺。',
    voicePrinciple: '有点不爽/不服/被冒犯，但不亲自开怼，4/10 刺感（对方读到态度但攻击不到把柄）',
    do: ['表面体面 + 对仗反讽', '让对方读到态度但抓不到把柄'],
    dont: ['指名道姓', '爆料具体矛盾', '阴阳怪气过重', '用"低情商：xxx"显性攻击'],
    redline: [
      '不指人不爆料（PRD §5）',
      '不论用何种 result_text 都不指向具体人',
      '"啊对对对" 仅用于回应观点/说法/讲道理/催促话术；事件/操作/局面用"好好好"（S6·E "啊对对对！" 例外，DavidC 22:59 拍板）',
    ],
    defaultScenes: ['S6'],
    backupScenes: ['S2', 'S3', 'S4', 'S5'],
  },
];

export const ROLE_BY_ID: Readonly<Record<string, Role>> = Object.freeze(
  Object.fromEntries(ROLES.map((r) => [r.id, r])),
);
