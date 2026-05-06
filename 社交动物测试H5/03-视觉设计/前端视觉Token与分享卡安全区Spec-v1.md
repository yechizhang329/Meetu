# 社交动物测试 H5 前端视觉 Token / Spec v1

> 日期：2026-05-06  
> 负责人：Phoebe2  
> 适用目录：`Meetu/社交动物测试H5/`  
> 视觉基线：桌面便签动物园  
> 目标：给前端实现、分享卡生成、动物 SVG 扩展提供可执行规范。

---

## 0. 不可变目标

这套 H5 的目标不是“做完一个测试”，而是让大学生愿意：

1. 点进去测；
2. 测完觉得“有点像我”；
3. 截图发群聊/朋友圈/小红书；
4. 朋友看了能接话、能吐槽、能问链接。

因此视觉与结果卡必须有 **槽点、笑点、梗点**，可以适度抽象、适度癫，但不能变成低俗攻击或幼态萌宠。

设计验收一句话：

> 如果用户截图结果卡发群里，朋友第一反应不是“这是什么广告”，而是“这不就是你？”或“链接给我”，这套视觉才成立。

---

## 1. CSS Token

### 1.1 色彩 token

```css
:root {
  --sa-paper: #fff8ea;
  --sa-paper-deep: #f6ebdd;
  --sa-paper-card: #fffdf5;
  --sa-ink: #1f1f1f;
  --sa-muted: #70685e;
  --sa-line: #2b2b2b;
  --sa-orange: #ff7a3d;
  --sa-green: #c8ff5a;
  --sa-pink: #ffb7c5;
  --sa-blue: #9dd7ff;
  --sa-yellow: #ffe15a;
  --sa-purple: #c7a4ff;
  --sa-brown: #b7926b;
  --sa-shadow: rgba(31, 31, 31, .12);
}
```

### 1.2 动物主色 token

```css
:root {
  --animal-power-cat: #5d7186;
  --animal-hot-dog: #ff7a3d;
  --animal-capybara: #b7926b;
  --animal-corner-mouse: #8b7c9e;
  --animal-monkey: #ffe15a;
  --animal-hamster: #d7bd82;
  --animal-collie: #6f9ed9;
  --animal-fox: #e8793e;
  --animal-peacock: #32b6a6;
  --animal-otter: #59b7d8;
  --animal-hedgehog: #9b8068;
  --animal-panda: #98d36f;
  --animal-owl: #5d4b8c;
  --animal-pigeon: #a9c4d8;
  --animal-alpaca: #d8b88e;
  --animal-butterfly: #c27cff;
}
```

### 1.3 字体 token

```css
:root {
  --font-main: -apple-system, BlinkMacSystemFont, "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif;
  --font-weight-title: 900;
  --font-weight-body: 500;
  --font-weight-tag: 800;
}
```

原则：不依赖外部字体；不要用全篇手写体。手作感通过贴纸、圈线、倾斜、划线表达。

### 1.4 圆角 / 描边 / 阴影

```css
:root {
  --radius-card: 28px;
  --radius-note: 20px;
  --radius-pill: 999px;
  --stroke: 2px solid var(--sa-line);
  --shadow-paper: 6px 6px 0 var(--sa-shadow);
  --shadow-heavy: 10px 10px 0 rgba(31,31,31,.16);
}
```

使用原则：

- 入口页和答题页：`--shadow-paper`，轻。
- 分享卡：`--shadow-heavy`，更像可保存物料。
- 不使用玻璃拟态、霓虹、夜店渐变。

---

## 2. 布局尺寸

### 2.1 H5 页面

| 项目 | 建议 |
|---|---|
| 页面最大宽度 | `430px` |
| 主要安全边距 | `20px` |
| 小屏安全边距 | `16px` |
| 卡片内边距 | `18-24px` |
| 首屏主标题 | `42-52px` |
| 题目标题 | `24-30px` |
| 正文 | `14-16px` |
| 标签 | `11-13px` |

移动端优先：iPhone 13 mini 宽度下，题目不超过 2 行，选项不横向溢出。

### 2.2 分享卡尺寸

输出尺寸：`1080 × 1440 px`。

前端可先用 CSS 逻辑尺寸：`width: 360px; height: 480px;`，导出时按 3 倍缩放。

```css
.share-card {
  width: 360px;
  height: 480px;
  padding: 24px;
}
```

---

## 3. 分享卡安全区

### 3.1 3:4 完整安全区

以 `1080 × 1440` 为准：

| 区域 | 坐标 / 尺寸 | 内容 |
|---|---|---|
| 外边距 | 四周 `72px` | 不放核心文字 |
| 顶部身份区 | y `72-160` | `社交动物测试` 小字 / 仅供娱乐 |
| 结果主标题区 | y `170-360` | `我是「省电猫」`，最大 |
| 动物视觉区 | y `340-680` | 动物 SVG，允许压到标题下方但不挡字 |
| 一句话区 | y `680-830` | 结果一句话，第二重点 |
| 关键词区 | y `840-940` | 3 个标签 |
| 朋友锐评 / 氛围区 | y `960-1240` | 梗点 + 适合氛围 |
| 底部说明 | y `1280-1368` | `测着玩，但可能有点像` |

### 3.2 1:1 裁切安全区

很多平台预览会裁成方图。1:1 中心安全区为：

```text
x: 72 - 1008
y: 252 - 1188
```

必须留在 1:1 安全区内的内容：

1. 动物名；
2. 动物图；
3. 一句话结果；
4. 至少 2 个关键词。

可被裁掉但不影响理解的内容：顶部小字、底部免责声明、部分 tips。

### 3.3 结果卡第一眼规则

3 秒内必须读到：

1. 我是什么动物；
2. 这动物代表什么社交状态；
3. 朋友能吐槽我的点是什么。

所以结果卡禁止：

- 把动物画得很大但结果名很小；
- 把 tips 写得比一句话更显眼；
- 底部放 Meetu 大 logo / 活动 CTA；
- 让二维码或来源信息进入视觉中心。

---

## 4. 组件规范

### 4.1 StickyLabel 贴纸标签

用途：关键词、进度、状态、测试说明。

```css
.sticky-label {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 6px 10px;
  border: var(--stroke);
  border-radius: var(--radius-pill);
  background: var(--sa-green);
  box-shadow: 3px 3px 0 rgba(31,31,31,.18);
  font-size: 12px;
  font-weight: var(--font-weight-tag);
}
```

原则：每屏最多 4 个贴纸，避免像促销标签。

### 4.2 PaperCard 便签卡

用途：入口说明、结果模块、tips。

```css
.paper-card {
  border: var(--stroke);
  border-radius: var(--radius-card);
  background: var(--sa-paper-card);
  box-shadow: var(--shadow-paper);
  padding: 20px;
}
```

可轻微旋转 `-1deg` 到 `1deg`，但正文阅读卡不要旋转。

### 4.3 OptionCard 答题选项

用途：四个选项。

```css
.option-card {
  position: relative;
  padding: 14px 14px 14px 46px;
  border: var(--stroke);
  border-radius: 20px;
  background: rgba(255,255,255,.74);
  font-size: 14px;
  line-height: 1.55;
  font-weight: 700;
}
.option-card.is-selected {
  background: var(--sa-green);
  transform: rotate(-1deg);
}
```

交互：点击后像被笔圈住或盖章，不做复杂动效。

### 4.4 FriendRoast 朋友锐评框

用途：结果卡传播点，必须短、像朋友说的话。

```css
.friend-roast {
  padding: 12px 14px;
  border: 2px dashed var(--sa-line);
  border-radius: 18px;
  background: #fff;
  font-size: 13px;
  line-height: 1.55;
  font-weight: 800;
}
```

写法要求：

- 10-22 字最优；
- 像朋友吐槽，不像品牌总结；
- 有槽点但不羞辱。

示例：

- `你不是冷，你只是还没加载完。`
- `空气冷掉前，它先出手。`
- `可以靠近，但别突然贴脸。`
- `哪都有朋友，但不一定都很深。`

---

## 5. 动物 SVG 规范

### 5.1 文件/组件命名

```text
AnimalPowerCat.svg / <AnimalPowerCat />
AnimalMonkey.svg / <AnimalMonkey />
AnimalHedgehog.svg / <AnimalHedgehog />
AnimalButterfly.svg / <AnimalButterfly />
```

### 5.2 SVG 尺寸

```text
viewBox="0 0 180 150"
默认显示：150 × 132
分享卡显示：260 × 220（按比例放大）
```

### 5.3 绘制规则

每只动物必须同时具备 4 个差异点：

1. **动作**：坐着、省电、举麦、抱牌、飞行；
2. **道具**：电量尾巴、香蕉麦克风、边界牌、路线虚线；
3. **表情**：观察、兴奋、警觉、轻松；
4. **主色**：16 个结果有各自主色。

禁止：

- 同一个圆形小动物只换颜色；
- 大眼卖萌；
- 儿童绘本比例；
- 拟人化太强导致像 IP 动画片；
- 复杂阴影和渐变导致 SVG 难维护。

### 5.4 线条规范

```css
.animal-line {
  fill: none;
  stroke: var(--sa-line);
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}
```

---

## 6. 结果卡内容层级

顺序固定：

1. 小标签：`社交动物测试` / `仅供娱乐`；
2. 结果名：`我是「省电猫」`；
3. 动物 SVG；
4. 一句话结果；
5. 3 个关键词；
6. 朋友锐评；
7. 适合氛围；
8. 底部说明：`测着玩，但可能有点像`。

其中 1、8 可以弱化；2、3、4、6 是传播核心。

---

## 7. “拒绝平庸”传播约束

Jonathan 补充要求：要激发分享欲，有槽点、有笑点、有梗，可以抽象、癫一点，拒绝平庸。

转成设计约束：

1. 每个结果必须有一个可截图传播的“朋友锐评”；
2. 每只动物必须有一个非普通姿态或道具；
3. 每张分享卡至少有一个轻微不规整元素：歪贴纸、划线、胶带、圈选、弹幕；
4. 文案可以犀利，但不能攻击用户；
5. 视觉可以抽象，但不能影响第一眼读懂结果。

### 7.1 平庸检查

如果一张结果卡只是在说：

> 你比较内向，适合小范围社交。

就是平庸。

要改成：

> 不是不社交，是电量需要精打细算。  
> 朋友锐评：你不是冷，你只是还没加载完。

### 7.2 梗感边界

可以：

- 社交电量；
- 群聊人格；
- 已读但在处理；
- 空气冷掉；
- 启动失败；
- 边界感；
- 躺列表。

不要：

- 羞辱人格；
- 把社恐当病；
- 低俗烂梗；
- 只有小圈层懂的黑话；
- 过度“发疯文学”导致成年用户尴尬。

---

## 8. 前端实现 checklist

交付前检查：

- [ ] 移动端 375px 宽度无横向滚动；
- [ ] 入口页首屏标题、说明、开始按钮可见；
- [ ] 答题页题目不超过 2 行为主，选项可读；
- [ ] 结果页动物名、一句话、朋友锐评优先级正确；
- [ ] 分享卡 1080×1440 导出时中文清晰；
- [ ] 1:1 裁切仍能读懂动物名和一句话；
- [ ] 无活动报名/下载/加群强 CTA；
- [ ] 动物 SVG 可按 token 换色；
- [ ] 4 只代表动物气质可区分；
- [ ] 至少一张结果卡能触发“这不就是你”的评论。

---

## 9. 下一步建议

1. 前端先用 `04-前端样式稿/index.html` 拆成 P0 页面组件；
2. 内容侧补 16 个结果的“朋友锐评”字段；
3. 视觉侧继续扩展剩余 12 只动物线稿；
4. QA 重点测分享卡导出、中文渲染、裁切安全区。
