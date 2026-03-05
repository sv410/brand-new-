import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// gsap.registerPlugin(ScrollTrigger, useGSAP); // Registered in App.tsx

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  description: string;
  services: string[];
  tools: string[];
  actionLabel: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'REAL-TIME COLLABORATIVE CODE EDITOR',
    subtitle: 'SyncCode Editor',
    category: 'Software Engineering',
    year: '2025',
    image: '/realtimecodecollab.jpg',
    description:
      'A scalable real-time collaborative code editor that enables multiple developers to write, edit, and debug code simultaneously. Designed with low-latency WebSocket architecture, it synchronizes edits instantly while preserving version history and user presence tracking.\n\nThe system focuses on performance optimization, operational transformation logic, and seamless developer collaboration — similar to combining Google Docs with VS Code.',
    services: [
      'Real-Time Systems Architecture',
      'WebSocket Integration',
      'Scalable Backend Design',
      'UI/UX Engineering',
    ],
    tools: ['React.js', 'Monaco Editor', 'Node.js', 'Socket.io', 'MongoDB', 'VPS Deployment'],
    actionLabel: 'View on GitHub',
    githubLink: 'https://github.com/sv410/code-editor-',
  },
  {
    id: 3,
    title: 'BLOCKCHAIN-BASED CERTIFICATE VERIFICATION SYSTEM',
    subtitle: 'ChainCred Verify',
    category: 'Blockchain',
    year: '2024',
    image: '/blockchain.png',
    description:
      'A decentralized certificate verification system that eliminates credential fraud by storing tamper-proof academic and professional certificates on blockchain networks.\n\nSmart contracts ensure authenticity, while institutions can issue verifiable digital credentials that employers can validate instantly without intermediaries.',
    services: [
      'Smart Contract Development',
      'Blockchain Architecture',
      'Secure Verification Systems',
      'Full-Stack Development',
    ],
    tools: ['Solidity', 'Ethereum / Polygon', 'React.js', 'Node.js', 'Web3.js', 'VPS Deployment'],
    actionLabel: 'View on GitHub',
    githubLink: 'https://github.com/sv410/block-chain-based-certificate-verification-system-',
  },
  {
    id: 4,
    title: 'AUTOMATED SOCIAL MEDIA ANALYTICS TOOL',
    subtitle: 'InsightPulse AI',
    category: 'Data Analytics',
    year: '2025',
    image: '/project.jpg',
    description:
      'An automated analytics engine that aggregates and analyzes data from multiple social media platforms to identify performance trends, audience behavior, and competitor insights.\n\nBuilt with scalable backend processing and dynamic visualization dashboards, the system enables data-driven content strategies using predictive analytics models.',
    services: [
      'API Integration',
      'Data Engineering',
      'Dashboard Visualization',
      'Trend Prediction',
    ],
    tools: ['Python', 'React', 'Chart.js', 'PostgreSQL', 'Supabase', 'VPS Deployment'],
    actionLabel: 'View on GitHub',
    githubLink: 'https://github.com/sv410/Automated-social-media-analytics-tool',
  },
  {
    id: 5,
    title: 'AI CONTENT GENERATION WITH CUSTOM TRAINING',
    subtitle: 'GenCraft AI',
    category: 'Generative AI',
    year: '2025',
    image: '/project2.jpg',
    description:
      'A domain-adaptive AI content generation system designed to produce industry-specific posts, blogs, and product descriptions with controlled tone and style.\n\nThe platform integrates fine-tuned LLM pipelines with vector databases to deliver contextual, high-quality content generation beyond generic API usage.',
    services: [
      'LLM Fine-Tuning',
      'Prompt Engineering',
      'Vector Search Integration',
      'AI Backend Architecture',
    ],
    tools: ['Python', 'FastAPI', 'OpenAI / Gemini APIs', 'React', 'Vector Databases', 'VPS Deployment'],
    actionLabel: 'View on GitHub',
    githubLink: 'https://github.com/sv410/AI-content-generation-with-custom-training-',
  },
  {
    id: 6,
    title: 'PERSONAL CLOUD STORAGE WITH OPTIMIZATION',
    subtitle: 'NovaDrive',
    category: 'Cloud Engineering',
    year: '2025',
    image: '/project3.jpg',
    description:
      'A custom-built intelligent cloud storage platform with advanced optimization features including smart search, AI-based auto-categorization, duplicate detection, file versioning, and role-based access control.\n\nThe system integrates AI models for semantic file discovery and storage optimization algorithms to reduce redundancy while improving retrieval efficiency.',
    services: [
      'Cloud System Architecture',
      'AI-Based File Classification',
      'Storage Optimization',
      'Secure Access Control',
    ],
    tools: ['Python', 'Node.js', 'React', 'Supabase', 'PostgreSQL', 'VPS Infrastructure'],
    actionLabel: 'View on GitHub',
    githubLink: 'https://github.com/sv410/cloudvault',
  },
];

export function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      const section = sectionRef.current;
      const container = containerRef.current;
      const title = titleRef.current;

      if (!section || !container || !title) return;

      const totalWidth = container.scrollWidth - window.innerWidth;

      // Title animation
      gsap.fromTo(
        title,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );

      // Horizontal scroll
      const horizontalScroll = gsap.to(container, {
        x: () => -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${container.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Parallax on individual cards
      const cards = container.querySelectorAll('.project-card');
      cards.forEach((card) => {
        const image = card.querySelector('.parallax-image');
        if (image) {
          gsap.fromTo(
            image,
            { x: '-15%' },
            {
              x: '5%',
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalScroll,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          );
        }
      });
    },
    { scope: sectionRef }
  );

  const handleProjectClick = contextSafe((project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProject(project);

    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Animation for expanding card (handled by Framer Motion or GSAP transition)
    // Here we'll just set state and use conditional rendering with animations
  });

  const closeProject = contextSafe(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  });

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Section header */}
      <div className="absolute top-8 left-6 md:left-12 z-20">
        <h2
          ref={titleRef}
          className="text-display text-4xl md:text-6xl lg:text-7xl"
        >
          Selected
          <br />
          <span className="text-muted-foreground">Works</span>
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="horizontal-scroll-container h-screen items-center pt-32 pb-12"
      >
        {/* Spacer for title */}
        <div className="shrink-0 w-[10vw] md:w-[20vw]" />

        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card shrink-0 w-[80vw] md:w-[50vw] lg:w-[35vw] h-[60vh] md:h-[75vh] mr-6 md:mr-12 group"
          >
            <button
              onClick={(e) => handleProjectClick(project, e)}
              className="relative block w-full h-full rounded-2xl overflow-hidden bg-secondary text-left"
              data-cursor-hover
            >
              {/* Image with parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="parallax-image w-[120%] h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ marginLeft: '-10%' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Project number */}
                <span className="absolute top-6 right-6 text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Category & Year */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-display text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* View button */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </button>
          </article>
        ))}

        {/* End spacer */}
        <div className="shrink-0 w-[10vw]" />
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <span className="text-xs text-muted-foreground">01</span>
        <div className="w-32 h-px bg-border relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1/5 bg-accent" />
        </div>
        <span className="text-xs text-muted-foreground">
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>

      {/* Full-screen Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={closeProject}
          />

          {/* Project Details Modal */}
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-background/50 hover:bg-background transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent uppercase tracking-widest text-xs font-bold">
                    {selectedProject.category}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {selectedProject.year}
                  </span>
                </div>

                <h2 className="text-display text-4xl md:text-6xl mb-8">
                  {selectedProject.title}
                </h2>

                <p className="text-xl md:text-2xl text-foreground/90 mb-8">
                  {selectedProject.subtitle}
                </p>

                <div className="text-lg text-muted-foreground leading-relaxed mb-12 space-y-5">
                  {selectedProject.description.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Services
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {selectedProject.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                      Tools
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {selectedProject.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 bg-foreground text-background rounded-xl font-medium hover:bg-accent hover:text-foreground transition-all duration-300 block"
                >
                  {selectedProject.actionLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
