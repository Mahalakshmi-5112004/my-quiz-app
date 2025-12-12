"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type MotionButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className = "",
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      {...props} // ⬅ onClick, disabled, type, etc.
      className={`px-4 py-2 rounded-lg ${className}`}
    >
      {children}
    </motion.button>
  );
}
