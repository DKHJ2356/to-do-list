import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, MapPin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="contact-content text-center max-w-2xl mx-auto">
          <p className="section-label mb-3">Let&apos;s connect</p>
          <h2 className="section-title underline-accent mx-auto mb-6" style={{ display: 'block', textAlign: 'center' }}>
            Get in touch
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            I&apos;m open to freelance projects, collaboration, and full-time opportunities.
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary w-full sm:w-auto justify-center">
              <Mail size={16} />
              Send an email
              <ArrowUpRight size={14} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto justify-center"
            >
              <Github size={16} />
              GitHub profile
            </a>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card p-5 flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <Mail size={16} className="text-cyan-400" />
              </div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Email</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-slate-300 hover:text-cyan-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="card p-5 flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <Github size={16} className="text-cyan-400" />
              </div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">GitHub</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                DKHJ2356
              </a>
            </div>

            <div className="card p-5 flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                <MapPin size={16} className="text-cyan-400" />
              </div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Location</span>
              <span className="text-sm text-slate-300">{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
