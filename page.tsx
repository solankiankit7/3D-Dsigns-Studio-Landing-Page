'use client';
import VillaScene from './components/VillaScene';
import ReducedMotion from './components/ReducedMotion';
import { brand } from '../config/brand';
import { motion, useReducedMotion } from 'framer-motion';

export default function Page() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-brand-500 grid place-items-center font-bold">DS</div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">{brand.name}</h1>
            <p className="text-xs text-white/60">Premium Architecture & Interior Design</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a className="navlink" href="#projects">Projects</a>
          <a className="navlink" href="#philosophy">Philosophy</a>
          <a className="navlink" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn">Consultation</a>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div className="order-2 md:order-1 space-y-4">
          <motion.h2
            className="text-4xl md:text-6xl font-black leading-[1.05]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Hyper‑real experiences for modern living.
          </motion.h2>
          <motion.p
            className="text-white/80 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {brand.tagline} From concept to craft—walk through your home before it’s built.
          </motion.p>
          <div className="flex gap-3">
            <a href="#contact" className="btn">{brand.cta}</a>
            <a href="#projects" className="px-5 py-3 rounded-2xl border border-white/20 hover:bg-white/5 transition">{brand.secondaryCta}</a>
          </div>
          <ul className="mt-4 text-sm text-white/70 grid grid-cols-2 gap-2">
            <li>🏡 Real‑time villa walkthrough</li>
            <li>⚡ Draco + KTX2 optimized</li>
            <li>🎛️ Guided & free explore modes</li>
            <li>♿ Motion‑aware fallbacks</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          {!prefersReduced ? <VillaScene /> : <div className="card h-[75vh] md:h-[90vh] grid place-items-center"><span className="text-white/70">Static poster (reduced motion)</span></div>}
        </div>
      </section>

      <section id="projects" className="section">
        <h3 className="text-2xl font-semibold mb-4">Signature Projects</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: 'Horizon Villa', d: 'Cantilevered volumes & warm minimalism.' },
            { t: 'Courtyard House', d: 'Biophilic core with filtered daylight.' },
            { t: 'Skyline Penthouse', d: 'Glass envelopes & tailored textures.' },
          ].map((c)=> (
            <div key={c.t} className="card p-5">
              <h4 className="font-semibold mb-1">{c.t}</h4>
              <p className="text-white/70">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="philosophy" className="section grid md:grid-cols-3 gap-4">
        {[
          { title: 'Material Truth', desc: 'Stone, wood, and metal—their textures and light are honored faithfully.'},
          { title: 'Human Scale', desc: 'Camera paths and spaces calibrated to how people move and feel.'},
          { title: 'Performance First', desc: 'Compression, LODs, and smart lighting for fluid 60 FPS tours.'},
        ].map((c)=> (
          <div key={c.title} className="card p-5">
            <h4 className="font-semibold mb-1">{c.title}</h4>
            <p className="text-white/70">{c.desc}</p>
          </div>
        ))}
      </section>

      <section id="contact" className="section">
        <div className="card p-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Let’s design your space</h3>
            <p className="text-white/70">Tell us about your project. We’ll craft a tailored concept and walkthrough.</p>
          </div>
          <form className="grid gap-3">
            <input className="px-4 py-3 rounded-2xl bg-white/10 border border-white/20" placeholder="Your name" />
            <input className="px-4 py-3 rounded-2xl bg-white/10 border border-white/20" placeholder="Email" />
            <textarea className="px-4 py-3 rounded-2xl bg-white/10 border border-white/20" rows={3} placeholder="Project brief" />
            <button className="btn">Send Inquiry</button>
          </form>
        </div>
      </section>

      <footer className="mt-10 text-white/50 text-sm flex items-center justify-between">
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <a className="navlink" href={brand.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </footer>

      <ReducedMotion />
    </main>
  );
}
