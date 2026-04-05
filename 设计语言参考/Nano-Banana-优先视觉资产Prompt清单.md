# 觅遇社 Nano Banana 优先视觉资产 Prompt 清单

> 用途：补齐当前高优先级但仍欠缺的视觉资产，并把对应的 Nano Banana 生图 prompt 固化下来，便于后续持续复用与迭代。
> 说明：本文件按“跨平台可复用”的标准书写，不依赖本地 Markdown 文件名；所有要求都直接写成文字，执行时只需准备对应参考图。

---

## 一、当前结论

### PM 确认的优先级

| 优先级 | 资产组 | 原因 |
|------|------|------|
| P0 | UI sticker pack | Jonathan 最明确的要求之一：不要只堆图片，要有装饰系统与页面设计感 |
| P0 | 觅遇仔变体实装组 | 品牌资产复用基础，后续 CMS / Banner / H5 / Post 都会调用 |
| P1 | 主理人招募 KV 变体组 | 高频核心触点，现有可用主视觉仍偏少 |
| P1 | 女生专场专属场景组 | 需要独立气质，不能用 generic 活动图硬套 |
| P2 | 平台介绍 lifestyle 场景组 | 当前有欢迎图与 UI 图兜底，可稍后补齐 |
| P2 | 活动收费 / 规则信任视觉组 | 当前可以先用 UI 截图 + 装饰元素支撑 |

### 设计侧建议的执行顺序

1. `UI sticker pack`
2. `觅遇仔变体实装组`
3. `主理人招募 KV 变体组`
4. `女生专场专属场景组`
5. `平台介绍 lifestyle 场景组`
6. `活动收费 / 规则信任视觉组`

---

## 二、统一生图原则

- 优先服务实际页面 / Banner / H5 / Post 场景，不做泛泛“好看图”
- 风格基线：年轻、校园、轻松、可信；不走夜店化 / 过度商业化 / 通用 stock 广告风
- 品牌名称固定使用：`觅遇社` / `Meetu`
- 语言体系基线：优先使用已确认的搭子文化表达，例如 `搭上`、`齐了`、`主理人`，避免生硬、说教或商务感词汇
- 视觉资产中的文字内容以中文为主，英文仅用于少量装饰性点缀，不能反客为主
- 不走 generic stock photo 路线
- 优先 illustrated / hybrid graphic-ad / editorial collage / stylized UI-visual route
- Sticker / badge / bubble / route 这类小资产，不再走“大图整板生成后再 crop”的路线；默认按“**一个元素 = 一个独立 prompt = 一个独立输出文件**”执行
- 输出时默认考虑后续可以直接落到：Banner / H5 hero / 卡片 / sticker / badge
- 若用到 mascot，必须以官方批准的 `觅遇仔` master PNG 为唯一权威源，不允许靠文字重新想象角色

---

## 三、P0 资产组

### 1. UI Sticker Pack

#### 目标

补齐 CMS / H5 / Banner / 海报里最缺的“装饰层材料”，避免页面只能靠照片和文字撑设计感。

#### 建议产出子集

- tilted badges
- route dots / path stickers
- trust labels
- CTA tags
- issue / solve labels
- note bubbles
- corner tape / paper tags
- soft badge capsules

#### Prompt 01：品牌贴纸单元素模板（通用装饰类）

```text
Create one single reusable sticker element for Meetu, not a whole sheet. The output must contain only one independent sticker / badge / bubble / route element on a clean transparent-friendly or clean light background.

VISUAL INPUT (must be provided alongside this prompt):
- one approved brand color / typography guide image
- one approved existing hero or plaza visual that represents the current Meetu art direction
- one approved UI component guide image

The output visual style must be compatible with these existing brand assets.

Style:
- youthful campus social platform
- warm orange as anchor, with cream, blush pink, soft lavender, cocoa brown, and subtle blue-gray or warm purple accents
- editorial collage + UI sticker language
- rounded corners, thick outlines, tilted labels, capsule tags, speech bubbles, paper tape, route dots, hand-placed graphic elements
- polished, premium, not childish, not cartoon-baby style
- the sticker system should feel like it belongs to a "搭子" (activity buddy) social context — casual, group-oriented, activity-driven, not dating or 1v1 messaging
- include a subtle sense of movement and connection, like people going from stranger to buddy, using route lines, dots, arrows, bridge-like linking shapes, or connection markers

Text direction:
- Chinese micro-copy should be primary and appear first, for example:
  "搭上就走"
  "齐了出发"
  "放心来"
  "真的好玩"
  "一起搞一场"
  "搭子认证"
- English micro-copy should only be used as a secondary decorative accent, for example:
  "Nice to Meetu"
  "trust comes first"
  "go with it"
  "see / trust / join"
  "rules first"
  "host energy"
- Keep text short, graphic, decorative, and highly legible

Execution mode:
- Generate only one element per run
- Do not compose multiple stickers into one board
- Leave enough clean margin around the element
- Do not include category headers, surrounding sample elements, sheet labels, or framing guides

Element slot to generate in this run:
[fill one only, for example: tilted badge / capsule trust tag / speech bubble / route strip / mini CTA label / paper tape / note label]

Primary copy to generate in this run:
[fill one only, for example: 搭上就走]

Secondary decorative accent if needed:
[optional, for example: Nice to Meetu]

Design intent:
This is not a poster and not a full sticker sheet. It is one reusable brand decoration unit. The single output should feel finished enough to be dropped directly into a page.

Output:
one high-resolution single sticker asset, clean and directly reusable.
```

#### Prompt 02：规则 / 信任 / 收费说明单元素模板

```text
Create one single reusable UI decoration element for Meetu focused on pricing, trust, and rule explanation pages. Do not create a full sheet. Output only one independent label / badge / bubble / route element.

VISUAL INPUT (must be provided alongside this prompt):
- one approved brand color / typography guide image
- one approved existing hero or plaza visual that represents the current Meetu art direction
- one approved UI component guide image

The output must look compatible with the existing Meetu UI system, current nanobanana-derived assets, and pricing / trust page usage.

Visual language:
- same Meetu sticker system
- more clarity-oriented and system-like than playful
- warm orange + cocoa + cream, with controlled use of muted blue-gray for rule clarity
- still youthful and stylish, not corporate FAQ style

Need:
- short path labels
- tilted trust badges
- rule stickers
- small explanatory tags
- CTA-adjacent micro labels

Possible copy fragments to embed:
- Chinese should be primary:
  "放心搭上"
  "费用透明"
  "齐了出发"
  "规则讲清"
  "先看再搭"
- English should only be a secondary accent:
  "clear price / easy call"
  "no hidden cost"
  "rules first / then relax"
  "see it / trust it / join it"
  "know before you go"
  "all clear"

Execution mode:
- Generate only one element per run
- Leave clean space around the element
- Do not generate neighboring stickers, sheet titles, category labels, or sample boards

Element slot to generate in this run:
[fill one only, for example: trust badge / pricing bubble / route label / rule tag / CTA-adjacent note]

Primary copy to generate in this run:
[fill one only, for example: 费用透明]

Secondary decorative accent if needed:
[optional, for example: no hidden cost]

The output should feel like a direct-use trust / pricing decoration unit for a real page, not a toolkit preview sheet.
```

---

### 2. 觅遇仔变体实装组

#### 目标

把 `觅遇仔` 从“标准姿态 master”推进到真正可实装的页面 / 系统 / Banner 场景变体。

#### 建议第一批

- 欢迎 / 招手
- 举牌 / 引导
- 庆祝 / 齐了
- 温和提醒 / 看说明

#### Prompt 03：欢迎 / 招手版

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate a new mascot variant for onboarding and welcome scenarios.

VISUAL INPUT (must be provided alongside this prompt):
- primary reference: the officially approved Meetu mascot master PNG
- style reference 1: an approved sticker-sheet image showing the mascot in expressive poses
- style reference 2: another approved sticker-sheet image showing the mascot in expressive poses

The output MUST preserve the exact character identity from the primary reference. Style references show the approved rendering style for variant poses.

Character constraints:
- must preserve the exact approved Meetu mascot identity from the original PNG master
- do not redesign the body, face, mask, scarf, or the approved two-piece puzzle logic from the official master
- compact cute proportions, thick outline, clean shape
- same white body, brown facial mask, orange scarf

Pose:
- one hand raised in a friendly wave
- open, welcoming posture
- cheerful but not childish

Scene style:
- transparent or clean simple background
- suitable for dropping into a mobile content page or onboarding banner
- include subtle floating UI or activity hint elements around the mascot: small stars, dots, or mini social icons

Output:
single mascot asset, clean and reusable, facing forward or three-quarter view, high resolution.

Will be used in: onboarding pages, welcome banners, first-time user screens.
```

#### Prompt 04：举牌 / 引导版

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate a sign-holding guide variant for content pages and CTA sections.

VISUAL INPUT (must be provided alongside this prompt):
- primary reference: the officially approved Meetu mascot master PNG
- style reference 1: an approved sticker-sheet image showing the mascot in expressive poses
- style reference 2: another approved sticker-sheet image showing the mascot in expressive poses

The output MUST preserve the exact character identity from the primary reference. Style references show the approved rendering style for variant poses.

Character constraints:
- preserve the approved mascot exactly
- same body, face, scarf, and approved two-piece puzzle identity

Pose:
- mascot holding a rounded signboard or paper card
- signboard should look like it can later hold UI copy or CTA text
- friendly “let me show you” posture

Visual language:
- warm orange / cream / cocoa palette
- thick outline, polished sticker-like design
- not babyish, not generic AI mascot style

Output:
single reusable mascot asset, transparent-friendly composition, high resolution.

Will be used in: CTA sections, rule explanation cards, pricing modules.
```

#### Prompt 05：庆祝 / 齐了版

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate a celebration variant for “齐了”, success, completion, and launch-moment scenarios.

VISUAL INPUT (must be provided alongside this prompt):
- primary reference: the officially approved Meetu mascot master PNG
- style reference 1: an approved sticker-sheet image showing the mascot in expressive poses
- style reference 2: another approved sticker-sheet image showing the mascot in expressive poses

The output MUST preserve the exact character identity from the primary reference. Style references show the approved rendering style for variant poses.

Character constraints:
- exact same mascot identity
- no redesign, no extra puzzle count changes; keep the approved two-piece puzzle logic exactly

Pose:
- excited celebratory motion
- one arm up or both arms lifted
- expressive but still clean and brand-safe

Environment accents:
- confetti, dots, stars, tiny spark elements
- can include subtle activity icons or rounded celebration shapes
- should feel like “齐了，出发” — the group is formed, everyone is ready, and the activity is about to begin

Output:
single mascot success asset, suitable for banners, cards, and milestone modules.

Will be used in: success states, “齐了” notifications, group-formed confirmations.
```

#### Prompt 06：温和提醒 / 看说明版

```text
Using the official Meetu mascot 觅遇仔 as the exact character reference, generate a gentle reminder variant for pricing, rules, FAQ, and trust sections.

VISUAL INPUT (must be provided alongside this prompt):
- primary reference: the officially approved Meetu mascot master PNG
- style reference 1: an approved sticker-sheet image showing the mascot in expressive poses
- style reference 2: another approved sticker-sheet image showing the mascot in expressive poses

The output MUST preserve the exact character identity from the primary reference. Style references show the approved rendering style for variant poses.

Character constraints:
- preserve mascot identity exactly
- same approved visual structure and approved two-piece puzzle logic

Pose:
- pointing to the side or downward toward information
- patient, calm, slightly helpful expression
- should feel like “let me explain this clearly”, not authority or warning

Visual style:
- clean, low-pressure, soft orange and cream palette
- polished sticker / editorial helper asset

Output:
single reusable mascot helper asset, for trust and explanation modules.

Will be used in: FAQ sections, pricing explanation, rule pages.
```

---

## 四、P1 资产组

### 3. 主理人招募 KV 变体组

#### 目标

增强“做主理人很酷”的第一眼主视觉，不只停在说明页信息组织。

#### Prompt 07：主理人招募主 KV

```text
Create a hero-quality visual key art for Meetu host recruitment.

Purpose:
This is not a generic social poster. It should make a university student feel that being a Meetu host is cool, active, visible, and worth trying.

Visual direction:
- campus editorial poster meets recruitment campaign
- warm orange, cocoa brown, cream, hints of pink and soft purple
- bold composition, magazine-cover energy
- use real Meetu brand atmosphere, not nightclub / luxury / cyberpunk

Scene:
- a university-age organizer figure in the center or dominant side, holding a phone, board, clipboard, mic, or event sheet
- around them, traces of activities being organized: route note, attendee list, badges, mini activity snapshots, sticky labels
- should feel like “I can make things happen”

Important:
- premium art direction
- designed for cropping into H5 hero, recruitment banner, and poster cover
- typography space should remain usable, but the image itself already carries identity and ambition
```

---

### 4. 女生专场专属场景组

#### 目标

建立女生专场自己的气质，不是 generic picnic 图，不是廉价“girls only”模板。

#### Prompt 08：女生专场主视觉

```text
Create a premium hero visual for Meetu girls-only events.

Goal:
Make female students feel safe, relaxed, and willing to join, without using generic stock-photo picnic aesthetics.

Visual direction:
- soft but not weak
- warm lavender, cream, muted blush, cocoa accents, small warm orange brand anchors
- editorial, low-pressure, trust-building
- more like a carefully art-directed youth lifestyle page than a generic event poster

Scene:
- female-friendly low-pressure activity atmosphere
- intimate but casual social distance
- can combine 2 to 3 visual fragments instead of one obvious “group photo”
- examples: walking together, looking at small objects together, quiet pre-activity preparation, relaxed side-by-side conversation, event materials on a blanket or table, hand-level details, partial people framing

Important:
- avoid cliché picnic template imagery
- avoid “beauty ad” / “fashion lookbook” feel
- should feel like “less pressure, easier to go”
- leave enough negative space for later CMS text integration
```

---

## 五、P2 资产组

### 5. 平台介绍 Lifestyle 场景组

#### Prompt 09：平台介绍多场景生活方式图

```text
Create a lifestyle visual collage for Meetu platform-intro pages.

Goal:
Show that this is a platform where different kinds of interesting campus social moments can happen, not a single-category app.

Visual direction:
- youth editorial collage
- warm, light, campus, social
- blend real activity mood with graphic layout thinking

Need to cover:
- board game / reasoning
- sports / outdoor
- city walk
- exhibition / sharing / light social

The image should feel like “a page from a lifestyle magazine for young people who actually go out and do things.”

Avoid:
- business infographic feel
- generic app-ad stock collage
- overly crowded marketplace feel
```

---

### 6. 活动收费 / 规则信任视觉组

#### Prompt 10：规则透明 / 费用清楚视觉图

```text
Create a trust-oriented visual for Meetu pricing and rule explanation pages.

Goal:
Support the feeling that pricing is clear, rules are visible, and the platform is not trying to trick the user.

Visual direction:
- UI evidence + graphic explanation hybrid
- warm orange, cream, cocoa, muted system tones
- clear, transparent, stylish, low-pressure

Scene elements:
- phone UI fragments
- price note card
- activity detail layout snippets
- reassuring explanation elements
- clean labels / tags / route markers

The visual should feel like:
"you can see the price, see the rule, and decide calmly"

Avoid:
- corporate fintech UI
- legal document mood
- exaggerated “secure payment” cliché imagery
```

---

## 六、执行建议

### 第一轮建议先做

1. `UI sticker pack`
2. `觅遇仔变体实装组`

### 第二轮接着做

3. `主理人招募 KV`
4. `女生专场专属场景`

### 第三轮补齐

5. `平台介绍 lifestyle`
6. `活动收费 / 规则信任视觉`

---

## 七、后续衔接方式

- 若直接出图：先按本文件顺序做 P0，再逐组回看是否真的服务当前页面
- 若先做资产库：每产出 1 组，就同步记录“可用于哪些页面 / 哪些模块 / 哪些裁切比例”
- 若进入 CMS / Banner / 海报实装：优先从本文件调用，不再每次从零想 prompt
