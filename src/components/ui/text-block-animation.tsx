"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextBlockAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function TextBlockAnimation({
  children,
  className,
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use GSAP's matchMedia if needed, or simply run animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // adjust as needed
      }
    });

    const lines = el.querySelectorAll(".text-line");
    
    tl.fromTo(lines, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration, stagger, ease: "power3.out", delay }
    );

    return () => {
      tl.kill();
    };
  }, [delay, duration, stagger]);

  // Wrap strings with block animation markup
  const renderChildren = () => {
    if (typeof children === 'string') {
        return children.split('\n').map((line, i) => (
            <div key={i} className="overflow-hidden">
                <div className="text-line">{line}</div>
            </div>
        ));
    }
    return children;
  };

  return (
    <div ref={containerRef} className={cn("text-left", className)}>
      {renderChildren()}
    </div>
  );
}

export default TextBlockAnimation;
