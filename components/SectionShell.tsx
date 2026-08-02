import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionShell({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-[38px]">
      <div className="mx-auto w-full max-w-content px-6">
        {title && (
          <Reveal className="mb-[14px]">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-accent">{title}</h2>
            {description && <p className="mt-2 text-muted">{description}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
