# 心情值班室｜Contact Sheet 批 1 Review

日期：2026-05-09  
评审人：Fiona  
对象：#设计讨论Design task #31 / Phoebe2 4 角色 3×2 contact sheet

---

## 总结论

**批 1 通过，可进入 crop / rembg / 工程对接。**

4 个角色 main 都至少有 1 个可进入 H5 v1.0 的主资产，因此通过“≥3 main 过”的 gate。

但这批不是 final 传播图，只是 H5 动态输出的基础角色资产。后续 flagship 带字图不能直接沿用这批 contact sheet 构图，需要重新按“一张完整输出图”审 prompt。

---

## 单角色判定

### 1. 嘴硬鹅：通过 A-

推荐主资产：`stubborn-goose-main-v1.png`  
备选：`stubborn-goose-pose3-v1.png`、`stubborn-goose-emo2-v1.png`

为什么过：

- main 有“过度真诚 + 心虚”的嘴替关系；
- 小帽子没有压成岗位设定；
- pose3 背身藏手很适合嘴硬/不承认场景；
- emo2 的斜眼表情可用于“我没有不回 / 我没多想”等轻表情。

问题：

- main 仍偏规整站姿，不是最强一帧梗；
- 后续最终输出图需要靠文字和局部放大打破设定图感。

处理：

- 允许进入 H5 v1.0；
- 不需要补 call。

---

### 2. 低电量猫：通过 A

推荐主资产：`low-battery-cat-main-v1.png`  
备选：`low-battery-cat-pose1-v1.png`、`low-battery-cat-pose3-v1.png`

为什么过：

- main 一眼就是“人在，电不在”；
- 不依赖电池、充电线、UI 符号；
- pose3 缩成球非常适合“想安静/勿扰”；
- 整体比其他角色更自然、更像用户会发。

问题：

- main 没有 task #30 低电量猫那么“瘫”，但足够可用；
- final flagship 时可以参考 task #30 的瘫软程度。

处理：

- 允许进入 H5 v1.0；
- 作为当前 H5 默认首发角色主资产。

---

### 3. DDL 仓鼠：通过 A-

推荐主资产：`ddl-hamster-main-v1.png`  
备选：`ddl-hamster-pose1-v1.png`、`ddl-hamster-pose3-v1.png`

为什么过：

- 仓鼠辨识度明显提升，脸颊、短四肢、圆肚成立；
- 没有日历、红块、时钟、教育海报感；
- main 能承载“会做的，不是现在”；
- pose1 趴着不动很适合拖延场景。

问题：

- 有一点可爱化，但没有到幼态/卖萌；
- main 脚边白纸可以保留，但不要在 H5 中强调为任务纸。

处理：

- 允许进入 H5 v1.0；
- 不需要补 call。

---

### 4. 后台羊驼：通过 B+

推荐主资产：`backstage-alpaca-main-v1.png`  
备选：`backstage-alpaca-emo2-v1.png`

为什么过：

- 去掉了屏幕、红灯、软件 UI；
- 礼貌撑住的表情方向成立；
- 乱涂面积被压住，能承载“表面/后台”文案。

问题：

- 6 个姿态差异较弱；
- main 还偏“站着的羊驼”，嘴替瞬间感弱于前三个角色；
- 需要靠排字和对比文案增强“前台/后台”。

处理：

- 允许进入 H5 v1.0；
- 不追加 call；
- flagship 图如要做后台羊驼，需单独重审 prompt，不能直接用 contact 构图。

---

## 给工程的主资产映射

| roleId | main asset | backup asset | 用途 |
|---|---|---|---|
| stubborn_goose | `stubborn-goose-main-v1.png` | `stubborn-goose-pose3-v1.png` | 嘴硬否认 / 消息不回 |
| low_battery_cat | `low-battery-cat-main-v1.png` | `low-battery-cat-pose3-v1.png` | 低电量 / 勿扰 / 不想出门 |
| ddl_hamster | `ddl-hamster-main-v1.png` | `ddl-hamster-pose1-v1.png` | DDL / 拖延 |
| backstage_alpaca | `backstage-alpaca-main-v1.png` | `backstage-alpaca-emo2-v1.png` | 表面正常 / 被安排 |

---

## 下一步

### Phoebe2

- 可以进入本地 rembg / 透明 PNG 清理；
- 将 crop 产物入库为 `contact-crops`；
- 给 Dave 交付每角色主资产 + backup 资产路径；
- 不开补救 call；
- 批 2 flagship 带字图继续暂停，等 Dave Canvas demo 和首发图 prompt 再审。

### Dave

- H5 v1.0 可先用这 4 张 main asset 做 Canvas demo；
- 低电量猫作为首发默认角色；
- 后台羊驼需要给文字更高权重，避免仅靠站姿表达。

---

## PM 判定

**task #31 批 1 通过。**  
不是 final 传播图通过，而是“基础角色资产可进入 H5 v1.0”通过。
