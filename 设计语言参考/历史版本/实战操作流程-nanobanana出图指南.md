# 觅遇社 — 全内容实战出图流程（nanobanana）

> 本文档为所有 P0/P1/P2 视觉物料的逐条操作指南
> 工具链：nanobanana（AI 生成场景图）+ Figma/Canva（排版叠加文字）
> 品牌名称：觅遇社（Meetu）| 主理人（原"局长"）

---

## 核心方法论：两步出图法

**所有物料统一采用「AI 生成底图 + 手动叠加排版」两步法：**

| 步骤 | 工具 | 产出 |
|------|------|------|
| Step 1：生成场景底图 | nanobanana | 无文字的高质量场景照片/插画 |
| Step 2：叠加文字排版 | Figma / Canva / 创客贴 | 添加标题、标签、信息栏、Logo、mascot |

**关键原则：**
- prompt 中**不要求 AI 生成中文文字**（AI 生成的中文必定乱码）
- 所有中文文字、品牌元素、UI 组件在 Step 2 手动叠加
- 底图要求：构图留出文字区域空间（上方/下方/左侧留白）

---

## 一、顶部 Banner（750×340px）×3

### Banner 1 — 品牌心智

**Step 1：nanobanana prompt**
```
A wide horizontal banner background image (750x340px, 2.2:1 ratio).

Warm gradient abstract background blending orange, pink and soft purple.
On the right side: a group of translucent frosted glass cards floating at slight angles,
each containing a simple white icon silhouette (dice, coffee cup, running figure, camera).
Soft white circular bokeh lights and small star sparkles scattered throughout.
Two decorative translucent circles in the background at different sizes.

Style: modern mobile app banner, clean, vibrant, Gen-Z aesthetic.
Warm and inviting atmosphere. No text, no characters, no faces.
Leave the left 55% relatively clean for text overlay.
```

**Step 2：Figma 叠加**
- 左侧添加：主标题「别一个人玩了」白色 48px 加粗
- 副标题「觅遇社 — 找到你的搭子」白色 24px
- 毛玻璃胶囊按钮「立即探索 →」
- 右下角 Logo 水印「觅遇社 Meetu」
- 可选：右侧叠加觅遇仔 mascot PNG

---

### Banner 2 — 安全信任

**Step 1：nanobanana prompt**
```
A wide horizontal banner background (750x340px, 2.2:1 ratio).

Professional blue gradient background from dark navy (#1A5276) to sky blue (#5DADE2).
On the right side: a large golden shield shape with a glowing white checkmark inside,
emanating a soft radial golden glow. Below the shield, three small circular badges
in a row with subtle white borders.
Subtle radial light effect behind the shield. Clean and trustworthy feel.

Style: secure, professional, campus verification theme.
Modern app UI design. No text. Leave left 55% clean for text overlay.
```

**Step 2：Figma 叠加**
- 左侧：主标题「全员实名 · 在校认证」白色 44px
- 副标题「只和真实校友一起玩」
- 三个毛玻璃标签：「🎓 学信网认证」「🪪 实名验证」「👩 女生安心模式」
- 盾牌内可叠加「已认证」文字
- 右下角 Logo

---

### Banner 3 — 主理人招募

**Step 1：nanobanana prompt**
```
A wide horizontal banner background (750x340px, 2.2:1 ratio).

Rich purple gradient background from deep purple (#4A148C) to light purple (#CE93D8).
On the right: a large circular golden badge/medal with metallic gold gradient,
a crown shape on top of the circle, glowing warmly.
Subtle golden sparkles and star decorations scattered in background at low opacity.
Background has faint crown watermark pattern at 5% opacity.

Style: prestigious, empowering, VIP recruitment feel.
Purple and gold color scheme. No text. Leave left 60% clean for text overlay.
```

**Step 2：Figma 叠加**
- 金色标签「🏆 主理人招募」
- 主标题「**会玩**，就是你的超能力」（"会玩"用金色 #FFD54F）
- 副标题「0成本成为觅遇社主理人 · 把热爱变副业」
- 三个权益胶囊：「🆓 0成本开局」「📣 平台帮你找人」「💰 收益自动到账」
- 金色 CTA 按钮「申请成为主理人 →」
- 徽章内叠加「主理人」文字

---

## 二、活动封面图（600×800px）×8

### 通用流程

每张封面图 = **AI 场景照片底图** + **Figma 叠加 UI 元素**

**Step 2 统一叠加元素（所有封面通用）：**
- 左上角：分类 icon 毛玻璃胶囊（emoji + 分类名称）
- 底部：深色毛玻璃信息栏（`rgba(0,0,0,0.35) + blur(12px)`）
  - 活动标题 28px 白色加粗
  - 一句话亮点 16px 白色 80%透明度
  - 「👥 X人成团」+「📅 时间」+ 价格「¥XX」金色
- 右下角水印「觅遇社 Meetu」

---

### 封面 1 — 🎲 桌游·推理

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait orientation.

Overhead photograph of a cozy board game night: wooden table with scattered colorful dice,
playing cards spread out, snack bowls, craft beer glasses with condensation.
Warm amber string lights reflecting on the table surface.
Hands of young people reaching for game pieces, shallow depth of field.
Shot from above at 45-degree angle.

Color grading: warm amber and deep navy blue tones, cozy café atmosphere.
Style: lifestyle photography, Instagram-worthy, university students game night.
No text, no UI elements. Leave top 15% and bottom 25% slightly darker for overlay.
```

---

### 封面 2 — 🎉 派对·社交

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait.

A vibrant house party scene: colorful balloons, paper cups, confetti on a table,
fairy lights and disco ball reflections creating colorful bokeh.
Silhouettes of young people laughing and socializing in background, slightly out of focus.
Neon purple and pink lighting from the side.

Color grading: purple to hot pink tones, energetic nightlife vibe.
Style: party photography, Gen-Z social gathering, lively atmosphere.
No text. Leave top and bottom space for UI overlay.
```

---

### 封面 3 — ☕ 探店·美食

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait.

Close-up of a beautifully arranged café table: latte art coffee in a ceramic cup,
a croissant on a small plate, a slice of cake, green plant in background.
Natural window light creating soft shadows. Wooden table surface.
Shallow depth of field, warm and cozy color tones.

Color grading: warm brown to golden orange tones, inviting café aesthetic.
Style: food photography, Instagram café aesthetic, university student brunch.
No text. Leave top and bottom space for UI overlay.
```

---

### 封面 4 — 🏃 运动·户外

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait.

Dynamic outdoor sports scene on a university campus: a running track or basketball court,
bright sunshine, green trees in background, blue sky with white clouds.
Motion blur of young athletes, colorful sneakers, water bottles on sideline.
Energetic and fresh atmosphere, golden hour lighting.

Color grading: fresh green to sky blue tones, vibrant and natural.
Style: sports photography, active lifestyle, campus outdoor activity.
No text. Leave top and bottom space for UI overlay.
```

---

### 封面 5 — 📸 City Walk

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait.

Aesthetic urban street scene: a charming narrow street with café awnings,
potted plants, vintage signage, dappled sunlight through trees.
A person's back walking down the street (anonymous, no face visible).
Golden hour lighting creating long shadows. Film photography look.

Color grading: sky blue to warm golden tones, wanderlust feel.
Style: street photography, urban exploration, film aesthetic.
No text. Leave top and bottom space for UI overlay.
```

---

### 封面 6 — 📚 学习·搭伴

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait.

Calm study scene: a wooden library desk with open books, notebook with handwritten notes,
mechanical pencils, a warm desk lamp glowing, a coffee mug.
Two pairs of hands visible at the table edges (study partners).
Soft warm light, shallow depth of field on the notebook.

Color grading: cool gray-blue with warm lamp accent, focused calm mood.
Style: study aesthetic, academic atmosphere, cozy library vibes.
No text. Leave top and bottom space for UI overlay.
```

---

### 封面 7 — 🎬 观影·展览

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait.

Cinematic scene: rows of empty red velvet cinema seats with dramatic side lighting,
a large bright movie screen glowing in the background.
A bucket of popcorn and two drinks on a seat armrest in foreground.
Moody dramatic lighting with purple and gold tones.

Color grading: deep purple to warm gold, cinematic atmosphere.
Style: cinema photography, artistic, dramatic lighting.
No text. Leave top and bottom space for UI overlay.
```

---

### 封面 8 — ❓ 盲盒·惊喜

**Step 1：nanobanana prompt**
```
Professional event cover photo, 600x800px portrait.

A colorful surprise scene: a gift box lid flying open with colorful confetti,
paper streamers, and small wrapped presents bursting out.
Rainbow colored smoke or powder in the background.
Bright, playful, high-energy composition. Studio lighting.

Color grading: rainbow gradient — orange, pink, purple, blue. Playful and joyful.
Style: product photography meets party theme, surprise reveal moment.
No text. Leave top and bottom space for UI overlay.
```

---

## 三、欢迎+玩法帖图文卡片（750×1000px）×4

### 卡片 1 — 欢迎

**Step 1：nanobanana prompt**
```
A warm, vibrant illustration background, 750x1000px portrait.

Warm orange-to-pink gradient background (#F5A623 to #FF7EB3) with soft sparkle effects.
Center: floating activity-related icons in translucent glass circles arranged in a loose ring:
dice, coffee cup, camera, basketball, book, film clapperboard.
The icons are simple, white, line-art style inside frosted glass bubbles.
Soft white bokeh lights scattered throughout.

Style: modern app illustration, friendly, welcoming, clean composition.
No text, no characters. Leave top 25% and bottom 15% clean for text.
```

**Step 2：Figma 叠加**
- 顶部：「欢迎来到觅遇社！」白色加粗 + 「你的搭子，在这里等你」
- 中央：叠加觅遇仔 mascot PNG（挥手姿势）
- 底部：Logo「觅遇社 Meetu」

---

### 卡片 2 — Step 1 浏览活动

**Step 1：nanobanana prompt**
```
A clean app walkthrough illustration, 750x1000px portrait.

Soft purple gradient background (#B388FF to #E1BEE7).
Center: a large smartphone mockup (white iPhone frame) slightly tilted,
showing a colorful activity list interface with placeholder colored rectangles
representing activity cards. A hand/finger gesture pointing at the screen.
Clean, minimal, instructional feel.

Style: app UI walkthrough, clean tutorial card, modern design.
No readable text on screen. Leave top 25% for step number and title.
```

**Step 2：Figma 叠加**
- 顶部：「Step 1」大号 + 「浏览活动」标题 + 「看看身边有什么好玩的」
- 手机屏幕内可叠加简化的活动列表 UI mockup

---

### 卡片 3 — Step 2 一键拼团

**Step 1：nanobanana prompt**
```
A social connection illustration, 750x1000px portrait.

Orange gradient background (#F5A623 to #FFB74D).
Center: multiple colorful circular avatars (abstract, no real faces — just solid color circles
with simple smiley expressions) connected by dotted lines, converging toward
a central larger circle. Represents people joining together.
Clean, modern, energetic composition.

Style: social network visualization, people connecting, modern flat design.
No text. Leave top 25% for step info.
```

**Step 2：Figma 叠加**
- 顶部：「Step 2」+「一键拼团」+「找到搭子一起出发」
- 中央大圆内叠加「立即拼团」CTA 按钮

---

### 卡片 4 — Step 3 线下面基

**Step 1：nanobanana prompt**
```
A warm friendship scene illustration, 750x1000px portrait.

Warm pink gradient background (#FF7EB3 to #F8BBD0).
Center: a group of illustrated young people (simple, stylized, diverse) sitting around
a round table, playing board games, laughing, high-fiving. Warm cozy setting.
Five golden stars floating above the group. A speech bubble with a heart shape.
Illustrated style, not photorealistic. Friendly and joyful atmosphere.

Style: warm friendship illustration, cute characters, activity review theme.
No text. Leave top 25% for step info.
```

**Step 2：Figma 叠加**
- 顶部：「Step 3」+「线下面基」+「开心玩，认真评」

---

## 四、主理人招募帖 — 身份卡（750×1000px）

**Step 1：nanobanana prompt**
```
A premium VIP membership card design, 750x1000px portrait.

Dark purple background (#4A148C) with subtle geometric diamond pattern at low opacity.
Center: a large horizontal card shape with metallic gold border and gradient
(#FFD54F to #F5A623), slightly tilted in 3D perspective.
A golden crown sitting on top of the card. Golden light rays emanating from the card.
Small badge shapes flanking the card (star, checkmark, trophy) in gold.
Premium, prestigious, exclusive club feel.

Style: VIP card design, metallic gold on dark purple, luxury membership aesthetic.
No text on the card. Leave space for text overlay on the card surface.
```

**Step 2：Figma 叠加**
- 卡片上方：金色皇冠 + 「觅遇社主理人」金色加粗 + 「MEETU HOST」英文
- 卡片中央：头像占位圆 + 认证徽章「⭐ 5星级」「✅ 已认证」「🏆 主理人」
- 卡片下方：权益列表
  - 🆓 0成本发布活动
  - 📣 平台流量扶持
  - 💰 活动收益到账
  - 👑 专属身份标识

---

## 五、分享海报模板（750×1334px）

**Step 1：nanobanana prompt**
```
A clean share poster template background, 750x1334px portrait.

Top 60%: a placeholder area with soft warm gradient (light peach to white)
and subtle rounded rectangle frame suggesting an image placeholder.
Bottom 40%: clean white background with very subtle warm tint at the edges.
A thin orange (#F5A623) accent line near the very bottom.
Overall clean, modern, scannable layout feel.

Style: WeChat share card aesthetic, clean, minimal, modern Chinese app poster.
No text, no specific content. Template feel.
```

**Step 2：Figma 叠加**
- 上部：活动封面图放入圆角框
- 中部白底区域：
  - 活动标题（黑色加粗）
  - 一句话亮点（灰色）
  - 信息行：📅 时间 | 📍 地点 | 👥 X人成团
  - 价格「¥XX」橙色大字
  - 主理人头像 + 名称
- 底部：觅遇仔（小）+ 小程序码 + 「扫码加入」+ Logo

---

## 六、活动分类 icon（120×120px）×10

**统一 prompt 模板（替换 [描述] 和 [颜色] 即可）：**

```
A single circular app icon, 120x120px.
Circular shape with soft [颜色] gradient background.
Centered simple white line-art [描述] icon, 2-3px stroke weight.
Soft drop shadow under the circle. Clean minimal style.
No text, no extra decoration. App UI category icon design.
```

| 分类 | [颜色] | [描述] |
|------|--------|--------|
| 🎲 桌游·推理 | blue-to-orange | dice |
| 🔐 密室·剧本杀 | dark blue-to-indigo | key and lock |
| 🎉 派对·社交 | purple-to-pink | balloon with confetti |
| ☕ 探店·美食 | warm brown-to-orange | coffee cup with steam |
| 🏃 运动·户外 | green-to-sky blue | running person |
| 📸 City Walk | sky blue-to-light blue | camera |
| 📚 学习·搭伴 | gray-blue-to-light gray | open book |
| 💬 交流·分享 | teal-to-cyan | speech bubble |
| 🎬 观影·展览 | deep purple-to-gold | film clapperboard |
| ❓ 盲盒·随机 | rainbow multicolor | gift box with question mark |

---

## 七、小红书引流封面（1080×1440px 或 3:4）

### 风格参考

参考已有素材「武汉大学生 全城急寻8个狠人」的赛博朋克/霓虹风格：
- 深黑底 + 霓虹色文字（粉/黄/青）
- 电路板/科技感背景纹理
- 大字报式标题，视觉冲击力强
- 话题标签用霓虹色对话气泡

### 封面 1 — 痛点共鸣型

**Step 1：nanobanana prompt**
```
A bold social media cover image, 1080x1440px portrait (3:4 ratio).

Dark black background with subtle cyberpunk circuit board pattern in neon yellow lines.
Neon pink and cyan light streaks across the image.
Abstract silhouette of a city skyline at the bottom.
Glowing neon speech bubble shapes scattered in composition.
High contrast, bold, eye-catching.

Style: cyberpunk poster, neon aesthetic, bold Chinese social media cover.
Xiaohongshu style. No text — text will be added separately.
Leave large center area for big text overlay.
```

**Step 2：Canva/Figma 叠加**
- 大标题：「在[城市]找搭子 终于不用蹲评论区了」霓虹粉/黄色
- 话题标签气泡：「#拼团社交」「#大学生」「#线下面基」
- 底部：「觅遇社 Meetu」小 Logo

---

### 封面 2 — 价格吸引型

**Step 1：nanobanana prompt**
```
A bold promotional cover, 1080x1440px portrait.

Bright orange to pink gradient background, energetic and eye-catching.
Large translucent price tag shape in center, slightly tilted.
Confetti and celebration particles around the price tag.
Small icons: dice, coffee cup, running shoe scattered around edges.
Bold, promotional, deal-oriented feel.

Style: Chinese social media promotional poster, Xiaohongshu sale aesthetic.
No text. Leave center for price/title overlay.
```

**Step 2：叠加**
- 大字「9.9元拼团剧本杀」
- 副标题「大学生省钱社交指南」
- 标签：「#学生党」「#省钱攻略」

---

### 封面 3 — 好奇驱动型

**Step 1：nanobanana prompt**
```
A suspenseful social media cover image, 1080x1440px portrait (3:4 ratio).

Dark deep purple to black gradient background with soft neon glow around the edges.
Center: a semi-open mystery box emitting pink, purple, and cyan light beams.
Floating around the box: glowing question mark symbols, sparkles, torn paper fragments,
and translucent sticker-like shapes. A faint silhouette of a crowd or event scene appears
inside the glowing light, but remains intentionally unclear.

Style: mystery teaser poster, Xiaohongshu social cover, cyber-neon aesthetic, high contrast.
No text, no readable symbols. Leave the center and upper third clean for large title overlay.
```

**Step 2：Canva/Figma 叠加**
- 大标题：「这局到底有多上头？」
- 副标题：「武汉大学生最近都在偷偷玩什么」
- 标签气泡：「#盲盒社交」「#周末去处」「#未知局」
- 右下角小 Logo：「觅遇社 Meetu」

### 封面 4 — 场景种草型

**Step 1：nanobanana prompt**
```
A lifestyle social media cover image, 1080x1440px portrait (3:4 ratio).

Warm real-life campus social scene during golden hour: a small group of university students
walking together on a tree-lined street near cafés and campus storefronts, carrying drinks
and chatting casually. Sunlight flares through the trees, casting warm orange highlights.
Foreground has soft bokeh from leaves and signage, background shows a cozy urban campus vibe.

Color grading: warm orange, peach, and soft pink tones. Relaxed, aspirational, social atmosphere.
Style: lifestyle photography, Xiaohongshu aesthetic, natural candid moment.
No text, no logos. Leave upper 30% and lower 20% relatively clean for text overlay.
```

**Step 2：Canva/Figma 叠加**
- 主标题：「周末真的别再宅了」
- 副标题：「咖啡店、City Walk、桌游局一次约满」
- 标签：「#武汉周末」「#大学生社交」「#CityWalk」
- 底部角标：「觅遇社 Meetu」

### 封面 5 — 主理人视角型

**Step 1：nanobanana prompt**
```
A premium creator-style social media cover image, 1080x1440px portrait (3:4 ratio).

Deep purple background with gold glow accents and subtle metallic texture.
Center: a stylish anonymous young event host figure from a three-quarter back view,
holding a microphone or event checklist card, standing in front of a softly lit crowd scene.
Around the figure: floating badge shapes, crown icons, star medals, and light streaks.
The lower half has layered card shapes suggesting event management and social organization.

Style: premium campus host recruitment poster, bold Xiaohongshu cover, confident and aspirational.
No text, no readable UI. Leave center-left and upper area clean for strong text overlay.
```

**Step 2：Canva/Figma 叠加**
- 主标题：「大学生主理人真的能赚到钱吗？」
- 副标题：「我在觅遇社组了一场局之后」
- 标签：「#主理人招募」「#副业尝试」「#校园活动」
- 底部金色角标：「MEETU HOST」

**通用规则：**
- 好奇驱动型 → 神秘紫+问号元素+盲盒视觉
- 场景种草型 → 暖色+生活化场景照片底
- 主理人视角型 → 紫金色+皇冠/徽章元素

---

## 八、上线倒计时海报（750×1334px）×3

### D-3 海报

**Step 1：nanobanana prompt**
```
A countdown poster background, 750x1334px portrait.

Warm orange gradient background with subtle geometric patterns.
Center: a large stylized number "3" made of glowing neon light,
warm orange color, with subtle particle effects around it.
Countdown timer aesthetic. Exciting, anticipatory mood.
Confetti particles beginning to appear at edges.

Style: app launch countdown, exciting, warm tones, modern design.
No text except the number 3. Leave top and bottom for text overlay.
```

**Step 2：Figma 叠加**
- 顶部：「觅遇社即将上线」
- 中央数字下方：「还有 3 天」
- 底部：「别一个人玩了 · 找到你的搭子」+ Logo

### D-2 海报

**Step 1：nanobanana prompt**
```
A countdown poster background, 750x1334px portrait.

Vibrant pink-to-purple gradient background with glowing particle trails and soft lens flares.
Center: a large stylized number "2" made of luminous glass-like neon tubing,
with brighter glow intensity than the D-3 version. Floating sparkles, confetti pieces,
and abstract geometric shards appear around the number, creating momentum and excitement.

Style: app launch countdown, energetic, trendy, youth-oriented, modern poster design.
No text except the number 2. Leave top and bottom areas clean for text overlay.
```

**Step 2：Figma 叠加**
- 顶部：「觅遇社即将上线」
- 中央数字下方：「还有 2 天」
- 底部：「准备好和新搭子见面了吗」+ Logo

### D-1 海报

**Step 1：nanobanana prompt**
```
A final countdown poster background, 750x1334px portrait.

Rich magenta-to-deep-purple gradient background with intense glow effects and celebratory energy.
Center: a large dramatic number "1" made of bright neon light with gold highlights,
surrounded by dynamic confetti bursts, light beams, sparkles, and subtle radial glow.
The composition should feel like the night before a major launch, exciting and high anticipation.

Style: app launch final countdown, high-energy, celebratory, bold Gen-Z poster design.
No text except the number 1. Leave top and bottom clean for overlay text and logo.
```

**Step 2：Figma 叠加**
- 顶部：「明天见」
- 中央数字下方：「觅遇社首批活动即将上线」
- 底部：「别一个人玩了 · 找到你的搭子」+ Logo

---

## 九、已有实拍素材的使用方式

参考 `设计语言参考/` 中的线下活动实拍照片（年轻人围桌社交+鸡尾酒+游戏卡），这类真实照片可以直接用于：

| 用途 | 处理方式 |
|------|---------|
| 活动封面图 | 照片 + 品牌色渐变 overlay(30%) + 底部毛玻璃信息栏 |
| 广场种子帖配图 | 直接使用，模拟真实用户发帖 |
| 小红书笔记配图 | 照片 + 角标Logo + 底部文字条 |
| 活动详情页头图 | 照片 + 轻微暖色滤镜 |

**处理实拍照片的 Figma 叠加步骤：**
1. 导入照片，裁切至目标尺寸
2. 上层加 `linear-gradient(transparent 50%, rgba(0,0,0,0.5) 100%)` 底部暗角
3. 叠加分类标签（左上）+ 信息栏（底部）+ 水印（右下）
4. 导出 PNG

---

## 十、质量优化技巧

### nanobanana prompt 优化要点

1. **加 "no text, no characters, no Chinese" 避免乱码文字**
2. **指定 "leave top/bottom X% clean for overlay" 预留排版空间**
3. **用具体物品描述代替抽象概念**（❌ "social atmosphere" → ✅ "colorful balloons, paper cups, fairy lights"）
4. **指定光线方向和色温**（"warm amber side lighting", "golden hour", "soft window light"）
5. **指定拍摄角度**（"overhead shot", "45-degree angle", "eye level"）
6. **加风格参考词**（"Instagram aesthetic", "lifestyle photography", "similar to Soul App"）

### 出图后检查清单

- [ ] AI 图中无乱码文字？（有则用 Figma 遮盖或裁切）
- [ ] 构图是否预留了文字区域？
- [ ] 色调是否符合觅遇社品牌色板？（偏冷则加暖色滤镜）
- [ ] 场景是否符合大学生生活场景？（不能太商务/太成熟）
- [ ] 叠加文字后层次是否清晰？（文字可读性 > 一切）
- [ ] 最终尺寸是否正确？

---

## 十一、完整产出物清单 & 对应 prompt 索引

| # | 物料 | 尺寸 | prompt 位置 | 优先级 |
|---|------|------|------------|--------|
| 1 | Banner 1 品牌心智 | 750×340 | 本文档 §一 | P0 |
| 2 | Banner 2 安全信任 | 750×340 | 本文档 §一 | P0 |
| 3 | Banner 3 主理人招募 | 750×340 | 本文档 §一 | P0 |
| 4 | 封面-桌游推理 | 600×800 | 本文档 §二 | P0 |
| 5 | 封面-派对社交 | 600×800 | 本文档 §二 | P0 |
| 6 | 封面-探店美食 | 600×800 | 本文档 §二 | P0 |
| 7 | 封面-运动户外 | 600×800 | 本文档 §二 | P0 |
| 8 | 封面-City Walk | 600×800 | 本文档 §二 | P0 |
| 9 | 封面-学习搭伴 | 600×800 | 本文档 §二 | P0 |
| 10 | 封面-观影展览 | 600×800 | 本文档 §二 | P0 |
| 11 | 封面-盲盒惊喜 | 600×800 | 本文档 §二 | P0 |
| 12 | 卡片1-欢迎 | 750×1000 | 本文档 §三 | P0 |
| 13 | 卡片2-Step1 | 750×1000 | 本文档 §三 | P0 |
| 14 | 卡片3-Step2 | 750×1000 | 本文档 §三 | P0 |
| 15 | 卡片4-Step3 | 750×1000 | 本文档 §三 | P0 |
| 16 | 主理人身份卡 | 750×1000 | 本文档 §四 | P0 |
| 17 | 分享海报模板 | 750×1334 | 本文档 §五 | P0 |
| 18-27 | 分类icon ×10 | 120×120 | 本文档 §六 | P0 |
| 28-30 | 小红书封面 ×3 | 1080×1440 | 本文档 §七 | P1 |
| 31-33 | 倒计时海报 ×3 | 750×1334 | 本文档 §八 | P1 |

---

*v1.0 | 2026-04-02 | Phoebe 制定*
