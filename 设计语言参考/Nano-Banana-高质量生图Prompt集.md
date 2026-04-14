# 觅遇社 Nano Banana 终图 Prompt 集

> 本文件用于直接让 Nano Banana 生成最终图片
> 目标：把中文文案直接写进 prompt，让模型直接生成带中文文字的成品图
> 不使用 FAL，不拆到 Figma，不输出底板思路

---

## 使用原则

- 明确要求模型渲染 **exact simplified Chinese text**
- 每条 prompt 都要求生成 **final poster / final banner / final card**
- 直接写清楚版式、字体气质、文字层级、主副标题位置
- 若出现错字、乱码、漏字，二次生成时只改文字相关描述，不要大改视觉主体
- 若画面中出现人物，统一使用同一种肤色设定：soft warm light-beige skin tone；同一组图内不要混出多种肤色

## Nano Banana 品牌生产标准

- 品牌名称统一使用：`觅遇社` / `Meetu`；禁止出现旧名称 `觅途`
- 若 prompt 中需要品牌标识，默认使用 `觅遇社 Meetu`
- 视觉优先对齐觅遇社现有品牌锚点：warm orange 主色、rounded cards、capsule tags、playful youth-campus atmosphere
- 若出现 mascot、icon、贴纸、标签、对话框、提示框等元素，统一使用圆角、厚描边、偏卡通图形化表达
- 非特殊说明下，避免 photoreal stock-ad aesthetics；优先 illustrated / cartoonized / graphic-ad style
- 若涉及小程序相关界面，构图和组件气质要尽量贴近觅遇社当前的小程序 UI 语言，不要生成通用型陌生 App
- 同一组图内保持统一的边框系统、标题条结构、品牌署名位置和 CTA 风格
- 若需要生成中文文字成品图，必须强调：text should be correct, readable, and fully embedded into the final image
- 若生成结果偏离品牌语言，优先回改：品牌名、品牌色、人物风格、边框和标题结构，不优先改主题内容
- 若当前物料有明确品牌标准，应以品牌标准优先；本文件只是把标准转译进 prompt

---

## 一、顶部 Banner

### 1. 品牌心智 Banner

```text
Create a final Chinese mobile app banner for Meetu, 750x340px, horizontal, polished and production-ready.

Visual style: young, vibrant, trustworthy, Gen-Z campus social platform, warm orange to pink to soft purple gradient, premium mobile-app advertising style, clean but energetic.
Composition: left side text, right side visual scene. Right side shows a warm illustrated or semi-realistic campus social scene with activity symbols like dice, camera, movie ticket, and sports icons. Keep the layout balanced and highly readable.

Render the following exact simplified Chinese text:
Main title: 觅遇社 — 找到你的搭子
Subtitle: 大学生专属拼团社交平台
CTA button: 立即探索 →
Brand mark: 觅遇社 Meetu

Typography requirements:
- Main title large, bold, white, clean premium Chinese font
- Subtitle smaller, white with slight transparency
- CTA button should look like a frosted glass rounded button
- Brand mark should appear at the lower right corner in a smaller size
- Text must be readable, centered vertically on the left half

Do not use English headline. Do not replace the Chinese text. Do not generate gibberish.
Generate the final banner with the Chinese text already embedded in the image.
```

### 2. 安全信任 Banner

```text
Create a final Chinese mobile app banner for Meetu, 750x340px, horizontal, polished and production-ready.

Visual style: youthful safety and trust, blue plus brand orange palette, premium certification feel without looking too corporate.
Composition: left text area, right visual area. Right side features a glowing shield, certification badges, and soft trust-building light effects. The whole image should still feel like a young campus product.

Render the following exact simplified Chinese text:
Main title: 全员在校认证 + 实名验证
Subtitle: 只和真实的校友一起玩｜放心找搭子
Tag 1: 学信网认证
Tag 2: 实名验证
Tag 3: 女生安心模式
Brand mark: 觅遇社 Meetu

Typography requirements:
- Main title bold and large, white
- Subtitle medium size, white, clean and highly legible
- Three small rounded certification tags should be rendered below the subtitle
- Brand mark should appear at the lower right corner
- Add subtle emphasis to the safety concept, but do not add extra text beyond the exact lines above

Generate the final image with the exact Chinese text already rendered correctly.
```

### 3. 主理人招募 Banner

```text
Create a final Chinese mobile app banner for Meetu, 750x340px, horizontal, production-ready.

Visual style: cool, bold, recruiting vibe, orange-yellow gradient mixed with energetic warm tones, Gen-Z host recruitment visual.
Composition: left side strong Chinese text, right side host badge / medal / creator identity scene, with a sense of action and invitation.

Render the following exact simplified Chinese text:
Main title: 你来组局，觅遇社找人
Subtitle: 0成本成为觅遇社主理人｜把“会玩”变成你的超能力
Tag 1: 0成本开局
Tag 2: 平台帮你找人
Tag 3: 收益自动到账
CTA button: 立即成为主理人 →

Typography requirements:
- Main title large, bold, premium Chinese display font
- Subtitle smaller but still very readable
- Highlight the phrase “主理人” with stronger visual emphasis
- Add three rounded benefit tags below the subtitle
- Add a strong CTA button in the lower left or lower center text area

Do not omit quotation marks around 会玩.
Generate the final banner with Chinese text embedded.
```

### 4. 女生专场 Banner

```text
Create a final Chinese mobile app banner for Meetu, 750x340px, horizontal, production-ready.

Visual style: warm, cute, campus-girl-friendly, trustworthy, using a softer palette of blush pink, cream, peach, soft lavender, and a small amount of mint for freshness. The style should feel like a polished cartoon editorial illustration that university-age girls would like, not luxury beauty advertising.
Composition: left side text block, right side visual scene with a stylized all-girls campus outing illustrated in a cute 2D or semi-flat cartoon style. Use rounded shapes, sticker-like icons, soft sparkles, heart or ribbon details, and gentle trust-building badge elements. Do not use photoreal people, realistic faces, or stock-photo aesthetics. The image should feel welcoming, friendly, and safe without becoming childish.

Render the following exact simplified Chinese text:
Main title: 女生专场活动｜姐妹安心拼团
Subtitle: 全员在校认证的女生局
Tag 1: 女生专场
Tag 2: 在校认证
Tag 3: 安心拼团
CTA button: 查看专场 →

Typography requirements:
- Main title bold and clear
- Subtitle smaller and highly readable
- Three rounded tags below the subtitle
- CTA button visible and soft but still clickable
- If multiple girls appear, keep all skin tones visually consistent using the same soft warm light-beige tone

Generate the final banner with all Chinese text embedded directly in the image.
```

---

## 二、中部 Banner

### 5. 活动品类展示 Banner

```text
Create a final Chinese mobile app middle banner for Meetu, 750x280px, horizontal, polished and production-ready.

Visual style: vibrant category showcase, youthful, exploratory, colorful but clean, designed to show the range of activities available on the platform.
Composition: left or center-left text block, right side or background shows a multi-scene collage or icon system covering board games, dining, city walk, sports, and social gatherings.

Render the following exact simplified Chinese text:
Main title: 剧本杀·桌游·City Walk·运动……
Subtitle: 总有一场局适合你

Typography requirements:
- Main title bold and eye-catching, with category rhythm and variety
- Subtitle medium size, warm and readable
- The whole banner should feel like “there are many things to do here”, not a single-event ad

Generate the final banner with all Chinese text embedded directly in the image.
```

### 6. 场景种草 Banner

```text
Create a final Chinese mobile app middle banner for Meetu, 750x280px, horizontal, polished and production-ready.

Visual style: multi-scene collage, fun, exploratory, comic-like but still premium, showing several activity scenes such as board games, city walk, exhibitions, and sports.
Composition: a dynamic scene collage with text integrated into the left or center-left area, while the right side holds playful scene fragments.

Render the following exact simplified Chinese text:
Main title: 课后不知道干嘛？
Subtitle: 滑下去看看今天有什么好玩的

Typography requirements:
- Main title large and lively
- Subtitle smaller and easy to scan
- Overall layout should feel like a recommendation banner that invites browsing

Generate the final banner with the exact Chinese text already rendered.
```

### 7. 女生专场 Banner

```text
Create a final Chinese mobile app middle banner for Meetu, 750x280px, horizontal, polished and production-ready.

Visual style: warm, cute, reassuring, campus-girl-friendly, with blush pink, light cream, soft lavender, and peach as the main palette. Use a polished cartoon illustration style with rounded edges and soft sticker-like visual language.
Composition: a stylized all-girls campus social outing scene in cute cartoon form, with rounded icon elements, soft glow, ribbon or star accents, and a clean text block. Avoid photoreal people, realistic photography, or mature fashion-ad aesthetics.

Render the following exact simplified Chinese text:
Main title: 女生安心拼团
Subtitle: 全员在校认证｜姐妹局放心约

Typography requirements:
- Main title bold and reassuring
- Subtitle smaller but very clear
- The whole banner should feel safe, warm, and easy to trust
- All people, icons, and scene elements should be clearly cartoonized or illustrated rather than realistic
- If multiple girls appear, keep all skin tones visually consistent using the same soft warm light-beige tone

Generate the final banner with all Chinese text embedded directly in the image.
```

### 8. 新人引导 Banner

```text
Create a final Chinese mobile app middle banner for Meetu, 750x280px, horizontal, polished and production-ready.

Visual style: onboarding-friendly, clean, clear, slightly instructional but still youthful and inviting.
Composition: strong text on the left or center-left, with a simple three-step visual flow on the right using icons or mini-cards to represent profile setup, activity browsing, and joining.

Render the following exact simplified Chinese text:
Main title: 第一次来觅遇社？
Subtitle: 3步找到你的搭子｜完善资料→浏览活动→报名出发

Typography requirements:
- Main title bold and friendly
- Subtitle medium size, highly readable, with the three-step flow clearly preserved
- The overall banner should feel like a low-friction onboarding entry point

Generate the final banner with all Chinese text embedded directly in the image.
```

---

## 三、广场置顶帖配图

### 7. 欢迎图

```text
Create a final Chinese square-ish social card for a campus social platform, 750x1000px, polished and ready to post.

Visual style: warm, friendly, inviting, orange to pink gradient, cute but refined, campus social energy.
Center visual: a cheerful mascot-like social symbol or campus social illustration, with floating activity icons such as board games, city walk, movies, and sports.

Render the following exact simplified Chinese text:
Main title: 欢迎来到觅遇社
Subtitle: 找到你的搭子，从这里开始
Brand mark: 觅遇社 Meetu

Typography requirements:
- Main title large, bold, white, centered near the top
- Subtitle smaller, white, centered below the title
- Brand mark appears near the bottom in a smaller size
- Overall image should feel like an official welcome card

Generate the final social card with the Chinese text already rendered.
```

### 8. 玩法 Step 1 图

```text
Create a final Chinese tutorial card, 750x1000px, polished and production-ready.

Shared series frame requirements for Step 1 / Step 2 / Step 3:
- Use the exact same outer card shell across all three images
- Same rounded rectangular cream-white card with soft drop shadow
- Same pastel gradient border system: lavender, cream pink, and soft orange accents
- Same top header block for the step label and title area
- Same bottom brand strip or small logo area
- Same sticker-like sparkles and rounded decorative corner elements
- Only the center content scene is allowed to change between Step 1, Step 2, and Step 3

Visual style: lively mobile-app tutorial visual based on the Meetu mini-program homepage. Use a soft lavender-to-cream gradient header, rounded white search bar, rounded filter chips, mascot-like category tabs, and a large colorful content banner card. The overall feel should be pastel, energetic, friendly, and highly app-native rather than generic.
Composition: centered smartphone mockup showing a homepage-like interface with a top search bar, category row, filter row, and large activity cards. Add soft glow, rounded UI shadows, and a slightly bouncy editorial-cartoon feel.

Render the following exact simplified Chinese text:
Top label: Step 1
Main title: 浏览活动
Subtitle: 看看身边有什么好玩的

Typography requirements:
- “Step 1” should be large and eye-catching
- Main title bold and clear
- Subtitle smaller and lighter
- All text should appear at the top portion of the card and remain highly readable
- The smartphone screen should feel recognizably like the Meetu home page structure: soft gradient header, rounded cards, playful category tabs
- Avoid dense realistic screenshot rendering; use a cleaned-up, more delightful UI illustration version of the actual layout
- Keep the frame, border, title layout, and bottom strip identical to Step 2 and Step 3
- If any people appear in the interface illustration, keep skin tone consistent using the same soft warm light-beige tone

Generate the final card with all Chinese text embedded directly in the image.
```

### 9. 玩法 Step 2 图

```text
Create a final Chinese tutorial card, 750x1000px, polished and production-ready.

Shared series frame requirements for Step 1 / Step 2 / Step 3:
- Use the exact same outer card shell as Step 1 and Step 3
- Same rounded rectangular cream-white card with soft drop shadow
- Same pastel gradient border system: lavender, cream pink, and soft orange accents
- Same top header block for the step label and title area
- Same bottom brand strip or small logo area
- Same sticker-like sparkles and rounded decorative corner elements
- Only the center content scene is allowed to change between Step 1, Step 2, and Step 3

Visual style: energetic and app-native, based on Meetu's rounded mobile UI language. Use warm orange and pink accents with white rounded cards, a big event card, avatar circles, and a bright CTA area. The card should feel more alive and more product-like than a generic network diagram.
Composition: centered smartphone or floating UI card showing an event detail card with participant avatars, group-size indicator, and a large rounded CTA button. Add motion arcs, sparkles, mascot-style icon accents, and layered card depth for a more delightful feel.

Render the following exact simplified Chinese text:
Top label: Step 2
Main title: 一键拼团
Subtitle: 找到搭子一起出发
Center CTA: 立即拼团

Typography requirements:
- “Step 2” visually prominent
- Main title bold, warm, youthful
- Subtitle smaller and readable
- Add the CTA as a central button element
- Make the CTA button use Meetu orange with soft rounded corners, like a real tappable mini-program action button
- The supporting UI should suggest "people are joining the same activity" rather than a generic social-network infographic
- Keep the frame, border, title layout, and bottom strip identical to Step 1 and Step 3
- If any avatars or characters appear, keep skin tone consistent using the same soft warm light-beige tone

Generate a final card image with the exact Chinese text already present.
```

### 10. 玩法 Step 3 图

```text
Create a final Chinese tutorial card, 750x1000px, polished and production-ready.

Shared series frame requirements for Step 1 / Step 2 / Step 3:
- Use the exact same outer card shell as Step 1 and Step 2
- Same rounded rectangular cream-white card with soft drop shadow
- Same pastel gradient border system: lavender, cream pink, and soft orange accents
- Same top header block for the step label and title area
- Same bottom brand strip or small logo area
- Same sticker-like sparkles and rounded decorative corner elements
- Only the center content scene is allowed to change between Step 1, Step 2, and Step 3

Visual style: warm friendship atmosphere with a more cheerful, polished cartoon editorial style. Use soft pink, lavender, cream, and orange highlights, consistent with the Meetu app palette. The card should feel like "online matched, offline had fun" with more emotional payoff and visual liveliness.
Composition: a cute stylized offline gathering scene with university students in a relaxed leisure activity, plus subtle app-style graphic accents such as star ratings, chat bubbles, or sticker-like hearts to connect it back to the platform experience. Keep the layout bright and likable rather than realistic.

Render the following exact simplified Chinese text:
Top label: Step 3
Main title: 线下面基
Subtitle: 开心玩，认真评

Typography requirements:
- Strong title hierarchy
- Friendly rounded Chinese font feeling
- Final output must look like an official tutorial card
- Add subtle five-star rating accents without introducing extra words
- All people and icons should be stylized cartoon illustrations, not photorealistic figures
- The overall scene should feel more vibrant, emotionally rewarding, and shareable than the earlier generic concept
- Keep the frame, border, title layout, and bottom strip identical to Step 1 and Step 2
- Keep all visible people in the scene on the same soft warm light-beige skin tone for cross-image consistency

Generate the final image with the exact Chinese text included.
```

### 11. 主理人招募主视觉

```text
Create a final Chinese recruitment poster for Meetu hosts, 750x1000px, polished and production-ready.

Visual style: trendy, bold, premium campus creator recruitment, orange and gold with energetic gradients, medal and badge visual language, strong click appeal.
Composition: big headline at top, strong central badge / host identity visual, clear CTA feeling.

Render the following exact simplified Chinese text:
Main title: 觅遇社主理人招募令
Subtitle: 把“会玩”变成你的超能力
Badge 1: 5星级
Badge 2: 已认证
Badge 3: 主理人
Benefit 1: 0成本发布活动
Benefit 2: 平台流量扶持
Benefit 3: 活动收益到账
Benefit 4: 专属身份标识

Typography requirements:
- Main title very bold and visually dominant
- Subtitle smaller but still prominent
- Highlight 主理人 and 会玩 with emphasis
- Put the badge labels near the center identity card
- Put the four benefit lines in the lower section

Generate the final poster with exact Chinese text already rendered.
```

---

## 四、小红书引流封面

### 12. 痛点共鸣型

```text
Create a final Xiaohongshu cover image, 1080x1440px, bold and highly clickable.

Visual style: cyber-neon, dark background, bright pink and yellow title treatment, strong social-media impact, designed for Chinese college students.
Add trendy speech-bubble shapes, city-social atmosphere, and dramatic contrast.

Render the following exact simplified Chinese text:
Main title: 找搭子终于不用蹲评论区了
Subtitle: 大学生专属拼团社交平台
Tag 1: #找搭子
Tag 2: #大学生社交
Tag 3: #拼团活动

Typography requirements:
- Main title huge, bold, neon Chinese typography
- Subtitle smaller but still clear
- Add the three hashtag tags as small sticker-like labels
- Final layout should feel like a successful Xiaohongshu viral cover

Generate the final cover with the Chinese text fully included.
```

### 13. 价格吸引型

```text
Create a final Xiaohongshu cover image, 1080x1440px, bright, promotional, and highly clickable.

Visual style: orange to pink energetic gradient, celebration particles, price-driven social promo design, youthful Chinese social-media aesthetic.

Render the following exact simplified Chinese text:
Main title: 9.9元拼团剧本杀
Subtitle: 大学生省钱社交指南
Tag 1: #学生党
Tag 2: #省钱攻略

Typography requirements:
- Main title extra large and bold
- Put “9.9元” as the strongest visual focus
- Subtitle smaller and clean
- Add the two tags near the lower portion of the cover

Generate the final cover with exact Chinese text already rendered.
```

### 14. 主理人视角型

```text
Create a final Xiaohongshu cover image, 1080x1440px, polished and highly clickable.

Visual style: premium purple and gold, creator perspective, ambitious but youthful, host identity and campus side-income vibe.
Visual scene: anonymous young host figure, medals, badge-like motifs, event-organizer atmosphere.

Render the following exact simplified Chinese text:
Main title: 大学生主理人真的能赚到钱吗？
Subtitle: 我在觅遇社组了一场局之后
Tag 1: #主理人招募
Tag 2: #副业尝试
Tag 3: #校园活动

Typography requirements:
- Main title large, bold, Chinese social-media cover style
- Subtitle smaller, documentary / sharing tone
- Maintain high readability and strong click appeal
- Add the three hashtag tags as smaller supporting elements

Generate the final cover with exact Chinese text already embedded.
```

---

## 五、上线倒计时海报

### 15. D-3 海报

```text
Create a final Chinese launch countdown poster, 750x1334px, polished and production-ready.

Visual style: warm orange launch anticipation, large glowing number 3, clean but exciting composition, modern mobile internet poster aesthetic.

Render the following exact simplified Chinese text:
Main title: 3天后，认识新的人这件事会变得不一样
Subtitle: 觅遇社｜大学生活动社交平台 即将上线
Bottom line: 🔍「觅遇社」

Typography requirements:
- Main title large and highly readable
- Subtitle medium size
- Bottom line smaller but still clear
- Number 3 should be visually dominant but not overpower the text

Generate the final poster with all Chinese text included.
```

### 16. D-2 海报

```text
Create a final Chinese launch countdown poster, 750x1334px, polished and production-ready.

Visual style: pink to purple countdown atmosphere, stronger anticipation, dynamic particles, youthful but trustworthy.

Render the following exact simplified Chinese text:
Main title: 还有2天，有人已经准备好和你坐同一桌了
Subtitle: 全员在校认证｜活动付费保障出席｜女生安心模式
Bottom line: 🔍「觅遇社」

Typography requirements:
- Main title bold and prominent
- Subtitle clear and trustworthy
- Bottom line concise and readable
- Number 2 can be part of the visual focus

Generate the final poster with the exact Chinese text rendered correctly.
```

### 17. D-1 海报

```text
Create a final Chinese launch countdown poster, 750x1334px, polished and production-ready.

Visual style: final-day launch excitement, magenta to deep purple, celebratory confetti, energetic and action-oriented.

Render the following exact simplified Chinese text:
Main title: 明天见！第一场活动，等你来
Subtitle: 首批活动已上架｜准备好了吗？
Bottom line: 🔍「觅遇社」

Typography requirements:
- Main title strong and emotional
- Subtitle medium size and clear
- Bottom line concise
- Number 1 can appear as a strong visual symbol in the composition

Generate the final poster with exact Chinese text already present.
```

---

## 六、模板类终图 Prompt 写法

> 适用于活动封面、活动分享海报等需要替换标题的内容

```text
Create a final Chinese event poster, 600x800px portrait orientation, polished and production-ready.

Visual style: [在这里写活动类型和视觉方向，例如 board game mystery night / city walk weekend outing / exhibition meetup / badminton activity].
Main scene: [在这里写场景主体].

Render the following exact simplified Chinese text:
Main title: [活动标题]
Subtitle: [一句话卖点]
Info line: [时间]｜[地点]｜[X人成团]
Price: [¥XX]

Typography requirements:
- Main title bold and readable
- Subtitle smaller
- Info line compact and clear
- Price visually emphasized

Generate the final poster with all Chinese text embedded directly in the image.
```

---

## 七、首页 Banner 底图 Prompt

### 18. 联系我们 Banner（成品图直出）

```text
Create a polished final homepage contact banner for Meetu, 750x340px, horizontal, production-ready.

This output must be a finished banner image with the final Chinese text already embedded correctly in the image.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `/Meetu/设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/4.png`
  role: mood anchor; draw loose inspiration from its warm, polished, youthful banner atmosphere
- `/Meetu/设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/0. 欢迎.png`
  role: composition anchor; draw loose inspiration from its welcoming contact-entry feeling

Reference handling:
- use the references only as loose style anchors
- do not replicate their exact composition, card placement, or mascot staging
- the final banner should feel new, not like a recomposed version of the inputs

Core theme:
- real human contact
- warm and reachable
- startup-team sincerity
- “有事直接来，会有人认真回”

Source mood:
- based on the strongest visual language of the Meetu v4 contact page
- warm dark-tech atmosphere
- more memorable than a standard customer-service banner
- suitable for Chinese university-age users

Composition:
- reserve the left 42% to 48% of the image for the main Chinese text block
- keep the right side as the visual focus area
- on the right, build a refined “contact entrance” composition using two clean white card-like contact blocks or QR-like placeholders as abstract visual anchors
- these blocks should feel like real human service entry points, not app screenshots
- do NOT render real QR codes
- do NOT place important readable text inside those blocks
- do NOT crowd the banner with too many decorative elements

Render the following exact simplified Chinese text:
Main title line 1: 有事直接来，
Main title line 2: 我们认真回。
Subtitle: 微信能聊｜小红书也能找到我们
Support line: 两位真人都在

Visual style:
- dark charcoal / deep indigo base
- warm pink / violet / electric blue glow accents
- small touches of cream or soft orange are allowed only to add warmth
- polished, contemporary, youthful, slightly futuristic
- not corporate, not government-service style, not generic call-center advertising
- no photoreal office workers
- no customer-service headset clichés
- no app UI screenshot

Brand alignment:
- youthful campus social tone
- approachable, responsive, human
- if character-like presence is included, keep it soft, rounded, and friendly, consistent with Meetu’s visual language

Output requirements:
- final banner with Chinese text already rendered
- no English headline as the main subject
- no logo
- no watermark
- text must be readable, stable, and correctly embedded
- the main title should be large, bold, modern, and high-contrast
- subtitle and support line should be smaller, clear, and elegant
```

### 19. 费用透明 Banner（成品图直出，替代上一条误用的联系我们来源）

```text
Create a polished final homepage banner for Meetu, 750x340px, horizontal, production-ready.

This output must be a finished banner image with the final Chinese text already embedded correctly in the image.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `/Meetu/设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/2.png`
  role: mood anchor; draw loose inspiration from its pricing / trust banner atmosphere
- `/Meetu/设计语言参考/品牌资产统一/stickers v1/放心来.png`
  role: trust-cue anchor; draw loose inspiration from its friendly, reassuring action-cue language

Reference handling:
- use the references only as loose style anchors
- do not directly recreate any existing sticker, badge, or card layout from the sources
- the final banner should feel newly designed while staying inside Meetu’s trust language

Core theme:
- pricing clarity
- real cost, no hidden surprise
- low-friction trust
- “价格讲清楚，搭上更痛快”

Source mood:
- based on the strongest visual language of the Meetu v4 pricing page
- Stripe-like precision + Linear-like clarity
- calm, modern, trustworthy
- suitable for Chinese university-age users

Composition:
- reserve the left 42% to 48% of the image for the main Chinese text block
- keep the right side as the visual focus area
- on the right, build a refined pricing / rule-trust composition using one strong price card and one supporting rule card
- emphasize the idea of “透明、清楚、提前说清”
- do NOT use app screenshots
- do NOT render QR codes
- keep the layout premium, clean, and easy to scan

Render the following exact simplified Chinese text:
Main title line 1: 费用透明，
Main title line 2: 搭上更痛快。
Subtitle: ¥0.01 起｜门槛价防放鸽子｜正式活动按实际费用分摊
Support line: 规则写清楚，搭上之前心里就有底

Visual style:
- light blue-gray / mist white base
- deep indigo or slate blue as trust anchor
- small touches of aqua / cool cyan for precision glow
- premium information-design feel
- not corporate finance ad
- not e-commerce promotion
- not childish

Brand alignment:
- youthful campus social tone
- transparent, direct, reassuring
- information should feel accurate, not cold

Output requirements:
- final banner with Chinese text already rendered
- no English headline as the main subject
- no logo
- no watermark
- text must be readable, stable, and correctly embedded
- the main title should be large, bold, modern, and high-contrast
- subtitle and support line should be smaller, clear, and elegant
```

---

## 六、品牌 Logo 概念稿

### 20. D1 Logo 概念稿展示板（M 主 icon + Meetu 定制字标）

```text
Create one polished logo concept presentation board for Meetu, 1600x1100px, horizontal, production-ready.

This output is not a poster or banner. It is a brand logo concept board used for internal review and decision-making.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `设计语言参考/logo-style-anchors/soul-logo.png`
  role: Soul primary anchor; draw loose inspiration from its concise young-trend logo language, but do not replicate its exact structure
- `设计语言参考/logo-style-anchors/dewu-logo.png`
  role: Dewu primary anchor; draw loose inspiration from its restrained but forceful logo language, but do not replicate its exact structure

Reference handling:
- references are for style direction only
- do not copy exact logo contours, exact typographic lockups, or exact composition from Soul or Dewu
- keep the result original while making the comparison route legible

Brand attitude:
- 我们知道什么是好玩的，而且我们认为你也应该来。

Core design direction:
- D1 system = M main icon + Meetu custom wordmark
- build two parallel solutions on one board:
  1. Soul-inspired route: reinterpret Soul’s concise young-trend logo attitude into `M` + `Meetu`
  2. Dewu-inspired route: reinterpret Dewu’s restrained but forceful logo attitude into `M` + `Meetu`
- the point is controlled comparison, not literal reskinning
- both routes should feel fresh enough to stand as original concept directions
- keep the output youthful, stylish, cool, and suitable for Chinese university students
- avoid childish, overly cute, mascot-led, overly soft, or neutral-corporate behavior
- keep Meetu’s own color identity; Soul and Dewu references influence only style / structure / temperament, never replace Meetu’s palette

Audience:
- Chinese university students, 18-25
- curious, expressive, independent, stylish, socially aware
- they should feel “this brand knows what is fun, and I want in”

Board composition:
- top-left: title area for the concept name
- left half: Soul-style route
  - one `M` icon concept
  - one `Meetu` wordmark concept
- right half: Dewu-style route
  - one `M` icon concept
  - one `Meetu` wordmark concept
- below or beside each route, include small usage previews for:
  1. app icon 64x64
  2. poster corner mark
  3. cover watermark
- include short Chinese labels that clearly separate the two routes
- the board should feel premium, sharp, and design-review ready

Logo design requirements:
- icon must be based on a bold, simplified `M`
- for the Soul-style route, adapt Soul’s concise young-trend logo language into an `M` icon and a `Meetu` wordmark
- for the Dewu-style route, adapt Dewu’s restrained but forceful logo language into an `M` icon and a `Meetu` wordmark
- the two routes should be visibly different in structure and typographic temperament because they inherit from different parent styles
- wordmark should read exactly: Meetu
- in both routes, the initial `M` in the wordmark should feel related to the icon’s geometry
- do not use handwritten style, rounded childish style, or overly friendly bubble typography
- monochrome stability matters: the logo should still make sense in one color

Color system:
- Meetu core brand color is warm orange `#FF7422`; this must appear in the logo system as the key accent / anchor color
- support colors should stay inside Meetu’s own palette logic: charcoal or deep near-black, ivory / warm off-white, and orange as the focal accent
- do not follow Soul or Dewu’s original colors; only borrow their design language
- orange should be clearly visible as part of Meetu ownership
- keep large surfaces dark/light and premium
- prefer flat / crisp / graphic color usage, not glossy 3D gradients
- do not use rainbow gradients
- do not use pastel “cute app” palette
- explicitly show two usage variants:
  - dark-background scene: light logo + orange detail
  - light-background scene: dark logo + orange detail
- it is allowed to show multiple color variants for different future activity categories, as long as the M structure stays unchanged
- absolutely avoid a pure black/white/gray finance-tech look

Chinese text to render on the board:
- 主标题：Meetu Logo Concept D1
- 小标题：Soul 路线 vs 得物路线
- 标签1：Soul 风格 M icon
- 标签2：Soul 风格 Meetu
- 标签3：得物风格 M icon
- 标签4：得物风格 Meetu

Typography requirements:
- keep Chinese board labels modern, clean, and readable
- the main visual priority is the logo itself, not the board text
- “Meetu” must be rendered correctly and consistently
- overall typography on the board should feel contemporary and not editorial-vintage

Output requirements:
- one final concept board image that presents two logo directions side by side for direct comparison:
  1. Soul-style `M` + `Meetu`
  2. Dewu-style `M` + `Meetu`
- the board must make both routes equally readable and reviewable at first glance
- no mascot as the main logo
- no old Chinese name
- no old brand name variant
- no extra decorative stickers
- must still feel premium when mentally compared beside INS 新乐园, Soul, and 即刻 on a phone screen
- if color is removed, the silhouette should still be recognizable
- show enough attitude that it could plausibly live on a youth culture poster, campus event cover, or music-event campaign
- strong, review-ready presentation quality
```

### 21. DROP 活动封面图 / 海报（750×560）

```text
Create one finished cover poster for a Meetu DROP event.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/1.png`
  role: energy anchor; draw loose inspiration from the feeling of “something is happening tonight”
- `设计语言参考/Meetu元素参考/1 Meetu Logo.png`
  role: brand anchor; use only to keep the result inside Meetu’s identity logic

Reference handling:
- use the references only as loose style anchors
- do not reuse any exact scene composition, crowd arrangement, or poster layout from the inputs
- the final image should feel like a new DROP campaign cover, not a remixed source image

Output target:
- one final image
- final filename: drop-cover-poster-01.png
- size: 750 × 560px

Goal:
- create a small-program event cover that feels like a nightlife campaign poster, not an event instruction card
- the image should make university students feel: “有事在发生，我得去看看”
- brand tone: 有趣、自由、酷、有态度

Style:
- dark base with strong neon highlights
- punk / club-poster / youth-culture tension
- high contrast and highly memorable
- not warm companionship, not corporate, not generic app banner
- bold but still readable on a phone screen
- use East Asian / Chinese university-age faces if any people appear

Color system:
- background: `#0D0D0D`
- neon headline gradient: `#FF3CAC` to `#784BA0`
- accent cyan: `#00F5FF`
- accent gold: `#FFD700`
- body/supporting text can use near-white or light gray
- avoid soft pastel, beige, or lifestyle-brand warmth

Information hierarchy that must appear in the image:
1. `DROP第X局`
2. `16个人坐下，0个认识，刚刚好`
3. `8男8女 · ¥39/人 · 含饮品`
4. `[日期] 周六 19:00`
5. `武汉 · 高校附近`

Composition:
- top area: huge `DROP第X局` as the anchor
- center: slogan with strong emotional pull
- lower area: concise info strip / badges for gender ratio, price, included drink, date, and location
- can include subtle card-game / table / night gathering cues, but do not clutter
- should feel like a premium youth event poster with urgency and social intrigue

Typography:
- bold, condensed, high-impact display treatment
- mix oversized title with tighter support copy
- punk/editorial energy is welcome, but text must remain readable
- avoid cute rounded type and avoid corporate neutral sans

Absolutely avoid:
- enterprise event poster style
- wedding/party invitation style
- warm campus brochure look
- too many UI components or fake app screenshots
- generic stock-photo collage
```

### 22. DROP 小红书引流帖配图（3张 1080×1440）

#### 22.1 封面图（点击钩子）

```text
Create one finished vertical cover image for a Xiaohongshu traffic-driving post about Meetu DROP.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `activity-detail-demos/demo-4-DROP-狠人杀.html`
  role: primary system anchor; draw loose inspiration from its dark neon palette, nightlife tension, and premium youth-event mood
- `项目资料/meetu卡牌/5.png`
  role: secondary color-and-packaging anchor; draw loose inspiration from its galaxy purple-blue-pink energy and branded rhythm

Reference handling:
- use the references only as loose style anchors
- do not replicate their exact composition, object placement, poster structure, or scene framing
- the final image should feel recognizably DROP, but still new

Output target:
- one final image
- final filename: drop-xhs-01-cover.png
- size: 1080 × 1440px

Goal:
- stop a user in the Xiaohongshu feed within 0.5 seconds
- make people feel: “这局看起来有点狠，我想点进去看看”
- visual role is hook first, information second

Chinese text to include:
- 主标题：8个陌生武汉大学生坐一桌会发生什么？
- 标签：跨校盲盒局
- 品牌标记：DROP · 第1期

Style:
- dark, stylish, youthful, high-energy
- deep black background with neon pink / purple glow and cyan sparks
- let the color energy feel closer to the real 狠人杀 system: galaxy purple-blue-pink, neon-number glow, and high-contrast event-poster confidence
- club-poster / underground event / cool youth-culture feeling
- fashionable, sharp, and memorable rather than warm or explanatory
- if any people appear, use East Asian / Chinese university-age faces with consistent warm light-beige Asian skin tones

Composition:
- huge title occupying the upper-middle area
- small but clear `DROP · 第1期` brand mark
- one compact capsule tag for `跨校盲盒局`
- visual center can suggest a dark table, chairs, cards, or a social scene about to start
- if card hints appear, they should feel consistent with the actual DROP deck language rather than generic nightlife props
- keep enough negative space so the typography feels premium, not crowded

Typography:
- oversized condensed Chinese display with strong impact
- sharp hierarchy, strong contrast, not cute, not soft
- text should feel like a music-event poster, not a campus notice

Absolutely avoid:
- listing detailed event facts
- warm orange campus brochure feeling
- overly literal UI or app screenshot elements
- generic nightlife stock-photo collage
```

#### 22.2 氛围图（局感）

```text
Create one finished vertical atmosphere image for a Xiaohongshu traffic-driving post about Meetu DROP.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `activity-detail-demos/demo-4-DROP-狠人杀.html`
  role: primary system anchor; draw loose inspiration from its DROP neon-dark language and premium card-game energy
- `项目资料/meetu卡牌/1.jpg`
  role: coded-identity anchor; draw loose inspiration from the neon-number / alias-card feeling

Reference handling:
- use the references only as loose style anchors
- do not reproduce exact card angles, exact table layouts, or scene framing from the references
- keep the final image original and mood-first

Output target:
- one final image
- final filename: drop-xhs-02-vibe.png
- size: 1080 × 1440px

Goal:
- communicate what this DROP session feels like
- cool, confident, mysterious, social, a little provocative
- make users imagine the room, the tension, and the moment before talking

Text policy:
- no large informational copy
- no school list
- no price / date / CTA
- if absolutely needed, allow only a tiny `DROP` mark as a subtle signature

Style:
- dark base with bold neon accents
- stylish, youthful, high-contrast, a little cinematic
- not explanatory; this image should sell the mood
- if any people appear, use East Asian / Chinese university-age faces with consistent warm light-beige Asian skin tones

Visual cues allowed:
- close-up card textures
- coded identity cards / alias-card feeling
- galaxy-swirl packaging accents, neon-number glow, a sense that each seat has a hidden code
- table-edge light, hands, drinks, chairs, name-card silhouettes
- suggestive social staging without fully spelling out the mechanics

Composition:
- strong focal object or scene in the center
- use shadows, glow, layered surfaces, and visual tension
- image should feel like a fragment from a stylish poster campaign
- preserve a clean composition with enough rhythm, not visual noise

Absolutely avoid:
- large text blocks
- infographic layout
- cute mascot energy
- bright lifestyle sunshine scenes
- too much explanatory symbolism
```

#### 22.3 品牌签名图（记忆点）

```text
Create one finished vertical signature image for a Xiaohongshu traffic-driving post about Meetu DROP.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `activity-detail-demos/demo-4-DROP-狠人杀.html`
  role: primary system anchor; draw loose inspiration from its typography confidence, dark base, and neon accents
- `项目资料/meetu卡牌/5.png`
  role: packaging-energy anchor; draw loose inspiration from the real DROP sub-brand color rhythm and branded energy

Reference handling:
- use the references only as loose style anchors
- do not mimic the exact layout, type lockup, or logo placement from any single source
- the final signature page should feel like a fresh DROP campaign asset

Output target:
- one final image
- final filename: drop-xhs-03-signature.png
- size: 1080 × 1440px

Goal:
- leave a clean, strong, memorable brand impression at the end of the image set
- make users remember `DROP` as a sub-series with attitude
- feel like a campaign sign-off, not an informational poster

Chinese text to include:
- 主标题：DROP
- 副标题：武汉高校社交图鉴 · 第1期
- 辅助文案：这周六 · 街道口
- CTA：好奇的话 👇 评论你的学校

Style:
- dark, fashionable, youth-culture-first
- premium black background with electric pink / violet / cyan accents
- closer to the actual 狠人杀 packaging language than a generic neon poster
- stronger brand-signature feeling than the first two images
- if any people appear, use East Asian / Chinese university-age faces with consistent warm light-beige Asian skin tones

Composition:
- huge `DROP` as the hero at top or center
- subtitle sits tightly below as a clean editorial line
- bottom CTA should feel native to Xiaohongshu interaction culture
- add subtle geometric light, badge-like marks, or monogram energy to make the brand feel ownable

Typography:
- `DROP` should feel like a youth-culture label, almost merch-worthy
- subtitle should be clean and smaller
- CTA should be simple, direct, and scroll-stopping

Absolutely avoid:
- repeating the information-heavy cover style
- corporate brand board layout
- warm campus brochure palette
- mascot-led composition
```

### 23. DROP 活动详情页视觉资产（3张横图）

#### 23.1 Hero 区背景图（750×400）

```text
Create one finished horizontal background image for the hero section of a Meetu DROP activity-detail page.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `activity-detail-demos/demo-4-DROP-狠人杀.html`
  role: primary system anchor; draw loose inspiration from its neon-dark palette, nightlife tension, and premium youth-event mood
- `项目资料/meetu卡牌/5.png`
  role: palette anchor; draw loose inspiration from the galaxy purple-blue-pink swirl and glint accents

Reference handling:
- use the references only as loose style anchors
- do not recreate any one reference image’s composition or exact lighting setup
- preserve originality while staying inside the DROP system

Output target:
- one final image
- final filename: drop-detail-hero-bg.png
- size: 750 × 400px

Goal:
- serve as the top atmospheric background of the activity-detail page
- deliver “有事在发生”的能量感 before any body copy appears
- look premium, dark, and youth-culture-driven

Text policy:
- no text in the image
- no numbers, no badges, no UI labels
- image must leave room for HTML text overlay later

Style:
- dark base, neon pink / purple / cyan glow, subtle gold highlights
- lean toward the real 狠人杀 packaging system: galaxy purple-blue-pink + coded neon accents
- club-poster energy, not corporate, not lifestyle sunshine
- premium and stylish, with a sense of anticipation
- if any people appear, use East Asian / Chinese university-age faces with consistent warm light-beige Asian skin tones

Composition:
- keep the upper-middle area visually dramatic but not too busy
- preserve readable negative space for overlaid HTML title and metadata
- allowed cues: blurred table scene, chairs, drinks, card edges, dark room glow, silhouettes
- image should feel like the air in the room before the event begins

Absolutely avoid:
- embedded text
- centered character portraits that block headline space
- mascot-led composition
- bright warm-orange brochure feeling
```

#### 23.2 DROP 释义区视觉（750×300）

```text
Create one finished horizontal visual for the “DROP = 放下” explanation block of a Meetu DROP activity-detail page.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `activity-detail-demos/demo-4-DROP-狠人杀.html`
  role: primary system anchor; draw loose inspiration from its dark neon confidence and premium social-game atmosphere
- `项目资料/meetu卡牌/1.jpg`
  role: concept anchor; draw loose inspiration from the idea of removing real names and switching into coded roles

Reference handling:
- use the references only as loose style anchors
- do not directly reproduce the reference composition or object arrangement
- let the final image feel more abstract and concept-led than the sources

Output target:
- one final image
- final filename: drop-detail-meaning-visual.png
- size: 750 × 300px

Goal:
- visually support the brand meaning of “Drop = 放下”
- suggest letting go of labels, tension, self-introduction scripts, or guarded identity
- feel abstract, stylish, and concept-driven rather than literal

Text policy:
- no text in the image
- this is a concept visual only; HTML copy will explain the meaning

Style:
- dark, abstract, conceptual, youthful, stylish
- neon accents in pink / cyan / violet with restrained gold sparks
- not sad, not heavy, not therapy-brand calm
- should feel like a small revelation inside a nightlife poster system

Visual cues allowed:
- identity tag slipping off
- mask being set aside
- alias card turning over
- numbered code card replacing a name tag
- label fragments falling away
- negative-space shape suggesting release or openness

Composition:
- strong central metaphor with clear silhouette
- enough calm space around the metaphor so the section doesn’t feel crowded
- should read as “drop the script, show up as you are” without becoming literal illustration

Absolutely avoid:
- explanatory infographic
- happy stock-photo people
- warm campus brochure composition
- too many discrete objects with no focal point
```

#### 23.3 卡牌氛围图（750×300）

```text
Create one finished horizontal atmosphere image for the “狠人杀” card section of a Meetu DROP activity-detail page.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `项目资料/meetu卡牌/2.jpg`
  role: SPARK anchor; draw loose inspiration from the yellow-black hazard-sign aesthetic, fire-icon energy, and graffiti-like boldness
- `项目资料/meetu卡牌/0.jpg`
  role: RESONANCE anchor; draw loose inspiration from the hot-pink + cyan pop-art comic burst energy

Reference handling:
- use the references only as loose style anchors
- do not copy exact card layout, exact border treatment, or literal card-face composition
- translate the three systems into one fresh atmosphere image rather than a collage of source cards

Output target:
- one final image
- final filename: drop-detail-card-atmosphere.png
- size: 750 × 300px

Goal:
- show the texture and atmosphere of the 狠人杀 card system
- create intrigue without revealing actual card content
- make users feel that the cards are part game mechanic, part social accelerator
- specifically reflect the real three-part card language:
  - SPARK = yellow/black hazard-sign energy
  - CONNECT = deep purple / indigo reflective mood
  - RESONANCE = hot-pink / cyan comic-burst energy

Text policy:
- no text in the image
- do not show readable card copy
- card faces can be partially hidden, blurred, turned away, or cropped

Style:
- dark, tactile, stylish, premium
- moody tabletop scene with neon edge light
- social tension and curiosity over explanation
- the composition should clearly feel rooted in the real card family rather than a generic neon tabletop
- let yellow-black, deep purple, and hot-pink/cyan coexist as a three-system palette
- if any people appear, use East Asian / Chinese university-age hands/faces with consistent warm light-beige Asian skin tones

Visual cues allowed:
- card corners from all three systems
- partial deck spread
- fingers flipping a card
- table reflection
- drinks, glow, badge-like markers, alias-card hints
- hazard stripes, signal / wifi-like glyph hints, comic burst shapes

Composition:
- hero focus on card texture or flipping motion
- shallow depth or selective crop is welcome
- preserve a cinematic, mystery-first feeling
- should feel like a detail shot from a campaign film frame

Absolutely avoid:
- readable question text on cards
- bright casual board-game cafe mood
- mascot or cartoon treatment
- cluttered tabletop with too many unrelated props
- flattening all cards into one generic neon style that loses the SPARK / CONNECT / RESONANCE distinction
```

#### 24. 平台正式上线通知海报（1242×1660）

```text
Create one finished Xiaohongshu poster announcing the official launch of Meetu.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `设计语言参考/Meetu元素参考/1 Meetu Logo.png`
  role: official brand anchor; draw loose inspiration from it for logo presence, brand consistency, and orange accent logic
- `cms-pages-v4/B-youth-editorial-平台介绍.html`
  role: positioning anchor; draw loose inspiration from its “大学生活动社交平台” tone and its warmth / clarity balance

Reference handling:
- use the references only as loose style anchors
- do not recreate their exact composition, layout rhythm, or decorative details
- this should look like a new launch poster, not a remix of existing assets

Output target:
- one final poster image
- final filename: xhs-launch-poster-01-正式上线.png
- size: 1242 × 1660px
- aspect ratio: 3:4 vertical

Goal:
- announce that Meetu is officially live
- make university students feel “this is finally here, I should go search it now”
- sound like a confident peer announcing something worth paying attention to, not an official brand bulletin

Render the following exact simplified Chinese text:
- 主标题：觅遇社，正式上线了
- 副标题：大学生活动社交平台
- 卖点1：全员在校认证
- 卖点2：活动付费保障出席
- 卖点3：女生安心模式
- 底部引导：🔍「觅遇社」

Style:
- young, stylish, energetic, socially native
- 70-80% interesting / free / confident, not corporate, not explanatory
- celebratory without looking like a grand-opening discount poster
- must feel like something a college student would screenshot and repost without embarrassment
- if any people appear, use East Asian / Chinese university-age faces and warm light-beige Asian skin tones

Color direction:
- keep Meetu brand consistency
- use #FF7422 as the anchor accent
- support with cream, deep charcoal, and one fresh contemporary accent if needed
- avoid overusing orange as a full-page fill; use it as a controlled focal energy

Composition:
- one dominant headline zone with strong stop-scroll power
- supporting selling points should feel like confident badges / signals, not a dense information board
- bottom search instruction must be very clear and easy to notice
- the whole poster should feel like “something has started”

Absolutely avoid:
- coupon / opening sale aesthetics
- childish mascot-led composition
- overcrowded UI screenshot style
- bland corporate app-launch poster design
```

#### 25. 平台功能介绍海报 A：学生认证入口（1242×1660）

```text
Create one finished Xiaohongshu poster explaining Meetu’s student-verification mechanism.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `设计语言参考/Meetu元素参考/1 Meetu Logo.png`
  role: brand anchor; draw loose inspiration from it for logo consistency and accent logic
- `cms-pages-v4/B-youth-editorial-平台介绍.html`
  role: trust-system anchor; draw loose inspiration from its in-school verification / fee clarity / safe participation tone

Reference handling:
- use the references only as loose style anchors
- do not turn the result into a screenshot remake or a close variation of the source poster
- the final visual should feel new, but trustworthy

Output target:
- one final poster image
- final filename: xhs-feature-poster-01-学生认证入口.png
- size: 1242 × 1660px
- aspect ratio: 3:4 vertical

Goal:
- explain that full access requires student verification
- make the mechanism feel like protection and filtering, not like a hurdle
- create the feeling of “这里的人，我们已经先筛过一遍了”

Render the following exact simplified Chinese text:
- 主标题：这里的每个人，都是在校大学生
- 副标题：先认证，再放心认识新的人
- 说明1：学生证 / 在校证明
- 说明2：平台审核
- 说明3：通过后解锁全部功能
- 底部说明：这不是障碍，是我们先帮你筛过了

Style:
- trustworthy, youthful, clean, reassuring
- same-generation tone, not school administration, not customer-service explanation
- should feel like a well-designed student community entry rule
- if any people appear, use East Asian / Chinese university-age faces and warm light-beige Asian skin tones

Color direction:
- keep Meetu brand consistency with #FF7422 as anchor
- support with cream / warm gray / deep charcoal / subtle green verification accents
- use green only as a verification cue, not as the main brand color

Composition:
- title first, with a strong sense of trust and clarity
- middle zone can imply the three-step verification path through tags, signals, or badge-like structure
- no literal app tutorial screenshots
- visual should feel designed, not instructional

Absolutely avoid:
- enterprise compliance poster feeling
- school office / campus admin aesthetics
- screenshot-heavy product tutorial layout
- too much text density
```

#### 26. 平台功能介绍海报 B：活动 + 广场双核功能（1242×1660）

```text
Create one finished Xiaohongshu poster introducing Meetu’s two core modules: 活动 and 广场.

VISUAL INPUT (must be provided alongside this prompt):
Reference images are for mood and direction only — the output should feel original, not derivative.
- `cms-pages-v4/B-youth-editorial-平台介绍.html`
  role: platform-structure anchor; draw loose inspiration from the relationship between trust, discovery, and social experience
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/1.png`
  role: event-side anchor; draw loose inspiration from its event-discovery and social-energy feel

Reference handling:
- use the references only as loose style anchors
- do not reproduce any source image as a side-by-side copy
- build a fresh dual-module poster with new hierarchy and new visual rhythm

Output target:
- one final poster image
- final filename: xhs-feature-poster-02-活动与广场.png
- size: 1242 × 1660px
- aspect ratio: 3:4 vertical

Goal:
- explain that Meetu has two complementary engines:
  1) 活动：发现并线下见面
  2) 广场：逛、发现、分享
- make users feel “这不是只有活动，也不是只有内容，它两个都能玩”

Render the following exact simplified Chinese text:
- 主标题：不止有活动，还有广场
- 模块A标题：活动
- 模块A说明1：发现活动
- 模块A说明2：搭上
- 模块A说明3：线下见
- 模块A说明4：评价
- 模块A补充：9大品类，活动付费保障出席
- 模块B标题：广场
- 模块B说明1：逛
- 模块B说明2：发现
- 模块B说明3：分享
- 模块B补充：校园动态、种草内容、社交氛围

Style:
- modern, youthful, clearly structured
- one side should feel more action-oriented, the other more discovery-oriented
- should feel like a cool student platform map, not a product brochure
- same-generation tone, not a brand lecturing users
- if any people appear, use East Asian / Chinese university-age faces and warm light-beige Asian skin tones

Color direction:
- use #FF7422 as the brand anchor
- allow one cooler support tone for the 广场 side and one warmer / more kinetic tone for the 活动 side
- keep the two modules clearly distinguishable but still in the same system

Composition:
- split or contrast layout is encouraged
- 活动 side should feel dynamic / forward / action-led
- 广场 side should feel browseable / open / socially alive
- hierarchy must stay simple enough to read fast in Xiaohongshu feed browsing

Absolutely avoid:
- screenshot-like feature list
- heavy tutorial logic
- over-dense lists of all 9 categories in body text
- boring two-column corporate infographic aesthetics
```
