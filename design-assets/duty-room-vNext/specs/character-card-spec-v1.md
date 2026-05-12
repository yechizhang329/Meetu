# 单角色分享卡片 Spec v1.1

**作者**: Fiona
**时间**: 2026-05-12 14:25（v1.1 更新 14:30）
**SoT**: PRD v2.2 §14 + David 14:22/14:28 拍板参数
**用途**: Phoebe2 设计 5 张单角色分享卡片（用户保存/分享产出）

---

## David 14:22/14:28 拍板参数

- **图片比例**：4:3（横版）
- **底色**：浅米色 #F9F7F3
- **Meetu branding**：底部居中，文案「Meetu 觅遇社」+「Nice to Meetu」（14:28 修正）
- **字体**：统一手写体，但不影响阅读；Ma Shan Zheng 不行，换其他（14:28 修正）

## Layout 结构（从上到下）

1. **顶部**：角色名称大字（例如"硬撑章鱼"）
2. **中部**：角色图（占画面 50-60%，从 baseline contact sheet 裁剪单角色）
3. **下方**：1 句 quote（角色文案，见下）
4. **底部**：Meetu branding 居中（logo + slogan 小字）

---

## 5 角色文案（PRD v2.2 §14.3）

### A 硬撑章鱼
- **角色名**：硬撑章鱼
- **quote**：八条腿都在撑，但身体已经开始变色了。

### B 断电猫
- **角色名**：断电猫
- **quote**：看见了，但电量不支持回复。

### C 躺平树懒
- **角色名**：躺平树懒
- **quote**：进度条在那，人还没启动。

### D 整活吗喽
- **角色名**：整活吗喽
- **quote**：现实回答失效，切到另一个解释系统。

### E 高情商刺猬
- **角色名**：高情商刺猬
- **quote**：表面体面，里子有刺。

---

## 设计要求

1. **角色图裁剪**：从 baseline contact sheet（`Meetu/design-assets/duty-room-vNext/specs/contact-sheet-prompt-v9.1.md` 对应的 r2.1 出图）裁剪 5 个单角色，保留白底 padding，确保角色完整可见
2. **手写体选择**：**站酷快乐体**（David 14:30 暂定），角色名大字 + quote 小字用同一字体
3. **Meetu branding**：
   - 文案：「Meetu 觅遇社」大字 +「Nice to Meetu」小字（David 14:28 修正，不是"觅途"）
   - Logo：如有矢量 logo 文件则用，如无则用文字 branding
   - 位置：底部居中，与底边距约 5-8% 画面高度
4. **底色**：浅米色 #F9F7F3，全画面统一
5. **比例**：4:3 横版（例如 1200x900 或 1600x1200）

---

## 产出清单

- 5 张成品卡片（PNG，4:3，浅米底，含角色图 + 文案 + branding）
- 文件命名：`character-card-A-octopus.png` / `character-card-B-cat.png` / `character-card-C-sloth.png` / `character-card-D-monkey.png` / `character-card-E-hedgehog.png`
- 保存路径：`Meetu/design-assets/duty-room-vNext/character-cards/`

---

## 待补充

- Meetu logo 文件（如有矢量 logo，Phoebe2 直接用；如无，用文字 logo「Meetu 觅途」+ Nice to meetu）
