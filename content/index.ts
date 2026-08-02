import type { Section } from '@/lib/types';
import { yearsSince } from '@/lib/utils';
import { site } from './site';
import { experience } from './experience';
import { projects } from './projects';
import { skills } from './skills';
import { education } from './education';
import { certifications } from './certifications';
import { writing } from './writing';

export { site };

/**
 * THE PAGE.
 *
 * This array is the page — order here is order on screen, and each entry's
 * `nav` label is picked up by the header automatically. To restructure the
 * site you reorder, add or delete entries; no component or route changes.
 *
 * Rules the renderer applies for you:
 *   - `enabled: false`      -> hidden, content kept
 *   - empty content         -> hidden automatically (see lib/sections.ts)
 *   - no `nav` key          -> section renders but stays out of the nav
 *   - unknown `type`        -> caught at compile time by lib/types.ts
 *
 * Available types: hero | about | experience | projects | skills | education
 *                  certifications | writing | contact | custom
 *
 * `custom` is the escape hatch — a titled list of entries with optional
 * bullets and a link, for anything that does not have a dedicated layout yet.
 */
export const sections: Section[] = [
  {
    id: 'home',
    type: 'hero',
    content: {
      headline: 'I build AI systems that make it to production.',
      intro: [
        'Generative AI Engineer at Visteon, working on end-to-end AI and automation — multi-agent frameworks, retrieval systems and the backends that hold them together.',
        'Previously at MAQ Software, where I led RAG platforms serving 80K+ users and shipped analytics agents on top of enterprise data.',
      ],
      actions: [
        { label: 'Get in touch', href: '#contact' },
        { label: 'View work', href: '#experience' },
      ],
    },
  },
  {
    id: 'about',
    type: 'about',
    title: 'About',
    nav: 'About',
    content: {
      paragraphs: [
        'I work on the part of AI that is unglamorous and decisive: making a promising prototype survive real users, real data and real latency budgets. That usually means multi-agent orchestration, retrieval quality, and backend architecture that does not fall over.',
        'At Visteon I architect and deploy AI and automation systems — a full-stack report automation platform that took reporting from eight hours to under two minutes, and a computer-vision pipeline that lifted document processing productivity by over 90%.',
        'Before that, at MAQ Software, I led large-scale AI initiatives: RAG chatbots serving 80K+ users, multi-agent analytics frameworks on LangGraph, Spark data pipelines, and cloud-native deployments across six regions. Responsible AI and enterprise reliability were non-negotiable constraints, not afterthoughts.',
      ],
      stats: [
        { value: `${yearsSince(site.careerStartDate!)}+`, label: 'Years building' },
        { value: '80K+', label: 'Users served' },
        { value: '240x', label: 'Fastest speedup shipped' },
        { value: `${certifications.length}`, label: 'Certifications' },
      ],
    },
  },
  {
    id: 'experience',
    type: 'experience',
    title: 'Experience',
    nav: 'Experience',
    content: { items: experience },
  },
  {
    id: 'projects',
    type: 'projects',
    title: 'Selected work',
    nav: 'Work',
    description: 'Built at work, so the code is proprietary — here is what these systems do.',
    content: { items: projects },
  },
  {
    id: 'skills',
    type: 'skills',
    title: 'Toolkit',
    nav: 'Skills',
    content: { groups: skills },
  },
  {
    id: 'education',
    type: 'education',
    title: 'Education',
    content: { items: education },
  },
  {
    id: 'certifications',
    type: 'certifications',
    title: 'Certifications',
    content: { items: certifications },
  },
  {
    id: 'writing',
    type: 'writing',
    title: 'Writing',
    nav: 'Writing',
    content: { items: writing },
  },
  {
    id: 'contact',
    type: 'contact',
    title: 'Get in touch',
    nav: 'Contact',
    content: {
      blurb: 'Reach out on LinkedIn or by email.',
      links: site.socials.filter((link) => link.label === 'LinkedIn' || link.label === 'Email'),
    },
  },
];
