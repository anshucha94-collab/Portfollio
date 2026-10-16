import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";

export function ProjectDetail({ project, otherProjects = [] }) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-10">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{project.index}</Badge>
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              {project.eyebrow}
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">{project.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/">Back to home</Button>
            {otherProjects[0] ? (
              <Button href={`/${otherProjects[0].slug}`} variant="secondary">
                Next project
              </Button>
            ) : null}
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className={`relative aspect-4/3 bg-linear-to-br ${project.accent}`}>
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] bg-size-[18px_18px]" />
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-center mix-blend-screen"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </Card>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardBody className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Overview</p>
            <p className="text-base leading-8 text-neutral-700">{project.hero}</p>
            <p className="text-sm leading-7 text-neutral-600">
              {project.solution} The result is a portfolio-ready case study that feels structured and easy to scan.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="pt-2 text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Outcome</p>
            <p className="text-sm leading-7 text-neutral-600">{project.outcome}</p>
          </CardBody>
        </Card>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardBody className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Challenge</p>
            <p className="text-sm leading-7 text-neutral-600">{project.challenge}</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Highlights</p>
            <div className="space-y-3">
              {project.highlights.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-7 text-neutral-700">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-neutral-950" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </section>

      {otherProjects.length ? (
        <section className="mt-14 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">More work</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">Continue browsing</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 pl-1">
            {otherProjects.map((item) => (
              <Button
                key={item.slug}
                href={`/${item.slug}`}
                variant="secondary"
                className="h-auto min-h-32 items-start justify-start rounded-3xl px-8 py-6 text-left"
              >
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                    {item.index}
                  </p>
                  <p className="text-lg font-semibold text-neutral-950">{item.title}</p>
                  <p className="text-sm font-normal leading-6 text-neutral-600">{item.summary}</p>
                  <p className="pt-1 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                    Open work
                  </p>
                </div>
              </Button>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
