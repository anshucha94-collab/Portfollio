import Image from "next/image";
import { profile } from "@/components/portfolio-data";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative grid gap-8 overflow-hidden py-10 sm:gap-10 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div className="pointer-events-none absolute right-0 top-8 hidden h-64 w-64 rotate-6 border border-[#3d8278]/20 lg:block" />
      <div className="space-y-7">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3d8278]">
          Computer Science · Uttarakhand, India
        </p>
        <div className="space-y-5">
          <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.05] text-neutral-950 sm:text-7xl">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-neutral-600 sm:text-2xl">
            {profile.headline}
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
          A Computer Science diploma student with hands-on exposure to responsive web applications and database-backed systems. Familiar with JavaScript, React, Next.js, Node.js/Express, SQL, and Python fundamentals.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Button href="#projects">Explore projects</Button>
          <Button href="/about" variant="secondary">View résumé</Button>
        </div>
      </div>
      <aside className="relative z-10 flex flex-col gap-7 sm:flex-row sm:items-end lg:flex-col lg:items-start lg:gap-6 lg:mb-2">
        <div className="relative aspect-[2/3] w-full max-w-56 self-center overflow-hidden rounded-md border border-black/10 bg-[#d9d7c9] sm:max-w-52 lg:max-w-64 lg:self-auto">
          <Image
            src="/anshu.jpg"
            alt="Anshu Chandola outdoors"
            fill
            priority
            sizes="(max-width: 640px) 224px, (max-width: 1024px) 208px, 256px"
            className="object-cover object-center"
          />
        </div>
        <div className="border-l-2 border-[#d8a14b] pl-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Currently focused on</p>
          <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-neutral-950">
            Learning by building useful, database-backed web applications.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-flex text-sm font-semibold text-[#286b62] underline decoration-[#d8a14b] decoration-2 underline-offset-4">
            {profile.email}
          </a>
        </div>
      </aside>
    </section>
  );
}
