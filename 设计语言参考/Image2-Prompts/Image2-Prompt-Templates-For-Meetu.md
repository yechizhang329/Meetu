# Image2 / GPT Image Prompt Templates for Meetu

> 用途：给 Phoebe 和后续设计 agent 使用的可复用 prompt 模板库。  
> 来源：结合 OpenAI 官方 Image generation docs / Academy / Cookbook，以及线上 poster prompt 模板的共性方法，转译成 Meetu 的活动、图文、详情页物料场景。  
> 核心原则：不要迷信长 prompt。先把目标、层级、文字、约束写清楚；复杂图像用结构化模板，单次只解决一个主要目标。

## 0. 来源与提炼

参考来源：

- OpenAI Image generation guide: `https://developers.openai.com/api/docs/guides/image-generation`
- OpenAI Academy — Creating images with ChatGPT: `https://openai.com/academy/image-generation/`
- OpenAI Cookbook — Generate images with GPT Image: `https://developers.openai.com/cookbook/examples/generate_images_with_gpt_image`
- Adobe Express AI Poster Generator examples: `https://www.adobe.com/express/create/ai/poster`
- Prompteto prompt/poster library: `https://prompteto.com/`

关键提炼：

1. OpenAI 官方建议 prompt 不一定长，1-3 句清楚说明也能工作；但必须说清楚 purpose、main subject、what is happening、where、visual style、framing/light/constraints。
2. 带文字的图像必须把文字放在引号里，并明确字体风格、大小、颜色、位置；文字越短越稳。
3. 迭代时不要一次要求全部重做，应该“小步修改”：保留构图，只改一个变量，如更亮、更克制、减少背景复杂度。
4. Poster / social graphic 类 prompt 不能只写“好看海报”，要写清楚视觉层级：第一眼看什么、第二眼看什么、哪些元素只是背景。
5. 对 Meetu 来说，最重要的是：**主信息优先、文字少、负向约束强、不要让模型跑成咖啡馆广告/讲座海报/相亲局/酒局。**

---

## 1. Meetu Image2 基础模板

适用于：活动封面、信息卡、图文封面、运营海报。

```text
Create a [aspect ratio] [asset type] for Meetu, a campus social activity product for Chinese college students.

Purpose:
- [这个图用于哪里：小程序封面 / 小红书首图 / 说明长图 / 分享图]
- The viewer should understand in 1 second: [第一重点]
- The emotional feeling should be: [安全 / 轻松 / 真实 / 好加入 / 年轻但不幼稚]

Core message:
- Primary message: “[主标题，尽量 4-8 个中文字]”
- Secondary message: “[副标题，可选]”
- Small labels: “[最多 2-3 个短标签]”

Layout hierarchy:
- The primary message is the largest and most readable element.
- The secondary message supports the title and should not compete.
- Background elements should be quiet and should not draw attention away from the text.
- Leave clear negative space around the text.

Visual direction:
- Style: [clean invitation card / warm editorial card / realistic light scene / minimal graphic poster]
- Palette: [奶油白 / 浅咖 / 暖橙 / 柔和可选色]
- Typography: modern Chinese sans-serif, clear, friendly, readable on mobile.
- Mood: [周日下午 / 公共空间 / 低压力 / 朋友邀请感]

Scene / supporting elements:
- Include only [2-3] supporting elements: [例如：纸条、饮品、聊天气泡]
- These elements are atmosphere only, not the main subject.

Constraints:
- Accurate simplified Chinese text only.
- Do not add extra words, logos, QR codes, watermarks, app UI, or fake screenshots.
- No nightlife, alcohol, dating, romance, lecture, career consulting, black-gold, neon, or luxury-club feeling.
- No cluttered background; no over-decorated composition.
```

---

## 2. 活动主封面模板（推荐默认）

适用于：小程序活动封面、小红书首图、私域分享首图。

```text
Create a 3:4 vertical event cover for Meetu, a campus social activity product for Chinese college students.

Purpose:
- This is the main cover for a small student social gathering.
- The viewer should understand in 1 second: this is a relaxed activity invitation, not a lecture, dating event, or party.
- The image should feel safe, simple, warm, and easy to join.

Exact Chinese text to render:
- Main title: “[主标题]”
- Subtitle: “[副标题]”
- Small label: “[日期时间｜地点｜对象]”

Layout:
- Main title must be the largest and clearest element.
- Subtitle sits directly below the title.
- Small label is secondary, placed near the top or bottom edge.
- Use large clean negative space around the title.
- Keep the composition simple enough to read as a phone thumbnail.

Visual system:
- Clean invitation-card style, warm but restrained.
- Light cream / soft beige background, warm orange accent used sparingly.
- Modern Chinese sans-serif typography, not childish, not corporate.
- Optional subtle scene hint: a paper note, soft shadow, one cup, or simple chat bubble.

Constraints:
- Do not show any price, payment, discount, QR code, watermark, app UI, or extra text.
- Do not make it look like a cafe advertisement, product poster, lecture poster, dating poster, or party flyer.
- No cluttered tabletop still life; no more than 2-3 supporting objects.
- No alcohol, neon, black-gold, nightclub, romance, or influencer styling.
```

### 5/10 活动示例

```text
Create a 3:4 vertical event cover for Meetu, a campus social activity product for Chinese college students.

Purpose:
- This is the main cover for a small Sunday afternoon student social gathering in Wuhan.
- The viewer should understand in 1 second: this is a relaxed invitation to sit down and meet a few new people.
- The image should feel safe, simple, warm, real, and easy to join.

Exact Chinese text to render:
- Main title: “周日出来坐坐”
- Subtitle: “认识几个新朋友”
- Small label: “5.10 周日 14:00-16:00｜武汉街道口附近｜在校学生小局”

Layout:
- Main title is the largest and clearest element, centered or slightly above center.
- Subtitle sits below the title and should feel friendly, not promotional.
- Small label is secondary, placed near the top or bottom edge.
- Use large clean negative space around the title.
- Keep the composition simple enough to read as a phone thumbnail.

Visual system:
- Clean invitation-card style, warm but restrained.
- Light cream / soft beige background, warm orange accent used sparingly.
- Modern Chinese sans-serif typography, clear and friendly.
- Optional subtle scene hint: one paper note, one cup, one soft chat bubble, or a very light public-space shadow.

Constraints:
- Do not show any price, payment, discount, QR code, watermark, app UI, or extra text.
- Do not make it look like a cafe advertisement, coffee product poster, lecture poster, dating poster, or party flyer.
- No cluttered tabletop still life; no more than 2-3 supporting objects.
- No alcohol, neon, black-gold, nightclub, romance, or influencer styling.
```

---

## 3. 活动说明长图模板

适用于：小红书第 2 图、微信群说明图、报名详情补充图。

```text
Create a 3:4 vertical information card for Meetu, explaining a small campus activity.

Purpose:
- This is the second image after the main cover.
- It should clearly explain the key facts without looking like an official notice.
- The design should feel like a clean invitation note from a friend.

Exact Chinese text to render:
- Title: “[活动标题]”
- Subtitle: “[时间地点]”
- Section 1 title: “什么时候”
- Section 1 text: “[时间]”
- Section 2 title: “在哪里”
- Section 2 text: “[地点说明]”
- Section 3 title: “谁可以来”
- Section 3 text: “[对象]”
- Section 4 title: “需要准备吗”
- Section 4 text: “[低压力说明]”
- Section 5 title: “放心来”
- Section 5 text: “[安全感说明]”

Layout:
- Warm editorial card layout with clear reading order.
- Title at top, large and calm.
- Five sections arranged as simple stacked cards or checklist rows.
- Each section should have enough breathing room.
- Do not use dense paragraph blocks.

Visual system:
- Cream paper background, soft beige cards, small warm orange accent.
- Light borders, soft shadows, clear typography.
- Optional small icons are allowed, but keep them simple and secondary.

Constraints:
- Accurate simplified Chinese text only.
- No extra text, QR code, logo, watermark, fake UI, or app screenshots.
- No price-focused design unless explicitly required.
- No official school notice feeling; no lecture, dating, nightlife, or sales poster cues.
```

---

## 4. Prompt 纠偏模板

当 Image2 产出不理想时，不要只说“更好看”。用这个模板把反馈转成可执行指令。

```text
Revise the previous image prompt. Keep the same core activity information, but correct the direction:

What went wrong:
- [问题 1：例如 too much cafe advertising feeling]
- [问题 2：例如 price became too prominent]
- [问题 3：例如 visual hierarchy is unclear]

Keep:
- [必须保留的信息]
- [必须保留的画幅/用途]
- [必须保留的情绪]

Change:
- Make the first visual priority: [第一重点]
- Reduce / remove: [要减少的元素]
- Simplify the background to: [背景方向]
- Make the text hierarchy clearer: [主标题 / 副标题 / 小标签]

Hard constraints:
- Do not include [禁止元素]
- Do not add extra text.
- Do not change the exact Chinese wording.
- Do not make it look like [跑偏方向]
```

### 5/10 活动纠偏示例

```text
Revise the previous image prompt. Keep the same core activity information, but correct the direction:

What went wrong:
- It looked too much like a cafe lifestyle advertisement.
- The price / payment information became too prominent.
- The activity invitation was not the first visual priority.

Keep:
- 3:4 vertical cover.
- A warm, safe, low-pressure student social activity feeling.
- Exact text: “周日出来坐坐”, “认识几个新朋友”, “5.10 周日 14:00-16:00｜武汉街道口附近｜在校学生小局”.

Change:
- Make the first visual priority: the invitation text and clean title hierarchy.
- Remove price, payment, discount, QR code, and too many cafe objects.
- Simplify the background to a clean warm invitation-card style with only a very light public-space hint.
- Use no more than 2-3 subtle supporting objects.

Hard constraints:
- Do not include any price or payment-related text.
- Do not add extra text.
- Do not make it look like a cafe brand ad, coffee product poster, lecture poster, dating poster, or party flyer.
```

---

## 5. 参考图 / 参考系统使用模板

适用于：给 Image2 一个设计系统方向，但避免复制品牌。

```text
Use [reference direction] only as a method reference, not as a brand imitation.

Borrow:
- [层级方法]
- [留白方法]
- [卡片节奏]
- [色彩控制]

Do not copy:
- Any logo, trademark, brand color ownership, product identity, mascot, UI, or recognizable brand element.

Translate the method into Meetu:
- Meetu should feel [Meetu 气质]
- The image should serve [本图目的]
- The final output should look original and suitable for Chinese college students.
```

### Meetu 常用参考翻译

- `Airbnb`：借温暖、可信、低压力、生活方式感；不要做成旅游房源卡。
- `Notion`：借留白、编辑感、信息秩序；不要做成冷淡文档页。
- `Mastercard`：借暖色卡片、圆角节奏；不要复制红黄圆形或支付感。
- `Starbucks`：只在需要“第三空间”时轻微参考；不要做成咖啡品牌广告。
- `Nike`：只用于高冲击 campaign；普通 Meetu 活动慎用。

---

## 6. Phoebe 出图前检查清单

每次把 prompt 给 Image2 前，先检查：

1. **用途是否清楚？** 小程序封面 / 小红书首图 / 说明长图 / 分享图。
2. **第一重点是否只有一个？** 如果同时强调活动、价格、host、饮品、地点，就会散。
3. **文字是否足够短？** 主标题最好 4-8 个中文字；标签最多 2-3 个。
4. **是否明确“不要额外文字”？** 中文图一定要加。
5. **是否明确负向约束？** 如不要讲座、相亲、酒局、咖啡广告、价格导向。
6. **背景元素是否过多？** 活动图最多 2-3 个辅助物。
7. **是否能在手机缩略图看懂？** 看不懂就减少文字/元素。
8. **是否需要后期工具补字？** 如果文字很多，先让 Image2 生成干净背景，再用设计工具排字。

---

## 7. Meetu Prompt 最小可用格式

如果时间紧，用这个最短格式：

```text
Create a 3:4 vertical [asset type] for Meetu.

Main message: “[主标题]”
Secondary text: “[副标题/标签]”

Make it feel [3 个情绪词]. Use [视觉风格] with [色彩].
The title must be the clearest element, readable on a phone thumbnail.
Background should be simple, with at most [2-3] subtle supporting elements.

Do not add extra text, logos, QR codes, watermarks, price/payment information, or fake app UI.
Do not make it look like [最容易跑偏的方向].
```
