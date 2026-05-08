# 心情值班室 设计语言候选收敛稿 v0.2

> 基于 v0.1 + Fiona PM Review (msg `fc104594`) 的收敛稿。
> 主方案：**「状态便签 × 情绪小角色」**（A 底 / C 钩 / B 结构）
> 备选方向：纯 C 情绪角色
> 文档目的：为后续 v1 可执行版（融合 Lucy 运营 review 后）提供视觉决策基线。

---

## 1. 主方案定义：状态便签 × 情绪小角色

### 1.1 一句话
> 心情值班室是一套「状态便签 × 情绪小角色」：用清爽便签级的页面承接，让一只可记忆的小角色在今天替你说一句心里话。

### 1.2 三件事各司其职

| 来源 | 担任 | 做什么 |
|---|---|---|
| **A 状态便签** | 产品表面 / UI 底色 | 整套 H5 的页面、留白、低压感、生活气，让产品不像测试工具或品牌物料 |
| **C 情绪小角色** | 记忆点 / 传播钩子 | 让用户在结果页和分享图里看见一只"今天替我说话"的小角色，不是"喜欢一个 IP" |
| **B 值班概念** | 产品结构 / 心理借口 | 仅借用"今天谁值班"的叙事框架（用户的低压借口），不借用通知公告的视觉形式 |

### 1.3 三件事的明确边界（避免再走偏）

#### A 不变成"手帐风"
- ❌ 手写字体不作为主字体（仅少量点缀，例如标题旁的小注解）
- ❌ 薄荷/莓粉不能堆成韩系 ins 风（仅 1-3% accent 覆盖率，不刷大块）
- ❌ 角色不能小到 < 30%；分享图角色占比 40-50%
- ✅ 主字体仍是 PingFang SC / 苹方 / 思源黑（清爽不端着）
- ✅ 大留白、低压、纸感是 A 的灵魂；不能因为追求"传播感"而堆装饰

#### C 不变成"贴纸 IP"
- ❌ 不叫"贴纸系"，改叫**「情绪小角色」**
- ❌ 角色姿态禁 chibi / mascot / 卖萌 pose / 招手 / 比心
- ❌ 角色第一人称语言禁卖萌（"我才不是不开心呢～"），保留嘴硬/低压（"我没电""我嘴硬"）
- ✅ 分享图里角色可以大，但动作必须是**状态动作**（趴桌、扶头、回避眼神、缩在椅子里），不是可爱 pose
- ✅ 角色每只是独立的"今天替我出现的状态代理"，不是品牌吉祥物

#### B 仅作为产品结构 / 心理借口
- ❌ 不做公告栏 / 通知单 / 政府公文 / 班级值日表的视觉外壳
- ❌ 不在 UI 里出现"通知" / "公告" / "签到查看" 这种官方叙事
- ✅ 可在产品结构里使用"今天派谁出来"、"换个值班员"、"今日值班"等概念词
- ✅ 这些词可以出现在按钮文案 / 标题 / 结果页措辞里，但不带"通知体格式"

---

## 2. 视觉规则总表（v0.2）

### 2.1 色板

| 用途 | HEX | 覆盖率 | 说明 |
|---|---|---|---|
| **主底（暖纸米）** | `#F2EAD8` | 60-70% | 全局背景、卡片底；纸感 + 5% 极浅纸纹 noise |
| **主底（备选 奶油米）** | `#FAF4E6` | 60-70% | 与暖纸米二选一；视觉师建议先按暖纸米锁，便于跟已有 master sheet 对接 |
| **墨线黑** | `#1C1A17` | 全部线 + 主文字 | 黑线统一；不用纯黑 `#000` |
| **值班黄（accent）** | `#F2C744` | UI 中 1-3% / 分享图中 5-8% | UI 仅 1 个主 CTA + 1 个状态点；分享图允许做 1 条 6px 顶部细黄条 + 角色梗道具用色 |
| **燕麦灰（辅）** | `#D9D2C2` | < 5% | 卡片描边、次按钮边、分隔线 |
| **角色岗位色** | 见 §2.2 | 仅在角色范围内 | 4 角色各自有 1 主辅色，不进入页面级 UI |

**禁色清单**：高饱和度任何色 / 渐变 / 莓粉/薄荷大色块 / 男凝萌的红腮红 / 抖音油腻可爱的角膜泪滴

### 2.2 角色岗位色（沿用 v1 视觉系统提案，已锁不改）

| 角色 | 主色 | 辅色 |
|---|---|---|
| 嘴硬鹅 | 警卫蓝 `#3F5C7A` | 拒签红 `#D7563B` |
| 低电量猫 | 低电橙 `#E68A3A` | 充电青 `#7AB5B5` |
| DDL 仓鼠 | 倒计红 `#C43E3E` | 日历米 `#F2EAD8` |
| 后台羊驼 | 屏幕灰 `#5C6A75` | 待机绿 `#7A9F6E` |

### 2.3 线条 / 笔触

- **黑线统一 5-7px**（在 1024×1024 画布尺度），等粗、不抖、不刻意做旧
- **不允许**：渐变线、虚线主干、双层描边、线条做旧效果
- **唯一例外**：分享图朋友鉴定区可加 1 条 2px 黄虚线作为"接话提示线"

### 2.4 填色 / 阴影

- 每个区域**单一 flat fill**；禁渐变、禁内阴影、禁高光
- 唯一允许的阴影：脚下一处小软椭圆阴影
- 卡片：圆角 12px，无投影或仅 1px `#D9D2C2` 描边

### 2.5 字体 / 字号

| 用途 | 字体 | 字号（4:5 1080×1350 画布或 mobile UI 等比） |
|---|---|---|
| 主标题 | PingFang SC Semibold | 28-32px UI / 56px 分享图 |
| 副标题 | PingFang SC Regular | 16-18px UI / 36px 分享图 |
| 正文 | PingFang SC Regular | 16-17px UI / 32px 分享图 |
| 角色金句 | PingFang SC Medium | 20-24px UI / 44px 分享图 |
| 朋友鉴定区 | PingFang SC Medium 600 | 44px 分享图 |
| 手写感点缀 | Reach 楷 / 字魂手写 | 仅作为标题旁小注解，14-16px UI |

**禁字体**：所有衬线 / 所有海报粗黑变体 / 卡通圆体（如汉仪小麦体）

### 2.6 留白

- 卡片内边距：24-32px
- 分享图朋友鉴定区高 180px（前端文字层）
- 全局原则：**任何页面如果第一眼看起来"满了"，就是错的**

---

## 3. 页面级 UI 规则（v0.2，吸收 PM 五落点修订）

### 3.1 H5 首页
- 像一张轻状态卡，**不像 landing page**
- 顶部：极小品牌字 `Meetu · 心情值班室`（PingFang SC Regular 14px，灰色 `#7A8B7B`）
- 主句：「今天派谁出来替你说话？」（PingFang SC Semibold 28px，墨线黑）
- 副句：1 行轻文字（"轻轻按一下，看看今天是谁在岗"，PingFang SC Regular 16px）
- 主视觉：1 只主角色（轮播或随机出场），占画面 35-45%
- 主 CTA：黑实心圆角 12px 按钮，文字"今天派谁出来"，**不带 emoji 不带 icon**
- 大留白：CTA 下至少 80px 空白
- **不做**：hero banner / 视频背景 / 渐变 CTA / 装饰线/标语条

### 3.2 选项页
- 像选择"今天状态的小纸条"，**不像问卷按钮**
- 6 场景做成纵向列表（不做网格）：每条是 1 个白底纸卡（圆角 12px / 边距 16px / 描边 1px `#D9D2C2`）
- 每条内容：左边 1 个简笔小图标（24px 黑线）+ 右边 1 行口语化文字 `今天不太想动` `被人说中又不想认` `刚下完局还在缓` 等
- 选中态：边框变实心黑 `#1C1A17` + 右上角出现一个小钩
- **不做**：emoji / 大圆角 / 高饱和按钮 / SaaS 表单 radio 圆点

### 3.3 结果卡
- 像"今天值班的小角色 + 一句替我说的话"，**不像测试报告**
- 中部：角色立绘（占画面 40-50%，PNG 透明底叠在纸感主底上）
- 角色下方：一句金句（角色第一人称："我没电""我嘴硬"），PingFang SC Medium 24px
- 金句下：3 张候选卡的小切换 tab（圆点 / 横滑都行；候选切换不弹动画，仅淡入）
- 候选卡下方：4 个动作按钮——保存 / 换一句 / 复制配文 / 自评一句
- **不做**：进度条 / 雷达图 / 测试得分 / "你的人格类型是 ___" / 任何分类标签
- **底层结构使用 B 的概念**："今日值班：___" 这一行可以放在角色名旁边作为小注解

### 3.4 分享图（4:5 / 1080×1350）
- 整体：A 的留白 + C 的角色钩子
- 顶部：6px 高细黄条横贯（值班黄，符合 Lucy 提议的"信息流停留信号"）+ 一行小品牌字 `Meetu · 心情值班室`（PingFang SC Regular 24px）
- 主视觉区：角色立绘占 40-50%（不是 < 30%）+ 1 个梗道具（拒签章 / 电池牌掉了 / 日历红块叠便签 / 三屏红圆灯）
- 中部空隙：留白
- 朋友鉴定区：180px 前端文字层（沿用 share-card-spec-v1 §4 的 `{x:80, y:1130, w:920, h:130}`）
- 底栏：极小水印 `Meetu · 心情值班室`（无域名，等 Dave 确认 a.meetu.asia 后再补）
- **不做**：完整办公室场景 / 大色块卡片 / 多物件堆料 / 角色全身 turnaround

### 3.5 文案语气
- 主轴：**轻自嘲**（"我嘴硬""我没电""算了""别说我"）
- 不走治愈、不走公告、不走分类、不走解释
- 不用"你是 / 你属于 / 你被判定"，改用"今天像 / 今天派 / 这句替我说"
- 句末少叹号；多用 `…` `。` 或留白
- 系统文案不用 emoji 替代情绪
- 分享卡上**永不烧朋友锐评**

---

## 4. Image2 / gpt-image-2 prompt 方向（v0.2，给后续 v3 prompt 提供 style header 锚点）

> 这一节只列出**方向锚定句**，不出 v3 prompt 全文。等设计语言定稿后再写 prompt 全文送审。

### 4.1 Style header 必加锚点

```
Single-frame illustration of an animal coworker in a clean campus mood-slip
visual language. Visual reference direction: light, breezy, paper-note feel
with one memorable little animal acting out a state. NOT polished
illustration. NOT character sheet. NOT sticker mascot. NOT cute mascot pose.
NOT chibi. NOT kawaii. NOT poster art. NOT children-book art.

Character occupies 40-50% of the frame (not <30%, not >70%). The character
is doing a state action (slumped, hiding, frozen-in-denial, hunched-over),
NOT a cute pose. Maximum 2 gag props. No full office, no cluttered scene.
ONE flat color per region, NO shading, NO gradient, NO drop shadow except
a tiny pool under feet. Warm beige paper background (#F2EAD8) with subtle
paper grain only.

ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image.
```

### 4.2 Negative prompt 必加项

```
- NO sticker pack style, NO mascot, NO chibi, NO kawaii
- NO polished illustration, NO character sheet, NO turnaround
- NO cute mascot pose, NO heart eyes, NO sparkles
- NO men's gaze cute style (no blush dots, no anime eye highlights)
- NO TikTok-style oily cute (no eye-corner tear drops)
- NO AI-perfect symmetry, NO airbrush, NO 3D, NO Pixar style
- NO public-notice / public-announcement / school-bulletin visual format
- NO complete office scene, NO cluttered desk, NO multiple props beyond the named gag
```

### 4.3 待 PM 决策的 1 个 prompt 关键变量

> 在 v0.1 推荐里我提到"角色 30-40%"，PM 修订为"40-50%"。这一改会显著提升角色记忆点但也会减少留白，对调性影响较大。
> 后续 v3 prompt 跑试金石时，建议先按 **45%** 锁，看视觉是否仍能保持 A 的"轻"。如果觉得太满，再退回 35-40%。

---

## 5. 备选方向：纯 C 情绪小角色

> 仅在团队判断"角色 IP 化作为长期资产"优先于"产品轻感"时启用。
> 不展开细节；如需启用，再产一版 v0.2-alt。

变化点（相对主方案）：
- 角色占画面 60-70%
- 每只角色单独配色背景（柔色，5-10% 莓粉/燕麦灰/薄荷）
- UI 圆角 16px，按钮带角色头像 icon
- 候选切换有微弹效果

风险：男接受度从 5 退到 6（更高排斥），需 Phoebe 严格把控不卖萌。

---

## 6. 给 PM/Lucy/Jonathan 的明确决策项

请回答以下 5 个 yes/no（或修正）：

1. ✅/❌ 接受主方案 = "状态便签 × 情绪小角色"（A 底 / C 钩 / B 结构）
2. ✅/❌ 接受色板：暖纸米 `#F2EAD8` 主 + 墨线黑 + 值班黄 (UI 1-3% / 分享图 5-8%) + 燕麦灰辅
3. ✅/❌ 接受分享图角色占比 40-50%（不是 30%）
4. ✅/❌ 接受 Lucy 提议：分享图值班黄覆盖率 5-8%（H5 内仍 1-3%）
5. ✅/❌ 接受 v3 prompt 试金石按 4 calls 跑（拍板后才开 call）

5 项都 yes 后，**v0.3** 直接产出：
- design tokens v1（CSS variables + JSON 双格式）给 Dave
- v3 prompt 五件套全文（不出图，先送审）
- 4 calls 试金石计划

任何一项有修正，先在 thread 里改完锁定，再进 v0.3。
