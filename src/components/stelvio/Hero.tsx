import React, { useEffect, useRef } from "react";
import heroBg from "../../assets/hero-bg.jpeg";
import { profile } from "@/data/portfolio";

/**
 * Full-viewport Halide hero scene.
 *
 * Layout:
 *   - 100vh `halide-body` with the 3D-rotated photo canvas + contour rings behind
 *   - `interface-grid` overlay sits in front with all the chrome:
 *       - top-left: `~ FA` mark
 *       - top-right: [ WORK ] [ ABOUT ] nav + STATUS / LATENCY mono block
 *       - center-left: FAHIM (white) / ABRAR (accent orange) wordmark
 *       - bottom-left: [ FULL STACK ] / SYSTEM ARCHITECTURE & UI/UX
 *       - bottom-right: social circles + 9+ PROJECTS counter
 *
 * Performance:
 *   - mousemove is rAF-coalesced (one transform write per frame max)
 *   - mousemove + parallax disabled under prefers-reduced-motion
 *   - `will-change: transform` is only applied while the canvas is alive, then torn down
 */
const HalideLanding: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);
  const rafScheduled = useRef(false);
  const targetX = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const layers = layersRef.current.filter(Boolean);

    const render = () => {
      rafScheduled.current = false;
      const x = targetX.current;
      const y = targetY.current;

      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      layers.forEach((layer, index) => {
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (reduceMotion) return;
      targetX.current = (window.innerWidth / 2 - e.pageX) / 25;
      targetY.current = (window.innerHeight / 2 - e.pageY) / 25;
      if (!rafScheduled.current) {
        rafScheduled.current = true;
        requestAnimationFrame(render);
      }
    };

    // Entrance — drop in with overshoot, then hand off to rAF.
    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(90deg) rotateZ(0deg) scale(0.85)";
    const entrance = window.setTimeout(() => {
      canvas.style.transition =
        "transform 2.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(55deg) rotateZ(-25deg) scale(1)";
      // Hand subsequent updates to rAF
      window.setTimeout(() => {
        canvas.style.transition = "";
      }, 2600);
    }, 200);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.clearTimeout(entrance);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #ff3c00;
          --grain-opacity: 0.10;
        }

        .halide-body {
          background-color: var(--bg);
          color: var(--silver);
          font-family: 'Syncopate', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          position: relative;
          perspective: 2000px;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: 900px;
          height: 470px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.10);
          border-radius: 24px;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          overflow: hidden;
        }

        .layer-1 {
          background-image: url('${heroBg}');
          filter: grayscale(1) contrast(1.2) brightness(0.5);
        }
        .layer-2 {
          background-image: url('${heroBg}');
          filter: grayscale(1) contrast(1.1) brightness(0.7);
          opacity: 0.6;
          mix-blend-mode: screen;
        }
        .layer-3 {
          background-image: url('${heroBg}');
          filter: grayscale(1) contrast(1.3) brightness(0.8);
          opacity: 0.4;
          mix-blend-mode: overlay;
        }

        .contours {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 40px,
            rgba(255, 255, 255, 0.05) 41px,
            transparent 42px
          );
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 3rem 4rem;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr auto;
          gap: 1.5rem;
          z-index: 10;
          pointer-events: none;
        }

        .corner-mark {
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
        }

        .status-block {
          text-align: right;
          font-family: 'JetBrains Mono', 'Consolas', monospace;
          color: var(--accent);
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          line-height: 1.6;
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          z-index: 20;
          position: relative;
          pointer-events: auto;
        }

        .hero-title .name-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
          line-height: 0.9;
        }

        .hero-title .first,
        .hero-title .last {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(2.5rem, 7vw, 5.5rem);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .hero-title .first {
          color: #ffffff;
        }

        .hero-title .last {
          color: var(--accent);
          text-shadow:
            0 0 20px rgba(255, 60, 0, 0.5),
            0 0 40px rgba(255, 60, 0, 0.2);
        }

        .bottom-row {
          grid-column: 1 / -1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          text-align: left;
          pointer-events: auto;
        }

        .role-block {
          font-family: 'JetBrains Mono', 'Consolas', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          line-height: 1.5;
          color: var(--silver);
        }

        .social-cluster {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.5rem;
        }

        .social-row {
          display: flex;
          gap: 0.75rem;
        }

        .social-pill {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background-color: rgba(17, 17, 17, 0.80);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          transition: background-color 0.2s ease, color 0.2s ease;
          backdrop-filter: blur(6px);
        }

        .social-pill:hover {
          background-color: rgba(255, 255, 255, 0.10);
          color: #fff;
        }

        .stats {
          display: flex;
          gap: 2rem;
        }

        .stat-num {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          display: flex;
          align-items: flex-start;
        }

        .stat-num .plus {
          color: var(--accent);
          font-size: 1rem;
          margin-left: 2px;
          line-height: 1.4;
        }

        .stat-label {
          font-family: 'JetBrains Mono', 'Consolas', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #888;
          margin-top: 0.4rem;
        }

        .scroll-hint {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
          z-index: 5;
          pointer-events: none;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50%      { transform: scaleY(1); transform-origin: top; }
          51%      { transform: scaleY(1); transform-origin: bottom; }
        }

        @media (max-width: 768px) {
          .interface-grid {
            padding: 1.25rem 1.25rem;
          }
          .hero-title { align-self: start; margin-top: 12vh; }
          .hero-title .first,
          .hero-title .last { font-size: 2.5rem; }
          .canvas-3d { width: 90vw; height: 55vw; }
          .bottom-row { flex-direction: column; align-items: flex-start; gap: 1.25rem; }
          .social-cluster { align-items: flex-start; }
          .status-block { display: none; }
        }
      `}</style>

      <div className="halide-body relative">
        {/* SVG noise filter (defined once, used by the grain layer) */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="halide-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        {/* Grain overlay */}
        <div
          className="halide-grain"
          style={{ filter: "url(#halide-grain)" }}
        />

        <div className="interface-grid">
          {/* Top-left: ~ FA */}
          <div className="corner-mark">
            <span style={{ color: "var(--accent)" }}>~</span> FA
          </div>

          {/* Top-right: status block (under the global Header nav) */}
          <div className="status-block">{profile.status.toUpperCase()} · {profile.location.toUpperCase()}</div>

          {/* Center-left: FAHIM / ABRAR wordmark */}
          <div className="hero-title">
            <div className="name-row">
              <div className="first">FAHIM</div>
              <div className="last">ABRAR</div>
            </div>
          </div>

          {/* Bottom row: role + socials + stats */}
          <div className="bottom-row">
            <div className="role-block hidden md:block">
              <p>[ FULL STACK ]</p>
              <p>SYSTEM ARCHITECTURE & UI/UX</p>
            </div>

            <div className="social-cluster">
              <div className="social-row">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="GitHub"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
                  </svg>
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href={profile.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="Codeforces"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="16" y="4" width="4" height="16" fill="#FF3B30" />
                    <rect x="10" y="10" width="4" height="10" fill="#007AFF" />
                    <rect x="4" y="14" width="4" height="6" fill="#FFCC00" />
                  </svg>
                </a>
              </div>

              <div className="stats">
                <div className="flex flex-col items-center">
                  <h3 className="stat-num">
                    9<span className="plus">+</span>
                  </h3>
                  <p className="stat-label">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div
              className="layer layer-1"
              ref={(el) => {
                layersRef.current[0] = el!;
              }}
            />
            <div
              className="layer layer-2"
              ref={(el) => {
                layersRef.current[1] = el!;
              }}
            />
            <div
              className="layer layer-3"
              ref={(el) => {
                layersRef.current[2] = el!;
              }}
            />
            <div className="contours" />
          </div>
        </div>

        <div className="scroll-hint" />
      </div>
    </>
  );
};

export default HalideLanding;