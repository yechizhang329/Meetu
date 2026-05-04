# 2026-05-10 武汉大学生 Chill 小局 Image2 Prompt

> 用途：5/10 武汉大学生 Chill 小局活动主封面 + 活动说明图。  
> 执行模型：GPT Image 2。  
> 当前状态：本环境未暴露真实 Image2 出图工具/API，因此这里只交付可直接复制到 Image2 的 prompt。  
> 新方向：从“活动海报”改为“生活方式邀请封面”。参考 70% Airbnb/Pinterest 生活方式感 + 20% Notion 信息秩序 + 10% Figma 标签系统。  
> 视觉边界：周日下午、公共空间、奶茶/咖啡、小食、桌面细节、松弛、安全、干净；不要夜店感、酒局感、暧昧感、相亲感、讲座感、职业咨询感。

---

## Prompt 1：活动主封面图（生活方式邀请卡）

```text
Create a 3:4 vertical lifestyle invitation cover for Meetu, a campus activity social product for Chinese college students.

Purpose:
- This is the main cover for a small Sunday afternoon social gathering in Wuhan.
- It should feel like a real friend placed an invitation note on a cafe table, not like a marketing poster.
- In 0.5 seconds, students should feel: safe, relaxed, real, easy to join.

Canvas:
- Aspect ratio: 3:4 vertical
- Recommended size: 1242x1660px or 1080x1440px
- Platform: WeChat mini program activity cover / private sharing image

Visual concept:
- A Sunday afternoon cafe tabletop near Jiedaokou, Wuhan.
- The image is mostly a warm tabletop still life, not a staged event poster.
- On the table: milk tea, coffee cup, small snacks, phone, sticky notes, a simple paper invitation card, soft shadows.
- You may softly imply 4-6 Chinese / Asian college students chatting nearby through hands, cups, blurred silhouettes, or seating hints, but do not rely on clear front-facing portraits.
- The invitation note / paper card on the table carries the main text.

Exact Chinese text to render on the paper note:
- Main title: “周日出来坐坐”
- Subtitle: “5.10 武汉街道口附近”
- Small label: “在校学生｜20人左右｜¥1占位”
- Small text: “奶茶/咖啡 + 小食”

Layout:
- Use the paper note / invitation card as the text zone.
- Main title must be the clearest element and readable on a phone feed thumbnail.
- Keep the tabletop objects around the note as atmosphere, not clutter.
- Use slight asymmetry: the note can be slightly off-center, with cups/snacks framing it naturally.
- Leave enough visual breathing room; do not overfill the canvas.

Visual system:
- Palette: warm cream, milk tea beige, light coffee brown, soft white, with Meetu warm orange (#FF7422) as a small accent on label/tape/underline.
- Texture: real paper note, warm cafe daylight, subtle table grain, soft shadows.
- Typography: modern Chinese sans-serif, friendly and clear; looks printed or neatly written on a note, not a giant digital poster.
- Mood: Airbnb-style accessible lifestyle scene + Pinterest tabletop inspiration + clean editorial composition.

Constraints:
- Accurate simplified Chinese text. Do not add extra Chinese or English words.
- No QR code, no external platform marks, no fake app UI.
- Do not use alcohol, cocktails, dark club lighting, neon lights, black-gold styling, red romantic lighting, heart symbols, dating-app cues, nightclub elements, or party cues.
- Do not make it look like a lecture, job salon, MBA talk, career consulting poster, official announcement, or corporate ad.
- Do not make the students influencer-like or overly glamorous; the feeling should be real Chinese college students.
- If visible skin appears, use Asian skin tones and natural gestures.
```

---

## Prompt 2：活动说明长图（清爽邀请说明卡）

```text
Create a 3:4 vertical information card for Meetu, explaining a small Sunday afternoon college-student social gathering in Wuhan.

Purpose:
- This image should work as the second image after the lifestyle cover.
- It should feel like a carefully edited invitation note, not an official notice.
- The reader should immediately understand when, where, who can come, what to prepare, and why it feels safe.

Canvas:
- Aspect ratio: 3:4 vertical or 4:5 vertical
- Recommended size: 1242x1660px or 1080x1440px
- Mobile-first readability

Exact Chinese text to render:
- Title: “5.10 周日出来坐坐”
- Subtitle: “武汉街道口附近｜14:00-16:00”
- Section 1 title: “什么时候”
- Section 1 text: “5月10日 周日 14:00-16:00”
- Section 2 title: “在哪里”
- Section 2 text: “街道口附近，具体地点报名后通知”
- Section 3 title: “谁可以来”
- Section 3 text: “在校学生限定，本科研究生都可以”
- Section 4 title: “需要准备吗”
- Section 4 text: “不用自我介绍，不用很社牛，来了坐坐也行”
- Section 5 title: “放心来”
- Section 5 text: “公共场合｜女生可带朋友｜不强制交换联系方式、不强制拍照、不强制续摊”
- Bottom label: “¥1占位｜奶茶咖啡 + 小食”
- Bottom CTA: “感兴趣先私聊我们”

Layout:
- Warm editorial information card, like a Notion page turned into a soft paper poster.
- Title at top, large and calm.
- Use five clearly separated sections with light borders, small icons, and generous spacing.
- Section cards can have slightly different widths or offsets for a Pinterest inspiration-board feeling, but keep reading order clear.
- Bottom CTA should feel like a soft invitation, not a sales button.

Visual system:
- Background: light cream paper texture.
- Accent elements: tiny calendar mark, map pin, coffee cup, chat bubble, people-count tag, simple check marks.
- Palette: cream white, milk tea beige, light coffee brown, soft cocoa text, Meetu warm orange (#FF7422) as small accents.
- Typography: clear modern Chinese sans-serif, high readability, no decorative hard-to-read font.
- Style: Airbnb warmth + Notion information order + Figma label clarity.

Constraints:
- Accurate simplified Chinese text. Do not change wording.
- No QR code, no external app marks, no fake screenshots.
- No nightlife, alcohol, neon, black-gold, cyber, romance, dating, nightclub, party, lecture, or career-salon cues.
- Do not make it look like a formal government/school notice.
- If people appear, use Asian skin tones, but this image can be mostly graphic information design.
```

---

## 私域 / 小程序版本替代文案

如果这张图用于小程序或私域群发，可以把 Prompt 2 的安全说明从：

```text
公共场合｜女生可带朋友｜不强制交换联系方式、不强制拍照、不强制续摊
```

替换为：

```text
公共场合｜女生可带朋友｜不强制加微信、不强制拍照、不强制续摊
```

说明：公开小红书图建议继续使用“不强制交换联系方式”，降低平台引流风险；私域/小程序可用“不强制加微信”，表达更直接。
