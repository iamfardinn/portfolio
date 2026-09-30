import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function Education() {
  return (
    <section
      id="education"
      className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic<br />
              <span className="italic text-[#cfcfcf]">foundation.</span>
            </>
          }
          description="University-level coursework and academic engagement."
        />

        <div className="grid grid-cols-1 gap-6">
          {education.map((e, idx) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <GlowCard className="h-full">
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#ff3c00]/40 bg-[#ff3c00]/10 text-[#ff7a4a]">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-serif text-white tracking-tight leading-tight">
                          {e.degree}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider border ${
                            e.status === "Ongoing"
                              ? "border-[#ff3c00]/40 text-[#ff7a4a] bg-[#ff3c00]/10"
                              : "border-white/15 text-[#9a9a9a] bg-white/[0.04]"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              e.status === "Ongoing"
                                ? "bg-[#ff3c00] animate-pulse"
                                : "bg-white/40"
                            }`}
                          />
                          {e.status}
                        </span>
                      </div>
                      <p className="text-base text-[#cfcfcf] mb-1">
                        {e.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7a7a7a] mb-4">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3 w-3" />
                          {e.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {e.start} — {e.end}
                        </span>
                      </div>
                      {e.description && (
                        <p className="text-sm text-[#9a9a9a] leading-relaxed mb-4">
                          {e.description}
                        </p>
                      )}
                      {e.highlights && e.highlights.length > 0 && (
                        <ul className="space-y-2 pt-4 border-t border-white/[0.06]">
                          {e.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex gap-3 text-sm text-[#cfcfcf] leading-relaxed"
                            >
                              <span className="mt-1.5 inline-block h-1 w-3 bg-[#ff3c00]/70 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}