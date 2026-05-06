# 社交动物测试 16 结果 Contact Sheet 生成 Prompts v3

版本目的：解决 v2 继续生成“可爱宠物 sticker 风”的问题，把动物形象压向 **排版小动物式的动物人格符号**：更抽象、更像排版梗图、更疯癫一点，但仍可在 H5 结果卡里清晰识别。

## v0 / v2 失败点

1. **动物太正常**：像宠物插画或儿童 sticker，而不是“人格测试里的社交动物”。
2. **可爱感过强**：大眼睛、圆滚滚身体、柔光、阴影、贴纸边缘让它偏儿童化。
3. **抽象程度不够**：每只动物只是“拿了一个道具”，没有把社交人格转成视觉怪癖。
4. **排版感不足**：没有“动物是排版系统里长出来的符号”的感觉。
5. **production 问题仍保留**：尺寸、格子、背景 exact color、crop 安全区必须继续硬控。

## v3 风格原则

参考“排版小动物”的方法，不复制任何现成角色，只借它的底层逻辑：

- 动物不是宠物，是一种 **情绪排版人格**；
- 每只动物像从便签、标点、草稿纸、聊天气泡、错位排版里长出来；
- 形象可以不对称、精神状态外露、姿势略疯，但不能恐怖、猎奇、低俗；
- 用黑线、平涂、少量几何符号表达人格，不靠可爱表情；
- “癫”来自姿势和结构：歪头、过长手脚、卡住的尾巴、空洞眼神、过度准备、脑内弹幕、启动失败；
- “美”来自统一线条、统一尺度、清楚构图、准确背景色。

本版不再把 `cute / friendly / warm / pet / sticker / kawaii / adorable / children / storybook` 当主风格词。这些词会把模型拉回萌宠贴纸。主风格词改为：

- `weird little editorial animals`
- `absurd personality mascots`
- `deadpan anxious internet doodles`
- `rough black-line typographic animal symbols`
- `offbeat college meme characters`
- `anti-cute, funny, slightly unhinged, but still readable`
- `flat graphic line art, imperfect proportions, wobbly limbs, deadpan eyes`

## Production 硬规格

- PNG
- `2400×2000px`
- 4 columns × 4 rows
- 每格 `600×500px`
- 无 gutters / margins / grid lines / crop marks / frames
- 每格背景必须是 flat solid exact `themeColor`
- 禁止背景渐变、纹理、阴影、纸感、光照变化
- 动物必须居中，四周 14–18% safe padding
- 动物不得跨格，不得碰边，不得被裁切
- 无任何中文、英文、数字、编号、标签、标题、水印
- 任何气泡、卡片、纸条、屏幕都必须 blank

## Slot 顺序与颜色

| # | id | 中文名 | bg exact themeColor | accent | 抽象人格动作 |
|---:|---|---|---|---|---|
| 1 | power_cat | 省电猫 | `#5d7186` | `#9dd7ff` | 猫像低电量图标一样瘫着，尾巴断成电量格 |
| 2 | warm_dog | 热心犬 | `#ff7a3d` | `#ffe15a` | 狗伸出过长手臂递 blank 纸条，身体前倾过度热心 |
| 3 | calm_capybara | 稳定水豚 | `#b7926b` | `#fff8ea` | 水豚像镇纸一样压住混乱线条，表情无波动 |
| 4 | corner_mouse | 角落鼠 | `#8b7c9e` | `#c7a4ff` | 鼠缩在 L 形角落，旁边堆满 blank 草稿泡泡 |
| 5 | vibe_monkey | 整活猴 | `#ffe15a` | `#ff7a3d` | 猴身体像被梗弹飞，拿香蕉麦克风，四肢节奏错位 |
| 6 | prep_hamster | 攻略仓鼠 | `#d7bd82` | `#b7926b` | 仓鼠抱一沓 blank SOP 卡，被清单压得很认真 |
| 7 | border_collie | 控场边牧 | `#6f9ed9` | `#1f1f1f` | 边牧用身体挡住混乱箭头，像临时流程管理员 |
| 8 | meme_fox | 接梗狐 | `#e8793e` | `#ffe15a` | 狐狸尾巴变成问号/回旋镖，正在接住飞来的 blank 梗牌 |
| 9 | show_peacock | 开屏孔雀 | `#32b6a6` | `#ff7a3d` | 孔雀尾屏像小舞台灯牌，但表情冷静“不是我抢镜” |
| 10 | empathy_otter | 共情海獭 | `#59b7d8` | `#ffb7c5` | 海獭抱着救场抱枕/纸巾，身体像缓冲垫 |
| 11 | border_hedgehog | 边界刺猬 | `#9b8068` | `#c7a4ff` | 刺猬周围有安全距离虚线，刺像小路障 |
| 12 | recharge_panda | 回血熊猫 | `#98d36f` | `#1f1f1f` | 熊猫半躺在充电线里，举 blank 勿扰牌，眼神放空 |
| 13 | night_owl | 夜航猫头鹰 | `#5d4b8c` | `#c7a4ff` | 猫头鹰眼睛像两个夜间窗口，爪子踩着月亮/键盘 |
| 14 | lastminute_pigeon | 临门鸽 | `#a9c4d8` | `#70685e` | 鸽子卡在门框，一脚出门一脚刹车，身体呈暂停符 |
| 15 | bullet_alpaca | 弹幕羊驼 | `#d8b88e` | `#1f1f1f` | 羊驼脸很平静，头顶挤满 blank 弹幕框，框不能有字 |
| 16 | social_butterfly | 社交蝴蝶 | `#c27cff` | `#ffb7c5` | 蝴蝶翅膀像多层群聊窗口，虚线飞行路径绕来绕去 |

---

## GPT Image 2 Prompt v3

```text
Create a production-ready PNG contact sheet for a mobile H5 personality test called “social animal test”.

The visual direction is NOT cute pet stickers. It should feel like a weird editorial animal typography system inspired by tiny layout animals: animals as emotional layout symbols, made from sticky notes, punctuation, blank chat bubbles, broken social energy diagrams, and awkward social gestures.

ABSOLUTE CANVAS REQUIREMENT:
- Final image must be exactly 2400×2000px.
- Landscape 6:5 ratio.
- Strict 4×4 grid.
- Each cell is exactly 600×500px.
- No gutters, no margins, no grid lines, no crop marks, no frames.
- This image will be mechanically sliced into 16 equal 600×500 crops, so every cell must work as a standalone H5 illustration.

BACKGROUND REQUIREMENTS:
- Each cell background is a flat solid rectangle using the exact hex themeColor specified below.
- No gradient, no lighting variation, no paper texture, no shadow, no vignette, no noise pattern.
- Do not add borders or cell dividers.

STYLE REQUIREMENTS:
- Adult college-student meme-test aesthetic.
- The characters should feel like adult internet personality symbols, not pets.
- They can be awkward, deadpan, distorted, and slightly unhinged.
- Abstract, slightly unhinged, deadpan, witty, but still clean and beautiful.
- Black-line doodle / editorial icon system, stroke color #2b2b2b.
- Thick rounded lines, intentionally awkward proportions, asymmetric posture, blank stare, odd limbs, expressive negative space.
- Flat fills only, with the given accent color used sparingly for props or small details.
- Each animal should feel like a personality diagram, not a normal animal mascot.
- Weird enough to screenshot, clean enough to ship in a product.
- Avoid round baby faces, shiny eyes, paw-heart poses, soft plush proportions, cute sticker expressions, cute kawaii pet style, chibi style, glossy sticker style, plush toy style, baby animal style, emoji style, 3D style, realistic fur, big sparkling eyes, soft gradients, drop shadows.

CROP SAFETY:
- Each animal is centered in its own 600×500 cell.
- Leave 14–18% empty safe padding on all sides.
- Animal plus props occupy around 58–65% of the cell width.
- No tail, wing, bubble, paper, path, arrow, or prop may cross cell boundaries.
- All animals should share similar visual scale and line density.

NO TEXT:
- No Chinese text, no English text, no numbers, no labels, no animal names, no captions, no title, no watermark.
- Blank cards, blank notes, blank bubbles, blank screens are allowed, but they must contain no writing.

EXACT 4×4 CELL MAP:

ROW 1:
1. power_cat / 省电猫 — background EXACT #5d7186, accent #9dd7ff. Draw a cat collapsed like a grey low-battery system popup /毛毯. Half-closed deadpan eyes already offline. Tail broken into battery bars. Abstract social-energy exhaustion, not sleepy cute kitten.
2. warm_dog / 热心犬 — background EXACT #ff7a3d, accent #ffe15a. Draw a dog whose paw has already raised itself before the brain agreed; one overlong arm offering a blank note. Expression says “I don’t know why I started talking either”. Over-eager, not puppy-cute.
3. calm_capybara / 稳定水豚 — background EXACT #b7926b, accent #fff8ea. Draw a capybara sitting like a heavy paperweight pinning down chaotic squiggle lines. Flat calm face, zero drama, body as stabilizing block.
4. corner_mouse / 角落鼠 — background EXACT #8b7c9e, accent #c7a4ff. Draw a mouse compressed into an L-shaped corner, surrounded by ten blank draft windows/bubbles. Anxious observation posture, tiny but intense.

ROW 2:
5. vibe_monkey / 整活猴 — background EXACT #ffe15a, accent #ff7a3d. Draw a monkey as an abstract unhinged host holding a banana microphone. Limbs rhythmically wrong but musical, body flung by its own joke energy, not cute circus monkey.
6. prep_hamster / 攻略仓鼠 — background EXACT #d7bd82, accent #b7926b. Draw a hamster carrying an overcomplicated but blank route map / checklist stack. Eyes absurdly serious, tiny project manager energy.
7. border_collie / 控场边牧 — background EXACT #6f9ed9, accent #1f1f1f. Draw a border collie giving a meeting to the air, blocking chaotic arrows with its body, holding a blank flow board. Looks like an emergency process manager.
8. meme_fox / 接梗狐 — background EXACT #e8793e, accent #ffe15a. Draw a fox whose body twists into a question-mark / boomerang shape, catching a flying blank joke block. Clever, defensive, quick-witted.

ROW 3:
9. show_peacock / 开屏孔雀 — background EXACT #32b6a6, accent #ff7a3d. Draw a peacock as a suddenly unfolding awkward mini-stage device. Compact fan tail like a stage sign / spotlight burst. Expression says “the camera found me, I did nothing”. Not luxury-pretty.
10. empathy_otter / 共情海獭 — background EXACT #59b7d8, accent #ffb7c5. Draw an otter hugging a tissue pack / cushion, expression like it already felt everyone’s embarrassment for them. Body curved like a social buffer, not sentimental.
11. border_hedgehog / 边界刺猬 — background EXACT #9b8068, accent #c7a4ff. Draw a hedgehog inside a dotted safety-distance zone. Spikes and boundary line form a tiny defense system / roadblock pattern. Defensive but soft inside.
12. recharge_panda / 回血熊猫 — background EXACT #98d36f, accent #1f1f1f. Draw a panda flattened into a black-white battery being charged, holding a blank do-not-disturb sign. Empty stare, recovery mode, not cute sleepy panda.

ROW 4:
13. night_owl / 夜航猫头鹰 — background EXACT #5d4b8c, accent #c7a4ff. Draw an owl with overly bright 3am startup eyes, standing on a moon / keyboard hybrid. Late-night brain suddenly online, daytime offline.
14. lastminute_pigeon / 临门鸽 — background EXACT #a9c4d8, accent #70685e. Draw a pigeon stuck in a doorway: body points outside, soul points back to bed, one foot braking hard. Body silhouette resembles a pause icon. Commitment panic, funny but not childish.
15. bullet_alpaca / 弹幕羊驼 — background EXACT #d8b88e, accent #1f1f1f. Draw a very calm alpaca face with many blank comment bubbles stacked above its head. Outside blank, inside noisy. No text in bubbles.
16. social_butterfly / 社交蝴蝶 — background EXACT #c27cff, accent #ffb7c5. Draw a butterfly whose wings are layered like blank group-chat windows. Dotted flight path loops between blank social bubbles. Social but slightly fragmented.

NEGATIVE PROMPT:
No cute pet sticker style, no kawaii, no chibi, no plush toy look, no glossy highlights, no thick white sticker outline, no 3D, no realistic fur, no soft airbrush, no gradient background, no drop shadows, no random text, no labels, no numbers, no animal names, no captions, no watermark, no speech text, no cell borders, no wrong order, no wrong colors, no animals crossing cells, no poster layout, no decorative frame.

IMPORTANT:
The final sheet must look like one coherent set of weird black-line personality icons created for a college meme personality test. It should be more abstract and more mentally unhinged than cute, but still clear, crop-safe, and production-ready.
```

建议参数：

```json
{
  "prompt": "<paste prompt>",
  "size": "2400x2000",
  "quality": "high",
  "format": "png"
}
```

如果工具不支持 literal `2400x2000`，选择最接近的 6:5 landscape / 4K 输出，再后处理到 `2400×2000`。

---

## GPT Image 2 Edit Prompt v3（使用 v0 作为参考图时）

```text
Use the provided contact sheet only as a rough reference for the 16 animal concepts and their approximate 4×4 order.

Do NOT preserve the old image style.
Do NOT preserve its cute pet sticker look.
Do NOT preserve its gradients, shadows, lighting, low resolution, soft 3D highlights, or rounded baby-animal proportions.

Redraw the entire sheet from scratch as a production-ready 2400×2000 PNG contact sheet:
- 4×4 grid, each cell exactly 600×500px
- no gutters, no frames, no grid lines
- each cell background is flat solid exact themeColor
- adult college meme personality-test style
- weird editorial black-line animals, abstract and slightly unhinged
- stroke color #2b2b2b, flat fills only
- no text, no labels, no numbers, no watermarks
- crop-safe animals centered with 14–18% safe padding

Follow this exact cell map and colors: [paste the full EXACT 4×4 CELL MAP from the text-to-image prompt].
```

---

## Gemini / Nano Banana Prompt v3

```text
Generate one production contact sheet PNG for 16 H5 result illustrations.

CANVAS:
- EXACT final canvas: 2400×2000px
- 4 columns × 4 rows
- each slot exactly 600×500px
- no gutters, no margins, no visible grid lines, no frames, no crop marks
- the sheet must be directly sliceable into 16 crops

STYLE DIRECTION:
This is not a cute animal sticker sheet.
Make it feel like “weird typographic animals” for a college social-personality meme test: abstract, black-line, deadpan, slightly chaotic, mentally funny, like animals born from sticky notes, punctuation, blank chat bubbles, social-energy diagrams, and awkward gestures.

Use:
- black line art, stroke #2b2b2b
- flat fills only
- awkward asymmetry, odd limbs, blank stares, expressive posture
- clear icon-like readability
- adult college-student taste

Avoid:
- kawaii, chibi, plush toy, baby animal, pet sticker, cute mascot, 3D, photorealism, glossy highlights, soft shadows, gradient backgrounds, thick white sticker outlines.

BACKGROUND:
Every slot must use a flat solid exact background color. No gradient, no shadow, no texture, no light falloff.

TEXT:
No Chinese, no English, no numbers, no labels, no names, no captions, no titles, no logos, no watermark. Blank cards and blank bubbles are allowed only if they contain no writing.

ORDER AND CONTENT:

ROW 1
1. power_cat — bg #5d7186, accent #9dd7ff — low-battery cat collapsed like a power icon, tail as battery bars, deadpan eyes.
2. warm_dog — bg #ff7a3d, accent #ffe15a — over-eager dog leaning forward, long arm offering blank note, helpful but slightly too much.
3. calm_capybara — bg #b7926b, accent #fff8ea — capybara as heavy paperweight pressing down chaotic lines, calm blank face.
4. corner_mouse — bg #8b7c9e, accent #c7a4ff — mouse compressed into corner, blank draft bubbles, anxious observer.

ROW 2
5. vibe_monkey — bg #ffe15a, accent #ff7a3d — monkey flung by joke energy, banana microphone, mismatched limbs.
6. prep_hamster — bg #d7bd82, accent #b7926b — hamster crushed by serious blank checklist/map cards, overprepared.
7. border_collie — bg #6f9ed9, accent #1f1f1f — border collie blocking chaotic arrows, holding blank vote/flow card.
8. meme_fox — bg #e8793e, accent #ffe15a — fox with question-mark boomerang tail catching flying blank joke card.

ROW 3
9. show_peacock — bg #32b6a6, accent #ff7a3d — peacock tail as compact mini stage/spotlight shape, confident deadpan.
10. empathy_otter — bg #59b7d8, accent #ffb7c5 — otter hugging rescue cushion/tissue pack, body as social buffer.
11. border_hedgehog — bg #9b8068, accent #c7a4ff — hedgehog inside dotted safety-distance zone, spikes as boundary cones.
12. recharge_panda — bg #98d36f, accent #1f1f1f — panda in charging-cable loop, blank do-not-disturb card, recovery mode.

ROW 4
13. night_owl — bg #5d4b8c, accent #c7a4ff — owl eyes as night windows, standing on moon/keyboard hybrid.
14. lastminute_pigeon — bg #a9c4d8, accent #70685e — pigeon stuck in doorway, one foot out one foot braking, pause-icon body.
15. bullet_alpaca — bg #d8b88e, accent #1f1f1f — calm alpaca with crowded blank comment bubbles above head, no text.
16. social_butterfly — bg #c27cff, accent #ffb7c5 — butterfly wings like layered blank group-chat windows, dotted path.

CROP SAFETY:
Each animal centered, same scale, generous safe padding, no crossing slot boundaries, no prop touching edges.
```

建议参数：

```json
{
  "aspect_ratio": "6:5",
  "resolution": "4K",
  "output_format": "png"
}
```

---

## 生成后验收与后处理

即使 v3 prompt 更硬，仍必须按生产资产验收：

1. 原图尺寸必须为 `2400×2000`；否则先 resize/canvas-fit 到 `2400×2000`。
2. 每格裁切必须是 `600×500`。
3. 对每个 crop 强制把背景填成对应 exact `themeColor`。
4. 检查没有文字、编号、水印、边框、跨格、裁边。
5. 缩到 H5 结果卡尺寸后动物仍可识别。
6. 风格不能回到儿童贴纸；如果像宠物 sticker，本轮判失败，需要继续 prompt/edit。
7. 通过后再交给 Dave 集成，并重跑移动端/分享卡尺寸验证。
