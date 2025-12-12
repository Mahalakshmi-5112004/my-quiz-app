"use client";

import SegmentedProgressBar from "./SegmentedProgressBar";
import { motion } from "framer-motion";

export default function QuizCard({
  questionIndex,
  total,
  question,
  options,
  selected,
  onSelect,
  onNext,
  onPrev
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center"
    >
      <SegmentedProgressBar total={total} current={questionIndex} />

      <div className="question-box w-[80%] max-w-[850px] py-6 px-10 mt-10 text-center rounded-2xl">
        <h2 className="text-3xl font-heading-not-italic text-[#0b3750] font-semibold">
          {question}
        </h2>
      </div>

      <div className="space-y-6 mt-6 w-[80%] max-w-[850px]">
        {options.map((opt, i) => (
          <div
            key={i}
            onClick={() => onSelect(i)}
            className={`w-full py-5 px-6 rounded-2xl border-2 cursor-pointer text-xl font-medium text-center transition-all duration-200
              ${
                selected === i
                  ? "bg-[#d6efff] border-[#78c8ef]"
                  : "bg-white border-[#cae9f6] hover:bg-[#f0fbff]"
              }
            `}
          >
            {opt}
          </div>
        ))}
      </div>

      <div className="flex justify-end w-[80%] max-w-[850px] mt-12 gap-4">
        <button
          onClick={onPrev}
          disabled={questionIndex === 1}
          className={`nav-btn ${questionIndex === 1 ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          ←
        </button>

        {questionIndex < total ? (
          <button
            onClick={onNext}
            disabled={selected === null}
            className={`nav-btn ${selected === null ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            →
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={selected === null}
            className={`submit-btn ${selected === null ? "opacity-40 cursor-not-allowed" : ""}`}
          >
            Submit
          </button>
        )}
      </div>
    </motion.div>
  );
}
