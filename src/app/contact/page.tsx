export default function ContactPage() {
  return (
    <main className="site-wrap legal-wrap">
      <h1>Contact & Support</h1>
      <p>
        Need help with TikTok legal workflow, policy interpretation, or compliance documentation? The
        Romulus Legal Hub support team responds within one business day.
      </p>

      <section className="section">
        <h2>Send us a message</h2>
        <p>Submit your request and our compliance support team will respond within one business day.</p>
        <ul>
          <li>Full Name</li>
          <li>Email</li>
          <li>Phone Number</li>
          <li>Company</li>
          <li>Inquiry Type</li>
          <li>Message</li>
        </ul>
      </section>

      <section className="section">
        <h2>Support Channels</h2>
        <p>
          For active moderation incidents, include the content link, notice details, and impact. We
          will triage and advise next steps.
        </p>
        <p>
          <a href="https://wa.me/+60105424256" target="_blank" rel="noopener noreferrer">Contact Support</a>
        </p>
      </section>

      <footer className="footer">
        <p>© 2026 Romulus Legal Hub. All rights reserved.</p>
      </footer>
    </main>
  );
}
