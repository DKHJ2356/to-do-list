import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-tag', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-name', { y: 60, opacity: 0, duration: 0.9 }, '-=0.3')
        .from('.hero-headline', { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-bio', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { y: 20, opacity: 0, stagger: 0.12, duration: 0.6 }, '-=0.3')
        .from('.hero-socials', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.1');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <p className="hero-tag section-label mb-6">Portfolio & CV</p>

        <h1 className="hero-name font-display font-bold leading-none mb-4" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
          Hi, I&apos;m{' '}
          <span className="text-cyan-400" style={{ textShadow: '0 0 60px rgba(34,211,238,0.4)' }}>
            {personalInfo.name}
          </span>
          <span className="text-slate-600">.</span>
        </h1>

        <p
          className="hero-headline font-display font-semibold text-slate-400 mb-6"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
        >
          {personalInfo.headline}
        </p>

        <p className="hero-bio text-slate-400 max-w-xl leading-relaxed mb-10 text-base md:text-lg">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a href="#contact" className="hero-cta btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <Mail size={16} />
            Get in touch
          </a>
          <a href="#projects" className="hero-cta btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View projects
          </a>
        </div>

        <div className="hero-socials flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <MapPin size={14} className="text-cyan-400" />
            {personalInfo.location}
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-sm"
          >
            <Mail size={14} />
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-400 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
