import { useState } from 'react'
import './ContactPage.css'

const API_URL = import.meta.env.VITE_API_URL || ''

function ContactPage() {
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
    <main id="contact-page">
      <section className="page-hero">
        <h1>Get in Touch</h1>
        <p className="page-sub">
          Tell us about your project and we&apos;ll reach out within one
          business day.
        </p>
      </section>

      <section id="contact-form-section">
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
      </section>
    </main>
  )
}

export default ContactPage
