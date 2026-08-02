import type { SectionProps } from '@/lib/types';
import SectionShell from '../SectionShell';
import Reveal from '../Reveal';
import Icon from '../Icon';

export default function Projects({ section }: SectionProps<'projects'>) {
  return (
    <SectionShell id={section.id} title={section.title} description={section.description}>
      <div className="grid gap-6 sm:grid-cols-2">
        {section.content.items.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="h-full rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/40">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-medium text-ink">{project.name}</h3>
                {project.period && (
                  <span className="font-mono text-xs text-muted whitespace-nowrap">{project.period}</span>
                )}
              </div>

              <p className="mt-2 text-sm text-muted leading-relaxed">{project.description}</p>

              {project.impact && (
                <p className="mt-3 text-sm text-accent">{project.impact}</p>
              )}

              {project.stack && project.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted">
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-ink link-underline"
                    >
                      <Icon name={link.icon} size={14} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
