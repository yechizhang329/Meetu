# 心情值班室 vNext (P1 文案接入)

**Status**: P1 文案接入完成 — final copy 已落 (5 角色 / 6 场景 / 32 quotes / 18 result_text); imageRef 仍 placeholder 等 P2 视觉。
**Created**: 2026-05-10 (P0); **Updated**: 2026-05-11 (P1 SoT 接入)
**Owner**: @Dave (engineering)
**Product SoT**: `Meetu/产品文档/2026-05-10-心情值班室-vNext-PRD-v2.1-角色嘴替重构中文版.md`
**Copy SoT**: `Meetu/产品文档/2026-05-11-心情值班室-vNext-copy-sot-final.md` (post-personality_line removal)
**Task**: #28 (`#代码Engineering:54595862` + `#代码Engineering:4d1a2260` 文案 handoff thread)

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

## P1 已完成 (本 commit)

- 数据 schema (`src/data/types.ts`): RoleId / SceneId / Role (含 roleProfile / voicePrinciple / do / dont / redline / defaultScene / backupScenes) / RoleQuote (含 usages 数组 + tier=master/backup) / Scene (含 sceneTitle + sceneExamples) / ResultVariant / ResultPageState
- Config 全部 final 文案 (`src/config/{roles,scenes,quotes,variants}.config.ts`):
  - 5 角色 final 命名: 嘴硬章鱼 / 断电猫 / 躺平树懒 / 整活吗喽 / 高情商刺猬
  - 6 场景 final sceneTitle + sceneExamples
  - 32 quotes (15 master + 17 backup, 含 usages 多用途)
  - 18 result_text final
  - imageRef 仍 placeholder (等 P2 视觉)
- 状态机 (`src/state/useResultPageState.ts`): init / changeWording (round-robin, P1 单 variant 退化) / switchRole (pool 内, variant 回 default) / resetScene
- Hash router (`src/lib/hash-router.ts`)
- 5 组件骨架 (P1 用 final 文案 render, neutral CSS placeholder 等 P2 视觉)
- 3 页面: IntroPage / SceneSelectPage / ResultPage
- 3 QA gate (npm scripts):
  - `qa:vnext-config-integrity`: 6 scene / 5 role / role 字段完整 (含 do/dont/redline/voicePrinciple) / 18 result_text 覆盖 18 组合 / 每 role ≥1 master role_card quote + ≥1 preview quote / role.defaultScene 在该 scene rolePool 内
  - `qa:no-placeholder-text`: count-only; P1 仅 imageRef placeholder
  - `qa:no-v1-leak`: 24 黑名单 patterns, 0 hit

## 不在 P1 范围 (留 P2/P3)

- imageRef 真实路径 (`scripts/qa-asset-magenta` 校准 vNext)
- 结果图 layout / Block2/Block4 视觉细化
- 分享图 canvas 导出
- 部署 npm script `deploy:gh-vnext` + GH Pages live
- `qa:live-receipt-avatar` 校准到 vNext

## P1 验证

```bash
cd Meetu/心情值班室H5/06-前端实现/duty-room-vnext
npm install
npm run qa:vnext-config-integrity   # PASS
npm run qa:no-placeholder-text      # ℹ️ 1 placeholder (imageRef placeholder, P2 等)
npm run qa:no-v1-leak               # PASS: 0 v1 leakage
npm run build                       # PASS: tsc + vite build OK
npm run dev                         # 本地 H5: 5 final 角色 + 6 final 场景 + 18 final result_text + role_card quote 替代 personality_line
```

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
