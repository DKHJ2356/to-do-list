import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock } from 'lucide-react';
import { experience } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.exp-header', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
      gsap.from('.exp-card', {
        x: -40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.exp-list', start: 'top 80%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="exp-header mb-16">
          <p className="section-label mb-3">Work history</p>
          <h2 className="section-title underline-accent">Experience</h2>
        </div>

        <div className="exp-list relative">
          {/* Timeline spine */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((job) => (
              <div key={job.id} className="exp-card relative md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-slate-100 text-lg leading-tight">
                        {job.role}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm mt-0.5">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="text-xs text-slate-400 font-medium bg-slate-800 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                      <span className="text-xs text-slate-500">{job.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-cyan-400/60" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-cyan-400/60" />
                      {job.duration}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span key={skill} className="badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
