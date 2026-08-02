import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';

export default function Skills({ section }: SectionProps<'skills'>) {
  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      <div className="grid gap-8 sm:grid-cols-2">
        {section.content.groups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted">{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-border px-2.5 py-1 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
