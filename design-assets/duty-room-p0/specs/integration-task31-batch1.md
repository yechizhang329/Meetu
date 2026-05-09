# task #31 批 1 — Dave H5 集成包路径表

> 来源：task #31 thread Fiona msg `38890cf1`（批 1 taste gate 通过，下一步 crop + Dave 对接）
> 决策：**所有 PNG 保留 `#F2EAD8` 暖纸米底，不强制抠透明**。理由：H5 全局背景同色，PNG 直接叠层视觉无缝；只有当 Dave 在卡片底色不是 `#F2EAD8` 的位置使用时，才需要走 rembg / nano-banana 抠透明（此时按需补做即可，不阻塞 H5 v1.0）。

---

## 4 角色推荐主资产 + 备选（PM `38890cf1` 钦点）

### 1. 嘴硬鹅 stubborn-goose

| 用途 | 路径 | 推荐度 |
|---|---|---|
| **Main（H5 默认头像 / 推荐结果页）** | `Meetu/design-assets/duty-room-p0/contact-crops/stubborn-goose/stubborn-goose-main-v1.png` | ⭐ PM 推荐 |
| 备选 1（场景姿态 3 / 撤退） | `contact-crops/stubborn-goose/stubborn-goose-pose3-v1.png` | PM 备选 |
| 备选 2（半身表情 2 / 被戳穿） | `contact-crops/stubborn-goose/stubborn-goose-emo2-v1.png` | PM 备选 |
| 其他可用 | `pose1.png` / `pose2.png` / `emo1.png` | 二线，按场景拼用 |

### 2. 低电量猫 low-battery-cat ⭐ 首发默认角色

| 用途 | 路径 | 推荐度 |
|---|---|---|
| **Main（H5 默认 + 首发）** | `Meetu/design-assets/duty-room-p0/contact-crops/low-battery-cat/low-battery-cat-main-v1.png` | ⭐ PM 推荐 |
| 备选 1（趴桌 / 不想起床） | `contact-crops/low-battery-cat/low-battery-cat-pose1-v1.png` | PM 备选 |
| 备选 2（缩成球 / 拒绝营业） | `contact-crops/low-battery-cat/low-battery-cat-pose3-v1.png` | PM 备选 |
| 其他可用 | `pose2.png` / `emo1.png` / `emo2.png` | 二线 |

### 3. DDL 仓鼠 ddl-hamster

| 用途 | 路径 | 推荐度 |
|---|---|---|
| **Main** | `Meetu/design-assets/duty-room-p0/contact-crops/ddl-hamster/ddl-hamster-main-v1.png` | ⭐ PM 推荐 |
| 备选 1 | `contact-crops/ddl-hamster/ddl-hamster-pose1-v1.png` | PM 备选 |
| 备选 2 | `contact-crops/ddl-hamster/ddl-hamster-pose3-v1.png` | PM 备选 |
| 其他可用 | `pose2.png` / `emo1.png` / `emo2.png` | 二线 |

### 4. 后台羊驼 backstage-alpaca

| 用途 | 路径 | 推荐度 |
|---|---|---|
| **Main** | `Meetu/design-assets/duty-room-p0/contact-crops/backstage-alpaca/backstage-alpaca-main-v1.png` | ⭐ PM 推荐 |
| 备选 1（半身表情 2 / 礼貌撑住） | `contact-crops/backstage-alpaca/backstage-alpaca-emo2-v1.png` | PM 备选 |
| 其他可用 | `pose1.png` / `pose2.png` / `pose3.png` / `emo1.png` | 二线 |
| **PM 提示** | 后台羊驼依赖文字增强"前台/后台"，不要单独当传播图（首发应主推低电量猫） | |

---

## 集成约束（给 Dave 的硬规则）

### 1. 底色必须 `#F2EAD8`
所有 PNG 底色为 `#F2EAD8` 暖纸米。Dave 端任何承载这些 PNG 的容器必须背景色同步：
```css
.role-asset-container { background: #F2EAD8; }
```
不要用 `#FFFFFF` / `#FFFCF7` 卡片白底，否则角色 PNG 会显示矩形纸底边界。

### 2. PNG 是 RGB 不是 RGBA
现版 PNG 没有 alpha 通道（保留纸底）。如果 Dave 在某些位置必须用透明叠加，**告诉我**，我用 nano-banana / rembg / Pillow 抠白色调单独做透明版（不是默认）。

### 3. 文件尺寸
- 所有 crop ~ 400×620 px（实际 419×627，由 1254×1254 sheet 3×2 切出）
- 文件大小 ~380KB / 张（24 张总 ~9MB）
- Dave 引入时建议放 `public/duty-room-p1/role/{role}/{role}-{slug}-v1.png` 路径

### 4. 主资产 vs 备选切换
H5 默认渲染 main；用户点"换一只"时按 PM 备选顺序切换。不要随机切到二线，否则视觉一致性会下降。

---

## 24 PNG 完整清单

```
Meetu/design-assets/duty-room-p0/contact-crops/
├── stubborn-goose/
│   ├── stubborn-goose-main-v1.png    ← ⭐ PM 推荐
│   ├── stubborn-goose-pose1-v1.png
│   ├── stubborn-goose-pose2-v1.png
│   ├── stubborn-goose-pose3-v1.png    ← PM 备选
│   ├── stubborn-goose-emo1-v1.png
│   └── stubborn-goose-emo2-v1.png     ← PM 备选
├── low-battery-cat/
│   ├── low-battery-cat-main-v1.png    ← ⭐ PM 推荐 / 首发默认角色
│   ├── low-battery-cat-pose1-v1.png   ← PM 备选
│   ├── low-battery-cat-pose2-v1.png
│   ├── low-battery-cat-pose3-v1.png   ← PM 备选
│   ├── low-battery-cat-emo1-v1.png
│   └── low-battery-cat-emo2-v1.png
├── ddl-hamster/
│   ├── ddl-hamster-main-v1.png        ← ⭐ PM 推荐
│   ├── ddl-hamster-pose1-v1.png       ← PM 备选
│   ├── ddl-hamster-pose2-v1.png
│   ├── ddl-hamster-pose3-v1.png       ← PM 备选
│   ├── ddl-hamster-emo1-v1.png
│   └── ddl-hamster-emo2-v1.png
└── backstage-alpaca/
    ├── backstage-alpaca-main-v1.png   ← ⭐ PM 推荐
    ├── backstage-alpaca-pose1-v1.png
    ├── backstage-alpaca-pose2-v1.png
    ├── backstage-alpaca-pose3-v1.png
    ├── backstage-alpaca-emo1-v1.png
    └── backstage-alpaca-emo2-v1.png   ← PM 备选
```

24 个文件全部已生成，等 commit。

## 下一步

- 等 PM 这条交付确认 → push 到 main
- Dave Canvas demo 出来后，如果发现某些位置**必需透明 PNG**，告诉我；我按需用 rembg / nano-banana 单独补做透明版（不批量）
- 批 2 flagship 带字图仍按 Fiona 指令 hold
