import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(247,245,240,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:-rotate-6">
            KC
          </span>
          <div>
            <p className="text-sm font-semibold text-neutral-950">Karan chandola</p>
            <p className="text-xs text-neutral-500">Software Engineer | Full Stack Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-black/8 bg-white/70 p-2 shadow-[0_16px_40px_rgba(18,18,18,0.08)] backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <Button key={item.label} href={item.href} variant="ghost" className="px-4 py-2 text-sm">
              {item.label}
            </Button>
          ))}
        </nav>

        <Button href="/#projects" className="hidden sm:inline-flex">
          View work
        </Button>
      </div>
    </header>
  );
}

