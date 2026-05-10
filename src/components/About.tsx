import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextBlockAnimation } from './ui/text-block-animation';
import profileImg from '../assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Profile Card ────────────────────────────────────────── */
const ProfileCard: React.FC = () => {
  const cardRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle float effect on the entire card
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        y: -10, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col select-none w-full max-w-[280px] md:max-w-[380px]"
    >
      <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
        <img 
          src={profileImg} 
          alt="Fahim Abrar" 
          className="w-full h-full object-cover object-bottom drop-shadow-2xl scale-[1.15] origin-bottom"
        />
      </div>
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
    <section className="relative bg-[#070707] py-24 px-4 md:px-12 lg:px-24 text-[#EFEFEF] overflow-hidden" id="about" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto">
        <TextBlockAnimation className="text-5xl md:text-7xl font-serif tracking-tight leading-[1] mb-12">
          {"The\nPhilosophy."}
        </TextBlockAnimation>

        <div className="about-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
        <ProfileCard />

        <div className="about-text flex flex-col justify-start">
          <TextBlockAnimation className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
            {"B.Sc. in Computer Science\nAmerican International University — Bangladesh"}
          </TextBlockAnimation>

          <TextBlockAnimation className="text-[#888] mb-6 leading-relaxed" delay={0.2}>
            {"I am passionate about building scalable, production-ready systems and integrating modern AI into practical applications. I focus heavily on clean architecture, type safety, and seamless user experiences."}
          </TextBlockAnimation>

          <TextBlockAnimation className="text-[#888] leading-relaxed" delay={0.4}>
            {"My core philosophy? Writing code that reads like a well-structured story and designing systems that scale predictably under pressure. Currently, I'm exploring distributed systems, LLM streaming pipelines, and microservice architectures."}
          </TextBlockAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
