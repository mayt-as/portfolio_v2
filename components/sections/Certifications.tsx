import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';

export default function Certifications({ section }: SectionProps<'certifications'>) {
  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {section.content.items.map((cert, i) => {
          const inner = (
            <>
              <p className="text-sm text-ink">{cert.name}</p>
              <p className="mt-0.5 text-xs text-muted">
                {cert.issuer}
                {cert.issued && ` · Issued ${cert.issued}`}
                {cert.expires && ` · Expires ${cert.expires}`}
              </p>
            </>
          );
          return (
            <Reveal key={cert.name} delay={(i % 6) * 0.03} className="h-full">
              {cert.href ? (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full rounded-md border border-border p-4 transition-colors hover:border-accent/40"
                >
                  {inner}
                </a>
              ) : (
                <div className="h-full rounded-md border border-border p-4">{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
