import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';

export default function Custom({ section }: SectionProps<'custom'>) {
  const { lead, entries } = section.content;

  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      {lead && (
        <Reveal>
          <p className="text-muted leading-relaxed">{lead}</p>
        </Reveal>
      )}

      {entries && entries.length > 0 && (
        <div className={lead ? 'mt-8 space-y-6' : 'space-y-6'}>
          {entries.map((entry, i) => {
            const body = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium text-ink">{entry.title}</h3>
                  {entry.meta && <span className="font-mono text-xs text-muted">{entry.meta}</span>}
                </div>
                {entry.description && <p className="mt-1 text-sm text-muted">{entry.description}</p>}
                {entry.bullets && entry.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1.5">
                    {entry.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted leading-relaxed">
                        <span className="text-accent">&mdash; </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            );
            return (
              <Reveal key={entry.title} delay={i * 0.05}>
                {entry.href ? (
                  <a href={entry.href} target="_blank" rel="noreferrer" className="block">
                    {body}
                  </a>
                ) : (
                  body
                )}
              </Reveal>
            );
          })}
        </div>
      )}
    </SectionShell>
  );
}
