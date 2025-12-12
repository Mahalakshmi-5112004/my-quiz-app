"use client";

export default function SegmentedProgressBar({ total, current }) {
  return (
    <div className="progress-wrapper flex justify-center gap-4 mb-8">
      {Array.from({ length: total }).map((_, i) => {
        const isFilled = i < current; // fill ALL previous + current
        return (
          <div
            key={i}
            className={`
              h-2 rounded-full transition-all duration-300
              ${isFilled ? "bg-[#0b3750] w-28" : "bg-[#e4eff7] w-24"}
            `}
          />
        );
      })}
    </div>
  );
}
