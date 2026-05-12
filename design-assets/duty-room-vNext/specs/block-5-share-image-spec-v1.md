# Block 5 分享图设计规范 v1

> **文件**：`block-5-share-image-spec-v1.md`  
> **作者**：Phoebe2  
> **日期**：2026-05-13  
> **状态**：Final（DavidC 01:16 拍板 composition + 01:16 拍 result_text 放大）  
> **上游 SoT**：PRD v2.3 §7.5 / copy-sot-v2 §8

---

## 1. 概述

Block 5 是心情值班室 vNext 结果页（P3）的静态分享图，3:4 竖版，用户长按保存/分享。

**视觉调性**：手绘海报式角色卡片（粗 marker 边框 + 左对齐编辑式排版 + 站酷快乐体手写感）

**核心设计原则**：
- result_text 是视觉主导（字号最大，72pt）
- 角色图居中展示
- 整体"手绘感"区别于通用模板

---

## 2. 画布规格

| 属性 | 值 |
|---|---|
| 尺寸 | 1080 × 1440 px (3:4) |
| 背景色 | `#F9F7F3` (浅米) |
| 边框 | 粗 marker 手绘边框（见 §3） |

---

## 3. 粗 marker 边框

**视觉效果**：手绘抖动线，双层叠加产生 marker bleed 感

**实现参数**：
- 外层边框：
  - 位置：距画布边缘 40px
  - 线宽：10px
  - 颜色：`#1A1715` (TEXT_PRIMARY)
  - jitter：4px（手绘抖动幅度）
  - segments：30（每边分段数，越多越平滑）
- 内层边框：
  - 位置：外层边框内 1px
  - 线宽：6px
  - 颜色：`#1A1715`
  - jitter：2px
  - segments：30

**PIL 实现示例**（rough_rect 函数）：
```python
def rough_line(draw, x1, y1, x2, y2, color, base_width=4, jitter=2, segments=20):
    points = []
    for i in range(segments + 1):
        t = i / segments
        x = x1 + (x2 - x1) * t
        y = y1 + (y2 - y1) * t
        if 0 < i < segments:
            x += random.uniform(-jitter, jitter)
            y += random.uniform(-jitter, jitter)
        points.append((x, y))
    for i in range(len(points) - 1):
        draw.line([points[i], points[i+1]], fill=color, width=base_width)

def rough_rect(draw, x1, y1, x2, y2, color, base_width=5, jitter=2):
    segments = 30
    rough_line(draw, x1, y1, x2, y1, color, base_width, jitter, segments)  # top
    rough_line(draw, x2, y1, x2, y2, color, base_width, jitter, segments)  # right
    rough_line(draw, x2, y2, x1, y2, color, base_width, jitter, segments)  # bottom
    rough_line(draw, x1, y2, x1, y1, color, base_width, jitter, segments)  # left

# 使用
border_margin = 40
random.seed(42)  # 固定 seed 保证每次生成一致
rough_rect(draw, border_margin, border_margin,
           W - border_margin, H - border_margin,
           TEXT_PRIMARY, base_width=10, jitter=4)
rough_rect(draw, border_margin + 1, border_margin + 1,
           W - border_margin - 1, H - border_margin - 1,
           TEXT_PRIMARY, base_width=6, jitter=2)
```

---

## 4. 内容区布局

**内边距**：边框内 65px（`inner_pad = border_margin + 65 = 105px`）

**垂直布局**（从上到下）：
1. 顶部标题区（kicker + 角色名 + 下划线）
2. 角色图区
3. result_text 区（含装饰 markers）
4. branding 区

---

## 5. 顶部标题区（左对齐）

### 5.1 Kicker "心情值班室"

| 属性 | 值 |
|---|---|
| 字体 | 站酷快乐体 (ZCOOLKuaiLe-Regular) |
| 字号 | 32pt |
| 颜色 | `#9A8D7E` (TEXT_MUTED) |
| 位置 | 左对齐，x = inner_pad (105px), y = inner_pad (105px) |

### 5.2 角色名（如"嘴硬章鱼"）

| 属性 | 值 |
|---|---|
| 字体 | 站酷快乐体 |
| 字号 | 64pt |
| 颜色 | `#1A1715` (TEXT_PRIMARY) |
| 位置 | 左对齐，x = inner_pad, y = kicker_y + 40px |

### 5.3 手绘下划线

**视觉效果**：角色名下方粗 marker 短横线（左对齐）

**实现参数**：
- 起点：(inner_pad, role_name_y + 80px)
- 终点：(inner_pad + role_name_width, role_name_y + 80px)
- 线宽：5px
- 颜色：`#1A1715`
- jitter：2px
- segments：15

---

## 6. 角色图区

### 6.1 角色图来源

**路径**：`design-assets/duty-room-vNext/role-assets-v2/role-{A-E}-{name}.png`

| 角色 | 文件名 |
|---|---|
| A 嘴硬章鱼 | role-A-octopus.png |
| B 断电猫 | role-B-cat.png |
| C 躺平树懒 | role-C-sloth.png |
| D 整活吗喽 | role-D-monkey.png |
| E 高情商刺猬 | role-E-hedgehog.png |

**规格**：所有角色图均为 1080 × 1080 px，浅米底 `#F9F7F3`

### 6.2 裁剪 + 缩放

**步骤**：
1. 裁出角色 bbox（去除大片浅米底留白，保留 40px padding）
2. 等比缩放到目标宽度 = 画布宽度 × 60% = 648px
3. 居中粘贴

**位置**：
- x：居中 `(W - target_w) // 2`
- y：`H × 20% = 288px`（顶部标题下方，留足够间距）

---

## 7. result_text 区（视觉主导）

### 7.1 文字规格

| 属性 | 值 |
|---|---|
| 字体 | 站酷快乐体 |
| 字号 | **72pt**（DavidC 01:16 拍：大于角色名 64pt） |
| 颜色 | `#1A1715` (TEXT_PRIMARY) |
| 对齐 | 居中 |
| 位置 | 角色图下方 `H × 4% = 57.6px` 间距 |

### 7.2 装饰元素

**目的**：让 result_text 区有"承载感"，不漂浮

#### 7.2.1 左右编辑式 marker（引号暗示）

**视觉效果**：result_text 左右两侧各一条短竖线

**实现参数**：
- 左侧 marker：
  - x：result_text 左边缘 - 20px
  - y：result_text 垂直中点 ± 15px
  - 线宽：4px
  - 颜色：`#6B5E50` (TEXT_SECONDARY)
- 右侧 marker：
  - x：result_text 右边缘 + 20px
  - y：同左侧
  - 线宽：4px
  - 颜色：`#6B5E50`

#### 7.2.2 虚线底纹

**视觉效果**：result_text 下方虚线（轻装饰）

**实现参数**：
- y：result_text 底部 + 18px
- dash 长度：12px
- dash 间隔：8px
- 线宽：3px
- 颜色：`#9A8D7E` (TEXT_MUTED)
- 范围：result_text 左边缘 → 右边缘

---

## 8. branding 区（右下不对称）

### 8.1 "觅遇社"

| 属性 | 值 |
|---|---|
| 字体 | 站酷快乐体 |
| 字号 | 36pt |
| 颜色 | `#1A1715` (TEXT_PRIMARY) |
| 位置 | 右对齐，x = W - inner_pad - text_width, y = H - inner_pad - 75px |

### 8.2 "Nice to Meetu"

| 属性 | 值 |
|---|---|
| 字体 | 站酷快乐体 |
| 字号 | 26pt |
| 颜色 | `#9A8D7E` (TEXT_MUTED) |
| 位置 | 右对齐，x = W - inner_pad - text_width, y = brand_main_y + 48px |

---

## 9. 颜色规范

| 用途 | 变量名 | 色值 | 示例 |
|---|---|---|---|
| 背景色 | BG_COLOR | `#F9F7F3` | 浅米 |
| 主文字（角色名/result_text/边框/觅遇社） | TEXT_PRIMARY | `#1A1715` | 深黑 |
| 次要文字（marker 短线） | TEXT_SECONDARY | `#6B5E50` | 深灰棕 |
| 弱文字（kicker/虚线/Nice to Meetu） | TEXT_MUTED | `#9A8D7E` | 浅灰棕 |

---

## 10. 字体

**统一字体**：站酷快乐体 (ZCOOLKuaiLe-Regular)

**字体文件**：
- 本地路径（PIL）：`/tmp/ZCOOLKuaiLe-Regular.ttf`
- Web font（前端）：Google Fonts `ZCOOL KuaiLe`
  ```css
  @import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');
  font-family: 'ZCOOL KuaiLe', cursive;
  ```

**字号层级**（从大到小）：
1. **result_text**：72pt（视觉主导）
2. 角色名：64pt
3. 觅遇社：36pt
4. kicker：32pt
5. Nice to Meetu：26pt

---

## 11. 前端实施 hint（@Dave）

### 11.1 html2canvas 截图参数

```javascript
import html2canvas from 'html2canvas-pro';

const shareImageElement = document.getElementById('block-5-share-image');
const canvas = await html2canvas(shareImageElement, {
  scale: 2,  // retina
  backgroundColor: '#F9F7F3',
  useCORS: true,
  logging: false,
});
const dataURL = canvas.toDataURL('image/png');
```

### 11.2 CSS 实现 marker 边框

**方案 A**：用 CSS `border` + `border-radius` 模拟（简化版，无 jitter）
```css
.block-5-container {
  width: 1080px;
  height: 1440px;
  background: #F9F7F3;
  border: 10px solid #1A1715;
  box-shadow: inset 0 0 0 6px #1A1715;
  padding: 65px;
}
```

**方案 B**：用 SVG `<path>` 绘制 rough 边框（完整还原 jitter）
```html
<svg width="1080" height="1440">
  <path d="M40,40 L1040,40 L1040,1400 L40,1400 Z" 
        stroke="#1A1715" stroke-width="10" fill="none" />
  <!-- 用 JS 生成 jitter path -->
</svg>
```

**推荐**：方案 A（简化版），视觉差异不大，实现成本低

### 11.3 result_text 动态叠加

```jsx
<div className="result-text-container">
  <div className="result-text-markers">
    <span className="marker-left">|</span>
    <span className="result-text">{variant.resultText}</span>
    <span className="marker-right">|</span>
  </div>
  <div className="result-text-underline"></div>
</div>
```

```css
.result-text {
  font-family: 'ZCOOL KuaiLe', cursive;
  font-size: 72pt;
  color: #1A1715;
  text-align: center;
}

.marker-left, .marker-right {
  font-size: 30px;
  color: #6B5E50;
  font-weight: bold;
}

.result-text-underline {
  border-bottom: 3px dashed #9A8D7E;
  width: 100%;
  margin-top: 18px;
}
```

---

## 12. 5 角色示例 result_text

| 角色 | result_text 示例（SoT §6 S1-S6 首条） |
|---|---|
| A 嘴硬章鱼 | 我没事，是沙子里进眼睛了 |
| B 断电猫 | 在，但不在线 |
| C 躺平树懒 | 文件夹已建好 |
| D 整活吗喽 | 狗都不吃 |
| E 高情商刺猬 | 啊对对对 |

**最长 result_text**：约 18-20 字（单行居中 OK，72pt 字号下宽度约 900-1000px < 画布宽度 1080px - 2×inner_pad）

---

## 13. 产出清单

- ✅ 5 角色全套底图预览（A/B/C/D/E，含 result_text 叠字完整效果）
- ✅ 本 spec 文件 `block-5-share-image-spec-v1.md`
- ⏳ Dave 前端实施（item 4: result_text 手写字体 + 增大占比）

---

## 14. 版本历史

| 版本 | 日期 | 变更 |
|---|---|---|
| v1 | 2026-05-13 01:20 | Initial spec（DavidC 01:16 拍 composition + result_text 72pt） |

---

**Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>**
