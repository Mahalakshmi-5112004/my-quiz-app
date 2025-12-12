"use client";

import { useState } from "react";
import QuizCard from "@/components/QuizCard";
import ResultView from "@/components/ResultView";
import PawLuck from "@/components/PawLuck";
import { AnimatePresence, motion } from "framer-motion";

const QUESTIONS = [
  { id: 1, q: "1. What sound does a cat make?", options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"], correctIndex: 1 },
  { id: 2, q: "2. What would you probably find in your fridge?", options: ["Shoes", "Ice Cream", "Books"], correctIndex: 1 },
  { id: 3, q: "3. What color are bananas?", options: ["Blue", "Yellow", "Red"], correctIndex: 1 },
  { id: 4, q: "4. How many stars are in the sky?", options: ["Two", "Infinite", "One Hundred"], correctIndex: 1 }
];

/* -------------------------------------------------
   ANIMATION VARIANTS
--------------------------------------------------*/

// 🎉 First page animation — drop in from above
const dropIn = {
  initial: { opacity: 0, y: -80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
  }
};

// ▶ Next → Fade up
const fadeUp = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -25,
    transition: { duration: 0.45, ease: "easeInOut" }
  }
};

// ◀ Prev → Fade down
const fadeDown = {
  initial: { opacity: 0, y: -25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: { duration: 0.45, ease: "easeInOut" }
  }
};

// ⬆ Final submit → vanish upward strongly
const exitUpStrong = {
  exit: {
    opacity: 0,
    y: -120,
    transition: { duration: 0.6, ease: "easeIn" }
  }
};

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const onSelect = (i: number) => setSelected(i);

  /* NEXT BUTTON */
  const onNext = () => {
    if (selected === null) return;

    const updated = [...answers];
    updated[currentIndex] = selected;
    setAnswers(updated);
    setDirection(1);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(updated[currentIndex + 1] ?? null);
    } else {
      // Submit → go to results
      setShowResult(true);
    }
  };

  /* PREVIOUS BUTTON */
  const onPrev = () => {
    if (currentIndex === 0) return;
    setDirection(-1);
    setCurrentIndex(currentIndex - 1);
    setSelected(answers[currentIndex - 1] ?? null);
  };

  /* ----------------------- RESULT PAGE ----------------------- */
  if (showResult) {
    let correct = 0;
    QUESTIONS.forEach((q, i) => {
      if (answers[i] === q.correctIndex) correct++;
    });

    const percent = Math.round((correct / QUESTIONS.length) * 100);

    return (
      <ResultView
        score={percent}
        onRestart={() => {
          setCurrentIndex(0);
          setSelected(null);
          setAnswers([]);
          setShowResult(false);
        }}
      />
    );
  }

  /* ----------------------- QUESTION PAGE ----------------------- */
  return (
    <div className="flex justify-center pt-10 pb-20 px-4">
      <div className="quiz-wrapper relative">

        {currentIndex === 0 && <PawLuck />}

        <h1 className="text-6xl text-center heading-gradient mb-3">
          Test Your Knowledge
        </h1>

        <div className="flex justify-center mb-10">
          <p className="text-gray-600 bg-white px-6 py-2 rounded-xl shadow-sm">
            Answer all questions to see your results
          </p>
        </div>

        {/* ----------------------- PAGE TRANSITION ----------------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={
              currentIndex === 0 && answers.length === 0
                ? dropIn
                : direction === 1
                ? fadeUp
                : fadeDown
            }
            initial="initial"
            animate="animate"
            exit={
              currentIndex === QUESTIONS.length - 1
                ? exitUpStrong.exit    // LAST PAGE → exit upward strongly
                : direction === 1
                ? fadeUp.exit          // next → fade up exit
                : fadeDown.exit        // prev → fade down exit
            }
          >
            <QuizCard
              questionIndex={currentIndex + 1}
              total={QUESTIONS.length}
              question={QUESTIONS[currentIndex].q}
              options={QUESTIONS[currentIndex].options}
              selected={selected}
              onSelect={onSelect}
              onNext={onNext}
              onPrev={onPrev}
            />
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
