# 心情值班室 vNext (P0 prework)

**Status**: P0 技术底座 — placeholder 内容, 不接 final copy / final visual。
**Created**: 2026-05-10 (commit pending)
**Owner**: @Dave (engineering)
**SoT**: `Meetu/产品文档/2026-05-10-心情值班室-vNext-PRD-v2.1-角色嘴替重构中文版.md`
**Task**: #28 (`#代码Engineering:54595862`)

---

## 不复用 v1.x 产品假设 (硬约束)

本目录与 `duty-room-v1/` **物理隔离**。**禁止**:

- import 任何 `duty-room-v1/` 路径下的模块
- 引用旧 RoleId (`stubborn_goose` / `low_battery_cat` / `ddl_hamster` / `backstage_alpaca`)
- 引用旧角色中文名 (嘴硬鹅 / 低电量猫 / DDL 仓鼠 / 后台羊驼)
- 复用旧文案表 (`copy-config-v2.json` / `lines-v1.1`)
- 复用旧 schema (`slip-config` / `slip-data-adapter`)
- 复用旧 receipt template (`scripts/render-receipts/template.html` 1080×1350 凭条)
- 复用旧 `.avatar-*` CSS / `.tear-scissor` / `&#9986;` 占位
- 复用旧 receipts/ PNG (`public/duty-room-v1/receipts/*.png`)
- 复用旧 design-assets (`design-assets/duty-room-p0/contact-crops-transparent/...`) **作为 vNext 视觉源**

`qa:no-v1-leak` 自动校验，命中即 FAIL。

---

## 复用 v1.x 工程能力 (允许)

| 能力 | v1.x 来源 | 在 vNext 的位置 |
| --- | --- | --- |
| Hash router 思路 (parseHash/writeHash) | `duty-room-v1/src/App.tsx` | `src/lib/hash-router.ts` (重写, 不直接 import) |
| Vite + TSC + React 19 工具链配置 | `duty-room-v1/{vite.config.ts, tsconfig*}` | `vite.config.ts`, `tsconfig*.json` (类似配置, 独立) |
| 6 项 QA 链方法论 | `duty-room-v1/scripts/qa-*` | P3 部署阶段重写 vNext 等价命令 |
| Save / download flow (iOS/微信 fallback) | `duty-room-v1/src/pages/ResultPage.tsx:36-90` | P2 视觉接入后, 抽到 `src/lib/save.ts` |
| Canvas font-loader / export-guard | `duty-room-v1/src/canvas/{font-loader, export-guard}.ts` | P2 分享图导出阶段复用 |
| `deploy:gh` 脚本固化 (build + cp dist→docs) | `duty-room-v1/package.json` | P3 部署阶段重写为 `deploy:gh-vnext` |

原则: **能复用工程能力就复用，不复用旧产品假设**。

---

## P0 范围 (本 commit)

- 数据 schema (`src/data/types.ts`): RoleId / SceneId / Role / RoleQuote / Scene / ResultVariant / ResultPageState
- Config (`src/config/{roles,scenes,quotes,variants}.config.ts`): 5 角色 / 6 场景 / 35 quotes / 36 variants 全 placeholder
- 状态机 (`src/state/useResultPageState.ts`): init / changeWording / switchRole / resetScene
- Hash router (`src/lib/hash-router.ts`)
- 5 组件 (`src/components/{ResultImage, CurrentRoleCard, ChangeWordingButton, AlternateRoleCards, ResultActions}.tsx`)
- 3 页面 (`src/pages/{IntroPage, SceneSelectPage, ResultPage}.tsx`)
- App + main (`src/App.tsx`, `src/main.tsx`)
- 3 QA gate (`scripts/qa-{vnext-config-integrity, no-placeholder-text, no-v1-leak}.cjs`)
- Vite / TSC / package / .gitignore / index.html

## 不在 P0 范围 (留 P1/P2/P3)

- 最终角色名、style phrase、personality line、quotes (P1 等文案 brief)
- 最终视觉资产、imageRef 真实路径、结果图 layout (P2 等视觉 brief)
- 分享图 canvas 导出 (P2)
- 部署 npm script `deploy:gh-vnext` + GH Pages live (P3)
- `qa:asset-magenta` / `qa:live-receipt-avatar` 校准到 vNext (P3)

## P0 验证

```bash
cd Meetu/心情值班室H5/06-前端实现/duty-room-vnext
npm install
npm run qa:vnext-config-integrity   # PASS: 6 scene + 5 role + ≥35 quote + ≥36 variant + 18 组合覆盖
npm run qa:no-placeholder-text      # ℹ️ count-only (P0 全 placeholder 是 expected)
npm run qa:no-v1-leak               # PASS: 0 v1 leakage
npm run build                       # PASS: tsc + vite build OK
npm run dev                         # 本地 H5: intro → scene select → result page; 切换嘴替 / 换说法状态机正确
```

任何 PR description 必须列: 复用 v1.x 工程能力的清单 + 不复用的产品模块清单。

---

## P1 准入条件 (文案侧)

- 5 角色命名候选确定
- 35+ quotes 文本确定 (3 role_card + 2 alternate_card + 2 result_support × 5)
- 36+ variants 结果句确定 (18 组合 × ≥2)
- style phrase / personality line / voice rules / forbidden moves 确定
- 替换 config 文件 placeholder
- `qa:no-placeholder-text -- --strict` PASS

## P2 准入条件 (视觉侧)

- 5 角色 imageRef 资产路径确定 (transparent PNG, 同质量线)
- 结果图 layout spec (Phoebe v0.1+) 确定
- CurrentRoleCard / AlternateRoleCards 视觉细化
- 分享图 canvas 导出实现
- `qa:asset-magenta` 校准 vNext 资产 cream halo 阈值

## P3 准入条件 (部署)

- `deploy:gh-vnext` script 实现
- vite base = `/Meetu/duty-room-vnext/`
- GH Pages docs/duty-room-vnext/ 同步
- `qa:live-receipt-avatar` 校准 vNext zone + placeholder signatures
- live HTTP 200 + naturalSize + pixel verify

---

## Fallback

v1.x sign-only live (`Meetu` repo commit `04b5fac`) 在 v1.x 路径完整保留, 与 vNext 物理隔离, 部署 URL `/Meetu/duty-room-v1/` 不变。如 vNext 部署出问题可独立 git revert vNext commit, 不影响 v1.x live。
