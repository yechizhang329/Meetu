# 心情值班室 World Asset Audit v1

**作者**: Phoebe2 (视觉设计)
**时间**: 2026-05-10 12:59 (audit v1, 12:44 起 15min ETA 内)
**触发**: Jonathan 12:47 redline + Fiona 12:48:00 / 12:48:37 / 12:51:55 / 12:44:08 / 12:44:27 PM 口径合并
**作用域**: 心情值班室 v1.2 / vFinal 全量世界资产
**对应工程位点**: `心情值班室H5/06-前端实现/duty-room-v1/scripts/render-receipts/` (template.html / batch-render.cjs / render-spot-check.cjs)
**对接**: 由 PM (Fiona) 统一转 Dave，本文件为唯一资产决策源

---

## §0 Final 资产红线 (硬 gate · Jonathan 12:47 + Fiona 12:48:00)

**任一命中 = FAIL，整条资产 NOT IN FINAL，不讨论 polish，不留"阶段版本"。**

| FAIL 条件 | 说明 |
| --- | --- |
| F1 CSS / 几何 placeholder | radial-gradient / linear-gradient 直接当主体色块 / clip-path 三角作 ear / border-radius 50% 圆框作角色身体 / box-shadow 连点作双胞胎 |
| F2 Emoji 叠字假资产 | `· ·` `• •` `— —` `◉ ◉` `〰〰〰` `🌰` 等 inline character 叠字代替面部 / 道具 |
| F3 临时圆形头像 | 任何 width=height + border-radius:50% 容器作角色"头像 icon" |
| F4 工程生成假资产 | template 内 inline `<style>` 描线 / ::before ::after 拼造形态 / SVG path 拼角色 |
| F5 与正式世界资产不在同一质量线 | 即便是正式 PNG，但绘制水准、线条、笔触、色温、留白与白名单 §5 主体不一致 → 也是 FAIL |

**Jonathan 12:43:48 / 12:44:08 原话锚点**:
- "不是头像的问题 是所有世界资产必须统一产出水平"
- "形式是设计决定的"
- "但质量要保证"

**当前 sign-only live (`04b5fac`)**：作为阶段版本允许保留至最终版前；最终版部署前必须按 §5 白名单清掉所有命中 F1-F5 的资产，零容忍。

---

## §1 当前世界资产全量清单

### §1.1 角色资产 (4 角色 × 多 SKU)

| 资产组 | 路径 | 状态 |
| --- | --- | --- |
| 4 角色 main v1 (透明 PNG, 402×611) | `contact-crops-transparent/{role}/{role}-main-v1.png` × 4 | 见 §3 评级 |
| 4 角色 main v2 (rembg isnet, 透明 PNG) | `contact-crops-transparent/{role}/{role}-main-v2.png` × 4 | 见 §3 评级 |
| 4 角色 emo×2 + pose×3 (透明 PNG) | `contact-crops-transparent/{role}/{role}-{emo1,emo2,pose1,pose2,pose3}-v1.png` | 见 §3 评级 |
| 4 角色 master sheet (源参考, 大图) | `master-sheets/role-{role}-master-v1.png` | 见 §3 评级 |
| 4 角色 contact sheet (12 格源参考) | `contact-sheets/contact-{role}-v1.png` | 见 §3 评级 |
| 4 角色 v0.4 tonebreak (写实/博物绘) | `role-v0.4-tonebreak/{role}-tonebreak-v1.png` | 见 §3 评级 |
| 4 角色 teststone v3.4 (嘴替试金石输出图) | `teststone-v3.4/teststone-share-{role}-{scene}-v3.4.png` × 4 | 见 §3 评级 |
| 4 角色 v2-pilot (淘汰探索) | `v2-pilot/v2-{role}-pilot.png` × 2 | 见 §3 评级 |

**工程当前注入位点 (FAIL F1-F4 整组)**:
- `template.html` L201-279 `.avatar-cat` + ::before/::after + .face/.eyes/.whiskers/.battery
- `template.html` L280-321 `.avatar-goose` + ::before + .beak + emoji eyes
- `template.html` L322-359 `.avatar-hamster` + ::before (圆耳 box-shadow 双胞胎) + .seed (🌰 emoji)
- `template.html` L360-400 `.avatar-alpaca` + ::before (条形 curl) + .curl (〰〰〰)
- `template.html` L613-614 `<div class="avatar {{AVATAR_CLASS}}">{{AVATAR_INNER}}</div>` 注入点
- `batch-render.cjs` L34-39 `AVATAR_INNER` 表 (4 套 inline HTML)
- `batch-render.cjs` L105-106 `{{AVATAR_CLASS}}` / `{{AVATAR_INNER}}` 注入
- `render-spot-check.cjs` 同上

→ 整组 `.avatar-cat / .avatar-goose / .avatar-hamster / .avatar-alpaca` 命中 F1+F2+F3+F4。**不按角色单点修复，整组 final 禁用。**

### §1.2 物件资产 (objects-v0.1)

| 资产 | 路径 | 状态 |
| --- | --- | --- |
| paw-print 咖啡杯 | `objects-v0.1/paw-print-mug-v1.png` | 见 §3 |
| paw-print 黄便签 | `objects-v0.1/paw-print-sticky-v1.png` | 见 §3 |
| 倾斜耳机 + 爪印 | `objects-v0.1/tossed-headphones-v1.png` | 见 §3 |
| 4 底 audit grid × 3 | `objects-v0.1/_audit/{slot}-4bg-audit.png` | 审计专用，不进 receipt |

### §1.3 装饰元素 (elements-v0.3)

| 资产 | 路径 | 状态 |
| --- | --- | --- |
| 撕纸 01 | `elements-v0.3/paper-01-torn-v1.png` | 见 §3 |
| 折纸 02 | `elements-v0.3/paper-02-folded-v1.png` | 见 §3 |
| 圆章空模 | `elements-v0.3/stamp-01-circle-empty-v1.png` | 见 §3 |
| 方章空模 | `elements-v0.3/stamp-02-rect-empty-v1.png` | 见 §3 |
| 划线 crossout | `elements-v0.3/scratch-01-crossout-v1.png` | 见 §3 |
| 圆圈箭头 | `elements-v0.3/scratch-02-circle-arrow-v1.png` | 见 §3 |

### §1.4 桌面/背景 / 心境

| 资产 | 路径 | 状态 |
| --- | --- | --- |
| 4 角色专属桌景背景 | `backgrounds/bg-role-desk-{role}-v1.png` × 4 | 见 §3 |
| 共享办公背景 | `backgrounds/bg-office-shared-v1.png` | 见 §3 |
| 4 角色 mood 帧 | `moods/mood-{role}-v1.png` × 4 | 见 §3 |
| props 网格参考 | `props/props-grid-v1.png` | 设计内部参考，不进产品 |

### §1.5 receipt 内 CSS 形状 / inline SVG / 噪点

| 资产 | 位点 | 状态 |
| --- | --- | --- |
| 纸纹噪点 (SVG turbulence) | `template.html` `.receipt::before` data:image/svg+xml | 见 §3 |
| L1 头部蓝印序列号边框 | `template.html` L? .l1-* | 见 §3 |
| 撕纸虚线 + 剪刀 emoji `&#9986;` | `template.html` `.tear` | 见 §3 |
| 章 (stamp) 圆形 / 方形 CSS border + 文字 | `template.html` `.stamp` | 见 §3 |
| 签名手写 SCRATCH `.l3-sign-scratch` | `template.html` L405-440 | 见 §3 |
| `.l3-sign-value` 字体方案 (Ma Shan Zheng / Long Cang 等) | Google Fonts CDN | 见 §3 |

### §1.6 share-card / mock 探索

| 资产 | 路径 | 状态 |
| --- | --- | --- |
| share-card S4 鹅 | `share-cards/share-stubborn-goose-busted-not-admit-v1.png` | 见 §3 |
| mock-v1.2-task34 (Dave done) | `mock-v1.2-task34/*.png` (含 _DO_NOT_PROMOTE.md) | 见 §3 |
| mock-v1.2-task35 (PM 中止前) | `mock-v1.2-task35/*.png` | 见 §3 |
| h5-mockup v0.2 / v0.3 | `h5-mockup-v0.{2,3}/page*-v0.{2,3}.png` | 见 §3 |
| home-hero v0.9 | `hero-crops/home-hero-low-battery-cat-v0.9.png` | 见 §3 |

---

## §2 来源标记

| 标签 | 含义 |
| --- | --- |
| **IMG2** | gpt-image-2 / nano-banana 等正式 AI 生图 + rembg / chroma key 透明化 |
| **CSS** | template inline CSS / radial-gradient / clip-path / border-radius |
| **EMOJI** | inline emoji 字符 / Unicode 拟物 |
| **SVG-INLINE** | template 内 inline SVG (含 turbulence 噪点 / clip path) |
| **SVG-FILE** | 独立 .svg 文件 (本项目当前为 0) |
| **CROP** | 从 master-sheet / contact-sheet 裁切 + 透明化 |
| **MOCK** | 手工 PIL/Canvas 拼合产物 (mock-v1.2-task34 等) |
| **PY-SCRIPT** | h5-mockup generate_mockups.py 类合成 |

---

## §3 评级 (P=正式可用 / R=可用但需重导出 / X=placeholder 必须替换 / N=不进本轮)

### §3.1 角色资产

| 资产 | 来源 | 评级 | 理由 |
| --- | --- | --- | --- |
| `.avatar-cat / .avatar-goose / .avatar-hamster / .avatar-alpaca` 整组 | CSS+EMOJI | **X** | F1+F2+F3+F4 全命中。整组 final 禁用，per Fiona 12:48:37。**这是 Jonathan 12:33 / 12:38 / 12:47 全部投诉的根因。** |
| `contact-crops-transparent/{role}/{role}-main-v1.png` × 4 (v0.2) | IMG2+CROP | **P** | 高水准源资产，已透明化、已对齐。可作为白名单候选**但需经过 §4 统一质量线复核** (见 §3.1 注 1)。 |
| `contact-crops-transparent/{role}/{role}-main-v2.png` × 4 (v0.3-lite rembg) | IMG2+CROP | **N** | 全画布 alpha 残留，PM 02:00 NO-promote (MEMORY)。归 exploration 留档。 |
| `contact-crops-transparent/{role}/{role}-{emo,pose}*-v1.png` (24 PNG) | IMG2+CROP | **R** | 同 v0.2 主家族；如纳入需要按 §4 与 main-v1 同口径复核质量线一致性。 |
| `master-sheets/role-{role}-master-v1.png` × 4 | IMG2 | **N (内部)** | 设计源参考，不进产品；用于 §4 质量线锚点。 |
| `contact-sheets/contact-{role}-v1.png` × 4 | IMG2 | **N (内部)** | 同上。 |
| `role-v0.4-tonebreak/*.png` (4 张) | IMG2+CROP | **N** | 写实/博物绘方向作废 (PM 12:33-12:35 撤回 PASS)。归 exploration 留档不删。 |
| `teststone-v3.4/teststone-share-*.png` × 4 | IMG2 | **N** | 嘴替试金石产出，是带文字带场景的完整分享图，**不是 receipt 注入资产**。属于 share-card 链路，不在本轮 receipt 白名单内。 |
| `v2-pilot/v2-{role}-pilot.png` × 2 | IMG2 | **N** | 淘汰探索。 |

> **§3.1 注 1**: v0.2 是当前唯一已存在的"高水准角色源"，但是否完全过 §0 红线 §5 的"统一质量线"要求 (与 objects-v0.1 / elements-v0.3 同语言) 还需 §4 复核。**本 audit v1 仅给出 §5 第一版白名单候选，明示"经 §4 复核通过后即正式白名单；§4 不通过则 v0.2 也降为 R 需要重导出 / 重绘"**。Jonathan 12:35 已确认 "原方向和水准可以保留"，所以 v0.2 期望出口是 P。

### §3.2 物件 (objects-v0.1)

| 资产 | 来源 | 评级 | 理由 |
| --- | --- | --- | --- |
| `paw-print-mug-v1.png` | IMG2+CROP | **R (待 PM taste gate)** | 4 底 audit pass，hold pending PM next-round taste gate (MEMORY 02:35)。 |
| `paw-print-sticky-v1.png` | IMG2+CROP | **R (待 PM taste gate)** | 同上。 |
| `tossed-headphones-v1.png` | IMG2+CROP | **R (待 PM taste gate)** | 同上。 |

### §3.3 装饰元素 (elements-v0.3)

| 资产 | 来源 | 评级 | 理由 |
| --- | --- | --- | --- |
| `paper-01-torn-v1.png` / `paper-02-folded-v1.png` | IMG2+CROP | **R (待 PM taste gate)** | hold pending taste gate。 |
| `stamp-01-circle-empty-v1.png` / `stamp-02-rect-empty-v1.png` | IMG2+CROP | **R (待 PM taste gate)** | 同上。 |
| `scratch-01-crossout-v1.png` / `scratch-02-circle-arrow-v1.png` | IMG2+CROP | **R (待 PM taste gate)** | 同上。 |

### §3.4 桌面 / 背景 / 心境

| 资产 | 来源 | 评级 | 理由 |
| --- | --- | --- | --- |
| `backgrounds/bg-role-desk-{role}-v1.png` × 4 | IMG2 | **N** | duty-room-p0 H5 探索期产物，**当前 receipt 链路没有桌景需求**。如 §4 决定让"桌景接管"作为 receipt 形式，再升 R。 |
| `backgrounds/bg-office-shared-v1.png` | IMG2 | **N** | 同上。 |
| `moods/mood-{role}-v1.png` × 4 | IMG2 | **N** | 心境帧，本轮 receipt 不需要。 |
| `props/props-grid-v1.png` | IMG2 | **N (内部)** | 设计内部参考。 |

### §3.5 receipt 内 CSS / SVG / 噪点

| 资产 | 来源 | 评级 | 理由 |
| --- | --- | --- | --- |
| 纸纹噪点 (SVG turbulence) `.receipt::before` | SVG-INLINE | **P** | 不是"假角色资产"，是世界纸张材质，符合 §4 设计语言 (vintage paper)。**保留。** |
| 撕纸虚线 + `.tear-scissor` `&#9986;` | CSS+EMOJI | **X** | EMOJI 剪刀 (F2)，与世界质量线不一致。需替换为 elements-v0.3 撕纸资产或 SVG-FILE 设计版剪刀。 |
| 章 (stamp) CSS border + 文字 `.stamp` | CSS | **R** | 作为"信息载体"形式可保留，但圆/方边框 + Noto Sans 数字目前是几何级，**与 elements-v0.3 stamp-01/02 印章语言不一致**。建议 §4 决定：要么换 elements-v0.3 stamp 资产作底 + 文字层；要么保留 CSS 但提升纹理质感 (磨损 + 印油不均)。 |
| 签名 `.l3-sign-value` (Ma Shan Zheng 等) | CSS-FONT | **P** | sign-only live `04b5fac` 已优化签名字体可读性，PM 12:43 接受作阶段版本。**保留**。 |
| `.l3-sign-scratch` | CSS | **R** | 当前是 CSS 横线，建议 §4 决定升级为 elements-v0.3 scratch-01/02 资产，统一手绘墨水语言。 |

### §3.6 share-card / mock 探索

| 资产 | 来源 | 评级 | 理由 |
| --- | --- | --- | --- |
| `share-cards/share-stubborn-goose-busted-not-admit-v1.png` | IMG2 | **N** | 单个 share-card 探索，未成体系。 |
| `mock-v1.2-task34/*.png` (Dave done) | MOCK | **N** | 标记 _DO_NOT_PROMOTE，归档。 |
| `mock-v1.2-task35/*.png` | MOCK | **N** | 中止前的方案探索。 |
| `h5-mockup-v0.{2,3}/page*-v0.{2,3}.png` | PY-SCRIPT | **N** | H5 页面 mockup，本轮 receipt 用不到。 |
| `hero-crops/home-hero-low-battery-cat-v0.9.png` | CROP | **N** | H5 home hero 探索。 |

---

## §4 统一世界设计语言标准 (form 边界)

### §4.1 质量线 (5 条硬指标)

所有进 §5 白名单的资产必须同时满足:

1. **绘制水准**: 手绘墨线 / hand-drawn ink 风格，不允许平涂平面色块、不允许几何拼合、不允许 emoji 替身。
2. **线条**: 墨水线条有粗细变化、有起笔收笔、有透明度残留 (rembg/chroma 后保留 50-90% alpha 边缘)；不允许全黑等粗轮廓、不允许矢量纯净边。
3. **质感**: matte, vintage, paper-aged 调性；warm 米黄底 #F1ECDF 系；不允许 glossy / 数码鲜亮 / 儿童贴纸光泽。
4. **色温/色域**: 与世界纸张 #F1ECDF + ink-main #2A2823 + character-accent (4 角色专色) 共存；character-accent 仅作面部/局部点缀，不允许整体平涂用 accent 当主色。
5. **完整角色感** (角色资产专属): 必须有可识别的姿态 / 表情 / 完整身体或半身；不允许"圆头 icon + 两点眼"作为角色全部表达；contact-sheet 比例不被压扁成头像 icon。

### §4.2 form 共存矩阵 (哪些形式可以混用)

| 资产类型 | 允许形式 | 禁止形式 |
| --- | --- | --- |
| 角色 | 透明 PNG / 完整身体或半身插画 / 设计判断决定是否带场景 | 圆形 avatar 容器、border-radius mask、CSS 几何拼角色、emoji 叠字面部、固定 headshot 头像 icon |
| 物件 (杯/便签/耳机) | 透明 PNG / 真实物件插画 + 接管证据 (爪印/咬痕/倾倒/缠绕) | CSS 拼物件、emoji 替代物件、纯文字"咖啡杯" |
| 装饰 (纸/章/抓痕) | 透明 PNG / SVG-FILE 设计版 / 与 §4.1 同一墨水语言 | 几何 border + 数字、emoji 剪刀 / 章、CSS box-shadow 印油 |
| 纸纹 / 噪点 | SVG-INLINE turbulence (作为材质底) / PNG 纸纹叠加 | 平涂底色、带 logo 水印、商业素材网站直接采图 |
| 字体 | Google Fonts / Noto Sans SC / Serif / 手写体 (Ma Shan Zheng 等) | 系统默认无 fallback、emoji 字体作正文 |

### §4.3 form 不可混用规则

- **CSS 几何 placeholder + 高质量 PNG 不可同时存在于同一 receipt**。当前 receipt 的 `.avatar-*` (CSS) + 计划接入的 v0.2 PNG (IMG2) 一旦混用 = 整张 receipt FAIL。整体接入或整体不接入。
- **EMOJI + 设计版 SVG/PNG 不可同时存在**。当前 `&#9986;` 剪刀 + elements-v0.3 撕纸 PNG 一旦同时出现 = FAIL。
- **Mascot/儿童贴纸 + Editorial 插画 不可混用**。一致 editorial/handmade 调性，不允许 cartoon / chibi / 大眼 / mascot 商业贴纸混入。
- **真实博物图鉴 + 角色化 不可混用** (PM 12:33-12:35 教训锚点)。本 audit 已把 v0.4 tonebreak 全部归 N。

### §4.4 form 由设计决定 (Jonathan 12:44 / Fiona 12:44:27)

PM/工程**不规定**:
- 角色出现位置 (hero band / metadata / 贴纸式 / 桌景接管 / 凭条压角 / 任何形式)
- 角色尺寸 (head-only / half-body / full-body / panoramic)
- 物件是否独立出现 / 角色是否携带物件

PM/工程**只验**:
- §0 红线 (无 placeholder 混入)
- §4.1 质量线一致
- 是否服务"今日代班凭条"产品目标 (轻 / 真 / 低压 / 拟人代班 / 可分享)

**本轮设计决定 (Phoebe v1)**:
- 角色 form: 4 角色透明 PNG **以完整身体/半身**进 receipt 主区，**不进圆形 avatar 容器**，不裁切成头像 icon。
- 物件 form: 物件资产作为"角色接管证据"叠加在 receipt 上 (例: 仓鼠场景叠 paw-print-mug;羊驼场景叠 tossed-headphones)，**不强制每张都有**，由场景语义决定。
- 装饰 form: 撕纸 / 章 / 抓痕**优先用 elements-v0.3 资产**替代当前 CSS / EMOJI 形式；如 §4 复核 elements-v0.3 与 §4.1 不一致，则**保留 CSS 但升级纹理**，不混用。
- 纸纹: 保留当前 SVG-INLINE turbulence (符合 §4.1)。
- 字体: 保留当前 Google Fonts 方案 (sign-only live 已 PM 接受)。

---

## §5 可用资产白名单 (工程唯一合法接入源)

> **工程接入硬规则**: 白名单外资产 = blocker，**不允许 fallback 成 CSS / emoji / 圆框 placeholder** (per Dave 12:56 + Fiona 12:56)。最终版部署前 `qa:no-placeholder` 扫描必须通过。

> **状态说明**: 本 v1 给出"候选白名单"。其中标记 ✅ 的可立即接入 staging；标记 ⏳ 的需先经过下一行的"复核动作"才进白名单；标记 🚫 的整组禁用。

### §5.1 白名单条目

| # | 资产名称 | 本机路径 | 允许用途 | 禁止用途 | 进最终版 | 缺失/失败处理 |
| --- | --- | --- | --- | --- | --- | --- |
| W1 | low-battery-cat-main-v1 | `design-assets/duty-room-p0/contact-crops-transparent/low-battery-cat/low-battery-cat-main-v1.png` | receipt 角色主资产 (form 由设计决定 §4.4) | 不允许进 `.avatar-cat` 圆形容器；不允许 border-radius mask；不允许压成 ≤80px 头像 icon | ✅ 是 (Phoebe §4 13:10 复核 PASS) | 缺失即 blocker，工程报错；不允许 fallback CSS .avatar-cat |
| W2 | stubborn-goose-main-v1 | `.../stubborn-goose/stubborn-goose-main-v1.png` | 同上 | 同上 | ✅ 是 (Phoebe §4 13:10 复核 PASS) | 同上 |
| W3 | ddl-hamster-main-v1 | `.../ddl-hamster/ddl-hamster-main-v1.png` | 同上 | 同上 | ✅ 是 (Phoebe §4 13:10 复核 PASS) | 同上 |
| W4 | backstage-alpaca-main-v2 | `.../backstage-alpaca/backstage-alpaca-main-v2.png` | 同 W1-W3 | 同 W1-W3 | ✅ 是 (13:14 master-sheet crop+chroma 0 image2 锁定) | 缺失即 blocker，工程报错；不允许 fallback CSS .avatar-alpaca |
| W5 | 纸纹 SVG turbulence | `template.html` `.receipt::before` data:image/svg+xml | receipt 全屏纸纹底 | 不允许在角色/物件 PNG 上重叠纹理 | ✅ 是 | n/a (内嵌) |
| W6 | sign-only Google Fonts | Noto Sans SC / Serif SC / Ma Shan Zheng / Zhi Mang Xing / Long Cang / Liu Jian Mao Cao / JetBrains Mono | 所有文字层 | 不允许 emoji 替正文；不允许系统 fallback 无指定字体 | ✅ 是 | CDN 失败 → preconnect retry，不降级到无字体 fallback |
| W7 | paper-01-torn-v1 | `elements-v0.3/paper-01-torn-v1.png` | **限定用途**: 纸张背景 / 局部纸质区域 (替代撕纸 emoji `&#9986;`) | **禁止**当透明 overlay 乱叠；不可在角色 PNG 上覆盖 | ✅ 是 (Fiona 13:06 PASS, 限定用途) | 缺失 → 保留 CSS 撕纸虚线，不允许 emoji 剪刀 |
| W8 | paper-02-folded-v1 | `elements-v0.3/paper-02-folded-v1.png` | 同 W7 | 同 W7 | ✅ 是 (Fiona 13:06 PASS, 限定用途) | 同 W7 |
| W9 | stamp-01-circle-empty-v1 | `elements-v0.3/stamp-01-circle-empty-v1.png` | (NOT IN FINAL 当前状态) | 不允许直接作 stamp overlay | ❌ 否 (R 待重导出) | **R: Fiona 13:06: 当前是 RGB 满底图 (非透明 overlay); 需导出透明印章底 (只保留印油纹理) 或明确作整块纸章区域。**修复路径见 §5.3 |
| W10 | stamp-02-rect-empty-v1 | `elements-v0.3/stamp-02-rect-empty-v1.png` | 同 W9 | 同 W9 | ❌ 否 (R 待重导出) | 同 W9 |
| W11 | scratch-01-crossout-v1 | `elements-v0.3/scratch-01-crossout-v1.png` | (NOT IN FINAL 当前状态) | 不允许直接作批注/抓痕 overlay | ❌ 否 (R 待重导出/SVG-FILE 化) | **R: Fiona 13:06: 当前是 RGB 满底图; 最终如做批注/抓痕 overlay 必须透明化或 SVG-FILE 化。**修复路径见 §5.3 |
| W12 | scratch-02-circle-arrow-v1 | `elements-v0.3/scratch-02-circle-arrow-v1.png` | 同 W11 | 同 W11 | ❌ 否 (R 待重导出/SVG-FILE 化) | 同 W11 |
| W13 | paw-print-mug-v1 | `objects-v0.1/paw-print-mug-v1.png` | (NOT IN FINAL 当前状态) | 不允许直接接入最终 receipt 接入 | ❌ 否 (R 待 receipt 场景预览) | **R: Fiona 13:06: 单看物件有质量, 但和原角色体系是否同世界没验证; 需在角色资产接入后的 receipt 场景里看是否喧宾夺主/像贴纸/与角色线条冲突。**触发动作见 §5.3 |
| W14 | paw-print-sticky-v1 | `objects-v0.1/paw-print-sticky-v1.png` | 同 W13 | 同 W13 | ❌ 否 (R 待 receipt 场景预览) | 同 W13 |
| W15 | tossed-headphones-v1 | `objects-v0.1/tossed-headphones-v1.png` | 同 W13 | 同 W13 | ❌ 否 (R 待 receipt 场景预览) | 同 W13 |
| 🚫 | `.avatar-cat / .avatar-goose / .avatar-hamster / .avatar-alpaca` 整组 | `template.html` L201-400 | **整组 final 禁用** | 不允许出现在最终版 DOM 任何位置 | ❌ 否 | template 清理由 Dave "白名单接入 PR" 同步删除 (per Dave 12:56) |
| 🚫 | `AVATAR_INNER` 表 | `batch-render.cjs` L34-39, `render-spot-check.cjs` 同位 | **整组 final 禁用** | 不允许 emoji 叠字 face placeholder 出现在最终输出 | ❌ 否 | 同上 |
| 🚫 | `&#9986;` (剪刀 emoji) | `template.html` `.tear-scissor` | **final 禁用** | 不允许任何 emoji 替代设计资产 | ❌ 否 | 由 W7 (paper-01-torn) 替代或 SVG-FILE 设计版 |

### §5.2 复核 / taste gate 结果 (13:10 锁定)

| 资产 | 复核源 | 结论 | 时间 |
| --- | --- | --- | --- |
| W1 cat / W2 goose / W3 hamster | Phoebe §4.1 自检 | ✅ PASS | 13:10 |
| W4 alpaca | Phoebe §4.1 自检 | ⏳→**R 降级** (见 §5.3) | 13:10 |
| W7 paper-torn / W8 paper-folded | Fiona PM taste gate | ✅ PASS (限定用途) | 13:06 |
| W9 stamp-circle / W10 stamp-rect | Fiona PM taste gate | ⏳→**R 降级** (见 §5.3) | 13:06 |
| W11 scratch / W12 circle-arrow | Fiona PM taste gate | ⏳→**R 降级** (见 §5.3) | 13:06 |
| W13 mug / W14 sticky / W15 headphones | Fiona PM taste gate | ⏳→**R 待场景验证** (见 §5.3) | 13:06 |

### §5.3 R 降级修复路径

#### W4 alpaca (Phoebe §4.1 复核降 R)

**根因 (与 W1/W2/W3 横向比对)**:
- W1 cat: inked outline + 笔刷 stripe + 阴影 + 表情细节 ✓
- W2 goose: inked outline + brush 羽毛纹 + 翅膀 cross 阴影 ✓
- W3 hamster: inked outline + brush body shading + 表情细节 ✓
- W4 alpaca: 仅 inked outline + 2 dot eyes + 单色 black fill (零 brush 笔刷 / 零 shading / 零 texture)

W4 命中 §4.1 三轴不达标:
- axis 1 (绘制水准): 仅描线无填色质感
- axis 3 (质感): 平面 black fill, 无 matte 笔刷感
- axis 5 (完整角色感): 表情仅 2 dot, 无 W1-3 的 deadpan 神态层次

**修复方案 (二选一)**:
- **方案 A (优先, 0 image2)**: 检查 master-sheet 内是否有同水准 alpaca 单帧 (master 内部参考是 inked + 笔刷质感, 与 W1-3 一致), 直接 crop + rembg 复用 → 0 image2 calls。
- **方案 B (fallback, 需 PM 批)**: 如方案 A 不可行 (master crop 也不够 W1-3 水准), 需 1 张 image2 重绘 alpaca，沿用 W1-3 prompt 律 + 质感参考。

**Phoebe 行动**: 立即按 §A 检查 master-sheet 可用性, 13:30 前给 A/B 选择 + ETA。

#### W9/W10/W11/W12 elements-v0.3 (Fiona PM taste gate 降 R)

**根因**: 当前 4 张是 RGB 满底图，不是透明 overlay。原始生成时未做透明化后处理。

**修复方案**:
- W9/W10 stamp: 重导出透明版本 (chroma key 移除非印油纹理 + alpha mask), 仅保留印油痕迹层；或转 SVG-FILE。
- W11/W12 scratch/arrow: 同上, 透明化或 SVG-FILE 化。

**Phoebe 行动**: 待 W4 解决后 (W4 优先, 因为 4 角色是 final 必需; elements 是装饰非必需), 14:00 后开始 W9-W12 透明化重导出，0 image2 (用现有 RGB 源做 chroma + alpha)。

#### W13/W14/W15 objects-v0.1 (Fiona PM taste gate 降 R 待场景验证)

**根因**: 单件物件质量过, 但与原角色体系是否同世界未验证。

**触发动作**: W1-W3 角色 + W7/W8 纸张接入 staging 后, 在 receipt 场景里看 W13-W15 是否:
- 喧宾夺主 (物件抢角色焦点)
- 像贴纸 (与世界纸感不一致)
- 与角色线条冲突 (笔刷 / 墨水 / 比例不一致)

**Phoebe 行动**: 不主动触发, 等 Dave staging 出 W1-W3 + W7/W8 接入版后, 由 PM 决定是否做"加 W13-W15 的 vs 不加"对比。

### §5.4 当前可立即转 Dave 的最终白名单 (13:14 状态, W4 已锁)

**✅ 锁定 (可进 §6 staging 接入)**:
- W1 cat / W2 goose / W3 hamster / **W4 alpaca-main-v2** (角色组齐)
- W5 纸纹 / W6 字体方案

**✅ 在白名单作未来用 (本轮 receipt 不接入, see §5.5.B.3)**:
- W7 paper-torn / W8 paper-folded

**❌ 不可进 staging (R/未解决)**:
- W9-W12 elements stamp/scratch (待重导出)
- W13-W15 objects (待场景验证, 非阻塞)

### §5.5 Form 决策 (Phoebe 13:14, per Jonathan 12:44 "形式由设计决定" + Fiona 13:12 三 form 决策点)

#### B.1 角色 form: 选 A 升级头像 (保留 .l3 双栏)

- 当前 sign-only live `04b5fac` 是 PM 接受的阶段版本; hero band 改动会触发 L1/L2/metadata/footer 全链路重排, 超出"换 placeholder 为白名单资产"scope。
- W1-W4 v0.2 是 402×611 全身/半身比例, 在 .l3 区放大到 height:120-160px (object-fit:contain) 已经能展示完整角色姿态 + 表情层次, 满足 Jonathan 12:39 验收口径。
- 不需要为 hero band 重新生成 panoramic 角色资产 (会再烧 image2)。

**硬约束 (per §0 红线)**:
- L201-400 整组 `.avatar-{cat,goose,hamster,alpaca}` CSS + ::before/::after/.face/.eyes/.whiskers/.battery/.beak/.seed/.curl 全删
- L188-199 `.avatar` 通用容器: 改 `border-radius: 0` + 移除圆框 border, **保留 rotate(-3°)** 凭条手贴感; 容器尺寸从 110×110 改为 auto×140 (object-fit:contain, 保 W1-W4 比例)
- 新 `.role-img` class **禁用** `border-radius` / `clip-path` / `mask` / `width:fixed; height:fixed; object-fit:cover` (会 crop)

#### B.2 剪刀 emoji `&#9986;`: 直接移除, 不替换

- 当前 `.tear` 区已用虚线 + 小三角分隔表达"撕开此凭条", 剪刀 emoji 是冗余装饰
- 用 W7 paper-torn 替代会喧宾夺主成为新焦点, 不是 tear 分隔符的产品意图
- inline SVG 自绘剪刀又增加一类需 §4.1 质量线对齐的元素, 不必要
- 移除是最干净路径: 0 新增资产 / 0 命中红线 / 视觉损失最小

**硬约束**: `.tear-scissor` div 整块删除; `.tear-line` 双线保留作分隔。

#### B.3 W7/W8: 本轮 receipt 不接入 (留作未来场景)

- 当前 receipt template 已用 `.receipt::before` SVG turbulence 纸纹底, 加 W7/W8 会与既有纸纹重叠 → 噪音叠噪音
- W7/W8 限定用途是"纸张背景 / 局部纸质区域", 当前 receipt 全画布已是纸张背景, 没有"局部纸质区域"需要
- 强行塞入会触发不必要的 form 改动, 偏离 scope

**硬约束**: Dave brief §3 不需要为 W7/W8 在 receipt 内分配 slot; 当前 SVG turbulence 纸纹底保留 (W5 ✅)。W7/W8 仍在 ✅ 白名单, 留作 share-card / poster / 其他场景。

---

## §6 受影响工程位点定位 (Dave 接入参考)

> 本节为定位用，**实际接入由 Dave 出"预审 diff brief"** (per Dave 12:58 + Fiona 12:57:17)。Dave brief 字段已锁:
> 1) 改动 template 区块 (行号 + 区块名)
> 2) CSS 删除清单 (按选择器)
> 3) 新增 asset slot (DOM 结构 + 引用路径 + 尺寸/定位规则, 对照本文 §5)
> 4) 对 L2 / metadata / footer 的连带影响
> 5) 不在改动范围内的明确声明 (src/data / copy-config / Lucy 锁表 / 章 / 抓痕 / 签名 A1)

### §6.1 必须删除 (final 禁用)

| 文件 | 行号/位点 | 删除内容 |
| --- | --- | --- |
| `心情值班室H5/06-前端实现/duty-room-v1/scripts/render-receipts/template.html` | L201-279 | `.avatar-cat` + ::before/::after + .face/.eyes/.whiskers/.battery 整块 |
| 同上 | L280-321 | `.avatar-goose` + ::before + .beak + emoji eyes 整块 |
| 同上 | L322-359 | `.avatar-hamster` + ::before (圆耳) + .seed (🌰) 整块 |
| 同上 | L360-400 | `.avatar-alpaca` + ::before + .curl 整块 |
| 同上 | L613-614 | `<div class="avatar {{AVATAR_CLASS}}">{{AVATAR_INNER}}</div>` 改为按 §6.2 新 slot |
| `心情值班室H5/06-前端实现/duty-room-v1/scripts/render-receipts/batch-render.cjs` | L34-39 | `AVATAR_INNER = { cat:..., goose:..., hamster:..., alpaca:... }` 整块 |
| 同上 | L105-106 | `{{AVATAR_CLASS}}` / `{{AVATAR_INNER}}` 替换逻辑 (改为按 §6.2 注入正式资产路径) |
| `心情值班室H5/06-前端实现/duty-room-v1/scripts/render-receipts/render-spot-check.cjs` | L13 / L47-48 | 同 batch-render |
| `template.html` `.tear-scissor` `&#9986;` | (位点 Dave 定位) | 由 W7 paper-01-torn 替代或 SVG-FILE 设计版 |

### §6.2 新增 / 修改 (待 ⏳ 解锁后由 Dave 出 diff brief)

接入位点候选 (form 由设计决定, Dave brief 时需对照 §4.4):
- 角色 PNG slot: 在 receipt 中合适位置 (form 由设计决定，不预先锁定 hero band 还是 .l3 还是其他)
- 物件 PNG slot (按场景叠加): 同上
- 装饰 PNG slot (撕纸 / 章 / 抓痕): 替代当前 CSS / EMOJI 形式

**注入路径模板 (Dave 接入用)**:
```
角色: ./public/duty-room-v1/{role}-main-v1.png  (origin/main 已部署 copy)
   ↑ 源: design-assets/duty-room-p0/contact-crops-transparent/{role}/{role}-main-v1.png
装饰: ./public/duty-room-v1/elements/{element}-v1.png  (待 Dave 创建 dir + Phoebe 推 copy)
物件: ./public/duty-room-v1/objects/{object}-v1.png  (同上)
```

### §6.3 不在改动范围 (per Dave 12:58 字段 5)

- `src/data/*` (lines-v1.1.ts / roles.ts / scenes.ts / types.ts)
- `scripts/render-receipts/copy-config-v2.json` (Lucy 锁表)
- `template.html` 中签名 (Ma Shan Zheng 字体 + .l3-sign 区块) — sign-only live 已 PM 接受
- `template.html` L1-L200 头部 / L2 / metadata / footer 区块的文字内容 (仅 form 排版可能因角色 slot 改变受连带影响, Dave brief 中说明)
- `qa-h5-pages.ts` (除新增 `qa:no-placeholder` 扫描器)

### §6.4 QA 硬规则 (per Dave 12:56 + Fiona 12:56)

`qa:no-placeholder` 扫描器:
- 扫描最终输出 PNG 对应 template DOM
- 命中以下任一即 FAIL，阻断部署:
  - `class="avatar avatar-*"` 残留
  - `AVATAR_INNER` 模板变量残留
  - `.avatar-cat / .avatar-goose / .avatar-hamster / .avatar-alpaca` CSS 选择器残留
  - 任何在 receipt 中出现的 `· ·` `• •` `— —` `◉ ◉` `〰〰〰` `🌰` `&#9986;` 等 emoji 叠字 placeholder

---

## §7 过程自律 (Phoebe 自约束)

1. **0 image2 调用** — 本轮是资产接入链路问题, 不是生成问题, 烧 quota 不解决问题。如 §5.2 复核降 R 需要重生图, 需 PM 显式批后才开。
2. **不跨频道 @ Dave** — 不在 #代码Engineering 频道, 由 Fiona 转单 (per MEMORY)。本文件是唯一资产决策源, Dave self-serve 可读。
3. **不动 sign-only live** — `04b5fac` 是 Jonathan 接受的阶段版本, 最终版前不动。
4. **不抢跑 staging** — Dave 已 standby, 等白名单 ✅ 后由 Fiona 统一转。
5. **Final 红线零容忍** — 任何 §0 命中即 FAIL, 不留情面, 包括我自己历史方案 (v0.4 tonebreak / v0.3-lite v2 / task #34 mock 已全归 N)。
6. **下次拿到"贴图质量低"反馈时, 第一步必须是查工程是否真在用我的 asset, 不是直接重生成新 asset** (12:33-12:42 教训, 烧了 4 calls 走错路, 已记 MEMORY)。

---

## §8 ETA 与下一步

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 12:59 (本文件落库) | audit v1 落库 + 通告 Fiona | Phoebe (本条) |
| ≤ 13:30 | §4 角色质量线复核 (W1-W4 v0.2) → ⏳ 升 ✅ 或降 R | Phoebe |
| 等 PM | elements-v0.3 / objects-v0.1 taste gate (W7-W15) | Fiona |
| 等 PM | §5 白名单 ✅ 锁定后, 统一转 Dave | Fiona |
| 等 Dave | 预审 diff brief (5 字段) | Dave |
| 等 PM+Phoebe | brief PASS 后进 staging (4 角色试金石 → 32 contact sheet) | Dave |
| 等 PM | 最终版 PM 验收 + qa:no-placeholder 扫描 | Fiona + Dave |

---

## §9 累计 image2 用量

历史: 38 calls + v0.4 tonebreak 4 = **42 calls**
本 audit 增量: **0 calls**
本轮承诺: 不在 §5 白名单/复核未结之前开任何 image2 (除非 §5.2 复核降 R 触发, 且需 PM 显式批)。
