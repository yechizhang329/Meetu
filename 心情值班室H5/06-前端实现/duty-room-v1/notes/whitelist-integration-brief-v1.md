# Whitelist Integration Pre-Review Diff Brief — v1 (预审稿, 不触发 staging)

**Status**: 预审稿。等待两件事完成后转定稿：
1. Phoebe `world-asset-audit-v1.md` §5 W4 backstage_alpaca v2 锁定（ETA 13:30, 2026-05-10）
2. Phoebe form 决策（角色 form A/B、剪刀 emoji 处理、W7/W8 定位）

**Scope**: 受 Jonathan 12:47 final 红线 + Fiona 12:48 工程口径触发，目的：清除 `.avatar-*` CSS 几何 placeholder + `AVATAR_INNER` emoji 叠字 + `&#9986;` 剪刀 emoji，按白名单接入正式角色资产。

**Author**: Dave (engineer)
**Created**: 2026-05-10 13:13
**Threads**: `#代码Engineering:a40a269a`
**PM 锁定边界 (Fiona 13:12:21)**: 见 §6

---

## §1 改动 template 区块（行号 + 区块）

文件：`scripts/render-receipts/template.html`

| 行号 | 区块 | 改动类型 |
| --- | --- | --- |
| L181-186 | `.l3` 容器 | 视 form A/B 调 flex/gap/尺寸 |
| L188-199 | `.avatar` 通用容器（110×110 圆框 + border + rotate -3°） | A 案改 / B 案删 |
| L201-279 | `.avatar-cat` + 子选择器全段 | 全删 |
| L280-321 | `.avatar-goose` + 子选择器全段 | 全删 |
| L322-359 | `.avatar-hamster` + 子选择器全段 | 全删 |
| L360-400 | `.avatar-alpaca` + 子选择器全段 | 全删 |
| L605-609 | `.tear` + `.tear-scissor` `&#9986;`（上分隔线） | 必须替换/删除（PM 红线，不可豁免） |
| L613-615 | `<div class="avatar {{AVATAR_CLASS}}">{{AVATAR_INNER}}</div>` 注入点 | 改为白名单 `<img>` 引用 |
| L627-631 | `.tear` + `.tear-scissor` `&#9986;`（下分隔线） | 必须替换/删除（PM 红线，不可豁免） |

文件：`scripts/render-receipts/batch-render.cjs`

| 行号 | 改动 |
| --- | --- |
| L34 | 删除 `AVATAR_INNER` 表 |
| L105-106 | 删除 `{{AVATAR_CLASS}}` / `{{AVATAR_INNER}}` 替换；新增 `{{ROLE_IMG_SRC}}` 替换（按白名单 §5 路径表） |

文件：`scripts/render-receipts/render-spot-check.cjs`

| 行号 | 改动 |
| --- | --- |
| L13 | 删除 `AVATAR_INNER` 表 |
| L47-48 | 同 batch-render.cjs L105-106 |

---

## §2 CSS 删除清单

整组删除（`template.html` L201-400 全段，per Phoebe 12:48:37 / Fiona 12:48:38 整组禁用）：
- `.avatar-cat`、`.avatar-cat::before`、`.avatar-cat .face`、`.avatar-cat .eyes`、`.avatar-cat .whiskers`、`.avatar-cat .whiskers::before`、`.avatar-cat .whiskers::after`、`.avatar-cat .battery`、`.avatar-cat .battery::before`、`.avatar-cat .battery::after`
- `.avatar-goose`、`.avatar-goose::before`、`.avatar-goose .face`、`.avatar-goose .eyes`、`.avatar-goose .beak`
- `.avatar-hamster`、`.avatar-hamster::before`、`.avatar-hamster .face`、`.avatar-hamster .eyes`、`.avatar-hamster .seed`
- `.avatar-alpaca`、`.avatar-alpaca::before`、`.avatar-alpaca .face`、`.avatar-alpaca .eyes`、`.avatar-alpaca .curl`

通用容器 `.avatar` (L188-199): form 决策点，A 案保留无圆框版本 / B 案整块删并新建 `.role-hero`。

---

## §3 新增 asset slot

按 §5 当前可锁 ✅ 路径（W4 alpaca 待 Phoebe 13:30 v2）：

| 角色 | avatarType | 资产路径 | 原图尺寸 |
| --- | --- | --- | --- |
| W1 cat | low_battery_cat | `Meetu/design-assets/duty-room-p0/contact-crops-transparent/low-battery-cat/low-battery-cat-main-v1.png` | 402×611 |
| W2 goose | stubborn_goose | `Meetu/design-assets/duty-room-p0/contact-crops-transparent/stubborn-goose/stubborn-goose-main-v1.png` | 402×611 |
| W3 hamster | ddl_hamster | `Meetu/design-assets/duty-room-p0/contact-crops-transparent/ddl-hamster/ddl-hamster-main-v1.png` | 402×611 |
| W4 alpaca | backstage_alpaca | ⏳ 等 Phoebe 13:30 v2（如 `…/backstage-alpaca-main-v2.png`） | TBD |

`scripts/render-receipts/batch-render.cjs` / `render-spot-check.cjs` 新增字段：
```js
const ROLE_IMG_SRC = {
  low_battery_cat:  '/duty-room-v1/assets/role-v0.2/low-battery-cat-main-v1.png',
  stubborn_goose:   '/duty-room-v1/assets/role-v0.2/stubborn-goose-main-v1.png',
  ddl_hamster:      '/duty-room-v1/assets/role-v0.2/ddl-hamster-main-v1.png',
  backstage_alpaca: '/duty-room-v1/assets/role-v0.2/backstage-alpaca-main-v2.png', // 待锁
};
```
（资产将由 build 步骤从 `Meetu/design-assets/duty-room-p0/contact-crops-transparent/{role}/` copy 到 `public/duty-room-v1/assets/role-v0.2/`）

DOM 注入两个备选（per Fiona 13:12:21 #1: PM 不选 A/B, 等 Phoebe form 决策；brief 保留两案）:

**A. 升级头像（保留 .l3 双栏布局）**
```html
<div class="role-img-wrap">
  <img class="role-img" src="{{ROLE_IMG_SRC}}" alt="{{CHARACTER_NAME}}">
</div>
```
CSS:
```css
.role-img-wrap { width:auto; flex-shrink:0; transform:rotate(-3deg); }
.role-img { width:auto; height:120px; object-fit:contain; display:block; }
/* 无 border-radius 圆框 / 无 mask / 无中心 crop */
```

**B. hero band 主视觉**（per Phoebe 12:43 一度提案）
```html
<div class="role-hero">
  <img class="role-hero-img" src="{{ROLE_IMG_SRC}}" alt="{{CHARACTER_NAME}}">
</div>
```
CSS: hero band y≈130~680，整宽 contain，底线对齐；`.l3` 移除头像列、`.l3-text` 改为单列 full-width。

PM 红线（Fiona 13:12:21 #1）：无论 A/B，**不能圆形 mask / 不能 CSS placeholder / 不能压成低质 icon**。

---

## §4 对 L2 / metadata / footer / tear / stamp 的影响

| 区块 | A 案影响 | B 案影响 |
| --- | --- | --- |
| L2 (L596-603) | 不动 | 评估是否压缩可用高度，可能下调字号或行高 |
| metadata (L611-625 `.l3`) | 不动结构、只换图 | 移除头像列，`.l3-text` 改单列 full-width |
| tear (L605-609 / L627-631 `&#9986;`) | **必须改**（PM 红线，不可豁免）：换设计资产 / SVG-FILE / 或直接移除 | 同 |
| L4 stamp (L633-651 `.big-stamp`) | 不动（W9/W10 R 状态） | 不动 |
| L5 footer (L653-662) | 不动 | 不动 |
| 签名 A1 (L619-623 `.l3-sign-value`) | 不动（已 sign-only live） | 不动 |

---

## §5 不在改动范围

- `src/data/*` 数据层
- `copy-config-v2.json` / Lucy 32 锁表 + 24 character override
- 签名 A1（`Ma Shan Zheng + 48px + weight 600 + letter-spacing -1px + rotate -4°`）
- 红方章 `.big-stamp` CSS（W9/W10 R 状态，待 Phoebe 透明化重导出）
- 抓痕 `.l3-sign-scratch`（W11/W12 R 状态，待 Phoebe 透明化重导出）
- 当前 sign-only live commit `04b5fac` GH Pages（Jonathan 12:48 允许的阶段版本）
- `qa:batch` / `qa:h5` 现有规则不改，只**新增** `qa:no-placeholder`

---

## §6 PM 锁定边界（Fiona 13:12:21）

1. **角色 form A/B 由 Phoebe 设计决定**，不由 PM 选；brief 保留两案。无论 A/B 选择，PM 红线：不能圆形 mask / 不能 CSS placeholder / 不能压成低质 icon。
2. **剪刀 emoji `&#9986;` 命中 Final 红线**，最终版不允许"保持但 qa 豁免"。最终版只能：设计资产替换 / SVG-FILE 替换 / 直接移除。**`qa:no-placeholder` 不接 `&#9986;` 豁免规则。**
3. **W7/W8 定位由 Phoebe form 规则决定**，不由工程定。允许范围限"纸张背景/局部纸质区域"候选，**禁止工程自行当 tear overlay 乱叠**。具体放整页/局部/不用，等 Phoebe。

---

## §7 `qa:no-placeholder` 扫描规则（新增 QA）

最终版部署前 QA 必跑，命中即 FAIL：

扫 template DOM / 输出 PNG 对应 source：
- `class="avatar"` 单独或与 `avatar-*` 组合出现（L613-614 残留）
- `AVATAR_INNER` / `AVATAR_CLASS` 占位符未替换
- `&#9986;` / `✂` 或 emoji 字符在最终输出
- inline `radial-gradient` 用于角色或物件区
- 任何 `border-radius: 50%` 应用在角色资产容器
- 白名单 §5 ✅ 外的资产路径出现在 `<img src>` / `background-image`

豁免：W5 SVG turbulence 纸纹 / W6 字体 / 签名 A1 / 已锁白名单 ✅ 路径。

---

## §8 接入流程（白名单转单后）

1. Fiona 转 §5 白名单（含 W4 v2 锁定 + form 决策）
2. Dave 按 §6 锁定的 form 重写 brief 为定稿（v2）
3. PR 含：CSS 整组删除 + 注入点改造 + asset copy build step + `qa:no-placeholder` 实现 + S3×4 试金石输出（独立 staging 目录）
4. Fiona/Phoebe PM+ 设计验收试金石 → PASS 后扩 32 contact sheet
5. PASS 后跑 `qa:batch` / `qa:h5` / `qa:no-placeholder` 三件套
6. PASS 后 swap `receipts/` ← staging，部署 GH Pages
7. 期间 sign-only live `04b5fac` 不动，PR 落地后由该 PR 的 swap 替换

---

## §9 待补字段（need Phoebe input）

- W4 backstage_alpaca v2 本机路径与原图尺寸（13:30 ETA）
- W7/W8 paper-torn / paper-folded 本机路径（在 Phoebe `elements-v0.3` 目录，未在我本机）
- form 决策（A/B）+ 剪刀 emoji 替换方案（资产 / SVG-FILE / 删除）+ W7/W8 定位（整页 / 局部 / 不用）

任一字段缺口 = blocker，不允许工程自行 fallback（per Fiona 12:48:02 硬规则）。
