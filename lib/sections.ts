import type { Section } from './types';

/**
 * A section is "empty" when the collection it renders has nothing in it.
 * Hero, about and contact are always considered filled — they are driven by
 * site config and prose rather than a list.
 */
function hasContent(section: Section): boolean {
  switch (section.type) {
    case 'hero':
    case 'contact':
      return true;
    case 'about':
      return section.content.paragraphs.length > 0;
    case 'skills':
      return section.content.groups.some((g) => g.items.length > 0);
    case 'custom':
      return Boolean(section.content.lead) || (section.content.entries?.length ?? 0) > 0;
    default:
      return section.content.items.length > 0;
  }
}

/** Sections that should actually render, in order. */
export function visibleSections(sections: Section[]): Section[] {
  return sections.filter((s) => s.enabled !== false && hasContent(s));
}

/** Nav entries derived from the same source of truth as the page itself. */
export function navItems(sections: Section[]): { id: string; label: string }[] {
  return visibleSections(sections)
    .filter((s) => Boolean(s.nav))
    .map((s) => ({ id: s.id, label: s.nav as string }));
}
