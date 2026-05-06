# 社交动物测试 16 结果图片 Contact Sheet 生成 Prompt v1

用途：用 Gemini / GPT Image 2 生成一张 `PNG` contact sheet，包含 16 个结果动物。生成后按 4×4 等分裁切，每个 cell 可直接替换当前 H5 结果页动物组件。

> 重要生产判断：这类“可裁切替换组件”的图，第一优先级不是氛围，而是 **一致构图、准确背景色、可裁切、轮廓清楚**。不要让模型自由加标题、文字、边框、阴影、海报装饰。

## 固定输出规格

- 输出格式：PNG
- 建议尺寸：`4096×4096px`（4×4，每格 `1024×1024px`）
- 画布：正方形，严格 4×4 grid
- 每个 slot：正方形，背景色填满整格，无圆角、无投影、无文字
- 每只动物：居中，占单格宽度约 58–68%，保留 14–18% 安全边距
- 线条：统一黑色 `#2b2b2b`，手绘简笔线稿，粗线条，圆角端点
- 风格：桌面便签动物园，大学生梗图人格测试，简笔、好截、可爱但不幼态
- 禁止：slot 内文字、动物名称、编号、logo、水印、边框、复杂背景、渐变、拟真毛发、3D、过度儿童贴纸、emoji、表情包大头、过细纹理

## 4×4 slot 顺序与背景色

按从左到右、从上到下排列：

| Row | Col 1 | Col 2 | Col 3 | Col 4 |
|---|---|---|---|---|
| 1 | 省电猫 `#5d7186` | 热心犬 `#ff7a3d` | 稳定水豚 `#b7926b` | 角落鼠 `#8b7c9e` |
| 2 | 整活猴 `#ffe15a` | 攻略仓鼠 `#d7bd82` | 控场边牧 `#6f9ed9` | 接梗狐 `#e8793e` |
| 3 | 开屏孔雀 `#32b6a6` | 共情海獭 `#59b7d8` | 边界刺猬 `#9b8068` | 回血熊猫 `#98d36f` |
| 4 | 夜航猫头鹰 `#5d4b8c` | 临门鸽 `#a9c4d8` | 弹幕羊驼 `#d8b88e` | 社交蝴蝶 `#c27cff` |

## 每只动物的记忆点

1. 省电猫：慢热省电，闭眼猫，尾巴像电量条 / 电池。
2. 热心犬：真诚帮忙，摇尾巴，伸爪递小纸条。
3. 稳定水豚：松弛稳定，趴着/坐着，旁边有一只小杯子或地面线。
4. 角落鼠：边缘观察，躲在虚线角落，旁边有三点输入气泡。
5. 整活猴：气氛担当，举着香蕉麦克风或小道具，有动势。
6. 攻略仓鼠：出门前做功课，抱着 checklist / SOP 小卡片。
7. 控场边牧：组织者，叼着投票纸/流程表，姿态像在安排队形。
8. 接梗狐：聪明试探，狐狸尾巴像问号，旁边有一个小 speech card。
9. 开屏孔雀：表达展示，开屏但克制，有小聚光感。
10. 共情海獭：照顾气氛，抱着纸巾/救场小物，表情温和。
11. 边界刺猬：边界感，刺猬旁边有“边界牌/护城河”意象。
12. 回血熊猫：低成本恢复，熊猫抱着小电池/充电条，像在回血。
13. 夜航猫头鹰：夜晚深聊，猫头鹰带月亮/星星/夜航线。
14. 临门鸽：出门前退缩，鸽子一脚在门内一脚在门外，旁边小倒计时。
15. 弹幕羊驼：表面平静内心弹幕，羊驼旁边有小弹幕泡泡。
16. 社交蝴蝶：圈层游走，蝴蝶带虚线飞行路径，轻盈但不幼态。

---

## GPT Image 2 Prompt

```text
Create a single square PNG contact sheet, 4096×4096px, laid out as a strict 4×4 grid of equal square cells. Each cell is exactly the same size, with no gutters, no labels, no numbers, no captions, no logo, no watermark. The image will be sliced into 16 equal square crops, so every cell must work as a standalone app illustration.

STYLE:
A hand-drawn black-line illustration system for a Chinese college social personality test called "社交动物测试". Visual language: desktop sticky-note zoo, simple black line art, thick rounded strokes, flat color fills, playful but not childish, meme-aware but still tasteful. Use black stroke color #2b2b2b consistently. No 3D, no photorealism, no emoji, no realistic fur, no glossy sticker shadows, no complex backgrounds.

LAYOUT CONTRACT:
- 4 rows × 4 columns.
- Each cell background must be a flat solid color that fills the entire cell edge-to-edge.
- No visible grid lines or margins inside the final image.
- Each animal is centered in its own cell, occupying about 58–68% of the cell width.
- Keep 14–18% safe padding around every animal so it can be cropped cleanly.
- Do not put any text inside cells. The animal identity must be clear from shape, pose, and prop only.
- Use the exact cell order and exact background colors below.

CELL MAP, left to right, top to bottom:
Row 1 Col 1: 省电猫, background #5d7186. A sleepy low-battery cat, closed eyes, tail shaped like a battery/power bar.
Row 1 Col 2: 热心犬, background #ff7a3d. A friendly eager dog, wagging tail, one paw offering a small paper note.
Row 1 Col 3: 稳定水豚, background #b7926b. A calm capybara sitting or lounging steadily, relaxed eyes, a tiny cup or grounding line nearby.
Row 1 Col 4: 角落鼠, background #8b7c9e. A small mouse half-hidden in a corner, observing quietly, with a small three-dot typing bubble.
Row 2 Col 1: 整活猴, background #ffe15a. A lively monkey holding a banana microphone or small prop, energetic but clean.
Row 2 Col 2: 攻略仓鼠, background #d7bd82. A prepared hamster holding a checklist / SOP card, organized and slightly anxious.
Row 2 Col 3: 控场边牧, background #6f9ed9. A border collie organizer with a voting paper or flow chart, ready to arrange the group.
Row 2 Col 4: 接梗狐, background #e8793e. A clever fox with a question-mark tail and a tiny speech card, testing distance with jokes.
Row 3 Col 1: 开屏孔雀, background #32b6a6. A peacock with a compact fan tail and subtle spotlight energy, expressive but not luxurious.
Row 3 Col 2: 共情海獭, background #59b7d8. A gentle otter holding tissue or a small rescue object, warm and emotionally attentive.
Row 3 Col 3: 边界刺猬, background #9b8068. A hedgehog with visible spikes and a boundary-sign / moat-like symbol, soft inside but guarded.
Row 3 Col 4: 回血熊猫, background #98d36f. A panda recharging, holding a small battery / charging bar, low-energy comfort.
Row 4 Col 1: 夜航猫头鹰, background #5d4b8c. A night owl with moon, stars, or a small night-flight route, thoughtful after dark.
Row 4 Col 2: 临门鸽, background #a9c4d8. A pigeon hesitating at a doorway, one foot in and one foot out, tiny countdown feeling.
Row 4 Col 3: 弹幕羊驼, background #d8b88e. A calm alpaca with small floating comment bubbles around it, deadpan outside, noisy inside.
Row 4 Col 4: 社交蝴蝶, background #c27cff. A butterfly with a dotted flight path between social circles, light and mobile but not cute-baby style.

QUALITY CHECK BEFORE FINAL:
The final PNG must look like one coherent illustration system. All animals must have consistent stroke weight, similar visual density, similar scale, and no text. The background colors must match the hex values exactly as closely as possible. The grid must be sliceable into 16 equal square crops without losing any important part of any animal.
```

建议 GPT Image 2 参数：

```bash
gpt-image -p "<paste prompt>" --model gpt-image-2 --size 4096x4096 --quality high --format png -f social-animal-contact-sheet-gpt-image2.png
```

---

## Gemini / Nano Banana Prompt

Gemini 更容易“画成一张可爱的总海报”，所以这里语气更硬，反复强调：不是海报、不是信息图、不是角色介绍页，而是可裁切资产表。

```text
Generate ONE square PNG image as a production contact sheet for app UI assets.

The canvas must be a strict 4×4 grid, 4096×4096px if possible, 1:1 aspect ratio. Each of the 16 cells is an equal square. No gutters, no visible grid lines, no title, no labels, no numbers, no captions, no logo, no watermark. The final image will be sliced into 16 equal square crops for a mobile H5 app, so every cell must be a clean standalone animal illustration.

This is NOT a poster, NOT an infographic, NOT a character introduction page. It is a crop-ready asset sheet.

Visual style:
- Chinese college social personality test, "桌面便签动物园" feeling.
- Simple hand-drawn animal icons, black line art, thick rounded strokes, flat fill colors.
- Cute enough to share, but not childish; meme-aware, tasteful, simple.
- Stroke color: #2b2b2b.
- No text anywhere inside the image.
- No emoji, no photorealism, no 3D, no realistic fur, no glossy sticker effect, no complex backgrounds.
- Each animal centered, about 58–68% of its cell width, with generous safe padding.

Exact 4×4 cell map and background colors:

ROW 1:
1. 省电猫 — background #5d7186 — sleepy low-battery cat, closed eyes, tail shaped like a battery / power bar.
2. 热心犬 — background #ff7a3d — friendly eager dog, wagging tail, one paw offering a small paper note.
3. 稳定水豚 — background #b7926b — calm capybara sitting or lounging, relaxed, tiny cup or grounding line nearby.
4. 角落鼠 — background #8b7c9e — small mouse in a corner, observing quietly, with a tiny three-dot typing bubble.

ROW 2:
5. 整活猴 — background #ffe15a — lively monkey holding a banana microphone or small prop, energetic.
6. 攻略仓鼠 — background #d7bd82 — prepared hamster holding a checklist / SOP card.
7. 控场边牧 — background #6f9ed9 — border collie organizer with voting paper or flow chart.
8. 接梗狐 — background #e8793e — clever fox with question-mark tail and tiny speech card.

ROW 3:
9. 开屏孔雀 — background #32b6a6 — peacock with compact fan tail and subtle spotlight energy.
10. 共情海獭 — background #59b7d8 — gentle otter holding tissue or rescue object, emotionally attentive.
11. 边界刺猬 — background #9b8068 — hedgehog with spikes and boundary-sign / moat-like symbol.
12. 回血熊猫 — background #98d36f — panda recharging, holding a small battery / charging bar.

ROW 4:
13. 夜航猫头鹰 — background #5d4b8c — night owl with moon, stars, or a tiny night-flight route.
14. 临门鸽 — background #a9c4d8 — pigeon hesitating at a doorway, one foot in and one foot out.
15. 弹幕羊驼 — background #d8b88e — calm alpaca with floating comment bubbles, deadpan outside, noisy inside.
16. 社交蝴蝶 — background #c27cff — butterfly with dotted flight path between social circles.

Critical output requirements:
- All 16 animals must share one coherent illustration system.
- Keep stroke weight and scale consistent across all cells.
- Every background must be a flat solid color, filling the entire cell.
- Do not add Chinese text, English text, labels, icons, UI chrome, crop marks, or decorative stickers.
- Do not make a collage with different styles. This must look like one icon set.
- The image must be suitable for direct square cropping into 16 mobile UI animal images.
```

建议 Nano Banana / Gemini 参数：

```json
{
  "prompt": "<paste prompt>",
  "aspect_ratio": "1:1",
  "resolution": "4K",
  "output_format": "png"
}
```

---

## 生成后裁切规则

如果输出为 `4096×4096`：
- 每格：`1024×1024`
- Row 1 y = `0–1024`
- Row 2 y = `1024–2048`
- Row 3 y = `2048–3072`
- Row 4 y = `3072–4096`
- Col 1 x = `0–1024`
- Col 2 x = `1024–2048`
- Col 3 x = `2048–3072`
- Col 4 x = `3072–4096`

输出后必须检查：
1. 是否真的无文字、无编号、无标题；
2. 16 格背景色是否接近 H5 `themeColor`；
3. 动物有没有被格子裁掉；
4. 16 只是否风格统一；
5. 小尺寸缩到 H5 分享卡里是否仍能看出动物和道具。

## 如果首轮跑偏，用这个纠偏 prompt

```text
Revise the previous image into a stricter production contact sheet.
Keep the same 4×4 order and the same animal concepts, but fix these issues:
1. Remove all text, labels, numbers, captions, titles, logos, and watermarks.
2. Make every cell exactly equal square size with flat solid background color filling the full cell.
3. Make all animals the same visual scale, centered, with 14–18% safe padding.
4. Use one unified hand-drawn black-line icon style with stroke #2b2b2b.
5. Remove any poster-like decoration, scene background, shadows, gradients, or stickers.
The final image must be directly sliceable into 16 equal square crops for an H5 result page.
```
