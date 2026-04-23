import './AboutPage.css'

function AboutPage() {
  return (
    <main id="about-page">
      <section className="page-hero">
        <h1>About Us</h1>
        <p className="page-sub">
          Byron C Linder LLC is an IT consultancy based in Chester, PA,
          dedicated to making enterprise-grade AI accessible to every business.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We believe every business — regardless of size — deserves access to
          the same powerful technology that drives Fortune 500 efficiency. Our
          mission is to close that gap by delivering practical, results-focused
          AI and software solutions that create real, measurable value from day
          one.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Approach</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <h3>Listen First</h3>
            <p>
              We start by understanding your business, your challenges, and your
              goals — before writing a single line of code.
            </p>
          </div>
          <div className="approach-card">
            <h3>Build Right</h3>
            <p>
              We deliver production-ready solutions with clean code, solid
              testing, and thorough documentation so you&apos;re never locked in.
            </p>
          </div>
          <div className="approach-card">
            <h3>Stay Practical</h3>
            <p>
              No buzzwords, no over-engineering. We recommend the simplest
              solution that solves your actual problem.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Why Chester, PA?</h2>
        <p>
          Rooted in the Delaware Valley, we understand the hustle of local
          business and bring big-tech expertise to the community that shaped us.
          We work with clients nationwide, but we&apos;re always proudly local
          at heart.
        </p>
      </section>
    </main>
  )
}

export default AboutPage
