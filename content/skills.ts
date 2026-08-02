import type { SkillGroup } from '@/lib/types';

/** Add or remove a group and the layout adapts — no component changes needed. */
export const skills: SkillGroup[] = [
  {
    label: 'AI & Agents',
    items: [
      'LangGraph',
      'LangChain',
      'Semantic Kernel',
      'RAG',
      'Multi-agent systems',
      'Prompt engineering',
      'DeepEval',
      'Milvus',
      'GPT-5 mini',
    ],
  },
  {
    label: 'Machine Learning',
    items: ['PyTorch', 'Hugging Face Transformers', 'Computer Vision', 'YOLO', 'OpenCV'],
  },
  {
    label: 'Backend',
    items: ['Python', 'FastAPI', 'REST APIs', 'Docker', 'SQL Server', 'Oracle', 'PostgreSQL'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    label: 'Data & Cloud',
    items: [
      'Azure',
      'Databricks',
      'Snowflake',
      'Microsoft Fabric',
      'Apache Spark',
      'SSIS',
      'Power BI',
      'DAX',
      'SharePoint',
      'Vector databases',
    ],
  },
];
