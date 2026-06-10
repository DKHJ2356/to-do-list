import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { buildProcess } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function HowIBuild() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.build-header', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
      gsap.from('.build-step', {
        y: 40, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.build-steps', start: 'top 80%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="build" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <div className="build-header mb-20">
          <p className="section-label mb-4">process</p>
          <h2
            className="statement"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            How I build.
          </h2>
          <p className="font-mono-custom mt-3 text-sm" style={{ color: 'var(--color-muted)' }}>
            Architecture decides. Code executes. In that order.
          </p>
        </div>

        <div className="build-steps flex flex-col gap-0">
          {buildProcess.map((step, i) => (
            <div
              key={step.step}
              className="build-step flex flex-col md:flex-row gap-6 md:gap-16 py-10"
              style={{
                borderTop: '1px solid rgba(240,235,229,0.05)',
                borderBottom: i === buildProcess.length - 1 ? '1px solid rgba(240,235,229,0.05)' : 'none',
              }}
            >
              {/* Step number */}
              <div className="shrink-0 md:w-16">
                <span className="font-mono-custom font-semibold" style={{ color: 'var(--color-accent)', fontSize: '0.75rem' }}>
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="statement mb-3"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                >
                  {step.title}
                </h3>
                <p className="leading-relaxed mb-5" style={{ color: 'var(--color-muted)', maxWidth: '52ch', fontSize: '0.95rem' }}>
                  {step.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.proof.map(p => (
                    <span key={p} className="proof-badge">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
