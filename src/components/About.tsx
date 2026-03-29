import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextBlockAnimation } from './ui/text-block-animation';

gsap.registerPlugin(ScrollTrigger);

/* ─── FA Monogram ─────────────────────────────────────────── */
const FAMonogram: React.FC = () => {
  const cardRef   = useRef<HTMLDivElement>(null);
  const blob1Ref  = useRef<HTMLDivElement>(null);
  const blob2Ref  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Blobs — slow drift */
      gsap.to(blob1Ref.current, {
        x: 30, y: -20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
      gsap.to(blob2Ref.current, {
        x: -25, y: 25, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5,
      });



    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col items-center justify-center rounded-2xl overflow-hidden select-none"
      style={{
        minHeight: '340px',
        background: '#0c0c0c',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Grain overlay via SVG */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="fa-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.055,
        filter: 'url(#fa-grain)', borderRadius: 'inherit', pointerEvents: 'none',
      }} />

      {/* Soft aurora blobs */}
      <div ref={blob1Ref} style={{
        position: 'absolute',
        width: '260px', height: '260px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,60,0,0.22) 0%, transparent 70%)',
        top: '-40px', left: '-40px',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div ref={blob2Ref} style={{
        position: 'absolute',
        width: '220px', height: '220px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90,142,166,0.2) 0%, transparent 70%)',
        bottom: '-30px', right: '-30px',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />


    </div>
  );
};

/* ─── About Section ────────────────────────────────────────── */
export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <section className="section container mx-auto px-6 py-24 text-[#EFEFEF]" id="about" ref={containerRef}>
      <TextBlockAnimation className="text-4xl md:text-6xl font-serif mb-12">
        {"The\nPhilosophy."}
      </TextBlockAnimation>

      <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-12" style={{ marginTop: '3rem' }}>
        <FAMonogram />

        <div className="about-text flex flex-col justify-center">
          <TextBlockAnimation className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
            {"B.Sc. in Computer Science\nAmerican International University — Bangladesh"}
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
