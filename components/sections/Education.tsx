import Image from 'next/image';
import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';

export default function Education({ section }: SectionProps<'education'>) {
  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      <div className="space-y-6">
        {section.content.items.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.05}>
            <div className="flex gap-4">
              {edu.logo && (
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  width={40}
                  height={40}
                  className="h-10 w-10 flex-none rounded-md border border-border bg-surface object-contain p-1.5"
                />
              )}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-medium text-ink">{edu.institution}</h3>
                  <span className="font-mono text-xs text-muted">{edu.period}</span>
                </div>
                <p className="text-sm text-muted">{edu.degree}</p>
                {edu.detail && <p className="text-sm text-muted">{edu.detail}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
