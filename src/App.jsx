import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowIBuild from './components/HowIBuild';
import Projects from './components/Projects';
import GitHubCTA from './components/GitHubCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar />
      <main>
        <Hero />
        <HowIBuild />
        <Projects />
        <GitHubCTA />
      </main>
      <Footer />
    </div>
  );
}
