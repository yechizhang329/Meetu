# 心情值班室 vNext — C/D Contact Sheet Pilot Prompt v1

**作者**: Phoebe2
**时间**: 2026-05-11 01:10
**触发**: David 1:00:06 采纳 D-σ 猴 + 要求 C/D 同 contact sheet prompt, 不生图
**目标**: 输出**1 张 contact sheet 同时呈现 C 树懒 + D 猴**, 用于 PM/David 审 prompt → 通过后 1 image2 → 试金石产物 → 5-bg audit + 三票读判

**红线** (David 1:00 + 历史教训):
- ✅ 不刻板女性化 (PRD §11.3) — 调性中性, 不偏粉甜柔
- ✅ 必须服务 C/D 各自性格 (PRD §5)
- ✅ inked editorial illustration 统一画法 (vNext §1)
- ✅ 5-bg audit incl magenta diagnostic (v1.x #8 教训)
- ✅ 0 image2 直到 PM ack
- ✅ D 猴不可萌化 (D 红线)
- ✅ C 树懒不与 B 猫睡姿混 (sprawl vs ball)

---

## §1 contact sheet 整体规划

**画幅**: 1 张图同时容纳 2 角色, 每角色 ~1080×1350 area (沿用 v1.x receipt 标准)
**布局**: 左右并排, C 在左, D 在右; 或上下排, C 在上, D 在下 (二选一, 我建议**左右并排**, 视觉对比清晰, 用户 3s 同时读 2 角色)
**画面尺寸**: 2160×1350 (左右并排 2 角色) 或 1080×2700 (上下排), 我建议 **2160×1350**
**留白**: 中间 ~80px 分隔带 (无线无框, 自然留白); 4 边各 ~100px padding
**底色**: warm beige #F1ECDF 系 (vNext §1 母题)
**背景**: 不画场景纵深, 单色纸感底, 各角色独立 self-contained 不交互

---

## §2 C 树懒部分 prompt

**主体**: 一只树懒, **整身趴在桌面上** (sprawl 趴姿: 四肢摊开, 头侧着, 闭眼睡)
**桌面 prop (in-frame, 不喧宾夺主)**:
- **一杯咖啡** (蒸汽袅袅向上飘) 在树懒旁边
- **一本翻开的课本** (左右对开页可见, 页面是空白或寥寥几条横线), 略歪斜
**树懒细节**:
- **闭眼**, 嘴微张 (zone-out 睡)
- 棕褐色毛 (#8A6B47), 手绘墨线轮廓 + brush 笔刷阴影
- 体型饱满, sprawl 趴姿姿态自然 (不僵硬)
- 不要画成"小可爱树懒"风格, 要 editorial inked

**3s 读判预期**: "树懒 sprawl 在睡 + 旁边咖啡和课本" → "任务在 + 人没启动"

**正向 prompt 关键词**:
```
sloth in deep sleep sprawled across a desk surface, eyes closed, mouth
slightly open, all four limbs spread out (NOT curled into ball). Beside
the sloth: an open coffee mug with steam rising slowly upward, AND an open
notebook with mostly blank pages. Hand-drawn ink line illustration style,
brush shading, matte vintage paper texture. Color: muted brown sloth fur,
warm beige background. Editorial inked illustration, NOT children's book
style, NOT cute mascot, NOT chibi, NOT big eyes.
```

**负向 prompt (禁项)**:
```
NO ball-curl posture (this is reserved for B sleeping cat), NO closed-up
fetal position, NO oversaturated colors, NO glossy surfaces, NO digital
vector flat fill, NO emoji-like faces, NO heart eyes, NO blush cheeks,
NO sparkles, NO pink-purple feminine palette, NO cute big-head chibi.
```

---

## §3 D 猴部分 prompt

**主体**: 一只猴子**坐在地上** (蹲坐姿态, 双腿交叉或前伸), **头顶顶着一个键盘** (键盘横放在头顶像一顶歪戴的帽子, 略微倾斜, 不是水平正放), **手里抓着一根香蕉** (没在吃, 就是握着, 香蕉皮没剥)
**猴子细节**:
- **眼神茫然空洞** (zone-out 状态, 不是闭眼也不是大睁), 嘴**微张** (无表情, 不是咧嘴笑也不是噘嘴)
- 整体调性: **滑稽不萌**, "输入系统失效 + 生物本能失效" 的双失效状态
- 棕色毛, 手绘墨线 + brush 笔刷
- 键盘是 typewriter-style 古旧键盘 (带按键 + 物理质感), 不是数码键盘 (与 vNext 手绘母题一致)
- 香蕉皮是黄色 + 棕色斑点 (写实未剥)

**3s 读判预期**: "猴子顶键盘 + 拿香蕉 + 茫然" → "完全混乱 / 抽象 / 输入失效"

**正向 prompt 关键词**:
```
A monkey sitting on the ground in a relaxed cross-legged or sprawled posture,
with a typewriter-style keyboard balanced precariously on its head (not flat,
slightly tilted like a misplaced hat). Holding a banana in one hand, banana
unpeeled, not being eaten. Eyes blank and zoned-out (NOT wide cute eyes,
NOT closed), mouth slightly open in a vacant expression. Hand-drawn ink line
illustration, brush shading, matte vintage paper texture. Color: muted brown
monkey fur, warm beige background. Editorial inked illustration, deadpan
absurdity, NOT children's book mascot, NOT cute chibi monkey.
```

**负向 prompt (禁项)**:
```
NO big cute eyes, NO grinning monkey, NO playful pose, NO chibi proportions,
NO heart eyes, NO sparkles, NO pink-purple feminine palette, NO emoji face,
NO action shot of typing or eating, NO digital sleek keyboard, NO modern
laptop, NO bright cartoon colors, NO Disney-style mascot, NO children's
book illustration style.
```

---

## §4 整图风格控制 (David 1:00 红线)

### §4.1 不刻板女性化

- ❌ 粉色 / 紫色 / 粉紫渐变作主色调
- ❌ 心形 / 星星 / 闪光 / 蝴蝶结 / 花朵装饰
- ❌ 大眼睛 / 长睫毛 / 腮红 / 萌系拟人化
- ❌ 柔和发光 / glossy 光泽 / 数码鲜亮
- ❌ children's book / sanrio / 萌宠 IP 调性

### §4.2 服务角色性格 (PRD §5)

**C 树懒**: 平静自知 + 卡在中间
- 表情: zone-out 闭眼, 不沮丧不期待
- 调性: matte vintage 接受感, 不卖惨

**D 猴**: 抽象/输入系统失效
- 表情: 茫然空洞, 不咧嘴不眯眼
- 调性: editorial 滑稽, 不萌不可爱

### §4.3 整图统一 (vNext §1.1-§1.4)

- 画法: 手绘墨线轮廓 + brush 笔刷阴影 + 浅纸感水彩填色
- 质感: matte / 哑光 / 重量感 / 阴影 (落在纸面或地面)
- 色温: warm beige #F1ECDF 底盘, 角色 accent 局部点缀
- 不数码矢量平涂, 不 mascot, 不写实摄影
- 5 角色 (含 A 章鱼 / B 猫 / E 刺猬) 后续必须保持同一画法, 此 contact sheet 是质量线锚点

### §4.4 contact sheet 内 2 角色一致性

C 和 D 必须**画风完全一致**:
- 同一线条粗细
- 同一笔刷质感
- 同一 inking 程度
- 不允许 C 是写实 + D 是卡通 (这是 §1.5 跨角色不混用红线)

---

## §5 完整 prompt (合并版, 用于 image2 调用)

**前置**: 待 PM/David 审 prompt 后, 1 image2 调用产出 1 张 contact sheet, 然后:
1. chroma key + flood-fill + binary_fill_holes (沿用 W4 v3 算法)
2. 切割成 C/D 两张独立透明 PNG
3. 5-bg audit (含 magenta diagnostic) per 张
4. 三票 (PM/Lucy/我) 5s 读判 + 各张过 4 项 FAIL 标准

```
A wide horizontal contact sheet (2160×1350) showing two characters side by
side, separated by ~80px of empty warm beige paper space, no border lines.

LEFT SIDE — A sloth in deep sleep, sprawled across a desk surface, eyes
closed, mouth slightly open, all four limbs spread out flat. Beside the
sloth: an open coffee mug with slow steam rising upward, AND an open
notebook with mostly blank pages, slightly askew. Sloth fur is muted brown.

RIGHT SIDE — A monkey sitting cross-legged on the ground, with a vintage
typewriter-style keyboard balanced precariously on its head like a misplaced
hat (slightly tilted, not flat). Holding a banana in one hand, banana
unpeeled, not being eaten. Eyes blank and zoned-out, mouth slightly open in
a vacant expression. Monkey fur is muted brown.

STYLE — Hand-drawn ink line illustration, brush shading, matte vintage paper
texture, warm beige background (#F1ECDF). Editorial inked illustration with
deadpan tone, NOT children's book mascot, NOT cute chibi, NOT big cute eyes,
NOT pink/purple feminine palette, NOT sanrio style, NOT Disney mascot.

NEGATIVE — NO ball-curl posture for sloth, NO grinning or playful monkey
pose, NO heart eyes, NO sparkles, NO action shot, NO modern laptop, NO
saturated cartoon colors, NO glossy textures, NO emoji faces.

Composition: Both characters self-contained (not interacting), centered in
their respective halves, ~100px padding from canvas edges. No background
scenery beyond the desk for the sloth and ground for the monkey.
```

---

## §6 试金石 image2 budget

- 1 contact sheet (本 prompt 第 1 次 image2): 1 call
- 调试预算: 3 calls (如调性偏 / 可爱化 / 风格不一致)
- C/D pilot 阶段总 budget: **4 calls 上限**
- vNext 全程仍 ≤ 40 calls

---

## §7 三票读判 protocol

PM (Fiona) + Lucy + 我各 5s 读判, 每角色独立打分:

### C 树懒 PASS 标准
- ✅ 3s 读为"树懒在睡 + 旁边有任务/咖啡" → PASS
- ❌ 3s 读为"树懒在喝咖啡 / 准备喝" → FAIL (动作叙事, C 应是状态)
- ❌ 3s 读为"猫一样的睡觉小动物" → FAIL (与 B 重合)
- ❌ 3s 读为"课桌装饰" → FAIL (角色性丢失)

### D 猴 PASS 标准
- ✅ 3s 读为"猴顶键盘 + 拿香蕉 + 茫然 / 抽象混乱" → PASS
- ❌ 3s 读为"小猴子可爱" → FAIL (萌化, D 红线)
- ❌ 3s 读为"猴在敲键盘" → FAIL (动作叙事, D 是状态)
- ❌ 3s 读为"猴和食物" → FAIL (键盘元素丢失)

### 整图统一 PASS 标准
- ✅ 2 角色画风完全一致 → PASS
- ✅ 不刻板女性化 → PASS
- ❌ 任一角色调性偏离 (C 萌化 / D 萌化 / 任一 children's book 风) → FAIL

≥2/3 票 PASS = 过试金石 → 扩 A/B/E
否则触发 fallback (per 各角色 §1-§3 备选方向)

---

## §8 落库 / 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 01:10 (本 prompt 落库) | spec 落库 + 通告 Fiona | Phoebe (本条) |
| 等 PM/David 审 prompt | C/D contact sheet prompt 是否启动 image2 | Fiona/David |
| ack 后 ≤30min | 1 image2 + chroma key + 切割 + 5-bg audit + 三票 | Phoebe |
| 三票过 | 扩 A/B/E (~6 calls) | Phoebe |

---

## §9 累计 image2

- 历史: 42 calls
- 本 prompt spec: **0 calls**
- 待启动: 1 (contact sheet) + 3 调试 = 4 calls 上限 (待 PM ack)

---

## §10 为什么此风格服务 "女性为主 TA 但不女性化" (per Fiona 1:00:40 §5 要求)

PRD §11.3 "不刻板女性化" + PRD §2.1 "女性用户可能更容易早期采用, 但产品和视觉不能刻板'女性化'" — 此 prompt 的设计如何满足这双重要求:

### §10.1 靠"情绪共鸣"接住女性用户, 不靠视觉刻板

女性大学生易共鸣的核心**不是**粉色 / 可爱 / 萌宠 / 甜美; 是:
- **状态被准确翻译** ("这就是我现在") — C 树懒 sprawl 睡 + 旁边任务 = 大学生宿舍/课桌真实场景的精准镜像
- **不被诊断 / 不被定义** (PRD 原则 4) — D 猴茫然 zone-out 是"我自己也不知道为什么", 不评价不解释
- **可分享 + 不暴露** (PRD §2.3) — C/D 都没有 face-expression 强戏剧化, 用户分享时不会觉得"暴露我自己"

→ 服务女性 TA 靠**情绪精准 + 防御心理低**, 不靠视觉性别符号

### §10.2 视觉避坑明确清单 (negative prompt 已含)

- ❌ 粉色 / 紫色 / 粉紫渐变作主色 — warm beige + 棕褐替代
- ❌ 心形 / 星星 / 闪光 / 蝴蝶结 / 花朵
- ❌ 大眼睛 / 长睫毛 / 腮红 / chibi 萌系比例
- ❌ Sanrio / Disney / children's book / 萌宠 IP 调性
- ❌ 柔和发光 / glossy / 数码鲜亮

→ 这些是中文社交语境里**典型"刻板女性化"视觉信号**; 全部排除

### §10.3 靠角色特征接住, 不靠美学性别化

- C 树懒"卡住但有自知"是普世大学生心理状态, 男女通用
- D 猴"输入系统失效"是 Z 世代 universal cultural phrase, 男女通用
- inked editorial illustration 风格中性偏 editorial, 不偏 chick-lit

### §10.4 与 v1 4 动物的"低质贴纸萌"区别

v1 ddl_hamster / low_battery_cat 等是 CSS 圆头 + 平涂萌 → 容易被读为"幼态可爱"; vNext inked editorial + 完整 anatomy + 姿态层次 → 不萌不甜不软, 是"真实状态被画了出来", 这正是 PRD §11.3 想要的"不刻板女性化但服务女性用户"的视觉解。

→ 风格选择本身就是"既接住女性 TA 共鸣 又避免性别刻板" 的产品判断, 不是设计审美趣味。

