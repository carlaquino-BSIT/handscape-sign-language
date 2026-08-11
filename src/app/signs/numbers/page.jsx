"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import SignCard from "@/components/SignCard";
import SignModal from "@/components/SignModal";
import { signs } from "@/data/signs";

export default function NumbersPage() {
  const [search, setSearch] = useState("");
  const [selectedSign, setSelectedSign] = useState(null);

  const numberSigns = useMemo(() => {
    return signs.filter((sign) => sign.category === "numbers");
  }, []);

  const filteredSigns = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return numberSigns;
    }

    return numberSigns.filter((sign) =>
      sign.name.toLowerCase().includes(query),
    );
  }, [search, numberSigns]);

  return (
    <>
      {" "}
      <main className="min-h-screen bg-[#f7f7f5] px-5 pb-24 pt-6 sm:px-8 sm:pt-8 lg:px-12">
        {" "}
        <div className="mx-auto max-w-7xl">
          {/* Navigation */}{" "}
          <header className="flex items-center justify-between border-b border-neutral-200 pb-5">
            {" "}
            <Link
              href="/"
              className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-500 transition-colors hover:text-neutral-950 sm:text-[10px]"
            >
              {" "}
              <i className="ri-arrow-left-line transition-transform duration-300 group-hover:-translate-x-1" />
              Back home{" "}
            </Link>
            <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[9px]">
              Signly / FSL
            </span>
          </header>
          {/* Hero */}
          <section className="py-14 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-blue-600" />

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-blue-600 sm:text-[9px]">
                    Numbers / 02
                  </p>
                </div>

                <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-neutral-950">
                  Filipino Sign
                  <span className="block text-neutral-400">
                    language numbers.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-500">
                  Practice numbers 1 through 10 in Filipino Sign Language.
                  Select a number to view its hand sign and navigate through the
                  set one sign at a time.
                </p>
              </div>

              {/* 1–10 */}
              <div className="hidden lg:block">
                <div className="font-pixel-grid text-[clamp(5rem,10vw,9rem)] leading-[0.75] tracking-[-0.08em] text-neutral-200">
                  1–10
                </div>

                <p className="mt-4 text-right font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-300">
                  10 numbers / FSL
                </p>
              </div>
            </div>
          </section>
          {/* Search */}
          <section className="mb-8 border-y border-neutral-200">
            <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:max-w-sm">
                <i className="ri-search-line pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-neutral-400" />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search a number..."
                  aria-label="Search numbers"
                  className="h-11 w-full border border-neutral-200 bg-white pl-10 pr-10 text-xs text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-950"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-neutral-400 transition-colors hover:text-neutral-950"
                  >
                    <i className="ri-close-line text-sm" />
                  </button>
                )}
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:text-[9px]">
                Showing{" "}
                <span className="text-neutral-700">{filteredSigns.length}</span>{" "}
                / {numberSigns.length}
              </span>
            </div>
          </section>
          {/* Numbers */}
          {filteredSigns.length > 0 ? (
            <section aria-label="FSL numbers">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                {filteredSigns.map((sign) => (
                  <SignCard
                    key={sign.id}
                    sign={sign}
                    onSelect={setSelectedSign}
                  />
                ))}
              </div>
            </section>
          ) : (
            <section className="flex min-h-[360px] items-center justify-center border border-dashed border-neutral-300 bg-white">
              <div className="px-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center border border-neutral-200">
                  <span className="font-pixel-circle text-2xl text-neutral-300">
                    ?
                  </span>
                </div>

                <p className="mt-5 text-sm font-medium text-neutral-700">
                  No number found
                </p>

                <p className="mt-1 text-xs text-neutral-400">
                  Try searching for another number.
                </p>

                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mt-5 border border-neutral-950 bg-neutral-950 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-neutral-800"
                >
                  Show all numbers
                </button>
              </div>
            </section>
          )}
          {/* Footer */}
          <footer className="mt-16 border-t border-neutral-200 pt-5">
            <div className="flex flex-col gap-3 text-[8px] uppercase tracking-[0.14em] text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:text-[9px]">
              <span>Filipino Sign Language / Numbers</span>

              <span className="font-mono">
                {numberSigns.length} numbers available
              </span>
            </div>
          </footer>
        </div>
      </main>
      <SignModal
        sign={selectedSign}
        signs={numberSigns}
        onClose={() => setSelectedSign(null)}
        onSelect={setSelectedSign}
      />
    </>
  );
}
