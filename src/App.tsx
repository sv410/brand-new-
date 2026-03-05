import { lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CustomCursor } from './components/CustomCursor';
import { MouseBackground } from './components/MouseBackground';
import { HeroSection } from './components/HeroSection';
import { FloatingNav } from './components/FloatingNav';

const HorizontalGallery = lazy(() =>
  import('./components/HorizontalGallery').then((m) => ({ default: m.HorizontalGallery })),
);
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection })),
);
const ExperienceSection = lazy(() =>
  import('./components/ExperienceSection').then((m) => ({ default: m.ExperienceSection })),
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection })),
);

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  useGSAP(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative noise-fixed">
      <CustomCursor />
      <MouseBackground />

      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={<div className="min-h-screen" />}>
          <HorizontalGallery />
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
        </Suspense>
      </main>

      <FloatingNav />
    </div>
  );
}

export default App;
