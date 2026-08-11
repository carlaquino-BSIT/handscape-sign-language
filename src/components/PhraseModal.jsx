"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function PhraseModal({
phrase,
phrases,
onClose,
onSelect,
}) {
useEffect(() => {
if (!phrase) return;


const handleKeyDown = (event) => {
  const currentIndex = phrases.findIndex(
    (item) => item.id === phrase.id
  );

  if (event.key === "Escape") {
    onClose();
  }

  if (event.key === "ArrowLeft" && currentIndex > 0) {
    onSelect(phrases[currentIndex - 1]);
  }

  if (
    event.key === "ArrowRight" &&
    currentIndex < phrases.length - 1
  ) {
    onSelect(phrases[currentIndex + 1]);
  }
};

document.addEventListener("keydown", handleKeyDown);

const previousOverflow = document.body.style.overflow;
document.body.style.overflow = "hidden";

return () => {
  document.removeEventListener("keydown", handleKeyDown);
  document.body.style.overflow = previousOverflow;
};


}, [phrase, phrases, onClose, onSelect]);

if (!phrase) return null;

const currentIndex = phrases.findIndex(
(item) => item.id === phrase.id
);

const previousPhrase =
currentIndex > 0 ? phrases[currentIndex - 1] : null;

const nextPhrase =
currentIndex < phrases.length - 1
? phrases[currentIndex + 1]
: null;

const letters = phrase.name
.replace(/[^A-Z]/gi, "")
.split("");

return (
<div
className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/75 p-3 backdrop-blur-md sm:p-5"
onMouseDown={(event) => {
if (event.target === event.currentTarget) {
onClose();
}
}}
> <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden bg-white shadow-2xl md:max-h-[90vh]">
{/* Close */} <button
       type="button"
       onClick={onClose}
       aria-label="Close phrase details"
       className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center border border-neutral-200 bg-white text-neutral-600 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
     > <i className="ri-close-line text-base sm:text-lg" /> </button>

```
    <div className="flex min-h-0 flex-col overflow-y-auto">
      {/* Header */}
      <div className="border-b border-neutral-200 p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-blue-600 sm:text-[9px]">
          Filipino Sign Language / Phrase
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="max-w-3xl font-pixel-square text-4xl leading-[0.95] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              {phrase.name}
            </h2>

            <p className="mt-4 max-w-xl text-xs leading-6 text-neutral-500 sm:text-sm">
              {phrase.description}
            </p>
          </div>

          <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
            {letters.length} letters
          </span>
        </div>
      </div>

      {/* Letter signs */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {letters.map((letter, index) => (
            <div
              key={`${letter}-${index}`}
              className="overflow-hidden border border-neutral-200 bg-white"
            >
              <div className="relative aspect-square bg-[#eeeeeb]">
                <Image
                  src={`/signs/alphabet/${letter.toLowerCase()}.png`}
                  alt={`FSL sign for ${letter}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between border-t border-neutral-100 px-3 py-3">
                <span className="font-pixel-square text-xl text-neutral-950">
                  {letter}
                </span>

                <span className="font-mono text-[8px] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-neutral-200 px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={!previousPhrase}
            onClick={() => {
              if (previousPhrase) {
                onSelect(previousPhrase);
              }
            }}
            className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-neutral-950 disabled:pointer-events-none disabled:opacity-25 sm:text-[10px]"
          >
            <i className="ri-arrow-left-line transition-transform group-hover:-translate-x-1" />
            Previous
          </button>

          <span className="font-mono text-[8px] text-neutral-400 sm:text-[9px]">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(phrases.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            disabled={!nextPhrase}
            onClick={() => {
              if (nextPhrase) {
                onSelect(nextPhrase);
              }
            }}
            className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-neutral-950 disabled:pointer-events-none disabled:opacity-25 sm:text-[10px]"
          >
            Next
            <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


);
}
