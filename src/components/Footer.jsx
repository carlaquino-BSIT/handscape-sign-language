import Link from "next/link";

const exploreLinks = [
  {
    label: "Alphabet",
    href: "/signs/alphabet",
  },
  {
    label: "Numbers",
    href: "/signs/numbers",
  },
  {
    label: "Common Words",
    href: "/signs/words",
  },
  {
    label: "Phrases",
    href: "/signs/phrases",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f7f5]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-neutral-300 font-pixel-square text-sm text-neutral-950">
                H
              </span>

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-950">
                Handscape
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-xs leading-6 text-neutral-500">
              An interactive platform for learning Filipino Sign Language
              through signs, lessons, and quizzes.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-400">
              Explore
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-xs text-neutral-500 transition-colors hover:text-neutral-950"
                >
                  <span>{link.label}</span>

                  <i className="ri-arrow-right-up-line text-[11px] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Learn */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-400">
              Learn
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              <a
                href="/#lessons"
                className="text-xs text-neutral-500 transition-colors hover:text-neutral-950"
              >
                Lessons
              </a>

              <a
                href="/#quiz"
                className="text-xs text-neutral-500 transition-colors hover:text-neutral-950"
              >
                Quiz
              </a>

              <a
                href="/#signs"
                className="text-xs text-neutral-500 transition-colors hover:text-neutral-950"
              >
                Explore Signs
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
            © 2026 Handscape
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
            Filipino Sign Language Learning Platform
          </p>
        </div>
      </div>
    </footer>
  );
}