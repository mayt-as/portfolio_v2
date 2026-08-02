import type { Project } from '@/lib/types';

/**
 * These were built at work, so there's no public repo/demo to link to —
 * `links` is intentionally left unset on all three, and the Projects component
 * renders fine without it. When a personal project lands on GitHub, add an
 * entry here with `links: [{ label: 'GitHub', href: '...', icon: 'Github' }]`.
 *
 * Empty array = the section hides itself entirely.
 */
export const projects: Project[] = [
  {
    name: 'Report Automation Platform',
    description:
      'Full-stack platform that pulls from SQL Server and Oracle, aggregates logs and CSVs through dedicated APIs, and auto-populates DOCX deliverables. Custom connection pooling keeps concurrent report runs stable.',
    period: '2025',
    impact: 'Report turnaround cut from 8 hours to under 2 minutes (240x)',
    stack: ['React', 'FastAPI', 'Python', 'SQL Server', 'Oracle'],
    featured: true,
  },
  {
    name: 'Multi-Agent Analytics Framework',
    description:
      'LangGraph framework that turns natural-language questions into governed analytics. Specialised agents handle SQL/DAX generation, evaluation, metadata enrichment, query suggestion and pruning against a SQL Lakehouse and Power BI semantic models.',
    period: '2025',
    impact: 'Query-based insights and visualizations over existing semantic models',
    stack: ['LangGraph', 'Python', 'DAX', 'Power BI', 'SQL Lakehouse'],
    featured: true,
  },
  {
    name: 'Enterprise RAG Chatbot',
    description:
      'RAG assistant built with a team of five: Spark ingestion pipelines, chunking and vectorization for retrieval relevance, intent classification, prompt optimization, and persistent chat history synced across browser tabs. Deployed as containerized inference services across six regions.',
    period: '2023 — 2024',
    impact: '80K+ users served during a live event · 95%+ Responsible AI compliance',
    stack: ['Python', 'Spark', 'Semantic Kernel', 'Docker', 'Azure', 'Vector DB'],
    featured: true,
  },
];
