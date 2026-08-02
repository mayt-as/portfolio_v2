import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';

export default function Writing({ section }: SectionProps<'writing'>) {
  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      <div className="space-y-6">
        {section.content.items.map((item, i) => {
          const isExternal = item.href.startsWith('http');
          return (
            <Reveal key={item.href} delay={i * 0.05}>
              <a
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="group block"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium text-ink link-underline">{item.title}</h3>
                  {item.date && <span className="font-mono text-xs text-muted">{item.date}</span>}
                </div>
                {item.description && <p className="mt-1 text-sm text-muted">{item.description}</p>}
                {item.source && <p className="mt-1 text-xs text-muted/70">{item.source}</p>}
              </a>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
