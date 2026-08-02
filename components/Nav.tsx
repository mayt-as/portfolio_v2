'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/content';
import { cn } from '@/lib/utils';

export default function Nav({ items }: { items: { id: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-bg/80 backdrop-blur border-b border-border' : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-sm text-ink hover:text-accent transition-colors">
          {site.name}
        </a>

        <ul className="hidden gap-8 sm:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-muted link-underline hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-ink sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-bg px-6 pb-4 sm:hidden">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block py-2 text-sm text-muted hover:text-ink transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
