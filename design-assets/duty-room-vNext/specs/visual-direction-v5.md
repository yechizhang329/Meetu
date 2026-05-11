# vNext Visual Direction v5 (校园低保真嘴替物件)

**作者**: Phoebe2
**时间**: 2026-05-11 19:10
**触发**: Fiona 18:57:24 拍 — 校园低保真嘴替物件 / risograph + marker + glitch + 便签调性
**输入 SoT**: PRD v2.1 + copy-sot-final (5 final 命名 + 角色资料 + scenes) + Fiona 18:57 v5 brief 锁定方向
**红线**: 0 image2 / 0 生图 / 先文本 / 不品牌精修 / 不萌宠 / 不全黑 terminal 主视觉 / 不大面积黄滤镜 / 中文标题前端叠加, prompt 内只允许统一白名单符号: `1%` `404` `DDL` `offline` `ZZZ` `!@#` `?` `!`

---

## §0 v5 一屏结论

**风格基底**: 校园低保真 — 像同学随手画在便签/小纸条上传出来, 不是品牌海报。两层语言**同图共存**于同一手绘画法层: marker 手绘动物 (便签手绘语言) + risograph 套色错位 + 系统故障 UI 道具 (glitch/UI 语言)。**不做两套视觉, 按视觉功能分工不按性别分工** (见 §4)。

**色彩基线**:
- 主底: 纸白/脏白 `#F8F4ED`, 微微旧纸纹但不黄滤镜
- 主线: 炭黑 `#1A1715` 或深棕黑 marker 线, irregular 1.5-2.5px 出血感
- 主 accent (5-10% 小面积): 荧光黄 `#F2EB1B` 或橘红 `#E94B23`
- 局部系统符号 accent: 电蓝 `#1854E0` (B/D), terminal 绿 `#1FE07B` (D 限定), **不做全局主色**

**质感**: riso 套色错位 (1-2 套色微移 1-3px) + 半色调颗粒 + marker 出血 + 纸张扫描噪点

**构图**: 5 角色 contact sheet, 每角色像独立便签纸条剪贴, 纸条边缘略不齐, 模拟同学手贴; 不强制完美对齐网格, 错位是产品意图

**字体/文字 (统一 typography 白名单)**: prompt 内仅允许下列符号型 token: `1%` `404` `DDL` `offline` `ZZZ` `!@#` `?` `!`; **中文标题/角色名/quotes 一律前端叠加**, 不让生图模型生成中文 (避免乱码). loading 状态用 spinner 图形表达, **不写 "loading" 文字**; ESC 等其他键名也不进 prompt。

---

## §1 5 角色映射 (按 v5 方向重写)

### A 嘴硬章鱼 — marker 手绘 + 喷墨糊破绽
- 主体: marker 手绘墨水线条章鱼, 8 腿向下硬撑姿态, 章鱼身体留白
- accent: **荧光黄 `#F2EB1B` 在喷墨破绽处** (一只 tentacle 向身后喷出小墨点) — accent 小面积
- 道具/符号: 章鱼眼角 1 滴墨水/汗滴; 身边一小块荧光黄墨点斑迹作破绽信号 — **不出现任何文字或表情符号** (与 B 断电猫的 "1%" 系统语义区分, "1%" 是 B 的低电量标识不归 A 使用)
- riso 错位: 章鱼黑线 + 黄 accent 墨点错位 1-2px, 模拟便签印刷不齐
- 不做: 萌系大眼 / 整章鱼平涂软糖 / 完美抗锯齿光滑线

### B 断电猫 — 低电量 / offline / loading
- 主体: marker 手绘墨水线条猫, ball 蜷睡姿, 闭眼
- accent: 电蓝 `#1854E0` 在猫头顶的低电量 UI 符号 — 一个低电量电池图标 (`1%` 数字) + `ZZZ` 文字 + `offline` 文字 (pixel-y monospace style)
- 道具/符号: 猫旁边一个圆形 spinner 图形 (静止, riso 套色错位让 spinner 边缘有 1-2px 蓝错位; **spinner 用图形表达"加载状态", 不出现 "loading" 文字**)
- 注意: **不全黑 terminal 主色**, 电蓝只是符号区局部, 主体仍是 marker 手绘 + 纸白底
- 不做: 萌系大眼 / 软糖渐变 / 圆角治愈 / 整张图电蓝化

### C 躺平树懒 — 便签/旧纸/文件夹/进度条 + 卡住感
- 主体: marker 手绘墨水线条树懒, sprawl 趴姿, 闭眼
- 道具: 旁边便签纸条 (微微卷边) + 翻开的旧文件夹 + 一根进度条 (10%-15% 填充, riso 错位让进度条像没动)
- accent: 橘红 `#E94B23` 在便签的"!"或"DDL" 小字 (前端叠中文, prompt 只允许 "DDL" 英文符号)
- 调性: **重点是卡住, 不是可爱睡觉** — 树懒姿态趴而不是 ball curl, 便签内容暗示"任务在那"
- 不做: 萌系大眼 / 完美 babyish 圆头 / 全黄底 / "正在睡觉的可爱小动物"调性

### D 整活吗喽 — glitch / 404 / 键盘乱飞 / 像素抖动 (系统故障美学主场)
- 主体: marker 手绘墨水线条猴, 失衡姿态 (一手反向 + 一手举键盘), **不对称双眼** (一只 wide-open dot + 一只横线眯眼), 不对称双眉, 嘴是 wavy 线 ZZ 形
- 道具: 头顶/身边的键盘 **2-3 键飞出** + 一根香蕉 (未剥, 但拿反了)
- accent: 电蓝 `#1854E0` 或 terminal 绿 `#1FE07B` 局部小符号 (一个小 "404", 一个小 "!@#", 一个小像素抖动方块)
- 服饰: 反穿 striped vest (穿反, 露 back tag 在前) + mismatched 袜 (一橘红条纹 + 一电蓝素色)
- riso 错位 + 像素抖动: D 主场, riso 套色错位幅度 2-3px (其他角色 1-2px), 头部周围有 1-2 个小像素方块漂移
- 不做: cosplay / clown / 萌猴 / 写实猴脸

### E 高情商刺猬 — 礼貌但有刺 / 纸面划痕 / 批注感
- 主体: marker 手绘墨水线条刺猬, 半蜷, 刺向外
- 表情: 眼神微闭 + 小弧线嘴唇上扬 (体面微笑, 不咧嘴)
- 道具/符号: 刺猬旁边一张便签 / 文档边缘有橘红 `#E94B23` 划痕 / 批注小箭头 / "?" "!" 小符号 — **批注感是 E 视觉锚**
- accent: 橘红 `#E94B23` 在批注/划痕, 不在刺猬主体
- 调性: **不要治愈刺猬** — 不画 ZZZ / 不画 babyish 大眼 / 不画 fluffy 软毛; 刺猬刺是清晰直立 marker 线条
- 不做: 萌系刺猬 IP / 治愈 chibi / 软糖刺

---

## §2 v5 5 角色 contact sheet 主 prompt

```
A horizontal 5-character contact sheet (2700×1080, 5 columns each ~540px),
in a low-fidelity Chinese-college-student note-style illustration aesthetic.
Each character is drawn as if a classmate doodled it on a small note or
sticky paper, then taped/scanned together. Risograph print aesthetic with
slight 1-2px color separation offset between black ink and accent color
layers (more pronounced 2-3px offset only on the monkey panel for glitch
effect). Halftone dot grain texture overlay. Marker ink line work in
charcoal-dark-brown #1A1715, irregular 1.5-2.5px weight with slight ink
bleed and rough hand-drawn quality. Paper-white background #F8F4ED with
subtle aged-paper grain texture, NOT yellow-tinted, NOT cream-warm filter.
Each character occupies its own slightly-imperfect note panel; panels are
not perfectly aligned, suggesting hand-cut and taped placement.

PANEL 1 (left) — A small octopus marker-drawn in charcoal ink lines, body
mostly hollow line-art (no fill), 8 tentacles extending downward in a
stiff "holding-it-together" posture. ACCENT: bright fluorescent yellow
#F2EB1B small ink-spurt sploch on one tentacle (representing leaking
camouflage / breaking composure) — the only color hit, ~5-8% of panel
area. A small ink splatter spot/stain nearby (representing a leaked ink
blot), NO text or emoji symbols in this panel. Risograph 1-2px misregister
between black line layer and yellow accent.

PANEL 2 — A small cat marker-drawn in charcoal ink lines, curled tightly
into a sleeping ball, eyes closed. ACCENT: electric blue #1854E0 in a
small cluster of system-UI symbols floating above the cat — a low-battery
icon "1%", small "ZZZ" text, "offline" text in pixel-y monospace style.
Beside the cat: a circular spinner graphic (frozen, no "loading" text)
with 1-2px blue color misregister at the edge. Background is paper-white,
NOT all-blue, NOT terminal aesthetic — blue is ONLY in the symbol cluster.

PANEL 3 — A small sloth marker-drawn in charcoal ink lines, sprawled
face-down across a flat sketched desk surface, eyes closed, all limbs
spread out (NOT curled into a ball, distinctly different from panel 2).
Beside the sloth: a small folded paper note (slightly curling at corners),
an open file folder sketched in line-art, AND a horizontal progress bar
filled only ~10-15% (Risograph misregister makes the fill look stuck).
ACCENT: orange-red #E94B23 small "!" mark or "DDL" English text on the
note. The mood is "task here, person not started", NOT "cute sleeping
animal".

PANEL 4 (glitch / system-failure aesthetic — D's main field) — A small
monkey marker-drawn in charcoal ink lines, sitting in an OFF-BALANCE
asymmetric pose: one arm holding a vintage typewriter keyboard up at an
odd angle (with 2-3 keys popping off / flying out / floating around the
keyboard), the other arm holding an unpeeled banana but the wrist twisted
oddly. Wearing an ill-fitting striped vest worn BACKWARDS (back tag visible
in front, off-balance fit, simple line-only sketch). Mismatched socks
(one with horizontal stripes, the other plain — clearly two different
socks). EYES ARE ASYMMETRIC: one eye a wide open round dot, the other a
horizontal squinted line. EYEBROWS asymmetric (one raised high, one tilted
down). Mouth a wavy zig-zag line (NOT a normal mouth). ACCENT: electric
blue #1854E0 OR terminal-green #1FE07B in small system-glitch symbols
floating around (a small "404", "!@#", a small pixelated jitter block).
Risograph misregister 2-3px on this panel (more aggressive than other
panels), small pixel jitter blocks drift around the head. The clothes and
props are SECONDARY — the abstract / system-glitch reading must come from
the monkey's own asymmetric face, off-balance pose, and the popping keys.

PANEL 5 (right) — A small hedgehog marker-drawn in charcoal ink lines,
half-curled (not fully balled — face and one paw visible), spines
extending outward but quiet, NOT bared aggressively. Side-profile face
with a tiny compressed polite mouth line (barely-there polite smirk, NOT
warm, NOT cute, NOT friendly — composure holding back the spines). Beside the hedgehog: small note-paper edges visible with
ORANGE-RED #E94B23 annotation marks — small underlines, a "?" and a "!"
in the margin, a tiny arrow drawn as if marking up someone else's note.
The orange-red annotation IS the visual signature; the hedgehog itself
is line-only. Risograph 1-2px misregister.

OVERALL — Hand-drawn classroom-note aesthetic. Each character self-
contained in its panel. Panel borders are minimal (just slight paper edge
suggestion or no border at all). NO unified yellow filter, NO sepia, NO
warm cream wash, NO mocha tone. NO realistic animal anatomy, NO 3D
rendering, NO digital flat vector. NO chibi, NO baby-like big eyes, NO
Sanrio sweet, NO Disney mascot, NO heart eyes, NO sparkles, NO heart-
patterns, NO pink-purple feminine palette, NO pastel candy colors, NO
brand-mascot polish. NO Chinese characters in image (only allowed
typography is short symbol-like English/numbers: "1%", "404", "DDL",
"offline", "ZZZ", "!@#", "?", "!". NO "loading" text, NO "ESC", NO
other English words — ONLY this whitelist).
```

---

## §3 v5 Negative prompt

```
NO realistic photographic, NO 3D rendered character, NO hyper-realistic
anatomy, NO digital sleek vector flat, NO smooth anti-aliased perfect
lines, NO clean brand-illustration polish, NO professional poster
aesthetic, NO mascot IP polish. NO chibi, NO baby-like proportions, NO
big glossy cute-mascot eyes, NO heart eyes, NO sparkles, NO painted blush
cheeks, NO heart-pattern clothing, NO Sanrio sweet style, NO Disney
princess style, NO children's-book sweet, NO manga-moe, NO Japanese
kawaii eye style. NO pink-purple feminine palette, NO pastel candy colors
overall, NO 3D soft-candy render, NO mint-green soft healing aesthetic.
NO unified yellow filter / yellow cast / yellow tint over the whole
image, NO sepia tone, NO warm-cream wash, NO mocha-brown dominant, NO
muddy khaki overall, NO golden-hour lighting. NO all-black terminal-
hacker aesthetic as main visual, NO full-screen electric-blue, NO full-
screen terminal-green — these colors are ONLY in symbol clusters on B/D
panels. NO ball-curl posture for sloth (sloth must be sprawled flat,
distinct from cat). NO grinning monkey, NO playful active monkey, NO
normal symmetric monkey face (monkey MUST have asymmetric eyes, asymmetric
eyebrows, off-balance limbs). NO realistic monkey face, NO cute monkey
face. NO party hat, NO clown costume, NO bowtie, NO top-hat gentleman
trope, NO over-accessorized cosplay. NO matched outfit pieces (vest must
be ill-fitting and worn backwards, socks must be visibly mismatched).
NO Chinese characters in the image. NO long English titles or sentences.
NO captions. NO labels. NO logos. NO watermarks. ONLY allowed image text:
"1%", "404", "DDL", "offline", "ZZZ", "!@#", "?", "!" (each as small
symbol-like accents).
```

---

## §4 视觉功能分工自检 (按功能不按性别)

### 便签手绘语言 (软层)
- ✅ marker 手绘 + 纸白底 + 出血感: 模拟"同学随手画在便签上"的低保真感
- ✅ 不品牌精修 / 不完美抗锯齿: 留白 + 错位 + 不齐, "给朋友看的小心思"调性
- ✅ riso 套色错位: ZINE / 手账 / 便签贴纸圈高频 aesthetic
- ✅ E 刺猬橘红批注感 / C 树懒便签条 / A 章鱼喷墨破绽: 都是"在纸上随手做的小标注"机制

### 系统故障语言 (硬层)
- ✅ B 断电猫的低电量 UI + `1%/ZZZ/offline` 符号 + 静止 spinner 图形: 系统状态符号
- ✅ D 整活吗喽的 glitch / `404` / 键盘乱飞 / 像素抖动: 系统故障美学主场
- ✅ 电蓝 + terminal 绿 在 B/D 局部出现: geek/retro 美学符号, 不作全局主色

### 不做两套视觉的关键: 同一画法层
- 5 角色都共享 marker 手绘墨水线 + 纸白底 + riso 错位 — 这是统一的 aesthetic foundation
- "便签手绘"和"系统故障"**不是两种画风, 是同一手绘画风下不同道具/符号 layered**
- 软层通过 marker 出血 / 手绘 / 错位呈现; 硬层通过 UI 符号 / glitch / 键飞呈现; 二者在同一帧上 layered, 不分裂

### 视觉功能分工 (按角色不按性别)
- **D (整活吗喽)**: 系统故障美学**主场**, riso 错位 2-3px (最大幅度), glitch 元素最重
- **E (高情商刺猬)**: 批注留刺**主场**, 橘红划痕 + 手绘标注
- **A / B / C**: 纸面手绘**中和区**, marker 手绘主导 + 局部 UI/便签/进度条道具
- 这是按"视觉功能"分工, 不按用户性别归因; 5 角色任一用户都能找到至少 2 个共鸣角色

---

## §5 落库 + 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 19:10 (本文件落库) | v5 visual brief + 5 角色 contact sheet prompt 落 spec | Phoebe (本条) |
| 等 PM/David | 审 v5 brief + prompt 文本 | Fiona/David |
| 审过后 | 1 image2 试金石 (5 角色 contact sheet, gpt-image-2 micuapi 路径, 累计 44 calls) | Phoebe |
| 试金石过 | 进入工程接入 brief + Dave handoff | Fiona/Dave |

期间 0 image2 / 0 生图 / 不超出 v5 brief 边界。
