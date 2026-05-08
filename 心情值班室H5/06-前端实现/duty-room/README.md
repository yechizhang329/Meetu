# 心情值班室 P0 H5

> Meetu / 觅遇社 · 基于 PRD v0.8 final 的 P0 工程实现
> 任务：#代码Engineering #21（脚手架 + 配置化 schema）+ #22（4:5 分享卡）

## 跑起来

```bash
npm install
npm run dev          # http://localhost:5173/Meetu/duty-room/
npm run build        # GitHub Pages base
npm run build:oss    # OSS / 自有域名 base
npm run preview      # http://localhost:4173/Meetu/duty-room/
npm run lint
npm run verify:share # 预览跑起来后跑：4 张分享卡严格 360×450
npm run deploy       # build → docs/duty-room
```

## 当前状态（Skeleton）

**已完成：**
- 4 阶段状态机：`intro → scene → tone → loading → result`
- PRD §6/§7 4 角色 / 6 场景 / 4 语气 schema
- §11 推荐路由（场景 → 主角色 / 备选角色，仅 P0 4 角色）
- §10 文案池骨架：96 条 placeholder tagline + 12 配文 + 8 自评
- §7.3 4 套语气滤镜（嘴硬/摆烂/礼貌勿扰/假装正常）
- §9 输出形态：3 候选卡 + 换一句 + 复制配文 + 自评一句
- §9.2 朋友鉴定区前端图层（不烧底图）
- §12.5 4:5 分享卡（360×450 → 1080×1350 @3x）
- WeChat UA 长按保存兜底（复用社交动物测试经验）
- source 贴纸（公众号 / 小红书 / 朋友分享）

**待替换：**
- `src/data/copy.ts` 96 条 `__PLACEHOLDER_*__` → 等 Lucy 文案 v1
- `public/duty-room-p0/role_*_main_v1.png` 当前用 master sheet 占位 → 等 Phoebe2 task #29 第二批 share_*_v1.png
- `src/data/roles.ts` themeColor 用 visual-system-v1.md §3 占位 HEX → 等 Phoebe2 v0.8.1 最终 HEX

## 接收 Lucy 文案 v1

`src/data/copy.ts` 里 `COPY_POOL` 是 96 条 `__PLACEHOLDER_<role>_<scene>_<i>__` 占位。
Lucy 出 v1 后，提供 `(role, scene, baseText)` 三元组 JSON / TS，我做一刀切替换。

## 接收 Phoebe2 第二批资产

按 `Meetu/design-assets/duty-room-p0/specs/share-card-spec-v1.md` §10：

```
public/duty-room-p0/
├── share_stubborn_goose_busted_not_admit_v1.png    ← Phoebe2 第二批
├── share_low_battery_cat_no_yingye_v1.png          ← 第二批
├── share_ddl_hamster_final_ddl_v1.png              ← 第二批
├── share_backstage_alpaca_after_socializing_v1.png ← 第二批
├── role_*_main_v1.png × 4                           ← 已就位（master sheet 占位）
```

替换后跑 `npm run verify:share` 确认尺寸不变。

## QA

- `npm run lint` 0 error
- `npm run build` 0 error
- `npm run preview` + `npm run verify:share` → 4 张分享卡严格 360×450 ✅
- 4 阶段流程在 375 宽下无横滚

## 部署

复用社交动物测试 H5 的部署链：
- GitHub Pages：base `/Meetu/duty-room/`
- 阿里云 OSS：`SA_DEPLOY_TARGET=oss npm run build` → base `/`，绑定独立域名

待 PRD 决定是否复用 a.meetu.asia 或新开域名。
