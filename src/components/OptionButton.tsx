"use client";

export default function OptionButton({ text, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className="quiz-option text-center text-lg"
    >
      {text}
    </div>
  );
}
