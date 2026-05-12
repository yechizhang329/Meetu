# Contact Sheet Prompt v10 (for crop)

**作者**: Fiona
**时间**: 2026-05-12 15:33
**SoT**: baseline r2.1 + David 15:31 路径 B 要求
**用途**: Phoebe2 重新生成符合裁切的 contact sheet（浅米底 + 大间距）
**目标**: 生成后裁剪成 5 张干净的单角色 PNG，无相邻角色污染

---

## v10 vs v9.1 的关键修改

David 15:31 拍板路径 B：
1. **背景色改为浅米 #F9F7F3**（不是白底 #FFFFFF）
2. **5 角色之间 padding 大幅增加**（从 ~540px 列宽改为 ~800px，确保裁剪时不误裁相邻角色）
3. **画布尺寸扩大**：从 2700x1080 改为 4000x1080（5 列 × 800px）
4. **5 角色姿态/刺色/装饰元素严格对齐 baseline r2.1**（不改变任何视觉元素）

---

## 主 prompt（v10 完整版）

```
A horizontal 5-character contact sheet (4000x1080, 5 columns each
~800 px wide with generous padding between characters). All 5 
characters share ONE continuous warm cream background #F9F7F3 (one 
single canvas spanning the entire image, NOT separated into 5 
colored panels, NOT solid theme-color cards). Each character 
occupies its own column-region with WIDE SPACING between columns 
(at least 150-200px empty space between adjacent characters' 
outermost elements) to ensure clean cropping. Characters do not 
overlap.

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
"404", "1%", "???", "!!!", "进度1%", "硬撑". NO Chinese characters
anywhere except "进度1%" and "硬撑". NO English words other than
the listed tokens. NO captions, NO labels, NO logos. Each character
has ONE small-area "spike color" accent (≤8% per character).

CHARACTER 1 (left) — A small octopus drawn in rough hand-drawn
ink. ALL 8 TENTACLES visibly tense and bracing — some pushing
down hard against the ground line, some pushing outward, some
interlocking — clearly "holding it together at all costs".
Visible small angular strain marks at the base of each tentacle.
THE BODY ITSELF is soft, slightly slumping despite the legs'
bracing — body color mid-shift between two tones (muted lavender
bleeding into soft peach-orange), as if camouflage is failing.
Face: STRONGLY EXAGGERATED expression of strain — eyebrows
heavily furrowed and pushed down in a deep frown, mouth corners
visibly pulled downward into a tight inverted-U / 八字 shape (NOT
a flat line — actively pulling down), eyes squinted half-closed
with visible tension. The face must read as "physically exerting
to hold it together". NEXT TO THE BRACING TENTACLES (in the gap
between 2-3 tentacles, mid-height beside the octopus body):
hand-written wobbly Chinese characters "硬撑" rendered in a
HEAVILY distorted, twisted, trembling style — each stroke
visibly warps, bends, shakes; strokes break or curve unnaturally
as if the character writing them is themselves on the verge of
collapse. The "硬撑" text effect must be obviously distorted, NOT
just slightly wobbly. The "硬撑" text is in the same charcoal
black outline color, NOT in spike color. SPIKE COLOR: bright
fluorescent green #1FE07B in 1-2 small spots — at contact points
where 1-2 tentacles meet the ground OR a tiny green spark at the
corner of the strained mouth. NO ink spurt, NO yellow splash, NO
tears, NO sweat. Tentacles drawn with clean bold single-line
strokes, NOT dense tangled crosshatch lines.

CHARACTER 2 — A cat in SIDE-LYING posture (lying on its side, NOT
on its back, NOT curled up), body fully stretched out sideways
along the ground with all four limbs limp and splayed out
loosely. The cat has zero energy — it has "powered down" in the
middle of doing nothing. Body grey-white. Face shows EXTREMELY
VACANT EMPTY EXPRESSION: eyes wide open but completely UNFOCUSED,
pupils tiny dots staring at nothing (a deep "1000-yard stare"
expression), mouth slightly open and slack (NOT closed, NOT
smirking), whiskers drooping, ears flopped down. The cat's
expression is "the lights are on but nobody's home" — totally
empty, drained, no awareness. Beside the cat: a tiny rectangular
battery-icon outline with a THIN RED #E94B23 sliver of fill on
the left end (representing "battery dying"), NO "1%" text, NO
"ZZZ" text — the empty stare + drained battery icon together
carry the "out of energy" meaning. SPIKE COLOR: bright red
#E94B23 for the battery's red sliver only. NO printed/monospace
font. NO deep-sleep curled-ball pose, NO eyes closed, NO half-
smile. Body outline clean and simple, NOT dense fur texture
lines.

CHARACTER 3 — A sloth sprawled face-down on a stack of blank
draft paper sheets (the stack drawn as 3-4 wavy-edged rectangles
piled loosely), all four limbs spread loose, eyes half-closed
deadpan staring forward at nothing, mouth a tiny flat line.
BELOW the sloth (drawn beneath the paper stack and the sloth's
body): a horizontal progress bar drawn as a CLEAR THICK-OUTLINED
RECTANGLE (wide rectangular shape, approximately 1/2 the width
of the sloth's body, height ~25 px — clearly a bar/box shape NOT
a thin line). The leftmost 1% of the rectangle's interior is
filled with bright orange-red #E94B23. INSIDE the rectangle, on
the left side over the 1% fill, write hand-written wobbly tilted
Chinese characters "进度1%" (hand-drawn marker style, slightly
shaky, easily readable). Body tan-brown. SPIKE COLOR: bright
orange-red #E94B23 for the 1% fill + the "进度1%" text. NO coffee
cup, NO calendar. NO ball-curl posture. The sloth's four limbs
rest directly on the paper stack surface; NO extra objects,
shadows, cigarettes, bananas, or unidentified elements below or
around the sloth.

CHARACTER 4 — A monkey drawn with EXTRA-thick black marker
outline (4-5 px, the roughest of the five). Body intentionally
SIMPLIFIED to flat block shapes — large round head, simplified
muzzle, big simple block hands and feet, NO detailed eyebrows,
NO muscle lines, NO realistic primate fur, NO anatomical detail.
Pose: sitting in a still vacant zoned-out posture (NOT off-
balance, NOT asymmetric body, NOT doing stunts). One hand holds
a peeled banana (yellow peel drooping in visible strips, white
flesh exposed, NOT being eaten). Face: NOTABLY UNHINGED /
"癫" expression — eyes slightly crossed or one looking slightly
in a different direction than the other (subtle, NOT extreme
asymmetric distortion — just enough to read as "the lights are
on but in the wrong room"), mouth in an open lopsided shape
(slight wobble, slight twist) showing teeth or a single tongue
flick, with one eye possibly wider than the other in a "spaced
out and out of sync with reality" way. The expression should
read as "癫狂/抽象/精神出窍" but cartoon-stylized, NOT grotesque,
NOT scary, NOT disturbing — keep it absurd-comic, not horror-
comic. SURROUNDING THE MONKEY: a chaotic cluster of 3-5 small
system error pop-up windows (small thick-outlined rectangles
each containing ONE short wobbly hand-written token: "404",
"???", "!!!", "1%" — varied mix), drifting and overlapping at
slight angles. Around the monkey's body: 6-10 small splatter
dots of fluorescent green #1FE07B PLUS electric blue #1854E0,
like the system glitching and leaking pixels. SPIKE COLOR: dual-
spike fluorescent green + electric blue. NO typewriter, NO
keyboard, NO clothes, NO vest, NO socks. NO failing-anatomy
joke (the "癫" is in the face/eyes, not in broken body). NO
realistic monkey face — flat block shape only. NO grotesque
distortion, NO horror, NO ugly disfigurement. Body drawn with
bold block color fills and minimal internal line detail.

CHARACTER 5 (right) — A hedgehog half-curled — face and one
front paw visible, NOT fully balled. Body tan-cream. Spines
extending outward as clear bold thick black lines (NOT detailed
fine spines, NOT densely-textured fur) — visibly present and
erect, but NOT lashing out aggressively. Face in three-quarter
view: small simple deadpan dot eyes, ONE small simple nose dot
(single nose only, NOT double), mouth a tiny compressed polite
mouth-line — barely-there polite smirk. ABOVE the hedgehog
(floating in the upper area of its column): TWO speech bubbles.
The first speech bubble (positioned upper-left, representing
"the other person speaking") contains abstract scribbled lines
suggesting indistinct speech (a few wavy/zigzag horizontal lines,
NO real characters). The second speech bubble (positioned upper-
right, representing "hedgehog's reply") contains ONE simple
hand-drawn light-bulb 💡 icon (a clear bulb shape with rays
suggesting illumination — representing "高情商/clever reply",
NOT real text). Around the hedgehog (about 1 hedgehog-radius
outside the spines): a dashed oval line traced lightly on the
implied ground encircling the character (a "keep distance"
boundary — short evenly-spaced dashes, NOT a solid line). SPIKE
COLOR: light purple #C7A4FF — VISIBLY APPLIED to the dashed
safety-distance line AND for the tip of 2-3 spines AND the
light-bulb's glow (make the purple clearly visible at
thumbnail size, NOT washed out). NO note-paper edges, NO orange-
red annotation marks, NO "?" / "!" margin symbols. NO aggressive
bared spines.

OVERALL — All 5 characters share ONE clean warm cream background
#F9F7F3 with no panel borders, no gutters, no color block 
divisions. WIDE SPACING between characters (at least 150-200px 
empty #F9F7F3 space between adjacent characters' outermost 
elements) to ensure clean cropping without edge contamination. 
NO Chinese characters anywhere except "进度1%" inside character 
3's progress bar AND "硬撑" beside character 1's tentacles. Each
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
5-color block panels (background must be unified warm cream
#F9F7F3). NO sticky-note collage, NO scotch-tape edges, NO hand-
cut paper edges, NO aged paper texture overlay, NO halftone dot
grain, NO risograph misregister. NO printed text dominant, NO
monospace font as dominant, NO terminal font as dominant — ALL
primary text wobbly hand-written. NO long English sentences. NO
Chinese characters anywhere except "进度1%" inside character 3's
progress bar AND "硬撑" beside character 1's tentacles. NO
captions, NO labels, NO logos, NO watermarks. NO scenery, NO
desk, NO room, NO floor, NO walls beyond the minimal ground
line. NO therapy-speak. NO orange-pink gradients. NO ink spurt
on octopus, NO leaking yellow ink. NO ball-curl posture for
sloth or cat (cat is SIDE-LYING, sloth is sprawled flat). NO cat
eyes closed, NO sleeping cat, NO cute cat — the cat's eyes must
be OPEN but VACANT/empty. NO "ZZZ" text near the cat (deleted
in r2.1). NO grotesque or horror-style monkey distortion (keep
"癫" comic-stylized, NOT scary). NO keyboard, NO typewriter, NO
clothes on monkey. NO aggressive hedgehog, NO bared angry
spines. NO dense tangled crosshatch lines on octopus tentacles.
NO dense fur texture lines on cat body. NO cluttered decorative
strokes on monkey body. NO double nose on hedgehog. NO extra
objects (cigarettes, bananas, shadows) below or around sloth's
body — only the paper stack and the progress bar. NO printed/
clean/typeset font for "硬撑" — it must be hand-written wobbly
HEAVILY DISTORTED. NO progress bar drawn as thin line — it must
be a clear rectangular box. NO empty progress bar without
"进度1%" text inside. NO characters overlapping or touching each
other — maintain wide spacing for clean cropping. NO white
background — must be warm cream #F9F7F3.
```
