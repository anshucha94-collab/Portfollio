import { education, internship, profile, skillGroups, strengths } from "@/components/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "About | Anshu Chandola",
  description: "Education, internship experience, technical skills, and strengths of Anshu Chandola.",
};

export default function AboutPage() {
  return (
    <main className="page-enter mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <header className="max-w-4xl border-b border-black/10 pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#3d8278]">About</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-neutral-950 sm:text-6xl">A little about me</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">{profile.summary}</p>
      </header>

      <section className="grid gap-8 border-b border-black/10 py-12 md:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading label="Experience" title="Internship" />
        <div className="border-l-2 border-[#d8a14b] pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{internship.dates}</p>
          <h2 className="mt-3 font-heading text-xl font-semibold text-neutral-950">{internship.role}</h2>
          <p className="mt-1 text-sm text-neutral-600">{internship.company}</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-600">
            {internship.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      </section>

      <section className="grid gap-8 border-b border-black/10 py-12 md:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading label="Education" title="Studies" />
        <div className="space-y-8">
          {education.map((item) => (
            <article key={item.qualification} className="border-l-2 border-[#3d8278]/35 pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{item.dates}</p>
              <h2 className="mt-2 font-heading text-lg font-semibold text-neutral-950">{item.qualification}</h2>
              <p className="mt-1 text-sm leading-6 text-neutral-600">{item.institution}</p>
              <p className="mt-2 text-sm text-neutral-500">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-b border-black/10 py-12 md:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading label="Toolkit" title="Technical skills" />
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.label} className="border-t border-black/10 pt-4">
              <h2 className="text-sm font-semibold text-neutral-950">{group.label}</h2>
              <p className="mt-2 text-sm leading-7 text-neutral-600">{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading label="How I work" title="Core strengths" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {strengths.map((strength) => (
            <li key={strength} className="border-t border-black/10 py-4 text-sm font-medium text-neutral-700">{strength}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}