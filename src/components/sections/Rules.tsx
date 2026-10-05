"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Users, ShieldCheck, GitBranch, Trophy, Gavel, Wifi, Cpu, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const rules = [
  {
    icon: Users,
    title: "Team Formation",
    desc: "Form a team of 3–4 from eligible B.Tech/B.E./B.Sc programs. Cross-college and cross-year teams welcome. One designated team leader required.",
    span: "lg:col-span-2",
    accent: "from-violet-500/20 to-purple-500/20",
    border: "hover:border-violet-500/40",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=800&auto=format",
  },
  {
    icon: ShieldCheck,
    title: "Code of Conduct",
    desc: "Respect all participants, sponsors & organizers. Plagiarism or rule violations = immediate disqualification.",
    span: "lg:col-span-1",
    accent: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-500/40",
  },
  {
    icon: GitBranch,
    title: "Project Submission",
    desc: "Submit via GitHub before the deadline. Must align with selected problem statement and include proper documentation.",
    span: "lg:col-span-3",
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "hover:border-emerald-500/40",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format",
  },
  {
    icon: Trophy,
    title: "Prize Pool",
    desc: "Winners take from a prize pool of ₹75,000 and many more exclusive rewards and opportunities.",
    span: "lg:col-span-1",
    accent: "from-yellow-500/20 to-orange-500/20",
    border: "hover:border-yellow-500/40",
  },
  {
    icon: Gavel,
    title: "Judging Criteria",
    desc: "Evaluated on creativity, technical implementation, scalability, and final presentation quality. Be ready to defend your ideas.",
    span: "lg:col-span-2",
    accent: "from-rose-500/20 to-pink-500/20",
    border: "hover:border-rose-500/40",
    image: "https://images.unsplash.com/photo-1640163561346-7778a2edf353?q=80&w=800&auto=format",
  },
  {
    icon: Calendar,
    title: "Event Schedule",
    desc: "Round 1 (Idea Submission): Nov 18–25, 2026\nFinale Hackathon: Nov 30, 2026 at KMIT",
    span: "lg:col-span-2",
    accent: "from-indigo-500/20 to-violet-500/20",
    border: "hover:border-indigo-500/40",
  },
  {
    icon: Wifi,
    title: "Facilities",
    desc: "Food & refreshments provided. Bring your own laptop, chargers & internet. Security present throughout.",
    span: "lg:col-span-1",
    accent: "from-sky-500/20 to-blue-500/20",
    border: "hover:border-sky-500/40",
  },
];

function RuleCard({ rule, index }: { rule: typeof rules[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const IconComp = rule.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "relative glass-card rounded-2xl p-6 overflow-hidden group transition-all duration-500 border border-slate-200 dark:border-white/20 shadow-xl hover:border-primary",
        rule.span, rule.border,
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "duration-700"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Background gradient blob */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl", rule.accent)} />

      {/* Background image if exists */}
      {rule.image && (
        <div className="absolute right-0 bottom-0 w-40 h-full opacity-20 dark:opacity-10 group-hover:opacity-30 transition-opacity">
          <Image src={rule.image} alt={rule.title} fill className="object-cover rounded-r-2xl" sizes="160px" />
        </div>
      )}

      <div className="relative z-10 space-y-3">
        <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-400/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
          <IconComp size={22} className="text-purple-700 dark:text-primary-light" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{rule.title}</h3>
        <p className="text-sm text-slate-700 dark:text-white/70 leading-relaxed whitespace-pre-line font-medium">{rule.desc}</p>
      </div>
    </div>
  );
}

export default function Rules() {
  return (
    <section id="rules" className="relative py-28 bg-slate-50 dark:bg-[#06060c] transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_80%_50%,rgba(122,95,210,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-semibold text-purple-700 dark:text-primary-light tracking-[0.25em] uppercase">Guidelines</p>
          <h2 className="section-heading text-slate-900 dark:text-white">Rules & Information</h2>
          <p className="text-slate-700 dark:text-white/60 max-w-md mx-auto text-sm font-medium">Everything you need to know before diving in.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {rules.map((r, i) => (
            <RuleCard key={i} rule={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
