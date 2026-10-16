import Link from "next/link";
import { Card, CardBody } from "@/components/ui/card";

export function ProjectCard({ project }) {
  return (
    <Link href={`/${project.slug}`} aria-label={`Open ${project.title} project`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <div className={`relative flex aspect-[2.4/1] items-end justify-between overflow-hidden bg-linear-to-br ${project.accent} p-6 sm:p-8`}>
          <span className="absolute -right-3 -top-10 font-heading text-[10rem] font-semibold leading-none text-white/15 transition-transform duration-500 group-hover:-translate-y-2">{project.index}</span>
          <span className="relative max-w-[75%] font-heading text-lg font-semibold text-white sm:text-xl">{project.eyebrow}</span>
          <span className="relative text-xs font-semibold uppercase tracking-[0.18em] text-white/85">View ↗</span>
        </div>
        <CardBody className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
              {project.year}
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
              {project.eyebrow}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              {project.title}
            </h3>
            <p className="text-sm leading-7 text-neutral-600">{project.summary}</p>
          </div>
          {project.stack.length ? <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-600"
              >
                {item}
              </span>
            ))}
          </div> : <p className="text-xs text-neutral-500">Technology details not confirmed</p>}
        </CardBody>
      </Card>
    </Link>
  );
}
