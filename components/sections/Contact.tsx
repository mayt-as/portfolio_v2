import { site } from '@/content';
import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';
import Icon from '../Icon';

export default function Contact({ section }: SectionProps<'contact'>) {
  const links = section.content.links ?? site.socials;

  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      {section.content.blurb && (
        <Reveal>
          <p className="max-w-xl text-muted leading-relaxed">{section.content.blurb}</p>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <div className="mt-[14px] flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-ink transition-colors hover:border-accent/50"
            >
              <Icon name={link.icon} size={16} />
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
