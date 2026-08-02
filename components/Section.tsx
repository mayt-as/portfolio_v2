import type { Section as SectionData } from '@/lib/types';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Writing from './sections/Writing';
import Contact from './sections/Contact';
import Custom from './sections/Custom';

/**
 * Dispatches a section's `type` to its component. This is the one place that
 * needs updating when a brand-new section type is added to lib/types.ts —
 * everything else (content, ordering, nav) flows from content/index.ts.
 */
export default function Section({ section }: { section: SectionData }) {
  switch (section.type) {
    case 'hero':
      return <Hero section={section} />;
    case 'about':
      return <About section={section} />;
    case 'experience':
      return <Experience section={section} />;
    case 'projects':
      return <Projects section={section} />;
    case 'skills':
      return <Skills section={section} />;
    case 'education':
      return <Education section={section} />;
    case 'certifications':
      return <Certifications section={section} />;
    case 'writing':
      return <Writing section={section} />;
    case 'contact':
      return <Contact section={section} />;
    case 'custom':
      return <Custom section={section} />;
  }
}
