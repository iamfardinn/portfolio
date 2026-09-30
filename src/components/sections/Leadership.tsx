import { motion } from "framer-motion";
import { leadership } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Leadership & Achievements"
          title={
            <>
              Beyond the <span className="italic text-[#cfcfcf]">code.</span>
            </>
          }
          description="Coordinating competitive gaming and esports infrastructure at university and national-level festivals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((l, idx) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <GlowCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ff3c00]/40 bg-[#ff3c00]/10 text-[#ff7a4a] font-mono text-xs">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a]">
                    {l.period || "Recent"}
                  </p>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-tight leading-tight mb-2">
                  {l.role}
                </h3>
                <p className="text-sm text-[#9a9a9a] mb-5">{l.org}</p>
                <ul className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {l.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-[#cfcfcf] leading-relaxed"
                    >
                      <span className="mt-2 inline-block h-1 w-3 bg-[#ff3c00]/70 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}