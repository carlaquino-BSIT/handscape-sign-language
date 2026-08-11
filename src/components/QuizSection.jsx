"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { signs } from "@/data/signs";

const QUIZ_SIZE = 10;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Deterministic questions for the initial server render.
// Randomization happens only after hydration.
function createInitialQuestions() {
  const availableSigns = signs.filter(
    (sign) =>
      sign.category === "alphabet" ||
      sign.category === "numbers"
  );

  const selectedSigns = availableSigns.slice(
    0,
    Math.min(QUIZ_SIZE, availableSigns.length)
  );

  return selectedSigns.map((correctSign) => {
    const wrongAnswers = availableSigns
      .filter((sign) => sign.id !== correctSign.id)
      .slice(0, 3);

    return {
      sign: correctSign,
      choices: [correctSign, ...wrongAnswers],
    };
  });
}

function createQuestions() {
  const availableSigns = signs.filter(
    (sign) =>
      sign.category === "alphabet" ||
      sign.category === "numbers"
  );

  const selectedSigns = shuffle(availableSigns).slice(
    0,
    Math.min(QUIZ_SIZE, availableSigns.length)
  );

  return selectedSigns.map((correctSign) => {
    const wrongAnswers = shuffle(
      availableSigns.filter(
        (sign) => sign.id !== correctSign.id
      )
    ).slice(0, 3);

    return {
      sign: correctSign,
      choices: shuffle([
        correctSign,
        ...wrongAnswers,
      ]),
    };
  });
}

export default function QuizSection() {
  const [questions, setQuestions] = useState(() =>
    createInitialQuestions()
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Randomize only after the component has hydrated.
  useEffect(() => {
    setQuestions(createQuestions());
  }, []);

  const question = questions[currentQuestion];

  const progress = useMemo(() => {
    if (!questions.length) return 0;

    return ((currentQuestion + 1) / questions.length) * 100;
  }, [currentQuestion, questions.length]);

  function handleAnswer(answer) {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);

    if (answer.id === question.sign.id) {
      setScore((previous) => previous + 1);
    }
  }

  function handleNext() {
    if (currentQuestion >= questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setQuestions(createQuestions());
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  if (!questions.length) {
    return null;
  }

  return (
    <section
      id="quiz"
      className="bg-[#f7f7f5] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-600">
              03 / Quiz
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-neutral-950 sm:text-6xl">
              Test what you
              <span className="text-neutral-400">
                {" "}know.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-neutral-500 lg:text-right">
            Identify the Filipino Sign Language sign and test
            how well you remember what you have learned.
          </p>
        </div>

        {/* Quiz */}
        <div className="mt-14 border border-neutral-200 bg-white">

          {!finished ? (
            <>
              {/* Top bar */}
              <div className="flex flex-col gap-4 border-b border-neutral-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                    Question
                  </p>

                  <p className="mt-1 font-pixel-square text-xl text-neutral-950">
                    {String(currentQuestion + 1).padStart(2, "0")}
                    {" "}
                    /
                    {" "}
                    {String(questions.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="w-full sm:max-w-xs">
                  <div className="mb-2 flex justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-neutral-400">
                      Progress
                    </span>

                    <span className="font-mono text-[8px] text-neutral-400">
                      {Math.round(progress)}%
                    </span>
                  </div>

                  <div className="h-1 bg-neutral-100">
                    <div
                      className="h-full bg-neutral-950 transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-neutral-400">
                  Score:{" "}
                  <span className="text-neutral-950">
                    {score}
                  </span>
                </div>
              </div>

              {/* Question */}
              <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="relative flex min-h-[360px] items-center justify-center bg-neutral-100 p-8 sm:min-h-[460px]">

                  <div className="relative h-full min-h-[300px] w-full max-w-md">
                    <Image
                      src={question.sign.image}
                      alt="FSL quiz sign"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>

                  <span className="absolute left-5 top-5 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-400">
                    Identify this sign
                  </span>
                </div>

                {/* Answers */}
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-blue-600">
                      Choose your answer
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
                      What does this sign represent?
                    </h3>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {question.choices.map((choice, index) => {
                      const isSelected =
                        selectedAnswer?.id === choice.id;

                      const isCorrect =
                        choice.id === question.sign.id;

                      let answerClass =
                        "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-950 hover:bg-neutral-50";

                      if (selectedAnswer) {
                        if (isCorrect) {
                          answerClass =
                            "border-neutral-950 bg-neutral-950 text-white";
                        } else if (isSelected) {
                          answerClass =
                            "border-red-300 bg-red-50 text-red-700";
                        } else {
                          answerClass =
                            "border-neutral-200 bg-neutral-50 text-neutral-400";
                        }
                      }

                      return (
                        <button
                          key={choice.id}
                          type="button"
                          disabled={Boolean(selectedAnswer)}
                          onClick={() =>
                            handleAnswer(choice)
                          }
                          className={`group flex items-center gap-4 border p-4 text-left transition-all duration-200 ${answerClass}`}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-current font-mono text-[9px]">
                            {String.fromCharCode(65 + index)}
                          </span>

                          <span className="text-sm font-medium">
                            {choice.name}
                          </span>

                          {selectedAnswer &&
                            isCorrect && (
                              <i className="ri-check-line ml-auto text-lg" />
                            )}

                          {selectedAnswer &&
                            isSelected &&
                            !isCorrect && (
                              <i className="ri-close-line ml-auto text-lg" />
                            )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback */}
                  {selectedAnswer && (
                    <div className="mt-6 border-t border-neutral-200 pt-5">

                      {selectedAnswer.id === question.sign.id ? (
                        <p className="text-sm font-medium text-neutral-950">
                          Correct. Nice work.
                        </p>
                      ) : (
                        <p className="text-sm font-medium text-neutral-950">
                          Not quite. The correct answer is{" "}
                          <span className="font-semibold">
                            {question.sign.name}
                          </span>
                          .
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={handleNext}
                        className="mt-5 flex items-center gap-2 bg-neutral-950 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-600"
                      >
                        {currentQuestion ===
                        questions.length - 1
                          ? "View result"
                          : "Next question"}

                        <i className="ri-arrow-right-line" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* Result */
            <div className="flex min-h-[500px] flex-col items-center justify-center px-6 py-16 text-center">

              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-blue-600">
                Quiz complete
              </p>

              <div className="mt-6 font-pixel-square text-7xl text-neutral-950 sm:text-8xl">
                {score}/{questions.length}
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950">
                {score === questions.length
                  ? "Perfect score."
                  : score >= questions.length / 2
                    ? "Good work."
                    : "Keep practicing."}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                You got {score} out of {questions.length}{" "}
                questions correct. Review the signs and try
                again to improve your score.
              </p>

              <button
                type="button"
                onClick={restartQuiz}
                className="mt-8 flex items-center gap-2 bg-neutral-950 px-6 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-600"
              >
                <i className="ri-refresh-line" />
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}