import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Lock, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.proj-header', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
      gsap.from('.proj-card', {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.proj-grid', start: 'top 80%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-6 md:px-12 lg:px-24"
      style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto">

        <div className="proj-header mb-20">
          <p className="section-label mb-4">proof</p>
          <h2 className="statement" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Shipped.
          </h2>
          <p className="font-mono-custom mt-3 text-sm" style={{ color: 'var(--color-muted)' }}>
            Three decisions. Not twelve projects.
          </p>
        </div>

        <div className="proj-grid flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="proj-card card p-8 md:p-10 group relative overflow-hidden"
            >
              {/* Top accent — only on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
              />

              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                {/* Left: name + stack */}
                <div className="md:w-64 shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="statement" style={{ fontSize: '1.1rem' }}>{project.name}</h3>
                    {project.isPrivate && (
                      <span className="proof-badge flex items-center gap-1">
                        <Lock size={9} /> private
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map(t => (
                      <span key={t} className="proof-badge">{t}</span>
                    ))}
                  </div>
                  <span className="font-mono-custom text-xs" style={{ color: 'var(--color-muted)' }}>
                    {project.year}
                  </span>
                </div>

                {/* Right: the decision */}
                <div className="flex-1">
                  <p className="font-mono-custom text-xs mb-2" style={{ color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
                    // decision made
                  </p>
                  <p className="leading-relaxed" style={{ color: 'var(--color-muted)', fontSize: '0.95rem', maxWidth: '60ch' }}>
                    {project.decision}
                  </p>

                  {!project.isPrivate && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 font-mono-custom text-xs transition-colors"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      <Github size={13} />
                      view_source()
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
