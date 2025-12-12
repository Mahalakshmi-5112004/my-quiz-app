"use client";

import { useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: BtnProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      {...props}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        transform: pressed ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.12s ease",
      }}
      className={`px-4 py-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
