export const profile = {
  name: "Anshu Chandola",
  initials: "AC",
  headline: "Computer Science Diploma Student | Aspiring Full-Stack Developer",
  location: "Uttarakhand, India",
  phone: "+91 8445427876",
  email: "anshucha94@gmail.com",
  linkedin: "https://linkedin.com/in/anshu-chandola-447957326",
  github: "https://github.com/anshucha94-collab",
  summary:
    "Computer Science diploma student with hands-on project exposure across web application development, database-backed systems, and responsive user interfaces. Familiar with HTML, CSS, JavaScript, React, Next.js, Node.js/Express, SQL, MySQL, PostgreSQL, and Prisma through academic and personal project work. Completed a four-week internship in Web Development Using Python at Ensino Research and Development Pvt. Ltd. Seeking a full-stack development opportunity to strengthen engineering fundamentals and contribute to practical software products.",
};

export const skillGroups = [
  { label: "Languages", items: ["C", "C++", "Python (fundamentals)", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Vite"] },
  { label: "Backend & APIs", items: ["Node.js", "Express.js", "REST API concepts"] },
  { label: "Databases & ORM", items: ["MySQL", "PostgreSQL", "Prisma", "DBMS/RDBMS"] },
  { label: "Tools", items: ["Visual Studio Code", "Git (fundamentals)", "MySQL Workbench"] },
  { label: "CS fundamentals", items: ["OOP", "Data structures fundamentals", "Computer networks"] },
];

export const internship = {
  role: "Web Development Using Python Intern",
  company: "Ensino Research and Development Pvt. Ltd.",
  dates: "04 June 2026 – 01 July 2026",
  details: [
    "Completed a four-week internship focused on Web Development Using Python.",
    "Gained practical exposure to web development workflows, application structure, and project-oriented learning.",
    "Prepared internship documentation and presentation material covering objectives, workflow, learning outcomes, and project work.",
  ],
};

export const education = [
  {
    qualification: "Diploma in Computer Science",
    institution: "Uttarakhand Government Institute of Polytechnic, Bhimtal, Uttarakhand",
    dates: "2025–2027",
    detail: "5th Semester (as of October 2026) · CGPA: 7.63",
  },
  { qualification: "Class XII — CBSE", institution: "Completed in 2023", dates: "2023", detail: "Marks not provided" },
  { qualification: "Class X — CBSE", institution: "Completed in 2021", dates: "2021", detail: "Marks not provided" },
];

export const strengths = [
  "Logical thinking",
  "Problem-solving",
  "Self-learning",
  "Team collaboration",
  "Building practical web applications",
];

export const portfolioProjects = [
  {
    slug: "hostelos",
    index: "01",
    title: "Smart Hostel Management System (HostelOS)",
    eyebrow: "Hostel Management",
    year: "Academic project",
    summary:
      "A hostel-management application concept for student records, room information, and hostel entry/exit monitoring.",
    description:
      "Planned student movement logs with dates and timestamps, alongside a dashboard for hostel statistics and recent activity. QR-code scanning was explored as a way to record entry and exit status, with database-backed record management.",
    stack: ["Next.js", "React", "Express.js", "Prisma", "PostgreSQL"],
    accent: "from-[#ef7158] via-[#d8a14b] to-[#253f3a]",
  },
  {
    slug: "service-finder",
    index: "02",
    title: "Service Finder Website",
    eyebrow: "Local Services",
    year: "Personal project",
    summary:
      "A responsive interface concept for discovering local service providers across common home and repair categories.",
    description:
      "Designed service and worker listing sections for plumbing, electrical work, cleaning, painting, mechanics, and AC repair, with a distance-based discovery concept for 5 km, 10 km, and 20 km.",
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    accent: "from-[#3d8278] via-[#d0b858] to-[#e6815c]",
  },
  {
    slug: "codesnippets",
    index: "03",
    title: "CodeSnippets",
    eyebrow: "Developer Utility",
    year: "Project concept",
    summary: "A project concept for organizing reusable programming examples for convenient reference and code reuse.",
    description: "The project technology stack and implementation details have not been confirmed.",
    stack: [],
    accent: "from-[#548caa] via-[#91b2a2] to-[#d3ad64]",
  },
  {
    slug: "medpredict",
    index: "04",
    title: "MedPredict / MEDMIND",
    eyebrow: "Health-related project",
    year: "Academic project",
    summary:
      "A health-related prediction project discussed in academic project and internship presentation work.",
    description:
      "The specific model, dataset, and deployed features have not been verified, so implementation details are intentionally not listed.",
    liveUrl: "https://medweb-1m13.onrender.com",
    stack: [],
    accent: "from-[#bb6262] via-[#d7a678] to-[#68857b]",
  },
];

export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug);
}
