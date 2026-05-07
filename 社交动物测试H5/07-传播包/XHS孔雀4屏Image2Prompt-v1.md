# XHS 孔雀 4 屏 Image2 Prompt v1

## 任务定位

用于重新生成小红书 4 屏图，展示「开屏孔雀」结果。工程版已经证明结构清楚但视觉太模板化，本次 prompt 目标是让 Image2 做出更像内容创作的图：有首图钩子、有滑动欲、有孔雀结果记忆点，但不硬广、不像 PPT。

最终图规格：每张 `1080×1350`，4:5，PNG。

## 参考图清单

### 必选参考图

1. `Meetu/社交动物测试H5/07-传播包/XHS-动物园挂牌-孔雀多图/peacock-share-card.png`
   - 用途：开屏孔雀结果的真实内容依据。
   - 参考：动物形象、结果卡语气、分享卡信息层级。
   - 不要照搬：卡片尺寸和工程排版。

2. `Meetu/社交动物测试H5/06-前端实现/social-animal-test/src/assets/animals/show_peacock.png`
   - 用途：开屏孔雀动物形象参考。
   - 参考：色彩、动物姿态、孔雀开屏/自带舞台感。

### 建议参考图

3. `Meetu/社交动物测试H5/07-传播包/微信公众号首篇-头图-v2.png`
   - 用途：动物园挂牌世界观、暖纸、黑线、强标题方式。
   - 只参考：挂牌语言和纸感。
   - 不要照搬：公众号横图构图。

4. `Meetu/社交动物测试H5/07-传播包/微信公众号首篇-文末CTA-v2.png`
   - 用途：文末互动语气、挂牌/便签风格参考。

### 可选反例参考

5. `Meetu/社交动物测试H5/07-传播包/XHS-动物园挂牌-孔雀多图/01-cover.png` 到 `04-cta.png`
   - 用途：只看 4 屏结构。
   - 明确反例：不要继续做 PPT/说明书/模板卡片。

## A 轨：Image2 直接带中文排版生成 4 图

> 用于直接生成完整 4 张小红书图片。中文必须逐字正确；如果有错字/伪字/多字/小图不可读，回退 B 轨。

```text
Create a coherent 4-image Xiaohongshu carousel for a Chinese college social personality test result, each image 1080×1350, 4:5 vertical PNG.

Use the provided reference images for the “show peacock / 开屏孔雀” result and the zoo placard visual world. Keep the same visual universe across all four slides: warm paper background, rough black hand-drawn outlines, zoo exhibit placards, sticky notes, friend-roast stamps, slightly unhinged editorial animal energy. Make it feel like a native Xiaohongshu content post, not a PPT deck, not a product ad.

Style direction:
- “zoo placard / today on display” visual metaphor
- desktop sticky-note animal-test language
- weird little editorial animal, anti-cute, adult college meme tone
- bold thumbnail-readable Chinese typography
- playful friend-roast, not judgmental
- more visually striking and scroll-worthy than a clean HTML template

Important: create four separate slides with consistent style but different compositions.

Slide 1 — Cover hook:
Exact Chinese text, no changes:
「今日动物园挂牌：我」
「别当熟人面点开」
Visual: a large zoo placard hanging like an exhibit sign, with an abstract peacock shadow partly opening its tail behind the sign. Make the headline the first visual priority. Use dramatic but playful paper-stamp composition. No result details yet.

Slide 2 — Result reveal:
Exact Chinese text, no changes:
「开屏孔雀」
「我没抢镜头，镜头自己飘过来的。」
Visual: show the peacock result as the main character, like a social animal exhibit card. The peacock should feel self-lit and slightly awkward, not cute. Include a placard / result-card feeling, but not a literal screenshot. The one-liner must be readable.

Slide 3 — Friend roast wall:
Exact Chinese text, no changes:
「朋友锐评」
「你不是要 C 位，你就是自带光源。」
「安静坐着不行，我会自己消失。」
Visual: a wall of sticky-note roast comments around the peacock silhouette / exhibit tag. Make it feel like friends have pinned comments around the animal. Strong roast energy, but friendly and funny, not hostile.

Slide 4 — Interaction page:
Exact Chinese text, no changes:
「不服？你也去挂牌。」
「测完回来报品种，看看谁是孤品。」
Visual: empty zoo placard waiting for the viewer’s result, with a small peacock feather / spotlight left behind. It should invite comments and testing without showing links or QR codes. Make it feel like a playful challenge.

Color palette:
#FFF8EA warm paper, #FFFDF5 placards, #2B2B2B black line, #FF7A3D orange accent, #C8FF5A green tag, #FFE15A yellow note, #FFB7C5 pink note, #9DD7FF blue note, peacock teal/green accents.

Hard constraints:
- Chinese text must be exact and readable. No extra Chinese, English, numbers, fake glyphs, or watermarks.
- Do not add QR codes, links, WeChat text, download/register/join-group/sign-up buttons, scan prompts.
- Do not show all 16 animals.
- Do not show test questions.
- Do not show H5 screenshots.
- Do not use MBTI/SBTI wording.
- Do not make it look like an advertisement, app promo, lecture poster, or PPT slide.
- Avoid cute/kawaii/pet/plush/children’s book style; the peacock should be expressive, awkward, and meme-like, not adorable.
- Avoid dark horror, shame, courtroom, police evidence board, or public-execution feeling.

Goal: slide 1 should stop users in 0.5 seconds; slide 2 should clearly show this is the 开屏孔雀 result; slide 3 should make people want to send it to a friend; slide 4 should invite comments without platform-sensitive links.
```

## B 轨：无字底图 / 后期手工排版兜底

> 如果 A 轨中文字不稳，使用 B 轨。B 轨只生成 4 张无字视觉底图，中文全部后期手工排。

```text
Create a coherent 4-image Xiaohongshu carousel visual background set, each image 1080×1350, 4:5 vertical PNG. No text anywhere.

Use the provided reference images for the “show peacock / 开屏孔雀” result and the zoo placard visual world. Generate four no-text visual layouts for manual Chinese typography overlay later.

Unified style:
- warm off-white paper background
- rough black hand-drawn outlines (#2B2B2B)
- zoo exhibit placards / hanging tags / blank result cards
- sticky notes, blank stamps, doodle arrows, paper tape, circle marks
- anti-cute abstract peacock social-animal mascot, deadpan and slightly unhinged
- adult college meme tone, native Xiaohongshu content feeling, not PPT, not ad

Slide 1 background:
A large blank zoo placard as cover hook, abstract peacock shadow behind it, strong empty title area at the top/middle.

Slide 2 background:
Peacock result reveal layout: peacock mascot as main visual, blank result placard beside or behind it, enough clean space for a result name and one-liner.

Slide 3 background:
Friend-roast wall layout: multiple blank sticky notes and blank stamp shapes around a peacock silhouette / exhibit tag, enough space for 2 roast comments.

Slide 4 background:
Interaction layout: an empty zoo placard waiting for the viewer, small peacock feather / spotlight, enough large blank space for a challenge headline.

Color palette:
#FFF8EA warm paper, #FFFDF5 placards, #2B2B2B black line, #FF7A3D orange accent, #C8FF5A green tag, #FFE15A yellow note, #FFB7C5 pink note, #9DD7FF blue note, peacock teal/green accents.

Hard constraints:
- NO Chinese text, NO English text, NO numbers, NO fake writing, NO labels, NO watermark.
- NO QR code, NO links, NO WeChat text, NO download/register/join-group/sign-up button visuals.
- NO 16 animals, NO test questions, NO H5 screenshots.
- NO MBTI/SBTI wording.
- NO cute/kawaii/pet/plush/baby-animal style.
- NO PPT template layout, NO corporate ad, NO clean product manual feeling.
- All readable copy will be manually typeset after generation.
```

## Negative Constraints

如工具支持 negative prompt，追加：

```text
fake text, garbled Chinese, misspelled Chinese, English letters, numbers, watermark, QR code, link, WeChat, download button, sign-up button, join group, scan code, 16 animal grid, test questions, H5 screenshot, MBTI, SBTI, PPT slide, corporate advertisement, product manual, cute sticker, kawaii pet, plush toy, baby face, shiny eyes, children’s book, glossy 3D, horror, courtroom, police evidence board, public shaming
```

## 后期排字建议

如果走 B 轨，手工排字建议：

### 01 封面

```text
今日动物园挂牌：我
别当熟人面点开
```

- 主标题 78–96px，必须缩略图可读；
- 副标题像警告贴纸，不要太小。

### 02 结果展示

```text
开屏孔雀
我没抢镜头，镜头自己飘过来的。
```

- 结果名大；
- one-liner 用便签/挂牌行承载，必须完整可读。

### 03 朋友锐评

```text
朋友锐评
你不是要 C 位，你就是自带光源。
安静坐着不行，我会自己消失。
```

- “朋友锐评”像章/标签；
- 两句锐评分开放在不同便签上，避免一大段字。

### 04 互动页

```text
不服？你也去挂牌。
测完回来报品种，看看谁是孤品。
```

- 不放链接/二维码/微信；
- CTA 是评论/测试意愿，不是站外引导。

## 参考图使用说明

- 参考 `peacock-share-card.png`：只取开屏孔雀内容和语气，不照搬结果卡 UI；
- 参考 `show_peacock.png`：取孔雀形象方向；
- 参考公众号 v2：取挂牌/暖纸/强黑线，不照搬横图构图；
- 工程版 4 图只做反例：不要 PPT 化、不要模板卡片、不要说明书感。

## 验收标准

- [ ] 4 张都是 1080×1350；
- [ ] 4 张风格统一，但构图不重复；
- [ ] 第一张 0.5 秒能停住人；
- [ ] 第二张能看懂“开屏孔雀”结果；
- [ ] 第三张有朋友吐槽传播感；
- [ ] 第四张能引导评论/测试，不写敏感站外入口；
- [ ] 中文如由 AI 生成，必须逐字正确且缩略图可读；
- [ ] 无二维码/链接/微信/下载/扫码/报名/进群；
- [ ] 不像 PPT、广告、公众号长图或 H5 截图；
- [ ] 不 cute/kawaii/萌宠贴纸，不恶意 judge 用户。
