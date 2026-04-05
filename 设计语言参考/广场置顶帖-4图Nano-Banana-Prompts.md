# 广场置顶帖 4 图 Nano Banana Prompt 清单

> 用途：觅遇社广场置顶帖配图生成  
> 默认画幅：**3:4 竖版**
> 说明：如果 DavidC 最终确认的广场帖展示比例不是 3:4，只调整画幅描述即可，其余 prompt 内容可直接沿用。

---

## 统一执行原则

### 1. 统一视觉基线

- 暖橙为主，奶油白 / 可可棕为辅助
- 年轻、校园、轻松、可信
- 不夜店化，不低幼，不电商促销化
- 优先呈现真实社交氛围，而不是抽象 UI 示意图
- 如果出现觅遇仔，必须与官方 master 形象一致

### 2. 统一文本原则

- 中文为主，英文只作少量装饰
- 画面文案要短，适合直接做图内标题
- 不出现禁用词：诚意金 / 免费 / 0成本 / 拼团 / 成团 / 开搭 / 觅途
- 当前版本暂时使用「觅友」一词

### 3. 统一输入建议

执行时建议搭配：
- 一张 approved brand color guide image
- 一张 approved Meetu mascot master PNG（如图中要用觅遇仔）
- 一张 approved existing plaza / banner visual
- 一张 approved typography / component guide image

---

## Prompt 01 `plaza-pinned-01-欢迎图.png`

```text
Create one finished vertical visual for the first image of Meetu plaza pinned post.

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
- orange / cream / soft cocoa
- friendly editorial poster feeling
- rounded cards, soft stickers, subtle route lines or chat-bubble accents
- if mascot appears, use official Meetu mascot 觅遇仔 in a welcoming / waving pose

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
- youth editorial, playful but clean
- warm orange anchor with cream and soft brown support
- more social-sharing energy than platform-intro energy

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

Composition:
- title first, then three low-pressure daily-use scenarios
- can use conversation bubbles, social notes, soft route lines, casual status-card elements
- should feel like “friends in the plaza are talking and responding,” not like a rigid feature explanation
- keep reading flow obvious on a phone screen
```

## Prompt 04 `plaza-pinned-04-社区规则.png`

```text
Create one finished vertical visual for the fourth image of Meetu plaza pinned post.

Output target:
- one independent final image
- final filename: plaza-pinned-04-社区规则.png
- aspect ratio: 3:4 vertical

Goal:
- communicate plaza rules clearly without sounding harsh or bureaucratic
- keep the tone warm, readable, and community-oriented
- build the image as a clean visual base that can take an additional text layer later if needed

Chinese text to include:
- 主标题：几条小约定
- 小标题：让广场玩得更舒服
- 规则 1：做真实的自己
- 规则 1 说明：分享真实的想法和体验，不搬运、不编造、不立人设。
- 规则 2：友善说话
- 规则 2 说明：可以有态度，但别攻击、别歧视、别阴阳。大家出来玩，开心最重要。
- 规则 3：保护隐私
- 规则 3 说明：别发他人的照片、联系方式或个人信息。尊重每个人的边界。
- 规则 4：搭上了就到
- 规则 4 说明：说好的活动请守约。放鸽子不只是浪费别人时间，也会影响你的信用。
- 规则 5：别打广告
- 规则 5 说明：广场不是推广位。代购、引流、刷屏，管理员看到会清理。
- 规则 6：线下注意安全
- 规则 6 说明：和不太熟的搭子见面，选公共场所，跟朋友说一声你去哪。
- 规则 7：不舒服就说
- 规则 7 说明：遇到骚扰、不友善行为或任何让你不舒服的事，随时向平台反馈。
- 底部文案：违规内容会被删除。多次违规会限制广场使用。

Style:
- clean, readable, gentle authority
- brand orange accents, cream background, cocoa text
- community rule card, not warning notice, not app TOS screenshot

Composition:
- text readability is top priority
- use one strong title area, then a clean rule list with clear hierarchy
- this image may be used as a designed base first, with the full rule text overlaid later as a separate text layer
- decoration should be restrained: soft badges, tiny route lines, check markers, rounded panels
- do not let decoration compete with the rule text
- avoid feeling like a policy document or admin bulletin
```
