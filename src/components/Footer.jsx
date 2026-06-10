import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer
      className="py-6 px-6 text-center"
      style={{ borderTop: '1px solid rgba(240,235,229,0.04)' }}
    >
      <p className="font-mono-custom text-xs" style={{ color: 'var(--color-muted)', opacity: 0.5 }}>
        © {new Date().getFullYear()} {personalInfo.name} — built with intent
      </p>
    </footer>
  );
}
