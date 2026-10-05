"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaJs, FaDocker, FaRust, FaSwift, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiGo, SiRuby, SiSharp, SiCplusplus, SiKotlin } from "react-icons/si";
import { cn } from "@/lib/utils";

const ICONS = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaNodeJs, color: "#68A063" },
  { Icon: FaPython, color: "#FFD43B" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaRust, color: "#CE422B" },
  { Icon: FaSwift, color: "#F05138" },
  { Icon: SiGo, color: "#00ACD7" },
  { Icon: FaJava, color: "#ED8B00" },
  { Icon: SiKotlin, color: "#7F52FF" },
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: SiRuby, color: "#CC342D" },
  { Icon: SiSharp, color: "#239120" },
  { Icon: SiCplusplus, color: "#004488" },
];

interface FloatingIconState {
  top: string; left: string; delay: string; duration: string; color: string; size: number;
}

function HeroGridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(122,95,210,1) 1px, transparent 1px), linear-gradient(to right, rgba(122,95,210,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(122,95,210,0.15),transparent)]" />
    </div>
  );
}

export default function Hero() {
  const [icons, setIcons] = useState<(FloatingIconState & { Icon: React.ElementType })[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIcons(
      ICONS.map((ic) => ({
        ...ic,
        top: `${5 + Math.random() * 90}%`,
        left: `${2 + Math.random() * 96}%`,
        delay: `${-Math.random() * 25}s`,
        duration: `${18 + Math.random() * 20}s`,
        size: 20 + Math.floor(Math.random() * 16),
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-32 pb-32 sm:pb-36 overflow-hidden bg-slate-50 dark:bg-[#050508] transition-colors">
      <HeroGridPattern />

      {/* Floating tech icons */}
      {mounted && icons.map(({ Icon, color, top, left, delay, duration, size }, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top, left, color, opacity: 0.12,
            animation: `float-around ${duration} linear infinite`,
            animationDelay: delay,
          }}
        >
          <Icon size={size} />
        </div>
      ))}

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[200px] bg-accent/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-10">

        {/* Presenter & Registration Badge */}
        <div
          className={cn(
            "inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 rounded-full glass border border-slate-300 dark:border-purple-500/40 bg-white dark:bg-[#131024]/80 shadow-xl backdrop-blur-xl transition-all duration-700 hover:border-purple-400",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex items-center gap-3">
            {/* Recurse Icon */}
            <div className="w-8 h-8 relative flex items-center justify-center rounded-xl bg-slate-900 dark:bg-black/80 p-1 border border-purple-400/50 shadow-sm">
              <Image
                src="/images/recurse.png"
                alt="Recurse Logo"
                width={26}
                height={26}
                className="object-contain filter drop-shadow-[0_0_6px_rgba(167,139,250,0.9)]"
              />
            </div>
            {/* KMIT Icon */}
            <div className="h-8 w-12 relative flex items-center justify-center rounded-xl bg-white p-1 border border-slate-300 shadow-sm">
              <Image
                src="/images/kmit-logo.png"
                alt="KMIT Logo"
                width={40}
                height={26}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-bold text-slate-800 dark:text-white/90">
              Presented by <strong className="text-purple-700 dark:text-white font-extrabold tracking-wide">RECURSE</strong> × <strong className="text-slate-900 dark:text-white font-extrabold tracking-wide">KMIT</strong>
            </span>
          </div>
          <span className="hidden sm:inline text-slate-400 dark:text-white/30">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
            <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Registrations Open</span>
          </div>
        </div>

        {/* Main heading */}
        <div
          className={cn(
            "space-y-2 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="text-slate-900 dark:text-white">Code.</span>{" "}
            <span className="text-slate-400 dark:text-white/60">Create.</span>
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="text-slate-900 dark:text-white">Conquer.</span>
          </h1>
          <div className="pt-3">
            <span
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(155,126,248,0.4)]"
              style={{
                background: "linear-gradient(135deg, #7a5fd2 0%, #c084fc 40%, #6366f1 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient 6s linear infinite",
              }}
            >
              Codenovate 3.0
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={cn(
            "max-w-4xl mx-auto text-lg sm:text-xl text-slate-700 dark:text-white/70 leading-relaxed transition-all duration-700 font-medium",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          Not a coding genius? No sweat. Dive in, level up, and make epic connections.
          A 24-hour hackathon at <span className="text-slate-900 dark:text-white font-bold">KMIT</span> — your chance to turn wild ideas into real-world impact.
        </p>

        {/* Sponsors */}
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-6 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "350ms" }}
        >
          <div className="flex items-center gap-3 glass px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-md">
            <Image src="/images/tp.png" alt="Tutorials Point" width={28} height={28} className="object-contain" />
            <div className="text-left">
              <div className="text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-wide font-medium">Tutored by</div>
              <div className="text-xs text-slate-900 dark:text-white/90 font-semibold">Tutorials Point</div>
            </div>
          </div>
          <div className="flex items-center gap-3 glass px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-md">
            <Image src="/images/ST.png" alt="Student Tribe" width={28} height={28} className="object-contain" />
            <div className="text-left">
              <div className="text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-wide font-medium">Partner</div>
              <div className="text-xs text-slate-900 dark:text-white/90 font-semibold">Student Tribe</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <Link
            href="https://unstop.com/o/TQusDqL"
            target="_blank"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent !text-white font-semibold text-base shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Register Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/ps"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass text-slate-800 dark:text-white/80 hover:text-purple-700 dark:hover:text-white font-semibold text-base border border-slate-300 dark:border-white/15 hover:border-primary/50 transition-all duration-300 shadow-lg"
          >
            View Problem Statements
          </Link>
        </div>

        {/* Big Organized & Hosted By Tile */}
        <div
          className={cn(
            "pt-8 flex flex-col items-center justify-center gap-4 transition-all duration-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <span className="text-xs font-black text-purple-700 dark:text-purple-300/80 uppercase tracking-[0.3em]">
            Organized & Hosted By
          </span>
          <div className="flex flex-wrap items-center justify-center gap-5 px-8 py-5 rounded-3xl glass border-2 border-purple-300 dark:border-purple-500/40 bg-white dark:bg-purple-950/40 backdrop-blur-2xl shadow-2xl hover:border-purple-400 transition-all duration-300">
            {/* Recurse Logo Card */}
            <div className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-[#131024] border border-purple-400/40 shadow-xl hover:scale-105 transition-transform">
              <Image
                src="/images/recurse.png"
                alt="Recurse Logo"
                width={36}
                height={36}
                className="object-contain filter drop-shadow-[0_0_8px_rgba(167,139,250,0.9)]"
              />
              <span className="font-black text-base tracking-wider text-white whitespace-nowrap">RECURSE</span>
            </div>

            <span className="text-slate-400 dark:text-purple-400 font-extrabold text-xl">×</span>

            {/* KMIT Logo Card */}
            <div className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-xl hover:scale-105 transition-transform">
              <Image
                src="/images/kmit-logo.png"
                alt="KMIT Logo"
                width={54}
                height={36}
                className="object-contain"
              />
              <span className="font-black text-base tracking-wider text-slate-900">KMIT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 dark:text-white/20">
        <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
