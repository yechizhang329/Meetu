# 心情值班室 P0 分享卡视觉规范 v1（4:5）

> 任务：#29 心情值班室 P0 分享卡视觉：4:5 无字底图 + 前端安全区蒙版
> PRD 锚点：`产品文档/2026-05-08-心情值班室-PRD-v0.8-final.md` §9 / §12.5 / §12.6 / §13
> 执行口径来自 #会议室:fc7e0e92 5 条拍板 + Fiona msg `3a7c0519` 微调采纳：留白触发器走前端图层；底图拆 `bg_office_shared` 与 `bg_role_desk_*`。

---

## 1. 画布与导出规格

| 项 | 值 |
|---|---|
| 主分享卡比例 | 4:5 |
| 主分享卡像素（导出 / 设计稿） | 1080 × 1350 |
| 设计稿 dpi | 144（@2x，从 540 × 675 设计） |
| 颜色空间 | sRGB |
| 文件格式 | PNG（透明角色）/ JPG（带底纸感的成卡） |
| html2canvas 严格断言 | 1080 × 1350 ±0px |
| P1 备用比例 | 3:4（1080 × 1440）/ 1:1（1080 × 1080） |

P0 阶段**只交付 4:5**。3:4 / 1:1 不阻塞 P0。

## 2. 底图分类（v0.8.1 微调采纳）

| 类型 | 用途 | 数量 P0 | 命名前缀 |
|---|---|---|---|
| `bg_office_shared` | 首页 hero / 全家福远景，4 角色共用 | 1 | `bg_office_shared_v1.png` |
| `bg_role_desk_{role}` | 每角色专属工位特写底图，分享卡近景 | 4 | `bg_role_desk_stubborn_goose_v1.png` 等 |
| `share_{role}_{scene}` | 角色 × 主场景成卡（角色已合到底图上） | 4 | `share_low_battery_cat_no_yingye_v1.png` 等 |

`share_*` 是从 `bg_role_desk_*` + master sheet 主形象合成出的"无字成卡"，分享时直接发出去也是体面的图，前端只在上面**叠**评价区文字，不替换内容。

## 3. 4:5 安全区与图层规划

```
┌─────────────────────────────┐ 1080 × 1350
│  ▶ 顶部品牌带  60px 高       │   y=0..60   叠 Meetu · 心情值班室 logo / 角色岗位牌
├─────────────────────────────┤
│                             │
│       角色 + 工位场景         │   y=60..1100   主视觉区，角色避让矩形见 §4
│       (insert from BG)      │
│                             │
├─────────────────────────────┤
│  ▶ 朋友鉴定区  180px 高      │   y=1100..1280  前端文字层叠："今日值班评价：____"
├─────────────────────────────┤
│  ▶ 底栏水印  70px 高         │   y=1280..1350  Meetu · 心情值班室 / 入口提示
└─────────────────────────────┘
```

- **顶部品牌带**（y=0..60，高 60px）：用 `值班黄 #F2C744` 横条，叠角色岗位牌图标 + 「Meetu · 心情值班室」字样（前端文字）
- **主视觉区**（y=60..1100，高 1040px）：角色 + 工位道具，构图按 §4 角色避让规则
- **朋友鉴定区**（y=1100..1280，高 180px）：前端 absolute 文字层。底图本身 **不出现"评价区"任何视觉元素**；角色不延伸到这块。所有底图在这块预留视觉重量轻的纸感（米色 + 极淡纸纹），方便文字层叠后清晰可读。
- **底栏水印**（y=1280..1350，高 70px）：底图自带的 `Meetu · 心情值班室` 微小水印 + 入口提示。文字烧进底图（不变 / 不 AB），角色 + 道具不进入这块。

## 4. 角色避让矩形（前端文字位 spec）

每张分享卡的"朋友鉴定区"需要前端用 absolute 定位叠一个文字框。规范：

| 项 | 值 |
|---|---|
| 文字位 x | 80 |
| 文字位 y | 1130 |
| 文字位 width | 920 |
| 文字位 height | 130 |
| 行数 | 1 行 + 自动 wrap 最多 2 行 |
| 字体 | 系统中文（PingFang SC / 苹方 / 思源黑），weight 600 |
| 字号 | 44px（短文）/ 36px（自动缩放至 ≤ 2 行） |
| 颜色 | `#1C1A17` 墨线黑 |
| 占位文案 | "今日值班评价：____"（默认） |
| 是否需要 mask | 不需要硬 mask；底图已留淡米底，前端文字不需要遮罩矩形 |

> 给 Dave 的提示：4:5 1080×1350 画布，安全区文字位 = `{x:80, y:1130, w:920, h:130}`。html2canvas 导出时和图层一同烧进，无需独立合成。

## 5. 「前端安全区参考蒙版」交付

每张底图 PNG 同目录下交付一份 `*_safearea.png`：

- 1080×1350，半透明红色叠在 §3 描述的 4 个区
- 仅作为 Dave 调试时对照用，不打包进生产 bundle
- 命名：`share_low_battery_cat_no_yingye_v1_safearea.png` 等

## 6. 命名规则（PRD §12.6 扩展）

```
# 角色 master sheet（task #28 交付）
role_{role}_master_v{n}.png
role_{role}_main_v{n}.png             # 主形象透明 PNG
role_{role}_mood_{tag}_v{n}.png       # 情绪变体
role_{role}_prop_{tag}_v{n}.png       # 道具图标
role_{role}_bg_desk_v{n}.png          # 角色专属工位远景（与 bg_role_desk_* 同义）

# 分享卡（task #29 交付）
bg_office_shared_v{n}.png              # 首页/全家福共用远景
bg_role_desk_{role}_v{n}.png           # 角色专属工位
share_{role}_{scene}_v{n}.png          # 角色 × 场景 完整成卡（无评价区文字）
share_{role}_{scene}_v{n}_safearea.png # 安全区调试图

# {role} 取值
stubborn_goose | low_battery_cat | ddl_hamster | backstage_alpaca

# {scene} 取值（PRD §7.1 6 场景）
no_yingye          # 不想营业
asked_out          # 被约出门
after_socializing  # 社交局结束后
busted_not_admit   # 被说中但不认
final_ddl          # 期末DDL
dorm_private       # 宿舍私人空间
```

## 7. 底栏水印 / 品牌露出

`y=1280..1350` 共 70px：

- **左**：`Meetu · 心情值班室` —— PingFang SC 24px，墨线黑 `#1C1A17`，左 padding 60px
- **右**：入口提示 —— `今天派谁出来？meetu.asia` —— PingFang SC 22px，灰绿 `#7A8B7B`，右 padding 60px
- 底色：与底图主色融合的暖纸米 `#F2EAD8`，与上方主视觉自然过渡，不画分隔线
- **本水印是底图烧进的固定信息**，不通过前端叠层，避免被截图时丢失

## 8. P0 完整资产清单（task #28 + task #29 合并）

| 类别 | 文件 | 数量 | 状态 |
|---|---|---|---|
| master sheet | `role_{role}_master_v1.png` | 4 | task #28 进行中 |
| 主形象透明 | `role_{role}_main_v1.png` | 4 | task #28 第二批 |
| 情绪变体 | `role_{role}_mood_{tag}_v1.png` | 12 | task #28 第二批 |
| 道具图标 | `role_{role}_prop_{tag}_v1.png` | 8 | task #28 第二批 |
| 共用办公室远景 | `bg_office_shared_v1.png` | 1 | task #29 |
| 角色工位特写 | `bg_role_desk_{role}_v1.png` | 4 | task #29 |
| 分享卡成卡（4:5） | `share_{role}_{scene}_v1.png` | 4（每角色 1 主场景，按 §6.2 表绑定） | task #29 |
| 安全区调试图 | `*_safearea.png` | 与上同 | task #29 |
| favicon | `favicon.png` | 1 | task #28 / task #29 收尾 |
| 首页 hero | `home_hero_v1.png`（与 `bg_office_shared_v1` 可同源 / 后期裁切） | 1 | task #29 |

## 9. 角色 → 主场景绑定（v1，便于 share 卡批量出图）

| 角色 | 绑定主场景 | share 文件 |
|---|---|---|
| 嘴硬鹅 | 被说中但不认 | `share_stubborn_goose_busted_not_admit_v1.png` |
| 低电量猫 | 不想营业 | `share_low_battery_cat_no_yingye_v1.png` |
| DDL 仓鼠 | 期末 DDL | `share_ddl_hamster_final_ddl_v1.png` |
| 后台羊驼 | 社交局结束后 | `share_backstage_alpaca_after_socializing_v1.png` |

> 其他场景（asked_out / dorm_private）作为 P1 扩展。

## 10. 给 Dave 的最小集成包

P0 集成只需要这 8 个文件：

```
public/duty-room-p0/
├── share_stubborn_goose_busted_not_admit_v1.png
├── share_low_battery_cat_no_yingye_v1.png
├── share_ddl_hamster_final_ddl_v1.png
├── share_backstage_alpaca_after_socializing_v1.png
├── role_stubborn_goose_main_v1.png        # 推荐结果页头像
├── role_low_battery_cat_main_v1.png
├── role_ddl_hamster_main_v1.png
└── role_backstage_alpaca_main_v1.png
```

加上字体安全区文字位：`{x:80, y:1130, w:920, h:130}` (4:5 1080×1350)。
