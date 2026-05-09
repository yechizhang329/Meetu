# task #31 — Final Asset Path Table for Dave (v1)

> 来源：task #31 thread Fiona msg `38890cf1` (batch1 taste gate 通过) + msg `7bc8cf83` (羊驼降级口径).
> 用途：替换 Fiona 切的 fallback crop，作为 Dave Canvas 阶段 A demo 的正式资产源。

---

## 资产分两层（必看）

| 层 | 路径前缀 | 模式 | 用途 |
|---|---|---|---|
| **L1 透明 PNG（推荐主路径）** | `Meetu/design-assets/duty-room-p0/contact-crops-transparent/{role}/{role}-{slug}-v1.png` | RGBA | Canvas drawImage 直接叠到任意背景 |
| **L2 不透明 PNG（兜底）** | `Meetu/design-assets/duty-room-p0/contact-crops/{role}/{role}-{slug}-v1.png` | RGBA but 全实底，paper-bg `#F2EAD8` | 当 L1 出现透明边缘瑕疵时回退；或 H5 容器底色就是 `#F2EAD8` 时直接用更稳 |

**Dave 默认走 L1**。羊驼例外见下文 §3。

---

## 1. 嘴硬鹅 stubborn-goose ✅ L1 推荐

| 用途 | L1 透明路径 | 推荐度 |
|---|---|---|
| **Main**（H5 默认头像 / 推荐结果页） | `contact-crops-transparent/stubborn-goose/stubborn-goose-main-v1.png` | ⭐ PM 推荐 |
| 备选 1（撤退姿态） | `contact-crops-transparent/stubborn-goose/stubborn-goose-pose3-v1.png` | PM 备选 |
| 备选 2（被戳穿表情） | `contact-crops-transparent/stubborn-goose/stubborn-goose-emo2-v1.png` | PM 备选 |
| 其他可用 | `pose1.png` / `pose2.png` / `emo1.png` | 二线 |

opaque ratio 17-33%，L1 干净，直接用。

## 2. 低电量猫 low-battery-cat ⭐ 首发默认角色 ✅ L1 推荐

| 用途 | L1 透明路径 | 推荐度 |
|---|---|---|
| **Main**（H5 默认 + 首发） | `contact-crops-transparent/low-battery-cat/low-battery-cat-main-v1.png` | ⭐⭐ PM 首发 |
| 备选 1（趴桌 / 不想起床） | `contact-crops-transparent/low-battery-cat/low-battery-cat-pose1-v1.png` | PM 备选 |
| 备选 2（缩成球 / 拒绝营业） | `contact-crops-transparent/low-battery-cat/low-battery-cat-pose3-v1.png` | PM 备选 |
| 其他可用 | `pose2.png` / `emo1.png` / `emo2.png` | 二线 |

opaque ratio 17-45%，L1 干净，直接用。**首发主资产 = `low-battery-cat-main-v1.png`**.

## 3. DDL 仓鼠 ddl-hamster ✅ L1 推荐

| 用途 | L1 透明路径 | 推荐度 |
|---|---|---|
| **Main** | `contact-crops-transparent/ddl-hamster/ddl-hamster-main-v1.png` | ⭐ PM 推荐 |
| 备选 1 | `contact-crops-transparent/ddl-hamster/ddl-hamster-pose1-v1.png` | PM 备选 |
| 备选 2 | `contact-crops-transparent/ddl-hamster/ddl-hamster-pose3-v1.png` | PM 备选 |
| 其他可用 | `pose2.png` / `emo1.png` / `emo2.png` | 二线 |

opaque ratio 24-55%，L1 干净，直接用。

## 4. 后台羊驼 backstage-alpaca ⚠️ 质量降级 — Dave 看这里

### 已知问题
后台羊驼是**细线稿 + 大量内部留白**，rembg u2net 模型把白底当主体连同主体边缘一起抠掉，opaque ratio 仅 2.9%（main），相当于失真。

### 兜底方案：chroma-key 抠暖纸米底（已落地）
我用 chroma-key（暖纸米底 `#F2EAD8`，容差 22）重切了 6 张羊驼 L1，**已覆盖 rembg 失真版**。视觉上线稿主体保留完整，opaque ratio 5-6%（线稿天然占比低，视觉无瑕）。

| 用途 | L1 透明路径（chroma-key） | L2 不透明路径（兜底） | 推荐度 |
|---|---|---|---|
| **Main** | `contact-crops-transparent/backstage-alpaca/backstage-alpaca-main-v1.png` | `contact-crops/backstage-alpaca/backstage-alpaca-main-v1.png` | ⭐ PM 推荐（透明版可用） |
| 备选（礼貌撑住） | `contact-crops-transparent/backstage-alpaca/backstage-alpaca-emo2-v1.png` | `contact-crops/backstage-alpaca/backstage-alpaca-emo2-v1.png` | PM 备选 |
| 其他 | `pose1/pose2/pose3/emo1` 透明版 + 同名不透明版 | | 二线 |

### Dave 决策建议（羊驼这一只）
1. **首选 L1 chroma-key**：当容器底色不是 `#F2EAD8` 时优先用透明版。如果观感不如不透明版（细线稿对底色敏感），降级到 L2。
2. **回退 L2 不透明**：如果 H5 卡片背景就是 `#F2EAD8` 暖纸米，直接用 L2 不透明版最稳。
3. **PM 提示保留**：羊驼依赖文字增强"前台/后台"语境，**首发不主推羊驼**，主推低电量猫。羊驼可作为换角色的二线选项。

---

## 集成约束（给 Dave 的硬规则）

### 1. 文件尺寸
- 所有 L1/L2 PNG = `402×611 px`
- L1 透明版文件大小：30KB-240KB / 张，24 张总 ~3.1MB
- L2 不透明版文件大小：~115KB-380KB / 张，24 张总 ~9MB

### 2. Canvas drawImage 用法（推荐）
```js
const img = new Image();
img.src = '/duty-room-p1/role/low-battery-cat/low-battery-cat-main-v1.png';
img.onload = () => {
  // 1080×1350 4:5 canvas, 角色等比放在中下偏上区域，上方留 tagline
  ctx.drawImage(img, dx, dy, dw, dh);
};
```

### 3. 主资产 vs 备选切换
H5 默认渲染 main；用户点"换一只"时按 PM 备选顺序切换。**不要随机切到二线**，否则视觉一致性会下降。首发默认角色 = 低电量猫 `main`.

### 4. 当前不需要做的
- 不做 sprite sheet（24 张还轻量）
- 不做 webp（PNG 已经够轻）
- 不做缩略图变体（Canvas 自己 drawImage 缩放即可）

---

## 文件结构对照

```
Meetu/design-assets/duty-room-p0/
├── contact-sheets/                          # 4 张原 sheet（参考用）
│   ├── contact-stubborn-goose-v1.png
│   ├── contact-low-battery-cat-v1.png
│   ├── contact-ddl-hamster-v1.png
│   └── contact-backstage-alpaca-v1.png
├── contact-crops/                           # L2 不透明（暖纸米底）
│   └── {role}/{role}-{slug}-v1.png  × 24
└── contact-crops-transparent/               # L1 透明（rembg / 羊驼=chroma-key）
    └── {role}/{role}-{slug}-v1.png  × 24
```

## 下一步

- 此 path table 入库 + commit + push 后，Dave 替换 fallback crop 包
- Dave Canvas demo 中如发现某张 L1 边缘瑕疵 → 单独 ping，我会 nano-banana 补做更干净的透明版（不批量、不再动 Image2 主线）
- 批 2 flagship 带字图仍按 Fiona 指令 hold
