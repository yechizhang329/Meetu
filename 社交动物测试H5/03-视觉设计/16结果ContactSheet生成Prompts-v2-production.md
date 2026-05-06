# 社交动物测试 16 结果 Contact Sheet 生成 Prompts v2 Production

本版基于 v0 生成结果的问题修正：
- v0 尺寸为 `1374×1145`，不能直接按 `600×500` crop；
- v0 背景有渐变/明暗，不是 exact `themeColor`；
- v0 风格偏儿童贴纸，阴影和高光较重；
- v0 可做风格参考，但不适合作为正式 H5 替换资产。

v2 的目标：**让生成图更接近可直接 crop 的 production asset sheet**。

## 必须满足的硬规格

- PNG
- `2400×2000px`
- 4 columns × 4 rows
- 每格 `600×500px`
- 每格必须是纯色背景，背景色等于对应 `themeColor`
- 每格内无任何文字/编号/标题/水印/边框/阴影
- 动物不得跨格，不得触碰 cell 边缘
- 动物风格：黑线简笔、成人化、轻梗、少阴影、无 3D、无儿童贴纸质感

## 背景色后处理规则

如果模型仍然输出近似色、渐变或阴影背景，不允许直接进 H5。必须先用脚本/设计工具把每个 `600×500` crop 的背景统一替换为对应 `themeColor` 精确值，再交给 Dave 集成。

## Slot 顺序与颜色

| # | id | 中文名 | bg exact themeColor | accent | 画面记忆点 |
|---:|---|---|---|---|---|
| 1 | power_cat | 省电猫 | `#5d7186` | `#9dd7ff` | 闭眼猫，低电量尾巴/电池 |
| 2 | warm_dog | 热心犬 | `#ff7a3d` | `#ffe15a` | 递小纸条/举手接话的狗 |
| 3 | calm_capybara | 稳定水豚 | `#b7926b` | `#fff8ea` | 松弛坐镇的水豚，小杯子/地线 |
| 4 | corner_mouse | 角落鼠 | `#8b7c9e` | `#c7a4ff` | 角落观察的鼠，草稿纸/三点气泡 |
| 5 | vibe_monkey | 整活猴 | `#ffe15a` | `#ff7a3d` | 香蕉麦克风/表情包道具 |
| 6 | prep_hamster | 攻略仓鼠 | `#d7bd82` | `#b7926b` | 抱 checklist/SOP 卡片 |
| 7 | border_collie | 控场边牧 | `#6f9ed9` | `#1f1f1f` | 投票板/流程表/组织者姿态 |
| 8 | meme_fox | 接梗狐 | `#e8793e` | `#ffe15a` | 问号尾巴，接住飞来的梗 |
| 9 | show_peacock | 开屏孔雀 | `#32b6a6` | `#ff7a3d` | 克制开屏，小舞台/聚光 |
| 10 | empathy_otter | 共情海獭 | `#59b7d8` | `#ffb7c5` | 抱纸巾/抱枕/救场小物 |
| 11 | border_hedgehog | 边界刺猬 | `#9b8068` | `#c7a4ff` | 安全距离线/边界牌 |
| 12 | recharge_panda | 回血熊猫 | `#98d36f` | `#1f1f1f` | 勿扰牌/躺椅/电量条 |
| 13 | night_owl | 夜航猫头鹰 | `#5d4b8c` | `#c7a4ff` | 月亮/电脑/夜航线 |
| 14 | lastminute_pigeon | 临门鸽 | `#a9c4d8` | `#70685e` | 门口刹车，一脚出门一脚退 |
| 15 | bullet_alpaca | 弹幕羊驼 | `#d8b88e` | `#1f1f1f` | 无字弹幕气泡，表面平静 |
| 16 | social_butterfly | 社交蝴蝶 | `#c27cff` | `#ffb7c5` | 虚线飞行路径，多社交气泡 |

---

## GPT Image 2 Prompt v2

```text
Create a production-ready PNG contact sheet for mobile H5 UI animal illustrations.

ABSOLUTE CANVAS REQUIREMENT:
The final image must be exactly 2400×2000px, landscape 6:5 ratio.
It must contain a strict 4×4 grid.
Each cell must be exactly 600×500px.
This image will be sliced mechanically into 16 equal 600×500 crops. Design it as a technical asset sheet, not a poster.

LAYOUT REQUIREMENTS:
- 4 columns and 4 rows, no gutters.
- No visible grid lines, no crop marks, no frames, no borders.
- Each cell is a flat solid rectangle with one exact background color.
- No gradients, no lighting effects, no shadows on the cell background, no paper texture.
- Every animal is centered inside its own 600×500 cell.
- Each animal occupies around 60% of cell width and 65% of cell height.
- Keep at least 70px safe padding on all sides of every cell.
- No animal body part, prop, tail, wing, bubble, or path may cross into another cell.

STYLE REQUIREMENTS:
- Unified adult hand-drawn black-line icon system.
- Visual language: "desktop sticky-note zoo" for a college social personality test.
- Stroke color #2b2b2b, thick rounded strokes, simple flat fills.
- Keep forms simple and readable at small H5 result-card size.
- Cute but not childish; witty but not meme-trash; no preschool sticker style.
- Use only flat fills; no 3D, no realistic fur, no glossy highlights, no drop shadows, no bevels.
- No text anywhere: no Chinese, no English, no numbers, no labels, no animal names, no watermarks, no speech-bubble text.

EXACT CELL MAP:
Row 1 Col 1: power_cat / 省电猫. Background EXACT #5d7186. Accent #9dd7ff only for the battery. Draw a sleepy low-battery cat with closed eyes; tail or nearby prop shaped like a battery / power bar.
Row 1 Col 2: warm_dog / 热心犬. Background EXACT #ff7a3d. Accent #ffe15a. Draw a friendly dog offering a small paper note or raising one paw to join the conversation; wagging tail.
Row 1 Col 3: calm_capybara / 稳定水豚. Background EXACT #b7926b. Accent #fff8ea. Draw a calm capybara sitting steadily, relaxed eyes, small cup or grounding line nearby.
Row 1 Col 4: corner_mouse / 角落鼠. Background EXACT #8b7c9e. Accent #c7a4ff. Draw a small mouse half-hidden in a corner, with a draft paper or three-dot typing bubble, no text.

Row 2 Col 1: vibe_monkey / 整活猴. Background EXACT #ffe15a. Accent #ff7a3d. Draw a lively monkey holding a banana microphone or tiny meme prop, energetic pose.
Row 2 Col 2: prep_hamster / 攻略仓鼠. Background EXACT #d7bd82. Accent #b7926b. Draw a hamster holding a checklist / SOP card or small map; no readable marks.
Row 2 Col 3: border_collie / 控场边牧. Background EXACT #6f9ed9. Accent #1f1f1f. Draw a border collie organizer with a voting board or flow chart made of simple boxes, no text.
Row 2 Col 4: meme_fox / 接梗狐. Background EXACT #e8793e. Accent #ffe15a. Draw a clever fox with a question-mark tail catching a flying joke symbol or blank speech card.

Row 3 Col 1: show_peacock / 开屏孔雀. Background EXACT #32b6a6. Accent #ff7a3d. Draw a peacock with compact fan tail and subtle stage energy; expressive but not glamorous.
Row 3 Col 2: empathy_otter / 共情海獭. Background EXACT #59b7d8. Accent #ffb7c5. Draw a gentle otter holding a tissue, cushion, or rescue object; emotionally attentive.
Row 3 Col 3: border_hedgehog / 边界刺猬. Background EXACT #9b8068. Accent #c7a4ff. Draw a hedgehog with visible spikes and a safety-distance line or boundary sign, no text.
Row 3 Col 4: recharge_panda / 回血熊猫. Background EXACT #98d36f. Accent #1f1f1f. Draw a panda recharging with a battery bar, do-not-disturb card, or small lounge chair; no text.

Row 4 Col 1: night_owl / 夜航猫头鹰. Background EXACT #5d4b8c. Accent #c7a4ff. Draw a night owl with moon, laptop, stars, or small night-flight route.
Row 4 Col 2: lastminute_pigeon / 临门鸽. Background EXACT #a9c4d8. Accent #70685e. Draw a pigeon at a doorway, one foot out and one foot braking, hesitant posture.
Row 4 Col 3: bullet_alpaca / 弹幕羊驼. Background EXACT #d8b88e. Accent #1f1f1f. Draw a calm alpaca with blank floating comment bubbles around it; absolutely no text.
Row 4 Col 4: social_butterfly / 社交蝴蝶. Background EXACT #c27cff. Accent #ffb7c5. Draw a butterfly with dotted flight path between blank social bubbles; light but not babyish.

FAILURE CONTROLS:
Do not generate a square canvas. Do not generate 1374×1145. Do not add labels. Do not add text. Do not create gradients. Do not create shadows. Do not make sticker-like glossy characters. Do not use different art styles per cell. Do not change the order. Do not use approximate random colors. Do not make it look like a poster or infographic. The result must be a precise 2400×2000 production contact sheet for direct 600×500 cropping.
```

建议参数：

```bash
gpt-image -p "<paste prompt>" --model gpt-image-2 --size 2400x2000 --quality high --format png -f social-animal-contact-sheet-v2.png
```

如果 GPT Image 2 CLI 不支持 `2400x2000`，可以用 `--size landscape` 生成，但必须在下一步用图像工具修成 `2400×2000`，不要直接进 crop。

---

## Gemini / Nano Banana Prompt v2

```text
Generate ONE production-ready PNG contact sheet for mobile H5 UI animal illustrations.

This is a technical crop-ready asset sheet. It is NOT a poster, NOT a collage, NOT an infographic, NOT a character intro page.

ABSOLUTE OUTPUT FORMAT:
- 2400×2000px landscape image.
- Strict 4 columns × 4 rows.
- Each cell is exactly 600×500px.
- The image will be mechanically cropped into 16 equal 600×500 images.

CELL BACKGROUND RULE:
- Each cell must be a flat solid color rectangle.
- No gradients, no lighting, no paper texture, no shadows on backgrounds.
- Use the exact background hex colors listed below.
- If you cannot preserve exact hex colors, make the background as flat and clean as possible for later exact-color post-processing.

STYLE:
- Unified hand-drawn black-line animal icons.
- Stroke color #2b2b2b, thick rounded strokes.
- Flat color fills only.
- College social personality test style: desktop sticky-note zoo, witty, simple, shareable.
- Adult college-student taste: cute but not childish, not baby sticker, not cartoon toy.
- No 3D, no photorealistic fur, no glossy highlights, no drop shadows, no emoji.

CROP SAFETY:
- Every animal must stay fully inside its own cell.
- Keep generous empty safe margin around each animal.
- No tails, wings, bubbles, paths, or props crossing cell boundaries.
- Every animal centered and similar scale.

NO TEXT:
Do not add any Chinese text, English text, numbers, labels, animal names, captions, titles, logos, watermarks, or speech-bubble text.

EXACT 4×4 CELL MAP:

ROW 1:
1. power_cat / 省电猫 — background EXACT #5d7186, accent #9dd7ff — sleepy low-battery cat, closed eyes, battery tail / battery prop.
2. warm_dog / 热心犬 — background EXACT #ff7a3d, accent #ffe15a — friendly dog offering a small paper note or raising paw, wagging tail.
3. calm_capybara / 稳定水豚 — background EXACT #b7926b, accent #fff8ea — calm capybara sitting steadily, small cup or grounding line.
4. corner_mouse / 角落鼠 — background EXACT #8b7c9e, accent #c7a4ff — small mouse hidden in a corner, draft paper or three-dot typing bubble, no text.

ROW 2:
5. vibe_monkey / 整活猴 — background EXACT #ffe15a, accent #ff7a3d — lively monkey holding banana microphone or tiny meme prop.
6. prep_hamster / 攻略仓鼠 — background EXACT #d7bd82, accent #b7926b — hamster holding checklist / SOP card / map, no readable marks.
7. border_collie / 控场边牧 — background EXACT #6f9ed9, accent #1f1f1f — organizer border collie with voting board, whistle, or flow chart, no text.
8. meme_fox / 接梗狐 — background EXACT #e8793e, accent #ffe15a — clever fox with question-mark tail, catching a flying joke symbol or blank speech card.

ROW 3:
9. show_peacock / 开屏孔雀 — background EXACT #32b6a6, accent #ff7a3d — compact fan-tail peacock with subtle small-stage energy, expressive not luxury.
10. empathy_otter / 共情海獭 — background EXACT #59b7d8, accent #ffb7c5 — gentle otter holding tissue / cushion / rescue object.
11. border_hedgehog / 边界刺猬 — background EXACT #9b8068, accent #c7a4ff — hedgehog with spikes and boundary line / safety distance symbol, no text.
12. recharge_panda / 回血熊猫 — background EXACT #98d36f, accent #1f1f1f — panda recharging with battery bar / do-not-disturb card / lounge chair, no text.

ROW 4:
13. night_owl / 夜航猫头鹰 — background EXACT #5d4b8c, accent #c7a4ff — night owl with moon / laptop / stars / night route.
14. lastminute_pigeon / 临门鸽 — background EXACT #a9c4d8, accent #70685e — pigeon at doorway, one foot out and one foot braking, hesitant.
15. bullet_alpaca / 弹幕羊驼 — background EXACT #d8b88e, accent #1f1f1f — calm alpaca with blank floating comment bubbles, no text.
16. social_butterfly / 社交蝴蝶 — background EXACT #c27cff, accent #ffb7c5 — butterfly with dotted path between blank social bubbles.

NEGATIVE PROMPT:
No text, no labels, no numbers, no captions, no title, no watermark, no grid labels, no emoji, no photorealism, no 3D, no glossy sticker style, no drop shadows, no background gradients, no poster composition, no mixed styles, no animals crossing cells, no wrong order, no random colors.

The final output must look like one coherent black-line illustration icon set, ready to crop into 16 exact 600×500 H5 assets.
```

建议参数：

```json
{
  "prompt": "<paste prompt>",
  "aspect_ratio": "6:5",
  "resolution": "4K",
  "output_format": "png"
}
```

如果工具不支持 `6:5`，优先选择最接近 `2400×2000` 的 landscape 输出，再用设计工具扩/裁到 `2400×2000`。

---

## Crop 与后处理流程

1. 把最终 contact sheet 校正到 `2400×2000px`。
2. 按 4×4 切成 16 张，每张 `600×500px`：
   - Row 1 y = `0–500`
   - Row 2 y = `500–1000`
   - Row 3 y = `1000–1500`
   - Row 4 y = `1500–2000`
   - Col 1 x = `0–600`
   - Col 2 x = `600–1200`
   - Col 3 x = `1200–1800`
   - Col 4 x = `1800–2400`
3. 对每个 crop 做背景精确填色：背景必须变成对应 `themeColor`，不能保留渐变/阴影/近似色。
4. 导出 PNG，文件名：

```text
power_cat.png
warm_dog.png
calm_capybara.png
corner_mouse.png
vibe_monkey.png
prep_hamster.png
border_collie.png
meme_fox.png
show_peacock.png
empathy_otter.png
border_hedgehog.png
recharge_panda.png
night_owl.png
lastminute_pigeon.png
bullet_alpaca.png
social_butterfly.png
```

## 验收清单

- [ ] 原图为 `2400×2000` 或已后处理成 `2400×2000`；
- [ ] 每格为 `600×500`；
- [ ] 16 格顺序正确；
- [ ] 每格背景为 exact `themeColor`；
- [ ] 无文字、无编号、无水印；
- [ ] 动物未跨格、未被裁切；
- [ ] 风格不幼态，不过度贴纸/3D；
- [ ] 缩到分享卡后动物和道具仍清楚；
- [ ] Dave 集成后重跑移动端与分享卡尺寸验证。
