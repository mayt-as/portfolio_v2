import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';

export default function About({ section }: SectionProps<'about'>) {
  const { paragraphs, stats } = section.content;

  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      <div className="space-y-4">
        {paragraphs.map((p) => (
          <Reveal key={p}>
            <p className="text-muted leading-relaxed">{p}</p>
          </Reveal>
        ))}
      </div>

      {stats && stats.length > 0 && (
        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl text-accent">{stat.value}</dd>
                <dd className="mt-1 text-xs text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </SectionShell>
  );
}
