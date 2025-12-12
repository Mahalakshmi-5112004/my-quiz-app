"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      {...props}
      className={`px-4 py-2 rounded-lg ${className}`}
    >
      {children}
    </motion.button>
  );
}
