import Image from 'next/image';
import type { SectionProps } from '@/lib/types';
import { asset } from '@/lib/utils';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';

export default function Experience({ section }: SectionProps<'experience'>) {
  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      <div className="space-y-12">
        {section.content.items.map((company, i) => (
          <Reveal key={company.company} delay={i * 0.05}>
            <div className="flex gap-4">
              <div className="mt-1 h-10 w-10 flex-none">
                {company.logo && (
                  <Image
                    src={asset(company.logo)}
                    alt={company.company}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-md border border-border bg-surface object-contain p-1.5"
                  />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium text-ink">
                    {company.href ? (
                      <a href={company.href} target="_blank" rel="noreferrer" className="link-underline">
                        {company.company}
                      </a>
                    ) : (
                      company.company
                    )}
                  </h3>
                  {company.period && (
                    <span className="font-mono text-xs text-muted">{company.period}</span>
                  )}
                </div>
                {company.location && <p className="text-xs text-muted">{company.location}</p>}

                <div className="mt-4 space-y-6 border-l border-border pl-5">
                  {company.roles.map((role) => (
                    <div key={role.title + role.period}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="text-sm font-medium text-ink">{role.title}</h4>
                        <span className="font-mono text-xs text-muted">{role.period}</span>
                      </div>
                      {role.type && <p className="text-xs text-muted">{role.type}</p>}

                      {role.highlights && role.highlights.length > 0 && (
                        <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-accent">
                          {role.highlights.map((h) => (
                            <li key={h} className="text-sm text-muted leading-relaxed">
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {role.skills && role.skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {role.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
