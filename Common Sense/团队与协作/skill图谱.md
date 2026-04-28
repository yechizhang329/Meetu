# Meetu Skill 图谱

> **目的**：明确所有skill的归属/触发条件/依赖关系/配套关系——避免"AI自己猜该调用哪个skill"。
>
> **维护责任**：Fiona (PM) / 新增/废弃skill时同步更新
> **生效**：2026-04-29

---

## 1. Skill图谱总览

```
┌─────────────────────────────────────────────────────┐
│              战略层（决策方法论）                    │
│  qiushi-skill 系列 (毛选方法论 8个)                 │
│  ├── arming-thought（实事求是 总原则）              │
│  ├── contradiction-analysis（矛盾分析）             │
│  ├── investigation-first（调查研究）                │
│  ├── concentrate-forces（集中兵力）                 │
│  ├── overall-planning（统筹兼顾）                   │
│  ├── spark-prairie-fire（星火燎原/根据地）          │
│  ├── protracted-strategy（持久战略）                │
│  ├── mass-line（群众路线）                          │
│  ├── practice-cognition（实践认识论）               │
│  ├── criticism-self-criticism（批评与自我批评）     │
│  └── workflows（多skill编排）                       │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│              执行层（按职能分组）                    │
│                                                      │
│  ┌──── 运营/内容产出 (Lucy主用) ────┐               │
│  │  write-xiaohongshu (流程框架)    │               │
│  │   ├─→ xhs-language-research      │               │
│  │   │    (语感真实性 25样本规范)   │               │
│  │   └─→ xhs-content-checklist     │               │
│  │        (数据指标检查 A1-D9)      │               │
│  │                                   │               │
│  │  xiaohongshu-note-analyzer       │               │
│  │  (拆解爆款笔记)                  │               │
│  └──────────────────────────────────┘               │
│                                                      │
│  ┌──── 设计/视觉 (Phoebe2主用) ─────┐               │
│  │  xiaohongshu-cover-generator     │               │
│  │  xiaohongshu-images              │               │
│  │  graphic-layout                  │               │
│  │  brand-designer                  │               │
│  │  brand-identity                  │               │
│  │  ui-ux-designer                  │               │
│  │  frontend-design                 │               │
│  │  infographic                     │               │
│  │  landing-page-design             │               │
│  │  better-icons                    │               │
│  │  motion / nano-banana-pro        │               │
│  │  image2-prompt-library           │               │
│  └──────────────────────────────────┘               │
│                                                      │
│  ┌──── 产品定义 (Fiona主用) ────────┐               │
│  │  activity-product-definition     │               │
│  │  (活动产品定义 SOP)              │               │
│  └──────────────────────────────────┘               │
│                                                      │
│  ┌──── 通用工具 ─────────────────────┐              │
│  │  copywriting / gtm-copywriter    │               │
│  │  copywriting-skills              │               │
│  │  synthesize-research             │               │
│  │  psychologist-analyst            │               │
│  │  xiaohongshu (MCP工具集)         │               │
│  │  emoji-sticker-generation        │               │
│  │  find-skills                     │               │
│  └──────────────────────────────────┘               │
└─────────────────────────────────────────────────────┘
                        ↑
┌─────────────────────────────────────────────────────┐
│              资产层（数据/记忆）                     │
│  Common Sense L1-L5（项目大脑）                     │
│  Agent个人 MEMORY.md（个人记忆）                    │
│  samples/（skill研究原始数据）                      │
└─────────────────────────────────────────────────────┘
```

---

## 2. Skill依赖关系（哪个依赖哪个）

| Skill | 前置依赖 (depends-on) | 触发条件 (triggers-on) |
|-------|---------------------|---------------------|
| **write-xiaohongshu** | xhs-language-research / xhs-content-checklist | 写XHS笔记 |
| **xhs-language-research** | （无 是底层规范） | 写大学生XHS文案前 / review时 / 新样本入库 |
| **xhs-content-checklist** | （无） | XHS文案发布前自查 |
| **xiaohongshu-cover-generator** | 品牌共识/视觉资产生成标准 | 出XHS封面 |
| **image2-prompt-library** | AGENTS-PROTOCOL / 品牌共识 / 本周聚焦 | 写GPT Image 2 prompt / XHS封面 / 聊天截图风 / 信息图 / 活动海报 |
| **activity-product-definition** | 产品定位 / 商业模型 | 设计/审视活动产品 |
| **qiushi-skill:contradiction-analysis** | qiushi-skill:arming-thought | 战略矛盾分析 |
| **qiushi-skill:workflows** | 全套qiushi-skill | 多skill串联战略分析 |
| **brand-designer / brand-identity** | 品牌共识/品牌标准 | 品牌设计 |

---

## 3. Skill触发场景（什么时候用哪个）

### 场景A：写一条小红书帖子

```
触发 → write-xiaohongshu (流程总指挥)
       ├── 步骤1: 调研同类爆款 → xiaohongshu-note-analyzer
       ├── 步骤2: 写文案前 → xhs-language-research (强制 大学生场景)
       ├── 步骤3: 文案产出 → copywriting-skills + 自身知识
       ├── 步骤4: 自查 → xhs-content-checklist (强制)
       ├── 步骤5: 出封面 → xiaohongshu-cover-generator
       └── 步骤6: 发布 → xiaohongshu MCP
```

### 场景B：做战略级决策

```
触发 → qiushi-skill:arming-thought (总原则)
       ├── 矛盾不清 → contradiction-analysis
       ├── 信息不足 → investigation-first
       ├── 资源紧张 → concentrate-forces
       ├── 多目标平衡 → overall-planning
       ├── 从零起步 → spark-prairie-fire
       ├── 长期任务 → protracted-strategy
       ├── 复盘审查 → criticism-self-criticism
       └── 多个串用 → workflows
```

### 场景C：设计一个视觉资产

```
触发 → 品牌共识/视觉资产生成标准 (品牌前置)
       ├── Logo/品牌身份 → brand-designer / brand-identity
       ├── XHS封面 → xiaohongshu-cover-generator
       ├── GPT Image 2文字/截图/信息图 → image2-prompt-library
       ├── 信息图 → infographic
       ├── 落地页 → landing-page-design
       ├── 字体/排版 → web-typography / graphic-layout
       └── 评估 → ui-audit / web-design-reviewer
```

### 场景D：定义/迭代一个产品功能

```
触发 → activity-product-definition (产品SOP)
       ├── 产品定位前置 → Common Sense L1
       └── 数据驱动 → Common Sense L4
```

---

## 4. 跨Agent的Skill使用

### Fiona (PM)
- **主用**：qiushi-skill 全套 / activity-product-definition / synthesize-research / find-skills
- **review时**：xhs-language-research / xhs-content-checklist （审Lucy产出）
- **协调时**：所有skill都可调用 但具体执行交给对应agent

### Lucy (运营)
- **主用**：write-xiaohongshu / xhs-language-research / xhs-content-checklist / xiaohongshu-note-analyzer / copywriting-skills
- **不用**：qiushi-skill战略系列（PM负责）/ 设计skill（Phoebe2负责）/ 编程skill（Dave负责）

### Phoebe2 (设计)
- **主用**：xiaohongshu-cover-generator / image2-prompt-library / brand-designer / ui-ux-designer / frontend-design / infographic / landing-page-design / web-typography / motion / nano-banana-pro
- **不用**：内容产出skill（Lucy负责）/ 战略skill（PM负责）/ 编程skill（Dave负责）

### Dave (程序员)
- **主用**：web-component-design / frontend-design / landing-page-design（实现层面） / motion（前端动画实现）
- **配合Phoebe2**：拿到Phoebe2的设计稿后做代码实现 设计先行→代码落地
- **不用**：内容产出skill（Lucy负责）/ 战略skill（PM负责）/ 视觉创意skill（Phoebe2负责）/ 运营文案skill

---

## 5. Skill图谱的演进规则

### 新增skill时
1. 创建在 `Meetu/.agents/skills/<skill-name>/SKILL.md` 或引用系统skill
2. 在SKILL.md的frontmatter里明确标注：
   - `triggers`: 什么场景应该自动调用
   - `depends-on`: 前置依赖
   - `used-by`: 哪些agent用
3. 更新本图谱 + AGENTS-PROTOCOL.md

### 废弃skill时
1. 在 `决策Log/` 记录废弃原因
2. 从图谱里移除
3. 检查所有依赖该skill的skill并更新

### Skill升级版本时
1. 主SKILL.md保留版本历史表（v1→v2→...）
2. 详细原始数据归档到对应日期 `samples/raw-*.md`
3. 在决策Log里说明升级触发原因

---

## 6. 当前Skill图谱状态评估

按skill graph 2.0原则自审：

| 原则 | 状态 |
|------|------|
| Skill依赖关系显式化 | ✅ 本文件已显式化 |
| Skill触发条件标准化 | 🟡 部分skill的description有 / 大多数没标 |
| Skill自带逻辑/状态 | ✅ xhs-language-research是范本（带主题路由+判定标准） |
| Skill图谱可视化 | ✅ 本文件提供 |
| 自动retrieval | ❌ 现在靠agent判断 / 等skill>15个时考虑GoS式机制 |

**当前不足**：
1. 大部分skill的frontmatter里没有标准化的`triggers`/`depends-on`字段
2. 没有自动retrieval机制（手动按本图谱调用）
3. 系统skill（~/.claude/skills/）跟项目skill（Meetu/.agents/skills/）混用 没统一索引

**优先改进**：
1. 给Meetu/.agents/skills/下每个SKILL.md补 `triggers`/`depends-on` 字段
2. 等skill>15个时考虑迁移到GoS式自动retrieval

---

## 7. 程序员Dave的skill需求 — 在开发层面跟整体项目的关系

Dave是Meetu团队的**程序员agent** 负责产品代码实现。

**当前现状**：Meetu repo还没有源码导入（只有产品/设计文档）。Dave以后接手代码层时 需要明确他**在开发层面**跟整体项目（Common Sense + 其他agent）的关系。

### 7.1 当前可用skill（Dave启用时立即可调）

| Skill | 触发场景 |
|-------|---------|
| `web-component-design` | 实现UI组件库 |
| `frontend-design` | 整体前端架构/组件实现 |
| `landing-page-design` | 落地页前端实现 |
| `motion` | 前端动画实现 |
| `web-typography` | 字体和排版前端实现 |

### 7.2 待新增skill（真实场景驱动）

| 待新增 | 触发场景 | 优先级 |
|--------|---------|------|
| `wechat-miniprogram-dev` | 微信小程序开发SOP | 源码导入后立即 |
| `webview-cms-html` | webview+inline CSS适配（参考已有的wechat-cms-html-adapter） | 实现子页CMS模板时 |
| `git-workflow` | Meetu repo的提交/PR/review规范 | 源码导入时 |
| `code-review-sop` | 代码review流程（Dave自查→PM/决策层确认） | 第一次PR时 |
| `bug-debugging-sop` | bug定位/复现/修复SOP | 出现首个prod bug时 |
| `deployment-checklist` | 上线前检查清单 | 准备发版时 |
| `tech-decision-log` | 技术决策记录SOP（写回CS决策Log） | 做架构选择时 |

### 7.3 源码导入后的目录结构规划（建议）

```
Meetu/
├── Common Sense/         # 项目大脑（已有）
├── .agents/skills/       # skill包（已有）
├── 上线前内容产出/        # 内容资产（已有）
├── 设计语言参考/          # 设计资产（已有）
├── src/                  # 🆕 源码（Dave导入后）
│   ├── miniprogram/      # 微信小程序
│   ├── cms-templates/    # webview子页模板
│   └── shared/           # 共享代码
├── tests/                # 🆕 测试代码
└── deployments/          # 🆕 部署配置
```

源码导入后 Dave是 `src/` 目录的主要责任人。

### 7.4 代码层跟整体项目的双向关系

**CS → Code**（Dave查CS指导开发）：
- L1产品定义/产品现状.md的技术约束 → Dave遵守（webview全inline CSS / 微信支付限额 / 学信网API）
- L1产品定位.md的产品三层结构 → Dave按这个架构组织代码
- L1视觉资产生成标准.md → Dave实现UI时遵守
- L2项目状态/本周聚焦.md → Dave知道当前优先级
- L3决策Log → Dave查历史技术决策

**Code → CS**（Dave把开发洞察写回CS）：
- 技术决策（架构选型/重大重构/外部依赖选择）→ 写回 `决策Log/2026-MM.md`
- 发现的产品现状变化（如新技术约束）→ 更新 `L1产品定义/产品现状.md`
- 性能/稳定性数据 → 写到 `L4数据归档/技术指标.md`（待建）

**这个双向关系是关键**——不能让代码层跟产品层脱节。

### 7.5 Dave跟其他Agent的协作

```
Phoebe2 ──设计稿/prompt──► Dave ──代码实现──► 产品上线
   ↑                                                ↓
   └────────────────视觉规范反馈────────────────────┘

Fiona ──产品需求/SPEC──► Dave ──技术评估/排期──► Fiona
   ↑                                                ↓
   └────────────────技术约束反馈────────────────────┘

Dave ──技术约束告知──► Lucy（运营内容设计要避开webview限制）

Dave ──bug/性能问题──► Fiona（PM协调） / Jonathan/DavidC（决策）
```

**关键协作规则**：
- Phoebe2出设计稿前要确认Dave能实现（不要做Dave说做不了的设计）
- Fiona提产品需求前要查产品现状.md的技术约束（不提违反约束的需求）
- Dave遇到任何技术决策必须记录到决策Log（不能在channel里聊完就完）

### 7.6 Dave启动后必读

跟其他agent一样：
1. `Meetu/AGENTS-PROTOCOL.md`
2. `Meetu/Common Sense/项目状态/本周聚焦.md`
3. `Meetu/Common Sense/团队与协作/skill图谱.md`（本文件 第7节是Dave专属）

**额外必读**（Dave特有）：
4. `Meetu/Common Sense/产品定义/产品现状.md` — 技术约束
5. `Meetu/Common Sense/产品定义/产品定位.md` — 三层产品结构
6. `Meetu/Common Sense/品牌共识/视觉资产生成标准.md` — UI实现规范
7. `Meetu/Common Sense/决策Log/` — 历史技术决策

---

## 8. DavidC（创始人/CMO）的skill需求

DavidC是创始人 后续会做：
- 武汉地推 / 主理人面试 / 商家BD
- 用户访谈
- 投资人沟通
- 数据分析/复盘

可能需要的新skill方向：
- **interview-conducting** — 用户访谈/主理人面试SOP
- **investor-communication** — 投资人沟通话术框架
- **data-analytics** — XHS+群+活动数据分析
- **field-research** — 武汉地推/调研SOP

这些属于"待新增"——等DavidC明确需求后再建。**现在不建空skill 等真实场景驱动**。

---

## 9. 跟整体项目的关系

skill图谱不是孤立的——它是Common Sense系统的延伸：

| Common Sense层 | Skill如何配合 |
|--------------|------------|
| L1 静态认知 | 给skill提供事实基础（如xhs-language-research需要"用户认知"层做依据） |
| L2 项目状态 | 决定本周哪些skill高频使用（本周聚焦XHS起号 → write-xiaohongshu系列高频） |
| L3 决策Log | 记录skill升级/废弃的原因 |
| L4 数据归档 | 给skill提供反馈数据（如XHS数据回流到xhs-language-research升级判断） |
| L5 团队与协作 | 定义谁能用哪些skill（本图谱第4节） |

---

## 版本历史

| 版本 | 日期 | 变更 |
|------|------|------|
| v1 | 2026-04-29 | 初版 — 基于Jonathan指示对skill graph 2.0原则借鉴 |
