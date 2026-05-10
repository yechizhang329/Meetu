# 心情值班室 vNext — Visual Direction v0.2 (5 角色 prompt 试金石说明)

**作者**: Phoebe2
**时间**: 2026-05-11 00:35
**输入 SoT**: PRD v2.1 中文版 + visual-direction-v0.1.md + 0:25 Fiona/David 5 角色 lock
**触发**: task #36 v0.2 阶段 (per Fiona 0:25:19)
**5 角色 lock**: A 章鱼 / B 低能量睡觉猫 / C 喝了咖啡也没用的树懒 (待拍机制) / D 海星 / E 刺猬
**红线**: 0 image2 (试金石阶段才烧, 4 calls 上限) / inked editorial illustration 统一质量线 / D 不可爱化 / E 不普通酷化 / 守 §0 Final 红线 (无 placeholder/无 emoji 叠字/无 CSS 几何)

---

## §0 Final 资产红线 (沿用 v1.x audit §0, 不退让)

| FAIL | 说明 |
| --- | --- |
| F1 CSS / 几何 placeholder | radial-gradient / clip-path / border-radius:50% 圆容器 |
| F2 Emoji 叠字假资产 | `· ·` `• •` `🌰` 等 inline character |
| F3 临时圆形头像 | width=height + border-radius:50% |
| F4 工程生成假资产 | inline `<style>` 描线 / SVG path 拼角色 |
| F5 5 角色质量线不一致 | 任何角色不在 §1 统一画法内 |

vNext 任何角色资产命中即 FAIL。

---

## §1 统一世界观 spec (5 角色硬绑)

### §1.1 画法
- **手绘墨线轮廓** (hand-drawn ink outline) + **brush 笔刷阴影** + **浅纸感水彩填色**
- 不是数码矢量平涂, 不是卡通 mascot, 不是写实摄影, 不是萌系日漫
- 与 v1 4 动物的 "圆头平涂 + 两点眼 + 童趣贴纸感" 形成质量线断点 (David 0:23 移除 v1 区别 penalty 但红线仍守 §0 F1-F5)

### §1.2 质感
- matte / 哑光 / 有重量感 / 有阴影 (落在桌面或纸面)
- 不允许 glossy / 数码鲜亮 / 儿童贴纸光泽

### §1.3 色温
- warm beige #F1ECDF 系作为底盘
- character-accent (5 色) 仅作角色局部点缀 (不整体平涂):
  - A 章鱼: 紫橙 #C75D3F (软腹)
  - B 猫: 灰蓝 #6A8FA8 (sleep mode 安详)
  - C 树懒: 棕褐 #8A6B47 (毛色)
  - D 海星: 珊瑚红 #D45B5B (海洋异色)
  - E 刺猬: 深棕 #5D4934 (刺色)

### §1.4 画幅
- 主体居中, 4 周留白 ~12-15% padding
- 单角色不带场景纵深 (不画背景)
- 角色透明 PNG, 后续工程 layer compositing
- 比例: 角色 fits 402×611 frame (沿用 v1 contact-crops-transparent 标准, 工程 layout 不需重写)

### §1.5 不允许跨角色混用
- 不允许 A 章鱼用写实摄影
- 不允许 B 猫用萌系大眼
- 不允许 D 海星用 cute mascot 形态
- 不允许 E 刺猬用 chibi 风
- 不允许任何角色出现 face-only 头像裁切 (Jonathan 12:39 4 项 FAIL 标准: 必须看得出身体姿态)

---

## §2 5 角色 prompt 模板 (image2 喂养版)

每角色给: 主体描述 + 状态破绽 + 调性 + 禁项 + master quote 锚点 (待 Lucy 同步)。

### §2.1 角色 A — 章鱼 (嘴硬漏风)

**主体**: 一只手绘墨线 octopus, 8 条腿向下伸展, 软腹饱满, 身体颜色是变色伪装中的灰紫橙, 眼神平静

**状态破绽**:
- 8 条腿都"硬挺地伸直", 但**身体本身是软的, 颜色在变** (伪装 = 嘴硬, 颜色变 = 漏风)
- **可以画一条腿微微反向**, 暗示"装得不齐"
- 头部的眼睛**半闭, 不是闭眼也不是瞪大** (装没事但有看见)

**调性**: 平静 + 微微紧绷 + 一点漏风的诚实

**禁项**:
- ❌ 萌大眼 / 卡通笑脸
- ❌ 章鱼"卷腿撒娇"姿态 (这是可爱化)
- ❌ 攻击姿态 (墨水喷射 / 张牙)

**master quote 锚点 (Lucy 同步)**: "我没事, 真的, 你别看我软腹"

**prompt 模板**:
```
A hand-drawn ink illustration of an octopus, sitting upright with 8 tentacles
extended downward in a stiff posture but the body itself is soft. Body color
is muted purple-gray-orange (camouflage in transition). Half-closed eyes,
calm but slightly tense. One tentacle bends slightly backward, suggesting
imperfect composure. Style: editorial inked illustration with brush shading,
matte vintage paper texture, warm beige background. NO cute eyes, NO cartoon
mascot, NO attack pose. Centered composition, transparent background.
```

### §2.2 角色 B — 低能量睡觉猫 (离线挡门)

**主体**: 一只手绘墨线猫, **蜷起来睡** (curl-up sleep pose, 不是横躺), 头埋在前爪里或抱着自己尾巴, 眼睛闭合, 整体是 self-contained 团状

**状态破绽**:
- **完全闭眼睡** (不是半眯, 不是清醒 lethargic — v1 low-battery-cat 是清醒横躺, vNext 是真睡 sleep mode)
- **耳朵微微贴头** (放松, 不是警觉)
- 旁边可以**有一个折叠的便签或时钟暗示"勿扰"**, 但不是必须 (David 偏好直接形象, 不堆 prop)

**调性**: 安详 + 不接外部信号 + 不冷漠 (是物理睡着, 不是态度回避)

**禁项**:
- ❌ 横躺 lethargic (这是 v1 low-battery-cat, 与 vNext 重合视觉)
- ❌ 半眯眼 attitude pose (这是"勿扰猫"高姿态, 与 PRD §5 B 红线"冷暴力"接近)
- ❌ 萌系大眼睁开 (B 是闭眼)
- ❌ 翻肚皮姿态 (这是邀请互动, 与 B "离线挡门"反向)

**与 v1 low-battery-cat 视觉区分 (我侧自检, 防止 v1 vNext 混淆)**:
- v1: 横躺 lethargic, 清醒, 半眯眼吐舌, 服务 "低电量"场景叙事
- vNext B: **蜷起 sleep mode, 闭眼, 抱尾巴**, 服务"离线挡门"声线
- David 0:25:07 原话 "爱睡觉、低能量的猫" → "睡觉" 是核心动作, 不是 v1 的 "低电量"姿态

**master quote 锚点 (Lucy 同步)**: "我在睡觉, 等下再说"

**prompt 模板**:
```
A hand-drawn ink illustration of a cat in deep sleep, curled into a tight
ball, head tucked against the front paws, tail wrapped around the body.
Eyes fully closed, ears slightly flat against the head (relaxed not alert).
Color: muted gray-blue with soft brush shading. Style: editorial inked
illustration, matte vintage paper texture, warm beige background. NO
horizontal lethargic pose, NO half-closed eyes attitude, NO big cute eyes,
NO belly-up pose. Centered composition, transparent background.
```

### §2.3 角色 C — 喝了咖啡也没用的树懒 (加载未启动)

**待 David 拍机制** (3 选, 我推 C-3, see §3)

**§3 三机制并列前 prompt 占位 (按 C-3 主写)**:

**主体**: 一只手绘墨线树懒, **抱着一个咖啡杯**, 杯子离嘴 ~10cm, 杯沿干净没有沾痕, 蒸汽从杯口缓慢上升 (蒸汽形状是 spinner 状但静止)

**状态破绽**:
- 树懒**眼睛看着咖啡杯** (有自知, 知道它在那)
- 杯口离嘴有距离 → 没在喝 (动作没启动)
- 杯沿干净 (确实没喝过)
- 蒸汽 spinner 形状但静止 (loading 卡住)
- 树懒整体姿态: 坐着, 双手抱杯, 平静接受

**调性**: 平静 + 自知 + 卡在中间 (不沮丧不愤怒不卖惨)

**禁项**:
- ❌ 树懒咧嘴笑 / 期待表情 (这是"想喝变快" C-1 反向)
- ❌ 树懒沮丧表情 / 第二杯空杯 (这是"喝了也没用" C-2, 偏卖惨)
- ❌ 树懒动作激烈 (PRD §5 C "未启动" 必须是静态)

**master quote 锚点 (Lucy 同步)**: "我都把咖啡端起来了, 中间这一步我不知道怎么走"

**prompt 模板** (C-3 版):
```
A hand-drawn ink illustration of a sloth seated upright, holding a coffee
mug with both hands. The mug is held about 10cm away from the mouth, never
touched the lips (clean rim). Steam rises from the mug in a slow spinner
shape, frozen mid-motion. The sloth's eyes look directly at the mug
(self-aware). Calm acceptance, no frustration, no exhaustion. Color: muted
brown with soft brush shading. Style: editorial inked illustration, matte
vintage paper texture, warm beige background. NO grinning expression, NO
empty cup beside, NO active motion. Centered composition, transparent
background.
```

### §2.4 角色 D — 海星 (抽象发疯) [优先试金石]

**主体**: 一只手绘墨线 starfish, 5 条触手向 5 个不同方向延伸, **每条触手末端有一个微微不同的"眼睛/小细节"** (如不同表情/不同方向的小箭头/不同颜色的小点), 中心**没有明确的"脸"** — 海星天然没有前后

**状态破绽**:
- **5 条触手不在同一平面** (z 轴上有微差异, 一条朝前 / 一条朝后), 暗示"5 个方向同时响应"
- 中心**没有面部表情** (海星天然没有, 强化"无前后无主体")
- 每个触手末端的小细节**互相不一致** (一只看左 / 一只看右 / 一只闭眼 / 一只睁眼) — 抽象"分裂注意力"

**调性**: 平静怪诞 + anatomy 异常 + 不是 mascot

**禁项**:
- ❌ 给海星画大脸 / 大眼 / 笑嘴 (PRD D 红线 "不可爱化")
- ❌ 海星纯色平涂 (像 emoji 🌟 那种 fake star) — 必须 inked + brush
- ❌ 海星对称完美 (D 应该是异常错位, 不是 symmetric perfect)
- ❌ 5 触手都朝同方向 (这是"统一", D 是"分散")

**master quote 锚点 (Lucy 同步)**: "我现在朝五个方向同时响应"

**prompt 模板** (D 优先):
```
A hand-drawn ink illustration of a starfish with 5 arms extending in 5
different directions, each arm tip showing a slightly different small detail
(different small eye expressions, or different tiny markings). The arms are
on slightly different z-axis planes, suggesting attention split in multiple
directions. NO central face. NO symmetric perfection — slightly asymmetric
and odd. Color: coral red with soft brush shading and ink line variation.
Style: editorial inked illustration, matte vintage paper texture, warm beige
background. NO cute mascot face, NO smiling, NO emoji-like flat star, NO
single-direction posing. Centered composition, transparent background.
```

### §2.5 角色 E — 刺猬 (轻刺反骨)

**主体**: 一只手绘墨线刺猬, **半蜷起** (不是完全球状, 是 partial curl), 刺**朝外**但**不张牙不发威**, 表情是**侧脸微微一笑** (有自觉 + 有态度)

**状态破绽**:
- **半蜷而不是全蜷**: 全蜷是被动 (乌龟感), 半蜷是"我准备好了但还没攻击"
- 刺**朝外但安静** (有刺 = 边界, 安静 = 不撕破脸)
- **侧脸微微一笑** (轻刺 = 有态度, 微笑 = 体面)

**调性**: 锋利 + 体面 + 有分寸 (不刻薄, 不阴阳怪气)

**禁项**:
- ❌ 刺猬完全蜷球 (这是 retreat / 乌龟被动, 不是 E 的"反骨")
- ❌ 刺猬咧嘴大笑 / 翘起 attitude pose (PRD E 红线 "不普通酷化")
- ❌ 刺猬张牙发威 (E 是 "不撕破脸", 不是攻击)
- ❌ 萌系刺猬 (chibi 大眼)

**master quote 锚点 (Lucy 同步)**: "可以, 我先把离谱记账"

**prompt 模板**:
```
A hand-drawn ink illustration of a hedgehog in a half-curl posture (not
fully balled, partially curled showing face and one paw). Spines extend
outward but the hedgehog is quiet and composed (NOT bared teeth, NOT
aggressive). Side profile face with a subtle small smile (knowing, not
mocking, not cute). Color: dark brown with soft brush shading. Style:
editorial inked illustration, matte vintage paper texture, warm beige
background. NO full ball posture, NO grinning, NO aggressive baring, NO
cute chibi big eyes. Centered composition, transparent background.
```

---

## §3 C 三机制并列 (待 David 拍)

PRD §5 C 内核: "知道任务在那, 也知道方法, 但启动不了"

| 机制 | 树懒动作 | 杯沿状态 | 蒸汽 | 表情 | 视觉张力 | PRD §5 fit | 红线风险 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **C-1 想喝变快** | 凑向杯口, 没沾到 | 干净 | 上升 | 期待 | 强 (有动作叙事) | **弱** (是"启动尝试", 不是"未启动") | 偏积极 |
| **C-2 喝了也没用** | 已喝过, 杯放低 | 有沾痕 / 第二杯翻倒 | 静止 | 失焦微下垂 | 中 | 中-强 | 偏卖惨 (PRD §5 C 红线 "不要卖惨") |
| **C-3 在手没接上** | 抱杯看杯, 离嘴 10cm | 干净 | 静止 spinner | 平静自知 | 弱 (静态) | **极强** (PRD §5 C 直译 "中间没连上") | 无 |

**我的推荐**: C-3, 理由 see v0.1.1 + 上述表。

**用户读判门槛**:
- C-1: 5s 内能读为"树懒在喝咖啡" (动作清晰)
- C-2: 5s 内能读为"树懒喝过了但没用" (沾痕需仔细看)
- C-3: 5s 内可能只读为"树懒抱着咖啡" — **细节"杯口距离 + 杯沿无沾痕 + spinner 静止"是关键**, 用户需仔细看才读出"没喝"

C-3 风险: 视觉张力弱, 用户可能错过细节 → fallback 走 C-2。但 C-2 偏卖惨, 不优先。建议先按 C-3 试金石产出 1 张, 看用户测试组 (PM/Lucy/我) 是否能 5s 内读出"没喝"; 不行再切 C-2。

**C 试金石不在 v0.2 第 1 张**, 优先 D 海星 (D 红线最难)。C 在 D 通过后扩。

---

## §4 4 项 FAIL 标准 (Jonathan 12:39 + 你 22:08:56)

每张试金石必须过:
1. **看得出身体/姿态** (不只圆脸): A 8 腿 / B 蜷起 / C 抱杯 / D 5 触手 / E 半蜷
2. **看得出表情/状态** (不只两点眼): A 半闭+紧绷 / B 闭眼+放松 / C 看杯+自知 / D 触手不同小细节 / E 侧脸微笑
3. **contact-sheet 比例保留** (object-fit:contain, 不裁圆框): 5 角色都是 402×611 透明 PNG, 工程接入按 v1.x 教训用 `<img class="role-img">` height 160 (不裁切)
4. **不像系统图标 / 像角色插画**: editorial inked + brush + 笔触感

**额外 D/E 红线**:
- D 不可爱化 (no cute mascot face)
- E 不普通酷化 (no attitude pose, no grinning)

---

## §5 试金石执行计划

### §5.1 D 海星优先 1 张 image2 试金石

**为什么 D 优先**:
- D 红线最难守 (你 22:08:56 + David 23:43 锁海星借 anatomy)
- 一旦 D 在 image2 调出来读不出"抽象发疯"而是"奇怪海星", 触发 v0.1 §2.4 fallback (切 X 多通道存在体 / 切 V 海星 sidekick + 漫画人 / 切 W 海星 sidekick 只换 D)
- 早测 D 早确认 5 角色统一世界观是否成立

**步骤**:
1. 用 §2.4 prompt 模板调 image2 (1 call)
2. chroma key + flood-fill + binary_fill_holes (沿用 W4 v3 算法) → 透明 PNG
3. **5-bg audit (white/black/paper #F1ECDF/orange/magenta)** — 沿用 v1.x 教训 #8 magenta diagnostic 必跑
4. PM (Fiona) + Lucy + 我三票 5s 内读判: ≥2 票读为"抽象发疯" → PASS, 扩 A/E; 否则触发 fallback
5. 如调试 (re-prompt + image2 ≤3 次) 仍不通过, 触发 fallback 路径 (PM 二审决定切 X/V/W 哪个)

**image2 budget**: 1 (D) + 3 (调试) = 4 calls 上限。如触发 fallback 再 +1-2 calls 验证新方向, 共 5-6 calls。

### §5.2 D 通过后扩 A/E (易) → C (中等) → B (中)

| 角色 | 难度 | image2 budget |
| --- | --- | --- |
| D 海星 | 高 (优先) | 1+3 调试 |
| A 章鱼 | 中 | 1+1 |
| E 刺猬 | 中 | 1+1 |
| C 树懒+咖啡 | 中-高 (双元素 + C-3 静态) | 1+2 |
| B 低能量睡觉猫 | 低-中 | 1+1 |
| **5 角色 main 试金石总预算** | | **~12-15 calls** |

试金石全过后, 扩 emo/pose/quote 配图 (~25 calls), vNext 全程 ~40 calls 上限 (沿用 v0.1 §8 ETA 表)。

---

## §6 5 角色 cultural metaphor 利用 (David 23:43 约束 2)

| 角色 | cultural metaphor (中文 social 既有用法) | 直接借鉴方式 |
| --- | --- | --- |
| A 章鱼 | "8 条腿都嘴硬" / "章鱼伪装" | quote 借 "8 条腿都很硬" / "我变色你看不出来" |
| B 猫 | "今日猫模式" / "猫一样不想理" | quote 借 "今天我猫了" / "睡觉模式启动" |
| C 树懒 + 咖啡 | "树懒模式" / "咖啡也救不了" | quote 借 "我都树懒了, 别催我" / "咖啡端起来了" |
| D 海星 | "海星状态" (Z 世代用法) | quote 借 "我现在海星状态" / "朝五个方向" |
| E 刺猬 | "今日刺猬" / "小刺包" | quote 借 "可以, 但我有刺" / "我不撕但我记账" |

→ Lucy 命名 + master quote 工作量在这套 mapping 里最低 (cultural 现成可借), David 23:43 约束 2 "直接利用刻板印象"满足。

---

## §7 与 v1.x 视觉区分 (David 0:23 移除 v1 区别 penalty 后, 仍守的红线)

David 不要求"刻意区别 v1", 但**§0 Final 红线 + §1 inked editorial 质量线** 自然形成质量断点:

- v1 4 动物: CSS placeholder + 圆头 + 两点眼 + 平涂
- vNext 5 角色: 手绘墨线 + brush 笔刷 + matte vintage + 完整 anatomy + 姿态层次

5 角色里 **B 猫** 与 v1 low-battery-cat 是同动物, 视觉区分要点 (我侧自检, 防止 dist→docs 类教训重犯):
- v1 cat: 横躺 lethargic, 清醒, 半眯吐舌
- vNext B cat: **蜷起 sleep mode, 闭眼, 抱尾巴**
- 工程接入时: vNext B cat PNG 路径必须新建 (`role-B-main-v1.png`), 不复用 v1 `low-battery-cat-main-v1.png`; qa:no-placeholder 扫描 vNext 输出引用 v1 `low-battery-cat` 路径即 FAIL

---

## §8 资产治理 (v0.1 §6 沿用 + v0.2 补)

### §8.1 vNext 新目录

```
Meetu/design-assets/duty-room-vNext/
├── specs/
│   ├── visual-direction-v0.1.md
│   ├── visual-direction-v0.2.md  (本文件)
│   └── ...
├── role-A-octopus/
│   ├── role-A-main-v1.png
│   └── ...
├── role-B-sleeping-cat/
├── role-C-sloth-coffee/
├── role-D-starfish/
├── role-E-hedgehog/
├── _audit/
│   └── 5-bg audit (incl magenta) per role
└── _archive-v1.x/                (vNext 上线时 archive 旧 duty-room-p0)
```

### §8.2 命名约定 (v0.1 §6.2 沿用)

- snake_case + 角色 ID + slot
- 不留中文文件名
- 试金石阶段: `role-{ID}-main-v{N}-试金石.png` (带"试金石"标签 → PM 验收前不进 staging)
- 验收后: 去掉"试金石"标签, 进入 staging

### §8.3 工程接入硬约束 (vNext 上线 PR 内执行)

- `qa:no-placeholder` 扫描器加规则: vNext 输出引用 `duty-room-p0` 路径 → FAIL
- `qa:asset-magenta` 5 角色 main PNG 必跑 (沿用 v1.x b94e2e3 commit 算法)
- `qa:live-receipt-avatar` 部署后 5 角色像素验 (沿用 320da72)
- vNext B cat 引用 `low-battery-cat-main-v1` → FAIL (即便它是 v1 同动物, 必须新 path)

---

## §9 累计 image2 用量

- 历史 v1.x: 42 calls
- 本 v0.2: **0 calls** (纯 spec)
- vNext 试金石阶段预算: 12-15 calls (5 角色 main 试金石)
- vNext 扩展阶段预算: ~25 calls (emo/pose/quote 配图)
- vNext 全程上限: 40 calls

---

## §10 ETA + 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 00:50 (本文件落库) | v0.2 spec 落库 + 通告 Fiona | Phoebe (本条) |
| 等 David | C 机制最终拍 (C-1/C-2/C-3) | David |
| 等 PM ack | D 海星试金石授权 (1 image2) | Fiona |
| ack 后 ≤30min | D 海星试金石 + 5-bg audit + 三票读判 | Phoebe |
| D PASS | 扩 A/E/C/B (~10 calls) | Phoebe |
| 5 角色 main 全过 | PM 二审 + Lucy 命名 + master quote 出 | Fiona/Lucy |
| 文案出 | 扩 emo/pose/quote 配图 (~25 calls) | Phoebe |
| 全资产出 | Dave vNext 工程接入 PR | Dave |
| 部署 | qa 6-gate (含 qa:no-placeholder/qa:asset-magenta/qa:live-receipt-avatar) | Dave + 我 + Fiona |
