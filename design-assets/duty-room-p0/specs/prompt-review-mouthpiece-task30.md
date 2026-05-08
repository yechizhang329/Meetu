# task #30 — 4 角色嘴替输出图 prompt 审稿包

> 来源任务：#设计讨论Design task #30 — Fiona msg `40f98524`
> 要求：4 张试金石图先验证"用户会不会真的发"
> 不要：不模仿 Tiny Type 表面 / 不修旧 v0.9 / 不扩 design system
> 边界：4 calls 上限，无 retry，**先审 prompt 再跑**

---

## 0. PM 立意先复述（确认我没跑偏）

- **核心不是"像我/符合心情"，是"它替我说了我不想自己说的话"**（Jonathan `72954921`）
- **嘴替 = 它在替我开口**——所以图的核心动作不是"动物在演自己的状态"，而是"动物在替我说话"
- **角色服务那句话**，不是角色设定图 / IP 展示
- **品牌只作出处**，不能让用户感觉替产品打广告

## 1. 我对"嘴替图"骨架的判断（基于学习日志 + PM 立意，不抄 Tiny Type 外壳）

**v3.4 的错**：角色在演自己的状态（趴桌 / 抱头 / 立姿），文字是辅助。**用户感受 = 我在欣赏一只 IP 演出**。
**Tiny Type 的对**（但不能照搬）：文字是主体，角色是落款。**用户感受 = 这是我自己写的便签**。
**心情值班室嘴替的应该是**：**那句话是主体，但角色正在替你说出来**。

所以视觉关系：**那句话 + 角色"开口动作"** = 嘴替成立。

每个角色的"开口动作"必须不同（不是全部张嘴），因为每个角色替你说话的方式不同：
- **嘴硬鹅** = 主动撒谎 → 脸别开但喙张开，话从扁喙旁边飞出来（无气泡，文字直接以手写感漂浮在喙旁）
- **低电量猫** = 不愿意说话所以散发 → 闭眼趴下，话从它头上极轻烟雾/想法泡里冒出（被动嘴替）
- **DDL 仓鼠** = 边逃避边漏出 → 抱头侧脸，话像它捏皱的便签纸条飞出来
- **后台羊驼** = 嘴上一套背后一套 → 礼貌脸 + 话被切两半：一半在脸下（公开版），一半在背后红灯旁（真心版）

每张图的"嘴替关系"是不一样的——这是 4 张图相对 v3.4 / Tiny Type 都没有的差异化点。

## 2. 4 张 prompt 审稿（按 PM 8 字段）

### 2.1 嘴硬鹅 — 主动撒谎型嘴替

**字段 1：它替用户说的哪句话**
> "我没有，我没在生气，你别瞎说。"
（这是 placeholder；最终走 Lucy task #31 出来的"嘴替味道"句子。本试金石用这一条作样张文字。）

**字段 2：嘴替关系如何成立（视觉骨架）**
- 鹅扁喙微张但**脸别向画面侧**——它在说话但不直视用户（这是"嘴硬"的视觉语法）
- 那句话的文字以手写感**横排在喙旁**（不是气泡，不是托底，就是文字漂浮）——"话从它嘴里飞出来"
- 一翅微抬挡住部分喙——"还假装没在说"
- 警卫帽不可少（这是"否认部部长"的岗位信号），但不再叠 IDE badge / 拒签章 / 制服肩章（v3.4 教训：减道具）
- 4:5 画布，文字占视觉权重 50%+，角色占 35%

**字段 3：必删元素**
- ❌ 顶部 banner / 标签条 / "心情值班室"大水印
- ❌ 朋友鉴定区 border / 朋友鉴定区标签
- ❌ 拒签章 / 文件夹 / 工牌（除警卫帽外的所有岗位道具）
- ❌ 完整办公室 / 桌角 / 椅子背景
- ❌ 黄底色块 / 卡片容器 / box-shadow
- ❌ 角色"立姿正面"（必须是 3/4 偏头别向画面侧）
- ❌ 任何 NO TEXT 之外的英文 / 中文残字 / letter shapes

**字段 4：prompt body**

```
Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8) with
very subtle paper grain. Hand-drawn black ink outline, 4-6px uniform stroke,
flat solid color fills (one color per region), NO shading, NO gradient, NO
3D, NO airbrush.

Subject: a chubby grey-and-white domestic goose wearing a navy security cap
(#3F5C7A). The goose's face is turned 3/4 toward the viewer's left, eyes
glancing further to the side, beak partly open as if mid-sentence — but it
is clearly NOT looking at the viewer (it is denying while still talking).
One wing tip is partly raised in front of the beak, half-covering, as if
trying to look like it isn't speaking. Body composed and stiff, one foot a
step back. Posture reads as "lying out loud, but won't make eye contact".

Composition: the goose occupies the lower-right ~35% of the frame. The
upper-left ~50% of the frame is empty paper space, reserved for hand-drawn
TEXT placeholder (text rendering will be added by frontend overlay later —
the AI image must leave that area visually quiet, no decoration, no marks).

Bottom-right corner: a tiny ~16px small black-ink animal silhouette
落款 area (also blank, frontend will overlay the brand line).

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS, NO Chinese characters,
NO English words anywhere in the image.
```

**字段 5：negative**

```
- NO mascot pose, NO sticker pack, NO chibi, NO kawaii, NO cute mascot wave
- NO heart eyes, NO sparkles, NO blush dots, NO men's-gaze cute (no big shiny eyes)
- NO Pixar 3D, NO anime style, NO children-book polish, NO airbrush, NO glow
- NO complete office scene, NO desk, NO chair back, NO clipboard, NO ID badge,
  NO shoulder cape, NO armband, NO red rubber stamp (only the navy cap)
- NO public-notice / school-bulletin format, NO certificate / diagnosis card
- NO test-result / personality-quiz aesthetic, NO score chart, NO badge / medal
- NO tag pills, NO category labels, NO product banner, NO product frame
- NO speech bubble (the line will be hand-drawn text overlay by frontend, not
  enclosed in a balloon)
- NO "REJECTED" or any letter / digit / pictograph that resembles real text
- NO Chinese / English characters anywhere in the image
- NO drop shadow except a tiny soft pool under feet
- NO yellow color block; warm beige paper only
```

**字段 6：预计 call**：1（4 calls 总预算的第 1 张）

---

### 2.2 低电量猫 — 不愿意说话所以散发型嘴替

**字段 1：它替用户说的哪句话**
> "今天先到这里，剩下的明天说。"

**字段 2：嘴替关系如何成立**
- 猫**完全闭眼趴下**，不主动说话
- 那句话从它头顶以**极轻的"想法"形态**冒出（不是漫画式想法泡，是手写文字直接散在头顶上方，配几个极小的 zzz 圆圈或 1-2 道极淡的呼气线）
- 这种姿态的视觉语法是："**它累得不想说，但话还是漏出来了**"——这是"被动嘴替"的关键
- 围裙保留（低电橙 #E68A3A，是岗位信号），但删充电线 / 电池牌 / 咖啡杯 / 桌灯
- 角色占 35%，文字 + 散布权重 50%+

**字段 3：必删元素**
- ❌ 充电线 / 电池牌 / 桌角 / 桌灯 / 咖啡杯（v3.4 4-5 个道具，本版减到 1 个：围裙）
- ❌ 任何顶部 banner / 标签 / 水印
- ❌ 角色"立姿"（必须是闭眼趴下）
- ❌ 想法对话泡气泡边框（文字直接漂浮）

**字段 4：prompt body**

```
Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8)
with very subtle paper grain. Hand-drawn black ink outline, 4-6px uniform
stroke, flat solid color fills (one color per region), NO shading, NO
gradient, NO 3D.

Subject: an orange tabby cat wearing a small low-battery-orange (#E68A3A)
work apron. The cat is COMPLETELY collapsed forward, lying flat, both eyes
firmly closed, paws limp, whiskers drooping, body sunken into the paper.
Posture reads as "not wanting to say anything, already off-duty."

Above the cat's head, draw 2-3 extremely faint wispy lines (like soft
breath/sleep lines, NOT speech-bubble outline) suggesting that something
is escaping out of the sleeping cat — but the actual words will be drawn
later by frontend overlay; the AI image keeps that upper area visually
quiet.

Composition: cat occupies the lower 40% of the frame, lying horizontally.
Upper 50% of the frame is empty paper for later text overlay. Bottom-right
~5% reserved for tiny brand 落款 (blank in this image).

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO Chinese characters, NO
English words.
```

**字段 5：negative**

```
- NO mascot, NO chibi, NO kawaii cute, NO sticker pack
- NO heart eyes, NO sparkles, NO blush dots
- NO Pixar 3D, NO anime, NO children-book polish, NO airbrush, NO glow
- NO charging cable, NO battery sign, NO coffee cup, NO desk lamp, NO
  keyboard, NO monitor, NO chair, NO desk corner — apron is the only prop
- NO speech bubble outline, NO thought bubble outline (only faint sleep wisps)
- NO public-notice / certificate / diagnosis-card aesthetic
- NO tag pills, NO product banner, NO product frame
- NO "REJECTED" or letter / digit shapes
- NO Chinese / English characters in the image
- NO yellow color block
```

**字段 6：预计 call**：1

---

### 2.3 DDL 仓鼠 — 边逃避边漏出型嘴替

**字段 1：它替用户说的哪句话**
> "我会做的，但不是现在。"

**字段 2：嘴替关系如何成立**
- 仓鼠**抱头侧脸不抬眼**——它在逃避，不直视
- 那句话以**手写感折角便签纸**的形态从它身旁飞出（不是它说的，是它写下来扔出去的）——这是"逃避型嘴替"
- 仓鼠脚边一张**红色块日历**（无数字，仅红色矩形块；这是 DDL 信号）；其他全部删（删啃笔 / 闹钟 / 纸堆 / 咖啡）
- 关键修：v3.4 PM 评 DDL 仓鼠"略偏儿童绘本"——本版**毛发更扁平、眼睛更小、黑眼圈更深、面部表情完全去 cute**

**字段 3：必删元素**
- ❌ 啃笔 / 闹钟 / 咖啡 / 纸堆（v3.4 PM 已点名）
- ❌ 圆亮大眼睛 / 蓬松毛发（去 kawaii）
- ❌ 顶部 banner / 标签 / 水印 / 朋友鉴定区
- ❌ 多张便签（v3.4 是 3 层叠加便签，太复杂；本版仅 1 张飞出去的便签）

**字段 4：prompt body**

```
Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8)
with very subtle paper grain. Hand-drawn black ink outline, 4-6px uniform
stroke, flat solid color fills, NO shading, NO gradient, NO 3D.

Subject: a small yellow-brown hamster. CRITICAL: smaller eyes than a
kawaii hamster (avoid huge round shiny eyes), heavy dark under-eye circles,
tightly flat fur (NOT detailed hair strokes, NOT fluffy, NOT children-book
softness), deadpan exhausted face. The hamster is hunched, both paws
pressed against its own head from the sides, face turned 3/4 away from
the viewer, eyes squeezed nearly shut. Posture reads as "actively avoiding
looking at the calendar, but writing a note instead."

In front of the hamster's feet: a single small paper-calendar piece with
ONE big flat red rectangular block on it (no numbers, no marks, just the
red block).

To the right of the hamster, in the upper-mid frame, a single small folded
beige sticky note is mid-air, drawn as if just thrown out of frame by the
hamster — note is completely blank (text overlay added by frontend later).

Composition: hamster + calendar occupy the lower-left 40%. The upper-right
50% is empty paper for the sticky-note line and later frontend text. Bottom
right corner reserved for brand 落款.

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO Chinese characters, NO
English words.
```

**字段 5：negative**

```
- NO mascot, NO chibi, NO kawaii, NO children-book art, NO picture-book softness
- NO huge round shiny eyes, NO blush dots, NO heart eyes, NO sparkles
- NO Pixar 3D, NO anime, NO airbrush, NO glow
- NO chewed pen, NO clock, NO coffee cup, NO collapsing paper stack, NO desk,
  NO chair — only the small calendar + the single thrown sticky note
- NO 3 stacked sticky notes (only ONE sticky note in this image)
- NO speech bubble outline
- NO numbers on the calendar (only flat red rectangle block)
- NO public-notice / certificate / diagnosis-card / score-chart aesthetic
- NO tag pills, NO product banner
- NO Chinese / English characters in image
- NO yellow color block
```

**字段 6：预计 call**：1

---

### 2.4 后台羊驼 — 嘴上一套背后一套型嘴替（重头戏）

**字段 1：它替用户说的哪句话**
> "嗯嗯，没事的。"（公开版）+ "我后台已经炸了。"（真心版）

这是 4 张里**唯一一张需要文字层叠两组**的图——前端会渲染两段文字（一段在脸下，一段在背后红灯旁），所以底图必须给两块文字位。

**字段 2：嘴替关系如何成立**
- 羊驼**端正立姿 + 礼貌微笑**面对画面（公开嘴）
- 它身后**3 块抽象暗色立式面板各亮 1 个红圆灯**（背后真话场域）
- 两组文字：脸下方 = 公开版（"嗯嗯"），背后红灯旁 = 真心版（"后台炸了"）
- 这是"双声道嘴替"——视觉关系是**前台话 vs 后台话**的对立结构
- 角色占 40%，前台文字 25%，后台文字 25%（这张图文字权重最高）

**字段 3：必删元素**
- ❌ 真实电脑屏幕 / 显示器框 / UI 显示器（v3.4 PM 已点名 → 改抽象立式面板）
- ❌ ID badge / 工牌 / lanyard / 厚重办公桌
- ❌ 咖啡杯杯口冰冷描述（v3.4 复杂细节减弱）
- ❌ 顶部 banner / 标签 / 朋友鉴定区 border

**字段 4：prompt body**

```
Vertical 4:5 portrait composition on warm beige paper background (#F2EAD8)
with very subtle paper grain. Hand-drawn black ink outline, 4-6px uniform
stroke, flat solid color fills, NO shading, NO gradient, NO 3D.

Subject: a tall cream-white long-neck alpaca wearing thin grey on-ear
headphones (#5C6A75). The alpaca is standing rigidly upright, body slightly
too stiff (locked-in posture), neck perfectly vertical, head tilted slightly
forward toward the viewer. Face: deadpan front-facing polite small smile,
tiny dot eyes, lips lightly closed but soft-smiling. Posture reads as
"trying very hard to look composed."

Behind the alpaca, slightly offset to the upper-right, draw THREE small
dark-grey abstract upright panels (rounded soft rectangles, NOT realistic
computer monitors, NOT screens with frames — they are abstract floating
"alert tiles"). On each panel, one small red ROUND lamp glows (round red
indicator dot, NOT exclamation mark, NOT letter, NOT software icon).

Composition: the alpaca occupies the center-lower 40% of the frame.
Reserve TWO empty text-overlay zones:
  - LOWER-CENTER (under the alpaca's neck, ~22% frame area): for the
    "公开嘴" line; AI keeps this area blank.
  - UPPER-RIGHT, around the three red lamps (~22% frame area): for the
    "后台话" line; AI keeps this area blank.

Bottom-right corner reserved for brand 落款.

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO Chinese characters, NO
English words anywhere in the image.
```

**字段 5：negative**

```
- NO mascot, NO chibi, NO kawaii, NO cute mascot wave
- NO heart eyes, NO sparkles, NO blush dots
- NO Pixar 3D, NO anime, NO children-book polish, NO airbrush, NO glow
- NO realistic monitor, NO screen frame, NO real desktop computer setup
- NO ID badge, NO lanyard, NO heavy office desk, NO chair, NO plant, NO
  coffee cup with steam (the focus is alpaca + 3 abstract panels, nothing else)
- NO exclamation mark (!) on the panels, NO software UI text, NO digital icons
- NO speech bubble outline, NO thought bubble outline
- NO public-notice / certificate / diagnosis-card aesthetic
- NO tag pills, NO product banner
- NO Chinese / English characters in image
- NO yellow color block
```

**字段 6：预计 call**：1

---

## 3. 4 张图共同的视觉契约（以下是无论哪张都成立的红线）

| 维度 | 契约 |
|---|---|
| **画布** | 4:5 / 1024×1280（gpt-image-2 可选 size，导出后等比 upscale 到 1080×1350） |
| **底色** | 暖纸米 `#F2EAD8`（v1 锁，不变） |
| **黑线** | 4-6px 等粗（注意：v1 是 5-7px，本版**调细 1px** 让画面更轻） |
| **填色** | 单色平涂；禁渐变/阴影/3D；脚下小阴影是唯一例外 |
| **文字** | AI 不出文字，全部由前端排版叠加（包括"嘴替"主句、品牌出处、后台羊驼双段文字） |
| **品牌** | 底图不画；前端在右下角叠 12px 极小落款"心情值班室·meetu" |
| **角色占比** | 35-40%（不是 v3.4 的 50%；不是 Tiny Type 的 10%；嘴替图角色和文字共担主体） |
| **文字占比** | 50%+（这是嘴替图相对 v3.4 的最大调整：文字权重提升） |
| **构图** | 角色在下半 / 一侧，文字在上半 / 另一侧；**禁居中正面** |
| **道具** | 每张最多 1 个梗道具（v3.4 教训）；除每角色身上的"岗位身份信号"（鹅警卫帽 / 猫围裙 / 仓鼠没岗位身份 / 羊驼耳机）外，其他道具全删 |

## 4. 文字位 spec（给 Dave 前端叠字用）

每张图都按以下坐标布局前端文字：

| 角色 | 主文字位（占）相对 1080×1350 |
|---|---|
| 嘴硬鹅 | 上方 / 偏左：x=80, y=240, w=600, h=400, fs 64-80px PingFang/手写 |
| 低电量猫 | 上方居中：x=80, y=200, w=920, h=300, fs 72-96px |
| DDL 仓鼠 | 右上：x=560, y=180, w=440, h=480, fs 56-72px（便签内文字） |
| 后台羊驼 | 双段：①下中 x=120, y=900, w=840, h=120, fs 56px ②背后右上 x=620, y=320, w=380, h=240, fs 36px |
| 4 张通用 | 右下角品牌：x=920, y=1300, w=140, h=40, fs 12px 灰 |

**所有文字位字体**：PingFang SC Medium 600 优先；用户选择"手写味"时叠加手写体（"心情值班室·嘴替"项目可选用如`千图小兔体` `字魂手写` 等中文手写字体；具体字体选型在 task #31 Lucy 文案出来后由我定）

## 5. 我作为目标用户的"会发吗"自检（4 张同时过）

我会按以下三问 yes/no 4 张同时验：

1. **不知道产品的人看了，能否一眼读出"它在替我说话"？**
2. **我会发吗？**——具体场景：朋友圈深夜 / XHS 状态 / 群聊吐槽
3. **朋友能接话吗？**——能 mirror"我也是" / "笑死" / "你是 X"

如果 4 张里有 ≥ 2 张过不了三问，**整批判失败**（PM 一票否决标准）；不进入下一轮，回头改 prompt。

## 6. 等审

请 @Fiona 审：
- §0-§3 PM 立意 + 视觉骨架判断是否对路
- §2.1-§2.4 4 张 prompt 是否覆盖嘴替关系 + 必删元素
- §3 共同契约是否合理（特别**黑线 5-7px → 4-6px** 这个微调要不要）
- §4 文字位 spec 是否给 Dave 留够空间

OK 后才开 4 calls 试金石（每张 1 次单跑无 retry，4 calls 上限严格不超）。

如有修改，先在 thread 改完再次送审，**不烧 image API**。
