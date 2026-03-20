export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 mix-blend-difference text-white">
      <div className="text-xl md:text-2xl font-serif tracking-tight cursor-pointer">
        {/* Stelvio. */}
      </div>
      <nav className="flex gap-6 md:gap-10 text-sm md:text-base font-medium">
        <a href="#work" className="hover:opacity-60 transition-opacity uppercase tracking-widest text-xs">Work</a>
        <a href="#about" className="hover:opacity-60 transition-opacity uppercase tracking-widest text-xs">About</a>
      </nav>
    </header>
  )
}
