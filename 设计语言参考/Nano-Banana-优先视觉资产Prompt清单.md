# 觅遇社 Nano Banana 优先视觉资产 Prompt 清单

> 用途：补齐当前高优先级但仍欠缺的视觉资产，并把对应的 Nano Banana 生图 prompt 固化下来，便于后续持续复用与迭代。
> 来源：`设计语言参考/` 现有内容复盘 + `Common Sense/` 品牌/语言体系 + 2026-04-04 频道打合

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
- 风格基线统一遵循 `Common Sense/品牌共识/品牌标准.md`
- 品牌名称固定使用：`觅遇社` / `Meetu`
- 语言体系固定遵循 `Common Sense/品牌共识/语言体系.md`
- 不走 generic stock photo 路线
- 优先 illustrated / hybrid graphic-ad / editorial collage / stylized UI-visual route
- 输出时默认考虑后续可以裁成：Banner / H5 hero / 卡片 / sticker / badge
- 若用到 mascot，统一以：`设计语言参考/Meetu元素参考/0 Meetu mascot master.png` 为唯一权威源

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

#### Prompt 01：品牌贴纸系统主包

```text
Create a sticker-pack style visual asset sheet for Meetu, designed for later cropping and reuse in mobile H5 pages, CMS subpages, posters, and banners.

Style:
- youthful campus social platform
- warm orange as anchor, with cream, blush pink, soft lavender, cocoa brown, and subtle blue-gray or warm purple accents
- editorial collage + UI sticker language
- rounded corners, thick outlines, tilted labels, capsule tags, speech bubbles, paper tape, route dots, hand-placed graphic elements
- polished, premium, not childish, not cartoon-baby style
- the sticker system should feel like it belongs to a "搭子" (activity buddy) social context — casual, group-oriented, activity-driven, not dating or 1v1 messaging
- include a subtle sense of movement and connection, like people going from stranger to buddy, using route lines, dots, arrows, bridge-like linking shapes, or connection markers

Required asset types in one sheet:
- 6 tilted badges
- 6 capsule trust tags
- 4 speech bubbles
- 4 route / path dot strips
- 4 mini CTA labels
- 4 paper-tape corner tags
- 4 “note” style labels

Text direction:
- Some stickers can contain short English micro-copy like:
  "Nice to Meetu"
  "trust comes first"
  "go with it"
  "see / trust / join"
  "rules first"
  "host energy"
- Keep text short, graphic, decorative, and highly legible

Design intent:
This is not a poster. It is a reusable brand decoration kit. Each item should feel like it belongs to the same visual system.

Output:
one high-resolution asset sheet on a clean light background, ready for cropping.
```

#### Prompt 02：规则 / 信任 / 收费说明标签包

```text
Create a reusable UI decoration sheet for Meetu focused on pricing, trust, and rule explanation pages.

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
"clear price / easy call"
"no hidden cost"
"rules first / then relax"
"see it / trust it / join it"
"know before you go"
"all clear"
"放心搭上"
"费用透明"
"齐了出发"

The sheet should feel like a toolkit for making rule pages look trustworthy and designed, not dry.
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
