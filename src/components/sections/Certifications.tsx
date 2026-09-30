import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-[#070707] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Credentials &<br />
              <span className="italic text-[#cfcfcf]">badges.</span>
            </>
          }
          description="Industry certifications, online courses, and credentialed badges."
        />

        {certifications.length === 0 ? (
          <p className="text-center text-[#7a7a7a] font-mono text-sm py-16">
            No certifications to show yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <GlowCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#ff3c00]/40 bg-[#ff3c00]/10 text-[#ff7a4a]">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-serif text-white tracking-tight leading-tight mb-1">
                        {c.title}
                      </h3>
                      <p className="text-sm text-[#9a9a9a] mb-1">{c.issuer}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7a7a7a] mb-3">
                        {c.year}
                      </p>
                      {c.description && (
                        <p className="text-sm text-[#cfcfcf] leading-relaxed mb-4">
                          {c.description}
                        </p>
                      )}
                      {c.url && (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
                        >
                          Verify <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}