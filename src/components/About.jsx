import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Server, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: Code2, label: 'Software Engineer', desc: 'Building and shipping web applications' },
  { icon: Database, label: 'Database Manager', desc: 'Data integrity, admin & optimisation' },
  { icon: Server, label: 'IT Developer', desc: 'Infrastructure, systems & security' },
  { icon: Globe, label: 'Remote & On-site', desc: 'Based in Dhaka, Bangladesh' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
      gsap.from('.about-card', {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-cards', start: 'top 80%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="about-text mb-16">
          <p className="section-label mb-3">About me</p>
          <h2 className="section-title underline-accent mb-8">Who I am</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            {personalInfo.bio}
          </p>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mt-4">
            I&apos;m passionate about clean system architecture, data accuracy, and building
            digital products that solve real problems. When I&apos;m not writing code or managing
            databases, I&apos;m exploring the latest in web technology and IT best practices.
          </p>
        </div>

        <div className="about-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="about-card card p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-cyan-400" />
              </div>
              <h3 className="font-display font-semibold text-slate-100 mb-1 text-sm">{label}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
