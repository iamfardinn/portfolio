import { useState } from "react";
import { Copy, Check, Mail, Github, Linkedin, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // graceful fallback: open mail client
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.06]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,60,0,0.08),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#ff3c00] mb-6 flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-[#ff3c00]/60" />
          Contact
        </p>

        <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-[0.9] text-white mb-10">
          Let's build
          <br />
          <span className="italic text-[#cfcfcf]">something real.</span>
        </h2>

        <p className="text-[#9a9a9a] max-w-xl leading-relaxed mb-12">
          Whether it's a hackathon weekend, a freelance full-stack build, or an
          AI integration — my inbox is open.
        </p>

        {/* Email + actions */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">
          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-sm text-white hover:border-white/40 hover:bg-white/[0.06] transition-all"
          >
            <Mail className="h-4 w-4 text-[#ff7a4a]" />
            <span className="font-mono">{profile.email}</span>
            {copied ? (
              <Check className="h-4 w-4 text-[#4ade80]" />
            ) : (
              <Copy className="h-4 w-4 text-[#7a7a7a] group-hover:text-white transition-colors" />
            )}
            <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-[#7a7a7a] group-hover:text-white">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff3c00] px-5 py-3 text-sm font-medium text-white hover:bg-[#ff7a4a] transition-colors"
          >
            Open mail →
          </a>
        </div>

        {/* Social links + meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/[0.06]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a] mb-3">
              Email
            </p>
            <a
              href={profile.socials.gmail}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#ff7a4a] transition-colors text-sm"
            >
              <Mail className="h-4 w-4" />
              Gmail
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a] mb-3">
              Code
            </p>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#ff7a4a] transition-colors text-sm"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a] mb-3">
              Network
            </p>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-[#ff7a4a] transition-colors text-sm"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a] mb-3">
              Resume
            </p>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 text-white hover:text-[#ff7a4a] transition-colors text-sm"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a]">
          <p>
            © {new Date().getFullYear()} · {profile.name} · {profile.location}
          </p>
          <p>Built with React, Vite & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
