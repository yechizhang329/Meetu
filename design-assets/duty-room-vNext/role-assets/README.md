# DEPRECATED — 单角色素材图 (role-assets)

**状态**: 已作废 (2026-05-12 15:25)  
**作者**: Phoebe2  
**原任务**: 任务 A — 从 baseline contact sheet r2.1 裁剪 5 个单角色，扩白底到 1080x1080

---

## 作废原因

David 15:23 拍：方案 c（从 baseline r2.1 裁剪+扩白底）的 5 张图因 baseline 本身是 contact sheet（角色间距不足），裁剪时有元素被误裁进/裁出。这验证了 David 14:43 提的"裁切条件不满足"问题。

**具体问题**:
- Baseline contact sheet (1536x1024) 5 角色横排，每列约 307px 宽
- 角色间距过窄（部分装饰元素如猴子的弹窗、刺猬的气泡接近列边界）
- 智能列边界检测 + 连通分量清理虽然移除了大部分跨列污染，但无法完全保证 0 偏差（部分元素可能被误裁）

---

## 文件清单（保留作为执行记录）

- `role-A-octopus.png` (341.8KB, 1080x1080)
- `role-B-cat.png` (193.8KB, 1080x1080)
- `role-C-sloth.png` (280.4KB, 1080x1080)
- `role-D-monkey.png` (317.8KB, 1080x1080)
- `role-E-hedgehog.png` (299.6KB, 1080x1080)

**生成方法**: 方案 c — PIL 确定性裁剪 + 扩白底（0 image2）  
**Commit**: 3a23cc3 (2026-05-12 15:06)

---

## 下一步

等 David 拍新路径：
- 单独生图（5 张独立 text-to-image，成本 +5 image2）
- 重新生 contact sheet（角色间距加大，方便裁剪）
- 前端 CSS clip（直接用 baseline contact sheet，前端裁剪）
- 手动 PS（设计师手动处理）

---

**不要使用本目录下的 5 张图作为生产素材。**
