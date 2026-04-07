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
Main title: 3天后，找搭子这件事将变得无比简单
Subtitle: 觅遇社｜大学生专属拼团社交平台 即将上线
Bottom line: 微信搜索“觅遇社”小程序

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
Main title: 还有2天，你的搭子已经在路上了
Subtitle: 全员在校认证｜诚意金防鸽｜女生安心模式
Bottom line: 微信搜索“觅遇社”小程序

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
Main title: 明天见！你的第一场搭子局等你来
Subtitle: 首批活动已上架｜准备好了吗？
Bottom line: 微信搜索“觅遇社”小程序

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
- `/Meetu/设计语言参考/品牌资产统一/meetu-mascot-standard-pose.png`
  role: mascot / avatar consistency reference, only if a character-like presence is included
- `/Meetu/设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/4.png`
  role: banner mood reference for warm, polished, youthful brand atmosphere
- `/Meetu/设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/0. 欢迎.png`
  role: composition and friendliness reference for a welcoming contact-entry feeling

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
- `/Meetu/设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/2.png`
  role: pricing / trust banner mood reference
- `/Meetu/设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/2.png`
  role: scene and composition reference for calm, modern, trustworthy visual rhythm
- `/Meetu/设计语言参考/品牌资产统一/stickers v1/放心来.png`
  role: trust-language sticker reference for friendly, reassuring action cues
- `/Meetu/设计语言参考/品牌资产统一/stickers v1/搭子认证.png`
  role: certified / verified tone reference for transparent, rule-based trust

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
