# TA Color Preference Study v0.1 (跨平台 TA 真实使用场景调研)

**作者**: Phoebe2
**时间**: 2026-05-11 05:25
**触发**: David 5:06:08 拒 XHS v0.2 路径 (XHS 大字报/模板偏差非 TA 审美), 保留漫画风方向, 让我跨平台研究 TA 色彩偏好 + Fiona 5:06:44 4 生态调研要求 + Fiona DM 5:07:45 路径微调 (TA 实际使用 = 主证据, 设计师平台 = refinement)
**红线**: 0 image2 / 0 prompt 终稿前不烧图 / 主证据来自 TA 实际使用 (头像/表情包/梗图/状态图), 设计师平台仅作 refinement / 必须可追溯

---

## §0 数据来源 + 限制 (透明披露, per Fiona 1:54 + 2:23 + 5:07 累计要求)

### 主证据 (TA 真实使用场景, 权重高)

**Ecosystem 1 — 表情包 / 贴纸 (TA 真实使用)**
- WeChat 表情商店 top billboard rank ([source](https://sticker.weixin.qq.com/cgi-bin/mmemoticon-bin/emoticonview?oper=billboard&t=rank)) — 8 顶流中 6 个是 warm pastel + cream 底动物 IP (仓鼠小猫 2022 / 小刘鸭 / 饭粒猫与包子鸭 / 暹罗猫小豆泥 / 生煎包是只小鼠鼠 等)
- 顶流 IP 案例: Loopy 粉海狸 ([数英 IP 分析](https://www.digitaling.com/articles/960434.html), [知乎 表情包合集](https://zhuanlan.zhihu.com/p/655458308)) / Chiikawa 三人组 ([4A 广告网](https://www.4anet.com/p/11v8177048949fd3)) / Capybara 卡皮巴拉 ([新京报 豚门](https://m.bjnews.com.cn/detail/1706166475169828.html))

**Ecosystem 2 — 头像 / 壁纸生态 (TA 真实使用)**
- momo 粉色小恐龙现象 ([澎湃新闻](https://www.thepaper.cn/newsDetail_forward_23120545)) — 大量年轻女性在豆瓣/XHS 用作伪装头像; 验证 "dusty pink" cohort 接受度极强

**Ecosystem 3 — 短视频截图 / 梗图 (TA 真实使用)**
- 发疯文学视觉机制 ([知乎 精神状态表情包](https://zhuanlan.zhihu.com/p/622364243), [知乎 发疯文学搞笑文案](https://zhuanlan.zhihu.com/p/592518710)) — 关键发现: "**用软萌、无攻击性的卡通表情配合具有杀伤力的文案**", 视觉**不升饱和**, 张力靠文字
- Capybara 大学生嘴替 ([36 氪 豚门永存](https://www.36kr.com/p/2557103022300038)) — "松弛感 / 反内卷" 视觉锚, 土黄/tan + 小腮红 + 低能量 posture

**Ecosystem 4 — 漫画 / 条漫生态 (TA 真实使用一部分, 但作品集页 gating)**
- 治愈系四格漫画 ([设计达人 22 张](https://www.shejidaren.com/22-healing-four-frame-comics.html)) — 主流 warm cream 底 + 1-2 muted accent
- LOFTER 插画 tag ([画笔小香 tag](https://paintingpick.lofter.com/tag/%E6%8F%92%E7%94%BB)) — 治愈系 + 暖色 + 莫兰迪-adjacent
- ⚠️ 限制: LOFTER/B 站 portfolio listing 多需登录或 JS 渲染, 公开样本可见但 pixel-level hex 提取困难

### 辅助证据 (设计师平台, refinement 用, 权重低; per Fiona DM 5:07:45)

**站酷 (中国设计师作品)** — ZCOOL discover 插画类 ([discover 页](https://www.zcool.com.cn/discover?cate=1&subCate=2), [优优 12 款扁平漫画](https://uiiiuiii.com/inspiration/1616585738.html)) — 中文设计师"现代生活漫画"主流 = 扁平 + 暖色 + yellow/orange/blue-green palette
- **注**: 站酷是设计师审美 + 可执行质感, **不等于 TA 真实使用偏好**; 仅作 refinement, 不作 TA 偏好主结论 (per Fiona DM 5:07:45 边界)

**Behance / Dribbble** — 本次未深入调研; 如使用必须标"国际设计趋势, 不等同中文 TA 使用偏好"

### 验证强度 (transparent)

| 结论 | 证据强度 | 备注 |
| --- | --- | --- |
| Loopy = dusty pink, rosy cheeks, minimal outline | **strong** | 多 secondary 描述, 但 Zhihu 图 403, pixel hex 是 register 推算 |
| Chiikawa = pink/yellow/blue on cream/white | **strong** | 4A 广告网 fetch 直接确认 |
| Capybara = 土黄/tan, soft line, cheek dots | **strong** | 新京报 + 站酷 work page fetch 确认 |
| Momo = dusty pink 是 TA 默认头像 | **strong** | 澎湃直接 fetch 确认 |
| 发疯文学视觉**不升饱和**, 文字主导 | **strong** | 知乎源文章原文 explicit |
| 现代生活漫画 ZCOOL/LOFTER 色彩 | **medium** | directional 一致信号, pixel hex 不可提取 |
| 推荐 hex 值 (table 中) | **interpretation** | 由 verified IP register 推算的起步 palette, **非 brand spec, 必须 prompt-test 验证** |

### 没有获得的数据

- ❌ XHS 直接 sample (David 5:06 拒, 不再用)
- ❌ Lofter 创作者 portfolio 完整页 (gated)
- ❌ ZCOOL/B 站作品集 pixel-level hex 提取 (JS gating)
- ❌ TA 实际"会拿来当头像/表情包/转发"的量化数据 (无公开数据集)

---

## §1 一屏色彩基线 (TL;DR)

**这是起步 palette, 由真实使用 IP register 推算; 在 prompt-test 阶段 A/B vs Loopy/Capybara/Chiikawa 参考再 fine-tune.**

| Token | Hex | 说明 |
| --- | --- | --- |
| **背景主底** | `#F4EDE2` warm off-white / cream | NOT 编辑器 beige, NOT pure white, NOT pink. WeChat 表情包 + Chiikawa + 治愈四格主流基底 |
| **背景 accent panel** (per-character mood tile) | `#FFE4E1` dusty pink / `#E8F0E5` sage / `#FFF1C9` butter — 每角色选一种, 不重复 | 给 5 角色 mood 差异化, 不让画风干瘪 |
| **角色主体色 — 暖色谱** | A 章鱼 `#E89BAE` (dusty rose-pink, Loopy register, 不是 candy) / C 树懒 `#C8A887` (warm tan, capybara register) / E 刺猬 `#B88B6A` (toasted caramel) | 暖谱 3 角色 |
| **角色主体色 — 冷/中谱** | B 低能量猫 `#D9D4CC` (ash grey-cream) / D 抽象猴 `#A89A86` (muddy khaki-brown) | 防止 5 角色全粉糖系, 引入冷/中谱对冲 |
| **Accent / hit color** | `#F5C84B` butter yellow 或 `#7FA88E` sage green (一场景一种, 不双色撞) | 视觉张力点, 不饱和爆 |
| **Text / outline** | `#3A332C` warm near-black, **NEVER pure `#000`**, 1.5-2px 不规则线条 | 手绘漫画线; Capybara + Loopy 都避免 pure black + uniform stroke, 是 "不幼态" 关键杠杆 |
| **Forbidden** | pure white `#FFFFFF` 底 / pure black `#000` 线 / candy pink `#FF6B9D` / dopamine quartet (`#FF6B6B`+`#4ECDC4`+`#FFE66D`) / 摩卡棕 `#A47864` 主导 / monochrome editorial beige-only | 见 §3 各 forbidden 理由 |

**关键设计判断 (写给 PM/David 一眼读)**:
1. **5 角色 mixed palette** — 暖谱 3 + 冷/中谱 2 = "现代生活漫画 cast", 不是全粉糖系不刻板女性化
2. **One accent at a time** — 张力来自文字情境不是色彩浓度 (发疯文学教训)
3. **Warm near-black outline + 不规则线条** — 不是 chibi 的 uniform thick black, 是"不幼态"关键杠杆
4. **Rosy cheek dot 反复出现于赢家 IP** (Loopy/Chiikawa/Capybara/momo) — 廉价 + 高识别度, 5 角色都用作 micro-detail

---

## §1.5 Color Preference Matrix — 4 维 (per David 5:20:30 + Fiona 5:21:03)

PM 初口径 (Fiona 5:21:02): **低压力底色 + 中高可读局部对比 + 主体中低饱和 + 1 个小面积 accent; 不全屏多巴胺, 不全灰米性冷淡**。本节用样本证据支撑或修正。

**注 (per Fiona DM 5:21:40 #2)**: 本节 HSL / ΔE / 饱和度百分比是 **estimated / approximate** 推算, 不是 pixel-measured 精确数据 — 由 hex 值用标准颜色空间转换工具估算, 用作设计参考区间, 不是 brand spec 硬数据。

**注 (per Fiona DM 5:21:40 #1)**: 本节引用的 cultural IP (Loopy / Chiikawa / Capybara / momo) 仅作 **research evidence**, **不进入 prompt v3** — prompt v3 § 6 已自检无 IP 名称引用, 只用 register 描述 (dusty rose-pink / warm tan / etc.)。

### 1. 对比度

| 维度 | TA 偏好 | 证据 / 反例 |
| --- | --- | --- |
| 全局对比 (画面整体) | **中等-偏低**, "低压力" | Loopy/Chiikawa 表情包都是 cream 底 + warm pastel body, 不是黑白强对比. momo 头像也是 cream + dusty pink mid-tone |
| 局部对比 (角色轮廓 / 描边) | **高对比** (warm near-black `#3A332C` 1.5-2px 不规则 outline on warm pastel body, ΔE ~70+) | Capybara/Loopy IP 共通: outline 必须高对比清晰; uniform thin gray line = 弱; pure black uniform = chibi 红线 |
| 角色表情对比 (眼/嘴/cheek dot) | **中-高对比** (小区域强信号) | rosy cheek dot 是高对比小红点 (Loopy/Chiikawa 共有); 眼是 dot pupil 强黑点; 嘴是 outline 黑线 — 全部小面积高对比 |
| 文字 / 小道具对比 | **高对比** (能一眼读) | 道具如 sage mug / butter book 都是中-高对比小区域 hit |
| 不偏好 | **全画面黑白硬对比** / **素描式明暗** | David 1:51 拒 monochrome warm beige + "性冷淡素描垃圾" 直接对应 |

**5 角色构图执行**: 背景柔和 (warm cream `#F4EDE2`) + 角色主体中低饱和 + outline + 1 accent 小面积高对比 = "低压力 + 局部冲突可读"

### 2. 饱和度

| 维度 | TA 偏好 | HSL S 区间 | 证据 / 反例 |
| --- | --- | --- | --- |
| 角色主体 | **低-中饱和 (desaturated pastel)** | S 30-55% | dusty rose `#E89BAE` ≈ S 60% pastel; warm tan `#C8A887` ≈ S 32%; muddy khaki `#A89A86` ≈ S 12% (cool side) — 全是 desat pastel, 与 Loopy 粉海狸 / Capybara tan / Chiikawa pastel 一致 register |
| 背景主底 | **极低饱和** (近中性 warm) | S < 20% | warm cream `#F4EDE2` ≈ S 35% 浅 cream, 接近中性; WeChat 表情包顶流 6/8 都是 warm cream/white 底 |
| Accent (1 小面积) | **中-高饱和点缀** | S 60-85% | butter yellow `#F5C84B` ≈ S 89%; sage `#7FA88E` ≈ S 18% (低饱和补色) — 一场景 1 种, 不双撞 |
| 不偏好 | candy pink `#FF6B9D` (S 100%) / 多巴胺撞色全开 | S > 80% 大面积 | 发疯文学视觉机制 "**软萌无攻击性卡通表情配合杀伤力文案**" — 视觉**不升饱和**, 张力靠文字 (知乎源直接引用) |
| 也不偏好 | 全灰米 monochrome | S < 10% 全画面 | David 1:51 死刑 "性冷淡素描垃圾" |

**关键原则**: 单图饱和度**分级**(背景<10%, 主体30-55%, accent 60-89%), 不是统一一档

### 3. 色彩数量

| 角色构图复杂度 | 推荐 effective color 数 | 拆解 |
| --- | --- | --- |
| **单角色简单 (B 猫睡)** | **4 个有效色** | bg `#F4EDE2` + body `#D9D4CC` + accent panel `#E8F0E5` + outline `#3A332C` |
| **C 树懒 + 咖啡 + 课本** | **5 个有效色** | bg + body tan + belly cream + accent (sage mug 或 butter book) + outline |
| **D 猴 + 键盘 + 香蕉 + 反穿装扮 + mismatched 袜** | **6 个有效色** (D 允许多 1) | bg + body khaki + cream face + vest blue + sock 1 mismatch + sock 2 mismatch + outline; 但 vest + 2 sock 都是低饱和 + 香蕉作 1 主 accent yellow `#F5C84B` |
| **不推荐** | **超过 6 色** | 易显杂乱低龄 / sticker pack 感; D 允许"乱" 但要"乱但不脏" (per Fiona 5:21) |
| **不推荐** | **少于 3 色** | 易显性冷淡 monochrome |

**5 角色统一规则**: 共享 base 3 色 (bg `#F4EDE2` / outline `#3A332C` / accent panel 1 种) + 角色独有 1-3 色

**D 允许多色错位的理由**: PRD §5 D "把状态变成怪东西"; D 的反穿装扮 + mismatched 袜本身就是色彩 mismatch 视觉化, 是产品意图。但仍守"低饱和主导 + 1 个 accent" 防止变成 dopamine 撞色。

### 4. 色彩搭配

| 搭配方式 | 适用层级 | 推荐 / 不推荐 |
| --- | --- | --- |
| **相近色 / 邻近色 (analogous)** | 角色主体 + 背景 + cream belly | ✅ **主导搭配** — A 章鱼粉系 / C 树懒棕系 / E 刺猬焦糖系都是邻近色和谐; momo 也是 dusty pink 同色系 |
| **互补色作 accent hit** | 1 小面积点缀 | ✅ **允许 1 处** — sage `#7FA88E` 对 dusty pink, butter `#F5C84B` 对 muddy khaki D 猴; 但**不大面积**, accent 占 < 10% 画面 |
| **撞色 / dopamine quartet** | 任何场景 | ❌ **拒** — 发疯文学反向证据 (视觉保软, 文字升张力) |
| **D 的"系统错位" 小面积反差** | D 反穿 vest + mismatched 袜 + 香蕉 accent | ✅ **D 限定允许小面积反差** — D 是产品意图允许的特例, 但仍守"低饱和主导, 反差点缀" (例: vest 是 muted blue `#9BAEBA` 不是电光蓝 `#3D8BFF`; 袜子是 muted color mismatch 不是 dopamine 撞) |
| **monochrome 同色系无 accent** | 任何场景 | ❌ **拒** — 性冷淡死路 |

**关键决策 (per Fiona 5:21:03 提问)**: D 是否允许更强对比? **小面积**允许 (反穿 vest 与 vest 内 cream face 颜色差, 2 只袜子颜色 mismatch) — 这是 D 形态的产品意图; **大面积**仍守同色系主导 — 防止整个 D 变成 dopamine 撞色背景。

### §1.5.5 5 角色 4 维 cross-check 表

| 角色 | 全局对比 | 主体饱和度 | 色彩数 | 搭配方式 |
| --- | --- | --- | --- | --- |
| A 章鱼 | 中 | dusty rose ≈ S 60% | 5 (bg + body 粉 + 灰紫腹 + dusty pink panel + outline) | 同色系 (粉/紫邻近) + 1 sage accent (small hit) |
| B 猫 | 低 | grey-cream ≈ S 8% | 4 (bg + body + sage panel + outline) | 极相近色 (灰白 + sage panel) + 1 butter accent (small hit) |
| C 树懒 | 中 | tan ≈ S 32% | 5 (bg + body + belly + sage mug + butter book + outline) | 邻近色 (tan/cream 暖系) + sage + butter 互补 accent 双 hit (但都小面积 < 10%) |
| D 猴 | 中-高局部 | khaki ≈ S 12% (body) | 6 (bg + body + face + vest + sock×2 + 香蕉 + outline) | 同色系主导 (khaki/cream) + D 限定小面积反差 (反穿 vest + mismatched 袜 + 香蕉 accent) |
| E 刺猬 | 中 | caramel ≈ S 38% | 4 (bg + body + 刺色 + outline) | 单色系 (caramel/dark brown 同温度) + 1 sage 或 butter accent (small hit) |

---


| 角色 | 形态 | 主体色 hex | accent panel | 调性参考 IP |
| --- | --- | --- | --- | --- |
| A 嘴硬漏风 章鱼 | 8 腿硬伸, 软腹漏色 | `#E89BAE` dusty rose-pink (软腹) + body 灰紫 `#9B8AA0` | `#FFE4E1` dusty pink panel | Loopy register (粉海狸不是 candy 粉) |
| B 低能量睡觉猫 | curl-up sleep | `#D9D4CC` ash grey-cream body + 浅米 `#EDE6DA` belly | `#E8F0E5` sage panel | 暹罗猫小豆泥 (灰白系猫表情包) |
| C 加载未启动 树懒 | sprawl 趴桌 + 咖啡 + 课本 | `#C8A887` warm tan body + 浅米 belly | `#FFF1C9` butter panel | Capybara (土黄 tan, 松弛感) |
| D 抽象发疯 猴 | 顶键盘 + 反穿背心 + mismatched 袜 + 香蕉 | `#A89A86` muddy khaki-brown body + cream face | `#FFE4E1` dusty pink panel (反差) | Chiikawa muddy mid-tone 路径 |
| E 轻刺反骨 刺猬 | 半蜷, 刺向外 | `#B88B6A` toasted caramel body + 深棕 `#7A5A3E` 刺 | `#E8F0E5` sage panel | Capybara warm earth register |

所有角色: 共享 `#F4EDE2` 背景主底 + `#3A332C` warm near-black outline + rosy cheek dot 小红点 micro-detail

---

## §3 Forbidden 详解 (每条都有真实证据反对)

| Forbidden | 拒绝理由 + 证据 |
| --- | --- |
| Pure white `#FFFFFF` 背景 | 读为 sticker-pack only / cute-only, 不像产品 IP. WeChat 表情包顶流 6/8 是 cream/warm pastel 底, 不是 pure white |
| Pure black `#000` 线条 | uniform black 线 = chibi/kawaii 信号. 不幼态 IP (Loopy/Capybara) 都用 warm dark-brown irregular 线 |
| Candy pink `#FF6B9D` | 滑向粉糖女性化 (PRD §11.3 红线). dusty pink `#E89BAE` 是 register 内的非粉糖版 |
| Dopamine quartet 撞色 (#FF6B6B+#4ECDC4+#FFE66D) | 发疯文学视觉**反向**: 视觉保软, 文字升张力. 撞色非 TA 主流 |
| 摩卡棕 `#A47864` 主导 | 仅 2025 trend 文章存在, **无创作者 work 验证** (我 v0.1 错误用作主体, 推翻) |
| Monochrome editorial beige-only | 性冷淡死路 (David 1:51 死刑, 多 verified IP 都不是 monochrome) |
| 全 5 角色都用 pink | momo 现象后 pink 单调化 — 现在全粉读为"默认隐身"不是"表达自我"; 5 角色 mixed palette 才避免 |

---

## §4 为什么这套色彩对女性 TA 友好但不粉甜女性化 (per Fiona 5:06:44 明确要求)

### §4.1 服务女性 TA 共鸣的核心机制

1. **真实使用 IP 验证**: Loopy/Chiikawa/Capybara/momo 都是女性 TA 18-22 实际**会拿来当头像 + 转表情包 + 表态**的形象 — 不是设计师审美, 是 TA 行为数据
2. **Warm cream `#F4EDE2`**: WeChat 表情包 + 治愈四格主流基底, TA 视觉舒适区
3. **Rosy cheek dot**: 廉价 + 高识别度的"温度" micro-detail; 不靠睫毛/腮红/心形, 是"温暖" 而不是"萌甜"
4. **Warm near-black `#3A332C` 不规则 outline**: 不冷硬 (避免性冷淡), 不糖甜 (避免 chibi); 中间地带 — 这是"不幼态但 TA 接受" 的关键杠杆 (Capybara + Loopy 都用)

### §4.2 避免粉甜女性化的核心机制

1. **5 角色 mixed palette**: 暖谱 3 (A 粉 / C 棕 / E 焦糖) + 冷中谱 2 (B 灰白 / D 泥棕) — 不让 cast 整体粉化
2. **No candy pink / heart / sparkle / blush**: 直接 forbid
3. **One accent at a time**: 不双色撞 — 视觉张力靠**文字情境**不是色彩浓度 (发疯文学教训)
4. **Mocha mid-tone 加入 cast** (D 猴 muddy khaki-brown): 防止整体过浅过暖, 给视觉重心

→ 这套是"年轻女性熟悉的真实使用色温 + 5 角色 mixed 中和 + Mocha 重心防糖"的复合策略, 不是"减糖" (减糖会回到性冷淡), 是"调比例"。

---

## §5 与 5 角色形态绑定 (David 之前已锁形态, 不动)

5 角色形态在之前会话锁定 (Fiona 0:25 + David 0:50 + 1:00):
- A 章鱼 / B 低能量睡觉猫 / C 树懒 + 咖啡 + 课本 / D 抽象猴 + 键盘 + 反穿装扮 / E 刺猬

本 v0.1 只重写**色彩基线**, 不动形态。

---

## §6 C/D Contact Sheet Prompt v3 Draft (Appendix, per Fiona DM 5:07:45 "draft appendix 一起给, 但你 PM 先拿色彩基线给 David 过")

**注**: 此 prompt 是 draft, PM 先拿 §1 色彩基线给 David 过; 色彩基线过后再正式拍 prompt v3, 不要 image2.

### v3 完整 prompt (合并漫画风方向 + §1 色彩基线 + 5 角色形态)

```
A wide horizontal contact sheet (2160×1350) in modern lifestyle comic
illustration style (现代生活漫画), showing two characters side by side,
separated by ~80px of warm cream paper space (#F4EDE2). Soft pastel
flat-color fills with confident hand-drawn warm dark-brown ink line work
(line color #3A332C, irregular 1.5-2px weight, NEVER pure black). Each
character has small rosy cheek dot details for warmth. Playful character-
driven storytelling with deadpan humor — illustrated, NOT realistic,
NOT pencil sketch, NOT digital flat vector, NOT 3D, NOT photographic.

LEFT SIDE (against soft butter-yellow #FFF1C9 mood panel) — A sloth
sprawled across a wooden desk surface, eyes closed, mouth slightly open,
all four limbs spread out flat. Warm tan body (#C8A887) with cream belly
(#EDE6DA), small rosy cheek dot. Beside the sloth: an open ceramic coffee
mug in muted sage-green (#7FA88E) with slow steam rising upward, AND an
open notebook with butter-yellow (#F5C84B) cover, mostly blank pages
slightly askew. Sloth completely surrendered to the desk surface.

RIGHT SIDE (against soft dusty-pink #FFE4E1 mood panel for contrast) —
A monkey sitting cross-legged on the ground, dressed in a slightly absurd
combination: an unbuttoned ill-fitting striped vest worn backwards
(showing the back tag in the front, off-balance fit), AND mismatched
socks (one with horizontal stripes, the other plain — clearly two
different socks). A vintage typewriter-style keyboard balanced
precariously on its head like a misplaced hat (slightly tilted, antique
cream-yellow body with dark brown keys, hand-drawn paper texture).
Holding an unpeeled banana in one hand (warm ripe yellow with brown spots,
not bright cartoon yellow). Muddy khaki-brown monkey fur (#A89A86) with
cream face/belly, small rosy cheek dot. Eyes blank and zoned-out (small
dot pupils, NOT big cute eyes), mouth slightly open in a vacant deadpan
expression. Clothing combination suggests "system glitch / identity
misalignment / mind drifted off" — absurd but deadpan, NOT cosplay,
NOT clown.

STYLE — Modern lifestyle comic illustration. Soft pastel flat-fill bodies
with mid-tone warm dark-brown ink outline. Stylized cartoon proportions
(slightly larger heads, expressive body language) — NOT chibi, NOT
big-glossy-eyes mascot, NOT manga-moe, NOT Sanrio sweet, NOT Disney
princess. Picture-book illustrated warmth with deadpan humor. Color
palette: warm cream background #F4EDE2 with per-character mood panels
(butter-yellow for sloth, dusty-pink for monkey), warm-pastel character
bodies (tan, khaki-brown), one accent hit per scene (sage or butter),
warm near-black outline. Both characters self-contained, centered in
their respective halves, ~100px padding from canvas edges.
```

### v3 negative prompt

```
NO realistic photographic style, NO 3D rendered character, NO hyper-
realistic anatomy, NO pencil sketch, NO graphite drawing, NO grayscale,
NO hard editorial inked monochrome, NO heavy crosshatching. NO chibi,
NO baby-like proportions, NO big glossy cute-mascot eyes, NO heart eyes,
NO sparkles, NO blush cheeks (rosy cheek DOT is OK, NOT painted blush),
NO heart-pattern clothing. NO candy pink #FF6B9D, NO neon dopamine
palette (#FF6B6B + #4ECDC4 + #FFE66D), NO Sanrio sweet style, NO Disney
princess, NO children's-book sweet, NO manga-moe, NO Japanese cute eye
style. NO Mocha Mousse #A47864 as dominant body color. NO pure white
#FFFFFF background, NO pure black #000 outline, NO monochrome editorial
beige-only. NO ball-curl posture for sloth (reserved for B sleeping cat),
NO grinning or playful active monkey, NO action shot of typing or eating,
NO modern laptop, NO emoji-like faces, NO party hat, NO clown costume,
NO formal bowtie/top-hat gentleman trope, NO over-accessorized cosplay.
NO text in image, NO captions, NO labels.
```

---

## §7 数据透明 + 风险 (per Fiona 1:54 持续要求)

1. **样本主证据**: 表情包 IP / 头像现象 / 发疯文学 cultural — 都是真实使用证据, 不是设计师作品
2. **辅助证据**: 站酷/LOFTER directional 但 pixel-level 无法提取, 是 register 推算
3. **推荐 hex 是起步 palette**: 由 verified IP register 推算 (Loopy/Chiikawa/Capybara/momo 都不是 pixel-extracted, 是 secondary description), **必须 prompt-test 阶段 A/B vs reference 再 fine-tune**, 不是 brand spec
4. **未访问**: XHS (David 5:06 拒) / Behance/Dribbble (Fiona DM 不作主证据) / 未登录 LOFTER portfolios
5. **5 角色未全测**: 本 v0.1 重点 C/D color baseline; A/B/E 是否完全适用需 D 试金石过 PM 后扩验

---

## §8 待办

| 时间 | 动作 | Owner |
| --- | --- | --- |
| 05:25 (本文件落库) | TA-color-preference-study v0.1 落库 + 通告 Fiona (含 §1 baseline + §6 prompt v3 draft appendix) | Phoebe (本条) |
| 等 PM | Fiona 先拿 §1 色彩基线给 David 审 (per DM 5:07:45) | Fiona |
| 色彩基线过 | David 拍 prompt v3 (§6 draft) | David |
| prompt v3 过 | PM ack 后 1 image2 contact sheet 试金石 | Fiona |
| 试金石过 | 扩 A/B/E (~6 calls) | Phoebe |

期间 0 image2 / 0 prompt 终稿.
