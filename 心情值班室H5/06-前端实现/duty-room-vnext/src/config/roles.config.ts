// vNext roles config — final, sourced from SoT v2 §2 (post personality_line removal) + §5.1 stylePhrase + §9 tags + Lucy v2 扩充 (板块 3+4).
// SoT: Meetu/产品文档/2026-05-12-心情值班室-vNext-copy-sot-v2.md
// Lucy v2 扩充: Meetu/产品文档/2026-05-13-心情值班室-角色资料扩充-v2.md
// PRD: Meetu/产品文档/2026-05-12-心情值班室-vNext-PRD-v2.3.md
//
// 不外显字段 (内部 voice gate / 编辑护栏): voicePrinciple / do / dont / redline.
// 外显字段 (前端): roleName / stylePhrase / tags / imageRef.{single,profile} / roleProfile / friendsView / funFact.

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
    major: '永不承认',
    minor: '自我伪装',
    friendsView: [
      '虽然嘴硬，但是心软',
      '你越追问，TA 头摇得越快',
    ],
    funFact:
      '章鱼全身柔软，唯一坚硬的部位是嘴。可以穿过极小的孔洞，但嘴硬到能咬碎贝壳。拥有三颗心脏，但只有一张嘴在硬撑。遇到危险时会喷墨逃跑，就像"没事我先走了"。',
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
    major: '装没听见',
    minor: '配额管理',
    friendsView: [
      '出门半小时精力就耗光了',
      '微信回复永远三个字以内',
      '聚会到一半人就不见了',
    ],
    funFact:
      '猫每天睡 16 小时，醒着的时间也在省电。猫的听力是人类的 3 倍，但选择性失聪。猫可以发出 100 种声音，但懒得用。猫的社交电量只够舔自己的毛。',
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
    major: '慢',
    minor: '新建文件夹',
    friendsView: [
      '靠谱是真靠谱，慢也是真的慢',
      '桌上摆了 5 本书，一页没翻',
      '电脑开了三小时，文档还是空白页',
    ],
    funFact:
      '树懒是世界上移动最慢的哺乳动物，每分钟只能移动 2 米。它们的新陈代谢极低，消化一顿饭需要 30 天。但树懒对自己的慢完全自知——它们会在树上静止几小时，凝视远方，像在思考"我是该动还是再等等"。',
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
    major: '疯癫抽象',
    minor: '已读乱回',
    friendsView: [
      'ta 看没看懂我说的话不知道，但 ta 说的我是没看懂',
      '每次都把话题带到一个奇怪的地方',
    ],
    funFact:
      '猴子是灵长类中最难以预测的动物，它们的行为充满随机性和抽象感。研究发现，猴子会用完全不相关的动作回应同一个刺激——比如看到食物时，有的猴子会跳，有的会叫，有的会转圈。这种"问什么答什么但句句不对"的逻辑，让科学家至今无法完全理解猴子的思维模式。',
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
    major: '维护表面和平',
    minor: '听您的',
    friendsView: [
      '从来不直接夸人，但每个"挺好的"都耐人寻味',
      '吵架从来不输，但你想不起来 TA 说了什么',
    ],
    funFact:
      '刺猬全身覆盖着 5000-7000 根刺，但它们不会主动攻击。刺猬的防御策略是"被动留刺"——遇到威胁时，它们会蜷缩成球，让刺自然竖起，对方靠近就会被扎到，但刺猬本身不出手。这种"我没动手，是你自己撞上来的"高情商防御，让刺猬在动物界保持体面又安全。',
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
