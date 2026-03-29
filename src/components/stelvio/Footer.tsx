export default function Footer() {
  return (
    <footer id="contact" className="bg-[#EFEFEF] py-24 md:py-32 px-6 md:px-12 rounded-t-[3rem] text-[#111]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <p className="uppercase tracking-widest text-xs font-bold mb-8 opacity-60">Ready to start?</p>
        
        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif leading-none tracking-tighter mb-16 cursor-pointer hover:opacity-70 transition-opacity">
          Let's talk.
        </h2>
        
        <div className="flex gap-8 text-sm font-medium opacity-80">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fardindm69@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Gmail</a>
          <a href="https://github.com/iamfardinn" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
