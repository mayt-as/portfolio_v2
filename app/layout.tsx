import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { site } from '@/content';

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  // metadataBase already carries the deploy base path (e.g. /portfolio_v2), so
  // image urls below must be given WITHOUT that prefix — Next concatenates
  // metadataBase's path with these rather than resolving them as absolute
  // URLs, so adding the prefix twice would double it up.
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
    ...(site.avatar && {
      images: [{ url: site.avatar, width: 800, height: 800, alt: site.name }],
    }),
  },
  twitter: {
    card: 'summary',
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${mono.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
