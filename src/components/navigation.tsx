"use client";

import { useRouter } from "next/navigation";

export default function Navigation({ active }: { active?: "luggage" | "access hub" | "lost & found" }) {
  const router = useRouter();

  const base =
    "text-left w-full px-3 py-2 rounded-md font-medium transition-colors";
  const inactive =
    "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800";
  const activeCls =
    "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50";

  return (
    <aside className="w-56 shrink-0 border-r border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 min-h-screen p-4">
      <nav className="flex flex-col space-y-2">
        <button
          onClick={() => router.push("/luggage")}
          className={`${base} ${active === "luggage" ? activeCls : inactive}`}
        >
          Luggage
        </button>
        <button
          onClick={() => router.push("/access-hub")}
          className={`${base} ${active === "access hub" ? activeCls : inactive}`}
        >
          Access Hub
        </button>
        <button
          onClick={() => router.push("/lost-and-found")}
          className={`${base} ${active === "lost & found" ? activeCls : inactive}`}
        >
          Lost & Found
        </button>
      </nav>
    </aside>
  );
}