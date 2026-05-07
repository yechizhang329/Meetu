/**
 * SoftCtaCard
 *
 * Lives in-page on ResultPage below the share preview. Per PM/Phoebe2 spec
 * (`07-传播包/结果页软营销CTA设计-v1.md`):
 *  - HTML/CSS only; no AI-generated PNG; copy stays editable
 *  - MUST NOT be inside ShareCard — this should never appear in the saved image
 *  - No QR, no download/register/group CTA, no "精准匹配" / "脱单" style copy
 */
export function SoftCtaCard() {
  return (
    <section className="soft-cta-card" aria-label="觅遇社搜索提示">
      <span className="soft-cta-note">不是广告位</span>
      <div className="soft-cta-copy">
        <h3>
          还想找点
          <br />
          不尬的局？
        </h3>
        <p>看看最近有没有你能启动的朋友局。</p>
      </div>
      <div className="soft-cta-search" role="presentation">
        <span className="soft-cta-search-icon" aria-hidden />
        <span>微信搜一搜：觅遇社</span>
      </div>
      <div className="soft-cta-brand">Meetu · 让认识新朋友自然一点</div>
    </section>
  );
}
