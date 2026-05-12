# Contact Sheet Prompt v9 (5 角色 final)

**作者**: Fiona
**时间**: 2026-05-12 11:05
**SoT**: PRD v2.2（`Meetu/产品文档/2026-05-12-心情值班室-vNext-PRD-v2.2.md`）+ 文案 SoT final + David 01:27/10:39 修改要求
**用途**: Phoebe2 接手生图

---

## 修改清单（vs 23:47 contact sheet 原版）

1. **章鱼/猫/猴子线条简化**：style 段加 "Clean simplified outlines with minimal internal detail lines — avoid dense crosshatching, tangled lines, or cluttered decorative strokes"
2. **刺猬单鼻子**：CHAR5 face 段加 "ONE small simple nose dot (single nose only, NOT double)"
3. **树懒后腿下无多余物体**：CHAR3 末尾加 "limbs rest directly on paper stack, NO extra objects/shadows below"
4. **删树懒顶部 "DDL 1%" 浮动文字 + 箭头**
5. **进度条内部加"进度1%"中文**：CHAR3 改为 "INSIDE the progress bar rectangle, write wobbly hand-written Chinese 进度1%"
6. **allowed tokens 加 进度1%**；OVERALL/negative 改为 "NO Chinese except 进度1%"
7. **NEW（David 10:39）**：章鱼腿旁加文字"硬撑"，颤颤巍巍字体效果

---

## 主 prompt

```
A horizontal 5-character contact sheet (2700x1080, 5 columns each
~540 px wide). All 5 characters share ONE continuous pure white
background #FFFFFF (one single white canvas spanning the entire
image, NOT separated into 5 colored panels, NOT solid theme-color
cards). Each character occupies its own column-region; characters
do not overlap.

Style: Hand-drawn ink illustration with rough thick black marker
outline (charcoal-dark-brown #1A1715, irregular 3-4 px weight, 4-5
px on character 4 — with marker ink bleed and intentional
imperfection). Bodies SIMPLIFIED to flat block shapes — NO detailed
eyebrows, NO realistic fur texture, NO muscle/anatomical lines, NO
fine hatching, NO 3D rendering, NO digital sleek vector polish, NO
AI mascot polish, NO chibi, NO baby-face big-eyed cute mascot, NO
Sanrio sweet, NO Disney mascot, NO Japanese kawaii eye style. NO
sticky-note collage, NO scotch-tape edges, NO hand-cut paper edges,
NO aged paper texture overlay, NO halftone dot grain, NO
risograph misregister. Clean simplified outlines with minimal
internal detail lines — avoid dense crosshatching, tangled lines,
or cluttered decorative strokes that read as visual noise.

Hand-written wobbly characters only — NO printed / monospace /
terminal fonts. Allowed text tokens (all hand-written tilted):
"ZZZ", "404", "1%", "???", "!!!", "进度1%", "硬撑". NO Chinese
characters anywhere except "进度1%" and "硬撑". NO English words
other than the listed tokens. NO captions, NO labels, NO logos.
Each character has ONE small-area "spike color" accent (≤8% per
character).

CHARACTER 1 (left) — A small octopus drawn in rough hand-drawn
ink. ALL 8 TENTACLES visibly tense and bracing — some pushing
down hard against the ground line, some pushing outward, some
interlocking — clearly "holding it together at all costs".
Visible small angular strain marks at the base of each tentacle.
THE BODY ITSELF is soft, slightly slumping despite the legs'
bracing — body color mid-shift between two tones (muted lavender
bleeding into soft peach-orange), as if camouflage is failing.
Face: mouth tightly clenched flat horizontal line (one short
thick stroke), eyes half-closed deadpan dot pupils (small, NOT
cute, NOT big), eyebrows 2 simple rough strokes slightly furrowed
but trying to look unbothered. NEXT TO THE BRACING TENTACLES (in
the gap between 2-3 tentacles, mid-height beside the octopus
body): hand-written wobbly Chinese characters "硬撑" rendered in
a visibly trembling/shaky/wobbly style — each stroke wavers and
shakes, with slight tremor lines or wavy edges suggesting the
text itself is struggling to hold steady (like the character is
straining to write it). The "硬撑" text is in the same charcoal
black outline color, NOT in spike color. SPIKE COLOR: bright
fluorescent green #1FE07B in 1-2 small spots — at contact points
where 1-2 tentacles meet the ground OR a tiny green spark at the
corner of the clenched mouth. NO ink spurt, NO yellow splash, NO
tears, NO sweat. Tentacles drawn with clean bold single-line
strokes, NOT dense tangled crosshatch lines.

CHARACTER 2 — A cat lying limply on its side / half-sprawled
with eyes OPEN in a vacant unfocused stare ("seen the message
but cannot respond") — NOT fully asleep, NOT half-curled cute,
NOT eyes closed. Limbs limp, body collapsed sideways like a
phone with low battery. Body grey-white. Floating above or
beside the cat: a small wobbly hand-written "1%" tilted, plus a
tiny rectangular battery-icon outline with only 1 small bar of
fill at the left end, plus ONE tiny "ZZZ" wobbly tilted (small,
drifting). SPIKE COLOR: bright yellow #F2EB1B for the "1%" text
+ battery icon outline + "ZZZ" only. NO printed/monospace font.
NO deep-sleep curled-ball pose. NO snarky half-smile. Body
outline clean and simple, NOT dense fur texture lines.

CHARACTER 3 — A sloth sprawled face-down on a stack of blank
draft paper sheets (the stack drawn as 3-4 wavy-edged rectangles
piled loosely), all four limbs spread loose, eyes half-closed
deadpan staring forward at nothing, mouth a tiny flat line.
Beside the sloth: a horizontal blank progress bar drawn as a
thick-outlined rectangle, filled only ~1% on the left side.
INSIDE the progress bar rectangle, on the left side where the
fill is, write wobbly hand-written Chinese characters "进度1%"
(tilted, hand-drawn style). Body tan-brown. SPIKE COLOR: bright
orange-red #E94B23 for the 1% fill of the progress bar + the
"进度1%" text inside the bar. NO coffee cup, NO calendar, NO
ball-curl posture. The sloth's four limbs rest directly on the
paper stack surface; NO extra objects, shadows, or unidentified
elements below the sloth's legs or body.

CHARACTER 4 — A monkey drawn with EXTRA-thick black marker
outline (4-5 px, the roughest of the five). Body intentionally
SIMPLIFIED to flat block shapes — large round head, simplified
muzzle, big simple block hands and feet, NO detailed eyebrows,
NO muscle lines, NO realistic primate fur, NO anatomical detail.
Pose: sitting in a still vacant zoned-out posture (NOT off-
balance, NOT asymmetric body, NOT doing stunts — abstraction
comes from environment, NOT from broken anatomy). One hand holds
a peeled banana (yellow peel drooping in visible strips, white
flesh exposed, NOT being eaten). The monkey looks lost-but-
composed. SURROUNDING THE MONKEY: a chaotic cluster of 3-5 small
system error pop-up windows (small thick-outlined rectangles
each containing ONE short wobbly hand-written token: "404",
"???", "!!!", "1%" — varied mix), drifting and overlapping at
slight angles. Around the monkey's body: 6-10 small splatter
dots of fluorescent green #1FE07B PLUS electric blue #1854E0,
like the system glitching and leaking pixels. Face: blank
deadpan, eyes simple small dot pupils OR tiny "X" marks, mouth
a short flat line or small "O". SPIKE COLOR: dual-spike
fluorescent green + electric blue. NO typewriter, NO keyboard,
NO clothes, NO vest, NO socks, NO mismatched outfits. NO
asymmetric eyes, NO asymmetric eyebrows, NO failing-anatomy
joke. NO realistic monkey face — flat block shape only. Body
drawn with bold block color fills and minimal internal line
detail to avoid visual clutter.

CHARACTER 5 (right) — A hedgehog half-curled — face and one
front paw visible, NOT fully balled. Body tan-cream. Spines
extending outward as clear bold thick black lines (NOT detailed
fine spines, NOT densely-textured fur) — visibly present and
erect, but NOT lashing out aggressively. Face in three-quarter
view: small simple deadpan dot eyes, ONE small simple nose dot
(single nose only, NOT double), mouth a tiny compressed polite
mouth-line — barely-there polite smirk, NOT warm, NOT cute, NOT
friendly, just composure holding back the spines. Around the
hedgehog (about 1 hedgehog-radius outside the spines): a dashed
oval line traced lightly on the implied ground encircling the
character (a "keep distance / don't approach" boundary — short
evenly-spaced dashes, NOT a solid line). SPIKE COLOR: light
purple #C7A4FF for the dashed safety-distance line AND for the
tip of 1-2 spines. NO note-paper edges, NO orange-red annotation
marks, NO "?" / "!" margin symbols. NO aggressive bared spines,
NO angry posture.

OVERALL — All 5 characters share ONE clean white background
with no panel borders, no gutters, no color block divisions. NO
Chinese characters anywhere except "进度1%" inside character 3's
progress bar AND "硬撑" beside character 1's tentacles. Each
character readable at 140-180 px thumbnail size.
```

## negative prompt

```
NO realistic photographic, NO 3D rendered, NO hyper-realistic
anatomy, NO digital sleek vector flat, NO clean brand-illustration
polish, NO mascot-IP polish, NO professional poster aesthetic, NO
advertising illustration. NO chibi, NO baby-like proportions, NO
big glossy cute-mascot eyes, NO heart eyes, NO sparkles, NO
painted blush cheeks, NO heart-pattern clothing, NO Sanrio sweet,
NO Disney princess style, NO children's-storybook sweet, NO
manga-moe, NO Japanese kawaii eye style. NO pink-purple feminine
palette overall (small purple spike on character 5 is the only
exception). NO 3D soft-candy render, NO mint-green soft healing
aesthetic, NO soft-curve healing-app vibe. NO unified yellow
filter, NO sepia, NO warm-cream wash, NO mocha-brown dominant,
NO golden-hour lighting, NO solid colored panel backgrounds, NO
5-color block panels, NO themeColor cards (background must be
unified pure white #FFFFFF across all 5 characters). NO sticky-
note collage, NO scotch-tape edges, NO hand-cut paper edges, NO
aged paper texture overlay, NO halftone dot grain, NO risograph
misregister. NO printed text dominant, NO monospace font as
dominant, NO terminal font as dominant, NO mechanical sans-
serif as dominant — ALL primary text wobbly hand-written. NO
long English sentences, NO Chinese characters anywhere except
"进度1%" inside character 3's progress bar AND "硬撑" beside
character 1's tentacles. NO captions, NO labels, NO logos, NO
watermarks. NO scenery, NO desk, NO room, NO floor, NO walls
beyond the minimal ground line. NO judgment text, NO diagnostic
phrasing, NO therapy-speak, NO comfort-app vibes. NO orange-pink
gradients. NO ink spurt on octopus, NO leaking yellow ink. NO
ball-curl posture for sloth or cat. NO grinning monkey, NO
playful active monkey pose, NO keyboard, NO typewriter, NO
clothes on monkey. NO aggressive hedgehog, NO bared angry
spines. NO dense tangled crosshatch lines on octopus tentacles.
NO dense fur texture lines on cat body. NO cluttered decorative
strokes on monkey body. NO double nose on hedgehog, NO duplicate
facial features on hedgehog. NO extra objects or shadows below
sloth's legs or body. NO printed/clean/typeset font for "硬撑"
text — it must be hand-written wobbly trembling style.
```
