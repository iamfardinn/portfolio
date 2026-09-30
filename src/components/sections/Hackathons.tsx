import { motion } from "framer-motion";
import { hackathons } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";

export function Hackathons() {
  return (
    <section
      id="hackathons"
      className="relative bg-[#070707] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Hackathons & Competitions"
          title={
            <>
              Built under <span className="italic text-[#cfcfcf]">pressure.</span>
            </>
          }
          description="A timeline of competitive builds — LLM-assisted systems, energy optimization, and rapid-prototype utilities."
        />

        <div className="relative">
          {/* Vertical timeline rail (desktop) */}
          <div
            aria-hidden
            className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff3c00]/40 via-white/10 to-transparent"
          />

          <ol className="space-y-12">
            {hackathons.map((h, idx) => {
              const isRight = idx % 2 === 0;
              return (
                <motion.li
                  key={h.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Dot */}
                  <span className="absolute left-3 md:left-1/2 top-8 -translate-x-1/2 z-10 inline-block h-3 w-3 rounded-full bg-[#0a0a0a] border-2 border-[#ff3c00] shadow-[0_0_12px_rgba(255,60,0,0.6)]" />

                  <div
                    className={`pl-10 md:pl-0 ${
                      isRight ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <GlowCard>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Badge variant="accent">{h.achievement}</Badge>
                        {h.team && (
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a]">
                            {h.team}
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a] mb-2">
                        {h.event}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-3">
                        {h.name}
                      </h3>
                      <p className="text-sm md:text-base text-[#9a9a9a] leading-relaxed mb-5">
                        {h.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                        {h.stack.map((tech) => (
                          <Badge key={tech} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </GlowCard>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}