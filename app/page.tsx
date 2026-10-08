const features = [
  {
    number: "01",
    title: "See risk sooner",
    description:
      "Explore how on-chain activity can surface unusual patterns for review and investigation.",
    icon: "◉",
  },
  {
    number: "02",
    title: "Keep decisions transparent",
    description:
      "Design risk scores with clear context, so teams can understand what a signal represents.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Connect off-chain and on-chain",
    description:
      "Explore a workflow that connects monitoring agents with Soroban smart contracts.",
    icon: "↗",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <path d="M18 2.8 21.8 14l11.4 4-11.4 4L18 33.2 14.2 22 2.8 18l11.4-4L18 2.8Z" />
        <circle cx="18" cy="18" r="3.2" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.2 10h11.6M10 4.2l5.8 5.8-5.8 5.8" />
    </svg>
  );
}

function DashboardPreview() {
  return (
    <div className="preview-wrap" aria-label="Illustrative Stellar Sentinel risk monitoring dashboard preview. Sample data only; no live network connection.">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="preview-card">
        <div className="preview-topbar">
          <div className="preview-brand"><BrandMark /><span>Stellar Sentinel</span></div>
          <span className="demo-label"><i /> SAMPLE DATA · NOT CONNECTED</span>
        </div>
        <div className="preview-content">
          <div className="preview-heading">
            <div><span className="eyebrow">STELLAR / SOROBAN</span><h2>Network overview</h2></div>
            <span className="range-pill">LAST 24 HOURS <span>⌄</span></span>
          </div>
          <div className="metric-grid">
            <div className="metric-card"><div className="metric-label"><span>MONITORED ACCOUNTS</span><span className="metric-icon">◎</span></div><strong>2,481</strong><small><b>↗ 12.8%</b> <span>vs. previous period</span></small><div className="metric-spark spark-one" aria-hidden="true" /></div>
            <div className="metric-card"><div className="metric-label"><span>FLAGGED FOR REVIEW</span><span className="metric-icon alert-icon">!</span></div><strong className="attention-number">08</strong><small><b className="attention-change">2 high priority</b> <span>in this period</span></small><div className="metric-spark spark-two" aria-hidden="true" /></div>
          </div>
          <div className="chart-card">
            <div className="chart-title"><span><b>Activity signals</b><small>Risk events across monitored accounts</small></span><span className="chart-legend"><i /> BASELINE <i /> ELEVATED</span></div>
            <div className="chart">
              <div className="chart-y-labels"><span>100</span><span>75</span><span>50</span><span>25</span></div>
              <div className="chart-plot">
                <div className="chart-gridline line-1" /><div className="chart-gridline line-2" /><div className="chart-gridline line-3" /><div className="chart-gridline line-4" />
                <svg viewBox="0 0 520 150" preserveAspectRatio="none" role="img" aria-label="Illustrative activity signal chart">
                  <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#9ef2c1" stopOpacity=".23" /><stop offset="1" stopColor="#9ef2c1" stopOpacity="0" /></linearGradient></defs>
                  <path className="chart-area" d="M0 108 C24 104 32 80 56 86 S91 113 117 91 148 73 171 83 198 96 224 70 261 78 281 65 311 51 331 67 362 93 382 72 417 55 438 63 472 39 493 46 514 29 520 32 L520 150 L0 150Z" />
                  <path className="chart-line" d="M0 108 C24 104 32 80 56 86 S91 113 117 91 148 73 171 83 198 96 224 70 261 78 281 65 311 51 331 67 362 93 382 72 417 55 438 63 472 39 493 46 514 29 520 32" />
                  <path className="chart-line chart-line-muted" d="M0 122 C24 119 36 114 56 116 S91 109 117 114 149 104 171 109 200 101 224 107 258 100 281 104 311 96 331 103 361 109 382 101 415 99 438 102 471 94 493 98 515 91 520 94" />
                  <circle cx="493" cy="46" r="4" className="chart-point" />
                </svg>
                <div className="chart-x-labels"><span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span></div>
              </div>
            </div>
          </div>
          <div className="signals-heading"><span>Example signals</span><span>SAMPLE <b>✦</b></span></div>
          <div className="signal-row"><span className="signal-status status-high" /><span className="signal-address">GAB7…KQ2M</span><span className="signal-type">Unusual transfer pattern</span><span className="signal-score">HIGH <b>82</b></span><span className="signal-time">10:24</span></div>
          <div className="signal-row"><span className="signal-status status-medium" /><span className="signal-address">GCD4…P9XR</span><span className="signal-type">Rapid account activity</span><span className="signal-score medium-score">REVIEW <b>64</b></span><span className="signal-time">09:58</span></div>
          <div className="preview-foot"><span><i className="tiny-star">✦</i> Designed for explainable risk review</span><span>ILLUSTRATIVE DATA · NOT LIVE</span></div>
        </div>
      </div>
      <div className="floating-chip"><span className="chip-icon">✳</span><span><b>Sample signal</b><small>Review activity with context</small></span><span className="chip-dot" /></div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Stellar Sentinel home"><BrandMark /><span>Stellar <span className="brand-light">Sentinel</span></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#platform">Platform</a><a href="#how-it-works">How it works</a><a href="#built-for">Built for Stellar</a>
        </nav>
        <a className="header-cta" href="#how-it-works">Explore the vision <ArrowIcon /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <div className="announcement"><span>✦</span> RISK CONTEXT FOR STELLAR &amp; SOROBAN</div>
          <h1>Make on-chain<br />risk <span>easier to see.</span></h1>
          <p className="hero-description">Stellar Sentinel is an early-stage project exploring explainable activity signals and Soroban workflows to help teams understand risk across Stellar.</p>
          <div className="hero-actions"><a className="button-primary" href="#platform">Discover the platform <ArrowIcon /></a><a className="text-link" href="#how-it-works">See how it works <span>↓</span></a></div>
          <div className="hero-proof"><div className="proof-stars" aria-hidden="true"><span>✳</span><span>✦</span><span>✧</span></div><p><b>Built for the Stellar ecosystem</b><br />A work in progress, designed around clarity.</p></div>
        </div>
        <DashboardPreview />
        <div className="hero-bottom-note"><span>01 / A NEW PERSPECTIVE ON NETWORK RISK</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="ecosystem-strip" id="built-for">
        <span className="strip-label">PURPOSE-BUILT FOR</span>
        <div className="ecosystem-name"><span className="stellar-symbol">✳</span><span>STELLAR <small>NETWORK</small></span></div>
        <div className="strip-divider" />
        <p>Designed for the next generation of<br className="desktop-break" /> <b>transparent, open finance.</b></p>
        <span className="strip-decoration" aria-hidden="true">✦ &nbsp; ◌ &nbsp; ✧</span>
      </section>

      <section className="platform-section section-pad" id="platform">
        <div className="section-kicker"><span>01</span> THE PLATFORM</div>
        <div className="section-intro"><h2>Clarity for a<br /><span>connected ecosystem.</span></h2><p>Digital asset networks move quickly. Stellar Sentinel is being developed to help teams make sense of activity and explore how risk insights could connect to Soroban workflows.</p></div>
        <div className="feature-grid">
          {features.map((feature) => <article className="feature-card" key={feature.number}><div className="feature-top"><span>{feature.number}</span><span className="feature-icon">{feature.icon}</span></div><h3>{feature.title}</h3><p>{feature.description}</p><span className="feature-rule" /></article>)}
        </div>
      </section>

      <section className="workflow-section" id="how-it-works">
        <div className="workflow-inner section-pad">
          <div className="section-kicker light-kicker"><span>02</span> HOW IT COMES TOGETHER</div>
          <div className="workflow-heading"><h2>From activity<br />to <span>understanding.</span></h2><p>The proposed workflow connects relevant network activity with contextual signals and transparent Soroban infrastructure.</p></div>
          <div className="workflow-steps">
            <article><span className="step-number">01</span><div className="step-icon">⌘</div><h3>Observe</h3><p>Bring relevant network activity into view.</p></article><div className="step-connector" />
            <article><span className="step-number">02</span><div className="step-icon">◉</div><h3>Understand</h3><p>Review contextual signals and see why they stand out.</p></article><div className="step-connector" />
            <article><span className="step-number">03</span><div className="step-icon">✧</div><h3>Respond</h3><p>Explore how insights could connect to Soroban workflows.</p></article>
          </div>
          <div className="workflow-note"><span>✦</span> Built around transparency at every step.</div>
        </div>
      </section>

      <section className="closing-section section-pad">
        <div className="closing-orb" aria-hidden="true"><span>✦</span></div>
        <div className="section-kicker"><span>03</span> A MORE CONFIDENT NETWORK</div>
        <h2>See the signal.<br /><span>Strengthen the network.</span></h2>
        <p>Help shape a more understandable approach to risk monitoring for Stellar and Soroban.</p>
        <a className="button-primary" href="#platform">Explore the platform <ArrowIcon /></a>
      </section>

      <footer className="site-footer"><a className="brand footer-brand" href="#top"><BrandMark /><span>Stellar <span className="brand-light">Sentinel</span></span></a><span>Risk monitoring for the Stellar ecosystem.</span><span>BUILT FOR A MORE TRANSPARENT FUTURE <i>✦</i></span></footer>
    </main>
  );
}
