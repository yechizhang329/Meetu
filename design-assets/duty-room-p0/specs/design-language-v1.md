# 心情值班室 P0 — 设计语言 v1（可执行版）

> 来源链：design-language-candidates v0.1 → v0.2（Fiona PM Review）→ v3.4 试金石 → 本文件
> 验收锚：会议室 thread `#会议室:fc7e0e92` 中 Fiona msg `c895be63`（v3.4 试金石通过）
> 状态：可执行 / 后续所有视觉、UI、文案、运营物料按本文件验收
> 维护：Phoebe2（视觉），Fiona 收口

---

## 1. 总则一句话

**心情值班室是一套「状态便签 × 情绪小角色」**：用清爽便签级的页面承接，让一只可记忆的小角色在今天替你说一句心里话。

三件事各司其职：
- **A 状态便签** = 产品表面 / UI 底色：清爽便签 / 大留白 / 低压感 / 生活气
- **C 情绪小角色** = 记忆点 / 传播钩子：可记忆动物 + 状态动作 + 替我说话
- **B 值班概念** = 产品结构 / 心理借口：仅借"今天派谁出来"叙事，不借公告通知视觉

## 2. 6 条统一原则（吸收 Fiona 修订）

1. **清爽优先**：大留白、少颜色、少物件；一屏最多一个视觉梗
2. **状态优先**：画面表达"我今天这样"，不是"这是一个角色设定"
3. **动作优先**：幽默来自动作和道具，不来自复杂背景
4. **低压优先**：不卖惨、不诊断、不夸张发疯，是轻轻自嘲
5. **截图优先**：任何页面/卡片都要像用户愿意发出去的状态物
6. **统一优先**：H5、分享卡、XHS 图、公众号图都用同一套纸底 / 黑线 / 值班黄 / 短句层级

## 3. 5 条红线（不可踩）

1. **禁"被审视/被诊断/被分类"**：文案禁"你是/你属于/你被判定"；视觉禁证书/报告/测试结果
2. **禁"在社交"明示**：产品是自我状态表达物，朋友互动是结果不是 UI 明示
3. **禁萌系卖力可爱 / 禁 mascot / 禁 chibi / 禁男凝萌 / 禁抖音油腻可爱**
4. **禁渐变 / 玻璃拟态 / 大投影 / SaaS 默认表单感**
5. **禁完整办公室插画 / 禁多物件堆料 / 禁角色图鉴感**

## 4. 色板（v1 锁定）

| 用途 | HEX | 覆盖率 |
|---|---|---|
| 主底（暖纸米） | `#F2EAD8` | 60-70% |
| 备用主底（奶油米） | `#FAF4E6` | 二选一 |
| 墨线黑 | `#1C1A17` | 全部线 + 主文字 |
| 墨灰（次文字） | `#3A372F` | 次级文字 |
| 灰绿辅 | `#7A8B7B` | 禁用 / 次说明 |
| **值班黄（accent）** | `#F2C744` | UI 1-3% / 分享图 5-8%（上限非目标） |
| 橙红警示 | `#D7563B` | 极少用（印章 / 警示） |
| 燕麦灰（描边） | `#D9D2C2` | < 5% |
| 极浅分隔 | `#E8E2D2` | 1px 微分隔 |

**4 角色岗位色（仅在角色范围内，不入页面级 UI）**：
- 嘴硬鹅：警卫蓝 `#3F5C7A` / 拒签红 `#D7563B`
- 低电量猫：低电橙 `#E68A3A` / 充电青 `#7AB5B5`
- DDL 仓鼠：倒计红 `#C43E3E` / 日历米 `#F2EAD8`
- 后台羊驼：屏幕灰 `#5C6A75` / 待机绿 `#7A9F6E`

## 5. 笔触 / 填色 / 字体 / 留白

- **黑线**：5-7px 等粗，1024×1024 画布尺度；不抖、不渐变、不做旧
- **填色**：每个区域 single flat fill；禁渐变 / 内阴影 / 高光；脚下软椭圆阴影是唯一允许
- **字体**：主用 PingFang SC / 苹方 / 思源黑；手写感（Reach 楷 / 字魂手写）**仅作小注解**，禁主标题 / 按钮 / 正文使用
- **字号**：UI 标题 28px / 副标题 20px / 正文 16px / 角色金句 22px / 小注解 14px / 极小水印 12px
- **留白**：8px 栅格；卡片内边距 24-32px；任何页面看起来"满了"就是错的

## 6. 5 落点 UI 规则

| 位置 | 长什么样 |
|---|---|
| **H5 首页** | 像轻状态卡，不像 landing；主句"今天派谁出来替你说话？"；1 主角色占 35-45%；黑实心圆角 12px CTA"今天派谁出来"，不带 emoji/icon；CTA 下至少 80px 留白 |
| **选项页** | 6 场景纵向列表，每条白底纸卡 + 简笔黑线小图标 + 口语化短句；选中态边框变实心黑 + 右上 6px 黑色小圆点反馈（**禁 checkmark / checkbox / 黄底高亮**）；不做 emoji / 大圆角 / SaaS radio |
| **结果卡** | 角色立绘占 40-50% PNG 透明叠纸底；角色第一人称金句 22px；3 候选 tab 切换仅淡入；4 动作（保存/换一句/复制配文/自评一句）；**禁进度条/雷达图/测试得分/分类标签**；"今日值班：___" 作角色名旁小注解 |
| **分享图 4:5** | 顶部 6px 黄条 + 极小品牌字；角色 40-50% + 1 梗道具；中部留白；朋友鉴定区 180px 前端层；底栏极小水印（先不烧域名）；**禁完整办公室、禁大色块卡片** |
| **文案语气** | 轻自嘲（"我嘴硬""我没电""算了""别说我"）；不走治愈/公告/分类/解释；禁"你是/你属于/你被判定"，改"今天像/今天派/这句替我说"；句末少叹号；多 `…` `。`；分享卡永不烧朋友锐评 |

## 7. Image2 出图：style header / negative 锁定

style header / negative 完整文本以 [`prompt-review-v3.4.md`](./prompt-review-v3.4.md) 为产线基线；后续单角色生产以 [`prompt-v3.5-production-notes.md`](./prompt-v3.5-production-notes.md) 中的 4 条角色级轻修规则为补丁。

**核心硬约束（直接复制可用）**：

```
Single-frame illustration of a small on-duty mood animal in a clean campus
mood-slip visual language. The animal is a "state stand-in", not an office
IP, not a brand mascot.

HARD COMPOSITION:
- Vertical 4:5 portrait, single-frame, no drawn frame border.
- Candid 3/4 angle as if someone caught the coworker mid-action.
- Character occupies 40-50% of the panel (target ~45%).
- Maximum TWO gag props in the panel.
- Character must do a STATE ACTION, NOT a cute pose.

STYLE:
- Clean confident black ink line, 5-7px uniform stroke.
- Warm beige paper background (#F2EAD8) with subtle paper grain.
- ONE flat color per region. NO shading, NO gradient, NO highlight.

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS in the image.
```

```
Negative: NO sticker pack, NO mascot, NO chibi, NO kawaii. NO heart eyes,
NO sparkles, NO blush dots. NO men's-gaze cute. NO TikTok oily cute. NO
polished illustration, NO character sheet, NO turnaround. NO Pixar 3D, NO
anime style, NO children-book polish. NO smooth gradient, NO airbrush, NO
glow. NO AI symmetry. NO public-notice / school-bulletin format. NO
complete office scene, NO cluttered desk. NO test-result aesthetic, NO
personality-quiz card, NO certificate, NO diagnosis card, NO score chart,
NO badge/medal. NO UI screen text, NO exclamation mark inside monitors. NO
"REJECTED" or letter shapes. NO Chinese characters, NO English words, NO
text-like marks anywhere.
```

## 8. 视觉资产生产工作流（已锁）

1. master sheet 锁角色身份与色（v1 已完成 4 套，作为参考）
2. share 卡 / 工位特写 / 情绪变体 → 用 master sheet 作为 reference image + v3.4 style header / negative
3. AI 不出中文字 / 英文字 / 数字（一切文字由前端排版叠加）
4. 文字位 spec 固定 `{x:80, y:1130, w:920, h:130}`（4:5 1080×1350 画布）
5. 资产命名严格按 PRD §12.6
6. 所有出图记录落 `specs/generation-log.md`

## 9. 当前已沉淀资产（按用途分级）

### A. 试金石参考图（teststone-v3.4，**风格上限参考**）
| 角色 | 文件 | PM 评级 |
|---|---|---|
| 嘴硬鹅 | `teststone-v3.4/teststone-share-stubborn-goose-busted-not-admit-v3.4.png` | ✅ 可用，控制不要职业化加重 |
| 低电量猫 | `teststone-v3.4/teststone-share-low-battery-cat-no-yingye-v3.4.png` | ⭐ 风格上限正样本 |
| DDL 仓鼠 | `teststone-v3.4/teststone-share-ddl-hamster-final-ddl-v3.4.png` | ⚠️ 需 v3.5 微调（删第二道具） |
| 后台羊驼 | `teststone-v3.4/teststone-share-backstage-alpaca-after-socializing-v3.4.png` | ⚠️ 需 v3.5 微调（减桌面/面板体量、加身体木僵感） |

### B. 角色 master sheet（master-sheets/，**仅作角色一致性参考**）
4 角色 v1 master sheet 不进生产，作为 reference image。

### C. 道具图标 grid（props/，**调性命中可作产线**）
`props-grid-v1.png` 8 道具网格，调性命中。

### D. 设计 tokens（design-tokens/，**Dave 可直接接入**）
- `tokens-v1.css` 全套 CSS variables + 4 基础组件
- `tokens-v1.json` 同源 JSON

### E. 规范文档（specs/）
- `visual-system-v1.md`（4 角色定义表 + 13 色板 + master sheet prompts）
- `share-card-spec-v1.md`（4:5 4 区图层 + 文字位 spec + 命名 + Dave 集成包）
- `prompt-review-v3.4.md`（v3.4 prompt 五件套全文）
- `prompt-v3.5-production-notes.md`（4 条角色级轻修补丁）
- 本文件 `design-language-v1.md`（设计语言可执行版）

## 10. 三方协作锚点

- **Fiona**：本文件作为后续 PM 验收锚；任何视觉 / UI / 文案 / 运营物料按 §1-§7 验
- **Dave**：tokens-v1.css 可直接接入开 H5 v0.9 视觉替换；UI 必须按 §6 5 落点规则
- **Lucy**：文案池 v1.2（C 角色第一人称）已 100% 适配本文件；Dave v0.9 截图出来后按新 UI 复查标题 / 选项 / 结果文案换行

## 11. 待确定（不阻塞 v1 落地）

1. 域名（a.meetu.asia 是否复用 / duty.meetu.asia 新开）— Dave 拍
2. 主底 HEX 二选一最终拍板（暖纸米 / 奶油米）— 视觉师建议先按暖纸米
3. 是否引入纸纹噪点 PNG 作为 H5 全局背景叠加 — 视觉师建议引入 5% opacity
