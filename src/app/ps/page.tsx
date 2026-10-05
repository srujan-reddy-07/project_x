"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  {
    id: 1, title: "Digital Currency for College Transactions",
    desc: "Create a secure digital platform where students can convert real money into campus-specific points for dining, bookstores, events, and more — fostering a cashless, connected campus ecosystem.",
    tag: "FinTech",
    color: "from-violet-600 to-purple-700",
    image: "https://images.unsplash.com/photo-1660139099083-03e0777ac6a7?q=80&w=800&auto=format",
  },
  {
    id: 2, title: "Cognitive Learning Platform for Personalized Education",
    desc: "An AI-driven platform that adapts to each learner's needs using analytics and cognitive science — providing tailored content, real-time feedback, and insights for educators.",
    tag: "EdTech / AI",
    color: "from-blue-600 to-cyan-700",
    image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=800&auto=format",
  },
  {
    id: 3, title: "Advanced Food Redistribution Network",
    desc: "Leverage crowdsourced data to connect food suppliers with food banks and non-profits in real time — preventing urban food waste and feeding communities in need.",
    tag: "Social Impact",
    color: "from-emerald-600 to-teal-700",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format",
  },
  {
    id: 4, title: "Anonymous Mental Health Support Platform",
    desc: "A student-centered anonymous platform offering confidential mental health support, preventive strategies, and resources tailored to academic stress and personal challenges.",
    tag: "HealthTech",
    color: "from-rose-600 to-pink-700",
    image: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=800&auto=format",
  },
  {
    id: 5, title: "Digital Time Capsule",
    desc: "An intelligent platform to compile photos, text, audio, and videos into cohesive life narratives — organized by meaningful chapters and preserved for future generations.",
    tag: "Consumer",
    color: "from-amber-600 to-orange-700",
    image: "https://images.unsplash.com/photo-1607827447604-d9a8c439186e?q=80&w=800&auto=format",
  },
  {
    id: 6, title: "Balance Your Bucks",
    desc: "A smart finance tool that manages essential payments effortlessly while intelligently curbing impulse spending — without restricting overall financial freedom.",
    tag: "FinTech",
    color: "from-lime-600 to-green-700",
    image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=800&auto=format",
  },
  {
    id: 7, title: "Automated API Documentation Generator",
    desc: "A tool that automatically tracks backend changes and generates up-to-date API documentation — ensuring accuracy, saving time, and improving team collaboration.",
    tag: "DevTools",
    color: "from-sky-600 to-blue-700",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format",
  },
  {
    id: 8, title: "Ultra-Secure Chat with Asymmetric Encryption",
    desc: "A privacy-first chat platform using asymmetric encryption for end-to-end security, digital signatures for authenticity, and decentralized architecture — with seamless multi-device access.",
    tag: "Cybersecurity",
    color: "from-indigo-600 to-violet-700",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format",
  },
  {
    id: 9, title: "Open Innovation",
    desc: "Bring your own problem statement and solution! Clearly explain the problem and its significance in your idea submission PPT. The sky is the limit.",
    tag: "Open Track",
    color: "from-fuchsia-600 to-pink-700",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format",
  },
];

function PSCard({ ps, index }: { ps: typeof problems[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className={cn(
        "glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-slate-950/80 shadow-md transition-all duration-500 group cursor-default",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${Math.min(index * 80, 500)}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={ps.image}
          alt={ps.title}
          fill
          className={cn("object-cover transition-transform duration-700", hovered ? "scale-110" : "scale-100")}
          sizes="(max-width:768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 dark:from-[#0a0a12] via-slate-900/30 dark:via-[#0a0a12]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br opacity-30 rounded-t-2xl" style={{ background: `linear-gradient(135deg, ${ps.color.split(" ")[1]}, transparent)` }} />
        {/* Number badge */}
        <div className={cn("absolute top-4 left-4 w-9 h-9 rounded-xl flex items-center justify-center !text-white text-sm font-bold bg-gradient-to-br shadow-md", ps.color)}>
          {ps.id}
        </div>
        {/* Tag */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs !text-white font-medium border border-white/20 shadow-sm">
          {ps.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-purple-600 dark:group-hover:text-primary-light transition-colors">
          {ps.title}
        </h3>
        <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed line-clamp-3 font-medium">{ps.desc}</p>
        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-white/40 group-hover:text-purple-600 dark:group-hover:text-primary-light transition-colors pt-1 font-semibold">
          <span>Read problem statement</span>
          <ChevronRight size={12} className={cn("transition-transform", hovered ? "translate-x-1" : "")} />
        </div>
      </div>
    </div>
  );
}

export default function PSPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#06060c] transition-colors pt-36 pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_10%,rgba(122,95,210,0.1),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-white/70 hover:text-purple-700 dark:hover:text-white mb-10 transition-colors group font-semibold">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold text-purple-700 dark:text-primary-light tracking-[0.25em] uppercase">Codenovate 3.0</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold section-heading text-slate-900 dark:text-white">
            Problem Statements
          </h1>
          <p className="text-slate-600 dark:text-white/70 max-w-xl mx-auto text-sm font-medium">
            9 real-world problems. 24 hours to solve them. Choose your challenge and make an impact.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/downloads/ppt-template.pptx"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-slate-300 dark:border-white/15 text-sm text-slate-800 dark:text-white/80 hover:text-purple-700 dark:hover:text-white transition-all font-semibold shadow-md"
            >
              <Download size={15} />
              PPT Template
            </a>
            <Link
              href="https://unstop.com/o/TQusDqL"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent !text-white text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
            >
              <ExternalLink size={15} />
              Register on Unstop
            </Link>
            <a
              href="/downloads/problem-statements.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-slate-300 dark:border-white/15 text-sm text-slate-800 dark:text-white/80 hover:text-purple-700 dark:hover:text-white transition-all font-semibold shadow-md"
            >
              <Download size={15} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <PSCard key={p.id} ps={p} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
