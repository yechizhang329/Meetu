# 社交动物测试结果页软营销 CTA 设计 v1

## 目标

在社交动物测试结果页底部增加一个轻量 Meetu/觅遇社承接卡。它只出现在结果页正文流里，**不进入分享卡**，不影响用户保存/发群的主行为。

这张卡的角色不是广告 banner，而是测完之后的“顺手下一步”：如果用户刚好想找一点真实朋友局，可以知道去哪里搜。

## 产品边界

### 必须

- 放在结果页底部，建议在分享图预览之后、footer 之前；
- 视觉和 H5 一致：桌面便签、纸张、黑线、轻微歪斜；
- 文案低压、短、像测试结果的一部分；
- 可做成 mock 搜索条；
- 不进入 `ShareCard`，避免污染用户截图传播。

### 禁止

- 不放二维码；
- 不写下载、报名、进群、立即加入；
- 不做大 logo / 广告 banner；
- 不使用“精准匹配”“高质量交友”“脱单”等油腻词；
- 不用强 CTA 按钮样式，避免和“发给朋友看”主按钮抢行为。

## 推荐文案

主文案：

```text
还想找点不尬的局？
```

搜索条：

```text
微信搜一搜：觅遇社
```

补充：

```text
看看最近有没有你能启动的朋友局。
```

footer：

```text
Meetu · 让认识新朋友自然一点
```

## 页面位置建议

建议插入顺序：

1. 结果页主体内容；
2. `发给朋友看 ✦` / `再测一次`；
3. 分享图预览；
4. **软营销 CTA 卡片**；
5. 页面 footer。

理由：用户先完成结果保存/分享，品牌承接在之后出现，减少广告感。

## 组件结构建议

```tsx
<section className="soft-cta-card" aria-label="觅遇社搜索提示">
  <div className="soft-cta-note">不是广告位</div>
  <div className="soft-cta-copy">
    <h3>还想找点<br />不尬的局？</h3>
    <p>看看最近有没有你能启动的朋友局。</p>
  </div>
  <div className="soft-cta-search">
    <span className="soft-cta-search-icon" />
    <span>微信搜一搜：觅遇社</span>
  </div>
  <div className="soft-cta-brand">Meetu · 让认识新朋友自然一点</div>
</section>
```

## CSS spec

```css
.soft-cta-card {
  margin-top: 18px;
  padding: 18px 16px 16px;
  border: 2px solid var(--sa-line);
  border-radius: 24px;
  background: var(--sa-paper-card);
  box-shadow: 5px 5px 0 rgba(31, 31, 31, 0.12);
  position: relative;
  overflow: hidden;
}

.soft-cta-card::before {
  content: '';
  position: absolute;
  inset: 10px auto auto 62%;
  width: 74px;
  height: 74px;
  border: 2px solid var(--sa-line);
  border-radius: 20px;
  background: var(--sa-green);
  transform: rotate(4deg);
  opacity: 0.95;
}

.soft-cta-note {
  display: inline-flex;
  padding: 4px 10px;
  border: 2px solid var(--sa-line);
  border-radius: 999px;
  background: var(--sa-yellow);
  box-shadow: 2px 2px 0 rgba(31, 31, 31, 0.16);
  font-size: 11px;
  font-weight: 900;
  transform: rotate(-3deg);
}

.soft-cta-copy h3 {
  margin: 12px 0 10px;
  max-width: 66%;
  font-size: 28px;
  line-height: 1.08;
  font-weight: 950;
  letter-spacing: -0.8px;
}

.soft-cta-copy p {
  margin: 0 0 14px;
  color: var(--sa-muted);
  font-size: 13px;
  line-height: 1.55;
  font-weight: 700;
}

.soft-cta-search {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 46px;
  padding: 0 14px;
  border: 2px solid var(--sa-line);
  border-radius: 999px;
  background: #fff;
  font-size: 15px;
  font-weight: 900;
}

.soft-cta-search-icon {
  width: 18px;
  height: 18px;
  border: 2px solid var(--sa-line);
  border-radius: 999px;
  position: relative;
  flex: 0 0 auto;
}

.soft-cta-search-icon::after {
  content: '';
  position: absolute;
  width: 9px;
  height: 2px;
  right: -7px;
  bottom: -4px;
  background: var(--sa-line);
  transform: rotate(45deg);
  border-radius: 999px;
}

.soft-cta-brand {
  margin-top: 12px;
  text-align: center;
  color: var(--sa-muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
```

## 视觉预览

文件：`Meetu/社交动物测试H5/07-传播包/结果页软营销CTA卡片预览-v1.png`

预览图为 900×520 静态稿，用于表达构图和视觉语气；工程实现时按上方组件 spec 适配移动端宽度。

## PM/设计验收口径

- 第一眼像 H5 结果页里的便签卡，不像投放广告；
- 搜索条清楚，但不抢“发给朋友看”主按钮；
- 不进入分享卡；
- 用户可以忽略它，不影响测试体验；
- 品牌露出是“懂社交场景的人”，不是“卖产品的人”。

## GPT Image 2 Prompt（仅生成无字视觉底图）

> 口径：后续图片类 component 不直接用 AI 成图作为最终生产件。此 prompt 只用于生成**无字背景/抽象视觉素材**，中文、搜索条文字、品牌文案必须由前端或公众号后台手工排版。

```text
Create a small soft-CTA visual background for a mobile H5 result page, aspect ratio 9:5, PNG.

Context: this card appears near the bottom of a Chinese college social personality test result page. It should feel like a natural sticky-note card inside the test result, not an advertisement banner.

Visual style:
- warm off-white desktop paper background
- rough black hand-drawn outlines (#2B2B2B)
- sticky-note collage, small taped paper scraps, doodle arrows, paper grain
- one abstract Meetu-style “M” mark or anonymous social-animal doodle as a small decorative element on the right side
- slightly tilted, handmade, casual, desktop-sticky-note-animal-test feeling
- adult college meme tone: playful, low-pressure, not cute/kawaii/pet/sticker

Composition:
- leave a large clean text area on the left/top for a manually typeset headline
- leave a clear horizontal pill-shaped blank area in the middle/lower area for a manually typeset search bar
- leave a small calm footer area at the bottom for manually typeset brand text
- decorative doodles must stay at the edges and not interfere with text placement

Hard constraints:
- NO Chinese text, NO English text, NO numbers, NO fake letters, NO labels, NO watermark
- NO QR code
- NO app download / register / join / sign-up visual cues
- NO ad banner feeling, NO glossy marketing button, NO e-commerce style
- DO NOT include a screenshot of the H5, DO NOT include the result animal card, DO NOT include the share card
- Keep the image as a background/layout reference only; all readable copy will be added manually in frontend.

Color palette:
base #FFF8EA, ink #2B2B2B, sticky note yellow #FFE15A, accent green #C8FF5A, soft blue #9DD7FF, small orange accent #FF7A3D.
```

### Prompt 使用说明

- 如果生成图里出现任何文字、伪文字、二维码、按钮文案，直接废弃；
- 生成图只能作为无字底图参考，不能替代前端组件；
- 最终实现仍按本文档的 TSX/CSS spec 手工排版；
- 当前 `结果页软营销CTA卡片预览-v1.png` 只作为 layout reference，不作为生产图片组件。
