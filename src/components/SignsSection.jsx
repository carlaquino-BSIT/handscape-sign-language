
"use client";

import { useState } from "react";

import SignCategories from "@/components/SignCategories";
import SignCard from "@/components/SignCard";
import SignModal from "@/components/SignModal";
import { signs } from "@/data/signs";

export default function SignsSection() {
  const [selectedSign, setSelectedSign] = useState(null);

  const alphabetSigns = signs.filter(
    (sign) => sign.category === "alphabet"
  );

  return (
    <section id="signs" className="px-6 py-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600">
              01 / Explore
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-6xl">
              Start with the signs.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
              Explore Filipino Sign Language by category. Start with the
              alphabet, practice numbers, or learn everyday words and phrases.
            </p>
          </div>

          <div className="hidden font-pixel-grid text-5xl text-neutral-200 lg:block">
            01
          </div>
        </div>

        {/* Categories */}
        <SignCategories />

        {/* Featured signs */}
        <div className="mt-20">
          <div className="mb-6 flex items-center justify-between border-b border-neutral-200 pb-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                Featured collection
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                Alphabet
              </h3>
            </div>

            <a
              href="/signs/alphabet"
              className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-neutral-950"
            >
              View all
              <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {alphabetSigns.slice(0, 8).map((sign) => (
              <SignCard
                key={sign.id}
                sign={sign}
                onSelect={setSelectedSign}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sign detail modal */}
      <SignModal
        sign={selectedSign}
        signs={alphabetSigns}
        onClose={() => setSelectedSign(null)}
        onSelect={setSelectedSign}
      />
    </section>
  );
}
