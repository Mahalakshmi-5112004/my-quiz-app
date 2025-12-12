"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResultView({ score, onRestart }: any) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let i = 0;

    const run = () => {
      if (i <= score) {
        setDisplayScore(i);
        i++;
        setTimeout(run, 45);
      }
    };

    run();
  }, [score]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-12">
      <div className="max-w-3xl text-center">

        <div className="inline-block bg-white/90 px-6 py-2 rounded-md mb-6">
          Keep Learning!
        </div>

        <h2 className="text-5xl font-heading-not-italic text-[#0b3750] mb-6">
          Your Final score is
        </h2>

        {/* ANIMATED NUMBER */}
        <div className="text-[140px] font-heading text-[#0b3750] leading-none mb-8 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayScore}
              initial={{ opacity: 0, y: 40 }}   // comes from below
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}     // vanishes upward
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ display: "inline-block" }} // <--- fixes Netlify TS error
            >
              {displayScore}
            </motion.div>
          </AnimatePresence>

          <span className="text-4xl align-top ml-2">%</span>
        </div>

        <button
          onClick={onRestart}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#dff6fb] to-[#cdeeee] shadow"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}
