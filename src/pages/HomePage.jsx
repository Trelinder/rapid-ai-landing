import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <main id="home-page">
      <section id="hero">
        <h1>AI-Powered IT Consulting</h1>
        <p className="hero-sub">
          We help small and mid-sized businesses modernise with practical
          AI&nbsp;strategy, fast Python&nbsp;APIs, and polished web&nbsp;apps —
          built right the first time.
        </p>
        <div id="hero-actions">
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation
          </Link>
          <Link to="/services" className="btn-secondary">
            See Our Services
          </Link>
        </div>
      </section>

      <section id="home-services">
        <h2>What We Do</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>AI Strategy</h3>
            <p>
              Identify high-value automation opportunities and build a roadmap
              tailored to your business.
            </p>
          </div>
          <div className="service-card">
            <h3>FastAPI Backends</h3>
            <p>
              Production-ready Python APIs that power your AI features with
              speed and reliability.
            </p>
          </div>
          <div className="service-card">
            <h3>Modern Web Apps</h3>
            <p>
              React &amp; Vite frontends that are fast, accessible, and a joy
              to use.
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/services" className="btn-secondary">
            Explore All Services →
          </Link>
        </div>
      </section>

      <section id="home-cta">
        <h2>Ready to modernise your business?</h2>
        <p>
          Based in Chester, PA — serving clients nationwide. Let&apos;s talk
          about what AI can do for you.
        </p>
        <Link to="/contact" className="btn-primary">
          Start the Conversation
        </Link>
      </section>
    </main>
  )
}

export default HomePage
