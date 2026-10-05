"use client";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "How can I participate in Codenovate?", a: "Click the 'Register Now' button on this page or head to Unstop to sign up your team." },
  { q: "Is Codenovate open to all universities?", a: "Yes! Open to students in B.Tech/B.E./B.Sc programs across all engineering colleges in India (Batches 2025, 2026, 2027 & 2028)." },
  { q: "What should I bring to the event?", a: "Bring your own laptop, chargers, and any tools or software needed. Food & refreshments will be provided." },
  { q: "Is there a registration fee?", a: "Yes, there is a registration fee of ₹1,400 for Round 1 (Idea Submission Round)." },
  { q: "Is transportation available?", a: "No, transportation will not be provided. Participants must arrange their own travel." },
  { q: "Can I participate individually?", a: "No. Teams must have 2–4 members. Reach out to fellow participants or classmates to form a team." },
  { q: "What is the format for Idea Submission in Round 1?", a: "A PPT template is available on Unstop. The presentation must be limited to 6 slides." },
  { q: "Is the competition online or offline?", a: "Round 1 is online. The Finale is an offline event at KMIT, Hyderabad." },
  { q: "Are cross-college teams allowed?", a: "Absolutely! Inter-college teams are encouraged. Mix and match students from different colleges." },
  { q: "Are cross-year teams allowed?", a: "Yes, teams can include participants from different academic years." },
  { q: "What do I gain from Round 1?", a: "Post-Round 1 registration, participants get access to exclusive free Tutorials Point courses and other exciting perks." },
  { q: "Will internet be provided at the venue?", a: "No, internet will not be provided. Please bring your own mobile hotspot or data connection." },
  { q: "Will food be provided?", a: "Yes! Food and refreshments will be provided throughout the entire event." },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={cn(
        "glass-card rounded-xl overflow-hidden border border-slate-200 dark:border-white/20 transition-all duration-500 shadow-md",
        open ? "border-purple-500 dark:border-primary/60 shadow-purple-500/10" : "hover:border-slate-400 dark:hover:border-white/40",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="text-xs font-mono text-purple-700 dark:text-purple-300/60 font-bold w-6 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={cn(
            "text-sm sm:text-base font-semibold transition-colors",
            open ? "text-purple-700 dark:text-white" : "text-slate-800 dark:text-white/90 group-hover:text-purple-700 dark:group-hover:text-white"
          )}>
            {item.q}
          </span>
        </span>
        <div className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
          open ? "bg-primary !text-white" : "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white/60"
        )}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5 pl-14">
          <p className="text-sm text-slate-700 dark:text-white/70 leading-relaxed font-medium">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 bg-slate-50 dark:bg-[#06060c] transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(192,132,252,0.06),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-semibold text-purple-700 dark:text-primary-light tracking-[0.25em] uppercase">Got Questions?</p>
          <h2 className="section-heading text-slate-900 dark:text-white">Frequently Asked</h2>
          <p className="text-slate-600 dark:text-white/60 max-w-md mx-auto text-sm font-medium">Everything you need to know. If we missed something, reach out on Discord.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} item={f} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center glass-card rounded-2xl p-8 space-y-4">
          <p className="text-slate-700 dark:text-white/70 text-sm font-semibold">Still have questions?</p>
          <a
            href="https://discord.gg/nmymK9V43d"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/40 text-[#4752C4] dark:text-[#7289da] font-semibold text-sm hover:bg-[#5865F2]/30 transition-all shadow-md"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </section>
  );
}
