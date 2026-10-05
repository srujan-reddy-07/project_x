"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Rules", href: "/#rules" },
  { label: "Problem Statements", href: "/ps" },
  { label: "Live Timer", href: "/timer" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    
    // Check initial theme preference
    const saved = localStorage.getItem("theme");
    if (saved === "light" || (!saved && window.matchMedia("(prefers-color-scheme: light)").matches)) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 dark:bg-[#06060c]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.1] py-3 shadow-md dark:shadow-2xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center p-1.5 rounded-xl bg-purple-900 dark:bg-purple-950 border border-purple-500/40 group-hover:border-primary group-hover:scale-105 transition-all duration-300 shadow-md shadow-primary/20">
            <Image
              src="/codenovatewhite.png"
              alt="Codenovate 3.0 Logo"
              width={32}
              height={32}
              className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(167,139,250,0.9)]"
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white brand-title flex items-center gap-1.5">
            <span>Code<span className="text-purple-700 dark:text-primary-light">novate</span></span>
            <span className="text-[11px] leading-none px-2.5 py-0.5 rounded-full bg-gradient-to-r from-primary via-purple-500 to-accent !text-white font-black shadow-md shadow-primary/40 border border-white/20 tracking-wider">
              3.0
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-white/70 hover:text-purple-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.08] border border-slate-300 dark:border-white/15 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/15 transition-all shadow-sm"
          >
            {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          <Link
            href="https://unstop.com/o/TQusDqL"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary via-purple-600 to-accent !text-white text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.08] text-slate-700 dark:text-white/80"
          >
            {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          <button
            className="p-2 rounded-lg text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl glass-card p-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-white/70 hover:text-purple-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://unstop.com/o/TQusDqL"
            target="_blank"
            className="block mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-primary to-accent !text-white"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
