import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-[#F3F3F3] px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      
      <div className="relative z-10 text-left w-full max-w-5xl">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter text-[#111]"
        >
          Visual<br/>
          <span className="italic opacity-80 pl-12 md:pl-24">Experiences</span>
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="mt-12 md:mt-24 flex justify-between items-end text-sm text-[#555] w-full mx-auto text-left"
        >
          <div className="max-w-xs">
            <p className="uppercase tracking-widest text-[10px] mb-2 font-bold">About</p>
            <p className="leading-relaxed">
              Award-winning digital design agency focusing on crafting immersive web experiences and brand identities.
            </p>
          </div>
          <div className="hidden md:block">
            <p className="uppercase tracking-widest text-[10px] mb-2 font-bold">Location</p>
            <p className="leading-relaxed">Milan, Italy</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
