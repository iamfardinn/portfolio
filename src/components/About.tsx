import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextBlockAnimation } from './ui/text-block-animation';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="section container mx-auto px-6 py-24 text-[#EFEFEF]" id="about" ref={containerRef}>
      <TextBlockAnimation className="text-4xl md:text-6xl font-serif mb-12">
        {"The\nPhilosophy."}
      </TextBlockAnimation>
      
      <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-12" style={{ marginTop: '3rem' }}>
        <div className="about-image flex items-center justify-center bg-[#222] rounded-2xl p-12">
          <div className="about-image-inner">
            <span style={{ fontSize: '4rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }} className="text-white">FA</span>
          </div>
        </div>
        
        <div className="about-text glass-panel flex flex-col justify-center" style={{ padding: '0rem' }}>
          <TextBlockAnimation className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
            {"Current CS Student at\nAmerican International University Bangladesh (AIUB)"}
          </TextBlockAnimation>

          <TextBlockAnimation className="text-[#888] mb-6 leading-relaxed" delay={0.2}>
            {"I am passionate about building scalable, production-ready systems and integrating modern AI into practical applications. I focus heavily on clean architecture, type safety, and seamless user experiences."}
          </TextBlockAnimation>

          <TextBlockAnimation className="text-[#888] leading-relaxed" delay={0.4}>
            {"My core philosophy? Writing code that reads like a well-structured story and designing systems that scale predictably under pressure. Currently, I'm exploring distributed systems, LLM streaming pipelines, and microservice architectures."}
          </TextBlockAnimation>
          
          <div className="tech-stack mt-12">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#555] mb-4">Familiar With</h4>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React 19", "Express", "Node.js", "PostgreSQL", "Firebase", "Stripe", "Python", "Java", "C++"].map(skill => (
                <span key={skill} className="px-4 py-2 bg-[#222] text-[#EFEFEF] rounded-full text-xs font-mono">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
