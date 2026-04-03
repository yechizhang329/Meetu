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

---

## 一、顶部 Banner

### 1. 品牌心智 Banner

```text
Create a final Chinese mobile app banner for Meetu, 750x340px, horizontal, polished and production-ready.

Visual style: young, vibrant, trustworthy, Gen-Z campus social platform, warm orange to pink to soft purple gradient, premium mobile-app advertising style, clean but energetic.
Composition: left side text, right side visual scene. Right side shows a warm illustrated or semi-realistic campus social scene with activity symbols like dice, coffee, city walk camera, and sports icons. Keep the layout balanced and highly readable.

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

---

## 二、中部 Banner

### 4. 本周爆款 Banner

```text
Create a final Chinese mobile app middle banner for Meetu, 750x280px, horizontal, polished and production-ready.

Visual style: hot trending activity recommendation, youthful, energetic, orange brand highlights, strong click-through feel.
Composition: left side text block, right side stacked activity-cover thumbnails or a featured event card, with a strong heat indicator and participation atmosphere.

Render the following exact simplified Chinese text:
Main title: 本周最火局 🔥
Subtitle: 126人已拼团成功｜剧本杀拼团局
CTA button: 立即参加 →

Typography requirements:
- Main title bold and eye-catching
- Subtitle medium size, readable, with the participation number visually emphasized
- CTA button should feel clickable and urgent

Generate the final banner with all Chinese text embedded directly in the image.
```

### 5. 场景种草 Banner

```text
Create a final Chinese mobile app middle banner for Meetu, 750x280px, horizontal, polished and production-ready.

Visual style: multi-scene collage, fun, exploratory, comic-like but still premium, showing several activity scenes such as board games, cafe meetups, city walk, and sports.
Composition: a dynamic scene collage with text integrated into the left or center-left area, while the right side holds playful scene fragments.

Render the following exact simplified Chinese text:
Main title: 周末不知道干嘛？👉 滑动看看
Subtitle: 剧本杀｜拼饭｜City Walk｜运动局

Typography requirements:
- Main title large and lively
- Subtitle smaller and easy to scan
- Overall layout should feel like a recommendation banner that invites browsing

Generate the final banner with the exact Chinese text already rendered.
```

### 6. 用户故事 Banner

```text
Create a final Chinese mobile app middle banner for Meetu, 750x280px, horizontal, polished and production-ready.

Visual style: warm, authentic, testimonial-based, soft orange and cream tones, real-user-story feeling, emotionally trustworthy.
Composition: quote-led layout with a soft user-avatar element or profile-card feel on one side and a warm campus social scene in the background.

Render the following exact simplified Chinese text:
Quote 1: “我在觅遇社认识了最好的饭搭子”
Quote 2: “第一次一个人去剧本杀，没想到遇到了一群超合拍的人”
Signature: —— @饭搭子小林

Typography requirements:
- Quote 1 is the visual focus
- Quote 2 is smaller supporting text
- Signature should be present but lower emphasis
- The whole banner should feel like a real user recommendation, not a hard ad

Generate the final banner with all Chinese text embedded directly in the image.
```

---

## 三、广场置顶帖配图

### 7. 欢迎图

```text
Create a final Chinese square-ish social card for a campus social platform, 750x1000px, polished and ready to post.

Visual style: warm, friendly, inviting, orange to pink gradient, cute but refined, campus social energy.
Center visual: a cheerful mascot-like social symbol or campus social illustration, with floating activity icons such as board games, coffee, city walk, and sports.

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

Visual style: clean, modern, mobile-app tutorial visual, purple gradient background, smartphone interface in the center showing an activity feed.

Render the following exact simplified Chinese text:
Top label: Step 1
Main title: 浏览活动
Subtitle: 看看身边有什么好玩的

Typography requirements:
- “Step 1” should be large and eye-catching
- Main title bold and clear
- Subtitle smaller and lighter
- All text should appear at the top portion of the card and remain highly readable
- The smartphone screen may contain abstract UI blocks but should not introduce unrelated extra words

Generate the final card with all Chinese text embedded directly in the image.
```

### 9. 玩法 Step 2 图

```text
Create a final Chinese tutorial card, 750x1000px, polished and production-ready.

Visual style: energetic, social, orange gradient background, abstract avatar circles converging toward a group action area, dynamic and friendly.

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

Generate a final card image with the exact Chinese text already present.
```

### 10. 玩法 Step 3 图

```text
Create a final Chinese tutorial card, 750x1000px, polished and production-ready.

Visual style: warm friendship atmosphere, pink gradient background, young people offline gathering, board game or cafe meet-up scene, happy and relaxed.

Render the following exact simplified Chinese text:
Top label: Step 3
Main title: 线下面基
Subtitle: 开心玩，认真评

Typography requirements:
- Strong title hierarchy
- Friendly rounded Chinese font feeling
- Final output must look like an official tutorial card
- Add subtle five-star rating accents without introducing extra words

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

Visual style: [在这里写活动类型和视觉方向，例如 warm cafe social event / board game mystery night / city walk weekend outing].
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
