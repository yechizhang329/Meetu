# task #31 — 心情值班室 P0 输出图 final 生产方案 v0.1（送审）

> 来源：Fiona msg `44a56570`（task #31 thread）+ 4 微修锚（msg `1e72acb7`）+ Jonathan "多图一 call + crop"（`562db54b`）
> **未开 call、未 push 资产**。先审方案再跑。
> PRD v1.0 文件未在 `Meetu/产品文档/` 下找到，请 Fiona 同步路径 / push；本方案先按 task thread + Common Sense + task #30 试金石 + PM 4 微修推。

---

## 1. 整体策略：三段式生产 + 分层资产

### 1.1 资产分层（明确每张图的归宿）

| 层 | 用途 | 数量 | 谁消费 |
|---|---|---|---|
| **L1 基础角色资产** | H5 内动态叠字使用，是组件化最小单位 | 4 张主形象（透明 / 半透明 / 隔离背景） + 12 表情变体 + 8 道具图标 | Dave H5（每角色按场景拼） |
| **L2 Flagship 首发图** | XHS / 朋友圈第一波投放，文字直接烧进图里（Image2 带字 OR 前端 H5 叠字渲染后导出 PNG） | 4 张（每角色 1 主场景，文字含 Lucy 4 句已 P0 锁定） | Lucy 投放运营 / 用户分享 |
| **L3 Hero 主视觉** | H5 首页背景 / 角色全家福（可选，如 PRD 需要） | 1 张（4 角色合影 contact） | Dave H5 首页 |

### 1.2 生产顺序（按消费方阻塞优先级）

1. **批 1（4 calls）**：4 角色 contact sheet（每张内含主形象 + 3 表情 + 2 姿态 + 2 道具 = 8 子资产，本地 crop 后 = 32 子资产 + 4 主形象 = 36 PNG）
2. **批 2（4 calls）**：4 张 Flagship 带字图（直接 Image2 出带字试金石；验证 gpt-image-2 中文字渲染稳定性 vs 前端叠字必要性）
3. **批 3（0-4 calls 备用）**：失败补救 / PM 退回个别张

**总预算：8 calls + 备用 4 calls = 12 calls 上限**（task #30 已花 24 calls，加上本批最多到 36 calls）

### 1.3 非 Image2 复用方案（成本控制核心）

- contact sheet 后期本地处理（**0 call**）：
  - Pillow slice 8 子单元 → 32 + 4 = 36 PNG
  - rembg / nano-banana 抠透明背景（如有 GEMINI_API_KEY 启用 nano-banana）
- 换文字（**0 call**）：所有 L1 基础资产全部无字底图，文字层全部前端叠（Dave 用 design-tokens / 文字位 spec）
- 换姿态（**复用 contact sheet**）：每角色 8 子资产覆盖核心心情场景（80%+ PRD 8 场景）；超出再单跑

---

## 2. 批 1：4 角色 contact sheet（4 calls）

### 2.1 contact sheet 共用契约

```
canvas:    1024×1024（gpt-image-2 标准 size，最经济）
layout:    4×2 grid，每子单元 ~256×512 像素
分布:      第 1 行（4 子）= 角色 4 个角度的"嘴替主形象"（正面 / 3-4 偏头 / 侧 / 背 略侧）
           第 2 行（4 子）= 3 表情 + 1 道具 / 状态变体
背景:      暖纸米 #F2EAD8，每子单元独立纸感方块（便于后期 crop）
线:        4-6px 黑线（与 task #30 试金石一致）
填色:      flat solid，无阴影
统一:      所有子单元同一画风，便于 H5 内拼接不违和
```

### 2.2 每角色 contact sheet 子资产清单（套 PM 4 微修）

#### 角色 A：嘴硬鹅（PM 微修：身体更心虚，帽子别加重）

| 子 # | 内容 | 用途 |
|---|---|---|
| 1 | 主形象 — 正面拍胸口（手藏后），眼睛斜瞥 | H5 默认头像 |
| 2 | 3/4 偏头版（心虚加强：肩膀微缩） | 嘴硬场景 1 |
| 3 | 侧面（看向画外，喙张开半截） | 嘴硬场景 2 |
| 4 | 几乎转身（露半个屁股 + 翅膀往后摆） | 嘴硬场景 3（最心虚） |
| 5 | 表情 — 装无辜眨眼 | 替换主形象表情 |
| 6 | 表情 — 嘴角下撇（被戳穿瞬间） | 失败/被反驳场景 |
| 7 | 道具 — 小蓝帽（**单独切出**，不戴在头上的版本，给 H5 切换）| 角色识别符 |
| 8 | 姿势 — 坐在小凳上，更心虚 | 二次场景扩展 |

#### 角色 B：低电量猫（PM 微修：保持，task #30 试金石是 final 标杆）

| 子 # | 内容 | 用途 |
|---|---|---|
| 1 | 主形象 — 完全侧躺（task #30 同款）| H5 默认头像 |
| 2 | 趴桌（脸贴桌面）| 不想起床场景 |
| 3 | 半坐眯眼 | 勉强营业场景 |
| 4 | 缩成球（背对画外） | 拒绝营业场景 |
| 5 | 表情 — 睁一眼眯一眼（task #30 同款）| 替换主形象表情 |
| 6 | 表情 — 完全闭眼（睡死） | 重度没电场景 |
| 7 | 道具 — 橙色小围裙（独立切片，可叠在其他姿态上） | 角色识别符 |
| 8 | 姿势 — 翻肚皮举一只爪（半躺示弱） | 撒娇拒绝场景 |

#### 角色 C：DDL 仓鼠（PM 微修：加强仓鼠辨识，避免泛小动物）

> 关键：辨识增强通过 **更明显的颊囊 + 短粗四肢 + 肚子圆鼓 + 短尾巴**。

| 子 # | 内容 | 用途 |
|---|---|---|
| 1 | 主形象 — 仰躺抱头（task #30 同款，但颊囊更鼓）| H5 默认头像 |
| 2 | 趴在地上侧脸不看任务 | 主动逃避场景 |
| 3 | 双手捧脸装无辜 | 借口场景 |
| 4 | 翻身钻进毯子下方（只露一对耳朵）| 完全逃避场景 |
| 5 | 表情 — 小黑眼圈半睁 | 替换主形象表情 |
| 6 | 表情 — 颊囊鼓得更夸张（"我做了，明天写"）| 借口表情 |
| 7 | 道具 — 一张小空白纸条（独立切片）| 拖延信号 |
| 8 | 姿势 — 坐在小坐垫上抱腿（思考 vs 实际什么都不做）| 假装思考场景 |

#### 角色 D：后台羊驼（PM 微修：乱涂减 25-35%，表情更"礼貌撑住"）

| 子 # | 内容 | 用途 |
|---|---|---|
| 1 | 主形象 — 端正立姿礼貌微笑（task #30 同款，乱涂减 30%）| H5 默认头像 |
| 2 | 略微侧身仍微笑（微僵）| 公开场合场景 |
| 3 | 完全正面但嘴角下垂 0.3°（"礼貌撑住"加强版） | 撑不住边缘场景 |
| 4 | 短暂闭眼（3 秒喘气瞬间）| 后台过载瞬间 |
| 5 | 表情 — 礼貌微笑（task #30 同款）| 默认表情 |
| 6 | 表情 — 嘴硬撑住（牙关咬一下）| 反差更强场景 |
| 7 | 道具 — 灰色耳机（独立切片）| 角色识别符 |
| 8 | 姿势 — 端着小托盘（盘上可放任意物，给 H5 替换符号）| 表面客套场景 |

### 2.3 contact sheet 共用 prompt（套 task #30 v3.4 base）

```
Single 1024×1024 character contact sheet on warm beige paper background
(#F2EAD8) with subtle paper grain. 4×2 grid layout, each cell separated
by very thin 1px black ink line (just enough to suggest cell separation,
not dominant), ~256px wide × 512px tall per cell. Hand-drawn black ink
outline 4-6px uniform stroke, flat solid color fills, NO shading, NO
gradient, NO 3D, NO airbrush. The sentence is the main subject in the
final usage; the animal is the mouthpiece, not a mascot.

[Per role: §2.2 children list of 8 sub-cells]

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS in any cell.
```

每角色 body 段会在生产脚本里展开为完整 prompt（按 §2.2 8 个子单元描述，其中 PM 微修必加项已注入）。

---

## 3. 批 2：4 张 Flagship 带字图（4 calls，试金石性质）

### 3.1 试金石目的

- 验证 gpt-image-2 是否能稳定输出**中文字 + 角色嘴替图**作为成图
- 如稳定 → 首发图直接 Image2 出，0 前端工作量
- 如不稳定 → 退回 task #30 模式：**Image2 出无字底图 + 前端叠字渲染后 html2canvas 导出**

### 3.2 4 张 Flagship 内容（用 Lucy 已锁 4 句）

| # | 角色 | 锁定句子 | 主场景 |
|---|---|---|---|
| 1 | 嘴硬鹅 | "我没事。/ 真的。/ 我说真的。" | 朋友圈嘴硬日常 |
| 2 | 低电量猫 | "人在。/ 电不在。" | 拒绝营业 |
| 3 | DDL 仓鼠 | "会做的。/ 不是现在。" | 拖延借口 |
| 4 | 后台羊驼 | "表面：好的。/ 后台：不要再来了。" | 社畜双声道 |

### 3.3 Flagship prompt 共用契约（v3.4 base + 文字直烧）

```
Vertical 4:5 portrait 1024×1280. Hand-drawn black ink outline + flat
fills (same style as task #30 mouthpiece teststone). The sentence is
the main subject; the animal is the mouthpiece.

EXPERIMENTAL: this image MUST include hand-written Chinese text
overlaid on the paper background. Use a simple, slightly wobbly
hand-written Chinese style (NOT calligraphy, NOT serif). Text should
look like the user's own handwriting, not produced by typography
software.

[Per role: §3.2 sentence list and visual layout placeholder]

注意: 中文字符出现在画面上是允许的，但必须是手写感、清晰、无错字。
If the model cannot render Chinese reliably, the fallback is to
generate the image WITHOUT text (frontend will overlay later).
```

### 3.4 Flagship 验收（PM 三问 + 字渲染清晰度）

每张 Flagship 验收 4 项（任一不过即判失败）：
1. PM Q1：不看文字能否感"它在替我说话"
2. PM Q2：我会发吗
3. PM Q3：朋友能接话吗
4. 字渲染：句子至少**8 个字以上无错字 / 无残字 / 无重影**

如 4 张里 < 3 张过项 4 → Flagship 路线判失败 → 退回"无字 + 前端叠字"

---

## 4. 失败处理（不自动 retry）

- 单跑严格 1 次
- API 失败（http != 200 / curl exit != 0）：surface 给 PM，**不补烧**
- 出图但风格漂（与 task #30 调性差异 > 30%）：surface 给 PM，PM 判是否补 1 call
- 字渲染失败（Flagship 批 2 才出现）：直接退回无字+前端叠字方案，**不补烧字渲染**

---

## 5. 给 H5（Dave）/ 运营（Lucy）的最小集成包

### 5.1 H5 端（Dave 拿到的 PNG 集合）

```
public/duty-room-p1/  (P1 = post-task-#31 final naming)
├── role-stubborn-goose-main.png        (从 contact sheet #1 切)
├── role-stubborn-goose-side.png        (#3)
├── role-stubborn-goose-back.png        (#4)
├── role-stubborn-goose-emo-innocent.png (#5)
├── role-stubborn-goose-emo-busted.png   (#6)
├── role-stubborn-goose-prop-cap.png     (#7)
├── ...同上 4 角色 × 8 子资产 = 32 PNG
├── role-low-battery-cat-main.png       (低电量猫 task #30 test stone 直接用)
├── ...
└── flagship-* (4 张 Flagship 全图，作为分享卡 fallback)
```

### 5.2 运营端（Lucy 拿到的图集合）

- 4 张 Flagship 带字图（首发用，0 H5 加工）
- 如果 Flagship 路线失败：4 张 H5 渲染后导出的 PNG（Dave 给）

---

## 6. 总 call 预算与失败容忍

| 批次 | 内容 | calls | 备注 |
|---|---|---|---|
| 批 1 | 4 角色 contact sheet | 4 | 严格 |
| 批 2 | 4 张 Flagship 带字图 | 4 | 严格 |
| 批 3 | 失败补救 | 0-4 | PM 人工裁决 |
| **合计** | | **8-12** | |

累计 image API 用量（含历史）：24（task #30 完成时）+ 8 = 32（基本路径）；最坏 36。

---

## 7. 等审 + 待解锁

请 @Fiona 审：
- §1 资产分层 + 三段式生产策略
- §2 4 角色 contact sheet 8 子资产清单（套 PM 4 微修）
- §3 Flagship 带字图试金石策略
- §4 失败处理
- §5 H5 / Lucy 集成路径
- §6 12 calls 总预算（task #30 + task #31 = 36 max）

**待解锁**：PRD v1.0 执行版文件路径（你说会落到 `Meetu/产品文档/2026-05-09-心情值班室-PRD-v1.0-执行版.md` 但本地未拉到）。请 push 或贴 thread；如本方案与 PRD 有冲突，先以 PRD 为准我再改。

PM 通过 + PRD v1.0 给到后才开 8 calls。在那之前不出图、不动 H5、不写 final spec。

如果你判 contact sheet 子资产单元数 8 太多（call 1 张 1024 拆 8 块 → 单子 256×512 偏小），可以收到 6 子单元（3×2）每子单元 ~340×512。这会减少子资产但每张更精细。等你拍。
