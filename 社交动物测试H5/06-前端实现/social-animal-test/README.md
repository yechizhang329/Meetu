# 社交动物测试 H5 · P0

> Meetu · 觅遇社 · 不是心理诊断，只是社交状态速写。

H5 直链测试：12 题 → 16 种社交动物结果 → 可保存/长按分享的结果卡。无需登录、无注册、无 CTA。

---

## 0. 项目位置

```
Meetu/社交动物测试H5/06-前端实现/social-animal-test/
```

---

## 1. 运行 / 构建

```bash
# 安装依赖
npm install

# 本地开发（Vite HMR）
npm run dev
# → http://localhost:5173/

# 生产构建（含 TypeScript 类型检查）
npm run build
# 产物：dist/

# 本地预览构建结果
npm run preview
# → http://localhost:4173/

# 打分数据与可达性 sanity check（20 000 次随机抽样）
npx tsx scripts/verify-scoring.ts

# 分享卡尺寸 strict 3:4 verify（16 个结果逐个测）
npm run preview &
npx tsx scripts/verify-share-card-dims.ts

# 生成 QA 截图（375 + 390px + 16 种结果）
npm run preview &   # 先起 preview
npx tsx scripts/snap-mobile.ts
# → qa-screenshots/
```

---

## 2. 主要依赖

- `react 19` + `react-dom 19`
- `vite 8`（React plugin）
- `typescript 5`
- `html2canvas 1.4`（结果卡导出 PNG）
- `puppeteer`（仅 dev/QA，用于批量截图）

总产物：`~428 KB JS / ~11 KB CSS`（gzip 后 `~122 KB / 3 KB`）。

---

## 3. 目录

```
social-animal-test/
├── index.html                 # 入口 HTML（含 viewport / theme-color）
├── src/
│   ├── main.tsx               # 根渲染入口
│   ├── App.tsx                # 四阶段状态机：intro → quiz → loading → result
│   ├── components/
│   │   ├── IntroPage.tsx      # 入口页
│   │   ├── QuizPage.tsx       # 12 题单题单屏
│   │   ├── LoadingPage.tsx    # 生成仪式感
│   │   ├── ResultPage.tsx     # 结果页 + 分享卡预览 + 保存动作
│   │   ├── ShareCard.tsx      # 3:4 分享卡（on-screen preview + off-screen export clone）
│   │   └── AnimalIllustration.tsx  # SVG 动物（4 款完稿 + 12 占位）
│   ├── data/
│   │   ├── types.ts           # AnimalType / QuizQuestion / AnimalResult / UserAnswer
│   │   ├── questions.ts       # 12 题 + 计分权重（PRD §9.5 + 可达性补丁）
│   │   ├── results.ts         # 16 动物全文案（含 friendRoast / selfRecognition）
│   │   └── scoring.ts         # calculateResult + 平局规则
│   ├── utils/
│   │   └── shareImage.ts      # html2canvas 导出 + 微信 UA 判断
│   └── styles/
│       ├── tokens.css         # Phoebe2 v1 token（CSS 变量）
│       └── app.css            # 所有页面样式
├── scripts/
│   ├── verify-scoring.ts      # 计分/可达性验证
│   └── snap-mobile.ts         # 移动端 QA 截图
└── qa-screenshots/            # 生成后的截图（gitignored）
```

---

## 4. P0 功能覆盖

| 项 | 状态 |
|---|---|
| H5 直链访问 | ✅ `npm run preview` → 直接打开根路径 |
| 无登录 / 无注册 / 无手机号 / 无授权 | ✅ 代码搜 `login/register/phone/auth` 为 0 |
| 入口页（标题 / 副标题 / 3 点说明 / 开始按钮 / 免责声明） | ✅ |
| 答题页 12 题单题单屏 + 进度条 + 返回上一题 | ✅ |
| 4 选项点击后自动进下一题 | ✅（260ms 停顿看"被圈中"动效） |
| 生成中过渡（~1.3s） | ✅ |
| 结果页（动物名 / 一句话 / 关键词 / 朋友锐评 / 自我认领 / 常见模式 / 朋友眼中 / 适合氛围 / 3 tips） | ✅ |
| 分享卡 3:4（360×480 逻辑像素 / 导出 3x 约 1080×1440） | ✅ |
| 分享卡 on-screen 预览（微信内长按保存） | ✅ |
| html2canvas 导出 PNG（非微信环境直接下载） | ✅ |
| 再测一次（清 localStorage + 回入口） | ✅ |
| URL hash 深链（`#result=power_cat` 直达结果） | ✅（QA 与分享回流预留） |
| localStorage 恢复已完成结果（刷新不丢） | ✅ |
| 移动端 375 / 390px 无横向滚动 | ✅（验证截图见 `qa-screenshots/01-intro-*.png`） |
| **无** 活动推荐 / 报名 / 加群 / 下载 App / 强 QR | ✅ |

---

## 5. 数据层

### 5.1 12 题 + 权重来源

题目文案来自 `Meetu/社交动物测试H5/02-题目与结果/2026-05-06-社交动物测试定位题目v6.md`（v6 是最新）。
计分权重来自 PRD §9.5。

### 5.2 结果文案来源

16 动物的一句话 / 常见模式 / 朋友眼中 / 适合氛围 / 3 tips / 关键词全部来自 PRD §10。

**新增字段**（PRD 没有，但 Phoebe2 spec 与 Fiona 结构要求里定义了位置）：
- `friendRoast`：朋友锐评，分享卡传播核心钩子，Dave 起稿 + Lucy 后续润色；
- `selfRecognition`：自我认领短句，可做朋友圈/群聊配文，Dave 起稿 + Lucy 后续润色。

所有 16 项都已经补齐，Lucy 只需要替换文案，不用动结构。

### 5.3 计分算法

见 `src/data/scoring.ts`。与 PRD §9.1–9.3 一致：
- 每个选项给 2-3 个动物加权；
- 最终最高分为主结果；
- 平局时最近 4 题权重有 +0.1 tie-break bonus；
- 全平局兜底到 `calm_capybara`（PRD §9.3.3）。

---

## 6. ⚠️ 发现的 PRD 问题（已向 Fiona 报告）

`scripts/verify-scoring.ts` 对 20,000 个随机答题组合做了可达性抽样，发现 PRD §9.5 原始权重下，**3 个动物在随机场景下从未获胜**：

- `show_peacock` 开屏孔雀
- `night_owl` 夜航猫头鹰
- `lastminute_pigeon` 临门鸽

原因是这 3 个动物只在 2-3 道题中被提权，而 `power_cat` 等在 6+ 道题里都有 +1/+2/+3 权重，累计总分压过"偏门"动物。

**P0 临时处理**：在 5 个选项里给这 3 个动物补了小权重（+1 或 +2）使其在抽样中可达。每处改动都用 `/* +reach */` 标记在 `src/data/questions.ts`。

**Fiona 拍板后**：要么把这些补丁升级成正式 PRD 变更、要么走 PRD weight rebalance。现状是 P0 可用，但分布不均匀（`power_cat` 约 27%，`show_peacock` 仅 0.2%）。

---

## 7. 已知限制 / 非 P0

1. **16 动物 SVG 只画了 4 款**（`power_cat` / `vibe_monkey` / `border_hedgehog` / `social_butterfly`），其余 12 用占位（主色块 + 动物字）。PRD §13.4 明示 P0 可占位；Phoebe2 后续扩展。
2. **分享卡文字字体依赖系统字体**（PingFang SC / Microsoft YaHei）。在极少数 Android 设备上可能回退 sans-serif。
3. **微信内置浏览器可能阻拦 a[download]**。已在结果页给出长按预览卡的提示 + UA 判断。
4. **未接入真实埋点**。PRD §12 的埋点事件暂未 wired。`console.log` mock 可后续按需打开。
5. **未做 HTTPS 部署配置**。静态产物走 Vercel/Cloudflare Pages 直接托管即可。

---

## 8. 自测清单（每次改动前跑一遍）

- [ ] `npm run lint` 通过（零 error）
- [ ] `npm run build` 通过（含 TS 严格模式）
- [ ] `npx tsx scripts/verify-scoring.ts` → 所有 16 动物可达
- [ ] `npx tsx scripts/verify-share-card-dims.ts` → 16 张分享卡均 360×480（严格 3:4）
- [ ] `npx tsx scripts/snap-mobile.ts` → 入口/答题/结果在 375 + 390 都无横向滚动
- [ ] hash 深链 `#result=power_cat` 直达对应结果页
- [ ] 答题流程 12/12 完成后落到 loading → result
- [ ] 结果页"保存分享卡"不报错（CI 环境无 UI 时手动验证）
- [ ] 人工 review：确认无**登录入口 / 注册入口 / 手机号输入 / 活动报名按钮 / 加群 CTA / 下载 App CTA / 强 QR**（"报名/附近/下载"这类词可能在结果文案里出现，如 `lastminute_pigeon` 的"报名时很真诚"——这类是内容不是 CTA，不算违规）

---

## 9. 维护指南

**改文案**（任何结果的 oneLiner / friendRoast / selfRecognition / 任意字段）：
只改 `src/data/results.ts`。组件不用动。

**改权重**（调整某只动物概率）：
改 `src/data/questions.ts`。改完跑 `verify-scoring.ts` 看分布。

**加新动物**：
需要同步改 `types.ts` / `results.ts` / `questions.ts` / `tokens.css` / `AnimalIllustration.tsx`。不建议在 P0 做。

**换视觉**：
改 `src/styles/tokens.css` + `app.css`。结构不动。

**任何技术决策都要同步到 `Meetu/Common Sense/决策Log/2026-MM.md`**（AGENTS-PROTOCOL 要求）。
