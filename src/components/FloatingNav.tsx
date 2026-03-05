import { useState, useEffect } from 'react';
import { Home, Briefcase, User, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from './ui/drawer';

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'works', label: 'Works', icon: Briefcase },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Delay showing nav
    const showTimer = setTimeout(() => setIsVisible(true), 1500);

    // Intersection observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      clearTimeout(showTimer);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      )}
    >
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300',
                isActive
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              )}
              data-cursor-hover
            >
              <Icon className="w-4 h-4" />
              <span
                className={cn(
                  'text-sm font-medium transition-all duration-300 overflow-hidden',
                  isActive ? 'w-auto opacity-100 ml-0' : 'w-0 opacity-0'
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        <div className="w-px h-6 bg-border mx-1" />

        <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DrawerTrigger asChild>
            <button
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              data-cursor-hover
            >
              <Menu className="w-4 h-4" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-background/80 backdrop-blur-2xl border-t border-border/50 max-h-[85vh]">
            <div className="mx-auto w-full max-w-4xl p-8 md:p-12">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-display text-4xl md:text-5xl mb-4">Explore</h3>
                  <p className="text-muted-foreground">Deep dive into my creative process and philosophy.</p>
                </div>
                <DrawerClose asChild>
                  <button className="p-4 rounded-full bg-secondary hover:bg-border transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </DrawerClose>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Navigation</h4>
                    <div className="grid gap-4">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            scrollToSection(item.id);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center justify-between group text-2xl hover:text-accent transition-colors text-left"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Insights</h4>
                    <div className="space-y-6">
                      <div className="group cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-1">01 / AI Engineering</p>
                        <h5 className="text-xl group-hover:text-accent transition-colors">
                          From Model to Production
                        </h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          Designing and deploying machine learning systems beyond experimentation.
                        </p>
                      </div>
                      <div className="group cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-1">02 / Backend Systems</p>
                        <h5 className="text-xl group-hover:text-accent transition-colors">
                          Building Scalable AI Infrastructure
                        </h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          Architecting reliable APIs, data pipelines, and backend services for intelligent applications.
                        </p>
                      </div>
                      <div className="group cursor-pointer">
                        <p className="text-sm text-muted-foreground mb-1">03 / Generative AI</p>
                        <h5 className="text-xl group-hover:text-accent transition-colors">
                          Designing Practical GenAI Systems
                        </h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          Building LLM-powered workflows, retrieval systems, and intelligent automation beyond simple API calls.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-8 text-sm text-muted-foreground">
                  <a href="https://www.linkedin.com/in/srivanivinnakota4/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a>
                  <a href="https://github.com/sv410" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
                  <a href="#" className="hover:text-foreground">Resume</a>
                </div>
                <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Srivani Vinnakota</p>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
