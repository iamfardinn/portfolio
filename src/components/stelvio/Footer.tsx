export default function Footer() {
  return (
    <footer id="contact" className="bg-[#EFEFEF] py-24 md:py-32 px-6 md:px-12 rounded-t-[3rem] text-[#111]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <p className="uppercase tracking-widest text-xs font-bold mb-8 opacity-60">Ready to start?</p>
        
        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif leading-none tracking-tighter mb-16 cursor-pointer hover:opacity-70 transition-opacity">
          Let's talk.
        </h2>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm md:text-base font-medium opacity-80 gap-6 md:gap-0 mt-8">
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
          
          <p>© {new Date().getFullYear()} Stelvio Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
