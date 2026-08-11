"use client";

import Image from "next/image";

export default function WordSign({ word, onSelect }) {
  const letters = word.name.replace(/[^A-Z]/gi, "").split("");

  return (
    <button
      type="button"
      onClick={() => onSelect(word)}
      className="group w-full overflow-hidden border border-neutral-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-200/40"
    >
      {/* Letter preview */}{" "}
      <div className="grid grid-cols-3 gap-px bg-neutral-200">
        {letters.slice(0, 6).map((letter, index) => (
          <div
            key={`${letter}-${index}`}
            className="relative aspect-square overflow-hidden bg-[#eeeeeb]"
          >
            <Image
              src={`/signs/alphabet/${letter.toLowerCase()}.png`}
              alt={`FSL sign for ${letter}`}
              fill
              sizes="(max-width: 640px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />{" "}
          </div>
        ))}

        {letters.length > 6 && (
          <div className="flex aspect-square items-center justify-center bg-white">
            <span className="font-mono text-[9px] text-neutral-400">
              +{letters.length - 6}
            </span>
          </div>
        )}
      </div>
      {/* Word information */}
      <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-4">
        <div className="min-w-0">
          <h3 className="truncate font-pixel-square text-lg leading-none text-neutral-950">
            {word.name}
          </h3>

          <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
            {letters.length} letters
          </p>
        </div>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-neutral-200 text-neutral-400 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
          <i className="ri-arrow-right-up-line text-xs" />
        </span>
      </div>
    </button>
  );
}
