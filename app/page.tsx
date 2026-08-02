import { sections } from '@/content';
import { visibleSections, navItems } from '@/lib/sections';
import Nav from '@/components/Nav';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

export default function Home() {
  const pageSections = visibleSections(sections);

  return (
    <>
      <Nav items={navItems(sections)} />
      <main>
        {pageSections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </>
  );
}
