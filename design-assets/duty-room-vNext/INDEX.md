# 心情值班室 vNext 设计资料索引

> 日期：2026-05-12
> 维护人：Fiona
> 用途：后续设计/工程/PM 调用所有设计资料的单一入口
> 上游 PRD：`Meetu/产品文档/2026-05-12-心情值班室-vNext-PRD-v2.3.md`

---

## 🟢 Adopted — 已进工程 / 已交付

这些 spec 和资产已通过验收，进入实际使用。改动需走新版本号 + DavidC 拍板。

### Contact Sheet v10

- **Spec**：[specs/contact-sheet-prompt-v10-for-crop.md](specs/contact-sheet-prompt-v10-for-crop.md)
- **产出**：[specs/contact-sheet-v10.png](specs/contact-sheet-v10.png)（4000x1080，实际 1659x948，浅米底 #F9F7F3）
- **作者**：Fiona 出 prompt / Phoebe2 生图
- **时间**：2026-05-12 15:33 spec / 15:48 产出
- **用途**：5 角色全身写真母图，裁剪成单角色 PNG
- **Commit**：86abb14

### 5 张单角色 PNG（role-assets-v2）

- **Spec**：参见 contact-sheet-prompt-v10-for-crop.md（裁剪 via manual column ranges + generous padding）
- **产出**：`role-assets-v2/role-{A-E}-{name}.png`（1080x1080，浅米底）
  - role-A-octopus.png（嘴硬章鱼）
  - role-B-cat.png（断电猫）
  - role-C-sloth.png（躺平树懒，DavidC 手工修复版）
  - role-D-monkey.png（整活吗喽，DavidC 手工修复版）
  - role-E-hedgehog.png（高情商刺猬）
- **作者**：Phoebe2 裁剪 / DavidC 手工修复 C/D
- **时间**：2026-05-12 15:46
- **用途**：
  - Block 1 H5 动态展示区
  - Block 5 静态分享图（从此处取角色图）
- **Commit**：a3c1536 → 87448d3 → d2a9972

### 5 张 Profile 图（profile-assets）

- **Spec**：[specs/profile-image-spec-v1.md](specs/profile-image-spec-v1.md)
- **产出**：`profile-assets/profile-{A-E}-{name}.png`（1200x1200，极低饱和彩色背景，头部+肩像）
  - profile-A-octopus.png（极浅薄荷 #E8F0ED，v2 委屈感温和版）
  - profile-B-cat.png（极浅暖米 #F5EDE8，v2 强化猫特征版）
  - profile-C-sloth.png（极浅天蓝 #E8EDF2）
  - profile-D-monkey.png（极浅柠檬 #F5F0E8）
  - profile-E-hedgehog.png（极浅薰衣草 #EDE8F0）
- **作者**：Fiona 出 spec / Phoebe2 生图
- **时间**：2026-05-12 17:14 spec / 18:40 初版 / 21:05 A-B v2 rerun
- **用途**：
  - P2 选嘴替页头像
  - Block 2 嘴替 profile 介绍
  - Block 4 换个嘴替 CTA 卡头像
  - 未来 H5 导航栏 / Meetu 平台用户头像等
- **Commit**：326e2e6 → bbf55be（A-B rerun v2）
- **DavidC 验收**：2026-05-12 20:58 通过

---

## 🟡 Ready to Execute — 已定 spec 待执行 / 待出 spec

### Block 5 分享图 layout spec（待出）

- **状态**：⏳ 待 Phoebe2 产出 `block-5-share-image-spec-v1.md`
- **依赖**：
  - ✅ 元素清单（PRD v2.3 §7.5）
  - ✅ 资产路径（PRD v2.3 §13.6）
  - ✅ 角色名（文案 SoT §2）
  - ✅ result_text（文案 SoT §6）
  - ✅ 角色标签（文案 SoT §9，2026-05-12 21:08 final）
- **尺寸**：3:4 竖版（建议 1080x1440 或 1200x1600，由 Phoebe2 draft 后拍板）
- **需 DavidC 拍板**：layout 方向 / 字号层级 / 字体 / 具体尺寸

### Block 6 "觅遇社"导流框（参考社交动物测试）

- **状态**：⏳ 待 Lucy 产出文案 + 待 Phoebe2 出 layout
- **参考**：社交动物测试结果页底部"不是广告位"引流框（DavidC 2026-05-12 21:14 指定）
- **关键元素**：
  - 反讽标题「不是广告位」
  - 问句（适配心情值班室场景，不复用"朋友局"）
  - 副文案
  - CTA「微信搜一搜：觅遇社」（文字搜索指令，不用二维码，符合 PRD §15）
  - branding「Meetu · 让认识新朋友自然一点」
  - 视觉风格：手绘粗线边框 + 色块装饰

### Character Card Spec v1（已被 Block 5 spec 逻辑替代）

- **Spec**：[specs/character-card-spec-v1.md](specs/character-card-spec-v1.md)
- **状态**：⚠️ **superseded**（被 PRD v2.3 §7.5 Block 5 + 待产 block-5-share-image-spec-v1.md 替代）
- **保留原因**：历史参考（2026-05-12 14:25 早期版本，已被后续 PRD v2.3 Block 1-6 结构替代，不再执行此 spec）
- **关键差异**：老 spec 是 4:3 横版，新 Block 5 是 3:4 竖版；老 spec 5 个角色名/quote 已变更（"硬撑章鱼"→"嘴硬章鱼" 等）

---

## ⚪ Reference / Historical — 迭代历史 / 研究参考

这些 spec 不再直接被使用，但保留为版本演进历史或研究参考。

### 视觉方向 visual-direction 迭代史

| 版本 | 时间 | 路径 | 关键变化 |
|---|---|---|---|
| v0.1 | 2026-05-10 23:31 | [specs/visual-direction-v0.1.md](specs/visual-direction-v0.1.md) | 初版方向探索 |
| v0.2 | 2026-05-11 00:30 | [specs/visual-direction-v0.2.md](specs/visual-direction-v0.2.md) | v0.1 修正 |
| v0.2.1-CD-pilot | 2026-05-11 00:33 | [specs/visual-direction-v0.2.1-CD-pilot.md](specs/visual-direction-v0.2.1-CD-pilot.md) | CD pilot 探索 |
| v0.2.2-CD-reframe | 2026-05-11 00:43 | [specs/visual-direction-v0.2.2-CD-reframe.md](specs/visual-direction-v0.2.2-CD-reframe.md) | CD 方向重构 |
| v5 | 2026-05-11 19:58 | [specs/visual-direction-v5.md](specs/visual-direction-v5.md) | 校园低保真嘴替物件方向 |
| v6 | 2026-05-11 20:31 | [specs/visual-direction-v6.md](specs/visual-direction-v6.md) | — |
| v7 | 2026-05-11 22:24 | [specs/visual-direction-v7.md](specs/visual-direction-v7.md) | — |
| v7.2 | 2026-05-11 22:43 | [specs/visual-direction-v7.2.md](specs/visual-direction-v7.2.md) | — |
| v8 | 2026-05-11 23:27 | [specs/visual-direction-v8.md](specs/visual-direction-v8.md) | 当前方向共识来自这条线 |

**当前使用的方向**：PRD v2.3 §13.5 总结"画风：校园低保真手绘 / 粗糙 marker 墨线 / 简化动物造型"——由 visual-direction 线索汇总。

### Contact Sheet Prompt 迭代史

| 版本 | 时间 | 路径 | 状态 |
|---|---|---|---|
| v9 | 2026-05-12 11:06 | [specs/contact-sheet-prompt-v9.md](specs/contact-sheet-prompt-v9.md) | 被 v9.1 取代 |
| v9.1 | 2026-05-12 13:19 | [specs/contact-sheet-prompt-v9.1.md](specs/contact-sheet-prompt-v9.1.md) | 被 v10 取代 |
| **v10-for-crop** | 2026-05-12 15:33 | [specs/contact-sheet-prompt-v10-for-crop.md](specs/contact-sheet-prompt-v10-for-crop.md) | ✅ **Adopted（当前使用）** |

### CD Pilot Prompt 实验

| 版本 | 时间 | 路径 | 用途 |
|---|---|---|---|
| v1 | 2026-05-11 01:03 | [specs/CD-pilot-prompt-v1.md](specs/CD-pilot-prompt-v1.md) | CD 方向试验 |
| test-v3 | 2026-05-11 05:26 | [specs/CD-pilot-prompt-test-v3.md](specs/CD-pilot-prompt-test-v3.md) | 含 `CD-pilot-prompt-test-v3.png` / `CD-v9-patched.png` |

### 研究类 Spec

| 研究 | 路径 |
|---|---|
| TA 颜色偏好研究 | [specs/TA-color-preference-study-v0.1.md](specs/TA-color-preference-study-v0.1.md) |
| XHS 视觉语言 v0.1 | [specs/XHS-visual-language-study-v0.1.md](specs/XHS-visual-language-study-v0.1.md) |
| XHS 视觉语言 v0.2 | [specs/XHS-visual-language-study-v0.2.md](specs/XHS-visual-language-study-v0.2.md) |

---

## 📁 目录结构

```
design-assets/duty-room-vNext/
├── INDEX.md                                 ← 本文件（入口）
├── specs/
│   ├── contact-sheet-prompt-v10-for-crop.md ← Adopted
│   ├── contact-sheet-v10.png                ← Adopted（产出）
│   ├── profile-image-spec-v1.md             ← Adopted
│   ├── character-card-spec-v1.md            ← Superseded
│   ├── contact-sheet-prompt-v9.md           ← Historical
│   ├── contact-sheet-prompt-v9.1.md         ← Historical
│   ├── visual-direction-v0.1.md → v8.md     ← Historical
│   ├── CD-pilot-prompt-v1.md                ← Historical
│   ├── CD-pilot-prompt-test-v3.md           ← Historical
│   ├── TA-color-preference-study-v0.1.md    ← Research
│   └── XHS-visual-language-study-v0.{1,2}.md ← Research
├── role-assets-v2/                          ← Adopted
│   └── role-{A-E}-{name}.png                ← 1080x1080，浅米底
├── profile-assets/                          ← Adopted
│   └── profile-{A-E}-{name}.png             ← 1200x1200，彩色背景
├── _audit-CD-v3/                            ← Audit artifacts（历史）
├── CD-pilot-prompt-test-v3.png              ← CD pilot 产出（历史）
└── CD-v9-patched.png                        ← v9 patch（历史）
```

---

## 🔁 调用方式

- **要看某 spec 当前状态**：先看本 INDEX.md 对应 section（🟢/🟡/⚪），再进对应文件
- **要产新资产**：查 🟢 section 路径 + 查 PRD v2.3 §13.6 视觉资产清单，避免重复生产
- **要改 spec**：走新版本号 + DavidC 拍板后更新本 INDEX.md
- **要归档新资料**：新增后务必在本 INDEX.md 对应 section 登记，保持索引与目录同步

---

## 📌 待更新

- [ ] Block 5 分享图 layout spec（待 Phoebe2 出）
- [ ] Block 6 觅遇社导流框 spec（待 Lucy + Phoebe2 出）
- [ ] D 整活吗喽 profile 图表情（可选 rerun，DavidC 未明拒也未明 rerun，默认接受当前版）

产出新资产后，更新本 INDEX 对应 section 的状态（🟢/🟡/⚪）。
