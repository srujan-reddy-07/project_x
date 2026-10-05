"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const TARGET = "2026-11-30T15:00:00+05:30";

function pad(n: number) { return String(n).padStart(2, "0"); }

function getTimeLeft() {
  const diff = new Date(TARGET).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlipping(true);
      const t = setTimeout(() => { setPrev(value); setFlipping(false); }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-32 sm:w-36 sm:h-40">
        {/* Card */}
        <div
          className="glass-card rounded-2xl w-full h-full flex items-center justify-center border border-slate-300 dark:border-purple-500/40 bg-white dark:bg-slate-900/90 overflow-hidden group shadow-md dark:shadow-2xl"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        >
          {/* Shimmer line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200 dark:bg-white/10" />
          {/* Shine effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(167,139,250,0.15) 50%, transparent 60%)",
            }}
          />
          <span
            className={cn(
              "relative z-10 text-5xl sm:text-6xl font-extrabold tabular-nums transition-all duration-300 text-slate-900 dark:text-white",
              flipping ? "scale-95 opacity-60" : "scale-100 opacity-100"
            )}
          >
            {pad(value)}
          </span>
        </div>
      </div>
      <span className="text-xs font-bold text-slate-700 dark:text-purple-300/90 uppercase tracking-widest">{label}</span>
    </div>
  );
}


export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const displayTime = mounted ? time : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const isOver = mounted && Object.values(time).every((v) => v === 0);

  return (
    <section className="relative py-28 bg-slate-50 dark:bg-[#06060c] transition-colors overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(122,95,210,0.08),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className={cn("space-y-3 mb-16 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <p className="text-xs font-semibold text-purple-700 dark:text-primary-light tracking-[0.25em] uppercase">Mark Your Calendar</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-slate-900 dark:text-white tracking-tight">See You At The Finale 🔥</h2>
          <p className="text-slate-700 dark:text-white/70 text-sm font-semibold">Nov 30, 2026 · KMIT, Hyderabad</p>
        </div>

        {isOver ? (
          <div className="glass-card rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold glow-text">The Hackathon Has Begun! 🚀</h3>
            <p className="text-slate-600 dark:text-white/60 mt-3 font-medium">Good luck to all participants.</p>
          </div>
        ) : (
          <div className={cn(
            "flex items-center justify-center gap-4 sm:gap-8 transition-all duration-700",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          style={{ transitionDelay: "200ms" }}>
            <FlipUnit value={displayTime.days} label="Days" />
            <div className="text-3xl font-bold text-slate-600 dark:text-purple-400/40 mb-8">:</div>
            <FlipUnit value={displayTime.hours} label="Hours" />
            <div className="text-3xl font-bold text-slate-600 dark:text-purple-400/40 mb-8">:</div>
            <FlipUnit value={displayTime.minutes} label="Mins" />
            <div className="text-3xl font-bold text-slate-600 dark:text-purple-400/40 mb-8">:</div>
            <FlipUnit value={displayTime.seconds} label="Secs" />
          </div>
        )}

        <div className={cn(
          "mt-12 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )} style={{ transitionDelay: "400ms" }}>
          <a
            href="https://unstop.com/o/TQusDqL"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent !text-white font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Secure Your Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}
