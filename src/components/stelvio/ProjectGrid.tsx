import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projectCategories, projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

type FilterId = (typeof projectCategories)[number]["id"];

export default function ProjectGrid() {
  const [active, setActive] = useState<FilterId>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section
      id="work"
      className="relative bg-[#070707] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Featured<br />
              <span className="italic text-[#cfcfcf]">projects.</span>
            </>
          }
          description="Production-ready systems, AI integrations, spatial analytics, and IoT research — audited directly from my GitHub."
        />

        {/* Filter pills */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="flex flex-wrap gap-2 mb-12 md:mb-16"
        >
          {projectCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-4 py-2 text-xs md:text-sm font-mono uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-[#0a0a0a] bg-white"
                    : "text-[#9a9a9a] bg-white/[0.02] border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-[#7a7a7a] font-mono text-sm py-16">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
