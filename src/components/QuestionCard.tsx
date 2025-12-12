"use client";

import { motion } from "framer-motion";

export default function QuestionCard({ question, options, onSelect }: any) {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-xl w-[750px]">
      {/* Animation only here — WITHOUT className */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ width: "100%", height: "100%" }} // required instead of className
      >
        <h2 className="text-3xl font-bold mb-10">{question}</h2>

        <div className="flex flex-col gap-5">
          {options.map((opt: string, i: number) => (
            <button
              key={i}
              onClick={() => onSelect(opt)}
              className="w-full text-left px-6 py-4 rounded-2xl border border-gray-300 
                         bg-white text-gray-800 text-lg
                         hover:bg-[#6a5acd] hover:text-white transition-all duration-200"
            >
              {opt}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
