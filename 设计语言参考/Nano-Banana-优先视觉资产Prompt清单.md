# 觅遇社 Nano Banana 视觉资产 Prompt 清单

> 目标：把当前需要生成的视觉资产按优先级排清楚，并改成「**一个 prompt = 一个具体资产文件**」的执行方式。  
> 适用：Nano Banana 或其他外部生图平台。  
> 原则：中文为主、英文仅少量装饰；PNG-first；每条 prompt 都对应一个最终文件。Sticker 仍按整组同图生成，但必须明确板式规则，不能挤在一起。

---

## 一、统一执行原则

### 1. 生产模型

- 必须采用 `reference PNG + prompt` 的方式执行
- 不允许只靠文字重新想象 `觅遇仔`
- sticker / badge / bubble / route 这类元素，改为一条 prompt 生成一张 **结构化 sticker board**
- 每张 sticker board 只使用 `3x3` 或 `4x4` 排布
- 每个 sticker 之间必须预留 **100px** 以上间距
- 不允许 category headers / sample board titles / 邻近元素污染 crop 区

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
| P0 | `sticker-pack-01-行动与信任标签.png` | sticker board | CMS / Banner / Post |
| P0 | `sticker-pack-02-信息与路径装饰.png` | sticker board | pricing / guide / trust |
| P0 | `mascot-欢迎招手.png` | mascot variant | onboarding / welcome |
| P0 | `mascot-举牌引导.png` | mascot variant | CTA / guide / explainer |
| P0 | `mascot-齐了庆祝.png` | mascot variant | success state / 齐了 |
| P0 | `mascot-温和提醒.png` | mascot variant | pricing / FAQ / rule pages |
| P1 | `kv-主理人招募主视觉.png` | hero KV | host recruitment page |
| P1 | `kv-女生专场主视觉.png` | hero KV | girls-only page |
| P1 | `scene-B页九类活动总览图.png` | category scene board | platform intro |
| P2 | `scene-平台介绍生活方式拼贴.png` | lifestyle scene | platform intro |
| P2 | `scene-收费说明规则透明视觉.png` | trust scene | pricing / rules |

---

## 三、P0 Prompt

### P0-01 `sticker-pack-01-行动与信任标签.png`

```text
Create one reusable sticker board for Meetu, focused on action / trust / CTA language.

VISUAL INPUT:
- one approved brand color guide image
- one approved typography/component guide image
- one approved existing Meetu hero or plaza visual

Output target:
- one finished sticker board image
- final filename: sticker-pack-01-行动与信任标签.png

Style:
- warm orange as anchor
- cream / cocoa brown / soft lavender / blue-gray as secondary support
- rounded, polished, slightly tilted, direct and energetic
- youthful campus social tone, not childish, not salesy

Sticker set:
- 搭上就走
- 齐了出发
- 放心来
- 搭子认证
- 费用透明
- 一起搞一场
- 主理人带搭
- 真的好玩
- 这场齐了

Execution constraints:
- arrange stickers in either a 3x3 or 4x4 board
- keep at least 100px empty spacing between every sticker
- each sticker must stand alone cleanly for later crop
- no sheet title
- no category header
- no framing UI, no sample-device mockup
- keep clean margin around the whole board
```

### P0-02 `sticker-pack-02-信息与路径装饰.png`

```text
Create one reusable sticker board for Meetu, focused on info / bubble / route / rule-support elements.

VISUAL INPUT:
- one approved brand color guide image
- one approved typography/component guide image
- one approved existing Meetu trust or pricing visual

Output target:
- one finished sticker board image
- final filename: sticker-pack-02-信息与路径装饰.png

Style:
- pricing / rules / guidance oriented
- soft blue-gray + cream with controlled warm orange accent
- editorial route-line language, not corporate UI
- should feel useful, clear, and easy to drop into CMS pages

Sticker set:
- 出发时间
- 集合地点
- 规则先看
- 看完再搭
- 清楚再搭
- 安心出发
- 费用透明
- 放心搭上
- 路径 / 节点型装饰贴

Execution constraints:
- arrange stickers in either a 3x3 or 4x4 board
- keep at least 100px empty spacing between every sticker
- each sticker must stand alone cleanly for later crop
- no sheet title
- no category header
- no surrounding toolkit text
- no phone mockup
```

### P0-03 `mascot-欢迎招手.png`

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

### P0-04 `mascot-举牌引导.png`

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

### P0-05 `mascot-齐了庆祝.png`

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

### P0-06 `mascot-温和提醒.png`

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

### P1-03 `scene-B页九类活动总览图.png`

```text
Create one single finished visual board for the Meetu platform-introduction page that replaces the current 9-category CSS grid.

VISUAL INPUT:
- one approved brand color guide image
- one approved existing Meetu platform-intro visual
- one approved typography / component guide image
- one approved existing activity-related hero or plaza visual

Output target:
- one independent finished scene board asset
- final filename: scene-B页九类活动总览图.png

Goal:
- show all 9 activity types in one visually organized image
- replace fragile HTML grid rendering in WeChat CMS with one stable image asset
- help users understand breadth of activity choices within 3 seconds

Required categories to include in Chinese:
- 桌游·推理
- 密室·剧本杀
- 派对·社交
- 运动·户外
- City Walk
- 学习·搭伴
- 观影·展览
- 交流·分享
- 惊喜·随机

Text direction:
- Chinese is primary
- English may appear only as tiny decorative accents, not as main labels

Style:
- a polished editorial board, not an e-commerce category grid
- warm orange / cream / cocoa as the main palette
- youthful, campus, social, trustworthy
- use icons / badges / stickers / route accents / cutout shapes as supporting decoration
- do not use app screenshots
- do not use generic stock-photo collage
- do not look childish or nightlife-coded

Layout requirements:
- 9 categories must all be visible in one finished composition
- hierarchy should be clear, but not mechanically uniform
- at least 1-2 categories can be visually emphasized to avoid dead grid feeling
- spacing and grouping should remain readable on a phone screen
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
13. `scene-B页九类活动总览图.png`

### 第三轮补齐

14. `scene-平台介绍生活方式拼贴.png`
15. `scene-收费说明规则透明视觉.png`

---

## 七、替换说明

- 旧的 `stickers-selected-v1/` 只是一轮中间筛选库，不再作为正式生产路径保留
- 后续 sticker / badge / bubble / route 资产，全部按本文件的一条一图方式直出
- 每次产出后，将通过 QA 的成品再进入正式视觉资产库
