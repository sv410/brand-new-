import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger, useGSAP); // Registered in App.tsx

const experiences = [
  {
    company: 'CareYogi',
    role: 'SDE Intern',
    period: 'Feb 2026 – Present',
    logo: '/logos/careyogi.png',
    summary:
      'Working on iOS-based digital health solutions focused on Apple Health (HealthKit) integration and secure health data workflows.',
    details: [
      'Contributing to HealthKit integration for accessing and processing user health metrics.',
      'Supporting PoC initiatives to evaluate data completeness, sync reliability, and permission handling.',
      'Assisting in backend logic design for secure data validation and scalable elder-care monitoring systems.',
    ],
    tech: ['iOS', 'Swift (HealthKit)', 'Python', 'REST APIs', 'Git'],
  },
  {
    company: 'Microsoft – Code Without Barriers',
    role: 'Mentee',
    period: 'Apr 2025 – Jun 2025',
    logo: '/logos/microsoft.svg',
    summary:
      'Participated in a mentorship program focused on industry-ready engineering practices and modern DevOps culture.',
    details: [
      'Explored Azure DevOps pipelines and CI/CD workflows for production-ready systems.',
      'Worked with mentors on collaborative development strategies and code review best practices.',
    ],
    tech: ['Azure DevOps', 'Git', 'CI/CD'],
  },
  {
    company: 'University of North Texas',
    role: 'Research Intern',
    period: '2025',
    logo: '/logos/unt.png',
    summary:
      'Worked on EEG-based research under faculty supervision, focusing on neural signal preprocessing and analysis.',
    details: [
      'Assisted in interpreting EEG data and applying signal processing techniques.',
      'Documented structured research workflows for reproducible experiments.',
    ],
    tech: ['Python', 'Data Analysis', 'Signal Processing'],
  },
  {
    company: 'JPMorgan Chase',
    role: 'Software Engineering Virtual Intern',
    period: 'Jan 2024 – Feb 2024',
    logo: '/logos/jpmorgan.svg',
    summary:
      'Completed a backend microservices simulation focused on event-driven architecture.',
    details: [
      'Integrated Apache Kafka with a Spring Boot microservice to process transaction messages.',
      'Implemented transaction validation and persistence using Spring Data JPA and H2 SQL.',
      'Built REST endpoints and validated system reliability with Maven test suites.',
    ],
    tech: ['Java', 'Spring Boot', 'Apache Kafka', 'REST APIs', 'Spring Data JPA', 'H2 SQL', 'Maven'],
  },
  {
    company: 'ScaleX4',
    role: 'Frontend Intern',
    period: 'Mar 2024 – May 2024',
    logo: '/logos/scalex4.png',
    summary:
      'Built responsive and scalable frontend components for production web apps.',
    details: [
      'Implemented reusable UI components and integrated REST APIs.',
      'Improved performance and maintainability through structured component design.',
    ],
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    company: 'WissionTalks™',
    role: 'Graphic Designer',
    period: 'Jun 2024 – Jul 2024',
    logo: '/wission talks.jpg',
    summary:
      'Led the poster design and branding initiatives for the company.',
    details: [
      'Conceptualized and created promotional posters for company events and talks.',
      'Collaborated with the marketing team to align visual designs with brand identity.'
    ],
    tech: ['User Experience (UX)', 'Figma (Software)', 'Graphic Design'],
  },
  {
    company: 'Google for Developers',
    role: 'Intern',
    period: 'Apr 2024 – Jun 2024',
    logo: '/google.png',
    summary:
      'The Android Developer Virtual Internship Program (Cohort 6) focuses on Android app development using Kotlin.',
    details: [
      'Learned about the fundamentals of Kotlin, Android Studio setup, UI/UX design, and core Android components such as activities, fragments, and intents.',
      'Covered advanced topics like data persistence with Room, networking with Retrofit, and Firebase integration.'
    ],
    tech: ['Android Development', 'Database Management System (DBMS)', 'Android Studio', 'Kotlin'],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = sectionRef.current?.querySelectorAll('.experience-card');
      if (!cards) return;

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen py-32 px-6 md:px-12"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-5xl rounded-[40px] bg-gradient-to-b from-accent/18 via-accent/0 to-transparent blur-3xl" />
      <div className="max-w-6xl mx-auto relative">
        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Experience
        </p>

        {/* Heading */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
              Experience across
              <br />
              <span className="gradient-text">research, product & systems.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm md:text-base text-muted-foreground">
            From health tech and fintech to developer tools, each role adds depth to how I design,
            build, and ship reliable software.
          </p>
        </div>

        {/* Modern staggered timeline */}
        <div className="relative">
          <div className="absolute inset-y-6 left-6 md:left-1/2 md:-translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border/70 to-transparent pointer-events-none" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <article
                  key={exp.company + exp.role}
                  className="experience-card relative grid md:grid-cols-2 gap-6 md:gap-10"
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-accent shadow-[0_0_0_10px_rgba(250,204,21,0.12)]" />

                  {/* Meta */}
                  <div
                    className={`
                      mt-4 md:mt-0
                      ${isLeft ? 'md:pr-10 md:text-right md:order-1' : 'md:pl-10 md:order-2'}
                    `}
                  >
                    <div
                      className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'
                        }`}
                    >
                      <p className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                        {exp.period}
                      </p>
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-sm font-medium text-foreground/90">{exp.company}</p>
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/5 border border-border/80 shadow-sm grid place-items-center overflow-hidden shrink-0">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain p-1.5 opacity-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      glass relative overflow-hidden rounded-3xl border border-border/70
                      p-5 md:p-6
                      ${isLeft ? 'md:pl-10 md:order-2' : 'md:pr-10 md:order-1'}
                    `}
                  >
                    <div className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                    <div className="relative space-y-4">
                      <p className="text-sm md:text-[0.95rem] text-muted-foreground">
                        {exp.summary}
                      </p>
                      <ul className="space-y-2 text-sm md:text-[0.95rem] text-muted-foreground">
                        {exp.details.map((line) => (
                          <li key={line} className="flex gap-2">
                            <span className="mt-[6px] h-[5px] w-[5px] rounded-full bg-accent/80 shrink-0" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2.5 pt-1">
                        {exp.tech.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full bg-secondary/70 border border-border/70 text-[0.7rem] md:text-xs text-muted-foreground hover:text-foreground hover:border-accent hover:bg-secondary transition-colors duration-200"
                            data-cursor-hover
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

