import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';

const links = [
  { href: '#build', label: 'how_i_build()' },
  { href: '#projects', label: 'projects[]' },
  { href: '#cta', label: '→ github' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(13,10,7,0.92)' : 'transparent',
        borderColor: 'rgba(240,235,229,0.05)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span
          className="font-mono-custom text-sm font-semibold"
          style={{ color: 'var(--color-accent)' }}
        >
          {personalInfo.name}<span style={{ color: 'var(--color-muted)' }}>@dev</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => go(e, href)}
                className="font-mono-custom text-xs hover:opacity-100 transition-opacity"
                style={{ color: 'var(--color-muted)', opacity: 0.7 }}
                onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--color-muted)'}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
