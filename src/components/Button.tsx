"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: any;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "py-3 px-5 rounded-xl text-lg font-semibold transition duration-200";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.button>
  );
}
