import * as icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

/**
 * Renders a lucide-react icon by its string name (e.g. "Github", "Mail"),
 * so content files can reference icons without importing React components.
 * Unknown names render nothing rather than throwing, so a typo in content/
 * degrades gracefully instead of breaking the build.
 */
export default function Icon({ name, ...props }: { name?: string } & LucideProps) {
  if (!name) return null;
  const Component = (icons as unknown as Record<string, icons.LucideIcon>)[name];
  if (!Component) return null;
  return <Component {...props} />;
}
