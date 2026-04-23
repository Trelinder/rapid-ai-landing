import { useState } from 'react'
import './LandingPage.css'

const API_URL = import.meta.env.VITE_API_URL || ''

function LandingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
  })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [errorMsg, setErrorMsg] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
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

      setStatus('success')
      setForm({ name: '', email: '', phone: '', business_name: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err.message || 'Something went wrong. Please try again later.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="landing">
      <header id="landing-header">
        <h1>Byron C Linder LLC</h1>
        <p className="tagline">
          AI-powered IT consulting for Chester, PA and beyond.
        </p>
      </header>

      <div id="services">
        <div className="service-card">
          <h2>AI Strategy</h2>
          <p>
            Identify high-value automation opportunities and build a roadmap
            tailored to your business.
          </p>
        </div>
        <div className="service-card">
          <h2>FastAPI Backends</h2>
          <p>
            Production-ready Python APIs that power your AI features with speed
            and reliability.
          </p>
        </div>
        <div className="service-card">
          <h2>Modern Web Apps</h2>
          <p>
            React &amp; Vite frontends that are fast, accessible, and a joy to
            use.
          </p>
        </div>
      </div>

      <div id="lead-capture">
        <h2>Get in Touch</h2>
        <p>
          Tell us about your project and we&apos;ll reach out within one
          business day.
        </p>

        {status === 'success' && (
          <p className="form-feedback success">
            ✅ Message received — we&apos;ll be in touch soon!
          </p>
        )}
        {status === 'error' && (
          <p className="form-feedback error">⚠️ {errorMsg}</p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />

          <label htmlFor="business_name">Business Name</label>
          <input
            id="business_name"
            name="business_name"
            type="text"
            required
            autoComplete="organization"
            value={form.business_name}
            onChange={handleChange}
            placeholder="Acme Corp"
          />

          <button type="submit" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default LandingPage
