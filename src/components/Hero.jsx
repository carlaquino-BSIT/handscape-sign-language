export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      {/* Pixel decoration */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[28%] hidden h-20 w-20 border border-neutral-200 lg:block"
      >
        <div className="grid h-full w-full grid-cols-4 grid-rows-4 p-2 opacity-50">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className={
                index === 5 || index === 6 || index === 9 || index === 10
                  ? "bg-neutral-900"
                  : ""
              }
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600">
              Filipino Sign Language
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-neutral-950 sm:text-7xl lg:text-[clamp(5rem,9vw,9rem)]">
            Learn
            <span className="relative ml-3 inline-block">
              sign
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-3 h-2 w-2 bg-blue-600 sm:-right-3 sm:-top-4 sm:h-3 sm:w-3"
              />
            </span>
            <br />
            language.
          </h1>

          {/* Description */}
          <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end">
            <p className="max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
              Learn Filipino Sign Language through visual lessons, useful
              vocabulary, and interactive practice designed to make every sign
              easier to understand.
            </p>

            <div className="hidden shrink-0 font-pixel-circle text-4xl text-neutral-200 sm:block">
              🤟
            </div>
          </div>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#signs"
              className="group inline-flex items-center gap-3 bg-neutral-900 px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.13em] text-white transition-all hover:bg-blue-600"
            >
              Explore Signs
              <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#quiz"
              className="inline-flex items-center gap-3 border border-neutral-200 bg-white px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.13em] text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-950"
            >
              Take a Quiz
              <i className="ri-arrow-right-up-line text-sm" />
            </a>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-20 grid max-w-3xl grid-cols-2 border-t border-neutral-200 pt-5 sm:grid-cols-3">
          <div>
            <p className="font-pixel-square text-2xl tracking-tight text-neutral-950">
              26
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
              Alphabet Signs
            </p>
          </div>

          <div className="border-l border-neutral-200 pl-5">
            <p className="font-pixel-square text-2xl tracking-tight text-neutral-950">
              FSL
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
              Filipino Sign Language
            </p>
          </div>

          <div className="hidden border-l border-neutral-200 pl-5 sm:block">
            <p className="font-pixel-square text-2xl tracking-tight text-neutral-950">
              01
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
              Start With One Sign
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
