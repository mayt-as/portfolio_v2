import type { LucideIcon } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Shared primitives                                                         */
/* -------------------------------------------------------------------------- */

export type Link = {
  label: string;
  href: string;
  /** Any icon name exported by lucide-react, e.g. "Github", "Linkedin", "Mail". */
  icon?: string;
  external?: boolean;
};

export type Stat = {
  value: string;
  label: string;
};

/* -------------------------------------------------------------------------- */
/*  Site-level configuration                                                  */
/* -------------------------------------------------------------------------- */

export type SiteConfig = {
  name: string;
  /** Short role line shown under the name and in <title>. */
  role: string;
  /** One-line summary used for SEO description / social cards. */
  tagline: string;
  location?: string;
  email?: string;
  /** Absolute URL the site is deployed at (no trailing slash). Used for OG tags. */
  url: string;
  /** ISO date (YYYY-MM-DD) your professional career started. Powers the "years building" stat. */
  careerStartDate?: string;
  /** Path inside /public, e.g. "/satyam_avatar.png". Leave empty to hide. */
  avatar?: string;
  /** Path inside /public, e.g. "/Satyam_Pandey_Resume.pdf". Leave empty to hide. */
  resume?: string;
  socials: Link[];
  keywords?: string[];
  footerNote?: string;
};

/* -------------------------------------------------------------------------- */
/*  Section content shapes                                                    */
/* -------------------------------------------------------------------------- */

export type HeroContent = {
  /** Rendered large. Falls back to site.role when omitted. */
  headline?: string;
  /** Short paragraphs under the headline. */
  intro?: string[];
  actions?: Link[];
};

export type AboutContent = {
  paragraphs: string[];
  stats?: Stat[];
};

export type Role = {
  title: string;
  period: string;
  type?: string;
  location?: string;
  highlights?: string[];
  skills?: string[];
};

export type Company = {
  company: string;
  /** Path inside /public. Optional. */
  logo?: string;
  href?: string;
  period?: string;
  location?: string;
  roles: Role[];
};

export type ExperienceContent = {
  items: Company[];
};

export type Project = {
  name: string;
  description: string;
  period?: string;
  /** Rendered as small monospace chips. */
  stack?: string[];
  links?: Link[];
  /** Short outcome line, e.g. "240x faster report turnaround". */
  impact?: string;
  featured?: boolean;
};

export type ProjectsContent = {
  items: Project[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type SkillsContent = {
  groups: SkillGroup[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  logo?: string;
  location?: string;
  detail?: string;
};

export type EducationContent = {
  items: Education[];
};

export type Certification = {
  name: string;
  issuer: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  href?: string;
};

export type CertificationsContent = {
  items: Certification[];
};

export type WritingItem = {
  title: string;
  href: string;
  date?: string;
  description?: string;
  source?: string;
};

export type WritingContent = {
  items: WritingItem[];
};

export type ContactContent = {
  /** Short pitch above the contact links. */
  blurb?: string;
  links?: Link[];
};

/**
 * Escape hatch: add a brand-new section without writing a component.
 * Renders as an optional lead paragraph plus a list of title/description entries.
 */
export type CustomContent = {
  lead?: string;
  entries?: {
    title: string;
    meta?: string;
    description?: string;
    bullets?: string[];
    href?: string;
  }[];
};

/* -------------------------------------------------------------------------- */
/*  Section registry                                                          */
/* -------------------------------------------------------------------------- */

type Base = {
  /** Anchor id + nav target. Must be unique. */
  id: string;
  /** Heading shown above the section. Omit on hero. */
  title?: string;
  /** Label used in the nav. Omit to keep the section out of the nav. */
  nav?: string;
  /** Small line under the heading. */
  description?: string;
  /** Set false to hide without deleting the content. */
  enabled?: boolean;
};

export type Section =
  | (Base & { type: 'hero'; content: HeroContent })
  | (Base & { type: 'about'; content: AboutContent })
  | (Base & { type: 'experience'; content: ExperienceContent })
  | (Base & { type: 'projects'; content: ProjectsContent })
  | (Base & { type: 'skills'; content: SkillsContent })
  | (Base & { type: 'education'; content: EducationContent })
  | (Base & { type: 'certifications'; content: CertificationsContent })
  | (Base & { type: 'writing'; content: WritingContent })
  | (Base & { type: 'contact'; content: ContactContent })
  | (Base & { type: 'custom'; content: CustomContent });

export type SectionType = Section['type'];

export type SectionProps<T extends SectionType> = {
  section: Extract<Section, { type: T }>;
};

export type { LucideIcon };
