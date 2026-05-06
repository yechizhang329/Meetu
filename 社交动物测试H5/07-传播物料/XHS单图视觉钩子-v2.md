# 社交动物测试 XHS 单图视觉钩子 v2

## 背景

DavidC 反馈：上一版小红书传播包无论文案语气、内容还是图片都不够；图片不需要多，最好一张图就完成“视觉钩子”；文案必须和 H5 题目/选项/结果的文风一致，风趣、有梗、符合大学生目标群体。

本版结论：**不要做 9 图说明包，也不要把 16 个动物全摊开。首发先做一张“群聊照妖镜式”的单图封面，让用户产生强烈好奇：我到底是哪只？但不直接剧透完整结果。**

---

## 单图核心策略

### 目标

一张图完成 3 件事：

1. **停住人**：标题像 H5 里的题目和结果文案，不像宣传海报；
2. **制造自我代入**：让用户想到自己/室友/群友；
3. **不剧透**：只露出动物名字和局部剪影/碎片，不展示完整分析和测试路径。

### 不做

- 不做完整 16 动物图鉴；
- 不做心理测评广告；
- 不做“点击链接测试”的外链海报；
- 不做精致品牌 KV；
- 不做可爱萌宠封面；
- 不堆 12 道题和完整结果文案。

---

## 推荐主方案：群聊照妖镜

### 封面文案

```text
你在群里
到底是哪种动物

测完别自己看
发群里才知道朋友怎么骂你
```

### 辅助小字 / 贴纸

```text
社交动物测试
12个小场景｜测着玩但可能有点像
```

### 视觉结构

- 画幅：小红书 3:4，建议 `1242×1660` 或 `1080×1440`。
- 背景：沿用 H5 的暖纸底 / 桌面便签感，但不要太精致。
- 中央主标题：大字黑线/手写排版感，像“群聊里突然甩出来的一张测试截图”。
- 四周动物：只放 **6–8 个动物局部/剪影/半遮挡**，不放完整 16 结果。
  - 建议出现：省电猫、临门鸽、弹幕羊驼、接梗狐、回血熊猫、开屏孔雀、攻略仓鼠、社交蝴蝶。
  - 动物可以只露头、尾巴、爪子、半个舞台、空弹幕泡泡。
- 贴纸元素：blank 聊天气泡、低电量符号、门框、无字弹幕框、问号尾巴。
- 角落放一个很小的 Meetu footer 即可，不要大 logo。

### 为什么这版更对

- “群里到底是哪种动物”直接对应 H5 的场景：新群、群聊冷掉、加微信后躺列表；
- “朋友怎么骂你”对应结果页的朋友锐评，不像品牌在推测试；
- 露出动物局部，不让用户在封面就自选结果；
- 画面有槽点，方便评论：`我先替临门鸽认领一下` / `弹幕羊驼是我室友`。

---

## 备选标题

如果主标题需要更强/更克制，可以从下面选：

1. `群聊里的你是哪种生物`  
   最稳，强相关，但“生物”比“动物”更抽象。

2. `这测试有点冒犯但准`  
   点击强，但略像标题党，适合正文标题，不一定适合封面。

3. `你不是社恐 只是物种没对上`  
   金句感强，但可能误伤“社恐”话题，封面慎用。

4. `测完想发给朋友骂`  
   最有传播动作，但需要画面更克制，避免显得低俗。

5. `你在朋友局里是什么动物`  
   更清晰，但不如“群里”有互联网梗感。

主推：**`你在群里 到底是哪种动物`**。

---

## 配套正文语气方向

正文不要官方介绍，也不要解释产品。像发给朋友的口吻：

```text
做了个不太严肃的社交动物测试。

本来只是想测 i 人 e 人，结果越做越像群聊照妖镜。
有人是省电猫，有人是临门鸽，有人表面平静但脑内弹幕开满。

测完别急着信。
先发给朋友，看他们会不会说：这不就是你？

评论区报一下，你觉得自己是哪只。
想测完整版的话，我放评论区。
```

正文原则：

- 用 `测着玩 / 可能有点像 / 发群里吵一架` 这类低承诺表达；
- 不写“产品上线”“功能”“平台”；
- 不写“点击链接”；
- 不写“精准测评”“专业心理”；
- 评论区再发入口。

---

## 单图 Image Prompt（GPT Image 2 / Gemini 通用）

> 用于生成一张小红书 3:4 单图视觉钩子，不是 contact sheet，不是完整结果图鉴。

```text
Create a 3:4 Xiaohongshu cover image for a Chinese college social personality test.

Core concept: a weird, funny “social animal test” cover. It should look like a screenshot-worthy college meme test, not an app advertisement.

Exact Chinese text to render:
Main title, very large:
"你在群里\n到底是哪种动物"

Secondary line, smaller but readable:
"测完别自己看\n发群里才知道朋友怎么骂你"

Small sticker text:
"社交动物测试"
"12个小场景｜测着玩但可能有点像"

Visual style:
- desktop sticky-note zoo
- weird little editorial animals
- absurd personality mascots
- deadpan anxious internet doodles
- black-line doodle, offbeat college meme style
- warm paper background, taped notes, blank chat bubbles, low-battery icon, blank comment bubbles
- funny, slightly unhinged, but clean and readable
- anti-cute: not pet sticker, not kawaii, not baby animal, not plush toy

Composition:
- 3:4 vertical cover, strong central title hierarchy.
- Main title must be the first visual focus.
- Surround the title with 6–8 partial animal fragments / silhouettes, not full result cards.
- Suggested animal fragments: low-battery cat half collapsed, pigeon stuck at a doorway, calm alpaca with blank comment bubbles, fox with question-mark tail, panda in recovery mode, peacock mini-stage, hamster checklist stack, butterfly path.
- Animals should be cropped / peeking / half-hidden around the title to create curiosity.
- Do not show all 16 complete animals.
- Do not show full result descriptions.
- Do not include QR code, link, button, logo-heavy branding, app UI, or marketing CTA.

Color:
- warm off-white paper base
- black line art #2b2b2b
- use small accents from H5 palette: #5d7186, #ff7a3d, #ffe15a, #c27cff, #59b7d8
- keep enough contrast for Chinese text.

Negative:
No QR code, no URL, no phone mockup, no app screenshot, no sales poster, no psychology clinic look, no cute pet sticker style, no children storybook style, no 3D, no glossy sticker, no full 16-result grid, no excessive text, no fake English, no watermark.
```

---

## 手工排版版本建议

如果 AI 生图继续跑偏，建议不用 AI 做完整图，改成手工排版：

1. 背景：H5 暖纸底色；
2. 主标题：手工排两行大字；
3. 动物素材：从现有 H5 结果图里截 6–8 只，做局部放大/遮挡；
4. 贴纸：手动画低电量、无字弹幕泡泡、门框、问号尾巴；
5. 最后整体加轻微歪斜/圈选标记。

手工版更容易控制“不剧透”和“不像广告”。AI 更适合生成动物局部/氛围素材，不一定适合一次完成整张封面。

---

## 验收标准

- [ ] 0.5 秒能读到主标题；
- [ ] 画面第一感是“这个测试有点好笑”，不是“品牌宣传”；
- [ ] 不展示完整 16 结果，不让用户直接自选；
- [ ] 至少有 3 个可评论的动物槽点：临门鸽、省电猫、弹幕羊驼等；
- [ ] 文案语气和 H5 题目/结果一致；
- [ ] 无二维码、无下载、无外链、无营销 CTA；
- [ ] 截图发群里，别人能接一句“这不就是你”。

