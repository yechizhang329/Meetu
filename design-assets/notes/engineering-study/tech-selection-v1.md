# 心情值班室 P0 v1.0 — 技术选型评估 v1（工程侧开放评估）

> 来源：task #23（`#代码Engineering:f2393870`）/ PRD v1.0 §5.6 技术选型开放评估
> 作者：Dave（工程）
> 基准文档：`2026-05-09-心情值班室-PRD-v1.0-执行版.md`（Fiona 附件 `4da50f34`，尚未 push）
> 前置参考：`design-assets/notes/engineering-study/external-reference-engineering-v1.md`
> 状态：**结构/技术方案草案**，不做 UI 拼接；等 Lucy 文案池 + Phoebe2 final 资产方案进入 review 后再启动正式开发

---

## 0. 我的产品判断 review（在给技术方案前先答这 5 题）

| # | 5 问 | 我的答 |
|---|---|---|
| 1 | 用户日常已经在发的图里，最像我们要做的是哪一张？ | 不是 Tiny Type（避开 PM `286c2005` 提醒），不是网易云分享卡（品牌太强）。最像的是 **小红书"人在。电不在。"这类"1 张动物 + 1 行手写感句子"的用户自制状态图**（研究稿 `research-sprint-v1` §8）|
| 2 | 那张图有几个元素？ | 通常 **2 个**：1 只动物 + 1-2 行手写句。没有 logo / 没有 tag / 没有 border / 没有朋友鉴定框 |
| 3 | 删掉所有品牌 / banner / 边框 / 标签，PRD 还成立吗？ | ✅ 成立。PRD v1.0 §4.2 明确"极轻落款" + 禁 banner / logo / 标签 / 朋友鉴定框 |
| 4 | 我自己会发吗？ | 看了 task #30 4 张试金石（特别是低电量猫趴桌那张），**我会发**。但目前 v0.9 的 UI 包一层让它变成"产品截图"，就不会发了 |
| 5 | 朋友第一反应是"这是某个 app 的截图"还是"X 自己发的状态"？ | task #30 teststone 单图 = "X 自己发的状态"；v0.9 整页截图 = "某 app 的截图"。所以**最终输出必须只是那张图，不是 H5 截屏**。v1.0 导出链路要导出**纯 4:5 最终图**，不带 H5 chrome |

结论：这个产品的"最终输出"是**那张 4:5 PNG**，H5 只是生成器。H5 UI 漂亮与否次要，**导出图质量是第一**。

---

## 1. 技术选型评估（7 候选）

核心技术难题（按重要度排）：

- **T1**：在 Image2 无字背景图上叠加**手写感中文文字**，让文字"像画面原生部分"而不是"网页字体贴上去"
- **T2**：4:5 1080×1350 输出图**文字排版**（大号手写字、多行中文换行、控制不溢出、控制不居中呆板）
- **T3**：微信长按保存 + 非微信下载（已在 v0.9 验证通过）
- **T4**：占位文案 / 内部 ID / 技术 tag 在 build-time 和 export-time 阻断
- **T5**：文案池可配置、角色图可替换（Lucy / Phoebe2 产物进来不需要改工程）

### 1.1 候选矩阵

| # | 方案 | 对 T1-T5 的适配 | 优点 | 缺点 | 开发量 | 最终图质量上限 |
|---|---|---|---|---|---|---|
| **A** | Canvas 2D API 直出 | T1✅✅ T2✅✅ T3✅ T4✅ T5✅ | 精确像素控制；手写字可用 Web Font + `fillText` 做角度/描边/不对称；直接 canvas `toBlob('image/png')` 导出 | 中文排版需自己实现（换行、压缩、字距）；组件复用弱 | 中 | **高**（1080×1350 真实像素） |
| B | React DOM + html2canvas | T1⚠️ T2⚠️ T3✅ T4✅ T5✅ | 复用 v0.9 链路；开发快 | **html2canvas 对 Web Font + transform 支持差**；中文手写字体在 canvas 环境下常降级；**最容易出"拼接感"**（这正是 PRD §8.2 禁止的） | 小（复用） | **低-中**（v0.9 实测） |
| C | SVG + foreignObject + 导出 | T1⚠️ T2✅ T3✅ T4✅ T5✅ | 矢量排版优雅；SVG `<text>` 支持精确 kerning / textPath | 导出需要 `XMLSerializer + Image + canvas`，浏览器实现差异大；foreignObject 在某些 webview 渲染错 | 中 | 中（导出 bug 风险） |
| D | Image2 带字整图 | T1✅✅✅（画面原生）T2❌ T3✅ T4❌ T5❌ | 文字即画面，**最像用户会发的图** | Lucy 40 条 A 级 + 16 backup = 56 条文案，每条每角色一张 = 224 张 Image2 call；成本失控；换一句/换角色链路断裂 | — | 上限最高但 scope 与链路断裂 |
| **E** | Image2 无字背景 + Canvas 2D 叠手写字 | T1✅✅ T2✅✅ T3✅ T4✅ T5✅ | 画面背景 AI 生成不可替代的质感；文字用 Canvas 2D 精确绘制，支持手写 Web Font、微旋转、不对称构图、单字偏移等"非 UI 字"技法；文字和背景都在同一 canvas 上一起 `toBlob` 导出，**不存在拼接边界** | 需要实现一个简单的 "Canvas 排字引擎"（~200-300 行 TS）；手写中文 Web Font 加载体积需要 subset | 中 | **高，且可控** |
| F | 预渲染 SVG/PNG 模板 + 运行时文字注入 | T1✅ T2✅ T3✅ T4✅ T5⚠️ | 每角色一张底模，文字运行时注入；离线生成器可跑 puppeteer + Canvas 2D | 与 E 等价但多一层编译 | 中+ | 高 |
| G | 服务端脚本离线渲染（nodejs canvas / puppeteer） | T1✅ T2✅ T3✅（预渲染后 CDN）T4✅ T5✅ | 产图质量最稳；不受 webview / 字体加载限制 | 部署运维额外一层；实时性弱；Meetu 暂无服务端 | 大 | 高 |

### 1.2 推荐方案：**E (Image2 无字背景 + Canvas 2D 叠手写字)** 为主路径，**D (Image2 带字整图)** 为运营首发图补充（PRD §5.3 已预设）

**理由**：

1. **T1 是成败关键**，方案 E 把背景（Image2 画面）和文字（Canvas 2D 绘制）**在同一个 canvas 上合成**，最终导出的是一张整图的像素，**没有任何拼接边界**（vs 方案 B 的 html2canvas，有 webview 字体 fallback 风险）
2. **v0.9 失败的核心原因之一是用 B**：html2canvas 对 `--font-handwrite` 支持不稳（webview 缺字体会降级到系统字），这让文字在导出图里变成"UI 字体贴上去"（即"拼接感"）
3. 方案 E 的"Canvas 排字引擎"不是重新发明轮子，200-300 行 TS 就够（见 §2）
4. 方案 E 允许文字做"非 UI"技法：手写 Web Font + 微旋转 + 单字偏移 + 每行不同字距 + 可在画面任意位置落笔——**全是 v0.9 做不到的**
5. **复用 v0.9 已通的部分**：`html2canvas`（仅用于 H5 UI 截屏预览，不用于最终导出图）、Vite + React + TypeScript、Meetu/duty-room 目录结构
6. **不采纳 D 作为主路径**因为 PRD §5.3 明确"换一句 / 换角色"链路必须动态；D 只作首发 4 张 flagship 带字图（Phoebe2 task）

### 1.3 淘汰理由

- **B（v0.9 延续）**：html2canvas + Web Font 中文支持不稳，这是 v0.9 导出图看起来像"产品截屏"的根因之一。继续用会重复同一个问题
- **C（SVG foreignObject）**：webview 兼容性风险大；没有明显收益
- **D（Image2 带字整图作为主路径）**：链路断裂 + scope 失控（PRD 已排除）
- **F（预渲染模板）**：与 E 等价但多编译层，P0 不必要
- **G（服务端离线）**：Meetu 暂无服务端；运维复杂；P0 不必要

---

## 2. 方案 E 技术细节（Canvas 2D 排字引擎 + Image2 背景合成）

### 2.1 架构

```
┌─────────────────────────────────────────────────────────┐
│  H5 (React + Vite)                                      │
│  ├─ UI 页面（选场景 / 嘴替工作台）— 用 CSS 正常实现      │
│  ├─ MouthpieceCanvas (<canvas> 1080×1350)               │
│  │   ├─ Layer 0: 背景色（#F2EAD8 纸米）                  │
│  │   ├─ Layer 1: Image2 角色主图（drawImage）            │
│  │   ├─ Layer 2: 嘴替文字（Canvas 排字引擎）             │
│  │   └─ Layer 3: 极轻落款（9px PingFang Regular）        │
│  └─ 导出：canvas.toBlob('image/png') → 下载/长按保存      │
└─────────────────────────────────────────────────────────┘

Runtime 字体加载：
  fontFace('"ZiHun Handwrite"') → woff2 subset（中文 subset ~ 600-1000 字）
```

### 2.2 Canvas 排字引擎（~200-300 行 TS）

功能：

- 输入：文本（多行，支持 `\n`）、最大宽度、字号、字体、对齐（左/右/居中）、**可选 per-glyph variance**（每字旋转 ±1°、每字 y 偏移 ±2px，用来破"UI 字"感）
- 中文换行：按 CJK 字符 + 标点逐字塞入，超过 maxWidth 回车
- 输出：`measureLayout(): { lines: Line[], bbox }` + `paint(ctx)`

关键函数：

```ts
interface TextLayout {
  lines: Array<{ text: string; x: number; y: number }>;
  bbox: { x: number; y: number; w: number; h: number };
}

function layoutMouthpiece(opts: {
  text: string;
  maxWidth: number;
  fontSize: number;
  fontFamily: string;
  lineHeight: number;
  align: 'left' | 'right' | 'center';
}): TextLayout;

function paintMouthpiece(ctx: CanvasRenderingContext2D, layout: TextLayout, variance?: {
  rotateRange: number;   // 默认 ±1°
  yJitter: number;       // 默认 ±2px
  xJitter: number;       // 默认 ±1px
}): void;
```

### 2.3 手写中文字体方案

候选（按优先）：

1. **霞鹜文楷 LXGW WenKai**（开源、免费商用、中文 subset 友好、笔意手写但不丑）— **推荐**
2. 字魂手写体（商业字体，需授权）
3. Reach 楷（商业，Meetu 已用过但可能需要授权）

方案：
- 字体文件放 `public/fonts/lxgw-subset.woff2`
- 用 `fonttools pyftsubset` 生成 subset（常用 3500 字 + Lucy 文案池关键字），约 0.6-1.2MB
- Canvas 绘制前 `await document.fonts.load('48px "LXGW WenKai"')` 确保加载完成
- Fallback：如果字体未加载，**阻止导出**（导出按钮 disabled + toast "字体加载中"）

### 2.4 Layout 比例（1080×1350 画布）

不居中、不对称、破 UI 感——

```
┌─────────────────────────────────────────────┐
│                                             │
│   嘴替文字（位置随机落笔：                    │
│   左上 / 左中 / 右上 / 中                   │
│   字号 64-80px                              │
│   多行时每行 x 微偏移 ±12px                  │
│   整体 rotate ±1.5°)                        │
│                                             │
│                                             │
│                                             │
│                              ┌─────────┐    │
│                              │         │    │
│                              │ 角色图   │    │
│                              │ 占 35-   │    │
│                              │ 45% 画面 │    │
│                              │ 位置：   │    │
│                              │ 右下 /   │    │
│                              │ 左下 /   │    │
│                              │ 中下     │    │
│                              └─────────┘    │
│                                             │
│  Meetu·心情值班室      9px / 左下极轻落款    │
└─────────────────────────────────────────────┘
```

**关键**：每个角色有自己的"文字位置 + 角色位置"组合（task #30 teststone 4 张已经验证 4 种构图）。Phoebe2 final 主图交付时一并给 4 组构图位置。

### 2.5 换一句 / 换角色 链路

- 换一句：重新 `paintMouthpiece`（layout 重算 + 重绘），~50ms
- 换角色：`Image` preload 新角色 PNG → `drawImage` 替换背景层 + 重新 `paintMouthpiece`，~150ms
- 预览图：`canvas.toDataURL('image/png')` 转 `<img>` 供用户长按

---

## 3. 数据结构 v1.0（PRD §3 / §5.5 / §10.3）

### 3.1 核心类型

```ts
// 角色
type RoleId = 'stubborn_goose' | 'low_battery_cat' | 'ddl_hamster' | 'backstage_alpaca';

// 场景（PRD §3 8 场景）
type SceneId =
  | 'stubborn_deny'       // S1 嘴硬否认
  | 'low_battery'         // S2 低电量拒绝营业
  | 'ddl_procrast'        // S3 DDL / 拖延
  | 'polite_overflow'     // S4 表面正常后台崩
  | 'need_quiet'          // S5 想安静 / 勿扰
  | 'invited_out'         // S6 被约出门但不想动
  | 'msg_unreplied'       // S7 消息不想回
  | 'pushed_along';       // S8 被安排 / 被催

// 嘴替句
interface MouthpieceLine {
  id: string;                    // `mp_s1_goose_01` 等
  sceneId: SceneId;
  roleId: RoleId;
  text: string;                  // 嘴替句（单行可带 \n）
  friendReply?: string;          // 朋友接话建议（PRD §3.1）
  caption?: string;              // 配文建议
  riskChecked: boolean;          // Lucy 自评是否过敏感词
  tier: 'A' | 'B';               // A 级（40 条）/ B 级 backup（16 条）
}

// 场景推荐
interface SceneRecommend {
  sceneId: SceneId;
  primary: RoleId;
  fallback: RoleId;
}

// 角色资产
interface RoleAsset {
  roleId: RoleId;
  name: string;                  // "嘴硬鹅"
  mainPng: string;               // final 无字主图 URL
  scale: number;                 // 画面占比 0.35-0.45
  position: 'br' | 'bl' | 'bc' | 'cr' | 'cl';  // 构图位置
  textAnchor: 'tl' | 'tc' | 'tr' | 'cc';        // 文字位置偏好
}
```

### 3.2 数据文件组织

```
src/data/
  roles.ts           # 4 角色（name / mainPng / scale / position / textAnchor）
  scenes.ts          # 8 场景（id / userLine / recommend）
  mouthpiece.ts      # 40 A + 16 B 条文案池（Lucy 产出，Dave 接入）
  export type MouthpieceLine[];
```

### 3.3 导出规范（PRD §6.3）

```ts
interface ExportSpec {
  width: 1080;
  height: 1350;
  format: 'png';
  quality: 0.95;
  minimumPixelDensity: 2;   // canvas 逻辑尺寸 540×675，实际 1080×1350
}
```

---

## 4. 导出链路

### 4.1 链路

```
用户点"保存这张"
  ↓
Canvas 2D 已有 1080×1350 实时绘制
  ↓
canvas.toBlob('image/png', 0.95)
  ↓
分支：
  ├─ 微信 webview（UA 命中 MicroMessenger）：
  │   生成 <img> 置入页面可见区，toast "长按图片 → 保存图片"
  └─ 非微信：
      URL.createObjectURL(blob) → <a download="duty-room-{roleId}-{sceneId}.png"> → click()
```

### 4.2 4:5 严格校验（继承 v0.9 verify:share）

保留 `scripts/verify-share-card-dims.ts`，改为 canvas 尺寸检测：

```ts
const canvas = document.querySelector<HTMLCanvasElement>('#mouthpiece-canvas')!;
assert(canvas.width === 1080 && canvas.height === 1350);
```

每次 PR 自动跑，尺寸漂移 fail-fast。

---

## 5. 质量防线（PRD §6.3 / §8.4）

### 5.1 Build-time 阻断

新 `vite-plugin-prd-guard.ts`：

```ts
// build 时扫描所有 dist/assets/*.js
// 命中任一 patten 则 fail：
const BAD_PATTERNS = [
  /__PLACEHOLDER_/,
  /__tag_[a-z_]+_\d+__/,
  /^#[a-z_]+$/m,       // 英文下划线 tag
  /role_[a-z_]+_main_v\d/,   // 旧 v0.9 内部资产路径
];
```

任一命中，`vite build` 失败 + 显示具体文件和行号。

### 5.2 Export-time 阻断

导出按钮 click handler 先跑：

```ts
function canExport(text: string): { ok: boolean; reason?: string } {
  if (/__PLACEHOLDER/.test(text)) return { ok: false, reason: 'placeholder 未替换' };
  if (/^[a-z_]+$/i.test(text.trim())) return { ok: false, reason: '技术 ID 暴露' };
  if (!text.trim()) return { ok: false, reason: '文案为空' };
  return { ok: true };
}
```

fail 时禁用下载 + toast "文案池未接入，先不要发"，避免用户拿到带 `__PLACEHOLDER` 的图。

### 5.3 Render-time 过滤

原 v0.9 已有 `visibleTags()` 防御（我在 v0.9 最后一版加过），在 v1.0 继续沿用：

```ts
function visibleTags(tags: string[]): string[] {
  return tags.filter((t) => {
    const s = t.replace(/^#/, '').trim();
    if (!s) return false;
    if (s.startsWith('__')) return false;
    if (/^[a-z0-9_]+$/.test(s)) return false;
    return true;
  });
}
```

但 PRD v1.0 §4.2 禁止输出图出现标签条，所以**这条防御仅作 H5 UI 兜底**，不出现在导出图中。

---

## 6. 与 v0.9 的复用 / 抛弃清单

### 6.1 复用（不重写）

- Vite + React + TypeScript + ESLint 脚手架
- 微信 UA 判断 `isLikelyWeChat()`
- 非微信下载路径（`URL.createObjectURL` + `<a download>`）
- 4 角色 TypeScript 类型（roles.ts 字段有变化，但结构相近）
- verify-share-card-dims.ts（改为 canvas 尺寸检测）
- source 贴纸逻辑（xhs / wechat_mp / friend_share）
- localStorage 恢复（但仅恢复 scene + roleId，不恢复完整 cards）

### 6.2 抛弃（重写）

- **app.css 全部**（v0.9 风格已被 PM 否掉）
- **ShareCard.tsx 全部**（html2canvas 换成 Canvas 2D）
- **DutyResultPage 布局**（改为"3 候选嘴替句 stack + 1 个 canvas preview"）
- **ToneSelectPage**（PRD §6.2 语气变成结果页 chip，不再独立页）
- **copy.ts 的 PLACEHOLDER 池**（全部废弃，等 Lucy 40 A + 16 B）
- **sampling.ts 的 buildCandidateCards 逻辑**（改为按 PRD §3 scene → role → tier A 的 5 条中抽 3 条）

### 6.3 待 Lucy / Phoebe2 输入

- **Lucy**：`src/data/mouthpiece.ts` 的 40 条 A + 16 条 backup + 朋友接话 + 配文
- **Phoebe2**：`public/duty-room-v1/` 的 4 角色 final 无字主图 PNG + 4 flagship 带字图（flagship 不进 H5，走运营首发）+ 4 角色构图位置 spec（scale / position / textAnchor）

---

## 7. 开发节奏（PRD §9 阶段 A/B）

### 阶段 A（现在可做，不阻塞 Lucy / Phoebe2）

- [ ] 搭 Canvas 2D 排字引擎（200-300 行 TS）+ 本地 mock 测试
- [ ] 加载 LXGW WenKai woff2 subset
- [ ] build-time / export-time / render-time 3 道防线
- [ ] 数据结构 scaffold（types.ts / scenes.ts 的 8 场景元数据）
- [ ] verify-canvas-dims 脚本

估时：**1-2 天**。输出物：无 UI 的 Canvas 2D demo，可 mock 文字 + mock 角色图，导出 1080×1350 PNG 通过。

### 阶段 B（Lucy + Phoebe2 到位后）

- [ ] 接入 Lucy `mouthpiece.ts`
- [ ] 接入 Phoebe2 4 张 final 主图
- [ ] H5 UI：首页 / 选场景 / 结果页（结果页包含 canvas preview + tone chips + 换一句 / 换一只）
- [ ] localStorage 恢复
- [ ] 整体 QA（lint / build / verify:canvas / 手工走 8 场景）
- [ ] 截图给三方验收

估时：**2-3 天**。进入 PM 三问 + 工程验收。

---

## 8. 给 Fiona 的关键决策点（需要 PM 拍板才能进入阶段 A）

1. **方案 E 确认为主路径**：Image2 无字背景 + Canvas 2D 叠手写字 + 同一 canvas 合成导出。是否通过？
2. **LXGW WenKai 作为手写字体**：开源、商用可、中文笔意手写但不丑。是否通过？或者你有别的字体偏好？
3. **Phoebe2 交付什么**：4 角色 final 无字主图 PNG +（可选）4 flagship 带字图（PRD §5.5 资产清单）。是否补一份**每角色构图位置 spec**（scale / position / textAnchor）？
4. **Lucy 交付什么**：`src/data/mouthpiece.ts` 的 TypeScript 数据还是 markdown 表？我倾向 markdown → 我来 search-replace 接入（Lucy 不写 TS）
5. **工程何时开阶段 A**：现在？还是等 Lucy / Phoebe2 交付方案通过后？PRD §9.1 说"Dave 可以先做数据结构和导出链路，不做最终 UI 拼接"——按这个我现在可以开阶段 A

---

## 9. 不做的事（明确）

- ❌ 不在 v0.9 上修补
- ❌ 不改 PRD v1.0 的产品定义 / 场景列表 / 角色列表
- ❌ 不自己出视觉方案 / 文案池
- ❌ 不做 Tiny Type 模仿品
- ❌ 不做 H5 UI 拼接到 Lucy / Phoebe2 方案通过之前
- ❌ 不引入复杂动效 / 登录 / 评论区 / 自定义上传

---

## 10. 引用

- PRD v1.0：Fiona msg `08874134` 附件 `4da50f34`（尚未 push）
- research-sprint v1：`design-assets/duty-room-p0/specs/research-sprint-v1.md`
- 外部参照工程拆解 v1：`design-assets/notes/engineering-study/external-reference-engineering-v1.md`
- task #30 嘴替试金石：`design-assets/duty-room-p0/mouthpiece-teststone-v0.1/`
- LXGW WenKai：https://github.com/lxgw/LxgwWenKai

---

**完。等 Fiona 拍板 §8 的 5 个决策点后开阶段 A。**
