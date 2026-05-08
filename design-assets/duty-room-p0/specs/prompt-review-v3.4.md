# 心情值班室 P0 — v3.4 出图 prompt 五件套（送审）

> v3.3 → v3.4 diff 摘要（吸收 Fiona 5 项必改 + Lucy P1 加项）：
> - P0-1：所有 `office worker / animal coworker` → `small on-duty mood animal` / `state stand-in animal`
> - P0-2：嘴硬鹅取消"嘴上贴胶带"，改为"翅膀挡嘴 + 眼神躲开"
> - P0-3：DDL 仓鼠 prompt 不出现 `tomorrow` 文字概念
> - P0-4：后台羊驼删 ID badge / 3-monitor 改 `three simple dark rectangles with one red round lamp each` / 咖啡描述简化为 `cold flat coffee surface, no steam`
> - P0-5：tokens 选项页选中态删 checkmark，改"右上 6px 角色色小圆点"
> - Lucy P1：negative 加 `NO Chinese characters, NO English words, NO text-like marks`

## 1. 共用 style header（v3.4）

```
Single-frame illustration of a small on-duty mood animal in a clean campus
mood-slip visual language. Visual reference: a paper-note-feel state slip
with one memorable little animal acting out today's mood — like a quick note
a classmate would screenshot and send to a friend. The animal is a
"state stand-in", not an office IP, not a brand mascot.

HARD COMPOSITION:
- Vertical 4:5 portrait, single-frame, no drawn frame border.
- Candid 3/4 angle, NOT a posed model shot, NOT a turnaround sheet.
- Character occupies 40-50% of the panel (target ~45%); the rest is calm
  paper space.
- One desk corner / one chair edge can suggest "at work"; do NOT draw a
  full office, walls, ceiling, plants, bulletin boards, or shelves.
- Maximum TWO gag props in the panel. No third prop. No filler clutter.
- The character must do a STATE ACTION (slumped, hiding, frozen-in-denial,
  hunched-over, pretending-it's-fine), NOT a cute pose, NOT a wave, NOT
  a smile-to-camera mascot pose.

STYLE:
- Clean confident black ink line, 5-7px uniform stroke. Steady, not scratchy,
  not over-detailed.
- Background: ONE flat warm beige paper color (#F2EAD8) with subtle paper
  grain only. NO drawn walls, NO drawn floor, NO atmospheric perspective.
- Character fills: ONE flat color per region (fur = one solid color,
  clothes = one solid color). NO internal shading, NO gradient, NO
  airbrush, NO highlight, NO 3D, NO drop shadow except a tiny soft pool
  under feet.
- The drawing must look quick, light, breezy — NOT polished, NOT
  meticulously rendered, NOT busy.

TONE: dry, deadpan, low-pressure, absurd, quiet humor. The joke lives in
the situation and the props, not in cuteness or detail level.

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image.
```

## 2. Negative constraints（v3.3，含 Lucy P0 加项）

```
Negative prompt:
- NO sticker pack style, NO mascot pose, NO chibi, NO kawaii cute style
- NO cute mascot wave, NO heart eyes, NO sparkles, NO blush dots
- NO men's-gaze cute (no oversized shiny eyes, no smirky pose)
- NO TikTok-style oily cute (no tear-corner highlight, no anime gloss)
- NO polished illustration, NO character sheet, NO turnaround
- NO Pixar 3D, NO anime style, NO children-book-illustration polish
- NO smooth gradient, NO airbrush, NO rim light, NO glow, NO atmospheric haze
- NO AI-perfect symmetry
- NO public-notice / public-announcement / school-bulletin visual format
- NO complete office scene, NO cluttered desk, NO multiple props beyond the named gag
- NO test-result aesthetic, NO personality-quiz card, NO certificate,
  NO diagnosis card, NO score chart, NO badge/medal
- NO UI screen text, NO exclamation mark (!) inside monitors — use red
  round warning lamps instead
- NO "REJECTED" or any English/Chinese letter shapes that look like real text
- NO Chinese characters, NO English words, NO text-like marks anywhere in
  the image — all text will be added by frontend overlay only
```

## 3. 本批 call 预算与产出

| # | 资产 | 用途 | call | 备注 |
|---|---|---|---|---|
| 1 | `share-stubborn-goose-busted-not-admit-v3.png` | 嘴硬鹅 4:5 主成卡 | 1 | 1 主梗：嘴上贴胶带 + 1 辅道具：拒签章 |
| 2 | `share-low-battery-cat-no-yingye-v3.png` | 低电量猫 4:5 主成卡 | 1 | 1 主梗：电池牌从手中滑落 + 1 辅道具：充电线插虚空 |
| 3 | `share-ddl-hamster-final-ddl-v3.png` | DDL 仓鼠 4:5 主成卡 | 1 | 1 主梗：日历红块叠 3 层"明天再说"便签 + 1 辅道具：啃过的笔；硬约束去 kawaii |
| 4 | `share-backstage-alpaca-after-socializing-v3.png` | 后台羊驼 4:5 主成卡 | 1 | 1 主梗：polite smile + 三屏红圆灯 + 1 辅道具：凉到结皮的咖啡 |
| **合计** | | | **4 calls** | |

**预算上限**：4 calls。失败重试不另计（脚本 max 3 retry，同一 prompt）。
**绝对不跑任何额外探索图。** 4 张输出后停下让 PM 验三问。

## 4. 4 张 share 卡的 v3.3 prompt body 全文

完整 prompt = §1 style header + §4.X body + §2 negative。
图像分辨率：`1024x1280`（接近 4:5 的 gpt-image-2 可选 size；导出后 Phoebe 本地 upscale 到 1080×1350）。

### 4.1 嘴硬鹅 / busted_not_admit
```
Subject: a chubby grey-and-white domestic goose state stand-in animal,
wearing a navy security cap (#3F5C7A). Caught-in-the-act state action: one
wing is raised so the wing tip lightly covers part of its own beak from the
side (the goose is hushing itself, refusing to speak). The other wing is
loosely holding up a red rubber stamp shape (#D7563B, no letters on it) in
front of the chest, like a half-shield. Beak turned sideways; eyes glance
away from the viewer; one foot a step back as if caught off guard.

Only these props in frame:
- the navy security cap (worn)
- the red stamp shape (held in front wing)

Nothing else: NO tape, no clipboard, no badge, no extra papers, no plant,
no chair back. Lower 40% of the frame is calm empty beige paper, suitable
for later text overlay.
```

### 4.2 低电量猫 / no_yingye

```
Subject: an orange tabby cat state stand-in animal, wearing a small
low-battery-orange (#E68A3A) work apron. Caught-in-the-act state action: the cat has just
melted forward across a desk corner, eyes half-closed, one whisker drooping;
its paw has gone limp and a small flat battery-shaped sign (no number on
it, just the battery icon shape) is sliding sideways out of its paw. A teal
(#7AB5B5) charging cable trails behind the cat, with the plug clearly
hanging in mid-air, plugged into NOTHING.

Only these props in frame:
- the low-battery-orange apron (worn)
- the battery sign (sliding from paw)
- the teal charging cable plugged into nothing

Nothing else: no coffee cup, no keyboard, no monitor, no plant, no chair.
Lower 40% of the frame is calm empty beige paper, suitable for later text
overlay.
```

### 4.3 DDL 仓鼠 / final_ddl

```
Subject: a small yellow-brown hamster state stand-in animal. CRITICAL:
smaller eyes than a kawaii hamster (avoid huge shiny round eyes), visible
dark under-eye circles, slightly messy fur, deadpan exhausted face — NOT
cute, NOT mascot, NOT children-book art. Caught-in-the-act state action:
hunched over a desk, both paws clutching a paper desk calendar that has a
big red rectangular block on today's date (no numbers, just a red block).
On top of that red block, three blank beige sticky notes are stacked, each
one half-covering the previous one — every sticky note is completely
blank, the hamster keeps adding a new blank sticky note on top of the
previous blank one (gag: the postponement loop is purely visual, no text).

Only these props in frame:
- the calendar with red block + 3 stacked sticky notes
- a single chewed-on pen lying near the calendar

Nothing else: no coffee cup, no clock, no paper stack, no plant, no chair.
Lower 40% of the frame is calm empty beige paper, suitable for later text
overlay.
```

### 4.4 后台羊驼 / after_socializing

```
Subject: a tall cream-white long-neck alpaca state stand-in animal,
wearing thin grey on-ear headphones (#5C6A75). Caught-in-the-act state
action: standing perfectly straight behind a small desk; deadpan
front-facing polite small smile, tiny eyes, neck perfectly vertical —
looks composed.

Behind the desk, instead of real monitors, there are THREE simple dark
rectangles standing upright like abstract panels — each rectangle has ONE
small RED ROUND lamp glowing on it (round red indicator light, like a
physical alert lamp on a panel; absolutely NOT exclamation marks, NOT UI
text, NOT software warning popup, NOT a real screen).

On the desk sits a paper coffee cup, cold flat coffee surface, no steam
rising.

The contrast between the alpaca's polite smile and the row of three red
round lamps behind IS the joke.

Only these props in frame:
- the thin grey headphones (worn)
- three simple dark upright rectangles, each with one red round lamp
- the cold paper coffee cup, no steam

Nothing else: NO ID badge, NO lanyard, NO plant, NO chair back, NO extra
papers, NO real monitor / screen frame / UI display. Lower 40% of the
frame is calm empty beige paper, suitable for later text overlay.
```

## 5. 本批要验证的唯一问题

> 所有变量收敛后，4 张图共同验证：
>
> **「状态便签 × 情绪小角色」这个调性，能否稳定输出在 4 张主成卡上？**

具体到 Fiona 三问：
1. 不看文字能感到该角色"正在替我嘴硬 / 没电 / 赶 DDL / 假装在状态"吗？
2. 是一帧梗，还是设定图 / 测试结果 / 证书？
3. 清爽干净的扁平色 + 黑线 + 留白，是否服务幽默与表达，而不是变成"做旧"风格表演？

如果 4 张稳定命中，余下资产（情绪变体 / 工位特写 / 全家福）可用同一 style header + 不同 body 复现，无需再次审 prompt。
如果命中 < 3 张，按差量微调 prompt，再次送审，**仍不烧第二批 calls**。

## 6. 已花 16 calls 中可保留的资产

| 资产 | 文件 | 状态 |
|---|---|---|
| 4 master sheet | `master-sheets/role-*-master-v1.png` | 仅作角色一致性参考；不进生产 |
| 道具图标 grid | `props/props-grid-v1.png` | 调性命中，可作产线资产 |
| 4 mood 表情条 | `moods/mood-*-v1.png` | 仅作情绪参考；不进生产 |
| 全家福远景 | `backgrounds/bg-office-shared-v1.png` | 待 v3 4 张稳定后再决定 |
| 4 角色工位特写 | `backgrounds/bg-role-desk-*-v1.png` | 同上 |
| v2 pilot 2 张 | `v2-pilot/v2-*-pilot.png` | 演化样本 |
| v1 share 鹅 | `share-cards/share-stubborn-goose-busted-not-admit-v1.png` | v1 风格对照 |

## 7. 等审

请 @Fiona / @jonathanzhang 审 §1 style header / §2 negative / §4.1-4.4 4 张 body。**OK 后才会开 4 calls**。

如有 prompt 修改，先在 thread 改一遍再次送审，**始终先审再跑**。
