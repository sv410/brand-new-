import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger, useGSAP); // Registered in App.tsx

const skillGroups = [
  {
    label: 'Programming',
    items: ['Python', 'Java', 'C/C++', 'SQL (PostgreSQL)', 'JavaScript', 'R'],
  },
  {
    label: 'AI & Data Science',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Data Analysis & Visualization',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
  },
  {
    label: 'Backend & APIs',
    items: [
      'Flask',
      'FastAPI',
      'Node.js',
      'RESTful API Design',
      'Authentication (JWT/OAuth Basics)',
    ],
  },
  {
    label: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Material UI', 'Tailwind CSS'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Git', 'GitHub', 'Docker', 'Google Cloud Platform', 'Linux'],
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const elements = sectionRef.current?.querySelectorAll('.animate-in');
      if (!elements) return;

      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
            delay: index * 0.1,
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-32 px-6 md:px-12"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-64 max-w-5xl rounded-[32px] bg-gradient-to-r from-accent/10 via-accent/0 to-accent/15 blur-3xl" />
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <p className="animate-in text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          About
        </p>

        {/* Main statement */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
          <h2 className="animate-in text-display text-4xl md:text-5xl lg:text-6xl">
            I build AI systems that move{' '}
            <span className="text-accent">beyond experimentation</span> into deployment.
          </h2>

          <div className="space-y-6">
            <p className="animate-in text-lg text-muted-foreground leading-relaxed">
              As a Data Science student graduating in May 2026, I focus on machine learning
              engineering, backend architecture, and scalable data‑driven systems. My work
              centers on designing intelligent pipelines, integrating AI into production
              environments, and building reliable APIs that power decision‑making.
            </p>
            <p className="animate-in text-lg text-muted-foreground leading-relaxed">
              I&apos;m especially interested in applied AI — from health‑tech integrations and
              neural signal analysis to event‑driven microservices and distributed backend
              systems. I approach engineering with a strong systems mindset, emphasizing
              scalability, robustness, and measurable impact.
            </p>
            <p className="animate-in text-lg text-muted-foreground leading-relaxed">
              My goal is to design AI systems that are not just accurate, but production‑ready
              and sustainable.
            </p>
          </div>
        </div>

        {/* Stats + availability */}
        <div className="animate-in mb-24">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Currently Open To
            </p>
            <p className="text-sm text-muted-foreground max-w-xl">
              SWE · SDE · SWE Intern · AI Engineer · Data Engineer
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border/60">
            {[
              { value: '10+', label: 'Projects Built' },
              { value: '15+', label: 'AI/ML Models Developed' },
              { value: '5+', label: 'Production Systems Designed' },
              { value: '5+', label: 'Research & Industry Experiences' },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-display text-4xl md:text-5xl text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="animate-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Expertise / Skills
            </p>
            <p className="text-sm text-muted-foreground max-w-xl">
              A multi‑disciplinary stack across AI, backend, frontend, and DevOps — tailored for
              data‑driven, production‑ready systems.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 lg:grid-cols-[1.2fr,1.1fr]">
            <div className="space-y-5">
              {skillGroups.slice(0, 3).map((group) => (
                <div
                  key={group.label}
                  className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background/70 via-background/30 to-accent/5 p-5 md:p-6"
                >
                  <div className="absolute inset-y-0 right-0 w-32 opacity-30 bg-gradient-to-t from-accent/20 via-transparent to-transparent blur-3xl" />
                  <div className="relative space-y-3">
                    <p className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full bg-secondary/70 border border-border/70 text-[0.7rem] md:text-xs text-muted-foreground hover:text-foreground hover:border-accent hover:bg-secondary transition-colors duration-200"
                          data-cursor-hover
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {skillGroups.slice(3).map((group) => (
                <div
                  key={group.label}
                  className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-5 md:p-6"
                >
                  <div className="absolute -top-10 -right-6 h-28 w-28 rounded-full bg-accent/10 blur-2xl" />
                  <div className="relative space-y-3">
                    <p className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full bg-secondary/60 border border-border/70 text-[0.7rem] md:text-xs text-muted-foreground hover:text-foreground hover:border-accent hover:bg-secondary transition-colors duration-200"
                          data-cursor-hover
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
