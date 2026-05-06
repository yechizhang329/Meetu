# 社交动物测试 16 结果 Contact Sheet 生成 Prompts v1

用途：分别用 Gemini / Nano Banana 系 与 ChatGPT Image 2 / GPT Image 2 生成一张 16 个动物结果的 PNG contact sheet。生成后按 4×4 裁切，每格可替换 H5 结果页当前 `AnimalIllustration` 区域。

## 生产判断

这不是海报，也不是角色介绍页。它是 **可裁切 UI 资产表**。

优先级：
1. 4×4 位置准确；
2. 每格背景色必须以 H5 `themeColor` 精确值为准；
3. 每只动物居中、安全边距稳定；
4. 16 只风格统一；
5. 动物有动作/道具/表情记忆点。

不要把“好看”放在“可裁切”和“一致性”前面。

## 固定输出规格

- 输出格式：PNG
- 建议尺寸：`2400×2000px`
- Grid：4 columns × 4 rows
- 单格尺寸：`600×500px`
- 单格比例：6:5，对应当前 SVG `viewBox="0 0 180 150"`
- 每格背景：纯色填满整个 cell，无圆角、无阴影、无边框
- 每只动物：居中，占单格宽度约 58–68%，占单格高度约 58–72%，保留安全边距
- 线条：统一黑色 `#2b2b2b`，手绘简笔线稿，粗线条，圆角端点
- 风格：桌面便签动物园，大学生梗图人格测试，简笔、好截、可爱但不幼态
- 禁止：slot 内文字、中文/英文标签、编号、logo、水印、跨格元素、复杂背景、渐变、拟真毛发、3D、emoji、儿童贴纸风

## Slot Mapping 与颜色

按从左到右、从上到下排列：

| # | id | 结果名 | bg / themeColor | accentColor | 记忆点 |
|---:|---|---|---|---|---|
| 1 | `power_cat` | 省电猫 | `#5d7186` | `#9dd7ff` | 闭眼省电猫，尾巴像电量条/电池 |
| 2 | `warm_dog` | 热心犬 | `#ff7a3d` | `#ffe15a` | 伸爪递纸条/举手接话，摇尾巴 |
| 3 | `calm_capybara` | 稳定水豚 | `#b7926b` | `#fff8ea` | 稳稳坐镇，松弛趴着/坐着，小杯子或地面线 |
| 4 | `corner_mouse` | 角落鼠 | `#8b7c9e` | `#c7a4ff` | 角落观察，草稿纸/三点输入气泡 |
| 5 | `vibe_monkey` | 整活猴 | `#ffe15a` | `#ff7a3d` | 麦克风/表情包/香蕉道具，气氛组动势 |
| 6 | `prep_hamster` | 攻略仓鼠 | `#d7bd82` | `#b7926b` | 地图/清单/SOP 小卡片 |
| 7 | `border_collie` | 控场边牧 | `#6f9ed9` | `#1f1f1f` | 投票板/哨子/流程表，组织感 |
| 8 | `meme_fox` | 接梗狐 | `#e8793e` | `#ffe15a` | 接住飞来的梗，问号尾巴/speech card |
| 9 | `show_peacock` | 开屏孔雀 | `#32b6a6` | `#ff7a3d` | 自带小舞台/小聚光，开屏但克制 |
| 10 | `empathy_otter` | 共情海獭 | `#59b7d8` | `#ffb7c5` | 抱枕/纸巾/救场小物，温和照顾 |
| 11 | `border_hedgehog` | 边界刺猬 | `#9b8068` | `#c7a4ff` | 安全距离线/边界牌/护城河 |
| 12 | `recharge_panda` | 回血熊猫 | `#98d36f` | `#1f1f1f` | 勿扰牌/躺椅/电量条，回血中 |
| 13 | `night_owl` | 夜航猫头鹰 | `#5d4b8c` | `#c7a4ff` | 月亮/电脑/夜航线，深夜醒着 |
| 14 | `lastminute_pigeon` | 临门鸽 | `#a9c4d8` | `#70685e` | 一只脚出门一只脚刹车，门框/倒计时 |
| 15 | `bullet_alpaca` | 弹幕羊驼 | `#d8b88e` | `#1f1f1f` | 脑内弹幕气泡但无文字，表面平静 |
| 16 | `social_butterfly` | 社交蝴蝶 | `#c27cff` | `#ffb7c5` | 多个群聊气泡/虚线飞行路径，但无文字 |

## 背景色精度硬规则

DavidC 要求：背景颜色必须与 H5 展示页颜色完全一致。AI 生成阶段可能只能接近 hex 值，因此正式替换前必须做一次后处理：用脚本、设计工具或图像编辑流程，把每个 600×500 crop 的纯色背景强制填充为对应 `themeColor` 精确值。不能把“近似色”直接带进 H5。

---

## GPT Image 2 Prompt

```text
Create a single PNG production contact sheet for mobile H5 UI animal assets.

CANVAS AND LAYOUT:
- Exact canvas: 2400×2000px.
- Strict 4×4 grid.
- Each cell is exactly 600×500px, matching a 6:5 UI illustration slot.
- No gutters, no visible grid lines, no crop marks, no labels, no numbers, no captions, no title, no logo, no watermark.
- The image will be sliced into 16 equal 600×500 crops, so every cell must work as a standalone UI illustration.

STYLE SYSTEM:
- Hand-drawn black-line illustration system for a Chinese college social personality test.
- Visual language: "desktop sticky-note zoo" / playful college meme personality test.
- Simple black line art, thick rounded strokes, flat fill colors.
- Stroke color must be #2b2b2b across all animals.
- Cute enough to share, but not childish. Adult college-student taste, not preschool sticker style.
- No 3D, no photorealism, no emoji, no realistic fur, no glossy sticker shadows, no complex backgrounds.

CELL RULES:
- Each cell background must be a flat solid color filling the full 600×500 cell.
- Use each cell's exact background hex color listed below.
- Use each cell's accent color only for small props/details.
- Each animal must be centered, with 14–18% safe padding.
- Each animal should occupy about 58–68% of the cell width and 58–72% of the cell height.
- Keep all 16 animals at similar scale and visual density.
- Do not put any text inside cells. The animal identity must be clear from shape, pose, and prop only.
- Do not let any animal, prop, speech bubble, tail, or path cross into another cell.

EXACT 4×4 CELL MAP, left to right, top to bottom:

Row 1 Col 1: power_cat / 省电猫. Background #5d7186, accent #9dd7ff. Sleepy low-battery cat, closed eyes, tail shaped like a battery or power bar.
Row 1 Col 2: warm_dog / 热心犬. Background #ff7a3d, accent #ffe15a. Friendly eager dog, wagging tail, one paw offering a small paper note or raising a paw to join the conversation.
Row 1 Col 3: calm_capybara / 稳定水豚. Background #b7926b, accent #fff8ea. Calm capybara sitting or lounging steadily, relaxed eyes, tiny cup or grounding line nearby.
Row 1 Col 4: corner_mouse / 角落鼠. Background #8b7c9e, accent #c7a4ff. Small mouse half-hidden in a corner, observing quietly, with a tiny three-dot typing bubble or draft paper.

Row 2 Col 1: vibe_monkey / 整活猴. Background #ffe15a, accent #ff7a3d. Lively monkey holding a banana microphone or meme prop, energetic but clean.
Row 2 Col 2: prep_hamster / 攻略仓鼠. Background #d7bd82, accent #b7926b. Prepared hamster holding a checklist, map, or SOP card, organized and slightly anxious.
Row 2 Col 3: border_collie / 控场边牧. Background #6f9ed9, accent #1f1f1f. Border collie organizer with voting board, whistle, or flow chart, ready to arrange the group.
Row 2 Col 4: meme_fox / 接梗狐. Background #e8793e, accent #ffe15a. Clever fox catching a flying joke, question-mark tail, tiny speech card without text.

Row 3 Col 1: show_peacock / 开屏孔雀. Background #32b6a6, accent #ff7a3d. Peacock with compact fan tail and subtle small-stage spotlight energy, expressive but not luxury.
Row 3 Col 2: empathy_otter / 共情海獭. Background #59b7d8, accent #ffb7c5. Gentle otter holding tissue, cushion, or rescue object, emotionally attentive.
Row 3 Col 3: border_hedgehog / 边界刺猬. Background #9b8068, accent #c7a4ff. Hedgehog with visible spikes plus a safety-distance line, boundary sign, or moat-like symbol.
Row 3 Col 4: recharge_panda / 回血熊猫. Background #98d36f, accent #1f1f1f. Panda recharging, holding a battery bar, do-not-disturb card, or lying on a small lounge chair.

Row 4 Col 1: night_owl / 夜航猫头鹰. Background #5d4b8c, accent #c7a4ff. Night owl with moon, laptop, stars, or tiny night-flight route, thoughtful after dark.
Row 4 Col 2: lastminute_pigeon / 临门鸽. Background #a9c4d8, accent #70685e. Pigeon hesitating at a doorway, one foot out and one foot braking, tiny countdown feeling.
Row 4 Col 3: bullet_alpaca / 弹幕羊驼. Background #d8b88e, accent #1f1f1f. Calm alpaca with floating comment bubbles but no text, deadpan outside, noisy inside.
Row 4 Col 4: social_butterfly / 社交蝴蝶. Background #c27cff, accent #ffb7c5. Butterfly with dotted flight path between multiple social bubbles, light and mobile but not babyish.

NEGATIVE CONSTRAINTS:
No Chinese text, no English text, no animal names, no labels, no numbers, no UI chrome, no app screenshots, no poster title, no watermark, no grid captions, no speech-bubble text, no emoji, no photorealistic animals, no 3D toy style, no highly detailed fur, no mixed illustration styles, no different camera angles per cell, no shadows crossing cell boundaries, no merged animals, no animal crossing into another slot.

QUALITY CHECK:
The final PNG must look like one coherent illustration system. All animals must have consistent stroke weight, similar visual density, similar scale, and clean safe padding. Use the exact provided hex values for all cell backgrounds. If the generator cannot preserve exact colors, post-process every crop background to the exact hex value before implementation. The sheet must be directly sliceable into 16 equal 600×500 crops.
```

建议 GPT Image 2 参数：

```bash
gpt-image -p "<paste prompt>" --model gpt-image-2 --size 2400x2000 --quality high --format png -f social-animal-contact-sheet-gpt-image2.png
```

如果 CLI 不接受 `2400x2000`，退一步使用 `--size landscape` 或 `--size 2k`，但 prompt 内继续要求 `2400×2000` 与 `600×500 cell`。出图后用人工裁切/扩画布校正。

---

## Gemini / Nano Banana Prompt

Gemini 系更容易把 contact sheet 画成“可爱总海报”，所以 prompt 里要更硬地强调：这是 crop-ready asset sheet，不是海报。

```text
Generate ONE PNG production contact sheet for H5 app animal illustrations.

This is a crop-ready UI asset sheet, NOT a poster, NOT an infographic, NOT a character introduction page.

Canvas and grid:
- Final canvas should be 2400×2000px.
- Strict 4×4 grid.
- Each cell is exactly 600×500px, 6:5 ratio.
- No gutters, no visible grid lines, no crop marks.
- No title, no labels, no numbers, no captions, no logo, no watermark.
- The final image will be sliced into 16 equal 600×500 crops. Each crop must work as a standalone animal image in a mobile H5 result page.

Visual style:
- Chinese college social personality test visual system, "desktop sticky-note zoo" feeling.
- Simple hand-drawn animal icons, black line art, thick rounded strokes, flat fill colors.
- Stroke color #2b2b2b.
- Cute enough to share, but not childish; tasteful, meme-aware, adult college-student style.
- No emoji, no photorealism, no 3D, no realistic fur, no glossy sticker effect, no complex backgrounds.
- Every cell has a flat solid background color, filling the entire 600×500 cell.
- Every animal is centered with generous safe padding, similar scale, similar visual density.
- Do not draw any text inside the cells, not even inside speech bubbles.

Exact 4×4 cell map, left to right, top to bottom:

ROW 1:
1. power_cat / 省电猫 — background #5d7186, accent #9dd7ff — sleepy low-battery cat, closed eyes, tail shaped like a battery / power bar.
2. warm_dog / 热心犬 — background #ff7a3d, accent #ffe15a — friendly eager dog, wagging tail, one paw offering a small paper note or raising a paw.
3. calm_capybara / 稳定水豚 — background #b7926b, accent #fff8ea — calm capybara sitting or lounging steadily, tiny cup or grounding line nearby.
4. corner_mouse / 角落鼠 — background #8b7c9e, accent #c7a4ff — small mouse half-hidden in a corner, observing quietly, tiny three-dot typing bubble or draft paper.

ROW 2:
5. vibe_monkey / 整活猴 — background #ffe15a, accent #ff7a3d — lively monkey holding a banana microphone or meme prop.
6. prep_hamster / 攻略仓鼠 — background #d7bd82, accent #b7926b — prepared hamster holding checklist, map, or SOP card.
7. border_collie / 控场边牧 — background #6f9ed9, accent #1f1f1f — border collie organizer with voting board, whistle, or flow chart.
8. meme_fox / 接梗狐 — background #e8793e, accent #ffe15a — clever fox catching a flying joke, question-mark tail, tiny speech card without text.

ROW 3:
9. show_peacock / 开屏孔雀 — background #32b6a6, accent #ff7a3d — peacock with compact fan tail and subtle small-stage spotlight energy.
10. empathy_otter / 共情海獭 — background #59b7d8, accent #ffb7c5 — gentle otter holding tissue, cushion, or rescue object.
11. border_hedgehog / 边界刺猬 — background #9b8068, accent #c7a4ff — hedgehog with spikes and safety-distance line, boundary sign, or moat symbol.
12. recharge_panda / 回血熊猫 — background #98d36f, accent #1f1f1f — panda recharging, battery bar, do-not-disturb card, or lounge chair.

ROW 4:
13. night_owl / 夜航猫头鹰 — background #5d4b8c, accent #c7a4ff — night owl with moon, laptop, stars, or tiny night-flight route.
14. lastminute_pigeon / 临门鸽 — background #a9c4d8, accent #70685e — pigeon hesitating at a doorway, one foot out and one foot braking.
15. bullet_alpaca / 弹幕羊驼 — background #d8b88e, accent #1f1f1f — calm alpaca with floating comment bubbles but absolutely no text.
16. social_butterfly / 社交蝴蝶 — background #c27cff, accent #ffb7c5 — butterfly with dotted flight path between multiple social bubbles.

Hard failure controls:
- Do not add text, labels, names, numbers, captions, title, logo, watermark, or UI elements.
- Do not use mixed art styles.
- Do not add decorative backgrounds, gradients, shadows, or sticker outlines.
- Do not let animals overlap or cross cell boundaries.
- Do not change the row/column order.
- Do not replace background colors with random colors.
- Do not make the sheet look like a poster. It must be a precise crop-ready UI asset sheet.
```

建议 Gemini / Nano Banana 参数：

```json
{
  "prompt": "<paste prompt>",
  "aspect_ratio": "6:5",
  "resolution": "4K",
  "output_format": "png"
}
```

如果工具不支持 `6:5`，用：

```json
{
  "prompt": "<paste prompt>",
  "aspect_ratio": "4:3",
  "resolution": "4K",
  "output_format": "png"
}
```

然后人工裁切/扩画布到 `2400×2000` 后再切 4×4。

---

## Crop 规范

目标输出：`2400×2000px`

- 单格尺寸：`600×500px`
- Row 1 y = `0–500`
- Row 2 y = `500–1000`
- Row 3 y = `1000–1500`
- Row 4 y = `1500–2000`
- Col 1 x = `0–600`
- Col 2 x = `600–1200`
- Col 3 x = `1200–1800`
- Col 4 x = `1800–2400`

对应文件命名建议：

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

## 正式替换前检查清单

1. 16 格顺序是否完全一致；
2. 16 格背景色是否已被强制校正为对应 `themeColor` 精确值；
3. 每格是否没有任何文字、编号、标签、水印；
4. 动物是否居中，裁成 600×500 后不缺尾巴/翅膀/道具；
5. 缩到 H5 分享卡尺寸后，动物轮廓和道具是否仍可辨认；
6. 16 只是否像同一个插画系统，而不是 16 张不同风格图；
7. Dave 替换后必须重跑移动端结果页和分享卡尺寸检查。

## 如果首轮生成跑偏，使用这个纠偏 Prompt

```text
Revise the previous output into a stricter crop-ready production contact sheet.
Keep the exact same 4×4 order, exact animal concepts, and exact cell background colors.
Fix these issues:
1. Remove all text, labels, numbers, captions, title, logo, watermark, and UI elements.
2. Make the canvas behave like 2400×2000px with 4×4 equal cells, each 600×500px.
3. Make every background a flat solid color filling the full cell.
4. Center every animal with 14–18% safe padding; no animal or prop may cross cell boundaries.
5. Use one unified hand-drawn black-line icon style with stroke #2b2b2b.
6. Remove poster-like decoration, scene background, shadows, gradients, and sticker effects.
The final image must be directly sliceable into 16 equal 600×500 crops for an H5 result page.
```
