import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
