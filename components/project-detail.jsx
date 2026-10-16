import { Button } from "@/components/ui/button";

export function ProjectDetail({ project, otherProjects = [] }) {
  return (
    <main className="page-enter mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-8 lg:pt-10">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#3d8278]">Project {project.index} · {project.eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">{project.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="/">Back to home</Button>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-5 py-3 text-sm font-medium text-neutral-900 backdrop-blur transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
              >
                Open live project <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            ) : null}
            {otherProjects[0] ? (
              <Button href={`/${otherProjects[0].slug}`} variant="secondary">
                Next project
              </Button>
            ) : null}
          </div>
        </div>

        <div className={`relative flex min-h-64 items-end overflow-hidden bg-linear-to-br ${project.accent} p-8 sm:min-h-80`}>
          <span className="absolute -right-3 -top-16 font-heading text-[18rem] font-semibold leading-none text-white/15">{project.index}</span>
          <p className="relative max-w-sm font-heading text-2xl font-semibold text-white">{project.eyebrow}</p>
        </div>
      </section>

      <section className="mt-12 grid gap-10 border-y border-black/10 py-8 lg:grid-cols-[1fr_0.75fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Overview</p>
          <p className="text-base leading-8 text-neutral-700">{project.description}</p>
        </div>
        {project.stack.length ? (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Technology</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="border border-black/10 bg-white/70 px-3 py-2 text-xs font-medium text-neutral-700">{item}</span>
              ))}
            </div>
          </div>
        ) : <p className="self-start text-sm leading-7 text-neutral-500">Technology details have not been confirmed.</p>}
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
                className="h-auto min-h-32 items-start justify-start rounded-xl px-8 py-6 text-left"
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
