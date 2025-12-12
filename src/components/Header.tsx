"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
      <h1 className="text-xl font-bold text-gray-800 tracking-wide">
        Quiz App
      </h1>

      <nav className="flex items-center gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/quiz" className="hover:text-blue-600 transition">
          Quiz
        </Link>
      </nav>
    </header>
  );
}
