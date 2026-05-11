# vNext Visual Direction v8 (v5.1 base + David 8 patches + 纯白统一底)

**作者**: Phoebe2
**时间**: 2026-05-11 22:55
**触发**: David 22:36 + 22:46 + Fiona 22:43 + 22:47 — v6/v7 走偏作废, v8 = v5.1 (`c5f1800`) base + 8 patches + 底色锁定纯白
**输入 SoT**: visual-direction-v5.md (commit `c5f1800` v5.1 版本) + David 21:33 8 patches + 22:46 底色 = 纯白
**红线**: 0 image2 / 0 生图 / 先文本 / **基础 = v5.1, 废弃 v6/v7 路径** / 不切独立卡 / 统一画面 contact sheet / 底色锁纯白

---

## §0 v8 一屏

**基础**: v5.1 (`c5f1800`) — 横排 5 角色统一画面 contact sheet (2700×1080), 不切 5 色独立卡。

**底色**: **纯白 `#FFFFFF` 统一全图** (David 22:46 锁), 5 角色在同一白底画面内各自定位; 不再考虑 α/β 鲜艳底色方案 (待角色定稿后另议)。

**画法**: 粗糙手绘 marker outline (charcoal-dark-brown `#1A1715`, 3-5px 不规则, marker ink bleed + rough hand-drawn quality), 简化大块面 (D panel 笔触最糙, 删细密眉毛/肌肉/写实毛发), 全图统一手写歪斜字体。

**字体**: allowed tokens (全手写歪曲): `ZZZ` `DDL` `404` `1%` `???` `!!!` — 不进中文, 不进其他英文词。

**色彩 (纯白底版本特殊处理)**: 鲜艳由**每角色的"刺色"小面积承担** (荧光绿 / 电蓝 / 橘红 / 亮黄 / 多巴胺粉等高存在感小面积), 而非底色。每角色 1 个刺色 (D 是双刺色场: 荧光绿 + 电蓝)。

---

## §1 v5.1 → v8 删除 (per David #5 干净 + #4 元素 + Fiona 22:43)

- ❌ 所有 riso 套色错位 (1-2px / 2-3px)
- ❌ Halftone dot grain 颗粒
- ❌ Aged-paper grain texture
- ❌ paper-white `#F8F4ED` 旧纸感 (改纯白 `#FFFFFF`)
- ❌ 便签纸 / 透明胶 / 胶带边
- ❌ "hand-cut taped panel placement" 手贴定位感
- ❌ A 章鱼喷墨/汗滴/荧光黄破绽 (改 8 腿硬撑)
- ❌ D 猴打字机 / vest / socks / 反穿 / mismatched / 键飞 / 失衡双眼 / 不对称双眉 / wavy 嘴
- ❌ E 刺猬橘红批注 / 划痕 / `?` `!` 边注 (保留半蜷+刺+虚线圈)
- ❌ v5.1 字体白名单中的 `offline` `loading` `ESC` `!@#` 等; 改为 6 token 白名单
- ❌ pixel-y monospace 风格 / terminal 字体 / 印刷体

---

## §2 v5.1 → v8 改写 (per David 4 风格调整)

| 维度 | v5.1 | v8 |
| --- | --- | --- |
| 背景 | paper-white `#F8F4ED` + aged-paper grain + 便签胶带 | **纯白 `#FFFFFF` 统一全图** (无纹理无渐变) |
| 笔触 | irregular 1.5-2.5px | irregular 3-4px (D 4-5px), 更粗糙更少细节 |
| 字体 | wobbly + monospace 混搭 (`offline` 等) | **全图统一 wobbly hand-written** |
| 文字白名单 | 8 token (`1%`/`404`/`DDL`/`offline`/`ZZZ`/`!@#`/`?`/`!`) | **6 token** (`ZZZ`/`DDL`/`404`/`1%`/`???`/`!!!`) — 不进中文 |
| Color | 单 accent | **每角色 1 刺色** (D 双刺色), 鲜艳由刺色承担 |
| Riso 错位 | 1-2px / 2-3px | **删除** (统一干净底, 无 riso) |

---

## §3 v8 5 角色 panel 元素 (在统一白画面内)

### A 嘴硬章鱼 (panel 1, 左)
- **主体**: 章鱼, 浅米/cream off-white 身体 + 粗黑 marker outline 3-4px
- **核心动作**: **8 条腿全部硬撑** — 一些腿撑地 / 一些撑画面边/底框 / 一些相互支撑; **每条腿基部可见 muscle tension lines** (小角形 strain marks)
- **表情**: 嘴是粗短紧闭一字嘴 (one short thick black stroke), 双眼 deadpan dot pupils (small, NOT cute), 双眉 2 简单粗笔皱起
- **刺色**: 荧光绿 `#1FE07B` 在 1-2 处腿与边/底接触点 OR 嘴角 1 小绿火花 — 小面积≤5%
- **删**: 喷墨破绽 / 黄色墨点斑迹 / 流泪 / 流汗 / 大眼 / 文字
- **该 panel 无任何文字**

### B 断电猫 (panel 2)
- **主体**: 猫, 灰白身体 + 粗黑 marker outline 3-4px, **完全瘫平/低电量姿态** (限肢摊开伸展, 不 ball curl)
- **表情**: 半闭眼 deadpan, 嘴 tiny flat horizontal line
- **道具/符号**: 猫上方/旁边漂浮**手写歪斜 `ZZZ`** (大字, drift upward) + **简单 battery icon outline** (一个矩形电池外形) + **手写歪斜 `1%`** 在 battery 旁边
- **刺色**: 亮黄 `#F2EB1B` 在 `ZZZ` 文字 + `1%` 文字 + battery icon — 文字本身就是 spike (小面积≤8%)
- **删**: monospace 风格 / "offline"/"loading"/"ESC" 文字 / spinner 图形 / 电蓝色块 / terminal 风
- 不进中文

### C 躺平树懒 (panel 3)
- **主体**: 树懒, 棕褐身体 + 粗黑 marker outline 3-4px, **sprawl 趴在 blank 草稿纸/笔记本叠** (限肢摊开)
- **表情**: 半闭眼 deadpan
- **道具/符号**: 树懒身边一根**横向 blank 进度条** (粗黑 outline 矩形, ~1% 填充宽度); **进度条上方手写歪斜 `DDL 1%`** + **手写歪斜小箭头**指向进度条 (David 22:36 #2 patch)
- **刺色**: 橘红 `#FF6A3D` 在进度条 1% 填充部分 AND/OR `DDL 1%` 文字+箭头 — 小面积≤7%
- **删**: 咖啡 / 课本 / 旧纸卷边 / 中文 "进度" 字
- 配 1 张 blank 文件夹 line-art

### D 整活吗喽 (panel 4) [David 主 patch 场]
- **主体**: 猴子, 棕色身体 + **特粗黑 marker outline 4-5px** (panel 4 笔触最糙)
- **anatomy**: **极简 flat block 形** — 大圆头 / 简化 muzzle / 大手大脚 / **NO detailed eyebrows / NO muscle lines / NO realistic fur texture / NO anatomical primate detail** (全部 flat block 形 + 黑 outline; 防 v6 显恐怖反馈)
- **姿势**: **静止呆坐放空** (NOT active, NOT off-balance, NOT 整活动作); 一手拿**剥皮香蕉** (黄皮下垂条, 白果肉露出, NOT eating); 另一手放膝/腿
- **抽象状态符号**: **画面周围漂浮 3-5 个手写歪斜小报错弹窗** (小矩形 box 黑 outline, 每 box 内 1 个手写歪 token: `404` / `???` / `!!!` / `1%`); **6-10 个荧光绿 `#1FE07B` + 电蓝 `#1854E0` 飞溅墨点** 散落在猴周围 (像 system glitch 飞出)
- **表情**: blank deadpan, 双眼简单 dot pupils OR small "X" marks (NOT cute, NOT big), 嘴 simple short curve OR tiny "O"
- **刺色**: **dual-spike** — 荧光绿 `#1FE07B` + 电蓝 `#1854E0` 飞溅 (D 双刺色)
- **删**: 打字机 / 键盘 / 衣服 / vest / socks / 反穿 / mismatched / 失衡姿态 / 不对称双眼 / 不对称双眉 / wavy zig-zag 嘴 / 像素抖动方块
- **不进中文**, 不进 "ERROR"/"offline"/"loading" 等长英文词

### E 高情商刺猬 (panel 5, 右)
- **主体**: 刺猬, 浅棕身体 + 粗黑 marker outline 3-4px, **半蜷** (脸 + 一只爪可见, NOT 全 ball)
- **刺**: 清晰**粗黑直立 marker line** (NOT 细密 fine spines, NOT 密毛 texture)
- **道具/符号**: 刺猬周围**虚线椭圆圈** (dashed oval, 表示 "keep distance / 安全距离")
- **表情**: small deadpan dot eyes + **tiny compressed polite mouth line** (barely-there polite smirk, NOT warm, NOT cute, NOT friendly — composure holding back the spines)
- **刺色**: 紫 `#C7A4FF` OR 亮黄 `#F2EB1B` 在虚线圈 outline OR 刺尖 1-2 处小色点 — 小面积≤6%
- **删**: 橘红批注 / 划痕 / `?` `!` 边注 / 便签边 / 注释小符号 / 注释箭头

---

## §4 v8 主 prompt

```
A horizontal 5-character contact sheet (2700×1080), 5 characters arranged
left to right on a UNIFIED CLEAN PURE WHITE BACKGROUND #FFFFFF (one
single white background spanning the entire image, NOT separated into
5 colored panels, NOT solid themeColor cards). Marker ink line work in
charcoal-dark-brown #1A1715, irregular 3-4px weight (4-5px on the
monkey character) with slight ink bleed and rough hand-drawn quality.
Drawing intentionally SIMPLIFIED to flat block shapes with minimal
interior detail — NO detailed eyebrows, NO muscle lines, NO realistic
fur texture, NO fine hatching. NO sticky-note paper texture, NO scotch-
tape edges, NO hand-cut paper edges, NO aged-paper grain, NO halftone
dot grain, NO risograph misregister — clean white background only.
Hand-written wobbly characters only — absolutely NO printed/monospace/
terminal fonts, NO mechanical sans-serif. Allowed text tokens (all in
hand-written wobbly style): "ZZZ", "DDL", "404", "1%", "???", "!!!".
NO Chinese characters anywhere in the image. NO English words other
than the listed tokens. NO long sentences. NO captions. NO logos.

Each character has its own small-area "spike color" accent that
provides emotional punch (≤8% per character, high-saturation).

CHARACTER 1 (left) — A small octopus marker-drawn in charcoal ink
lines, light cream / off-white body. The CRITICAL element: ALL 8
TENTACLES ARE TENSELY BRACING THE OCTOPUS UP — some tentacles push down
against the floor / picture-bottom edge, some prop up the body from the
sides, some interlock for support. Visible muscle tension strain marks
at the base of each tentacle (small angular strain marks) showing they
are all working hard. The pose reads as "stubbornly holding it together,
refusing to give an inch". Face: mouth is a tightly clenched flat
horizontal line (one short thick black stroke, tense and unyielding),
eyes simple deadpan dot pupils (small, NOT cute, NOT big), eyebrows
2 simple rough strokes slightly furrowed. SPIKE COLOR: bright fluorescent
green #1FE07B in 1-2 small spots — at the contact points where tentacles
meet the floor/edges, OR a tiny green spark at the corner of the clenched
mouth. NO ink spurt, NO yellow splash, NO tears, NO sweat — the 8-leg
bracing IS the entire visual statement. NO text near this character.

CHARACTER 2 — A small cat marker-drawn in charcoal ink lines, grey-
white body, lying completely flat / sprawled / "powered down" — NOT
curled into a cute ball, NOT sleeping cute, but distinctly "battery
has died". Limbs limp and stretched. Face: half-closed deadpan eyes,
mouth a tiny flat horizontal line. Floating above or beside the cat:
hand-written wobbly "ZZZ" (large, drifting upward) AND a small simple
battery icon outline (a rectangular battery shape) with hand-written
wobbly "1%" beside it. SPIKE COLOR: bright yellow #F2EB1B for the
"ZZZ" text, "1%" text, and battery icon outline. NO "offline" text,
NO "loading" text, NO "ESC", NO printed monospace font, NO terminal
aesthetic.

CHARACTER 3 — A small sloth marker-drawn in charcoal ink lines, tan-
brown body, sprawled face-down on top of a stack of blank paper notes
/ notebook pages drawn in line-art (NOT curled into a ball, distinctly
different from character 2). All four limbs spread loosely, eyes half-
closed deadpan. Beside the sloth: a horizontal blank progress bar
(thick-black-outlined rectangle, filled only ~1% on the left side).
ABOVE the progress bar, hand-written wobbly text: "DDL 1%" (slightly
tilted, easily readable). A small hand-drawn wobbly arrow points from
the "DDL 1%" text down to the progress bar. SPIKE COLOR: orange-red
#FF6A3D for the 1% fill of the progress bar AND/OR for the "DDL 1%"
text and arrow. Optionally include one open blank file folder sketched
in line-art beside the sloth (no text on the folder). The hand-written
"DDL 1%" annotation IS necessary — without it the progress bar reads
as decorative, not stuck.

CHARACTER 4 — A small monkey marker-drawn in EXTRA-rough thick black
marker outline (4-5px, the roughest character of the five). The monkey
is intentionally SIMPLIFIED to flat block shapes: large round head,
simplified face, big simple hands and feet, NO detailed eyebrows, NO
muscle lines, NO realistic fur texture, NO anatomical primate details
— just flat block shapes with black outline. The monkey sits in a
still, zoned-out, abstract pose (NOT active, NOT off-balance, NOT
doing stunts). One hand holds a banana that is ALREADY PEELED — yellow
peel drooping in visible strips, white banana flesh exposed, NOT being
eaten. The other hand rests casually on knee or lap. The monkey itself
looks LOST IN AN ABSTRACT STATE. Floating around the monkey: 3-5 hand-
written wobbly small error pop-up windows (small rectangular boxes
with thick black outline, each containing ONE short hand-written
wobbly text: "404", "???", "!!!", "1%" — pick a mix of these, all
hand-written tilted style). ALSO: 6-10 small splatters of fluorescent
green #1FE07B and electric blue #1854E0 ink dots scattered around the
monkey, like glitches spilling out of the system. Face: blank
deadpan, eyes simple small dot pupils OR small "X" marks (NOT cute,
NOT big), mouth a simple short curve or tiny "O". SPIKE COLOR: dual-
spike — fluorescent green #1FE07B PLUS electric blue #1854E0
splatters. NO typewriter, NO keyboard, NO clothes, NO vest, NO socks,
NO mismatched outfits.

CHARACTER 5 (right) — A small hedgehog marker-drawn in charcoal ink
lines, tan-cream body. Spines extending outward as clear bold thick
black lines (NOT detailed fine spines, NOT densely-textured fur). The
hedgehog is half-curled — face and one paw visible, NOT fully balled.
Around the hedgehog: a dashed oval line traced on the ground encircling
it (representing "keep distance / don't approach"). Face: small deadpan
dot eyes, mouth is a tiny compressed polite mouth line — barely-there
polite smirk, NOT warm, NOT cute, NOT friendly, just composure holding
back the spines. SPIKE COLOR: light purple #C7A4FF or bright yellow
#F2EB1B for the dashed safety-distance line OR for 1-2 spine tips. NO
note-paper edges, NO sticky-note collage, NO orange-red annotation
marks, NO "?" or "!" symbols anywhere on the hedgehog.

OVERALL — All 5 characters share ONE clean white background with no
panel borders, no gutters, no color block divisions. Characters do not
overlap. Hand-drawn rough internet doodle aesthetic. Hand-written
tilted text only. NO Chinese characters anywhere. NO printed/monospace/
terminal fonts. NO logos, NO watermarks. NO unified yellow filter, NO
sepia, NO warm-cream wash. NO realistic animal anatomy, NO 3D, NO
digital flat vector. NO chibi, NO baby-like big eyes, NO Sanrio sweet,
NO Disney mascot, NO heart eyes, NO sparkles, NO heart-patterns, NO
pink-purple feminine palette overall (the small purple spike on
character 5 is an exception), NO pastel candy colors, NO brand-mascot
polish. NO sticky-note collage, NO transparent tape strips, NO aged
paper texture, NO risograph misregister, NO halftone.
```

---

## §5 v8 Negative prompt

```
NO realistic photographic, NO 3D rendered character, NO hyper-realistic
anatomy, NO digital sleek vector flat, NO smooth anti-aliased perfect
lines, NO clean brand-illustration polish, NO professional poster
aesthetic, NO mascot IP polish. NO chibi, NO baby-like proportions, NO
big glossy cute-mascot eyes, NO heart eyes, NO sparkles, NO painted
blush cheeks, NO heart-pattern clothing, NO Sanrio sweet style, NO
Disney princess style, NO children's-book sweet, NO manga-moe, NO
Japanese kawaii eye style, NO kawaii sticker aesthetic, NO pet sticker
vibe. NO pink-purple feminine palette overall (purple ONLY allowed as
small spike color on character 5). NO 3D soft-candy render, NO mint-
green soft healing aesthetic. NO unified yellow filter / yellow cast /
yellow tint over the whole image, NO sepia tone, NO warm-cream wash,
NO mocha-brown dominant, NO muddy khaki overall, NO golden-hour
lighting. NO solid colored panel backgrounds, NO 5-color block panels,
NO themeColor cards (background must be unified pure white #FFFFFF
across all 5 characters). NO sticky note collage, NO transparent
scotch-tape edges, NO hand-cut paper edges, NO aged paper texture
overlay, NO risograph misregister, NO halftone dot grain. NO printed
text, NO monospace font, NO terminal font, NO mechanical sans-serif
text — ALL text must be wobbly hand-written. NO long English sentences,
NO captions, NO labels. NO Chinese characters anywhere. The ONLY
allowed text tokens (all hand-written and wobbly): "ZZZ" (character
2), "1%" (character 2), "DDL 1%" (character 3), "404" (character 4),
"???" (character 4), "!!!" (character 4), "1%" (character 4 if mixed).
NO other text. NO logos, NO watermarks. NO detailed eyebrows on the
monkey, NO muscle lines on the monkey, NO realistic primate fur, NO
anatomical detail on the monkey — the monkey must be flat-block-shape
simplified or it reads as creepy. NO fine fur texture on any animal.
NO grinning monkey, NO playful active monkey pose, NO off-balance
monkey posture, NO asymmetric monkey eyes, NO keyboard, NO typewriter,
NO clothes on the monkey, NO vest, NO socks, NO mismatched outfits.
NO ball-curl posture for sloth (sloth sprawled flat on paper notes).
NO aggressive hedgehog, NO bared spines, NO angry hedgehog posture.
NO ink spurt on the octopus, NO leaking yellow ink — the octopus'
stubborn-mouth quality must come from 8-leg bracing and tight mouth
line, NOT from ink leaks.
NO orange-red annotation marks on hedgehog. NO party hat, NO clown costume, NO bowtie, NO top-hat.
NO "offline" text, NO "loading" text, NO "ESC" text, NO "ERROR" text
on B or D characters.
```

---

## §6 落库 + 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 22:55 (本文件落库) | v8 spec 落 (基础 = v5.1, 底色 = 纯白) | Phoebe (本条) |
| 等 PM gate | Fiona 审 v8 是否真正基于 v5.1 base + 8 patches + 纯白底 | Fiona |
| PM gate 过 | Fiona 转 David 审 prompt 文本 | Fiona |
| David ack | 1 image2 试金石 (gpt-image-2 micuapi, 累计 44 calls) | Phoebe |

期间 0 image2 / 0 生图 / 不再写新版本.
