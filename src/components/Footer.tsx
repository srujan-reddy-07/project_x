import Image from "next/image";
import Link from "next/link";
import { Instagram, ExternalLink } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Rules", href: "/#rules" },
  { label: "Problem Statements", href: "/ps" },
  { label: "Live Timer", href: "/timer" },
  { label: "FAQ", href: "/#faq" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/recurse.official" },
  { icon: FaDiscord, label: "Discord", href: "https://discord.gg/nmymK9V43d" },
  { icon: ExternalLink, label: "Unstop", href: "https://unstop.com/o/TQusDqL" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#06060c] transition-colors">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 flex items-center justify-center p-1 rounded-xl bg-purple-900 dark:bg-purple-950 border border-purple-500/30">
                <Image
                  src="/codenovatewhite.png"
                  alt="Codenovate 3.0 Logo"
                  width={28}
                  height={28}
                  className="object-contain filter drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
                />
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>Code<span className="text-purple-700 dark:text-primary-light">novate</span></span>
                <span className="text-[10px] leading-none px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent !text-white font-black border border-white/20">
                  3.0
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-700 dark:text-white/70 leading-relaxed font-medium">
              A <Link href="https://www.instagram.com/recurse.official" target="_blank" className="text-purple-700 dark:text-primary-light font-bold hover:underline">Recurse</Link> initiative at KMIT. Where creativity meets technology.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white/80 uppercase tracking-wider">Quick Links</h3>
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="block text-sm text-slate-600 dark:text-white/60 hover:text-purple-700 dark:hover:text-white transition-colors font-medium">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white/80 uppercase tracking-wider">Connect</h3>
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/60 hover:text-purple-700 dark:hover:text-white transition-colors group font-medium"
              >
                <s.icon size={16} className="group-hover:text-purple-700 dark:group-hover:text-primary-light transition-colors" />
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 dark:text-white/60 font-semibold">
            © 2026 Codenovate 3.0 · Recurse × KMIT
          </p>
          {/* Big text */}
          <p className="text-xs text-slate-500 dark:text-white/40 font-extrabold tracking-widest uppercase">
            Code · Create · Conquer
          </p>
        </div>
      </div>
    </footer>
  );
}
