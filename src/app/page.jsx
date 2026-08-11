import Link from "next/link";


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignsSection from "@/components/SignsSection";
import QuizSection from "@/components/QuizSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <SignsSection />

        {/* Learn FSL */}
        <section
          id="learn"
          className="border-t border-neutral-200 bg-[#f7f7f5] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600">
                  01 / Learn FSL
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-neutral-950 sm:text-6xl">
                  Start learning
                  <span className="block text-neutral-400">
                    Filipino Sign Language.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-xs leading-6 text-neutral-500 lg:text-right">
                Explore the alphabet, numbers, common words, and useful phrases
                through Filipino Sign Language.
              </p>
            </div>

            {/* Learning Cards */}
            <div className="mt-12 grid grid-cols-1 gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
              {/* Alphabet */}
              <Link
                href="/signs/alphabet"
                className="group flex min-h-[270px] flex-col justify-between bg-[#f7f7f5] p-6 transition-colors duration-300 hover:bg-white sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                    01 / 04
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border border-neutral-200 text-neutral-500 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    <i className="ri-arrow-right-up-line text-sm" />
                  </span>
                </div>

                <div>
                  <div className="font-pixel-grid text-5xl leading-none text-neutral-200 transition-colors duration-300 group-hover:text-blue-100">
                    A–Z
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950">
                    Alphabet
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-neutral-500">
                    Learn the 26 letters through FSL fingerspelling.
                  </p>
                </div>
              </Link>

              {/* Numbers */}
              <Link
                href="/signs/numbers"
                className="group flex min-h-[270px] flex-col justify-between bg-[#f7f7f5] p-6 transition-colors duration-300 hover:bg-white sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                    02 / 04
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border border-neutral-200 text-neutral-500 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    <i className="ri-arrow-right-up-line text-sm" />
                  </span>
                </div>

                <div>
                  <div className="font-pixel-grid text-5xl leading-none text-neutral-200 transition-colors duration-300 group-hover:text-blue-100">
                    1–10
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950">
                    Numbers
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-neutral-500">
                    Practice numbers and basic counting signs.
                  </p>
                </div>
              </Link>

              {/* Words */}
              <Link
                href="/signs/words"
                className="group flex min-h-[270px] flex-col justify-between bg-[#f7f7f5] p-6 transition-colors duration-300 hover:bg-white sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                    03 / 04
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border border-neutral-200 text-neutral-500 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    <i className="ri-arrow-right-up-line text-sm" />
                  </span>
                </div>

                <div>
                  <div className="font-pixel-grid text-5xl leading-none text-neutral-200 transition-colors duration-300 group-hover:text-blue-100">
                    WORD
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950">
                    Common Words
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-neutral-500">
                    Learn useful everyday Filipino signs.
                  </p>
                </div>
              </Link>

              {/* Phrases */}
              <Link
                href="/signs/phrases"
                className="group flex min-h-[270px] flex-col justify-between bg-[#f7f7f5] p-6 transition-colors duration-300 hover:bg-white sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                    04 / 04
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border border-neutral-200 text-neutral-500 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    <i className="ri-arrow-right-up-line text-sm" />
                  </span>
                </div>

                <div>
                  <div className="font-pixel-grid text-5xl leading-none text-neutral-200 transition-colors duration-300 group-hover:text-blue-100">
                    FSL
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-neutral-950">
                    Phrases
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-neutral-500">
                    Practice useful expressions and greetings.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section
          id="lessons"
          className="bg-neutral-950 px-6 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
                  02 / Lessons
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  Learn step
                  <span className="text-neutral-500"> by step.</span>
                </h2>
              </div>

              <p className="max-w-sm text-xs leading-6 text-neutral-400 lg:text-right">
                Follow a simple learning path from individual signs to useful
                Filipino Sign Language expressions.
              </p>
            </div>

            {/* Lesson roadmap */}
            <div className="mt-14 border-t border-white/10">
              {/* Lesson 01 */}
              <Link
                href="/signs/alphabet"
                className="group grid gap-6 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.025] sm:grid-cols-[80px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-600">
                  01
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      Alphabet
                    </h3>

                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-blue-400">
                      A–Z
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-neutral-500">
                    Learn the 26 letters through Filipino Sign Language
                    fingerspelling.
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-500 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-neutral-950">
                  <i className="ri-arrow-right-up-line text-sm" />
                </span>
              </Link>

              {/* Lesson 02 */}
              <Link
                href="/signs/numbers"
                className="group grid gap-6 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.025] sm:grid-cols-[80px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-600">
                  02
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      Numbers
                    </h3>

                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-blue-400">
                      1–10
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-neutral-500">
                    Practice basic counting signs and become familiar with
                    numbers in FSL.
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-500 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-neutral-950">
                  <i className="ri-arrow-right-up-line text-sm" />
                </span>
              </Link>

              {/* Lesson 03 */}
              <Link
                href="/signs/words"
                className="group grid gap-6 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.025] sm:grid-cols-[80px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-600">
                  03
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      Common Words
                    </h3>

                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-blue-400">
                      WORDS
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-neutral-500">
                    Learn useful everyday Filipino signs and build your basic
                    vocabulary.
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-500 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-neutral-950">
                  <i className="ri-arrow-right-up-line text-sm" />
                </span>
              </Link>

              {/* Lesson 04 */}
              <Link
                href="/signs/phrases"
                className="group grid gap-6 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.025] sm:grid-cols-[80px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-600">
                  04
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      Phrases
                    </h3>

                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-blue-400">
                      FSL
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-neutral-500">
                    Practice useful expressions and greetings for everyday
                    communication.
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-neutral-500 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-neutral-950">
                  <i className="ri-arrow-right-up-line text-sm" />
                </span>
              </Link>
            </div>

            {/* Bottom note */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-blue-400" />

              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600">
                4 learning modules available
              </p>
            </div>
          </div>
        </section>

        {/* Quiz */}
        <QuizSection />
      </main>
      <Footer />
    </>
  );
}
