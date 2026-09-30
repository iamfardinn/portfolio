import { motion } from "framer-motion";
import { research } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";

const statusVariant = {
  "In Progress": "accent",
  Completed: "default",
  Published: "default",
  Draft: "muted",
} as const;

export function Research() {
  return (
    <section
      id="research"
      className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Research"
          title={
            <>
              Undergrad <span className="italic text-[#cfcfcf]">research.</span>
            </>
          }
          description="Academic work-in-progress at the intersection of embedded systems, environmental sensing, and South-Asian climate calibration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {research.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <GlowCard className="h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a]">
                      {item.affiliation}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a] mt-1">
                      {item.period}
                    </p>
                  </div>
                  <Badge variant={statusVariant[item.status]}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    {item.status}
                  </Badge>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-[#9a9a9a] leading-relaxed mb-6">
                  {item.summary}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm text-[#cfcfcf] leading-relaxed"
                    >
                      <span className="mt-1.5 inline-block h-1 w-3 bg-[#ff3c00]/70 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {item.stack.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 font-mono text-[10px] uppercase tracking-widest text-[#9a9a9a] border-b border-[#9a9a9a]/30 hover:border-[#9a9a9a] pb-0.5 transition-colors"
                  >
                    Read paper / Repo ↗
                  </a>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}