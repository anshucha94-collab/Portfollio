import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";

export function ProjectCard({ project }) {
  return (
    <Link href={`/${project.slug}`} aria-label={`Open ${project.title} project`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <div className="relative aspect-4/3 overflow-hidden bg-neutral-950">
          <div className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-95`} />
          <div className="absolute inset-0 opacity-35 mix-blend-screen bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] bg-size-[20px_20px]" />
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover object-center opacity-95 transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={project.index === "01"}
          />
        </div>
        <CardBody className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <Badge>{project.index}</Badge>
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
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-600"
              >
                {item}
              </span>
            ))}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
