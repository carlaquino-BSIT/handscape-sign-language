"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function SignModal({ sign, signs, onClose, onSelect }) {
  useEffect(() => {
    if (!sign) return;

    const handleKeyDown = (event) => {
      const currentIndex = signs.findIndex((item) => item.id === sign.id);

      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && currentIndex > 0) {
        onSelect(signs[currentIndex - 1]);
      }

      if (event.key === "ArrowRight" && currentIndex < signs.length - 1) {
        onSelect(signs[currentIndex + 1]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [sign, signs, onClose, onSelect]);

  if (!sign) return null;

  const currentIndex = signs.findIndex((item) => item.id === sign.id);

  const previousSign = currentIndex > 0 ? signs[currentIndex - 1] : null;

  const nextSign =
    currentIndex < signs.length - 1 ? signs[currentIndex + 1] : null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/75 p-3 backdrop-blur-md sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {" "}
      <div className="relative flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl md:max-h-[90vh] md:flex-row">
        {/* Close */}{" "}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sign details"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center border border-neutral-200 bg-white text-neutral-600 transition-all duration-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          {" "}
          <i className="ri-close-line text-base sm:text-lg" />{" "}
        </button>
        
        {/* Image */}
        <div className="relative aspect-square w-full shrink-0 bg-[#eeeeeb] md:aspect-auto md:min-h-[540px] md:w-1/2">
          <Image
            src={sign.image}
            alt={`FSL sign for ${sign.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6 sm:p-10"
            priority
          />

          {/* Image label */}
          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <span className="bg-white/80 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-500 backdrop-blur-sm">
              FSL / {String(currentIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6 sm:p-8 md:w-1/2 md:p-10">
          {/* Header */}
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-blue-600 sm:text-[9px]">
              Filipino Sign Language
            </p>

            <h2 className="mt-4 font-pixel-square text-6xl leading-none tracking-tight text-neutral-950 sm:text-7xl">
              {sign.name}
            </h2>

            <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-neutral-400">
              Alphabet / Letter
            </p>
          </div>

          <div className="my-7 border-t border-neutral-200 sm:my-8" />

          {/* Description */}
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-neutral-400 sm:text-[9px]">
              About this sign
            </p>

            <p className="mt-3 max-w-sm text-xs leading-6 text-neutral-600 sm:text-sm">
              This is the Filipino Sign Language fingerspelling sign for the
              letter{" "}
              <span className="font-semibold text-neutral-950">
                {sign.name}
              </span>
              .
            </p>
          </div>

          {/* Keyboard hint */}
          <div className="mt-7 hidden items-center gap-2 sm:flex">
            <span className="border border-neutral-200 px-2 py-1 font-mono text-[8px] text-neutral-400">
              ←
            </span>

            <span className="border border-neutral-200 px-2 py-1 font-mono text-[8px] text-neutral-400">
              →
            </span>

            <span className="ml-1 font-mono text-[8px] uppercase tracking-[0.1em] text-neutral-400">
              Navigate
            </span>
          </div>

          {/* Navigation */}
          <div className="mt-auto pt-8 sm:pt-10">
            <div className="flex items-center justify-between gap-3 border-t border-neutral-200 pt-4">
              {/* Previous */}
              <button
                type="button"
                disabled={!previousSign}
                onClick={() => {
                  if (previousSign) {
                    onSelect(previousSign);
                  }
                }}
                className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.12em] text-neutral-500 transition-colors hover:text-neutral-950 disabled:pointer-events-none disabled:opacity-25 sm:text-[10px]"
              >
                <i className="ri-arrow-left-line transition-transform group-hover:-translate-x-1" />
                Previous
              </button>

              {/* Counter */}
              <span className="font-mono text-[8px] text-neutral-400 sm:text-[9px]">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(signs.length).padStart(2, "0")}
              </span>

              {/* Next */}
              <button
                type="button"
                disabled={!nextSign}
                onClick={() => {
                  if (nextSign) {
                    onSelect(nextSign);
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
