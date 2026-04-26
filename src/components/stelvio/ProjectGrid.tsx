import { motion } from "framer-motion";
import mediMindImg from "../../assets/medimind.png";
import fnaticImg from "../../assets/fnatic.png";
import deepworkImg from "../../assets/deepwork.png";
import saveitImg from "../../assets/saveit.png";

const projects = [
  {
    id: 1,
    title: "MediMind AI",
    category: "AI · Healthcare · Telemedicine",
    image: mediMindImg,
    year: "2025",
    link: "https://medimindai1.netlify.app/",
    github: "https://github.com/iamfardinn/MediMind-AI",
  },
  {
    id: 2,
    title: "Fnatic",
    category: "Gaming · Web Design · Frontend",
    image: fnaticImg,
    year: "2025",
    link: "https://fnatics-72c600.netlify.app",
    github: "https://github.com/iamfardinn/fnatic",
  },
  {
    id: 3,
    title: "DeepWork Timer",
    category: "Productivity · Desktop App · Real-time",
    image: deepworkImg,
    year: "2025",
    link: "#",
    github: "https://github.com/iamfardinn/DeepWork_Frontend",
  },
  {
    id: 4,
    title: "Save-it",
    category: "Desktop App · Tauri · Rust",
    image: saveitImg,
    year: "2025",
    link: "#",
    github: "https://github.com/iamfardinn/Save-it",
  },
];

export default function ProjectGrid() {
  return (
    <section id="work" className="bg-[#111] text-[#EFEFEF] py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <header className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif tracking-tighter leading-none mb-6 md:mb-0">
            Selected<br />Work
          </h2>
          <p className="max-w-md text-sm md:text-base text-[#888] font-mono leading-relaxed uppercase tracking-widest">
            A curated collection of projects — production-ready systems, AI integrations, and full-stack applications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="overflow-hidden bg-[#222] aspect-[4/5] relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover origin-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex justify-between items-start mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div>
                  <h3 className="text-xl md:text-3xl font-serif">{project.title}</h3>
                  <p className="text-[#888] mt-2 text-sm tracking-widest uppercase">{project.category}</p>
                  {(project.link !== '#' || project.github !== '#') && (
                    <div className="flex gap-4 mt-3">
                      {project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono tracking-widest uppercase text-white border-b border-white/30 hover:border-white transition-colors pb-0.5">Live ↗</a>
                      )}
                      {project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono tracking-widest uppercase text-[#888] border-b border-[#888]/30 hover:border-[#888] transition-colors pb-0.5">GitHub ↗</a>
                      )}
                    </div>
                  )}
                </div>
                <span className="font-mono text-sm text-[#888]">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
