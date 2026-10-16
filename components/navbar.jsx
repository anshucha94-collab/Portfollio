import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(247,245,240,0.82)] backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 px-3 py-3 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#3d8278] font-heading text-sm font-semibold text-white transition-transform duration-300 group-hover:-rotate-3 sm:h-10 sm:w-10">
            AC
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-neutral-950">Anshu Chandola</p>
            <p className="max-w-40 truncate text-xs text-neutral-500">Aspiring Full-Stack Developer</p>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="col-span-2 row-start-2 flex w-full items-center justify-between border-t border-black/8 pt-1 md:col-span-1 md:row-auto md:justify-center md:gap-1 md:rounded-full md:border md:bg-white/70 md:p-1 md:shadow-[0_16px_40px_rgba(18,18,18,0.08)] md:pt-1 md:backdrop-blur-xl">
          {navItems.map((item) => (
            <Button key={item.label} href={item.href} variant="ghost" className="!px-1 !py-2 text-[11px] sm:!px-3 sm:text-xs md:!px-4 md:text-sm">
              {item.label}
            </Button>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          download="Anshu-Chandola-Resume.pdf"
          className="col-start-2 row-start-1 inline-flex min-h-10 items-center justify-center rounded-full bg-neutral-950 px-3 py-2 text-xs font-medium text-white shadow-[0_14px_40px_rgba(0,0,0,0.16)] transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] sm:px-5 sm:py-3 sm:text-sm md:col-start-3 md:justify-self-end"
        >
          <span className="sm:hidden">CV ↓</span>
          <span className="hidden sm:inline">Download résumé</span>
        </a>
      </div>
    </header>
  );
}

