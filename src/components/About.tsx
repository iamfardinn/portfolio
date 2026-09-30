import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../assets/profile.png";
import { profile, skillGroups } from "@/data/portfolio";
import { Badge } from "./ui/Badge";

gsap.registerPlugin(ScrollTrigger);

/* ─── Profile Card ────────────────────────────────────────── */
const ProfileCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Single entrance animation, no infinite loop.
      gsap.fromTo(
        cardRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
        },
      );
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
          alt={profile.name}
          className="w-full h-full object-cover object-bottom drop-shadow-2xl scale-[1.15] origin-bottom"
        />
      </div>
      {/* Decorative dot grid behind card */}
      <div
        aria-hidden
        className="absolute -z-10 -bottom-6 -right-6 h-32 w-32 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,60,0,0.4) 1px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />
    </div>
  );
};

/* ─── About Section ────────────────────────────────────────── */
export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      },
    );
  }, []);

  return (
    <section
      className="relative bg-[#070707] py-24 px-4 md:px-12 lg:px-24 text-[#EFEFEF] overflow-hidden"
      id="about"
      ref={containerRef}
    >
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#ff3c00] mb-4 flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-[#ff3c00]/60" />
          About
        </p>
        <h2 className="text-5xl md:text-7xl font-serif tracking-tight leading-[1] mb-12 text-white">
          The <span className="italic text-[#cfcfcf]">Philosophy.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mt-12 md:mt-20">
          <ProfileCard />

          <div className="flex flex-col justify-start">
            <h3 className="text-xl md:text-2xl font-medium mb-6 leading-relaxed text-white">
              B.Sc. in Computer Science
              <br />
              American International University — Bangladesh
            </h3>

            <p className="text-[#9a9a9a] mb-6 leading-relaxed">
              I am passionate about building scalable, production-ready systems
              and integrating modern AI into practical applications. I focus
              heavily on clean architecture, type safety, and seamless user
              experiences.
            </p>

            <p className="text-[#9a9a9a] mb-10 leading-relaxed">
              My core philosophy? Writing code that reads like a well-structured
              story and designing systems that scale predictably under pressure.
              Currently, I'm exploring distributed systems, LLM streaming
              pipelines, and microservice architectures.
            </p>

            {/* Skills & Stack grid */}
            <div className="space-y-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#7a7a7a]">
                Core Stack
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-[11px] uppercase tracking-widest text-white mb-2">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((item) => (
                        <Badge key={item} variant="default" dense>
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};