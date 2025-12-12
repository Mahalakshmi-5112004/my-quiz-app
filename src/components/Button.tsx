"use client";

import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <motion.button
      {...props}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-lg ${className}`}
    >
      {children}
    </motion.button>
  );
}
