import type { SiteConfig } from '@/lib/types';

/**
 * Identity, contact details and everything used for SEO / social cards.
 * Changing a value here updates it everywhere on the site.
 */
export const site: SiteConfig = {
  name: 'Satyam Pandey',
  role: 'Generative AI Engineer',
  tagline:
    'I build production-grade AI systems — multi-agent frameworks, RAG platforms and the backends that keep them reliable.',
  location: 'Pune, Maharashtra, India',
  email: 'satyampandey684@gmail.com',
  url: 'https://mayt-as.github.io/portfolio_v2',
  careerStartDate: '2023-02-14',

  avatar: '/satyam_avatar.png',
  resume: '/Satyam_Pandey_Resume.pdf',

  socials: [
    { label: 'GitHub', href: 'https://www.github.com/mayt-as', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/satyampande', icon: 'Linkedin' },
    { label: 'LeetCode', href: 'https://www.leetcode.com/u/satyampande', icon: 'Code2' },
    { label: 'Email', href: 'mailto:satyampandey684@gmail.com', icon: 'Mail' },
  ],

  keywords: [
    'Satyam Pandey',
    'Generative AI Engineer',
    'Multi-agent systems',
    'LangGraph',
    'RAG',
    'FastAPI',
    'Python',
    'Azure',
    'Data Engineering',
  ],

  footerNote: 'Built with Next.js and Tailwind. Deployed on GitHub Pages.',
};
