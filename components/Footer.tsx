import { site } from '@/content';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="mt-[14px] border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>

        <div className="flex items-center gap-4">
          {site.socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={link.label}
              className="text-muted hover:text-accent transition-colors"
            >
              <Icon name={link.icon} size={18} />
            </a>
          ))}
        </div>

        {site.footerNote && <p className="text-xs text-muted/70">{site.footerNote}</p>}
      </div>
    </footer>
  );
}
