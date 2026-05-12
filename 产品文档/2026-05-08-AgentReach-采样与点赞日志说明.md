# Agent-Reach 采样与互动日志说明

日期：2026-05-08  
任务：大学生生活方式与 Meetu 需求匹配 full-scale 研究

---

## 1. 数据路径

原始/处理数据：`~/.agent-reach/meetu/student-lifestyle-2026-05-08/`

关键文件：

- `processed/search_records.jsonl`：搜索原始解析记录；
- `processed/dedup_notes.json`：去重笔记；
- `processed/selected_reads.json`：深读样本；
- `processed/read_records.jsonl`：深读解析记录；
- `processed/comment_records.jsonl`：评论解析记录；
- `processed/like_log.json`：点赞日志；
- `tmp/student-research-fullscale/analysis/summary_numbers.json`：分析汇总；
- `tmp/student-research-fullscale/analysis/group_summary.csv`：分组统计；
- `tmp/student-research-fullscale/analysis/bucket_summary.json`：主题桶统计。

---

## 2. 调用规模

| 类型 | 数量 |
|---|---:|
| 搜索原始记录 | 4899 |
| 去重笔记 | 3348 |
| 深读笔记 | 300 |
| 评论笔记 | 230 |
| 评论/子评论 | 4404 |
| 点赞成功 | 29 |

---

## 3. 点赞边界

Jonathan 授权后，允许“看到合适的就点”，但需要控制总量并模拟真人浏览。执行边界：

- 总量上限 30，实际 29；
- 只点赞高相关、正向、非争议、非硬广内容；
- 不点赞明显竞品广告、诈骗/避雷、强恋爱导流、敏感争议；
- 不评论、不关注、不收藏、不发布。

---

## 4. 风险提示

本轮使用 `Meetu 小助理` 品牌账号。虽然 Jonathan 判断浏览相关内容有助于账号画像，后续仍建议：

1. 不要同日继续高频调用；
2. 下一轮 full-scale 尽量使用无品牌调研小号；
3. 品牌号只用于运营接待、发帖、低频真实互动；
4. 所有自动互动都需要单次明确授权。
