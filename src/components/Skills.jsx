import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillGroups } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.skills-header', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
      gsap.from('.skill-group', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.skills-grid', start: 'top 80%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="skills-header mb-16">
          <p className="section-label mb-3">What I know</p>
          <h2 className="section-title underline-accent">Skills</h2>
        </div>

        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="skill-group card p-6">
              <h3
                className="font-display font-semibold text-xs uppercase tracking-widest text-cyan-400 mb-5 pb-3"
                style={{ borderBottom: '1px solid rgba(34,211,238,0.15)' }}
              >
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"
                      style={{ boxShadow: '0 0 6px rgba(34,211,238,0.6)' }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
