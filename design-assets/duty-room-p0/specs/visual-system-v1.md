# 心情值班室 P0 视觉系统提案 v1

> 锚定 PRD `2026-05-08-心情值班室-PRD-v0.8-final.md` §5 / §6 / §12 / §13。
> 本文档是 task #28（角色 master sheet）+ task #29（4:5 分享卡底图与安全区）共用的视觉基础。
> 任何后续返修以本提案为基线。

---

## 1. 世界观锁定

**动物员工值班室**：一群小动物在一栋"心情值班室"里上不同的班，每个动物对应一个真实情绪岗位。
- 不儿童化、不商业化、不 AI 塑料、不萌系；
- 调性靠近：纸感小报漫画 + 工位低压荒诞 + 老式办公文具的暖糙感；
- 灵感参照（仅风格锚点，不抄袭）：Loopy 的"工位姿势" + 卡颂动物的轮廓拙朴 + 老式劳保手册的纸印质感。

## 2. 共用视觉语言（4 角色必须遵守）

### 2.1 笔触
- **黑线轮廓**：等粗（不渐变）；线宽对应 1080×1350 画布约 6–8px；
- **纸纹底**：纸张噪点轻度可见，不喧宾夺主；
- **阴影**：仅角色脚下一小块软阴影，不做体积感强光；
- **不要数字毛刺、不要赛博渐变、不要厚涂质感**。

### 2.2 表情
- 圆点眼 + 极简眉/嘴；
- 情绪靠肢体语言（趴桌、单手扶头、背手、低头），不靠夸张表情；
- 禁止"大笑张嘴露牙、闪光泪眼、爆血管"等动漫程式化表情。

### 2.3 道具系统
4 角色共享一套办公文具：
- 工牌、岗位牌、印章、夹板、便利贴、台灯、电话、纸杯、文件堆；
- 每角色再加 1–2 个专属道具（标志物，必出）。

## 3. 色彩规范（提案 — 等 PM 确认）

### 3.1 主色板（4 色 + 1 强调）

| 角色色 | HEX | 用途 |
|---|---|---|
| **暖纸米** | `#F2EAD8` | 全局底色 / 纸张底 |
| **值班黄** | `#F2C744` | 强调 / 岗位牌 / 标语徽章 |
| **墨线黑** | `#1C1A17` | 全部线稿、文字主色 |
| **灰绿辅** | `#7A8B7B` | 阴影、辅助色块 |
| **橙红辅** | `#D7563B` | 警示、印章、关键道具 |

### 3.2 4 角色岗位色（每角色 1 主 1 辅，与共用色板兼容）

| 角色 | 岗位色（主） | 岗位色（辅） | 用途 |
|---|---|---|---|
| 嘴硬鹅 | 警卫蓝 `#3F5C7A` | 拒签红 `#D7563B` | 制服肩章 / 警卫帽 / 拒签章 |
| 低电量猫 | 低电橙 `#E68A3A` | 充电青 `#7AB5B5` | 电池牌 / 充电线 |
| DDL 仓鼠 | 倒计红 `#C43E3E` | 日历米 `#F2EAD8` | 日历 / 倒计时数字 |
| 后台羊驼 | 屏幕灰 `#5C6A75` | 待机绿 `#7A9F6E` | 多窗口屏幕 / 待机灯 |

> 这 13 个 HEX 是 v1 提案；如 PM 通过，所有角色资产、分享卡、首页 hero、favicon 全部按这套生效。

---

## 4. 4 角色定义最低字段（PRD §6.4 完整版）

### 4.1 嘴硬鹅 / 否认部部长

| 字段 | 内容 |
|---|---|
| 角色名 | 嘴硬鹅 |
| 物种/形态 | 灰白家鹅，体型矮胖，长脖子，扁喙 |
| 情绪关键词 | 嘴硬 / 不认 / 装没事 |
| 一句话定位 | 你说什么我都不承认，但我心里清楚。 |
| 标志性视觉道具 | 警卫帽（带檐）、否认部岗位牌、拒签红印章、文件夹 |
| 主色 / 辅色 / 强调色 | 警卫蓝 `#3F5C7A` / 拒签红 `#D7563B` / 暖纸米 `#F2EAD8` |
| 主场景 | 被说中但不认 |
| 主 oneLiner | "我没有，只是刚好很像" |
| 不可重叠对象 | 不与"低电量猫"共用趴桌姿态；不与"后台羊驼"共用工牌站姿 |
| 资产文件路径 | `design-assets/duty-room-p0/role-stubborn-goose-*` |
| 禁止变化点 | 喙永远扁、脖子永远直挺、警卫帽不可换 |

### 4.2 低电量猫 / 电量管理员

| 字段 | 内容 |
|---|---|
| 角色名 | 低电量猫 |
| 物种/形态 | 短毛橘猫，圆脸圆耳，体态松弛 |
| 情绪关键词 | 没电 / 疲惫 / 不想营业 |
| 一句话定位 | 人在，电不在，请勿打扰。 |
| 标志性视觉道具 | 电池牌（电量数字可变）、充电线（拖在身后）、台灯 |
| 主色 / 辅色 / 强调色 | 低电橙 `#E68A3A` / 充电青 `#7AB5B5` / 暖纸米 `#F2EAD8` |
| 主场景 | 不想营业 |
| 主 oneLiner | "电量 3%，请勿叫醒" |
| 不可重叠对象 | 不与"嘴硬鹅"共用扶腰站姿；不与"后台羊驼"共用闭眼姿态 |
| 资产文件路径 | `design-assets/duty-room-p0/role-low-battery-cat-*` |
| 禁止变化点 | 永远是趴/瘫/侧躺三种姿态之一，不立直 |

### 4.3 DDL 仓鼠 / 截止日期专员

| 字段 | 内容 |
|---|---|
| 角色名 | DDL 仓鼠 |
| 物种/形态 | 黄棕色仓鼠，短四肢，圆肚 |
| 情绪关键词 | 焦虑 / 拖延 / 截止前清醒 |
| 一句话定位 | 会做的，但不是现在。 |
| 标志性视觉道具 | 倒计时日历（红字 D-X）、咖啡杯、纸堆、闹钟 |
| 主色 / 辅色 / 强调色 | 倒计红 `#C43E3E` / 日历米 `#F2EAD8` / 墨线黑 `#1C1A17` |
| 主场景 | 期末 DDL |
| 主 oneLiner | "明天交，今天思考" |
| 不可重叠对象 | 不与"嘴硬鹅"共用文件夹道具；不与"低电量猫"共用趴桌姿态（仓鼠是抱头/抓头） |
| 资产文件路径 | `design-assets/duty-room-p0/role-ddl-hamster-*` |
| 禁止变化点 | 必出红字日历或倒计时数字；不戴帽 |

### 4.4 后台羊驼 / 前台正常员

| 字段 | 内容 |
|---|---|
| 角色名 | 后台羊驼 |
| 物种/形态 | 米白长毛羊驼，长脖子，木讷脸 |
| 情绪关键词 | 假装正常 / 表面镇定 / 后台过载 |
| 一句话定位 | 表面嗯嗯，后台报警。 |
| 标志性视觉道具 | 多窗口屏幕（屏幕里有红色叹号）、耳机、工牌、咖啡 |
| 主色 / 辅色 / 强调色 | 屏幕灰 `#5C6A75` / 待机绿 `#7A9F6E` / 暖纸米 `#F2EAD8` |
| 主场景 | 社交局结束后 / 假装在状态 |
| 主 oneLiner | "嗯嗯好的（后台 17 个红点）" |
| 不可重叠对象 | 不与"嘴硬鹅"共用警卫帽；不与"低电量猫"共用瘫坐姿态 |
| 资产文件路径 | `design-assets/duty-room-p0/role-backstage-alpaca-*` |
| 禁止变化点 | 永远长脖子木讷正脸、屏幕里必出红色叹号 |

---

## 5. Master Sheet 出图 prompt（4 角色）

> 出图通道：gpt-image-2（中转 base `https://www.micuapi.ai/v1`）。
> 输出：1024×1024 透明底（v1 阶段先出米白底，v2 用 nano-banana 复刻可换透明底）。
> 重要：**英文 prompt，AI 不出中文字**；所有中文文字（岗位牌、印章、电池数字、日历红字）由前端排版叠加。

### 5.1 共用 style header（所有 prompt 前缀）

```
Character master sheet, hand-drawn black ink outline (uniform 6-8px stroke),
warm beige paper texture background (#F2EAD8), light paper grain visible,
slightly rough, tiny soft shadow under feet only, no rendering, no gradient,
no shiny highlights, no anime sparkle, no plastic 3D look,
flat colors with limited palette, vintage office stationery aesthetic,
tone: low-pressure, absurd, deadpan, quiet humor.
Layout: character turnaround sheet with 3 views (front / 3-quarter / side),
3 expression close-ups in a row, 1 prop set callout in a corner,
small color swatch row at the bottom.
ABSOLUTELY NO TEXT, NO LETTERS, NO NUMBERS, NO LOGOS in the image.
```

### 5.2 嘴硬鹅 master sheet prompt

```
{{style_header}}
Subject: a chubby grey-and-white domestic goose office worker, short body, long straight neck,
flat orange beak slightly turned away in denial, tiny round black eyes looking sideways,
wearing a navy security cap (#3F5C7A) with stiff brim,
small navy security shoulder cape, holding a clipboard and a red rubber stamp (#D7563B),
posture: arms crossed, neck stiff, refusing to look at viewer.
Expressions across the row: arms crossed denial / shrug "wasn't me" / glance away pretending to be busy.
Prop callout: navy security cap, red REJECTED-style ink stamp (no letters), clipboard, ID badge with blank face.
Personality: the office Denial Officer, refuses to admit anything, mouth-stubborn but inwardly aware.
```

### 5.3 低电量猫 master sheet prompt

```
{{style_header}}
Subject: a short-haired orange tabby cat office worker, round face, round ears, droopy whiskers,
slumped body language, eyes half-closed, very low energy posture,
wearing a small low-battery-orange (#E68A3A) work apron / vest,
holding a small flat battery-shaped sign in one paw (no number on it — battery icon only),
a teal (#7AB5B5) charging cable trailing on the floor behind the cat.
Posture: slouched on a desk corner, head propped on one paw.
Expressions across the row: eyes half-closed flat / face-down on desk / slow blink "leave me alone".
Prop callout: battery icon sign (blank, no number), coiled charging cable, small office desk lamp, paper coffee cup.
Personality: the office Battery Manager, runs on 3% energy, refuses to socialize.
```

### 5.4 DDL 仓鼠 master sheet prompt

```
{{style_header}}
Subject: a small yellow-brown hamster office worker, short limbs, round belly, big cheek pouches,
wide-open black eyes (panicked-but-functional),
clutching a paper calendar page with a big red rectangle (no numbers, just a red block — text overlay later),
a paper coffee cup beside it, paper stack collapsing under elbow,
small old-school analog alarm clock next to it.
Posture: hunched over the desk, both paws gripping the calendar, fur slightly messy.
Expressions across the row: wide-eyed staring at calendar / face-palm with both paws / forced focus chewing pen.
Prop callout: red-block calendar (no numbers), alarm clock, paper coffee cup, leaning paper stack.
Personality: the office Deadline Specialist, always two days late and one coffee deep.
```

### 5.5 后台羊驼 master sheet prompt

```
{{style_header}}
Subject: a tall cream-white long-haired alpaca office worker, very long neck,
deadpan front-facing face with tiny eyes and a flat soft mouth, expression: "everything is fine",
wearing thin grey on-ear headphones (#5C6A75) and a blank office ID badge on a lanyard,
in front of a 3-window monitor on a desk; each monitor screen shows a small red exclamation mark icon
(no letters, no UI text — just the red ! shape inside a square).
Posture: standing straight, both hooves resting on the desk, neck perfectly vertical.
Expressions across the row: blank smile "all good" / slow blink / one ear twitch (still smiling).
Prop callout: 3-monitor setup with red ! icons, headphones, blank ID badge, paper coffee cup.
Personality: the office Front-Desk Normalcy Officer, says "yes yes" while 17 alerts blink in the back.
```

---

## 6. 出图工作流

1. 用上述 prompt 经 `gpt-image-2` 出第一版 master sheet（4 张 1024×1024）；
2. PM 验风格统一性 → 通过则进入正式素材；不通过则锁定问题并迭代 prompt；
3. master sheet 通过后，为每个角色 × 主场景 用 master sheet 作为 reference image，再生成场景底图（task #29）；
4. 全部资产命名严格按 PRD §12.6；
5. 所有出图记录（prompt / image url / 评价）写到 `Meetu/design-assets/duty-room-p0/specs/generation-log.md`。
