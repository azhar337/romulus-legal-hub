export default function HomePage() {
  return (
    <main className="site-wrap">
      <nav className="top-nav">
        <div className="brand">Romulus Legal Hub</div>
        <div className="nav-links">
          <a href="#capabilities">Capabilities</a>
          <a href="#workflow">Workflow</a>
          <a href="#outcomes">Outcomes</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <p className="eyebrow">Compliance Infrastructure for TikTok Publishing Teams</p>
        <h1>Publish on TikTok with Clear Legal Controls</h1>
        <p className="lead">
          Romulus Legal Hub helps teams document posting workflows, manage policy checks, track moderation events,
          and maintain transparent compliance records across campaigns.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/contact">Contact Support</a>
          <a className="btn btn-secondary" href="/terms">View Terms</a>
        </div>
      </header>

      <section className="section" id="capabilities">
        <h2>Core Capabilities</h2>
        <div className="grid-3">
          <article className="card">
            <h3>Pre-Publish Policy Review</h3>
            <p>Content and disclosure checks before go-live.</p>
          </article>
          <article className="card">
            <h3>Moderation Event Logging</h3>
            <p>Central timeline for strikes, takedowns, and appeals.</p>
          </article>
          <article className="card">
            <h3>Audit-Ready Evidence Pack</h3>
            <p>Versioned records for legal and partner review.</p>
          </article>
        </div>
      </section>

      <section className="section" id="workflow">
        <h2>A Practical Legal-Compliance Flow for TikTok Operations</h2>
        <ol className="steps">
          <li>Collect campaign objective, audience, assets, and publishing schedule.</li>
          <li>Apply TikTok policy categories, local legal requirements, and brand safety standards.</li>
          <li>Confirm ad labels, sponsorship statements, and mandatory disclaimers.</li>
          <li>Route draft content through legal/compliance approvers with timestamped rationale.</li>
          <li>Track moderation outcomes and remediation in one enforcement log.</li>
          <li>Export workflow evidence packs for governance and regulatory review.</li>
        </ol>
      </section>

      <section className="section" id="outcomes">
        <h2>Operational Outcomes</h2>
        <ul>
          <li>Standardized review and approval workflow for each TikTok campaign.</li>
          <li>Consistent decision logic across teams, regions, and agencies.</li>
          <li>Clear record of who reviewed, approved, escalated, or rejected content and why.</li>
          <li>Evidence supporting partner reviews, platform inquiries, and internal audits.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Public Legal Links</h2>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact & Support</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2026 Romulus Legal Hub. All rights reserved.</p>
      </footer>
    </main>
  );
}
