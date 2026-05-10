# Whitelist Integration Diff Brief — v2 (定稿)

**Status**: 定稿。基于 Fiona 13:15:19 正式转单 + 13:12:21/13:16:04/13:17:38 边界 + Phoebe 13:14:24 form 决策。

**Scope**: 清除 `.avatar-*` CSS 几何 placeholder + `AVATAR_INNER` emoji 叠字 + `&#9986;` 剪刀 emoji，按白名单接入 W1-W4 角色资产。本轮只产 4 张 S3 试金石 → 独立 staging → PM/设计 QA → PASS 后扩 32（独立后续 PR）。

**不动**: live commit `04b5fac` / src/data / copy-config / Lucy 32 锁表 / 24 character override / 签名 A1 / 红方章 CSS / 抓痕 CSS / SVG 纸纹 / W6 字体。

---

## §1 改动 template 区块

文件：`scripts/render-receipts/template.html`

| 行号 | 区块 | 改动 |
| --- | --- | --- |
| L188-199 | `.avatar` 通用容器 | 改：`border-radius: 0`，移除 `border: 3px solid var(--ink-main)`，保留 `transform: rotate(-3deg)` 和 `box-shadow`，宽度改 `auto`，高度改 `140px`（per Phoebe B.1 硬约束） |
| L201-279 | `.avatar-cat` + 子选择器 | **全删** |
| L280-321 | `.avatar-goose` + 子选择器 | **全删** |
| L322-359 | `.avatar-hamster` + 子选择器 | **全删** |
| L360-400 | `.avatar-alpaca` + 子选择器 | **全删** |
| L607 | `<div class="tear-scissor">&#9986;</div>` | **整 div 删除**；`.tear-line` 双线保留 |
| L613-615 | `<div class="avatar {{AVATAR_CLASS}}">{{AVATAR_INNER}}</div>` | 改为 `<div class="avatar"><img class="role-img" src="{{ROLE_IMG_SRC}}" alt="{{CHARACTER_NAME}}"></div>` |
| L629 | `<div class="tear-scissor">&#9986;</div>` | **整 div 删除**；`.tear-line` 双线保留 |

新增 CSS（在 `.avatar` 之后）：
```css
.role-img {
  display: block;
  width: auto;
  height: 140px;
  object-fit: contain;
  /* 红线：禁 border-radius / mask / clip-path / object-cover / 中心 crop */
}
```

---

## §2 改动 render scripts

文件：`scripts/render-receipts/batch-render.cjs`

| 行号 | 改动 |
| --- | --- |
| L34-39 | **删除** `AVATAR_INNER` 表 |
| L34 后 | **新增** `ROLE_IMG_SRC` 表（4 角色 → file:// 绝对路径，本地渲染用） |
| L105-106 | **删除** `{{AVATAR_CLASS}}` / `{{AVATAR_INNER}}` 替换；**新增** `{{ROLE_IMG_SRC}}` 替换 |

文件：`scripts/render-receipts/render-spot-check.cjs`

| 行号 | 改动 |
| --- | --- |
| L13-18 | 同 batch-render.cjs |
| L47-48 | 同 batch-render.cjs |

新增脚本：`scripts/render-receipts/render-staging-whitelist-v1.cjs`（4 张 S3 × 4 角色试金石专用，输出独立 staging 目录）。

---

## §3 资产路径（白名单 §5 ✅ 接入）

| 角色 | charId | avatarType | 源资产路径 | 渲染时引用路径 |
| --- | --- | --- | --- | --- |
| W1 cat | low_battery_cat | cat | `Meetu/design-assets/duty-room-p0/contact-crops-transparent/low-battery-cat/low-battery-cat-main-v1.png` | `file://…/public/duty-room-v1/assets/role-v0.2/low-battery-cat-main-v1.png` |
| W2 goose | stubborn_goose | goose | `Meetu/design-assets/duty-room-p0/contact-crops-transparent/stubborn-goose/stubborn-goose-main-v1.png` | `…/stubborn-goose-main-v1.png` |
| W3 hamster | ddl_hamster | hamster | `…/contact-crops-transparent/ddl-hamster/ddl-hamster-main-v1.png` | `…/ddl-hamster-main-v1.png` |
| W4 alpaca | backstage_alpaca | alpaca | `…/contact-crops-transparent/backstage-alpaca/backstage-alpaca-main-v2.png`（Phoebe 13:14 锁，via Fiona 13:17 attachment） | `…/backstage-alpaca-main-v2.png` |

所有资产 402×611 RGBA。Build 步：渲染前从源路径 copy 到 `public/duty-room-v1/assets/role-v0.2/`（已有 v1 目录，alpaca 替换为 v2）。

---

## §4 对 L2 / metadata / footer / tear / stamp 的影响（form A 锁定）

| 区块 | 影响 |
| --- | --- |
| L2 (L596-603) | **不动** |
| metadata (L611-625 `.l3` 双栏) | 结构不动，左列容器尺寸 110×110 → auto×140，右列 `.l3-text` 不动 |
| tear (L605-609 / L627-631) | 删 `.tear-scissor` div，保留 `.tear-line` 双线 |
| L4 stamp (L633-651) | **不动**（W9/W10 R 状态，CSS 章保留） |
| L5 footer (L653-662) | **不动** |
| 签名 A1 (L619-623) | **不动** |
| SVG turbulence 纸纹底（W5） | **不动** |

---

## §5 不在改动范围

- `src/data/*` 数据层
- `copy-config-v2.json` / Lucy 32 锁表 + 24 character override
- 签名 A1 (`Ma Shan Zheng + 48px + weight 600 + letter-spacing -1px + rotate -4°`)
- 红方章 `.big-stamp` CSS（W9/W10 R 状态）
- 抓痕 `.l3-sign-scratch`（W11/W12 R 状态）
- W7/W8 paper-torn/paper-folded（per Phoebe B.3：本轮 receipt 不接入）
- W13-W15 objects（待场景验证）
- 当前 sign-only live commit `04b5fac` GH Pages
- `qa:batch` / `qa:h5` 现有规则
- 32 receipts 扩量（试金石过 QA 后单独 PR）

---

## §6 PM 锁定边界（Fiona 13:12:21 + 13:16:04 + 13:17:38）

1. 角色 form：A（保留 .l3 双栏 + `<img class="role-img">`），不圆裁、不 mask、不 crop、不 object-cover，保留完整 contact-sheet 比例
2. 剪刀 emoji `&#9986;`：直接移除，不替换、不 QA 豁免
3. W7/W8 本轮 receipt 不接入
4. `qa:no-placeholder` 不只扫 template，也扫脚本里 `AVATAR_INNER` / `.avatar-*` / `radial-gradient` / `&#9986;` / `✂` / emoji 占位残留；命中即 FAIL
5. 4 张试金石只用于 PM/设计 QA，不自动扩 32，不部署

---

## §7 `qa:no-placeholder` 扫描规则

扫描目标：
- `scripts/render-receipts/template.html`
- `scripts/render-receipts/batch-render.cjs` / `render-spot-check.cjs` / `render-staging-whitelist-v1.cjs`
- 渲染输出 PNG 对应的 staging 目录（spot-check：DOM source 残留即 FAIL）

FAIL 触发：
- 字符串匹配：`AVATAR_INNER` / `AVATAR_CLASS` / `\.avatar-(cat|goose|hamster|alpaca)` / `radial-gradient.*(?:猫|鹅|仓鼠|羊驼|cat|goose|hamster|alpaca)` / `&#9986;` / `✂` / 角色容器内 emoji 字符（U+1F300-U+1FAFF）
- DOM 选择器存在：`class*="avatar-cat"`、`class*="avatar-goose"`、`class*="avatar-hamster"`、`class*="avatar-alpaca"`、`.tear-scissor`
- `<img>` 的 `src` 不在白名单（W1-W4 v0.2/v2 路径列表）

豁免：W5 SVG turbulence 纸纹（`.receipt::before` 内的 inline SVG）、W6 字体、签名 A1、白名单 ✅ 路径。

---

## §8 接入流程（本 PR）

1. ✅ brief v2 落库（本文件）
2. 修改 template.html / batch-render.cjs / render-spot-check.cjs
3. 新增 render-staging-whitelist-v1.cjs
4. 新增 scripts/qa-no-placeholder.cjs
5. Copy W1-W4 PNG 到 `public/duty-room-v1/assets/role-v0.2/`（W4 v2 替换 v1）
6. 渲染 4 张 S3 × 4 角色 → `public/duty-room-v1/receipts-staging-whitelist-v1/`
7. 跑 `node scripts/qa-no-placeholder.cjs`
8. 出 contact sheet（4 张 1 行）
9. 报告：路径 / 完整姿态 / L2-metadata-footer 是否被压 / qa:no-placeholder 扫描结果
10. PM/设计 QA → PASS 后扩 32（独立后续 PR）

---

## §9 历史决策锚点

- Jonathan 12:47 redline (#产品讨论Product:c51842b4): 最终版禁低质素材
- Fiona 12:48:02 (#代码Engineering:a40a269a): 工程红线五条
- Fiona 12:48:38: `.avatar-*` 整组禁
- Phoebe 13:09 (#设计讨论Design:0d5d0f23): world-asset-audit-v1 §5 白名单结构
- Fiona 13:12:21: form 三决策点边界
- Phoebe 13:14:24: W4 v2 锁 + form A/移除剪刀/W7/W8 不接入
- Fiona 13:15:19: PM 锁定四项
- Fiona 13:15:19 (#代码Engineering:a40a269a): 正式转 Dave 接入范围
- Fiona 13:16:04: qa:no-placeholder 扫脚本范围
- Fiona 13:17:38: W4 v2 通过 attachment 路径下发
