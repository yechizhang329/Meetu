# 微信公众号首篇视觉 Brief v2

## 最新标题口径

标题：**今日动物园挂牌：你**

副标题/摘要：

```text
12个朋友局小场景，生成一张你的社交动物牌。
```

## v1 到 v2 的调整

v1 的“群友证据板”方向成立，但与最新文案标题不够贴合。v2 改为更明确的：

> 动物园挂牌 / 今日展出 / 朋友锐评待生成

视觉不再只表现“群友拿证据”，而是像用户被挂上一张社交动物展牌：好笑、贴脸、可传播，但不是审判羞辱。

## 图 1：公众号头图 / 封面图 v2

- 文件：`微信公众号首篇-头图-v2.png`
- 尺寸：`900×383`
- 主文案：`今日动物园 / 挂牌：你`
- 辅助信息：`品种未知 / 习性可疑`、`朋友锐评待生成`
- 弱品牌：`Meetu · 社交动物测试`
- 画面：一张动物园展牌/挂牌是主元素；右侧为“朋友锐评待生成”的小展牌与抽象动物剪影。

## 图 2：文末 CTA 图 v2

- 文件：`微信公众号首篇-文末CTA-v2.png`
- 尺寸：`900×500`
- 主文案：`测完别急着认，先发群里看看。`
- 辅助便签：`看谁先说太像了` / `阅读原文开测` / `朋友锐评待生成`
- 弱品牌：`Meetu · 社交动物测试`

## 风格要求

- 保持“桌面便签动物园”：暖纸底、黑线、手写圈画、便签、挂牌；
- 动物只是抽象剪影，不对应 16 个具体结果；
- 不展示 16 个动物，不剧透结果；
- 不放二维码，不大 logo，不做硬广；
- 不走 cute/kawaii/萌宠贴纸；
- 文字由手工排版控制，保证公众号头图可读。

## GPT Image 2 Prompt（仅用于无字底图探索）

> 新规则：图片类 component 不直接用 AI 生成为最终生产件。若使用 GPT Image 2，只生成无字视觉底图/氛围参考。最终中文必须由设计稿、前端或公众号后台手工排版。

```text
Create a WeChat Official Account article header background, 900:383 ratio, PNG.

Theme: a Chinese college social personality test with a “zoo exhibit tag / today on display” metaphor. The image should look like a handmade desktop paper zoo nameplate, not an advertisement.

Visual direction:
- warm off-white paper background with subtle grain
- rough black hand-drawn outlines (#2B2B2B)
- a large blank zoo exhibit nameplate / hanging tag as the main object
- smaller blank paper tags and stamp-like marks around it
- one abstract anti-cute social animal silhouette, weird and slightly deadpan, as a small supporting visual
- desktop sticky-note animal-test feeling, adult college meme tone, not childish

Composition:
- leave a large clean area on the main nameplate for manually typeset Chinese title
- leave a smaller blank card area for manually typeset friend-roast status
- keep visual hierarchy strong: nameplate first, animal silhouette second, small notes third

Hard constraints:
- NO Chinese text, NO English text, NO numbers, NO fake glyphs, NO labels, NO watermark
- NO QR code, NO download/register/join/sign-up cues
- NO cute pet sticker, NO kawaii, NO children’s book style
- NO 16 animals, NO result list, NO app screenshot
- all readable copy will be manually typeset later

Palette: #FFF8EA paper, #2B2B2B black line, #FF7A3D orange accent, #C8FF5A green tag, #FFE15A yellow note, #FFB7C5 pink note.
```

## 生产说明

- `微信公众号首篇-头图-v2.png` 与 `微信公众号首篇-文末CTA-v2.png` 是当前手工排字 layout reference，可用于内部 review；
- 若后续要上生产，建议保留手工排字版本，或用 GPT Image 2 生成无字底图后再手工排字；
- 不允许把 AI 生成的不可控中文直接作为公众号生产图。
