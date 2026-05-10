# XHS Visual Language Study v0.1 (vNext 视觉基线 reset)

**作者**: Phoebe2
**时间**: 2026-05-11 02:15
**触发**: David 1:51:32 拒整个 monochrome warm-beige 方向 ("性冷淡素描垃圾") + Fiona 1:52:02 / 1:54:18 调研 5 项要求
**输入限制**: XHS MCP server 不可用 (macOS 无 xvfb/xdpyinfo, MCP 端口 18060 not listening); 改用 web 调研 (设计 trend 文章 + 中文 social 平台公开内容总结)
**红线**: 0 image2 / 0 prompt 终稿 / 必须先研究再调整 baseline / 不伪装数据来源

---

## §0 数据来源 + 限制 (per Fiona 1:54:18 #3)

**实际使用源**:
- adquan / 数英 / 澎湃 / 知乎 / Canva / Jing Daily / prizmdigital 等设计 trend 文章 (2025-2026 年度)
- Pantone 2025 官方 (Mocha Mousse #A47864 verified)
- 中文 design blog 对 XHS trend 的 secondary 归纳

**没有获得的数据**:
- ❌ XHS 官方 engagement data 按风格/色彩拆分 (非公开)
- ❌ 直接 XHS 内容样本 (MCP 不可用)
- ❌ Pantone × XHS 浅春系全部官方 hex (article 是图片格式无文字)

**结论可信度**:
- 色彩方向 + 风格大轴: **strong** (多源 trend 文章一致归纳)
- 具体 hex 值: **medium** (Pantone 摩卡棕 verified; 其他是 designer 约定值)
- 量化数据 (浏览量/转发率): **weak** (单一 secondary source, 未交叉)
- 不伪装 "充分调研": 这是基于公开 trend 报道的视觉方向归纳, 不是 XHS 直接样本统计

---

## §1 一屏结论 (核心)

### 必须放下 (David 1:51:32 拒)
- ❌ Monochrome warm beige #F1ECDF + muted earth tone — 在 XHS 2025-26 编码为 "性冷淡 / 老气 / 装腔"
- ❌ Editorial inked + brush shading + matte vintage paper — 偏成人严肃/装腔, 不是大学生女性主流
- ❌ 黑白硬笔素描 — 命中 David 原话 "性冷淡素描垃圾"

### 拥抱 (XHS 2025-26 主流)

XHS 2025-26 大学生女性 18-22 主流视觉**两条同时存在**, 都在 viral, 选哪条看产品定位:

#### Lane A — "可露丽风 + 浅春系" (治愈安全, 大众分享)
- 高明度 + 低中饱和度 (NOT pastel sweet candy)
- 主色: 摩卡棕 `#A47864` (Pantone 2025 official) + 柔雾粉 `#F4D6CC` + 鼠尾草绿 `#B8C4A9` + Baby 蓝 `#BCD4DE` + 开心果白 `#EDE7D3` + 日光黄 `#F4D58D`
- 调性: warm muted 但不灰, 接近 "美拉德 + 莫兰迪 + 多巴胺" 混合体
- 适合: 治愈系, 安全分享; 但**不够 punchy**, 不抓 "嘴替 / 发疯" 张力

#### Lane B — "抽象/发疯/嘴替" (高互动, 评论 bait) ✅ **更贴 vNext**
- 高饱和 + 撞色 + intentional mismatch + sticker / 贴纸 chaos
- 主色: 多巴胺粉 `#FF5C8A` + 电光蓝 `#3D8BFF` + 荧光绿 `#B8FF3D` + 暖橘 `#FF8A3D` + 柠檬黄 `#FFE03D` + 黑 `#1A1A1A`
- 底色: off-white `#FAF6EE` (不是冷白, 不是暖米, 是介于二者的"奶白") — 让饱和色块跳出来不刺眼
- 调性: 抽象 / 撞色 / 反差感 / 贴纸 chaos
- 关键发现: **XHS 官方将"抽象"列为 2024 年度关键词** (10M+ 笔记 / 160M+ 评论引用), 视觉编码是 "anti-coherent / 错位 / 不该这样" — **直接对应 PRD §5 D 内核** "把状态变成怪东西"

### 推荐 vNext 走 Lane B 为主 + Lane A 局部调和

- **Lane B 主**: 让 5 角色站在 vNext "嘴替 / 发疯 / 抽象" 产品定位的视觉前线; 是 PRD §2.3 "替我承担表达成本" 在视觉端的直接翻译
- **Lane A 调和**: character 主体可以仍是 Lane A 摩卡棕 + 奶米 (不会让画面太刺眼), 但**背景色块/sticker/手写吐槽**走 Lane B 撞色 → character 不夸张 + 背景有张力, 两条 lane 协同
- 这正好对应 XHS 现行流行: **"character 治愈 + sticker 抽象"双层结构**

---

## §2 详细发现 (按 Fiona 1:52:02 5 项)

### §2.1 色彩体系
- 主色 axis: 高明度 + 低-中饱和 + 暖色温为主
- 不要 pure 莫兰迪灰米 (老钱风 / 装腔), 不要 2023 vintage rainbow dopamine (过气), 不要 monochrome warm beige (我之前方向的死路)
- 撞色组合是 viral 的关键 (蓝 + 黄 / 粉 + 绿 / 橘 + 蓝, 高饱和点缀作 sticker / 背景)
- 渐变 in 2025-26 仍可用但要"软渐变" (粉到米 / 蓝到白), 不要 2023 dopamine 彩虹渐变

### §2.2 插画 / 漫画质感
- 主流: **"日本插画小人"** (Noritake-style 极简连续线 + 大量留白 + 微表情 mouth/eyebrow 微变 — 用户投射"精神嘴替"的容器); 与 vNext PRD "嘴替"概念视觉直译
- 2025 演化: AI-generated emoji 动态小人 + 贴纸 / sticker 拼贴层
- 线条: thin-medium black or dark-brown (1-2px 等效), 不 thick stroked
- 填色: flat color blocks 主流; gouache/watercolor 在角色主体上读为 "老土 PPT clip-art" → **撤回我之前 v2 的 watercolor wash 方向**
- 老土死区: thick outlined vector mascots, gouache 角色, sepia editorial monochrome, "公众号 2018" ribbon-banner

### §2.3 构图与信息密度

两种 viable 模式同时存在:

**Clean 单角色 + 留白**: 主体 60-70% canvas, 大量 negative space, 一行 headline 或 一个 sticker 角标 → 治愈/嘴替系
**满版拼贴 / sticker-mess**: chat bubbles + 涂鸦吐槽 + 不同字体 + 撞色背景 → 抽象/发疯系

**避坑** (老土区): tidy magazine-grid editorial, serif English titles 居中 framing — 读为 "KOL from 2022"

### §2.4 幽默表达
- "抽象" 视觉编码: 错位 / 不该 pairing / "一分解构两分无厘头三分漫不经心四分放过自己"
- "摆烂 / 低能量": droopy 姿态 + 半闭眼 + slumped 线条 + 夸张 tear/sweat drops
- 老梗死区: 性冷淡黑白 editorial, 毒鸡汤 calligraphy 海报, 抛光 brand mascot, 2022 dopamine 彩虹条纹

### §2.5 对 C/D pilot 改写

**重大方向反转 (与 v2.x 全部相反)**:
- 撤掉 watercolor + brush + warm beige + editorial inked
- 改为 **flat color blocks + thin-medium ink line + Lane B 撞色背景 + sticker 吐槽 + Noritake 微表情**

---

## §3 替换 v2.2 §0 共同红线 → §0 共同基线 v0.3 (XHS-aligned)

### 允许 (放开)
- ✅ Flat color blocks (主流) + thin/medium ink line outline
- ✅ Lane B 高饱和撞色背景或 sticker accent (`#FF5C8A` / `#3D8BFF` / `#B8FF3D` / `#FFE03D`)
- ✅ 角色主体 Lane A 摩卡棕 (`#A47864`) + 奶米 belly + 背景 off-white `#FAF6EE`
- ✅ Noritake-style 极简连续线 + 微表情
- ✅ 满版拼贴 / sticker-mess (D 路线) 或 clean 单角色 + 大量留白 (C 路线)
- ✅ 手写吐槽 chat bubble + 角标 sticker + 故意错位/glitch (D 路线)
- ✅ 适度卡通化 + 夸张比例

### 禁 (精确)
- ❌ Monochrome warm beige editorial (David 1:51 死刑)
- ❌ Watercolor / gouache 角色填色 (XHS 2025 老土)
- ❌ Editorial inked + brush shading + matte vintage paper (硬笔素描方向)
- ❌ 性冷淡黑白 editorial / 毒鸡汤 calligraphy / 抛光 brand mascot
- ❌ Pantone 2023 rainbow dopamine 彩虹条纹 (过气)
- ❌ Pure 莫兰迪 灰 (装腔老钱)
- ❌ chibi / 圆头大眼 / Sanrio sweet / Disney princess (老幼态红线)
- ❌ 写实 anatomy / 3D / pencil sketch
- ❌ thick outlined vector mascot
- ❌ Gradient: 2023 dopamine 彩虹 / Y2K 紫粉

---

## §4 C/D 重写建议 (基于 XHS 调研)

### C 树懒 重写 (Lane A 主体 + Lane B sticker accent)

**风格**: Noritake-lineage 极简连续线 (1-2px 深棕) + flat color block 填色 + 故意 off-axis 道具

**主体**:
- 树懒 sprawl 趴桌, 闭眼, 半下垂嘴, 4 肢摊开
- 树懒色: body `#A47864` (Pantone 2025 摩卡棕) + belly/腹 `#EDE7D3` (奶米) + 微表情眼是两个小弧线
- 旁边: 咖啡杯 `#1A1A1A` outline + textbook spine `#3D8BFF` 撞色

**背景**:
- Off-white `#FAF6EE` 桌面
- **背景色块或 sticker** (Lane B): 树懒下方一块 `#B8FF3D` 荧光绿 rectangle 作 "桌面 mat" / 或一个 `#FF5C8A` 多巴胺粉 sticker 作 "便签纸"
- 手写 chat bubble: "在了 没动" / "看了 还在看"

**3s 读判**: 树懒 sprawl + 撞色背景 + sticker 吐槽 → "大学生在桌前躺平 + task 在那" 嘴替 vibe 顶级

### D 猴 重写 (Lane B 全力 — 抽象/发疯/sticker chaos)

**风格**: flat color blocks + glitch/jitter 线条 + 满版 sticker

**主体**:
- 猴坐, 顶键盘, 抓香蕉 (维持原 metaphor)
- 着装错位: shirt `#3D8BFF` 电光蓝 + skirt `#FFE03D` 柠檬黄 + socks 一只 `#FF5C8A` 多巴胺粉 + 一只 `#B8FF3D` 荧光绿 (mismatch)
- 香蕉 `#FFE03D`, 键盘 `#1A1A1A` 但**故意 glitch** (字符错位 / 键帽歪斜)
- 眼睛: spiral / X eyes / blank dot pupils (不要 cute eyes)

**背景**:
- Off-white `#FAF6EE`
- **满版 sticker mess**: `???`, `404`, `乱码`, 手写小字"我是抽象的猴" (中文社交既有 phrase)
- 故意 RGB-offset / glitch jitter 在 outline

**3s 读判**: 猴撞色 mismatch + sticker 满版 + glitch → "抽象 / 发疯 / 嘴替" 顶级

---

## §5 命名 + master quote 配合 (David 0:23 约束 3, Lucy 同步)

如 David 接受 Lane B 重写方向, master quote 锚点对应:

| 角色 | 重写方向 | quote 锚点 |
| --- | --- | --- |
| C 树懒 | Lane A + Lane B sticker | "在了 没动" / "看了 还在看" / "我都端着咖啡了" |
| D 猴 | Lane B 全力 | "我是抽象的猴" / "我袜子也没穿对" / "我顶着键盘" |

Lucy quotes 已 freeze, 如这 phrase 与 freeze 版冲突, 由 PM 决定迁就方向。

---

## §6 风险与不足 (透明)

1. **样本未直接观察 XHS**: 因 MCP 不可用, 调研基于设计 trend 文章 secondary 归纳; 如 Fiona/David 觉得需要直接 XHS sample 验证, 我可申请 Slock 工具配置 / 或拜托 Lucy (她 XHS 工作多) 给参考样本
2. **量化数据弱**: 未有 viral post 实测 saturation/contrast; Lane A vs Lane B 哪个更 viral 不能数据化区分
3. **Pantone 细节**: 仅 Mocha Mousse `#A47864` is verified Pantone official; 其他 hex 是 designer 约定值

## §7 落库 + 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 02:15 (本文件落库) | XHS-visual-language-study-v0.1 落库 + 通告 Fiona | Phoebe (本条) |
| 等 PM/David | 是否接受 Lane B 主导方向 + §0 共同基线 v0.3 替换 | Fiona/David |
| 接受后 | 重写 C/D prompt v3 (XHS-aligned) + 等审 + 1 image2 | Phoebe |
| 不接受 (回 Lane A 治愈安全) | 重写 v3 用 Lane A 路线 + 等审 + 1 image2 | Phoebe |

期间 0 image2.
