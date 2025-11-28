"use client";

import { useRouter } from "next/navigation";
import React from "react";

type HeaderProps = {
  buttonLabel?: string;
  buttonRoute?: string;
  className?: string;
};

export default function Header({
  buttonLabel = "Home",
  buttonRoute = "/",
  className = ""
}: HeaderProps) {
  const router = useRouter();

  return (
    <header className={`px-6 py-4 ${className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => router.push("/")}
        >
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            CarryOn
          </h1>
        </div>
        <button
          onClick={() => router.push(buttonRoute)}
          className="bg-zinc-900 dark:bg-zinc-600 hover:bg-zinc-800 dark:hover:bg-zinc-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          {buttonLabel}
        </button>
      </div>
    </header>
  );
}