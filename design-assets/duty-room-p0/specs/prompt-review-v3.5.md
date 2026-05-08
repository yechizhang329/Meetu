# v3.5 prompt 送审包（DDL 仓鼠 + 后台羊驼 rework）

> 目的：PM `c895be63` 验收时 DDL 仓鼠 / 后台羊驼被点出需要 v3.5 补丁。本包把补丁应用后的完整 prompt 整理成"送审待批"状态，PM OK 后即可立即跑 2 calls，不占用对话流时间。
> **本文件不绿灯出图**。送审在会议室 thread 进行；PM 显式 OK 才允许调 API。
> 来源：`prompt-review-v3.4.md` §1 + §2 + `prompt-v3.5-production-notes.md` 角色 3 / 角色 4

---

## 1. 本批 call 预算

| # | 资产 | 用途 | call |
|---|---|---|---|
| 1 | `share-ddl-hamster-final-ddl-v3.5.png` | 替代 v3.4 DDL 仓鼠（删第二道具 + 减绘本细节） | 1 |
| 2 | `share-backstage-alpaca-after-socializing-v3.5.png` | 替代 v3.4 后台羊驼（面板抽象化 + 桌面降权 + 姿态更僵） | 1 |
| **合计** | | | **2 calls** |

**预算上限**：2 calls。失败不自动 retry，人工裁决。
**不重跑的角色**：嘴硬鹅 v3.4 + 低电量猫 v3.4 已 PM 评级可用 / 上限正样本，本轮不动。

## 2. 本批要验证的唯一问题

> v3.5 补丁能否把 DDL 仓鼠和后台羊驼也拉到低电量猫的"风格上限正样本"水平？

具体到：
1. DDL 仓鼠去掉啃笔 + 扁平化毛发后，是否仍能一眼读出"DDL 焦虑"？
2. 后台羊驼把屏幕换成抽象立式面板 + 桌面降权 + 姿态更僵后，"前台正常 / 后台报警"反差是否更强？

## 3. 完整 prompt（已套补丁）

每张完整 prompt = §共用 style header（v3.4 §1 不变）+ §3.X body + §共用 negative（v3.4 §2 不变）。

下面只列 body 段，便于 PM 对照补丁审。

### 3.1 DDL 仓鼠 v3.5

> 补丁：删第二道具 `chewed pen`；CRITICAL 段加扁平化毛发 + 简化日历

```
Subject: a small yellow-brown hamster state stand-in animal. CRITICAL:
smaller eyes than a kawaii hamster (avoid huge shiny round eyes), visible
dark under-eye circles, slightly messy fur, deadpan exhausted face — NOT
cute, NOT mascot, NOT children-book art, NOT picture-book softness. The
fur should be drawn with as few hairs / fluff lines as possible — flat
solid color fur, NOT detailed strokes. The calendar should be a simple
flat rectangle shape, NOT a richly drawn desk diary.

Caught-in-the-act state action: hunched over a desk, both paws clutching
a paper desk calendar that has a big red rectangular block on today's date
(no numbers, just a red block). On top of that red block, three blank
beige sticky notes are stacked, each one half-covering the previous one —
every sticky note is completely blank, the hamster keeps adding a new
blank sticky note on top of the previous blank one (gag: the postponement
loop is purely visual, no text).

Only these props in frame:
- the paper desk calendar with the big red block and 3 stacked blank sticky notes

Nothing else: NO chewed pen, NO coffee cup, NO clock, NO paper stack, NO
plant, NO chair. The hamster + the calendar is the entire scene. Lower
40% of the frame is calm empty beige paper, suitable for later text overlay.
```

### 3.2 后台羊驼 v3.5

> 补丁：面板抽象化缩小 / 桌面降权 / 姿态更僵

```
Subject: a tall cream-white long-neck alpaca state stand-in animal,
wearing thin grey on-ear headphones (#5C6A75).

Caught-in-the-act state action: standing rigidly upright, body slightly
too stiff, both front legs locked straight beside the body (NOT relaxed,
NOT animated), neck perfectly vertical, deadpan front-facing polite small
smile, tiny dot eyes — the body language reads as "trying very hard to
look composed", which IS the joke.

Behind the desk, instead of real monitors, there are THREE small dark
abstract panels (smaller than realistic monitors, more like simple
floating signage tiles than computer screens) — each tile has ONE small
red round lamp on it. The tiles are kept small enough that they do NOT
dominate the frame and they do NOT read as a real desktop computer setup.

The desk is drawn as a simple thin horizontal line / a minimal flat
surface, NOT a heavy office desk with bulk. The desk takes very little
visual weight in the lower-third area.

On the desk sits a paper coffee cup, cold flat coffee surface, no steam
rising.

The contrast between the alpaca's polite smile and the row of three red
round lamps behind IS the joke.

Only these props in frame: the thin grey headphones (worn), three small
dark abstract panels each with one red round lamp, the cold paper coffee
cup, the minimal desk line.

Nothing else: NO ID badge, NO lanyard, NO plant, NO chair back, NO extra
papers, NO real monitor / screen frame / UI display, NO heavy office
desk. Lower 40% of the frame is calm empty beige paper, suitable for
later text overlay.
```

## 4. 等审

请 PM 审 §3.1 / §3.2 是否覆盖补丁全部要点，OK 后开 2 calls。

任何修改先在会议室 thread 改完再送审，**始终先审再跑**。
