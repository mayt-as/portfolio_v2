import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6 text-center">
      <div>
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 text-2xl font-medium text-ink">Page not found</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
