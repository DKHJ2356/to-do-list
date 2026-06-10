import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { personalInfo } from '../data/portfolio';

/* SVG node graph — architecture panel */
function ArchDiagram() {
  return (
    <svg viewBox="0 0 320 280" className="w-full h-full" style={{ maxHeight: '320px' }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Connection lines */}
      <line x1="160" y1="50" x2="80" y2="120" stroke="#0085FF" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="160" y1="50" x2="240" y2="120" stroke="#0085FF" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="80" y1="120" x2="160" y2="190" stroke="#0085FF" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="240" y1="120" x2="160" y2="190" stroke="#0085FF" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="160" y1="190" x2="160" y2="250" stroke="#0085FF" strokeWidth="1" strokeOpacity="0.25" />

      {/* Client node */}
      <rect x="120" y="24" width="80" height="32" rx="4" fill="#1a1410" stroke="#0085FF" strokeWidth="1.5" filter="url(#glow)" />
      <text x="160" y="44" textAnchor="middle" fill="#7ec8f0" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="500">Client</text>

      {/* API node */}
      <rect x="38" y="100" width="84" height="32" rx="4" fill="#1a1410" stroke="#0085FF" strokeWidth="1.5" filter="url(#glow)" />
      <text x="80" y="120" textAnchor="middle" fill="#7ec8f0" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="500">REST API</text>

      {/* Auth node */}
      <rect x="198" y="100" width="84" height="32" rx="4" fill="#1a1410" stroke="#0085FF" strokeWidth="1" strokeOpacity="0.6" />
      <text x="240" y="120" textAnchor="middle" fill="#7ec8f0" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="500" opacity="0.7">Auth</text>

      {/* Database node */}
      <rect x="110" y="170" width="100" height="32" rx="4" fill="#1a1410" stroke="#0085FF" strokeWidth="1.5" filter="url(#glow)" />
      <text x="160" y="190" textAnchor="middle" fill="#7ec8f0" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="500">PostgreSQL</text>

      {/* Cache node */}
      <rect x="120" y="232" width="80" height="28" rx="4" fill="#1a1410" stroke="#0085FF" strokeWidth="1" strokeOpacity="0.5" />
      <text x="160" y="250" textAnchor="middle" fill="#7ec8f0" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.7">Redis Cache</text>

      {/* Accent dots at intersections */}
      <circle cx="160" cy="40" r="2" fill="#0085FF" filter="url(#glow)" />
      <circle cx="80" cy="116" r="2" fill="#0085FF" filter="url(#glow)" />
      <circle cx="160" cy="186" r="2" fill="#0085FF" filter="url(#glow)" />
    </svg>
  );
}

/* Code snippet panel */
function CodeSnippet() {
  const lines = [
    { indent: 0, tokens: [{ t: '// api/users/[id].ts', c: '#4a5568' }] },
    { indent: 0, tokens: [] },
    { indent: 0, tokens: [{ t: 'export async function ', c: '#7ec8f0' }, { t: 'GET', c: '#f0ebe5' }, { t: '(req: Request) {', c: '#6b6055' }] },
    { indent: 1, tokens: [{ t: 'const ', c: '#7ec8f0' }, { t: 'user ', c: '#f0ebe5' }, { t: '= await ', c: '#7ec8f0' }, { t: 'authenticate', c: '#0085FF' }, { t: '(req)', c: '#6b6055' }] },
    { indent: 0, tokens: [] },
    { indent: 1, tokens: [{ t: 'return ', c: '#7ec8f0' }, { t: 'db', c: '#f0ebe5' }, { t: '.users', c: '#0085FF' }] },
    { indent: 2, tokens: [{ t: '.findUnique({', c: '#6b6055' }] },
    { indent: 3, tokens: [{ t: 'where: ', c: '#7ec8f0' }, { t: '{ id: user.id }', c: '#f0ebe5' }] },
    { indent: 2, tokens: [{ t: '})', c: '#6b6055' }] },
    { indent: 0, tokens: [{ t: '}', c: '#6b6055' }] },
  ];

  return (
    <div
      className="w-full h-full flex flex-col justify-center font-mono-custom text-xs leading-relaxed"
      style={{ padding: '1.5rem', background: 'rgba(26,20,16,0.8)', borderRadius: '6px', border: '1px solid rgba(0,133,255,0.15)' }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ paddingLeft: `${line.indent * 1.2}rem`, minHeight: '1.4rem' }}>
          {line.tokens.map((tok, j) => (
            <span key={j} style={{ color: tok.c }}>{tok.t}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statementRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      gsap.set([leftRef.current, rightRef.current, statementRef.current, subRef.current], { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.3 });

    /* 1 — fade in both panels */
    tl.from([leftRef.current, rightRef.current], {
      opacity: 0, duration: 0.6, ease: 'power2.out', stagger: 0,
    })

    /* 2 — pull apart */
    .to(leftRef.current, { x: '-8vw', duration: 0.8, ease: 'power3.inOut' }, '+=0.1')
    .to(rightRef.current, { x: '8vw', duration: 0.8, ease: 'power3.inOut' }, '<')

    /* 3 — hold */
    .addPause('+=0.4')

    /* 4 — seal back */
    .to(leftRef.current, { x: 0, duration: 0.7, ease: 'power3.inOut' })
    .to(rightRef.current, { x: 0, duration: 0.7, ease: 'power3.inOut' }, '<')

    /* 5 — statement appears */
    .from(statementRef.current, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    .from(subRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1');

    return () => tl.kill();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '56px' }}
    >
      {/* Subtle warm grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(240,235,229,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,229,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Warm ambient glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.8), transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-24">

        {/* Split panels */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12 md:mb-16"
          style={{ minHeight: '280px' }}>
          <div ref={leftRef} className="flex-1 flex items-center justify-center">
            <ArchDiagram />
          </div>
          <div ref={rightRef} className="flex-1 flex items-center justify-center">
            <CodeSnippet />
          </div>
        </div>

        {/* Statement — appears after seal */}
        <div className="text-center md:text-left">
          <p
            ref={statementRef}
            className="statement"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
          >
            {personalInfo.statement}
          </p>
          <p
            ref={subRef}
            className="font-mono-custom mt-4"
            style={{ color: 'var(--color-muted)', fontSize: '0.875rem', letterSpacing: '0.05em' }}
          >
            {personalInfo.substatement}
          </p>
        </div>
      </div>
    </section>
  );
}
