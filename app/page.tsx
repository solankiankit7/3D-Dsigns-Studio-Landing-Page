import dynamic from 'next/dynamic';
import React from 'react';
const Hero3D = dynamic() => import('../components/Hero3D'), { ssr: false });

export default function Page() {
  return (
    <main style={ { minHeight: '100vh' } }>
      <header className="nav">
        <div className="logo">Dsigns Studio</div>
        <nav>
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
    </main>
  );
}
