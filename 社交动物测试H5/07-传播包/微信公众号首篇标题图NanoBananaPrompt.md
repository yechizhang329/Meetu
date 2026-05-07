# 微信公众号首篇标题图 Nano Banana Prompt

## 任务定位

用于试验公众号首篇标题图的 Nano Banana / Gemini 生图效果。目标是生成「今日动物园挂牌：你」的公众号头图方向，不直接替代最终生产稿。最终是否使用，以中文准确性和公众号小图可读性为准。

当前文章标题：

```text
今日动物园挂牌：你
```

头图比例沿用现有公众号视觉：`900×383`。如果工具不支持精确像素，使用接近的 `2.35:1` / 横向宽图比例。

## A 轨：直接带中文标题版 Prompt

```text
Create a WeChat Official Account article header image, wide horizontal ratio about 2.35:1, PNG.

Theme: a Chinese college social personality test with a “zoo placard / today on display” metaphor. The image should feel like the reader is humorously placed on a zoo exhibit tag, in a playful friend-roast way, not judgmental.

Exact Chinese text to include, no changes, no extra text, no fake characters:
Main title, largest and most readable:
「今日动物园挂牌：你」

Optional smaller field text, only if it remains clean and readable:
「品种未知」
「习性可疑」
「朋友锐评待生成」

Composition:
- A large handmade zoo exhibit placard / hanging nameplate is the main object.
- The main title sits on the placard and must be the first thing people read.
- Add a small abstract anti-cute social-animal silhouette near the side of the placard, deadpan eyes, awkward limbs, slightly unhinged posture.
- Add blank sticky notes, doodle arrows, pin holes, tape, hand-drawn circles around the placard.
- Keep enough negative space; do not overcrowd.

Visual style:
- desktop sticky-note animal-test visual language
- warm off-white paper background
- rough black hand-drawn outlines (#2B2B2B)
- handmade marker typography / paper label feeling
- adult college meme tone, funny and slightly absurd
- inspired by typographic little-animal personality symbols, not pet stickers

Color palette:
#FFF8EA warm paper, #FFFDF5 placard, #2B2B2B black line, #FF7A3D orange accent, #C8FF5A green tag, #FFE15A yellow note, #FFB7C5 pink note, #9DD7FF blue note.

Hard constraints:
- Chinese characters must be accurate, crisp, readable, and not distorted.
- Do not add any extra Chinese, English, numbers, fake writing, labels, or watermarks.
- No QR code.
- No app download / register / join group / sign-up visuals.
- No 16 animals, no test question list, no H5 screenshot.
- No MBTI or SBTI wording.
- No cute pet, no kawaii, no plush toy, no baby face, no shiny eyes, no children’s book illustration.
- No dark horror, no shame, no public-execution feeling.
- Do not make it look like an advertisement banner or product promo.

Goal: when opened in a WeChat article, the reader instantly sees 「今日动物园挂牌：你」 and feels this is a funny social animal test.
```

## B 轨：无字底图兜底 Prompt

如果 A 轨出现错字、伪字、小图不可读或排版不稳，使用 B 轨生成无字底图，再手工排中文。

```text
Create a no-text WeChat Official Account article header background, wide horizontal ratio about 2.35:1, PNG.

Theme: a Chinese college social personality test with a “zoo placard / today on display” metaphor. The image should look like a handmade paper zoo exhibit nameplate on a desktop, playful and slightly absurd, not an advertisement.

Main visual:
- A large blank zoo exhibit placard / hanging nameplate as the main object.
- Warm paper texture, rough black hand-drawn outlines (#2B2B2B), pin holes, tape, uneven marker strokes.
- A small abstract anti-cute social-animal silhouette on the side, deadpan eyes, awkward limbs, slightly unhinged posture.
- Blank sticky notes, blank stamp shapes, doodle arrows, circle marks around the placard.

Composition:
- Leave a large clean blank area on the main placard for manually typeset Chinese title.
- Leave small blank field areas for manually typeset species / habit / friend-roast text.
- Keep hierarchy: placard first, animal silhouette second, sticky-note details third.

Style:
- desktop sticky-note animal-test visual language
- adult college meme tone
- rough black-line editorial collage
- anti-cute, deadpan, wobbly, not childish

Color palette:
#FFF8EA warm paper, #FFFDF5 placard, #2B2B2B black line, #FF7A3D orange accent, #C8FF5A green tag, #FFE15A yellow note, #FFB7C5 pink note, #9DD7FF blue note.

Hard constraints:
- NO Chinese text, NO English text, NO numbers, NO fake writing, NO labels, NO watermark.
- NO QR code.
- NO app download / register / join group / sign-up visuals.
- NO 16 animals, NO test questions, NO H5 screenshot.
- NO MBTI/SBTI wording.
- NO cute/kawaii/pet/plush/baby-animal style.
- All readable copy will be manually typeset after generation.
```

## Negative Constraints

如工具支持 negative prompt，追加：

```text
fake text, garbled Chinese, misspelled Chinese, English letters, numbers, watermark, QR code, app download button, sign-up button, join group button, 16 animal grid, test questions, H5 screenshot, MBTI, SBTI, cute sticker, kawaii pet, plush toy, baby face, shiny eyes, children’s book, glossy 3D, horror, courtroom, police evidence board, crime scene, advertisement banner
```

## 验收标准

### A 轨带字版

- [ ] `今日动物园挂牌：你` 逐字正确；
- [ ] 如出现辅助文字，`品种未知 / 习性可疑 / 朋友锐评待生成` 也必须逐字正确；
- [ ] 无多字、错字、伪字、英文、数字、水印；
- [ ] 公众号头图小尺寸下标题仍可读；
- [ ] 不像广告 banner；
- [ ] 不 cute/kawaii/萌宠贴纸；
- [ ] 不展示 16 个动物/题目/H5 截图。

### B 轨无字底图

- [ ] 完全无文字、无伪文字；
- [ ] 有足够空位给后期排入标题；
- [ ] 动物园挂牌语义清楚；
- [ ] 后期手工排字后，标题是第一视觉重点。

## 推荐执行命令示例

```bash
infsh app run google/gemini-3-1-flash-image-preview --input '{
  "prompt": "<paste A or B track prompt here>",
  "aspect_ratio": "16:9",
  "resolution": "2K",
  "output_format": "png"
}'
```

说明：工具不一定支持 `900×383` 精确像素，命令里的 `16:9` 只是近似生成方案；最终必须按公众号头图比例裁切到 `900×383` / `2.35:1`，不能直接使用 16:9 原图作为公众号头图。
