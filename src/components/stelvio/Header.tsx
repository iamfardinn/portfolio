import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Work", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 md:py-8 text-white bg-[#0a0a0a]/40 backdrop-blur-md supports-[backdrop-filter]:bg-[#0a0a0a]/30">
      <a
        href="#top"
        className="font-serif text-xl md:text-2xl tracking-tight cursor-pointer"
        aria-label="Back to top"
      >
        {profile.name}.
      </a>
      <nav className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:opacity-60 transition-opacity uppercase tracking-widest"
          >
            {link.label}
          </a>
        ))}
        <a
          href={profile.cvUrl}
          download
          aria-label="Download CV"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-widest text-white hover:border-white hover:bg-white hover:text-[#0a0a0a] transition-colors duration-300"
        >
          <span aria-hidden>↓</span>
          <span>CV</span>
        </a>
      </nav>
    </header>
  );
}
