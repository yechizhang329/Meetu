# Profile Image Spec v1

**作者**: Fiona
**时间**: 2026-05-12 17:14
**SoT**: baseline r2.1 + David 15:44/15:50 拍板
**用途**: Phoebe2 生成 5 张角色 profile 图（头像型）

---

## 用途对比

**baseline contact sheet**（r2.1）= 全身写真：
- 包含角色全身姿态 + 装饰元素
- 表达"角色在做什么 / 处于什么状态"
- 用途：结果页 Block 1 分享图主体

**profile 图** = 社交平台头像：
- 只保留角色**头部+肩像**（头+颈+部分肩膀）
- 表达"角色是谁 / 角色长什么样"
- 用途：结果页 Block 4 "换个嘴替"CTA 卡上的小头像、H5 导航栏角色切换头像、Meetu 平台用户头像/角色徽章等

---

## 关键要求

**1. 表情沿用 baseline r2.1**（David 15:44 拍板）
- A 章鱼：眉头紧锁嘴角下拉（紧张）
- B 猫：眼神空洞涣散（虽然 baseline 是闭眼，但 spec 要求睁眼空洞）
- C 树懒：deadpan 半闭眼平嘴
- D 猴子：眼睛略错位或一大一小（癫）
- E 刺猬：小眼睛礼貌微笑

**2. 方形 1200x1200，左/上/右预留足够空白**（David 15:44 拍板）
- 角色主体居中，占画面 60-70%
- 左/上/右各预留 15-20% 空白（前端裁圆形时不会切到角色）
- 底部可以紧一点（头像通常不裁底部）

**3. 5 个角色不同背景色**（David 15:50 拍板）
- 能看出区别但饱和度不高且不突兀
- 背景色不要成为视觉焦点（David 15:50 强调）
- 与角色身体色有一定差异（避免看不清）

---

## 5 个角色 profile 图 spec

### A 章鱼 Profile

**包含内容**：
- 头部（章鱼头 = 身体上半部分，因为章鱼头身一体）
- 2-3 条触手（从头部延伸出来，表明这是章鱼）
- 表情：眉头紧锁嘴角下拉（对齐 baseline r2.1）
- 不包含："硬撑"字、荧光绿 spike（这些是全身写真的装饰元素）

**背景色**：`#E8F0ED`（极浅薄荷，几乎白但带一点点绿）

**尺寸**：1200x1200 方形，章鱼头部居中占 60-70%，左/上/右预留 15-20% 空白

---

### B 猫 Profile

**包含内容**：
- 头部（猫脸）
- 颈部+部分肩膀
- 表情：眼神空洞涣散（睁眼但完全unfocused，对齐 baseline r2.1 spec 要求，虽然 baseline 实际出的是闭眼）
- 胡须、耳朵（核心识别特征）
- 不包含：电池图标（这是全身写真的装饰元素）

**背景色**：`#F5EDE8`（极浅暖米，几乎白但带一点点桃）

**尺寸**：1200x1200 方形，猫头部居中占 60-70%，左/上/右预留 15-20% 空白

---

### C 树懒 Profile

**包含内容**：
- 头部（树懒脸）
- 颈部+部分肩膀
- 一只前爪（从肩膀延伸出来，表明这是树懒）
- 表情：deadpan 半闭眼平嘴（对齐 baseline r2.1）
- 不包含：纸堆、进度条、"进度1%"字（这些是全身写真的装饰元素）

**背景色**：`#E8EDF2`（极浅天蓝，几乎白但带一点点蓝）

**尺寸**：1200x1200 方形，树懒头部居中占 60-70%，左/上/右预留 15-20% 空白

---

### D 猴子 Profile

**包含内容**：
- 头部（猴脸）
- 颈部+部分肩膀
- 表情：眼睛略错位或一大一小（癫，对齐 baseline r2.1）
- 不包含：香蕉、报错弹窗、绿蓝飞溅（这些是全身写真的装饰元素）

**背景色**：`#F5F0E8`（极浅柠檬，几乎白但带一点点黄）

**尺寸**：1200x1200 方形，猴子头部居中占 60-70%，左/上/右预留 15-20% 空白

---

### E 刺猬 Profile

**包含内容**：
- 头部（刺猬脸，三四分之三视角）
- 颈部+部分肩膀
- 刺（从头部/肩膀延伸出来，核心识别特征）
- 表情：小眼睛礼貌微笑（对齐 baseline r2.1）
- 不包含：对话气泡、灯泡 emoji、紫色虚线圈（这些是全身写真的装饰元素）

**背景色**：`#EDE8F0`（极浅薰衣草，几乎白但带一点点紫）

**尺寸**：1200x1200 方形，刺猬头部居中占 60-70%，左/上/右预留 15-20% 空白

---

## 生成方式

**5 张单独生图**（每个角色一张独立 prompt，image2 x5）

不做 contact sheet（profile 图不需要裁剪，直接单生更干净）

---

## Prompt 模板（通用部分）

```
A square profile picture (1200x1200) of [CHARACTER] from the "心情值班室" 
character set. Head-and-shoulders portrait (头部+肩像): head + neck + 
partial shoulders visible, character centered and占 60-70% of the frame.

Style: Hand-drawn ink illustration with rough thick black marker outline 
(charcoal-dark-brown #1A1715, irregular 3-4 px weight). Body SIMPLIFIED 
to flat block shapes — NO detailed eyebrows, NO realistic fur texture, 
NO muscle/anatomical lines, NO fine hatching, NO 3D rendering, NO digital 
sleek vector polish, NO AI mascot polish, NO chibi, NO baby-face big-eyed 
cute mascot.

Background: solid [BACKGROUND_COLOR] (极浅[COLOR_NAME]，几乎白但带一点点
[COLOR_TINT]). Background must NOT become the visual focus — it should 
recede behind the character.

Generous padding: 15-20% empty space on left/top/right sides (方便前端
裁圆形时不会切到角色). Bottom can be tighter.

Expression: [CHARACTER_EXPRESSION from baseline r2.1]

Core identifying features: [CHARACTER_FEATURES]

DO NOT include: [EXCLUDED_ELEMENTS from full-body baseline]

NO text, NO captions, NO labels, NO logos, NO decorative elements from 
the full-body version.
```

---

## 每个角色的具体 prompt

见下方 5 个独立 prompt 文件（或在本文件内展开）。

---

## 累计 image2

+5（5 张 profile 图单独生成）
