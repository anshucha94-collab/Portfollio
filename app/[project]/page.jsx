import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProjectBySlug, portfolioProjects } from "@/components/portfolio-data";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ project: project.slug }));
}

async function getResolvedProject(params) {
  const resolvedParams = await Promise.resolve(params);
  return getProjectBySlug(resolvedParams.project);
}

export async function generateMetadata({ params }) {
  const project = await getResolvedProject(params);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} | Karan Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const project = await getResolvedProject(params);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return <ProjectDetail project={project} otherProjects={otherProjects} />;
}

