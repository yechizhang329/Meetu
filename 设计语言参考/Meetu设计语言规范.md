# 觅遇社（Meetu）— 设计语言规范 v1.0

> 参考来源：Soul App 活动页面设计语言 + 觅遇社品牌资产 + 大学生社交场景定位
> 适用范围：所有 P0/P1/P2 视觉物料产出

---

## 一、设计理念：从 Soul 借鉴了什么

### Soul 的设计精髓（核心可借鉴点）

| 特征 | Soul 做法 | Meetu 如何适配 |
|------|----------|---------------|
| **摄影优先** | 真实高质量照片作为视觉主体，不是纯扁平插画 | 用 AI 生成「伪实拍」照片作主视觉，场景感 > 插画感 |
| **氛围层叠** | 深色半透明 overlay + 发光/霓虹点缀，营造沉浸式夜店感 | 暖色渐变 overlay（橙→粉→紫），营造「大学周末出去浪」的温暖活力感 |
| **插画作为人格层** | 小 icon、表情、贴纸叠加在照片上，增加可爱/互动感 | 觅遇仔 mascot + emoji 图标 + 手绘贴纸叠加在照片上 |
| **大字报式标题** | 毛笔/手写体大标题，带发光效果，视觉冲击力强 | 加粗圆体大标题（思源黑体 Heavy / 站酷快乐体），带微光效果 |
| **长滚动沉浸式** | 全页面主题体验，不是碎片化卡片 | 活动详情页/帖子用沉浸式长图设计 |
| **情绪化交互** | 可点击的情绪气泡、地图探索等游戏化元素 | 活动分类用情绪化选择器（不想宅 / 想社交 / 想搞钱） |

### Meetu 不照搬 Soul 的点

| Soul | Meetu 差异化 |
|------|-------------|
| 暗黑/深蓝夜店色系 | **暖色系**（橙/粉/紫/奶白），大学生阳光向上 |
| 匿名/虚拟头像 | **实名 + 真人照片**，信任感优先 |
| 一对一灵魂匹配 | **多人拼团活动**，群体社交能量 |
| 情绪/孤独共鸣 | **行动驱动**（"别一个人玩了"、"这周末一起"） |

### 补充参考：DavidC 提供的 Meetu 实际物料

| 物料 | 设计语言要点 |
|------|------------|
| **武汉大学生招募海报** | 暗色电路板底纹 + 霓虹黄/粉/青文字 + 赛博朋克风格话题气泡标签（#1人友好 #抢鲜体验 #不烧脑），适合招募/悬念类海报 |
| **觅遇仔祝福卡** | 暖红/橙节庆底色 + 觅遇仔居中 + 生活好物环绕（滑板/相机/书本/饮品），文案直击大学生痛点，适合品牌温度类内容 |
| **Nice to Meetu 实拍** | 真实社交场景（酒吧/餐厅），手持品牌卡片+游戏道具，验证了"Photo-Forward"原则——**真实场景照片的感染力远超纯插画** |

**关键启示：Meetu 的设计语言需要两种模式并行——**
1. **温暖日常模式**（橙/粉暖色系 + 觅遇仔 + 生活场景）→ 用于品牌心智、欢迎、活动封面
2. **潮酷招募模式**（暗底 + 霓虹色 + 赛博风标签）→ 用于主理人招募、悬念预告、限时活动

---

## 二、色彩系统

### 主色板

| 名称 | 色值 | 用途 |
|------|------|------|
| **觅遇橙** | `#F5A623` | 品牌主色、CTA 按钮、价格标签、高亮 |
| **活力粉** | `#FF7EB3` | 渐变辅助色、女生专场、社交场景 |
| **探索紫** | `#B388FF` | 渐变辅助色、盲盒/惊喜、夜间活动 |
| **信赖蓝** | `#2E86C1` | 认证/安全相关、信息说明 |
| **成就金** | `#FFD54F` | 主理人/VIP、奖励、Premium 标识 |

### 渐变方案

```
主品牌渐变：  linear-gradient(135deg, #F5A623 → #FF7EB3 → #B388FF)
温暖活力渐变：linear-gradient(135deg, #FF7EB3 → #FFB74D)
夜间活动渐变：linear-gradient(135deg, #4A148C → #B388FF → #64B5F6)
信任安全渐变：linear-gradient(135deg, #1A5276 → #5DADE2)
主理人尊贵渐变：linear-gradient(135deg, #4A148C → #CE93D8)  +  gold accent #FFD54F
招募/赛博渐变：linear-gradient(135deg, #0D0D1A → #1A1A3E)  +  neon accents #00FFCC / #FF2D78 / #FFE500
```

### 中性色

| 名称 | 色值 | 用途 |
|------|------|------|
| 深夜黑 | `#1A1A2E` | Banner/封面的暗色 overlay 底 |
| 正文黑 | `#2D2D2D` | 正文文字 |
| 说明灰 | `#8E8E93` | 辅助说明文字 |
| 背景奶白 | `#FAF8F5` | 浅色背景底 |
| 卡片白 | `#FFFFFF` | 卡片/弹窗底色 |

### 毛玻璃 overlay 规范

```
照片暗化层：  background: rgba(26, 26, 46, 0.45);  backdrop-filter: blur(12px);
信息栏底层：  background: rgba(0, 0, 0, 0.35);     backdrop-filter: blur(16px);
标签/胶囊：   background: rgba(255, 255, 255, 0.18); backdrop-filter: blur(8px);
```

---

## 三、字体系统

### 字体选择

| 层级 | 中文 | 英文/数字 | 备注 |
|------|------|----------|------|
| **大标题** | 思源黑体 Heavy / 站酷快乐体 | Montserrat Bold | 海报/Banner 主标题 |
| **副标题** | 思源黑体 Bold | Montserrat SemiBold | 活动名称、帖子标题 |
| **正文** | 苹方 Regular / 思源黑体 Regular | SF Pro / Montserrat | 描述文字 |
| **标签/元信息** | 苹方 Medium | Montserrat Medium | 分类标签、价格、时间 |

### 字号规范（按场景）

| 元素 | Banner(750px宽) | 封面(600px宽) | 卡片(750px宽) |
|------|----------------|--------------|--------------|
| 主标题 | 42-48px | 28-32px | 36-42px |
| 副标题 | 20-24px | 16-18px | 20-24px |
| 正文 | 16px | 14px | 16px |
| 标签/价格 | 13-15px | 12-14px | 13-15px |

### 文字效果

- **主标题**：白色 + 微阴影 `text-shadow: 0 2px 8px rgba(0,0,0,0.25)`
- **高亮词**：使用 `#FFD54F`（金色）或 `#F5A623`（橙色）着色
- **标签文字**：白色，放在毛玻璃胶囊内
- **价格数字**：`#FFD54F` 金色加粗，¥ 符号小一号

---

## 四、视觉构成法则：Photo-Forward + Illustration Overlay

> 这是从 Soul 借鉴的**最核心设计方法论**，直接决定出图质量

### 4.1 三层构成模型

每张视觉产出由三层构成：

```
第 3 层（最上层）：文字 + UI 元素（标题、标签、CTA、价格、Logo 水印）
第 2 层（人格层）：插画叠加（觅遇仔、emoji icon、手绘贴纸、装饰线条）
第 1 层（底层）  ：摄影/场景图（AI 生成的「伪实拍」照片 + 渐变 overlay）
```

### 4.2 第 1 层 — 场景照片（通过 nanobanana 生成）

**关键原则：不要生成纯插画，要生成「像手机拍的真实场景照片」**

| 场景类型 | 照片方向 | 关键词 |
|---------|---------|--------|
| 桌游·推理 | 桌面俯拍，摆满骰子/卡牌/饮料，暖黄灯光 | overhead shot, board game table, warm lighting, cozy |
| 派对·社交 | 派对场景，气球纸杯，年轻人剪影，彩色灯光 | party scene, colorful lights, young people, bokeh |
| 探店·美食 | 精致食物特写/咖啡拉花，浅景深 | food photography, shallow depth of field, café aesthetic |
| 运动·户外 | 户外跑步/篮球/草地，阳光明媚 | outdoor sports, sunshine, campus field, dynamic |
| City Walk | 城市街景，小巷/咖啡馆外/街道拐角 | urban street, café exterior, golden hour, aesthetic |
| 学习·搭伴 | 图书馆/自习室，书本笔记本，台灯 | library, study desk, warm desk lamp, books |
| 观影·展览 | 电影院座椅/画廊墙面，戏剧性光线 | cinema seats, art gallery, dramatic lighting |
| 盲盒·惊喜 | 礼物盒子打开瞬间，五彩纸屑 | gift box opening, confetti, surprise, colorful |

### 4.3 第 2 层 — 人格插画叠加

在照片上叠加的装饰元素：

- **觅遇仔 mascot**：在角落或重点位置出现（约占画面 10-15%）
- **Emoji 风格 icon**：🎲☕🏃📸 等作为分类标识
- **手绘贴纸效果**：箭头、星星、爱心、感叹号、对话气泡
- **毛玻璃胶囊标签**：分类名称、活动亮点
- **微发光效果**：关键元素加 `drop-shadow` 或 `glow`

### 4.4 第 3 层 — 文字 & UI 排版

- 大标题用中文，放在画面左侧或顶部 1/3
- 信息区（标题/亮点/价格/人数）放在底部深色毛玻璃条内
- CTA 按钮（"立即拼团"/"申请成为主理人"）用觅遇橙 `#F5A623`
- Logo 水印 "觅遇社 Meetu" 放右下角，40% 白色透明度

---

## 五、各物料类型的设计语言应用

### 5.1 顶部 Banner（750×340px）

```
结构 = 左文字区(60%) + 右视觉区(40%)
底层 = 品牌渐变背景（不用照片，保持品牌一致性）
文字区 = 大标题 + 副标题 + CTA胶囊按钮
视觉区 = 觅遇仔/图标徽章/认证盾牌
装饰 = 毛玻璃圆形、✦ 星光点缀、低透明度背景大字
```

### 5.2 活动封面图（600×800px）

```
结构 = 顶部分类标签 + 中央场景照片(占70%面积) + 底部信息栏
底层 = AI 生成场景照片 + 品牌色渐变 overlay（30-45%透明度）
中层 = 场景相关 emoji/插画叠加
顶层 = 分类胶囊标签(左上) + 底部毛玻璃信息栏(标题/亮点/价格)
水印 = "觅遇社 Meetu" 右下角
```

**与之前纯插画风格的关键区别：封面图的视觉主体必须是「照片级」场景，不是纯色+emoji 图标**

### 5.3 广场帖图文卡片（750×1000px）

```
结构 = 全画面渐变底 + 中央主视觉 + 上下文字
底层 = 品牌渐变色（欢迎/流程引导用纯渐变即可）
中层 = 手机截屏 mockup / 步骤插画 / 觅遇仔场景
顶层 = 大标题 + 步骤说明 + Logo
```

### 5.4 主理人身份卡（750×1000px）

```
结构 = VIP 会员卡布局
底层 = 深紫 #4A148C + 几何暗纹
中层 = 金色边框卡片 + 皇冠 icon + 认证徽章
顶层 = "觅遇社主理人" 金字 + 权益列表
质感 = 金属光泽、烫金效果、微 3D 倾斜
```

### 5.5 分享海报（750×1334px）

```
结构 = 上60%照片区 + 中间信息区 + 底部扫码区
底层 = 活动封面照片（大图）
中层 = 白底信息卡：标题/亮点/时间地点/价格/主理人
底层 = 觅遇仔(小) + 小程序码 + "扫码加入" + Logo
```

### 5.6 分类 icon（120×120px）

```
结构 = 圆形渐变底 + 白色线条图标
保持 = 统一圆形、统一描边粗细(2-3px)、统一阴影
配色 = 每个分类对应独立渐变色
```

---

## 六、Soul 式活动封面 — 升级版 Prompt 模板

> 以下模板直接用于 nanobanana 出图，替代之前的纯插画 prompt

### 通用前缀（所有封面 prompt 开头添加）

```
Professional social app event cover image, 600x800px portrait orientation.
Photo-realistic style with warm color grading.
The image should feel like a high-quality lifestyle photo taken on a university campus,
with a subtle warm color overlay and modern app UI elements.
```

### 通用后缀（所有封面 prompt 结尾添加）

```
Style: lifestyle photography meets app UI design, warm and inviting,
university student demographic, similar to Soul App activity pages.
High quality, vibrant but not oversaturated, Instagram-worthy aesthetic.
DO NOT generate text or Chinese characters in the image.
```

### 示例：桌游·推理（升级版 vs 旧版对比）

**旧版（纯插画，效果一般）：**
```
A stylish illustration of a board game scene — oversized dice,
detective magnifying glass, game cards floating...
Style: modern flat illustration, game-themed
```

**升级版（Photo-Forward，Soul 式）：**
```
Professional social app event cover image, 600x800px portrait orientation.

A warm overhead photograph of a cozy board game night scene:
wooden table surface with scattered dice, playing cards (Catan/UNO style),
snack bowls, craft beer glasses, and warm string lights reflecting on the table.
Hands of young people reaching for game pieces.
Shot with shallow depth of field, warm amber lighting like a cozy café.

Color grading: warm amber and deep navy blue tones,
subtle vignette effect at edges.

Style: lifestyle photography meets app UI design, warm and inviting,
university student demographic, similar to Soul App activity pages.
High quality, vibrant but not oversaturated, Instagram-worthy aesthetic.
DO NOT generate text or Chinese characters in the image.
```

---

## 七、视觉质量检查清单

每张产出物料必须通过以下检查：

- [ ] **照片感**：主视觉是否有「手机实拍」质感？（纯插画 = 不合格）
- [ ] **氛围感**：是否有温暖/活力/有趣的情绪？（冷淡/死板 = 不合格）
- [ ] **品牌色**：是否使用了觅遇社色板内的颜色？（偏色 = 调整）
- [ ] **层次感**：三层结构（照片底 + 装饰层 + 文字层）是否清晰？
- [ ] **信息层级**：标题 > 亮点 > 信息 > 水印，是否一目了然？
- [ ] **年轻化**：目标用户 18-25 岁大学生，是否够 Gen-Z？
- [ ] **无乱码文字**：AI 生成的图中是否有变形的中英文？（有 = 后期去除）
- [ ] **尺寸正确**：是否符合目标尺寸比例？

---

## 八、觅遇仔 Mascot 使用规范

### 形象描述（用于 prompt）

```
A cute round white robot mascot character called "觅遇仔":
- Round white body with a slightly chubby/chibi proportion
- Dark screen face with two small yellow rectangular eyes and a curved smile
- Wearing an orange knit scarf around the neck
- Small golden star accessory on the head/ear area
- Holding a red puzzle piece in one hand
- Brown outline/stroke around the character
- Friendly, waving pose
```

### 使用场景

| 场景 | 大小 | 位置 | 状态 |
|------|------|------|------|
| Banner | 100-140px | 右侧 | 挥手/举手 |
| 活动封面 | 不放 | — | 用 emoji icon 替代 |
| 欢迎帖 | 180-220px | 居中 | 挥手+被 icon 环绕 |
| 分享海报 | 60-80px | 左下角 | 挥手 |
| Loading/空状态 | 120px | 居中 | 困惑/期待 |

---

## 九、设计工具链

| 环节 | 工具 | 用途 |
|------|------|------|
| AI 场景图生成 | nanobanana | 生成照片级场景底图 |
| 文字/排版叠加 | Figma / Canva / 创客贴 | 添加标题、标签、信息栏、Logo |
| 觅遇仔叠加 | Figma（导入 PNG） | 在固定位置放置 mascot |
| 图标制作 | Figma / AI 生成 + 手动调整 | 分类 icon 统一化 |
| 最终导出 | Figma 导出 PNG @2x | 确保清晰度 |

---

*v1.0 | 2026-04-02 | Phoebe 制定，基于 Soul App 设计语言参考*
