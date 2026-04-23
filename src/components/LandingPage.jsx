import { useState, useEffect } from 'react'

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const BRAND = 'Rapid AI Consultants'
const BOOKING_LINK = 'https://calendly.com/rapidaiconsultants/30min'
const API_URL = import.meta.env.VITE_API_URL || ''
// ─────────────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap'
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    try {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data?.detail || `Server error: ${response.status}`)
      }
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', business_name: '' })
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={s.page}>
      {/* NAV */}
      <nav style={s.nav}>
        <span style={s.logo}>{BRAND}</span>
        <a
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={s.navCta}
        >
          Book a Call
        </a>
      </nav>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroGfx} aria-hidden="true">
          <div style={s.gfxRing} />
          <div style={s.gfxDot} />
        </div>
        <div style={s.heroInner}>
          <span style={s.badge}>AI-Powered IT Consulting</span>
          <h1 style={s.h1}>
            Modernise Your Business{' '}
            <span style={s.accent}>with AI</span>
          </h1>
          <p style={s.heroSub}>
            We help small and mid-sized businesses cut costs, save time, and grow
            faster with practical AI strategy, fast Python APIs, and polished web
            apps — built right the first time.
          </p>
          <div style={s.heroCtas}>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={s.btnPrimary}
            >
              Get a Free Consultation
            </a>
            <a href="#services" style={s.btnSecondary}>
              See Our Services
            </a>
          </div>
          <div style={s.heroStats}>
            <div style={s.stat}>
              <span style={s.statNum}>48h</span>
              <span style={s.statLabel}>avg. first response</span>
            </div>
            <div style={s.stat}>
              <span style={s.statNum}>100%</span>
              <span style={s.statLabel}>US-based team</span>
            </div>
            <div style={s.stat}>
              <span style={s.statNum}>3×</span>
              <span style={s.statLabel}>faster deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section style={s.pain}>
        <p style={s.sectionEyebrow}>Sound Familiar?</p>
        <h2 style={s.h2}>Your business is leaving value on the table</h2>
        <div style={s.painGrid}>
          {[
            {
              icon: '⏳',
              text: 'Hours lost to manual, repetitive tasks your team hates doing.',
            },
            {
              icon: '📊',
              text: 'Data sitting in spreadsheets with no clear path to insights.',
            },
            {
              icon: '🔧',
              text: 'Legacy systems that slow you down and frustrate employees.',
            },
            {
              icon: '🤷',
              text: 'Not sure where AI can actually help — or where to start.',
            },
          ].map((item) => (
            <div key={item.icon} style={s.painCard}>
              <span style={s.painIcon}>{item.icon}</span>
              <p style={s.painText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={s.services}>
        <p style={s.sectionEyebrow}>What We Do</p>
        <h2 style={s.h2}>End-to-end AI consulting &amp; delivery</h2>
        <div style={s.serviceGrid}>
          <div style={{ ...s.serviceCard, ...s.serviceCardFeatured }}>
            <span style={s.serviceTag}>Most Popular</span>
            <h3 style={s.serviceTitle}>AI Strategy &amp; Roadmap</h3>
            <p style={s.serviceDesc}>
              Identify high-value automation opportunities and build a roadmap
              tailored to your business goals and budget.
            </p>
          </div>
          <div style={s.serviceCard}>
            <h3 style={s.serviceTitle}>FastAPI Backends</h3>
            <p style={s.serviceDesc}>
              Production-ready Python APIs that power your AI features with speed
              and reliability.
            </p>
          </div>
          <div style={s.serviceCard}>
            <h3 style={s.serviceTitle}>Modern Web Apps</h3>
            <p style={s.serviceDesc}>
              React &amp; Vite frontends that are fast, accessible, and a joy to
              use.
            </p>
          </div>
          <div style={s.serviceCard}>
            <h3 style={s.serviceTitle}>Technology Modernisation</h3>
            <p style={s.serviceDesc}>
              Safely migrate legacy systems, train your team, and set up
              infrastructure that scales with your growth.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section style={s.pricing}>
        <p style={s.sectionEyebrow}>Pricing</p>
        <h2 style={s.h2}>Transparent, flexible pricing</h2>
        <div style={s.pricingGrid}>
          <div style={s.priceCard}>
            <p style={s.priceTier}>Starter</p>
            <div style={s.priceRow}>
              <span style={s.priceNum}>$1,500</span>
              <span style={s.pricePer}>&nbsp;/ project</span>
            </div>
            <p style={s.priceDesc}>
              Perfect for small businesses ready to dip their toes into AI.
            </p>
            <ul style={s.featureList}>
              {['AI opportunity audit', '1 automation workflow', '30-day support'].map((f) => (
                <li key={f} style={s.featureItem}>
                  <span style={s.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={s.btnOutline}
            >
              Book a Call
            </a>
          </div>

          <div style={{ ...s.priceCard, ...s.priceCardFeatured }}>
            <p style={s.priceTier}>Growth</p>
            <div style={s.priceRow}>
              <span style={s.priceNum}>$4,500</span>
              <span style={s.pricePer}>&nbsp;/ project</span>
            </div>
            <p style={s.priceDesc}>
              For businesses ready to build real AI infrastructure.
            </p>
            <ul style={s.featureList}>
              {[
                'Full AI roadmap',
                'FastAPI backend',
                'React frontend',
                '3-month support',
              ].map((f) => (
                <li key={f} style={s.featureItem}>
                  <span style={s.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...s.btnOutline, borderColor: amber, color: amber }}
            >
              Book a Call
            </a>
          </div>

          <div style={s.priceCard}>
            <p style={s.priceTier}>Enterprise</p>
            <div style={s.priceRow}>
              <span style={s.priceNum}>Custom</span>
            </div>
            <p style={s.priceDesc}>
              Tailored engagements for larger teams and complex needs.
            </p>
            <ul style={s.featureList}>
              {[
                'Dedicated consultant',
                'Custom integrations',
                'On-site workshops',
                'Priority support',
              ].map((f) => (
                <li key={f} style={s.featureItem}>
                  <span style={s.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={s.btnOutline}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={s.contact}>
        <div style={s.contactInner}>
          <div style={s.contactLeft}>
            <p style={s.sectionEyebrow}>Get in Touch</p>
            <h2 style={{ ...s.h2, textAlign: 'left', margin: '0 0 1rem' }}>
              Let&apos;s talk about your business
            </h2>
            <p style={s.contactSub}>
              Tell us about your project and we&apos;ll reach out within one
              business day. No sales pressure — just a real conversation about
              what&apos;s possible.
            </p>
          </div>
          <div style={s.contactRight}>
            {submitted ? (
              <div style={s.successBox}>
                <p style={s.successIcon}>✅</p>
                <h3 style={s.successTitle}>Message received!</h3>
                <p style={s.successSub}>
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form style={s.form} onSubmit={handleSubmit} noValidate>
                {errorMsg && (
                  <p style={{ ...s.formNote, color: '#f87171' }}>⚠️ {errorMsg}</p>
                )}
                <input
                  style={s.input}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  style={s.input}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  style={s.input}
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
                <input
                  style={s.input}
                  type="text"
                  name="business_name"
                  placeholder="Business name"
                  autoComplete="organization"
                  value={form.business_name}
                  onChange={handleChange}
                />
                <button type="submit" style={s.btnSubmit} disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
                <p style={s.formNote}>No spam. Unsubscribe any time.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <p style={s.footerBrand}>{BRAND}</p>
        <p style={s.footerSub}>Chester, PA · AI Consulting · Built with React &amp; FastAPI</p>
        <p style={s.footerSub}>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  )
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const amber = '#f59e0b'
const amberDark = '#d97706' // eslint-disable-line no-unused-vars
const dark = '#0a0a0a'
const darkCard = '#111111'
const darkBorder = '#222222'
const textPrimary = '#f5f5f5'
const textSecondary = '#a0a0a0'
const font = "'DM Sans', sans-serif"
const fontDisplay = "'Syne', sans-serif"

const s = {
  page: {
    backgroundColor: dark,
    color: textPrimary,
    fontFamily: font,
    minHeight: '100vh',
    overflowX: 'hidden',
  },

  // NAV
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2rem',
    borderBottom: `1px solid ${darkBorder}`,
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(10,10,10,0.95)',
    backdropFilter: 'blur(8px)',
    zIndex: 100,
  },
  logo: {
    fontFamily: fontDisplay,
    fontWeight: 800,
    fontSize: '1.2rem',
    color: textPrimary,
    letterSpacing: '-0.02em',
  },
  navCta: {
    backgroundColor: amber,
    color: '#000',
    fontFamily: font,
    fontWeight: 600,
    fontSize: '0.85rem',
    padding: '0.5rem 1.1rem',
    borderRadius: '6px',
    textDecoration: 'none',
  },

  // HERO
  hero: {
    padding: '5rem 2rem 4rem',
    maxWidth: '1100px',
    margin: '0 auto',
    position: 'relative',
  },
  heroInner: {
    maxWidth: '680px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(245,158,11,0.12)',
    color: amber,
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '0.35rem 0.85rem',
    borderRadius: '100px',
    border: `1px solid rgba(245,158,11,0.25)`,
    marginBottom: '1.5rem',
  },
  h1: {
    fontFamily: fontDisplay,
    fontWeight: 800,
    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    color: textPrimary,
    margin: '0 0 1.25rem',
  },
  accent: {
    color: amber,
  },
  heroSub: {
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: textSecondary,
    margin: '0 0 2rem',
    maxWidth: '540px',
  },
  heroCtas: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  btnPrimary: {
    display: 'inline-block',
    backgroundColor: amber,
    color: '#000',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    fontFamily: font,
  },
  btnSecondary: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: textPrimary,
    fontWeight: 500,
    fontSize: '0.9rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    border: `1px solid ${darkBorder}`,
  },
  heroStats: {
    display: 'flex',
    gap: '2.5rem',
    flexWrap: 'wrap',
    paddingTop: '2rem',
    borderTop: `1px solid ${darkBorder}`,
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  statNum: {
    fontFamily: fontDisplay,
    fontWeight: 800,
    fontSize: '1.8rem',
    color: amber,
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.8rem',
    color: textSecondary,
  },
  heroGfx: {
    position: 'absolute',
    right: '-100px',
    top: '80px',
    pointerEvents: 'none',
  },
  gfxRing: {
    width: '420px',
    height: '420px',
    border: `1px solid rgba(245,158,11,0.08)`,
    borderRadius: '50%',
  },
  gfxDot: {
    position: 'absolute',
    width: '12px',
    height: '12px',
    backgroundColor: amber,
    borderRadius: '50%',
    top: '50px',
    left: '210px',
    opacity: 0.4,
  },

  // PAIN
  pain: {
    backgroundColor: '#0e0e0e',
    padding: '5rem 2rem',
    textAlign: 'center',
  },
  sectionEyebrow: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: amber,
    marginBottom: '0.75rem',
  },
  h2: {
    fontFamily: fontDisplay,
    fontWeight: 800,
    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.03em',
    color: textPrimary,
    margin: '0 auto 2.5rem',
    maxWidth: '600px',
  },
  painGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.25rem',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'left',
  },
  painCard: {
    backgroundColor: darkCard,
    border: `1px solid ${darkBorder}`,
    borderRadius: '12px',
    padding: '1.5rem',
  },
  painIcon: {
    fontSize: '1.5rem',
    display: 'block',
    marginBottom: '0.75rem',
  },
  painText: {
    fontSize: '0.9rem',
    lineHeight: 1.65,
    color: textSecondary,
    margin: 0,
  },

  // SERVICES
  services: {
    padding: '5rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
    gap: '1.25rem',
    textAlign: 'left',
  },
  serviceCard: {
    backgroundColor: darkCard,
    border: `1px solid ${darkBorder}`,
    borderRadius: '12px',
    padding: '1.75rem',
  },
  serviceCardFeatured: {
    border: `1px solid ${amber}`,
    position: 'relative',
  },
  serviceTag: {
    display: 'inline-block',
    backgroundColor: 'rgba(245,158,11,0.12)',
    color: amber,
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '0.25rem 0.65rem',
    borderRadius: '100px',
    border: `1px solid rgba(245,158,11,0.25)`,
    marginBottom: '0.75rem',
  },
  serviceTitle: {
    fontFamily: fontDisplay,
    fontWeight: 700,
    fontSize: '1.05rem',
    color: textPrimary,
    margin: '0 0 0.6rem',
  },
  serviceDesc: {
    fontSize: '0.875rem',
    lineHeight: 1.65,
    color: textSecondary,
    margin: 0,
  },

  // PRICING
  pricing: {
    backgroundColor: '#0e0e0e',
    padding: '5rem 2rem',
    textAlign: 'center',
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.25rem',
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'left',
  },
  priceCard: {
    backgroundColor: darkCard,
    border: `1px solid ${darkBorder}`,
    borderRadius: '12px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  priceCardFeatured: {
    border: `1px solid ${amber}`,
    backgroundColor: '#111108',
  },
  priceTier: {
    fontFamily: fontDisplay,
    fontWeight: 700,
    fontSize: '0.85rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: amber,
    margin: 0,
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
  },
  priceNum: {
    fontFamily: fontDisplay,
    fontWeight: 800,
    fontSize: '2.2rem',
    color: textPrimary,
    lineHeight: 1,
  },
  pricePer: {
    fontSize: '0.8rem',
    color: textSecondary,
  },
  priceDesc: {
    fontSize: '0.85rem',
    color: textSecondary,
    lineHeight: 1.6,
    margin: 0,
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: '0.25rem 0 0.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.6rem',
    fontSize: '0.85rem',
    color: textSecondary,
    lineHeight: 1.5,
  },
  check: {
    color: amber,
    fontWeight: 700,
    flexShrink: 0,
  },
  btnOutline: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: textPrimary,
    fontWeight: 600,
    fontSize: '0.85rem',
    padding: '0.7rem 1.25rem',
    borderRadius: '8px',
    textDecoration: 'none',
    cursor: 'pointer',
    border: `1px solid ${darkBorder}`,
    textAlign: 'center',
    fontFamily: font,
  },

  // CONTACT
  contact: {
    backgroundColor: '#0a0905',
    borderTop: `1px solid rgba(245,158,11,0.15)`,
    padding: '5rem 2rem',
  },
  contactInner: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'start',
  },
  contactLeft: {},
  contactSub: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    color: '#888',
    margin: 0,
  },
  contactRight: {},
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  input: {
    backgroundColor: '#111',
    border: `1px solid #2a2a2a`,
    borderRadius: '8px',
    padding: '0.8rem 1rem',
    fontSize: '0.9rem',
    color: textPrimary,
    fontFamily: font,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  },
  btnSubmit: {
    backgroundColor: amber,
    color: '#000',
    fontWeight: 700,
    fontSize: '0.95rem',
    padding: '0.9rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: font,
    marginTop: '0.25rem',
  },
  formNote: {
    fontSize: '0.75rem',
    color: '#555',
    textAlign: 'center',
    margin: '0.25rem 0 0',
  },
  successBox: {
    backgroundColor: '#111',
    border: `1px solid rgba(245,158,11,0.3)`,
    borderRadius: '12px',
    padding: '2.5rem',
    textAlign: 'center',
  },
  successIcon: {
    fontSize: '2rem',
    color: amber,
    margin: '0 0 0.5rem',
  },
  successTitle: {
    fontFamily: fontDisplay,
    fontWeight: 800,
    fontSize: '1.4rem',
    color: textPrimary,
    margin: '0 0 0.5rem',
  },
  successSub: {
    fontSize: '0.875rem',
    color: textSecondary,
    lineHeight: 1.6,
    margin: 0,
  },

  // FOOTER
  footer: {
    padding: '2.5rem 2rem',
    textAlign: 'center',
    borderTop: `1px solid ${darkBorder}`,
  },
  footerBrand: {
    fontFamily: fontDisplay,
    fontWeight: 800,
    fontSize: '1rem',
    color: textPrimary,
    margin: '0 0 0.5rem',
  },
  footerSub: {
    fontSize: '0.8rem',
    color: '#444',
    margin: '0.25rem 0',
  },
}
