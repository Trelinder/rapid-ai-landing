import './ServicesPage.css'

const services = [
  {
    title: 'AI Strategy & Roadmapping',
    description:
      'We assess your current workflows, identify the highest-ROI automation opportunities, and deliver a clear, prioritised roadmap — so you invest in AI that actually moves the needle.',
    bullets: [
      'Process analysis & opportunity mapping',
      'Tool and vendor evaluation',
      'Custom implementation roadmap',
      'ROI projections and KPIs',
    ],
  },
  {
    title: 'FastAPI Backend Development',
    description:
      'Modern Python backends built on FastAPI — asynchronous, type-safe, and ready for production from day one. Ideal for powering AI features, data pipelines, or any API-driven product.',
    bullets: [
      'RESTful & async API design',
      'AI/ML model integration',
      'Authentication, rate-limiting, and security',
      'Database integration (PostgreSQL, MongoDB, and more)',
    ],
  },
  {
    title: 'React & Vite Web Applications',
    description:
      'Pixel-perfect, accessible frontends built with React 19 and Vite. Fast to load, easy to maintain, and designed to convert visitors into customers.',
    bullets: [
      'Responsive, mobile-first design',
      'Accessibility (WCAG 2.1) compliance',
      'Performance optimisation & Core Web Vitals',
      'GitHub Pages, Vercel, or custom hosting',
    ],
  },
  {
    title: 'Technology Modernisation',
    description:
      'Still running legacy systems or manual processes? We help you migrate safely, train your team, and set up infrastructure that scales with your growth.',
    bullets: [
      'Legacy system assessment',
      'Phased migration planning',
      'Team training and documentation',
      'CI/CD setup and DevOps best practices',
    ],
  },
]

function ServicesPage() {
  return (
    <main id="services-page">
      <section className="page-hero">
        <h1>Our Services</h1>
        <p className="page-sub">
          Everything you need to bring AI into your business — from strategy to
          shipping.
        </p>
      </section>

      <section id="services-list">
        {services.map((svc) => (
          <div className="service-detail-card" key={svc.title}>
            <div className="service-detail-body">
              <h2>{svc.title}</h2>
              <p>{svc.description}</p>
              <ul>
                {svc.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default ServicesPage
