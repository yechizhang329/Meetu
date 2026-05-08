# prompt v3.5 生产补丁（4 条角色级轻修）

> 来源：Fiona PM 试金石验收 (会议室 msg `c895be63`) — v3.4 通过但生产前需 4 条轻修
> 适用范围：在 `prompt-review-v3.4.md` 的 §1 style header + §2 negative 基础上，**针对每个角色 body 段做差量补丁**
> 状态：补丁直接生效，不需要再开新一轮 PM 审核（这 4 条都是 PM 已经在 `c895be63` 里点过名的）

---

## 角色 1：嘴硬鹅 — 1 条轻修

> PM 评：可用，但警卫帽略强；保留帽子，不再叠制服 / 岗位符号。

**生产补丁**：在 §4.1 body 末尾、`Nothing else:` 之前补一句：

```
Do NOT add any extra uniform pieces beyond the navy security cap (no
shoulder cape, no badge, no armband, no belt, no insignia). The cap is
the only "duty" symbol on the goose.
```

预期效果：保留"值班"概念，但不让模型自由发挥往警卫制服叠加。

---

## 角色 2：低电量猫 — 0 修，作为正样本

> PM 评：⭐ 风格上限正样本，最稳。

**生产补丁**：无。后续衍生资产（情绪变体 / 多场景 share 卡）以此为 reference image，复用 v3.4 prompt body 不变。

---

## 角色 3：DDL 仓鼠 — 2 条轻修

> PM 评：方向对，但略偏儿童绘本 / 细节多。

**生产补丁 A：删第二道具**

`prompt-review-v3.4.md` §4.3 body 现有 `Only these props in frame: the calendar with red block + 3 stacked sticky notes; a single chewed-on pen.` 改成：

```
Only these props in frame:
- the paper desk calendar with the big red block and 3 stacked blank sticky notes

Nothing else: NO chewed pen, NO coffee cup, NO clock, NO paper stack, NO plant,
NO chair. The hamster + the calendar is the entire scene.
```

**生产补丁 B：减绘本细节**

在 body 开头 `CRITICAL:` 后追加：

```
CRITICAL: NOT children-book art, NOT picture-book softness. The fur should
be drawn with as few hairs / fluff lines as possible — flat solid color
fur, NOT detailed strokes. The calendar should be a simple flat rectangle
shape, NOT a richly drawn desk diary.
```

预期效果：仓鼠回到"状态扁平角色"，不滑向儿童绘本。

---

## 角色 4：后台羊驼 — 3 条轻修

> PM 评：需轻修后再作生产标准；面板缩小、桌子变轻、姿态更僵。

**生产补丁 A：面板缩小抽象化**

§4.4 body 现有 `THREE simple dark rectangles standing upright like abstract panels — each rectangle has ONE small RED ROUND lamp glowing on it` 改成：

```
THREE small dark abstract panels (smaller than realistic monitors, more
like simple floating signage tiles than computer screens) — each tile has
ONE small red round lamp on it. The tiles are kept small enough that they
do NOT dominate the frame and they do NOT read as a real desktop computer
setup.
```

**生产补丁 B：桌面降权**

`On the desk sits a paper coffee cup` 上方插入：

```
The desk is drawn as a simple thin horizontal line / a minimal flat
surface, NOT a heavy office desk with bulk. The desk takes very little
visual weight in the lower-third area.
```

**生产补丁 C：身体姿态更木僵**

`Caught-in-the-act state action: standing perfectly straight ... looks composed.` 改成：

```
Caught-in-the-act state action: standing rigidly upright, body slightly
too stiff, both front legs locked straight beside the body (NOT relaxed,
NOT animated), neck perfectly vertical, deadpan front-facing polite small
smile, tiny dot eyes — the body language reads as "trying very hard to
look composed", which IS the joke.
```

预期效果：前台正常 / 后台报警的反差感更强；桌面工位感大幅减弱。

---

## 何时使用

后续任何"以 v3.4 调性继续生产更多 share 卡 / 工位特写 / 情绪变体"的批次，**生产前检查**：

| 角色 | 是否套补丁 |
|---|---|
| 嘴硬鹅 | ✅ 必套（§角色 1） |
| 低电量猫 | ❌ 不需要 |
| DDL 仓鼠 | ✅ 必套（§角色 3 A + B） |
| 后台羊驼 | ✅ 必套（§角色 4 A + B + C） |

补丁是**累加**到 v3.4 prompt body，不替换原文。最终 prompt = v3.4 style header + v3.4 body + 本文件补丁 + v3.4 negative。

## v3.5 生产计划

> ⚠️ 任何新一轮出图前，仍按 Fiona "先审 prompt 再开 call" 规则：
> 即使是套用本补丁的简单生产，也要先把"补丁后 prompt 全文 + 计划 call 数 + 验证问题"贴会议室 thread，等 PM OK 再跑。
> 本文件只是补丁配方，不是出图绿灯。
