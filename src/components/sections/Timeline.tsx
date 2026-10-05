"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const events = [
  {
    date: "Nov 16, 2026",
    title: "Registrations Begin",
    type: "Online",
    color: "from-violet-600 to-purple-600",
    dot: "bg-violet-500",
    images: [
      "https://images.unsplash.com/photo-1721781799808-f15b4d58948e?q=80&w=800&auto=format",
      "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=800&auto=format",
    ],
  },
  {
    date: "Nov 18 – 25, 2026",
    title: "Idea Submission",
    subtitle: "Round 1",
    type: "Online",
    color: "from-blue-600 to-cyan-600",
    dot: "bg-blue-500",
    images: [
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format",
      "https://images.unsplash.com/photo-1595450547833-95af46d7c43a?q=80&w=800&auto=format",
    ],
  },
  {
    date: "Nov 26, 2026",
    title: "Results Announced",
    subtitle: "Idea Evaluations",
    type: "Online",
    color: "from-emerald-600 to-teal-600",
    dot: "bg-emerald-500",
    images: [
      "https://images.unsplash.com/photo-1514820720301-4c4790309f46?q=80&w=800&auto=format",
      "https://images.unsplash.com/photo-1716715643056-31b9497e8930?q=80&w=800&auto=format",
    ],
  },
  {
    date: "Nov 30, 2026",
    title: "Final Hackathon",
    subtitle: "The Grand Finale",
    type: "Offline · KMIT",
    color: "from-orange-600 to-rose-600",
    dot: "bg-orange-500",
    images: [
      "https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=800&auto=format",
      "https://images.unsplash.com/photo-1611647832580-377268dba7cb?q=80&w=800&auto=format",
    ],
  },
];

function TimelineItem({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isRight = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={cn(
        "relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-center transition-all duration-700 text-left",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Content */}
      <div className={cn(isRight ? "lg:order-2" : "")}>
        <div
          className={cn(
            "glass-card rounded-2xl p-6 space-y-4 hover:border-primary transition-all duration-300 group shadow-2xl relative overflow-hidden text-left",
            isRight ? "lg:ml-8" : "lg:mr-8"
          )}
        >
          {/* Subtle top card glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-3 flex-wrap justify-between">
            <span className={cn("px-3.5 py-1 rounded-full text-xs font-black !text-white shadow-md bg-gradient-to-r", event.color)}>
              {event.type}
            </span>
            <span className="text-xs font-mono font-bold text-purple-900 dark:text-purple-200 bg-purple-100 dark:bg-purple-950/80 px-3 py-1 rounded-lg border border-purple-300 dark:border-purple-400/40 shadow-sm">{event.date}</span>
          </div>
          <div>
            {event.subtitle && (
              <p className="text-xs text-purple-700 dark:text-purple-300 font-bold uppercase tracking-wider mb-1">{event.subtitle}</p>
            )}
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-primary-light transition-colors">{event.title}</h3>
          </div>
          {/* Thumbnail row */}
          <div className="flex gap-4 pt-3 flex-wrap">
            {event.images.map((src, i) => (
              <div key={i} className="relative h-24 w-36 sm:w-44 rounded-xl overflow-hidden flex-shrink-0 border border-slate-300 dark:border-white/15 shadow-md">
                <Image
                  src={src}
                  alt={event.title}
                  fill
                  className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  sizes="176px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <div className={cn("w-5 h-5 rounded-full ring-4 ring-slate-100 dark:ring-[#06060c] shadow-xl", event.dot, "shadow-current")} />
      </div>

      {/* Spacer for alternating layout */}
      <div className={cn("hidden lg:block", isRight ? "lg:order-1" : "")} />
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 bg-slate-50 dark:bg-[#06060c] transition-colors">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(122,95,210,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-20 space-y-3">
          <p className="text-xs font-semibold text-purple-700 dark:text-primary-light tracking-[0.25em] uppercase">Schedule</p>
          <h2 className="section-heading text-slate-900 dark:text-white">Event Timeline</h2>
          <p className="text-slate-600 dark:text-white/60 max-w-md mx-auto text-sm font-medium">
            Four milestones. One epic hackathon journey.
          </p>
        </div>

        {/* Vertical line */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-400 dark:via-primary/50 to-transparent" />

          <div className="space-y-12">
            {events.map((ev, i) => (
              <TimelineItem key={i} event={ev} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
