---
name: image2-prompt-library
description: "Meetu 的 GPT Image 2 prompt 模板库。用于产出小红书封面、聊天截图风、备忘录截图风、活动海报、规则/流程信息图、多宫格图、产品 UI mockup、觅遇仔角色表和品牌/logo 概念板。适用于只写 prompt 或在具备 Image 2 工具/API 后执行生图；不负责真实 API 接入。"
triggers:
  - GPT Image 2 prompt
  - image2 prompt
  - 小红书封面
  - 聊天截图风
  - 备忘录截图
  - 活动海报
  - 信息图
  - 视觉资产prompt
depends-on:
  - AGENTS-PROTOCOL.md
  - Common Sense/项目状态/本周聚焦.md
  - Common Sense/品牌共识
used-by:
  - Phoebe2
---

# Meetu GPT Image 2 Prompt Library

## 先判断能不能真的出图

当前协议：**模型升级不等于出图工具可用**。

- 如果环境有 `image_gen` / GPT Image 2 工具，或明确配置了可用 `OPENAI_API_KEY`，可以执行生图。
- 如果没有工具/API key，只输出 prompt，交给 Jonathan 或外部 Image 2 环境测试。
- 不要假装能调用 Image 2；能力边界优先于交付速度。

## 使用前置

每次为 Meetu 写 Image 2 prompt 前先确认：

1. 读取 `Meetu/AGENTS-PROTOCOL.md`，确认角色边界。
2. 读取 `Meetu/Common Sense/项目状态/本周聚焦.md`，确认本周重点。
3. 视觉任务先查品牌/设计共识，尤其是：品牌语言、视觉资产生成标准、设计创新风格体系。
4. 小红书任务同时过 `xhs-content-checklist`：封面 0.5 秒可读、无引流敏感词、无站外导流。

## 从 awesome-gpt-image-2-prompts 提炼出的规则

1. **像产品 brief 一样写 prompt**：明确尺寸、用途、目标用户、视觉角色、信息层级、禁止项。
2. **文字重的图要写 exact text**：标题、副标题、卡片文字逐条写清，不让模型自由改文案。
3. **UI / 截图风用结构化对象**：用 JSON-like 结构描述状态栏、聊天气泡、备忘录标题、输入区等。
4. **系列图先定义共享系统**：同一套颜色、字体、材质、边距、标题区规则，再写每张图的差异。
5. **参考图只做方向，不做复刻**：最多 2 张；写明 “for mood and direction only, do not replicate”。
6. **真实粗糙感不要滥用 AI**：手机备忘录截图、手写便签、真实白板等，如果目标是“真的随手做”，优先真做真拍；Image 2 只适合生成可控的模拟稿。

## 通用 Prompt 骨架

```text
Create a [format] for Meetu.

Purpose:
- [where it will be used]
- [what user should understand/feel in 0.5 seconds]

Canvas:
- size: [width x height]
- aspect ratio: [e.g. 3:4 vertical]
- platform: [Xiaohongshu / WeChat mini program / poster]

Exact Chinese text to render:
- main title: "..."
- subtitle: "..."
- body/labels: [list every line]

Layout:
- [zones, hierarchy, spacing]

Visual system:
- [color palette]
- [type style]
- [texture/material]
- [mood]

Reference images, if any:
- max 2 images
- for mood and direction only; do not replicate composition, color, or layout directly

Constraints:
- accurate simplified Chinese text
- text must be large enough for mobile feed preview
- no fake platform logo unless explicitly requested
- no QR code or external-platform guidance unless provided
- no polished corporate poster feel unless explicitly requested
```

## Template 1 — 小红书大字报封面

Use for XHS notes where the cover must stop scrolling in 0.5 seconds.

```text
Create a 3:4 vertical Xiaohongshu cover for Meetu.

Purpose:
- stop the feed in 0.5 seconds
- make the topic instantly readable on a phone thumbnail

Canvas:
- size: 900x1200 or 1242x1660
- no external logo

Exact Chinese text:
- main title: "[主标题]"
- subtitle: "[副标题]"

Layout:
- main title takes 55-70% of the canvas width
- subtitle sits below as a clear second hierarchy, not tiny decoration
- keep 10-14% safe margin on all sides

Visual system:
- bold editorial typography
- simple high-contrast background
- one memorable graphic device only: underline / split block / giant number / checkbox / price tag
- looks like a sharp social-media thought, not a polished brand ad

Constraints:
- exact simplified Chinese text, no extra words
- readable at small thumbnail size
- avoid over-design, gradients, 3D, fake app UI
```

## Template 2 — 自查表 / 测试类封面

Use for “症状自查 / 你中了几条 / checklist” posts.

```text
Create a 3:4 vertical Xiaohongshu checklist cover.

Exact Chinese text:
- title: "[例如：暧昧期症状自查表]"
- subtitle: "[例如：你中了几条]"

Layout:
- title at top center, very large
- subtitle under title
- 5-8 hand-drawn checkbox icons around the title, some checked, some empty
- background resembles warm cream notebook paper or exam paper

Style:
- casual college note feeling
- slightly imperfect lines, but still controlled and legible
- not a polished poster, not corporate

Constraints:
- no long body text on cover
- Chinese characters must be accurate
```

## Template 3 — 聊天截图风

Use for “姐妹群分析 / crush 消息 / 宿舍群吐槽” screenshots.

Prefer Image 2 here because accurate Chinese UI text matters.

```json
{
  "type": "mobile chat screenshot mockup",
  "platform_feel": "generic Chinese messaging app, not a direct WeChat copy",
  "canvas": "1242x1660 vertical",
  "ui": {
    "status_bar": "simple phone status bar, no real carrier brand",
    "top_header": "group name: [群名], small member count",
    "message_area": [
      {"sender": "我", "bubble": "[消息1]", "side": "right"},
      {"sender": "朋友A", "bubble": "[回复1]", "side": "left"},
      {"sender": "朋友B", "bubble": "[回复2]", "side": "left"}
    ],
    "bottom_input": "subtle input bar, no app logo"
  },
  "visual_style": "realistic phone screenshot, slight compression, everyday college-student vibe",
  "constraints": [
    "render all Chinese text exactly",
    "do not use WeChat logo or identifiable platform branding",
    "no external contact or QR code",
    "messages should look casual, not like advertising copy"
  ]
}
```

## Template 4 — 备忘录 / 手机笔记截图风

Use for “行为记录 / 自查笔记 / 一个人的碎碎念”。

```json
{
  "type": "mobile notes app screenshot mockup",
  "canvas": "1242x1660 vertical",
  "exact_text": {
    "note_title": "[标题]",
    "note_lines": [
      "[第一条]",
      "[第二条]",
      "[第三条]"
    ]
  },
  "layout": {
    "top": "notes app title area with date/time-like small gray text",
    "body": "left aligned note lines, generous line height",
    "decoration": "optional small hand-drawn marks, very restrained"
  },
  "style": "looks like a real note screenshot from a college student, low-polish but intentional",
  "constraints": [
    "Chinese text must be accurate",
    "no fake Apple logo or platform brand",
    "do not over-design"
  ]
}
```

## Template 5 — 小红书系列封面批量

Use for D1-D7 起号封面 or any multi-day series.

```text
Create a consistent series of [N] Xiaohongshu covers for Meetu.

Shared system:
- size: 900x1200, 3:4 vertical
- typography: large Chinese display title, subtitle readable in thumbnail
- layout: same margin system and title zone across all covers
- style: bold text-first covers, not brand posters
- no logo unless explicitly requested

For each cover:
1. main title: "[D1 title]" / subtitle: "[D1 subtitle]" / visual device: [black-white shock]
2. main title: "[D2 title]" / subtitle: "[D2 subtitle]" / visual device: [giant number contrast]
...

Constraints:
- each cover must be independently readable
- series must feel related but not identical
- avoid tiny subtitle text
- no external-platform guidance
```

## Template 6 — 6宫格 / 7条规则信息图

Use for rules, checklist, relationship symptoms, “寝室潜规则”等。

```text
Create a 3:4 vertical multi-panel infographic for Meetu.

Exact Chinese text:
- title: "[标题]"
- panels:
  1. "[短标题1]" — "[一句说明1]"
  2. "[短标题2]" — "[一句说明2]"
  ...

Layout:
- top title area 18-22% height
- below: 6-panel grid (2 columns x 3 rows) or 7-rule layout (numbered vertical cards)
- each panel has large number/icon, short title, one-line body
- keep text large; do not pack paragraphs

Style:
- youthful editorial infographic
- playful but clear
- one strong color system, no random rainbow

Constraints:
- exact Chinese text
- if there are more than 7 rules, reduce body to one line per rule
- no legal-document feeling
```

## Template 7 — 活动招募海报 / DROP类活动封面

Use for event cover images such as DROP / 狠人杀 / City Walk / English Corner.

```text
Create an activity recruitment poster for Meetu.

Canvas:
- [750x560 for mini-program cover] or [1242x1660 for XHS]

Exact Chinese text:
- event brand: "[DROP第1局]"
- hook: "[一句最抓人的slogan]"
- key info: "[价格/人数/时间/地点]"

Layout:
- event brand as top-level visual anchor
- hook is second hierarchy but still large
- key info placed in compact chips or info strip
- leave room for thumbnail cropping

Visual direction:
- match the activity subtype, not generic Meetu orange
- for DROP: dark base, neon pink/cyan/gold, club-card energy, not warm campus
- for lifestyle/citywalk: editorial warm-light photo-card feeling
- for study/English: airy editorial, not training institution

Constraints:
- accurate Chinese text
- no exaggerated promises
- if people are shown, use Asian skin tones
- do not show alcohol as the core object unless activity requires it
```

## Template 8 — 活动详情页 Hero 背景图

Use when HTML overlays text and the image should provide mood only.

```text
Create a horizontal hero background image for a Meetu activity detail page.

Canvas:
- size: 750x400

Text:
- no text in image; HTML will overlay all copy

Visual role:
- establish the activity mood in the first screen
- support, not compete with, overlaid title and tags

Style:
- [describe activity-specific system]
- dark/light contrast should preserve text readability
- central area can have texture or atmosphere; avoid busy text zones

Constraints:
- no readable text, no UI screenshot, no logo unless provided
- safe top/bottom margin for HTML overlay
- if people appear, use Asian skin tones
```

## Template 9 — 产品 UI mockup / 小程序页面预览

Use for showing how a feature works without using real screenshots.

```json
{
  "type": "mini program UI mockup poster",
  "canvas": "1242x1660 vertical",
  "screen": {
    "device_frame": "subtle phone frame or cropped mobile screen",
    "sections": [
      {"name": "top_nav", "text": "[页面名]"},
      {"name": "hero_card", "text": "[核心功能一句话]"},
      {"name": "feature_cards", "items": ["[功能1]", "[功能2]", "[功能3]"]}
    ]
  },
  "style": "designed mockup, not literal product screenshot; youthful but trustworthy",
  "constraints": [
    "no fake real user data",
    "no external platform marks",
    "Chinese UI text must be accurate",
    "do not overfill the screen"
  ]
}
```

## Template 10 — Logo / 品牌概念板

Use for logo exploration with Image 2, especially when Jonathan wants fast visual comparison.

```text
Create a brand identity concept board for Meetu.

Goal:
- explore a memorable logo system that can work as app icon, wordmark, poster watermark, and social avatar
- logo should encode Meetu's attitude: 有趣、自由、时尚、多元、酷

Canvas:
- 2048x2048 square concept board

Show these applications:
1. app icon among realistic mobile desktop icons
2. wordmark on an activity poster header
3. monochrome watermark on an XHS cover
4. small-size test at 44x44

Design direction:
- [one-sentence signature move, e.g. “a Meetu wordmark where the M has a deliberate missing cut that becomes the brand signature”]
- avoid mascot as main logo
- avoid childish rounded type, generic Helvetica, and literal puzzle/people icons

Color exploration:
- do not default to orange-black if it feels like Didi/Netflix
- test a distinct youth-culture palette: cream + deep ink + burnt accent / forest green + sunset accent / milk-tea + wine + electric blue

Constraints:
- output should feel original, not copied from reference brands
- include both M icon and Meetu wordmark in the same board
- the single M cannot feel empty; it must carry a signature idea
```

## Template 11 — 觅遇仔角色表 / Mascot sheet

Use for mascot variants, sticker poses, onboarding characters.

```text
Create a mascot pose sheet for Meetu mascot 觅遇仔.

Reference image:
- provide the official mascot master image
- reference is identity-critical; preserve character features exactly

Canvas:
- 3x3 or 4x4 clean sheet
- white or transparent-looking background
- at least 100px spacing between each pose

Pose set:
- [welcome]
- [holding sign]
- [celebrating]
- [thinking]
- [pointing]
- [running to activity]

Style:
- youthful, not baby-cute
- more attitude than purely adorable
- suitable for campus social product

Constraints:
- preserve mascot identity
- no new species or facial structure
- no random props that conflict with brand
```

## Template 12 — Sticker Sheet / 行动标签

Use for stickers that will later be cropped into assets.

```text
Create one Meetu sticker sheet.

Canvas:
- white background
- layout: 3x3 or 4x4 grid
- at least 100px empty spacing between every sticker
- no sheet title, no category labels, no frame UI

Exact Chinese sticker texts:
- "[贴纸1]"
- "[贴纸2]"
- "[贴纸3]"
...

Style:
- young, fashionable, lively
- Chinese text primary; English only if decorative and minimal
- each sticker stands alone and can be cropped cleanly
- use Meetu visual language without becoming childish

Constraints:
- no background pattern that touches sticker edges
- no adjacent element overlap
- text must be accurate and readable
```

## Template 13 — 城市/活动清单图

Use for “周末去处 / 省钱方式 / 城市活动清单”。

```text
Create a Xiaohongshu-style list infographic for college students.

Exact Chinese text:
- title: "[清单标题]"
- list items:
  1. "[地点/方式]" — "[价格/关键词]"
  2. ...

Layout:
- giant number or price hook at top
- list cards below, each with icon, title, and one short detail
- strong hierarchy: hook > category > detail

Style:
- practical, save-worthy, not tourist brochure
- can use hand-account / magazine layout feeling

Constraints:
- keep details short enough to read on phone
- no fake addresses or fabricated data unless provided
```

## Template 14 — 低保真“活人感”帖子配图方案

Use only when the creative direction is deliberately rough, like “真人随手做”。

Before using Image 2, ask: **would a real phone screenshot or handwritten note work better?**

If still using Image 2:

```text
Create a deliberately low-fidelity college-student-made image.

Exact Chinese text:
- "[text]"

Style:
- looks like a real quick phone note / paper note / messy screenshot
- imperfect, unpolished, not designerly
- no fake premium texture, no balanced poster grid, no brand polish

Constraints:
- do not make it “设计师模拟粗糙”
- if the result looks refined, it fails
- Chinese text must be accurate
```

## Template 15 — Image 2 vs Nano Banana 对比测试

Use after API/tool access exists.

```text
Test task:
- generate the same Meetu visual with Image 2 and Nano Banana.

Scene:
- [XHS cover / chat screenshot / activity poster / infographic]

Evaluation:
1. Chinese text accuracy
2. layout control
3. mobile thumbnail readability
4. brand fit
5. amount of manual cleanup needed

Output:
- side-by-side image comparison
- short notes: which model should own this scene next time
```

## When to choose Image 2 vs Nano Banana

Use **Image 2** for:
- Chinese text-heavy covers
- chat / memo / UI screenshot mockups
- infographics and multi-panel layouts
- mock app screens and social screenshots
- series that need consistent typography/layout

Use **Nano Banana / Gemini** for:
- atmospheric background images with little or no text
- illustration / lifestyle / scene images
- mascot/character variants if reference-image identity consistency is stronger there
- image editing workflows already proven in the current pipeline

Use **manual production** for:
- truly raw phone memo screenshots
- real handwriting / sticky notes / whiteboard photos
- any asset where “真实粗糙” matters more than generated polish
