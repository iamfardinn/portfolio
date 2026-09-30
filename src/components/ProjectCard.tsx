import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

/**
 * ProjectCard
 * - Image placeholder at the top (16:10) with a graceful fallback gradient + monogram
 *   if `/assets/projects/<slug>.png` is missing.
 * - Category + year header row.
 * - Title, tagline, full README-derived description.
 * - Highlights + tech-stack badges.
 * - GitHub link + (optional) Live Demo link.
 *
 * Image is lazy-loaded and async-decoded; placeholder pulse stays cheap (opacity only).
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/assets/projects/${project.slug}.png`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d0d] hover:border-white/20 transition-colors duration-500"
    >
      {/* Image placeholder — 16:10 with a fallback gradient + monogram */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#0a0a0a]">
        {!imgError && (
          <img
            src={imageSrc}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            } group-hover:scale-[1.02] transition-transform duration-700`}
          />
        )}

        {/* Fallback layer: always rendered under the image, gradient + monogram */}
        <div
          aria-hidden
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            !imgError && imgLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Soft accent orb */}
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#ff3c00]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
          <div className="relative font-serif text-6xl md:text-7xl text-white/10 tracking-tighter">
            {project.title.charAt(0)}
          </div>
          <div className="absolute bottom-3 right-4 font-mono text-[9px] uppercase tracking-[0.3em] text-[#5a5a5a]">
            {project.slug}.png
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <Badge variant="muted">{project.category}</Badge>
          <span className="font-mono text-xs text-[#7a7a7a]">
            {project.year}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[#9a9a9a] mb-4">{project.tagline}</p>

        <p className="text-sm text-[#9a9a9a] leading-relaxed mb-5">
          {project.description}
        </p>

        <ul className="space-y-2 mb-6">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-3 text-sm text-[#cfcfcf] leading-relaxed"
            >
              <span className="mt-1.5 inline-block h-1 w-3 bg-[#ff3c00]/70 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06] mb-5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
            >
              Live Demo ↗
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#9a9a9a] border-b border-[#9a9a9a]/30 hover:border-[#9a9a9a] pb-0.5 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}