import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Lock, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const techColors = {
  TypeScript: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  JavaScript: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Next.js': 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  HTML: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  CSS: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

function TechBadge({ tech }) {
  const cls = techColors[tech] || 'bg-slate-700/40 text-slate-400 border-slate-600/20';
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${cls}`}>
      {tech}
    </span>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.projects-header', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
      gsap.from('.project-card', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 80%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="projects-header mb-16">
          <p className="section-label mb-3">What I&apos;ve built</p>
          <h2 className="section-title underline-accent">Projects</h2>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card card flex flex-col p-6 group relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <Github size={18} className="text-cyan-400" />
                </div>
                <div className="flex items-center gap-2">
                  {project.isPrivate ? (
                    <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
                      <Lock size={10} /> Private
                    </span>
                  ) : (
                    <span className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full">
                      Public
                    </span>
                  )}
                  <span className="text-xs text-slate-600">{project.year}</span>
                </div>
              </div>

              <h3 className="font-display font-semibold text-slate-100 mb-2">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <TechBadge key={t} tech={t} />
                ))}
              </div>

              {project.isPrivate ? (
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <Lock size={13} /> Repository is private
                </span>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <Github size={14} />
                  View on GitHub
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
