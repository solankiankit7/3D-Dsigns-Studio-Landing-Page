import dynamic from 'next/dynamic';
import React from 'react';
const Hero3D = dynamic(() => import('../components/Hero3D'), { ssr: false });

export default function Page() {
  return (
    <main style={ { minHeight: '100vh' } }>
      <header className="nav">
        <div className="logo">Dsigns Studio</div>
        nav>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn">Start a Project</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h1>Architecture that feels inevitable.</h1>
          <p>Dsigns Studio crafts private villas and interiors where material, light, and landscape resolve into one clear idea.</p>
          <div className="cta">
            <a className="btn" href="#contact">Start a Project</a>
            <a className="btn ghost" href="#work">See Work</a>
          </div>
        </div>
        <Hero3D />
      </section>

      <section id="services" className="section grid">
        <div className="card">
          <h3>Residential Architecture</h3>
          <p>New builds and transformations with timeless proportions and elevated details.</p>
        </div>
        <div className="card">
          <h3>Interior Architecture</h3>
          <p>Quiet luxury: bespoke kitchens, wardrobes, lighting, and stonework.</p>
        </div>
        <div className="card">
          <h3>3D Visualization</h3>
          <p>From concept massing to photoreal sets; make decisions earlier and faster.</p>
        </div>
        <div className="card">
          <h3>Interactive Web 3D</h3>
          <p>Award-level hero scenes, product demos, and real-time configurators.</p>
        </div>
      </section>

      <section id="work" className="section work">
        <h2>Selected Work</h2>
        <div className="grid work-grid">
          <div className="work-card"><div className="thumb"></div><h4>Corte Villa</h4><p>Hillside concrete, oak, and water: a study in restraint.</p></div>
          <div className="work-card"><div className="thumb"></div><h4>Slate House</h4><p>Stone ribbons and filtered light across a private courtyard</p></div>
          <div className="work-card"><div className="thumb"></div><h4>Shoreline</h4><p>A glass pavilion held by a timber spine and coastal breezes.</p></div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="copy">
          <h2>We blend art & engineering.</h2>
          <p>We ship performant DES content; compressed assets, lazy-loading, correct FOV, and adaptive resolution. Your story, elevated.</p>
          <ul className="bullets"><li>Sub-2s LCP targets</li><li>Adaptive DPR, capped on mobile</li><li>Instanced geometry where it counts</li></ul>
        </div>
      </section>

      <section id="contact" className="section cta">
        <h2>Let's sketch the first line.</h2>
        <p>Email hello@dsignsstudio.example</p>
        <a className="btn" href="mailto:hello@dsignsstudio.example?subject=Project%20Inquiry%3A%203D%20Landing">Start a Project</a>
      </section>

      <footer className="footer"><p >&copy; 2025 Dsigns Studio. All rights reserved.</p></footer>
    </main>
  );
}
