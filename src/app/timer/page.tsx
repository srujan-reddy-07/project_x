"use client";
import Countdown from "@/components/sections/Countdown";

export default function TimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#06060c] transition-colors pt-28 pb-20 flex flex-col justify-center">
      <Countdown />
    </main>
  );
}
