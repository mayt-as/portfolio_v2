import Image from "next/image";
import { site } from "@/content";
import type { Link, SectionProps } from "@/lib/types";
import { asset } from "@/lib/utils";
import Reveal from "../Reveal";

export default function Hero({ section }: SectionProps<"hero">) {
  const { headline, intro, actions } = section.content;

  // Resume lives on site config (it's a file path, not a nav-style link) —
  // append it here automatically so setting site.resume is enough to surface
  // a download button, with no content/index.ts edit required.
  const resumeAction: Link | null = site.resume
    ? { label: "Download resume", href: asset(site.resume), external: true }
    : null;
  const allActions = [...(actions ?? []), ...(resumeAction ? [resumeAction] : [])];

  return (
    <section id={section.id} className="scroll-mt-24 pt-24">
      <div className="mx-auto max-w-content px-6">
        {site.avatar && (
          <Reveal>
            <Image
              src={site.avatar}
              alt={site.name}
              width={64}
              height={64}
              className="mb-6 rounded-full border border-border object-cover"
              priority
            />
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <p className="font-mono text-sm text-accent">{site.role}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl">
            {headline ?? site.role}
          </h1>
        </Reveal>

        {intro?.map((paragraph, i) => (
          <Reveal key={paragraph} delay={0.15 + i * 0.05}>
            <p className="mt-4 max-w-xl text-muted">{paragraph}</p>
          </Reveal>
        ))}

        {allActions.length > 0 && (
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4">
              {allActions.map((action, i) => (
                <a
                  key={action.href}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                  className={
                    i === 0
                      ? "rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                      : "rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/50"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
