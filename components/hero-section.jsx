import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const focusTags = ["Product Design", "AI Systems", "Case Studies", "Portfolio"];

export function HeroSection({ featuredProject }) {
  return (
    <section className="grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-neutral-500">Designing products, systems, and AI experiences.</span>
        </div>

        <div className="space-y-6">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl">
            I design clear, high-trust digital products with strong narrative and sharp execution.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            This portfolio turns each project into a case study. Start on the homepage, pick a project card,
            and open a dynamic route with the story, stack, and outcome for that work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href={`/${featuredProject.slug}`}>Open featured project</Button>
          <Button href="#projects" variant="secondary">
            Explore projects
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {focusTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-600 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
        <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(255,194,102,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(98,149,255,0.24),transparent_38%)] blur-2xl" />
        <div className="relative w-full rounded-[40px] border border-black/8 bg-white/70 p-6 shadow-[0_30px_80px_rgba(20,20,20,0.12)] backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-[0.82fr_1fr] md:items-center">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border-4 border-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="/karan3.jpeg"
                alt="Profile portrait"
                fill
                className="object-cover object-center"
                sizes="224px"
                priority
              />
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">Featured work</p>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
                {featuredProject.title}
              </h2>
              <p className="text-sm leading-7 text-neutral-600">{featuredProject.hero}</p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-950 px-3 py-1 text-[11px] font-medium text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Button href={`/${featuredProject.slug}`} variant="ghost" className="px-0">
                View projects <span aria-hidden>↗</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
