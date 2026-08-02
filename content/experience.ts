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
          "Designed a modular, AI-powered data agent that plugs into existing SQL Lakehouse and Power BI semantic models to serve query-based insights and visualizations.",
          "Architected a multi-agent framework on LangGraph — SQL/DAX generator, evaluator, metadata enricher, query suggestor and pruner agents — to drive precise analytics responses.",
          "Developed and maintained Angular UI features and custom Syncfusion components for dynamic, accessible interfaces.",
        ],
        skills: ["LangGraph", "Angular", "Power BI", "DAX", "Python"],
      },
      {
        title: "Software Engineer 1",
        period: "Aug 2023 — Mar 2025",
        type: "Full-time",
        highlights: [
          "Led a team of five building an advanced RAG-based chatbot that assisted 80K+ users during a live event.",
          "Engineered scalable Python and Spark pipelines over structured and unstructured sources, holding accuracy above 90%.",
          "Designed intent classifiers and prompt optimization strategies, reaching 95%+ compliance with Responsible AI principles.",
          "Shipped AI agent solutions on Semantic Kernel and containerized inference services with Docker.",
          "Deployed high-availability cloud infrastructure across six regions, improving reliability and cutting latency.",
          "Implemented persistent chat history with real-time sync across browser tabs.",
        ],
        skills: ["RAG", "Semantic Kernel", "Azure", "Spark", "Docker", "Vector Databases"],
      },
      {
        title: "Associate Software Engineer",
        period: "Feb 2023 — Aug 2023",
        type: "Internship",
        highlights: [
          "Created and optimized SQL Server databases and stored procedures to improve data integrity and performance.",
          "Built SSIS ETL pipelines consolidating data across multiple sources.",
        ],
        skills: ["SQL Server", "SSIS", "Power BI", "Azure"],
      },
    ],
  },
];
