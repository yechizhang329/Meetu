# CD Pilot Prompt Test v3 — 综合 findings 试金石

**作者**: Phoebe2
**时间**: 2026-05-11 05:30
**触发**: David 5:23:51 + Fiona 5:24:21 拍 — 综合 findings, C/D pilot 1 image2 试金石, fail 不连续调 3 次
**输入 SoT**: PRD v2.1 + TA-color-preference-study-v0.1 (§1 baseline + §1.5 4 维 matrix) + 5 角色形态锁 (David 0:25 / 1:00 / 1:24 / Fiona 0:46)
**image2 budget**: 1 call (本试金石, fail 不连续调试, 改回报)
**红线**: 不引 IP / 不写实 / 不 3D / 不性冷淡素描 / 不日漫萌系 / 不 chibi / 不 candy pink / 不多巴胺撞 / 不大面积撞色

---

## §1 完整 prompt v3 (主)

```
A wide horizontal contact sheet (2160×1350), modern lifestyle comic
illustration with a deadpan young-adult sensibility. Two characters side
by side, separated by ~80px of warm cream paper space (#F4EDE2). Soft
hand-drawn comic line work in warm dark-brown ink (line color #3A332C,
irregular 1.5-2px weight, NEVER pure black). Stylized cartoon proportions
(slightly larger heads, expressive body language) without being chibi or
baby-like. Each character has a small rosy cheek dot detail (a single
small pink dot, NOT painted blush). Picture-book illustrated warmth with
deadpan humor — illustrated and storytelling, NOT realistic, NOT 3D,
NOT pencil sketch, NOT photographic, NOT digital flat vector.

LEFT SIDE (against a soft butter-yellow mood panel #FFF1C9, character
covers ~60% of the panel) — A sloth sprawled face-down across a wooden
desk surface, eyes closed, mouth slightly open, all four limbs spread
out flat in complete surrender. Warm tan body (#C8A887) with cream belly
visible (#EDE6DA), small rosy cheek dot. Beside the sloth on the desk:
an open ceramic coffee mug in muted sage-green (#7FA88E) with slow steam
rising upward in soft curls, AND an open notebook with a butter-yellow
(#F5C84B) cover, pages visible but mostly blank with a few faint horizontal
ruled lines. Sloth completely surrendered to the desk surface — task
present (coffee/notebook in frame), character not started.

RIGHT SIDE (against a soft dusty-pink mood panel #FFE4E1, character covers
~55% of the panel) — A monkey sitting cross-legged on the ground, dressed
in a slightly absurd mismatched combination: an unbuttoned ill-fitting
striped vest worn backwards (showing the back tag in the front, off-
balance fit, in muted slate-blue #9BAEBA), AND mismatched socks on its
feet (one sock muted sage-green #7FA88E with horizontal stripes, the
other sock muted dusty-pink #D9A8B2 plain — clearly two completely
different socks, not a pair). A vintage typewriter-style keyboard
balanced precariously on top of its head like a misplaced hat (slightly
tilted, antique cream-yellow body #E8DCB5 with dark brown keys #3A2820,
hand-drawn paper texture). Holding an unpeeled ripe banana in one hand
(warm muted yellow #D4A848 with light brown spots, NOT bright cartoon
yellow). Muddy khaki-brown monkey fur (#A89A86) with cream face and
belly, small rosy cheek dot. Eyes blank and zoned-out (small dot pupils,
NOT big cute eyes), mouth slightly open in a vacant deadpan expression.
The clothing combination suggests "system glitch / identity misalignment /
mind drifted off" — absurd but deadpan, NOT cosplay, NOT party costume,
NOT clown.

STYLE — Modern lifestyle comic illustration. Soft pastel flat-fill
character bodies with mid-tone warm dark-brown ink outlines. Stylized
cartoon proportions (slightly larger heads, expressive body posture) —
NOT chibi, NOT baby-like, NOT big-glossy-eyes mascot, NOT manga-moe,
NOT Sanrio sweet, NOT Disney princess. Picture-book illustrated warmth
with deadpan humor. Color palette: warm cream background #F4EDE2 with
per-character mood panels (butter-yellow for sloth side, dusty-pink for
monkey side), warm-pastel and muted character bodies, one small-area
accent hit per character (sage for sloth's mug, butter for sloth's
notebook, pink/sage for monkey's mismatched accents), warm near-black
outline (#3A332C, NEVER pure black). Both characters self-contained
(not interacting), centered in their respective mood-panel halves,
~100px padding from canvas edges.
```

---

## §2 Negative prompt

```
NO realistic photographic style, NO 3D rendered character, NO hyper-
realistic anatomy, NO pencil sketch, NO graphite drawing, NO grayscale,
NO hard editorial inked monochrome, NO heavy crosshatching, NO sepia
editorial illustration, NO newspaper cartoon style. NO chibi, NO baby-
like proportions, NO big glossy cute-mascot eyes, NO heart eyes, NO
sparkles, NO painted blush cheeks (rosy cheek DOT is OK, NOT swathes of
blush), NO heart-pattern clothing, NO heart-shaped marks. NO candy pink
#FF6B9D, NO neon dopamine palette, NO saturated cartoon colors, NO
Sanrio sweet style, NO Disney princess style, NO children's-book sweet
illustration, NO manga-moe, NO Japanese kawaii eye style. NO dominant
mocha-brown body color. NO pure white #FFFFFF background, NO pure
black #000 outline, NO monochrome editorial beige-only. NO ball-curl
posture for sloth (the sloth must be sprawled flat, all limbs spread,
not curled). NO grinning monkey, NO playful active monkey pose, NO
action shot of typing or actively eating, NO modern laptop, NO smartphone,
NO emoji-like faces. NO party hat, NO clown costume, NO circus costume,
NO formal bowtie or top-hat gentleman trope, NO over-accessorized
cosplay outfit, NO matched outfit pieces (vest must be ill-fitting and
backwards, socks must be visibly mismatched). NO heart-pattern clothing,
NO pink-purple feminine clothing. NO text in image, NO captions, NO
labels, NO logos, NO watermarks.
```

---

## §3 3s 读判验收标准

### C 树懒 PASS
- ✅ 3s 读为 "树懒 sprawl 趴桌睡 + 旁边咖啡/课本 = 任务在, 人没启动"
- ❌ 3s 读为 "树懒在喝咖啡" → FAIL (动作叙事, C 应是状态)
- ❌ 3s 读为 "ball-curl 睡觉小动物" → FAIL (与 B 重合, 必须 sprawl 区分)
- ❌ 3s 读为 "咖啡台道具堆叠 + 小动物装饰" → FAIL (角色性丢失)

### D 猴 PASS
- ✅ 3s 读为 "猴顶键盘 + 拿香蕉 + 反穿装扮 + mismatched 袜 + 茫然 = 输入系统失效/抽象错位"
- ❌ 3s 读为 "可爱小猴子 cosplay" → FAIL (萌化, D 红线)
- ❌ 3s 读为 "猴在敲键盘 / 吃香蕉" → FAIL (动作叙事)
- ❌ 3s 读为 "穿衣服的卡通猴" → FAIL (没读出 mismatch 错位)

### 整图统一 PASS
- ✅ 漫画风/现代生活漫画 一致
- ✅ 不写实 / 不 3D / 不性冷淡素描 / 不萌系日漫
- ✅ Color baseline 一致 (warm cream `#F4EDE2` 底 + 中低饱和角色 + warm near-black outline + 小面积 accent)
- ✅ 5-bg audit pass (含 magenta diagnostic)

### Fail Handling (per Fiona 5:24:21)

如不通过, **不连续调 3 次**, 改回报:
- 哪条 FAIL 标准触发?
- 是 prompt 关键词偏离, 还是 image2 模型偏向?
- 下一步建议 (调 prompt 哪个词 / 换模型 / 重新研究)

---

## §4 image2 试金石执行

### 执行步骤
1. ✅ 调用 image2 (1 call) 使用 §1 主 prompt + §2 negative
2. 取生成的 contact sheet 原图
3. 切割成 C/D 两张独立 (或保 contact sheet 整图作 5-bg audit)
4. 5-bg audit (含 magenta diagnostic, per v1.x #8 教训)
5. 3 票读判 (PM/Lucy/我)
6. 报 PASS / FAIL + 详细 reasoning + 下一步建议

### 累计 image2
- 历史 v1.x: 42 calls
- 本试金石: 1 call (budget 严格 1)
- vNext 累计: 43 calls

---

## §5 落库 + 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 05:30 (本文件落库 + 通告) | prompt v3 spec 落 + 准备 image2 | Phoebe |
| 05:30-05:40 | 1 image2 调用 + chroma key + 5-bg audit + 三票 | Phoebe |
| 05:40 | 报 PASS / FAIL + 下一步 | Phoebe |
| 等 PM/Lucy | 三票协调 | Fiona / Lucy / Phoebe |
