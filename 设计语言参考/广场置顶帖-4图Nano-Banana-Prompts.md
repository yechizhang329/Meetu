# 广场置顶帖 5 图 Nano Banana Prompt 清单

> 用途：觅遇社广场置顶帖配图生成  
> 默认画幅：**3:4 竖版**
> 说明：如果 DavidC 最终确认的广场帖展示比例不是 3:4，只调整画幅描述即可，其余 prompt 内容可直接沿用。

---

## 统一执行原则

### 1. 统一视觉基线

- 暖橙为主，奶油白 / 可可棕为辅助，可加入少量更活泼的蜜桃橘 / 轻莓粉 / 明亮珊瑚做点缀
- 年轻、时尚、活泼、校园、轻松、可信
- 不夜店化，不低幼，不电商促销化，不做沉闷公告感
- 优先呈现真实社交氛围，而不是抽象 UI 示意图
- 如果出现人物，统一使用**亚洲肤色 / 东亚大学生面孔**，年龄感控制在大学生区间
- 如果出现觅遇仔，必须与现有 nanobanana 参考图中的品牌角色气质保持一致

### 2. 统一文本原则

- 中文为主，英文只作少量装饰
- 画面文案要短，适合直接做图内标题
- 不出现禁用词：诚意金 / 免费 / 0成本 / 拼团 / 成团 / 开搭 / 觅途
- 当前版本暂时使用「觅友」一词

### 3. 统一排版与字体气质

- 文字要有设计感，但不做难读的花字
- 标题建议更年轻、更时尚：粗字重、明确对比、干净留白
- 可以有轻海报感 / 校园 editorial 感，但不要像官方通知
- 如果画面里需要英文装饰，只能做极少量的辅助，不抢中文主标题

### 4. 统一输入建议

执行时统一只从以下资产池中取参考图：
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/`
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/`
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/`

不要再额外混入：
- mascot master
- stickers 库
- 其他非 `nanobanana图片生成v1` 的参考图

---

## Prompt 01 `plaza-pinned-01-欢迎图.png`

```text
Create one finished vertical visual for the first image of Meetu plaza pinned post.

VISUAL INPUT (must be provided alongside this prompt):
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/0. 欢迎.png`
  - role: existing plaza welcome composition / mood reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/1.png`
  - role: brand color and illustration style reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/2.png`
  - role: supplementary warm campus visual tone reference

Output target:
- one independent final image
- final filename: plaza-pinned-01-欢迎图.png
- aspect ratio: 3:4 vertical

Goal:
- welcome the user into the plaza
- make the plaza feel like a lively shared social space
- make first-time users immediately understand: this is where people share, discover, and find the next activity

Chinese text to include:
- 主标题：欢迎来到广场
- 副标题：觅友们的公共客厅
- 辅助文案：这里是觅遇社的广场。分享、种草、找搭子、随便聊——没有格式要求，想说什么就说。

Style:
- warm, bright, open, welcoming
- orange / cream / soft cocoa with lively peach accents
- youthful, stylish, slightly editorial poster feeling
- rounded cards, soft stickers, subtle route lines or chat-bubble accents
- if people appear, they should read as East Asian college-age users
- if a mascot-like character appears, it should visually stay close to the existing Meetu illustration tone shown in the provided nanobanana references

Composition:
- one clear hero title area
- one strong welcoming visual center
- supporting elements can include soft badges, route lines, plaza-note cards, or speech bubbles
- avoid dense UI screenshots
- avoid generic stock-photo look
```

## Prompt 02 `plaza-pinned-02-种草与活动分享.png`

```text
Create one finished vertical visual for the second image of Meetu plaza pinned post.

VISUAL INPUT (must be provided alongside this prompt):
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/1.png`
  - role: activity atmosphere reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/2.png`
  - role: youth social activity composition reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/3.png`
  - role: supporting color/sticker-density reference

Output target:
- one independent final image
- final filename: plaza-pinned-02-种草与活动分享.png
- aspect ratio: 3:4 vertical

Goal:
- teach users that the plaza is where they can plant ideas for interesting activities, find buddies to join, and come back to share real feelings after joining
- make the action chain feel clear: 种草 → 找搭子搭上 → 参加 → 分享感受

Chinese text to include:
- 主标题：种草好活动，找搭子搭上
- 小标题：玩完了也来说一句
- 要点 1：刷到心动的活动？发条动态，找搭子一起搭上
- 要点 2：周末剧本杀、City Walk、观影局……想去就来种草
- 要点 3：参加完的活动也值得聊——好玩的、踩雷的、遇到神搭的
- 要点 4：你的真实感受，可能帮到下一个还在犹豫的人

Style:
- light collage of post cards / photo cards / sticker notes
- youth editorial, playful, stylish, but clean
- warm orange anchor with cream and soft brown support, plus small lively coral accents
- more social-sharing energy than platform-intro energy
- if people appear, they should read as East Asian college-age users

Composition:
- title at top with strong readability
- center area can use layered photo-card / note-card composition
- each point should feel like part of a content board, not a boring checklist
- decoration can include small badges, route accents, arrows, paper scraps, or caption stickers
- avoid overloading the page with too many independent blocks
```

## Prompt 03 `plaza-pinned-03-日常分享与找搭子.png`

```text
Create one finished vertical visual for the third image of Meetu plaza pinned post.

VISUAL INPUT (must be provided alongside this prompt):
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/step1.png`
  - role: plaza post-style card / layout reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/4.png`
  - role: warm campus illustration style reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/step2.png`
  - role: low-pressure plaza composition reference

Output target:
- one independent final image
- final filename: plaza-pinned-03-日常分享与找搭子.png
- aspect ratio: 3:4 vertical

Goal:
- tell users they can casually post daily life and campus life updates, and find many kinds of buddies in the plaza
- make posting feel low-pressure, everyday, immediate, and not limited to platform activity types

Chinese text to include:
- 主标题：不只是活动，日常也能聊
- 小标题：想找什么搭子，直接喊
- 要点 1：校园日常、考试吐槽、今天的奶茶——都可以发
- 要点 2：想找运动搭子、饭搭子、自习搭子、逛街搭子？说一声就好
- 要点 3：不限于平台上的活动类型，什么搭子需求都能在广场喊
- 要点 4：说不定你发的那条，刚好有人在等

Style:
- relaxed, conversational, daily-life social energy
- slightly more chat-like and interactive than image 02
- warm orange / cream / cocoa, with small lively accents
- youthful and fashionable rather than plain utility-poster
- if people appear, they should read as East Asian college-age users

Composition:
- title first, then three low-pressure daily-use scenarios
- can use conversation bubbles, social notes, soft route lines, casual status-card elements
- should feel like “friends in the plaza are talking and responding,” not like a rigid feature explanation
- keep reading flow obvious on a phone screen
```

## Prompt 04 `plaza-pinned-04-探索与分享.png`

```text
Create one finished vertical visual for the fourth image of Meetu plaza pinned post.

VISUAL INPUT (must be provided alongside this prompt):
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/0. 欢迎.png`
  - role: plaza visual consistency and warm base-tone reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/3.png`
  - role: lively social activity atmosphere reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/step3.png`
  - role: post-activity sharing composition reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/4.png`
  - role: bolder color energy and youth visual rhythm reference

Output target:
- one independent final image
- final filename: plaza-pinned-04-探索与分享.png
- aspect ratio: 3:4 vertical

Goal:
- encourage users to start exploring the plaza and share their own stories
- make users feel that this is a space where their voice matters
- create a feeling of "I want to post something too"
- end the pinned post sequence on an inviting, forward-looking note

Chinese text to include:
- 主标题：轮到你了
- 副标题：想说什么就说什么，广场接得住
- 辅助文案：刚搭完一场好活动想吹一下？来。想找个周末搭子但还没想好干嘛？发条动态看谁接你。或者今天就是心情好想聊两句——说呗，这里有人听。

Style:
- warm, inviting, forward-looking energy
- orange / cream / soft cocoa palette can be pushed harder here with brighter peach / coral / vivid berry / sunlit yellow accents
- youthful, fashionable, lively, editorial poster feeling
- this image is allowed to be the most energetic and imagination-opening one in the 4-image sequence
- should feel like an open door or blank canvas waiting to be filled
- encourage imagination, curiosity, and the urge to share something immediately
- more “this place is alive and fun” than “please post something”
- avoid safe poster design; prefer a more surprising, fresh, social-first composition
- if people appear, they should read as East Asian college-age users

Composition:
- one clear title area at top
- center visual should evoke "sharing" and "starting something" — could include open notebook, floating speech bubbles, layered post cards, hand-drawn arrows, or a plaza scene coming alive
- supporting elements can be bolder here: colorful note cards, warm glow bursts, playful sticker-like prompts, arrows, doodles, caption snippets, or idea fragments that feel like a feed waking up
- should feel like the natural end of a 4-image story: welcome → learn → explore → your turn
- should make the viewer want to post something right away, not just passively read
- avoid dense UI, stock photo look, or corporate CTA styling
```

## Prompt 05 `plaza-pinned-05-几条小约定.png`

```text
Create one finished vertical visual for the fifth image of Meetu plaza pinned post.

VISUAL INPUT (must be provided alongside this prompt):
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/0. 欢迎.png`
  - role: plaza visual consistency / warm orange and cream baseline reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/2.png`
  - role: trust-oriented composition and soft information-poster tone reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/广场配图/step2.png`
  - role: friendly card layout rhythm / readable content-block reference
- `设计语言参考/Meetu元素参考/nanobanana图片生成v1/banner/场景/2.png`
  - role: youthful East Asian campus-social atmosphere reference

Output target:
- one independent final image
- final filename: plaza-pinned-05-几条小约定.png
- aspect ratio: 3:4 vertical

Goal:
- present the plaza rules clearly without looking like a cold announcement
- make users feel the rules are there to keep the space comfortable, not to lecture them
- keep the image readable on a phone screen while still feeling stylish, youthful, and branded

Chinese text to include:
- 主标题：几条小约定，花半分钟看完就好
- 规则 1：❶ 做真实的自己 🪞 说真话、聊真事。不搬运、不编造、不立人设。
- 规则 2：❷ 好好说话 🤝 有态度没问题，但别攻击、别歧视、别阴阳。出来玩嘛，开心最重要。
- 规则 3：❸ 保护隐私 🔒 别发别人的照片、联系方式或个人信息。每个人的边界都值得尊重。
- 规则 4：❹ 搭上了就到 ✅ 说好的活动请守约。放鸽子不只浪费别人的时间，也会影响你在平台上的信用。
- 规则 5：❺ 别打广告 🚫 广场不是推广位。代购、引流、刷屏，管理员看到会清理。
- 规则 6：❻ 线下注意安全 📍 和不太熟的搭子见面，选公共场所，跟朋友说一声你去哪儿。
- 规则 7：❼ 不舒服就说 🙋 遇到骚扰、不友善行为、或者任何让你不舒服的事，随时向平台反馈。我们会处理。
- 尾注：违规内容会被删除，多次违规会限制广场使用。

Style:
- warm-campus system first, but calmer and more trustworthy than the first four images
- still young, stylish, lively, and readable
- orange / cream / soft cocoa as the main palette, with small coral or peach accents only
- should feel like a well-designed community guide, not a legal notice or corporate policy board
- if people appear, they should read as East Asian college-age users

Composition:
- clear hierarchy from top to bottom: title → 7 rules → footer note
- use clean rounded cards or soft dividers so the 7 rules are easy to scan
- each rule should feel like a friendly reminder card, not dense paragraph text
- small icon accents are welcome, but text readability is the priority
- leave comfortable whitespace between rule blocks
- avoid heavy gradients, cluttered collage layouts, or noisy decoration that competes with the rules
- the mood should be “this is a comfortable community we maintain together”
```
