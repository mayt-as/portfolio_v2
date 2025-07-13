import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Satyam Pandey - Software Engineer | AI & Data Engineering Specialist',
  description: 'Professional portfolio of Satyam Pandey - Software Engineer with 2+ years of experience in AI-powered systems, data engineering, and cloud-native platforms. Specialized in Angular, Python, Azure, and scalable data pipelines.',
  keywords: 'Satyam Pandey, Software Engineer, AI Engineer, Data Engineer, Azure, Angular, Python, Spark, Docker, RAG Systems, SQL Lakehouse, Microsoft Certified, Databricks, Snowflake',
  authors: [{ name: 'Satyam Pandey' }],
  creator: 'Satyam Pandey',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Satyam Pandey - Software Engineer | AI & Data Engineering Specialist',
    description: 'Professional portfolio showcasing expertise in AI-powered systems, data engineering, and accessible UI development with 6 professional certifications.',
    siteName: 'Satyam Pandey Portfolio',
    images: [
      {
        url: '/satyam_avatar.png',
        width: 800,
        height: 800,
        alt: 'Satyam Pandey - Software Engineer Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#121212] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}