export const portfolioProjects = [
  {
    slug: "medpredict",
    index: "01",
    title: "MedPredict",
    eyebrow: "AI Health Platform",
    type: "Healthcare AI",
    year: "2025",
    summary:
      "A Django-based disease prediction and AI guidance system that combines a Random Forest classifier with Gemini 2.5 Flash for explanation, precautions, and follow-up support.",
    hero:
      "A full-stack health assistant that turns symptom input into structured predictions, practical advice, and a conversational medical companion.",
    cover: "/karan3.jpeg",
    accent: "from-[#ffb347] via-[#ff8a3d] to-[#23111d]",
    stack: ["Django 6.0", "Python 3.13", "Random Forest", "Gemini 2.5 Flash"],
    highlights: [
      "Symptom checker with multi-input prediction",
      "Smart reports with precautions, diet, and workouts",
      "AI doctor chat with contextual follow-up support",
      "CSV-driven medical knowledge layer",
    ],
    challenge:
      "Bridge fast symptom triage with trustworthy explanations instead of a bare disease label.",
    solution:
      "Use a trained classifier for the diagnosis, then ground Gemini responses in that prediction to generate an understandable report.",
    outcome:
      "A clear first-step health tool that is easy to use on mobile and structured for future multimodal expansion.",
  },
  {
    slug: "giniebot",
    index: "02",
    title: "GinieBot",
    eyebrow: "Document Intelligence",
    type: "RAG Chatbot",
    year: "2025",
    summary:
      "A private document assistant built around semantic search, vector retrieval, and grounded answers sourced from uploaded PDFs, Word files, and text documents.",
    hero:
      "A secure chat experience for asking direct questions about your own files with source-backed answers and a privacy-first retrieval layer.",
    cover: "/karan3.jpeg",
    accent: "from-[#8c7bff] via-[#6f52ff] to-[#10141f]",
    stack: ["FastAPI", "Next.js", "Supabase", "Gemini"],
    highlights: [
      "Semantic search across private documents",
      "Source citations for every answer",
      "Multi-format document ingestion",
      "Row-level security for user isolation",
    ],
    challenge:
      "Make it easy to query long private documents without keyword-search friction or hallucinated answers.",
    solution:
      "Chunk the documents, vectorize the content, retrieve the best matches, then ground the LLM on those excerpts.",
    outcome:
      "Fast, explainable answers that feel like a dedicated researcher for each user’s own files.",
  },
  {
    slug: "codesnippets",
    index: "03",
    title: "CodeSnippets",
    eyebrow: "Developer Utility",
    type: "Snippet Library",
    year: "2026",
    summary:
      "A compact snippet library for saving, organizing, and reusing code blocks across projects without losing context or language tags.",
    hero:
      "A quick-access workspace for storing reusable snippets, tagging them by language, and copying them in a few clicks.",
    cover: "/karan3.jpeg",
    accent: "from-[#7dd3fc] via-[#4f46e5] to-[#111827]",
    stack: ["Next.js", "Tailwind", "Markdown", "Search"],
    highlights: [
      "Tag-based snippet organization",
      "Fast copy-to-clipboard workflow",
      "Filters for language and topic",
      "Minimal editor-friendly interface",
    ],
    challenge:
      "Keep snippets discoverable without turning the app into a heavy editor.",
    solution:
      "Use searchable cards, metadata chips, and simple actions that stay out of the way.",
    outcome:
      "A lightweight reference hub that is fast to scan during day-to-day development.",
  },
  {
    slug: "tenkay-neighbourhood-worker-portal",
    index: "04",
    title: "Tenkay Neighbourhood Worker Portal",
    eyebrow: "Operations Platform",
    type: "Community Operations",
    year: "2026",
    summary:
      "A portal for neighbourhood workers to track requests, manage assignments, and keep local work organized from one dashboard.",
    hero:
      "A staff-facing web portal built for daily task handling, service requests, and neighbourhood-level coordination.",
    cover: "/karan3.jpeg",
    accent: "from-[#fde68a] via-[#fb923c] to-[#1f2937]",
    stack: ["Admin Dashboard", "Role Access", "Task Management", "Reporting"],
    highlights: [
      "Worker assignment workflow",
      "Request queue and status tracking",
      "Role-based access for teams",
      "Clear operational dashboard",
    ],
    challenge:
      "Make community work easy to manage for staff who need a fast overview.",
    solution:
      "Use simple cards, status cues, and a workflow-first layout that reduces clutter.",
    outcome:
      "A practical portal concept that can be expanded with forms, alerts, and reporting.",
  },
];

export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug);
}
