const features = [
  {
    icon: "⌂",
    title: "Property Listings",
    description: "Browse neighborhood properties and see important information in one place.",
    label: "Explore homes",
  },
  {
    icon: "✦",
    title: "Local Sponsors",
    description: "Discover local businesses and services that support the community.",
    label: "Meet local businesses",
  },
  {
    icon: "◉",
    title: "Voice Help",
    description: "A future voice-search assistant could make finding a home easier.",
    label: "Voice feature concept",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#home" aria-label="Neighborhood Listing Platform home">
          <span aria-hidden="true">⌂</span> Neighborly
        </a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <p className="eyebrow">LAB 1 · AI-ASSISTED DEVELOPMENT</p>
        <h1>Find your place in the neighborhood.</h1>
        <p className="hero-description">
          A welcoming starting point for exploring homes, supporting local businesses,
          and imagining easier ways to search.
        </p>
        <a className="primary-button" href="#features">Explore the features <span aria-hidden="true">→</span></a>
      </section>

      <section id="features" className="features" aria-labelledby="features-title">
        <p className="eyebrow">WHAT WE&apos;RE BUILDING</p>
        <h2 id="features-title">Three ways to make searching simpler</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-label">{feature.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about" aria-labelledby="about-title">
        <p className="eyebrow">ABOUT THIS PROJECT</p>
        <h2 id="about-title">Built for learning, designed for community.</h2>
        <p>
          This is a Lab 1 prototype built with Next.js, React, and TypeScript.
          Future labs can add real listings, sponsors, and accessibility features.
        </p>
        <p className="team">Project team: Ahmed Farah and Diana Moron-Mendez</p>
      </section>

      <footer className="footer">Neighborhood Listing Platform · Lab 1</footer>
    </main>
  );
}
