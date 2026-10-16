import { HeroSection } from "@/components/hero-section";
import { education, internship, portfolioProjects, skillGroups } from "@/components/portfolio-data";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="page-enter relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
      <HeroSection />

      <section id="projects" className="scroll-mt-28 space-y-8 border-t border-black/10 py-14 sm:py-20">
        <SectionHeading
          label="Selected work"
          title="Projects"
          description="Academic and personal project work across web applications, local services, and practical software concepts."
        />
        <ProjectGrid projects={portfolioProjects} />
      </section>

      <section className="grid gap-10 border-t border-black/10 py-14 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          label="Experience"
          title="Learning in practice"
          description="A four-week internship focused on web development workflows and project-oriented learning."
        />
        <div className="border-l-2 border-[#d8a14b] pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{internship.dates}</p>
          <h3 className="mt-3 font-heading text-xl font-semibold text-neutral-950">{internship.role}</h3>
          <p className="mt-1 text-sm text-neutral-600">{internship.company}</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-600">
            {internship.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/10 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading
            label="Toolkit"
            title="Technical skills"
            description="Technologies and fundamentals used or studied through academic and personal project work."
          />
          <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="border-t border-black/10 pt-4">
                <h3 className="text-sm font-semibold text-neutral-950">{group.label}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 border-t border-black/10 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3d8278]">Education</p>
          <h2 className="mt-2 font-heading text-xl font-semibold text-neutral-950">{education[0].qualification}</h2>
          <p className="mt-1 text-sm text-neutral-600">{education[0].institution} · CGPA {education[0].detail.split("CGPA: ")[1]}</p>
        </div>
        <Button href="/about" variant="secondary">More about Anshu</Button>
      </section>
    </main>
  );
}
