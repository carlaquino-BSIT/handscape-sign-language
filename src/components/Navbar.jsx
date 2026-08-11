"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Signs", href: "#signs" },
  { label: "Lessons", href: "#lessons" },
  { label: "Quiz", href: "#quiz" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="border border-neutral-200/80 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex h-9 w-9 items-center justify-center border border-neutral-900 bg-neutral-900 text-sm font-semibold text-white transition-transform duration-300 group-hover:rotate-3">
                H
              </span>

              <div className="leading-none">
                <span className="block text-sm font-semibold tracking-tight">
                  Handscape
                </span>

                <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                  FSL Learning
                </span>
              </div>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-neutral-950"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#signs"
              className="hidden items-center gap-2 bg-neutral-900 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-blue-600 md:flex"
            >
              Start Learning
              <i className="ri-arrow-right-up-line text-sm" />
            </a>

            {/* Mobile button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
            >
              <i
                className={
                  menuOpen ? "ri-close-line text-lg" : "ri-menu-3-line text-lg"
                }
              />
            </button>
          </div>

          {/* Mobile navigation */}
          {menuOpen && (
            <div className="border-t border-neutral-200 pt-3 md:hidden">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-neutral-100 py-3 text-xs font-medium uppercase tracking-[0.12em] text-neutral-600 transition-colors last:border-0 hover:text-neutral-950"
                  >
                    {item.label}
                    <i className="ri-arrow-right-line text-sm" />
                  </a>
                ))}

                <a
                  href="#signs"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 bg-neutral-950 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-white"
                >
                  Start Learning
                  <i className="ri-arrow-right-up-line text-sm" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
