import type { Company } from "@/lib/types";

/**
 * Newest first. One entry per company; a company can hold multiple roles
 * (they render as a nested progression, like LinkedIn).
 */
export const experience: Company[] = [
  {
    company: "Visteon Corporation",
    href: "https://www.visteon.com/",
    logo: "/visteon_logo.jpg",
    period: "Sep 2025 — Present",
    location: "Pune, India · Hybrid",
    roles: [
      {
        title: "Generative AI Engineer",
        period: "Sep 2025 — Present",
        type: "Full-time",
        highlights: [
          "Architected a full-stack agentic document intelligence platform using React, TypeScript, FastAPI, Milvus and GPT-5 mini to ingest, classify and standardize multi-format OEM automotive documents from SharePoint — letting hardware engineers trace requirements across hundreds of documents in seconds instead of days.",
          "Built a 5-stage LLM classification pipeline (keyword scan, filename inference, embedding similarity, diagram detection, contextual reasoning) using Python, Milvus vector search and GPT-5 mini to auto-categorize extracted requirements and route them to downstream goal-based AI agents.",
          "Designed a requirements standardization and conflict-resolution layer using LLMs and Milvus for semantic deduplication, cross-document conflict detection and OEM terminology normalization — producing the structured ground truth consumed by the MPN recommendation and architecture-diagram agents.",
          "Shipped an LLM auto-evaluation pipeline and user-feedback loop with FastAPI and GPT-5 mini to continuously score extraction quality and incorporate engineer corrections, eliminating manual re-annotation cycles.",
          "Fine-tuned a Donut model with PyTorch and Hugging Face Transformers for invoice field extraction across 10,000+ daily PDFs, with confidence-score validation and human-in-the-loop fallback to handle 50+ distinct vendor layouts in automotive supply chain operations.",
          "Built a YOLO + OpenCV detection engine with Python and FastAPI to replace legacy logos across DOCX, PPTX and PDF files with layout-safe bounding-box alignment — lifting document processing productivity by 90% and eliminating manual overnight batch work.",
          "Architected a React + FastAPI report automation platform with custom SQL Server and Oracle connection pooling, log/CSV aggregation APIs and DOCX auto-population — cutting end-to-end report turnaround by 240x (8 hours to under 2 minutes).",
        ],
        skills: [
          "React",
          "TypeScript",
          "FastAPI",
          "Python",
          "Milvus",
          "GPT-5 mini",
          "PyTorch",
          "YOLO + OpenCV",
          "SQL Server",
          "Oracle",
        ],
      },
    ],
  },
  {
    company: "MAQ Software",
    logo: "/MAQ_Software_logo.png",
    href: "https://maqsoftware.com/",
    period: "Feb 2023 — Sep 2025 · 2 yrs 8 mos",
    location: "Noida, India · On-site",
    roles: [
      {
        title: "Software Engineer 2",
        period: "Mar 2025 — Sep 2025",
        type: "Full-time",
        highlights: [
          "Architected a multi-agent analytics framework using LangGraph with SQL/DAX query generator, evaluator, metadata enricher, query suggestor, and pruner agents to automate query-based insights against SQL Lakehouse and Power BI semantic models.",
          "Benchmarked the custom agent framework against Power BI Copilot using DeepEval across groundedness, accuracy, and relevancy metrics, outperforming Copilot by 35% on groundedness and 41% on accuracy.",
          "Designed and shipped a modular AI-powered data agent integrating with existing SQL Lakehouse and Power BI semantic models, reducing manual query time by 45% for analytics teams.",
          "Led front-end accessibility remediation across Angular UI components using Syncfusion libraries, achieving WCAG 2.1 AA compliance across multiple components / raising audit score from 54 to 92.",
          "Built reusable Angular UI components with Syncfusion for dynamic, accessible enterprise interfaces."
        ],
        skills: ["LangGraph", "Angular", "Power BI", "DAX", "Python"],
      },
      {
        title: "Software Engineer 1",
        period: "Aug 2023 — Mar 2025",
        type: "Full-time",
        highlights: [
          "Developed RAG-based AI chatbot serving 80K+ users during global technical event, using Python, vector search, and FastAPI.",
          "Engineered end-to-end data pipelines with Python and Spark — cleaning, chunking, and vectorizing structured and unstructured data for retrieval — achieving 90%+ retrieval accuracy.",
          "Designed intent classifier models and prompt optimization strategies, achieving 95%+ compliance with Responsible AI principles.",
          "Built and deployed AI agent solutions using Semantic Kernel to automate response generation and decision workflows.",
          "Deployed containerized inference services with Docker across a 6-region high-availability infrastructure, improving reliability and reducing latency.",
          "Implemented persistent chat history with real-time cross-tab synchronization, improving session continuity for users."
        ],
        skills: ["RAG", "Semantic Kernel", "Azure", "Spark", "Docker", "Vector Databases"],
      },
      {
        title: "Associate Software Engineer",
        period: "Feb 2023 — Aug 2023",
        type: "Full-time",
        highlights: [
          "Created and optimized databases and stored procedures in SQL Server to improve data integrity and performance.",
          "Developed ETL pipelines using SSIS for data consolidation across multiple sources.",
          "Diagnosed and resolved issues in SQL Server and SSIS, improving system stability and efficiency."
        ],
        skills: ["SQL Server", "SSIS", "Power BI", "Azure"],
      },
    ],
  },
];
