# vNext Visual Direction v7.2 (v5-base + David 8 patches, NOT 社交动物测试)

**作者**: Phoebe2
**时间**: 2026-05-11 22:42
**触发**: David 22:36:05 — 我前面 v6 错读, 现纠正: 不参考社交动物测试, **应该在 v5 基础上修改 8 patches**
**输入 SoT**: visual-direction-v5.md (commit `c5f1800`) + David 21:33 8 patches + Fiona 21:35 DM align
**红线**: 0 image2 / 0 生图 / 先文本 / 严守 v5 base 不重写; 仅删 v5 便签/胶带/halftone 层 + 元素 patch

---

## §0 v7.2 = v5 base + 8 targeted patches

### 保留 v5 (核心结构 + 画法)
- ✅ Risograph 套色错位 (1-2px 黑线 vs accent, D panel 2-3px 更甚) — riso 是手绘感关键
- ✅ Marker ink 手绘 (charcoal-dark-brown `#1A1715`, 不规则 weight + ink bleed + rough hand-drawn)
- ✅ 5 panels 横排 contact sheet 结构 (2700×1080)
- ✅ 每 panel 各角色 + accent / spike 色
- ✅ 不萌系/不写实/不 3D/不 chibi/不 Sanrio 等红线

### 删除 v5 (David #5 干净背景)
- ❌ "sticky paper / taped / scanned together" 表述 (便签胶带感)
- ❌ "Halftone dot grain texture overlay"
- ❌ "subtle aged-paper grain texture"
- ❌ "Each character occupies its own slightly-imperfect note panel; panels are not perfectly aligned, suggesting hand-cut and taped placement"
- ❌ "small folded paper note (slightly curling at corners)" (C panel 删纸条卷边)
- ❌ "small note-paper edges visible" (E panel 删便签边)

### 改写 v5 (David 8 patches 内容/风格)

**改 1 (David #5/#6): 背景从纸白底 → 鲜艳干净纯色底**
- v5: "Paper-white background `#F8F4ED` with subtle aged-paper grain"
- v7.2: 5 panels 每 panel 不同**鲜艳干净 solid 底色** (无纹理无渐变), 提供高饱和; 仍保留 marker 手绘动物 + riso 错位

**改 2 (David #6): marker 笔触更糙 + 简化 D anatomy**
- v5: "irregular 1.5-2.5px weight"
- v7.2: "irregular 3-4px weight (D panel 4-5px)" + D panel 强调"flat block-shape simplified anatomy, NO detailed eyebrows, NO muscle lines, NO fine fur"

**改 3 (David #7): 全图统一手写歪曲, 删 monospace 混搭**
- v5: panel 2 用 "pixel-y monospace style" + 允许 "offline" 文字
- v7.2: 全图统一 wobbly hand-written; 删 "offline" / "loading" / "ESC" 等英文长词; allowed tokens 收窄到 7 个: `ZZZ` `1%` `DDL` `404` `???` `!!!` `!`; **不进中文** (Fiona 21:35 align 防乱码)

**改 4 (David #8): 每 panel 加刺色**
- v5: 单 accent 色
- v7.2: 每 panel 1 个**刺色** (高饱和小面积, 互补/冲突感, ≤10% 画面)

**元素 patch 1 (David #1): A 章鱼 8 腿硬撑**
- v5: "8 tentacles extending downward in a stiff posture" + "fluorescent yellow ink-spurt sploch" 喷墨破绽
- v7.2: **8 腿全部硬撑** (一些撑地 / 一些撑边 / 一些撑身体侧) + visible muscle tension lines + 嘴绷紧一字嘴; **删喷墨破绽**, 改荧光绿小刺色在腿与边/底接触点

**元素 patch 2 (David #2): C 进度条标注**
- v5: progress bar + 隐含 "DDL" 字
- v7.2: 进度条**手写歪斜 `DDL 1%`** (Fiona DM 21:35 选英文 token 防中文乱码) + **手写箭头**指向进度条

**元素 patch 3 (David #4): D 删打字机, 抽象状态, 剥皮香蕉, 多报错弹窗 + 荧光绿/电蓝飞溅**
- v5: 反穿 vest + mismatched 袜 + 顶键盘 + 拿香蕉 + 不对称双眼/眉 + wavy 嘴 + 像素抖
- v7.2: **删打字机/键盘/衣服/反穿/失衡姿态/不对称双眼/不对称双眉/wavy 嘴**; 改**呆坐放空** + **剥皮香蕉** (peel drooping, white flesh exposed, NOT eating) + **3-5 个手写报错弹窗** (`404`/`???`/`!!!`/`1%`) + **荧光绿+电蓝飞溅墨点 6-10 个**; 简化 anatomy 防恐怖

**元素 patch 4 (David #2): B 删 monospace + offline**
- v5: panel 2 "offline text in pixel-y monospace style"
- v7.2: 删 "offline" 文字 + 删 monospace; 仅 wobbly hand-written `ZZZ` + `1%`

---

## §1 v7.2 主 prompt (v5-base 直接编辑版)

```
A horizontal 5-panel contact sheet (2700×1080, 5 columns each ~540px),
in a low-fidelity Chinese-college-student doodle illustration aesthetic.
Risograph print aesthetic with slight 1-2px color separation offset
between black ink and accent color layers (more pronounced 2-3px offset
on the monkey panel for glitch effect). Marker ink line work in
charcoal-dark-brown #1A1715, irregular 3-4px weight (4-5px on monkey
panel) with slight ink bleed and rough hand-drawn quality. Each panel
has its own different bright clean solid color background (NO gradients,
NO halftone overlay, NO aged-paper grain, NO sticky-note paper texture,
NO scotch-tape edges, NO hand-cut paper edges — just clean flat vivid
color blocks). Each panel includes ONE small-area "spike color" accent
that provides emotional punch (≤10% panel area, high-saturation,
complementary/contrasting to the background). Hand-written wobbly
characters only — absolutely NO printed/monospace/terminal fonts, NO
mechanical sans-serif. Allowed text tokens (all in hand-written wobbly
style): "ZZZ", "1%", "DDL 1%", "404", "???", "!!!", "!". NO Chinese
characters anywhere in the image. NO English words other than the listed
tokens. NO long sentences. NO captions. NO logos.

PANEL 1 (vivid orange-red #FF6A3D solid background) — A small octopus
marker-drawn in charcoal ink lines, body mostly hollow line-art (no
fill or light cream off-white fill). The CRITICAL element: ALL 8
TENTACLES ARE TENSELY BRACING THE OCTOPUS UP — some tentacles push down
against the floor, some push out against the panel's bottom edge, some
prop up the body from the sides. Visible muscle tension lines at the
base of each tentacle (small angular strain marks) showing they are all
working hard. The pose reads as "stubbornly holding it together,
refusing to give an inch". Face: mouth tightly compressed flat line
(one short thick black stroke), eyes simple deadpan dot pupils (small,
NOT cute, NOT big), eyebrows 2 simple rough strokes slightly furrowed.
SPIKE COLOR: bright fluorescent green #1FE07B in 1-2 small spots — at
the contact points where tentacles meet floor/edges, OR a tiny green
spark at the corner of the compressed mouth. NO ink spurt, NO yellow
splash, NO tears, NO sweat — the 8-leg bracing IS the entire visual
statement. NO text in this panel. Risograph 1-2px misregister between
black line layer and green spike color.

PANEL 2 (vivid electric blue #3D7AE0 solid background) — A small cat
marker-drawn in charcoal ink lines, lying completely flat / sprawled /
"powered down" — NOT curled into a cute ball, NOT sleeping cute, but
distinctly "battery has died". Limbs limp and stretched. Face: half-
closed deadpan eyes, mouth a tiny flat horizontal line. Floating above
or beside the cat: hand-written wobbly "ZZZ" (large, drifting upward)
AND a small simple battery icon outline with hand-written wobbly "1%"
beside it. SPIKE COLOR: bright yellow #F2EB1B for the "ZZZ" text, "1%"
text, and battery icon. NO "offline" text, NO "loading" text, NO "ESC".
NO printed monospace font, NO terminal aesthetic, NO pixel-y rigid
type. Risograph 1-2px misregister between black line layer and yellow
spike.

PANEL 3 (vivid grass green #5FB85C solid background) — A small sloth
marker-drawn in charcoal ink lines, sprawled face-down on top of a
stack of blank paper notes / notebook pages, all four limbs spread
loosely (NOT curled into a ball, distinctly different from panel 2),
eyes half-closed deadpan. Beside the sloth: a horizontal progress bar
drawn as a simple thick-black-outlined rectangle, filled only ~1% on
the left side (Risograph 1-2px misregister makes the 1% fill look
stuck). ABOVE the progress bar, hand-written wobbly text: "DDL 1%"
(slightly tilted, easily readable). A small hand-drawn wobbly arrow
points from the "DDL 1%" text down to the progress bar. SPIKE COLOR:
orange-red #E94B23 for the 1% fill of the progress bar AND/OR for the
"DDL 1%" text and arrow. The hand-written annotation IS necessary —
without it the progress bar reads as decorative, not stuck.

PANEL 4 (vivid bright yellow #FFD93D solid background, glitch / system-
failure aesthetic — D's main field) — A small monkey marker-drawn in
charcoal ink lines with EXTRA-rough thick outline (4-5px). The monkey
is intentionally SIMPLIFIED to flat block shapes: large round head,
simplified face, big simple hands and feet, NO detailed eyebrows, NO
muscle lines, NO realistic fur texture, NO anatomical primate details
— just flat block shapes with black outline. The monkey sits in a
still, zoned-out, abstract pose (NOT active, NOT off-balance, NOT doing
stunts). One hand holds a banana that is ALREADY PEELED — yellow peel
drooping in visible strips, white banana flesh exposed, NOT being
eaten. The other hand rests casually. The monkey itself looks LOST IN
AN ABSTRACT STATE. Floating around the monkey: 3-5 hand-written wobbly
error pop-up windows (small rectangular boxes with thick black outline,
each containing one short hand-written wobbly text: "404", "???",
"!!!", "1%" — pick a mix of these, all hand-written tilted style).
ALSO: 6-10 small splatters of fluorescent green #1FE07B and electric
blue #1854E0 ink dots scattered around the monkey, like glitches
spilling out of the system. Face: blank deadpan, eyes simple small dot
pupils OR small "X" marks (NOT cute, NOT big), mouth a simple short
curve or tiny "O". SPIKE COLOR: dual-spike — fluorescent green #1FE07B
PLUS electric blue #1854E0 splatters. NO typewriter, NO keyboard, NO
clothes, NO vest, NO socks, NO mismatched outfits. Risograph 2-3px
misregister on this panel (more aggressive than other panels), small
pixel jitter blocks may drift around the head.

PANEL 5 (vivid dopamine pink #FF5C8A solid background) — A small
hedgehog marker-drawn in charcoal ink lines, half-curled (face and one
paw visible, NOT fully balled). Spines extending outward as clear bold
thick black lines (NOT detailed fine spines, NOT densely-textured fur).
Around the hedgehog: a dashed oval line traced on the ground encircling
it (representing "keep distance / don't approach"). Face: small deadpan
dot eyes, mouth a tiny compressed polite mouth line — barely-there
polite smirk, NOT warm, NOT cute, NOT friendly, just composure holding
back the spines. SPIKE COLOR: light purple #C7A4FF or bright yellow
#F2EB1B for the dashed safety-distance line OR for 1-2 spine tips. NO
note-paper edges, NO sticky-note collage, NO orange-red annotation
marks (those belong to D's panel). Risograph 1-2px misregister.

OVERALL — Hand-drawn rough internet doodle aesthetic on each panel.
Each character self-contained in its own bright solid-color panel.
Panels sit side-by-side with no visible gutters, sticky-tape edges, or
paper-cut borders — just direct color block transitions. NO sticky note
collage, NO transparent tape strips, NO aged paper texture, NO halftone
dot grain. NO unified yellow filter, NO sepia, NO warm-cream wash, NO
mocha-brown dominant, NO muddy khaki, NO golden-hour lighting. NO
realistic animal anatomy, NO 3D rendering, NO digital flat vector. NO
chibi, NO baby-like big eyes, NO Sanrio sweet, NO Disney mascot, NO
heart eyes, NO sparkles, NO heart-patterns, NO pink-purple feminine
palette overall (pink ONLY in E's specific panel as background), NO
pastel candy colors, NO brand-mascot polish. NO Chinese characters in
image. NO printed/monospace/terminal fonts. NO logos, NO watermarks.
Hand-written tilted text only.
```

---

## §2 v7.2 Negative prompt

```
NO realistic photographic, NO 3D rendered character, NO hyper-realistic
anatomy, NO digital sleek vector flat, NO smooth anti-aliased perfect
lines, NO clean brand-illustration polish, NO professional poster
aesthetic, NO mascot IP polish. NO chibi, NO baby-like proportions, NO
big glossy cute-mascot eyes, NO heart eyes, NO sparkles, NO painted
blush cheeks, NO heart-pattern clothing, NO Sanrio sweet style, NO
Disney princess style, NO children's-book sweet, NO manga-moe, NO
Japanese kawaii eye style, NO kawaii sticker aesthetic, NO pet sticker
vibe. NO pink-purple feminine palette overall (pink/purple ONLY allowed
as small spike color or specific panel background, NOT as wash). NO 3D
soft-candy render, NO mint-green soft healing aesthetic. NO unified
yellow filter / yellow cast / yellow tint over the whole image, NO
sepia tone, NO warm-cream wash, NO mocha-brown dominant, NO muddy
khaki overall, NO golden-hour lighting. NO all-black terminal aesthetic,
NO full-screen electric-blue, NO full-screen terminal-green — these
colors are ONLY in spike-color accents and D's splatters. NO sticky
note collage, NO transparent scotch-tape edges, NO hand-cut paper
edges, NO aged paper texture overlay, NO halftone dot grain. NO
printed text, NO monospace font, NO terminal font, NO mechanical sans-
serif text — ALL text must be wobbly hand-written. NO long English
sentences, NO captions, NO labels. NO Chinese characters anywhere. The
ONLY allowed text tokens (all hand-written and wobbly): "ZZZ" (panel
2), "1%" (panel 2), "DDL 1%" (panel 3), "404" (panel 4), "???" (panel
4), "!!!" (panel 4), "1%" (panel 4 if mixed). NO other text. NO logos,
NO watermarks. NO detailed eyebrows on the monkey, NO muscle lines on
the monkey, NO realistic primate fur, NO anatomical detail on the
monkey — the monkey must be flat-block-shape simplified or it reads as
creepy. NO fine fur texture on any animal. NO grinning monkey, NO
playful active monkey pose, NO off-balance posture, NO asymmetric eyes,
NO keyboard, NO typewriter, NO clothes on the monkey, NO vest, NO
socks, NO mismatched outfits — D-monkey is simple, zoned-out, with
peeled banana and floating wobbly error pop-ups + green/blue splatters
ONLY. NO ball-curl posture for sloth (sloth sprawled flat on paper
notes). NO aggressive hedgehog, NO bared spines, NO angry hedgehog
posture. NO ink spurt on the octopus, NO leaking yellow ink — A's
"嘴硬" must come from 8-leg bracing and tight mouth line, NOT from ink
leaks. NO party hat, NO clown costume, NO bowtie, NO top-hat. NO
"offline" text, NO "loading" text, NO "ESC" text, NO "ERROR" text on
B or D panels.
```

---

## §3 v7.2 vs v7 vs v5 (3 版差异表)

| 维度 | v5 (riso/便签) | v7 (我之前错读, 偏离 v5 base) | **v7.2 = v5-base + 8 patches** ✅ |
| --- | --- | --- | --- |
| 出发点 | 原始低保真便签方向 | 完全重写, 删 riso 偏离 v5 | **保留 v5 riso/marker base, 8 patches 修正** |
| 背景 | 纸白 + 旧纸纹理 + 便签胶带 | 干净鲜艳 solid (无 riso 也无纹理) | 5 鲜艳 solid 底 + **保留 v5 riso 错位**, 删便签胶带/halftone/旧纸 |
| Marker 笔触 | 1.5-2.5px | 3-4px 全 panels | 3-4px (D 4-5px), 沿用 v5 charcoal-dark-brown ink bleed |
| Riso 套色错位 | 1-2px (D 2-3px) | **删了 (v7 错读)** | **保留** 1-2px (D 2-3px) — 这是 v5 base 关键 |
| Halftone | 有 | 删 | **删** (David #5 干净背景) |
| 便签/胶带 | 有 | 删 | **删** (David #5) |
| 中文 | 允许少量 | 一度允许又禁 | **不进中文** (Fiona 21:35 防乱码) |
| 角色 patches | 5 角色基础 | 5 角色基础 | A 8 腿硬撑 / B 删 offline + monospace / C +DDL 1%箭头 / D 删打字机+衣服+不对称, 加报错弹窗+绿蓝飞溅 / E 沿用 |
| 刺色 | 单 accent | 每张刺色 | 每张 1 刺色 (David #4) |

---

## §4 落库 + 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 22:42 (本文件落库) | v7.2 落 spec, **修正之前 v6/v7 偏离 v5 base 的错读** | Phoebe (本条) |
| 等 PM gate | Fiona 审 v7.2 是否真正基于 v5 + 8 patches | Fiona |
| PM gate 过 | Fiona 转 David 审 prompt 文本 | Fiona |
| David ack | 1 image2 试金石 (gpt-image-2 micuapi, 累计 44 calls) | Phoebe |
| 试金石过 | 进入工程接入 brief + Dave handoff | Fiona/Dave |

期间 0 image2 / 0 生图.
