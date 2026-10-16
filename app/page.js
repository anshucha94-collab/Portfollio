import { HeroSection } from "@/components/hero-section";
import { portfolioProjects } from "@/components/portfolio-data";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";

export default function Home() {
  const featuredProject = portfolioProjects[3];

  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-16 sm:px-6 lg:px-8">
      <HeroSection featuredProject={featuredProject} />

      <section className="grid gap-4 border-y border-black/6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Project-led storytelling",
          "Dynamic routes per case study",
          "Component-driven layout",
          "Circle portrait treatment",
        ].map((item) => (
          <Card key={item} className="bg-white/55">
            <CardBody className="py-5">
              <Badge>{item}</Badge>
            </CardBody>
          </Card>
        ))}
      </section>

      <section id="projects" className="space-y-8 py-14 sm:py-20">
        <SectionHeading
          title="Projects"
          description="The homepage stays compact and visual. Clicking any project opens a dynamic route that contains the backstory, stack, and outcome for that specific piece of work."
        />
        <ProjectGrid projects={portfolioProjects} />
      </section>

    </main>
  );
}
