import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function GitHubCTA() {
  const sectionRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* Scroll reveal */
    if (!prefersReduced) {
      const ctx = gsap.context(() => {
        gsap.from('.cta-content', {
          y: 40, opacity: 0, duration: 0.9, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        });
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  /* Magnetic button */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const btn = btnRef.current;
    if (!btn) return;

    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 80) {
        gsap.to(btn, { x: dx * 0.35, y: dy * 0.35, duration: 0.3, ease: 'power2.out' });
      } else {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      }
    };

    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    };

    window.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="py-40 px-6 md:px-12 lg:px-24 text-center">
      <div className="cta-content max-w-3xl mx-auto">
        <p className="section-label mb-6">open to the right founder</p>

        <h2
          className="statement mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Still here?
        </h2>

        <p
          className="font-mono-custom mb-16 leading-relaxed"
          style={{ color: 'var(--color-muted)', fontSize: '0.9rem', maxWidth: '44ch', margin: '0 auto 4rem' }}
        >
          If you're the technical founder who builds his own team —
          and you're still reading — you probably qualify.
        </p>

        <a
          ref={btnRef}
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-qualify inline-flex"
        >
          <Github size={16} />
          github.com/DKHJ2356
        </a>
      </div>
    </section>
  );
}
