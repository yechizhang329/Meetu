# XHS v5 动物园挂牌单图 Prompt

## 任务定位

小红书首图只做一件事：让用户在信息流里 0.5 秒内意识到“这是一个会把我挂牌的社交动物测试”。

这不是生产成图任务。按 DavidC/Fiona 最新口径，Phoebe 只交 **GPT Image 2 prompt + 版式 spec + negative constraints**；最终中文必须由设计稿/前端/后期手工排版，不让 AI 直接生成中文。

## 画幅与安全区

- 主画幅：`1080×1350`，4:5，小红书首图。
- 内容安全区：四边至少 `72px`；主标题区域建议在 `x=90–990, y=96–330`。
- 裁切口径：本图只按 `1080×1350` / 4:5 设计，不再额外强调 3:4。若平台产生裁切，优先保护中轴标题、主展牌和抽象动物。
- 不使用九宫格，不展示 16 个结果。

## 手工排字区

AI 只生成无字底图。最终请手工排入以下文字：

```text
今日动物园挂牌：我
品种：未知
习性：可疑
朋友锐评：已生成
```

推荐层级：

1. `今日动物园挂牌：我`：最大，放在主展牌上方/中部；
2. `品种：未知`、`习性：可疑`：像动物园展牌档案行；
3. `朋友锐评：已生成`：像一个被盖章/便签覆盖的小状态。


## A/B 双轨 Prompt 口径

### A 轨：GPT Image 2 直接带中文排版版

优先可以试 A 轨，因为本图中文字很短，GPT Image 2 有机会直接处理。A 轨目标是直接生成完整 XHS 首图。

```text
Create a vertical Xiaohongshu cover poster, 1080×1350, 4:5 aspect ratio, PNG.

Concept: a Chinese college social personality test cover built around a “zoo exhibit placard / today on display” metaphor. It should feel like the user is about to be humorously listed as a social animal specimen, in a playful friend-roast way, not judgmental.

The poster must accurately display exactly these four Chinese text blocks, with no changes, no extra words, no fake characters:
1. Main headline, largest: "今日动物园挂牌：我"
2. Small field line: "品种：未知"
3. Small field line: "习性：可疑"
4. Status stamp / sticky note: "朋友锐评：已生成"

Text layout:
- Put the main headline on the large zoo placard as the first visual priority.
- Put "品种：未知" and "习性：可疑" as two smaller animal-file field lines on the placard.
- Put "朋友锐评：已生成" on a small sticky note or stamp-like label, but keep it readable.
- Typography should look like handmade poster typography / marker-on-paper / zoo placard labels, not a formal ad poster.
- Chinese characters must be crisp, legible, correctly shaped, and readable in a mobile feed thumbnail.

Visual direction:
- large warm-paper zoo exhibit placard / hanging tag as the central object
- rough black hand-drawn outlines (#2B2B2B), taped corners, pin holes, uneven marker lines
- abstract anti-cute social animal shadow on one side, deadpan eyes, awkward limbs, slightly unhinged posture
- small sticky notes, blank stamp shapes, doodle arrows, circle marks around the placard
- desktop sticky-note animal-test visual language, adult college meme tone

Color palette:
- paper base #FFF8EA
- card paper #FFFDF5
- ink line #2B2B2B
- orange accent #FF7A3D
- yellow sticky note #FFE15A
- green tag #C8FF5A
- soft pink #FFB7C5
- soft blue #9DD7FF

Hard constraints:
- Do not add any text beyond the four specified Chinese text blocks.
- No fake Chinese, no extra labels, no English, no numbers except none are needed.
- No QR code, no app download/register/join-group/sign-up visuals.
- No 16 animals, no result list, no test questions, no H5 screenshot.
- No MBTI/SBTI wording.
- No cute pet, no kawaii, no plush toy, no baby face, no shiny eyes, no children’s book style.
- No horror, no shame, no public execution feeling.
- Do not make it look like an advertisement banner or product promo.

Goal: in 0.5 seconds, a Xiaohongshu user should read "今日动物园挂牌：我" and understand this is a funny social animal test that might tag them.
```

### A 轨验收

- 四段中文必须逐字正确：`今日动物园挂牌：我` / `品种：未知` / `习性：可疑` / `朋友锐评：已生成`；
- 不允许多字、错字、伪字、英文、假标签；
- 主标题在小红书缩略图里必须可读；
- 只要出现错字/伪字/排版弱/小图不可读，立即回退 B 轨。

### B 轨：无字底图 + 手工排版兜底

B 轨保留原来的无字底图方案，适用于 A 轨文字失败时。B 轨生成后必须由设计稿/前端/后期手工排入中文。

## GPT Image 2 Prompt（无字底图）

```text
Create a vertical Xiaohongshu cover background, 1080×1350, 4:5 aspect ratio, PNG.

Concept: a Chinese college social personality test cover built around a “zoo exhibit placard / today on display” metaphor. It should feel like the user is about to be humorously listed as a social animal specimen, but in a playful friend-roast way, not judgmental.

Main visual:
- A large blank zoo exhibit placard / hanging tag is the central object, occupying about 62% of the canvas height.
- The placard is made of warm paper, with rough black hand-drawn outlines (#2B2B2B), taped corners, pin holes, and slightly uneven marker lines.
- Around the placard: small blank sticky notes, blank stamp shapes, hand-drawn arrows, circle marks, and “friend-roast pending” visual cues WITHOUT any text.
- On one side of the placard: an abstract anti-cute social animal shadow, like a weird editorial doodle mascot, deadpan eyes, awkward limbs, slightly unhinged posture. It should be recognizable as a personality-symbol animal, not a pet.
- The animal should feel like “排版小动物” style in spirit: a typographic emotional symbol, not a cute sticker or children’s illustration.

Composition requirements:
- Leave a large clean blank area on the main placard for manually typeset Chinese title.
- Leave 3 smaller blank rows/fields on the placard for manually typeset species/habit/friend-roast lines.
- Keep visual hierarchy: blank placard first, weird animal second, sticky-note chaos third.
- The design must still work when viewed as a small mobile feed thumbnail.

Style:
- desktop sticky-note animal-test visual language
- warm off-white paper base, black line art, hand-drawn editorial collage
- funny, slightly absurd, slightly invasive, but not hostile
- adult college meme tone, not childish
- anti-cute, rough, deadpan, wobbly, flat graphic line art

Color palette:
- paper base #FFF8EA
- card paper #FFFDF5
- ink line #2B2B2B
- orange accent #FF7A3D
- yellow sticky note #FFE15A
- green tag #C8FF5A
- soft pink #FFB7C5
- soft blue #9DD7FF

Hard constraints:
- NO Chinese text, NO English text, NO numbers, NO fake glyphs, NO labels, NO watermark.
- NO QR code.
- NO app download / register / join group / sign-up / CTA button visuals.
- NO 16 animals, NO result list, NO test questions, NO H5 screenshot.
- NO MBTI/SBTI wording.
- NO cute pet, NO kawaii, NO plush toy, NO baby face, NO shiny eyes, NO heart paws, NO children’s book style.
- NO dark horror, NO shame, NO public execution feeling.
- Do not make it look like an advertisement banner or product promo.
- All readable copy will be added manually after generation.

Output should be a clean no-text visual background suitable for manual Chinese typography overlay.
```

## Negative Prompt / Failure Control

如果使用支持 negative prompt 的工具，追加：

```text
text, Chinese characters, English letters, numbers, fake writing, watermark, QR code, logo wall, app store button, download button, sign-up button, cute sticker, kawaii pet, plush toy, baby animal, glossy 3D, photo-realistic animal, horror poster, courtroom, police evidence board, crime scene, 16-animal grid, personality type list, MBTI, SBTI, app screenshot
```

## 后期排字建议

推荐使用手工排字，而不是要求 AI 生成文字：

- 标题：粗黑体/手写感黑体，字号约 `80–96px`；
- 档案行：`品种：未知` / `习性：可疑` / `朋友锐评：已生成`，字号约 `42–52px`；
- 标题可使用橙色条或绿色挂牌做反差，但不要让颜色抢过文字；
- 保留至少 1 个“朋友锐评已生成”的状态章，增强点开欲望；
- 角落弱品牌可选：`Meetu · 社交动物测试`，只作为后期手工排字选项，不进入 AI prompt；首发图优先让“今日动物园挂牌：我”成立，品牌不要抢主视觉。

## 自检清单

- [ ] 缩略图第一眼能看出“动物园挂牌 / 今日展出”；
- [ ] 不剧透 16 个结果，不展示题目；
- [ ] 没有 AI 生成的中文字/假字；
- [ ] 视觉不是宠物贴纸，不 cute/kawaii；
- [ ] 反差感来自“挂牌我”，不是审判/羞辱；
- [ ] 手工排入 `今日动物园挂牌：我` 后，标题仍是第一视觉重点；
- [ ] 没有二维码、下载、报名、进群、强 CTA。
