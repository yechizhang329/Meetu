# 2026-05-10 武汉大学生 Chill 小局 Image2 Prompt

> 用途：5/10 武汉大学生 Chill 小局活动主封面 + 活动说明图。  
> 执行模型：GPT Image 2。  
> 当前状态：本环境未暴露真实 Image2 出图工具/API，因此这里只交付可直接复制到 Image2 的 prompt。  
> 视觉边界：周日下午、公共空间、奶茶/咖啡、小食、松弛、安全、干净；不要夜店感、酒局感、暧昧感、相亲感。

---

## Prompt 1：活动主封面图

```text
Create a 3:4 vertical event cover image for Meetu, a campus activity social product for Chinese college students.

Purpose:
- This is the main cover for a small Sunday afternoon social gathering in Wuhan.
- It should make students feel: “this looks safe, relaxed, real, and easy to join.”
- It should not feel like a nightclub poster, dating event, drinking party, career lecture, or polished corporate ad.

Canvas:
- Aspect ratio: 3:4 vertical
- Recommended size: 1242x1660px or 1080x1440px
- Platform: WeChat mini program activity cover / Xiaohongshu-style sharing image

Scene:
- A bright warm café or public chat space near Jiedaokou, Wuhan, on a Sunday afternoon.
- 4-6 Chinese / Asian college students sit around a small table.
- They are casually talking, not posing for camera.
- On the table: milk tea, coffee cups, small snacks, phones, simple notes or sticky notes.
- The space feels public, clean, friendly, and low-pressure.
- Daylight, warm cream tones, soft shadows, real-life details.

Exact Chinese text to render:
- Main title: “周日出来坐坐”
- Subtitle: “5.10 武汉街道口附近”
- Corner label: “在校学生｜20人左右｜¥1占位”
- Small text: “奶茶/咖啡 + 小食”

Layout:
- Keep a clear text area in the upper-left or upper-center.
- Main title must be large and readable in a phone feed thumbnail.
- Subtitle and corner label should be secondary but still readable.
- People and table scene should support the title, not cover it.
- Use soft rounded shapes, paper-note labels, and warm spacing.

Visual system:
- Palette: warm cream, milk tea beige, light coffee brown, soft white, with Meetu warm orange (#FF7422) as a small accent.
- Typography feeling: modern Chinese sans-serif, friendly, clear, not childish.
- Texture: light paper grain or warm café daylight, but not fake vintage.
- Mood: clean, relaxed, safe, Sunday afternoon, “friend inviting you out.”

Constraints:
- Accurate simplified Chinese text. Do not add extra Chinese or English words.
- Do not use alcohol, cocktails, dark club lighting, neon lights, black-gold styling, red romantic lighting, heart symbols, dating-app cues, or nightclub elements.
- Do not make it look like a lecture, job salon, MBA talk, or career consulting poster.
- Do not make the students overly glamorous or influencer-like; they should look like real college students.
- If faces are visible, use Asian skin tones and natural expressions.
```

---

## Prompt 2：活动说明长图

```text
Create a 3:4 vertical information card for Meetu, explaining a small Sunday afternoon college-student social gathering in Wuhan.

Purpose:
- This image should be used as a Xiaohongshu / WeChat sharing image after the main cover.
- It must clearly communicate the key activity details in one glance.
- The tone should feel like a friend’s clean invitation note, not an official announcement.

Canvas:
- Aspect ratio: 3:4 vertical or 4:5 vertical
- Recommended size: 1242x1660px or 1080x1440px
- Mobile-first readability

Exact Chinese text to render:
- Title: “5.10 周日出来坐坐”
- Subtitle: “武汉街道口附近｜14:00-16:00”
- Info item 1: “20人左右，最多30人”
- Info item 2: “在校学生限定，本科研究生都可以”
- Info item 3: “奶茶咖啡 + 小食”
- Info item 4: “¥1占位，不是为了收费”
- Info item 5: “公共场合，具体地点报名后通知”
- Info item 6: “不强制加微信、不强制拍照、不强制续摊”
- Bottom CTA: “感兴趣先私聊我们”

Layout:
- Warm paper card layout with clear hierarchy.
- Title at top, large and bold.
- Subtitle below title.
- Six info items arranged as neat rounded cards or checklist rows.
- Bottom CTA should be visible but not salesy.
- Leave enough breathing room between text blocks; do not overcrowd.

Visual system:
- Background: light cream paper texture.
- Accent elements: small calendar icon, map pin, coffee cup, chat bubble, people-count tag, simple checkbox marks.
- Palette: cream white, milk tea beige, light coffee brown, Meetu warm orange (#FF7422) accent, very soft cocoa text.
- Typography: clear modern Chinese sans-serif, high readability.
- Style: young, clean, relaxed, safe, human, not polished corporate.

Constraints:
- Accurate simplified Chinese text. Do not change wording.
- No QR code, no external app marks, no fake screenshots.
- No nightlife, alcohol, neon, black-gold, cyber, romance, dating, or party cues.
- No official notice / institution / lecture poster feeling.
- If people appear, use Asian skin tones, but this image can also be mostly graphic information design.
```

---

## 小红书限流安全替代文案（如需）

如果这张图明确用于小红书公开分发，而不是小程序/私域转发，建议把 Prompt 2 的第 6 条从：

```text
不强制加微信、不强制拍照、不强制续摊
```

替换为：

```text
不强制交换联系方式、不强制拍照、不强制续摊
```

原因：小红书对外部平台引流和“微信”相关词更敏感；语义不变，但平台风险更低。

