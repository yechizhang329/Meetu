# 觅遇社 Nano Banana 视觉资产 Prompt 清单

> 目标：把当前需要生成的视觉资产按优先级排清楚，并改成「**一个 prompt = 一个具体资产文件**」的执行方式。  
> 适用：Nano Banana 或其他外部生图平台。  
> 原则：中文为主、英文仅少量装饰；PNG-first；每条 prompt 都对应一个最终文件，不再生成整板后 crop。

---

## 一、统一执行原则

### 1. 生产模型

- 必须采用 `reference PNG + prompt` 的方式执行
- 不允许只靠文字重新想象 `觅遇仔`
- sticker / badge / bubble / route 这类元素，默认一条 prompt 只生成一个元素
- 不再生成 sticker sheet / sample board / toolkit board 再 crop

### 2. 语言原则

- 视觉资产中的文字内容以中文为主
- 英文只作少量装饰性点缀，不能成为主体
- 优先使用已确认词汇：
  - `搭上`
  - `齐了`
  - `主理人`
  - `放心来`
  - `费用透明`
  - `搭子认证`

### 3. 风格原则

- 年轻、校园、轻松、可信
- 不低幼、不夜店化、不电商促销化
- 不走 generic stock photo 路线
- 优先使用：
  - 现有 nanobanana 插画素材
  - 官方 mascot master PNG
  - 已确认的 UI / 色彩 / 组件参考图

### 4. 通用输入说明

执行时按资产类型准备这些参考图：

- `approved brand color guide image`
- `approved typography / component guide image`
- `approved existing hero or plaza visual`
- `officially approved Meetu mascot master PNG`
- `approved mascot sticker-sheet reference image`

---

## 二、优先级总表

| 优先级 | 输出文件 | 资产类型 | 用途 |
|---|---|---|---|
| P0 | `sticker-cta-搭上就走.png` | CTA sticker | CMS / Banner / Post |
| P0 | `sticker-badge-齐了出发.png` | badge sticker | success / group formed |
| P0 | `sticker-badge-放心来.png` | trust badge | trust / girls-only / pricing |
| P0 | `sticker-badge-搭子认证.png` | trust badge | platform / verification |
| P0 | `sticker-bubble-出发时间.png` | info bubble | activity cards / posters |
| P0 | `sticker-route-clear-price-easy-call.png` | route label | pricing / rule pages |
| P0 | `mascot-欢迎招手.png` | mascot variant | onboarding / welcome |
| P0 | `mascot-举牌引导.png` | mascot variant | CTA / guide / explainer |
| P0 | `mascot-齐了庆祝.png` | mascot variant | success state / 齐了 |
| P0 | `mascot-温和提醒.png` | mascot variant | pricing / FAQ / rule pages |
| P1 | `kv-主理人招募主视觉.png` | hero KV | host recruitment page |
| P1 | `kv-女生专场主视觉.png` | hero KV | girls-only page |
| P2 | `scene-平台介绍生活方式拼贴.png` | lifestyle scene | platform intro |
| P2 | `scene-收费说明规则透明视觉.png` | trust scene | pricing / rules |

---

## 三、P0 Prompt

### P0-01 `sticker-cta-搭上就走.png`

```text
Create one single reusable CTA sticker for Meetu.

VISUAL INPUT:
- one approved brand color guide image
- one approved typography/component guide image
- one approved existing Meetu hero or plaza visual

Output target:
- one single independent sticker asset
- final filename: sticker-cta-搭上就走.png

Style:
- warm orange as anchor
- cream / cocoa brown / soft lavender / blue-gray as secondary support
- rounded, polished, slightly tilted, direct and energetic
- youthful campus social tone, not childish, not salesy

Text:
- primary Chinese text: 搭上就走
- optional decorative English accent: go with it

Execution constraints:
- only one sticker in the image
- no neighboring stickers
- no sheet title
- no category header
- no board layout
- leave clean margin around the sticker
```

### P0-02 `sticker-badge-齐了出发.png`

```text
Create one single reusable badge sticker for Meetu.

VISUAL INPUT:
- one approved brand color guide image
- one approved typography/component guide image
- one approved existing Meetu hero or plaza visual

Output target:
- one single independent badge asset
- final filename: sticker-badge-齐了出发.png

Style:
- warm, exciting, ready-to-go
- orange / cream / cocoa
- can include tiny celebratory dots or motion accents
- should feel like a group is formed and ready to start

Text:
- primary Chinese text: 齐了出发
- optional decorative English accent: ready to go

Execution constraints:
- one badge only
- no board, no sample layout, no extra UI framing
```

### P0-03 `sticker-badge-放心来.png`

```text
Create one single reusable trust badge for Meetu.

VISUAL INPUT:
- one approved brand color guide image
- one approved typography/component guide image
- one approved existing Meetu trust-oriented page visual

Output target:
- one single independent trust badge
- final filename: sticker-badge-放心来.png

Style:
- warm, calm, trustworthy
- orange anchor with cream and soft blue-gray balance
- should feel welcoming rather than authoritative

Text:
- primary Chinese text: 放心来
- optional decorative English accent: trust comes first

Execution constraints:
- one badge only
- no sheet view, no neighboring elements
```

### P0-04 `sticker-badge-搭子认证.png`

```text
Create one single reusable verification badge for Meetu.

VISUAL INPUT:
- one approved brand color guide image
- one approved typography/component guide image
- one approved platform-intro visual

Output target:
- one single independent badge
- final filename: sticker-badge-搭子认证.png

Style:
- clear and reliable
- not governmental, not fintech, not enterprise
- should belong to a student activity-buddy social platform

Text:
- primary Chinese text: 搭子认证
- optional decorative English accent: verified

Execution constraints:
- one badge only
- no extra icons around it unless they are part of the badge itself
```

### P0-05 `sticker-bubble-出发时间.png`

```text
Create one single reusable speech-bubble / info-bubble sticker for Meetu.

VISUAL INPUT:
- one approved brand color guide image
- one approved component guide image
- one approved existing event-page visual

Output target:
- one single independent info bubble
- final filename: sticker-bubble-出发时间.png

Style:
- light, clean, easy to drop into a card or hero collage
- should feel like useful event information, not chat-app UI

Text:
- primary Chinese text: 出发时间
- optional micro accent: know before you go

Execution constraints:
- one bubble only
- no neighboring labels
- no board composition
```

### P0-06 `sticker-route-clear-price-easy-call.png`

```text
Create one single reusable route-label decoration for Meetu pricing pages.

VISUAL INPUT:
- one approved brand color guide image
- one approved pricing / trust page visual
- one approved component guide image

Output target:
- one independent route label asset
- final filename: sticker-route-clear-price-easy-call.png

Style:
- pricing / rules explanation oriented
- soft blue-gray + cream with controlled warm orange accent
- editorial route-line language, not corporate UI

Text:
- primary Chinese text: 费用透明
- secondary decorative English accent: clear price / easy call

Execution constraints:
- one route label only
- no surrounding toolkit elements
- can include line / nodes if they belong to the same one asset
```

### P0-07 `mascot-欢迎招手.png`

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate one welcome / waving mascot asset.

VISUAL INPUT:
- the officially approved Meetu mascot master PNG
- one approved mascot sticker-sheet reference image
- another approved mascot sticker-sheet reference image

Output target:
- one single mascot asset
- final filename: mascot-欢迎招手.png

Character rules:
- preserve the exact character identity from the approved mascot master
- keep the approved white body, brown facial mask, orange scarf, and approved two-piece puzzle logic
- do not redesign proportions

Pose:
- one hand raised
- open welcoming posture
- suitable for onboarding and welcome sections

Execution constraints:
- one mascot only
- clean background or transparent-friendly composition
```

### P0-08 `mascot-举牌引导.png`

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate one sign-holding guide mascot asset.

VISUAL INPUT:
- the officially approved Meetu mascot master PNG
- one approved mascot sticker-sheet reference image
- another approved mascot sticker-sheet reference image

Output target:
- one single mascot asset
- final filename: mascot-举牌引导.png

Character rules:
- preserve the exact official mascot identity
- no redesign, no costume change, no extra puzzle count

Pose:
- holding a rounded sign / card
- friendly guide posture
- suitable for CTA / explanation / rule pages

Execution constraints:
- one mascot only
- clean background
```

### P0-09 `mascot-齐了庆祝.png`

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate one celebration mascot asset for “齐了，出发”.

VISUAL INPUT:
- the officially approved Meetu mascot master PNG
- one approved mascot sticker-sheet reference image
- another approved mascot sticker-sheet reference image

Output target:
- one single mascot asset
- final filename: mascot-齐了庆祝.png

Character rules:
- exact approved character identity
- keep the approved two-piece puzzle logic

Pose:
- celebratory
- energetic but still clean and brand-safe
- should feel like the group is formed and ready to go

Execution constraints:
- one mascot only
- background clean
```

### P0-10 `mascot-温和提醒.png`

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate one gentle reminder mascot asset.

VISUAL INPUT:
- the officially approved Meetu mascot master PNG
- one approved mascot sticker-sheet reference image
- another approved mascot sticker-sheet reference image

Output target:
- one single mascot asset
- final filename: mascot-温和提醒.png

Character rules:
- exact approved mascot identity
- no redesign

Pose:
- pointing to side or downward
- calm, helpful, low-pressure
- suitable for pricing, FAQ, and rule explanation

Execution constraints:
- one mascot only
- clean background
```

---

## 四、P1 Prompt

### P1-01 `kv-主理人招募主视觉.png`

```text
Create one hero-quality key visual for Meetu host recruitment.

VISUAL INPUT:
- one approved brand color guide image
- one approved host-related existing visual
- one approved component / typography guide image

Output target:
- one independent hero asset
- final filename: kv-主理人招募主视觉.png

Goal:
- make a student feel “做主理人很酷”
- activity organizer energy
- high-finish editorial poster feeling

Style:
- warm orange / cream / cocoa
- campus, visible, social, active
- no nightclub feel
- no generic corporate poster feel
```

### P1-02 `kv-女生专场主视觉.png`

```text
Create one hero-quality key visual for Meetu girls-only events.

VISUAL INPUT:
- one approved brand color guide image
- one approved girls-only / trust-related existing visual
- one approved typography / component guide image

Output target:
- one independent hero asset
- final filename: kv-女生专场主视觉.png

Goal:
- make female students feel safe, relaxed, and willing to join

Style:
- soft but not weak
- lavender / cream / blush with warm orange anchor
- editorial, low-pressure, trustworthy
- no generic picnic-template feeling
```

---

## 五、P2 Prompt

### P2-01 `scene-平台介绍生活方式拼贴.png`

```text
Create one lifestyle visual collage for Meetu platform introduction pages.

VISUAL INPUT:
- one approved brand color guide image
- one approved existing plaza / banner visual
- one approved typography / component guide image

Output target:
- one independent scene asset
- final filename: scene-平台介绍生活方式拼贴.png

Goal:
- show different kinds of interesting campus social moments
- support the feeling “刷到想去的活动，搭上就走”

Style:
- youth editorial collage
- campus social life
- not marketplace collage, not business infographic
```

### P2-02 `scene-收费说明规则透明视觉.png`

```text
Create one trust-oriented visual for Meetu pricing and rule explanation pages.

VISUAL INPUT:
- one approved brand color guide image
- one approved pricing / trust page visual
- one approved typography / component guide image

Output target:
- one independent scene asset
- final filename: scene-收费说明规则透明视觉.png

Goal:
- support the feeling that pricing is clear, rules are visible, and the platform is not trying to trick the user

Style:
- UI evidence + graphic explanation hybrid
- warm orange, cream, cocoa, muted system tones
- clear, transparent, stylish, low-pressure
```

---

## 六、执行顺序

### 第一轮先做

1. `sticker-cta-搭上就走.png`
2. `sticker-badge-齐了出发.png`
3. `sticker-badge-放心来.png`
4. `sticker-badge-搭子认证.png`
5. `sticker-bubble-出发时间.png`
6. `sticker-route-clear-price-easy-call.png`
7. `mascot-欢迎招手.png`
8. `mascot-举牌引导.png`
9. `mascot-齐了庆祝.png`
10. `mascot-温和提醒.png`

### 第二轮再做

11. `kv-主理人招募主视觉.png`
12. `kv-女生专场主视觉.png`

### 第三轮补齐

13. `scene-平台介绍生活方式拼贴.png`
14. `scene-收费说明规则透明视觉.png`

---

## 七、替换说明

- 旧的 `stickers-selected-v1/` 只是一轮中间筛选库，不再作为正式生产路径保留
- 后续 sticker / badge / bubble / route 资产，全部按本文件的一条一图方式直出
- 每次产出后，将通过 QA 的成品再进入正式视觉资产库
