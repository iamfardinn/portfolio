import React, { useEffect, useRef } from 'react';
import heroBg from '../../assets/hero-bg.jpeg';
const HalideLanding: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Parallax & Idle Animation Logic
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;
    let animationFrameId: number;

    const render = () => {
      time += 0.005; // Idle rotation speed
      
      // Auto rotation adds a gentle sway
      const autoX = Math.sin(time) * 15;
      const autoY = Math.cos(time * 0.8) * 15;
      
      const x = mouseX + autoX;
      const y = mouseY + autoY;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (window.innerWidth / 2 - e.pageX) / 25;
      mouseY = (window.innerHeight / 2 - e.pageY) / 25;
    };

    // Start animation loop
    render();

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #ff3c00;
          --grain-opacity: 0.15;
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
          width: 100%; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.1);
          border-radius: 24px;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          overflow: hidden;
        }

        .layer-1 { background-image: url('${heroBg}'); filter: grayscale(1) contrast(1.2) brightness(0.5); }
        .layer-2 { background-image: url('${heroBg}'); filter: grayscale(1) contrast(1.1) brightness(0.7); opacity: 0.6; mix-blend-mode: screen; }
        .layer-3 { background-image: url('${heroBg}'); filter: grayscale(1) contrast(1.3) brightness(0.8); opacity: 0.4; mix-blend-mode: overlay; }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.05) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: auto 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(1.5rem, 5vw, 4.5rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          mix-blend-mode: difference;
          text-align: left;
          z-index: 20;
          position: relative;
        }

        .cta-button {
          pointer-events: auto;
          background: var(--silver);
          color: var(--bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
        }

        .cta-button:hover { background: var(--accent); transform: translateY(-5px); }

        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }

        @media (max-width: 768px) {
          .hero-title {
            align-self: start;
            margin-top: 15vh;
            text-align: center;
            font-size: 2.5rem;
          }
          
          .status-container {
            display: none;
          }

          .canvas-3d {
            width: 90vw;
            height: 60vw;
          }
          
          .interface-grid {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="halide-body relative">
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          <div style={{ fontWeight: 700 }}>
            <span style={{ color: 'var(--accent)' }}>~</span> FA
          </div>
          <div className="status-container" style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)', fontSize: '0.7rem' }}>
            <div>STATUS: ONLINE</div>
            <div>LATENCY: 12MS</div>
          </div>

          <div className="hero-title" style={{ mixBlendMode: 'normal' }}>
            <div className="flex flex-row items-center gap-4 md:gap-6 leading-[0.9]">
              <div className="text-4xl md:text-5xl lg:text-6xl font-pixel text-white uppercase tracking-wide">
                FAHIM
              </div>
              <div 
                className="text-4xl md:text-5xl lg:text-6xl font-pixel text-[var(--accent)] uppercase tracking-wide"
                style={{ textShadow: "0 0 20px rgba(255, 60, 0, 0.5), 0 0 40px rgba(255, 60, 0, 0.2)" }}
              >
                ABRAR
              </div>
            </div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left', zIndex: 30, pointerEvents: 'auto' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', paddingBottom: '1rem' }} className="hidden md:block">
              <p>[ FULL STACK ]</p>
              <p>SYSTEM ARCHITECTURE & UI/UX</p>
            </div>
            
            <div className="flex flex-col items-end gap-6 w-full md:w-auto mt-8 md:mt-0">
              {/* Social Links */}
              <div className="flex gap-4">
                <a href="https://github.com/iamfardinn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-[#111]/80 hover:bg-white/10 flex items-center justify-center text-[#888] hover:text-white transition-colors backdrop-blur-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-[#111]/80 hover:bg-white/10 flex items-center justify-center text-[#888] hover:text-white transition-colors backdrop-blur-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://codeforces.com/profile/abrar3669" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-[#111]/80 hover:bg-white/10 flex items-center justify-center transition-colors backdrop-blur-sm group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80 group-hover:opacity-100 transition-opacity">
                    <rect x="16" y="4" width="4" height="16" fill="#FF3B30" />
                    <rect x="10" y="10" width="4" height="10" fill="#007AFF" />
                    <rect x="4" y="14" width="4" height="6" fill="#FFCC00" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-6 md:gap-8 pb-2">
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 flex items-start font-sans">
                    9<span className="text-[var(--accent)] text-lg md:text-xl ml-0.5">+</span>
                  </h3>
                  <p className="text-[#888] text-[9px] md:text-[10px] font-mono uppercase tracking-widest">Projects</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div className="layer layer-1" ref={(el) => { layersRef.current[0] = el!; }}></div>
            <div className="layer layer-2" ref={(el) => { layersRef.current[1] = el!; }}></div>
            <div className="layer layer-3" ref={(el) => { layersRef.current[2] = el!; }}></div>
            <div className="contours"></div>
          </div>
        </div>

        <div className="scroll-hint"></div>
      </div>
    </>
  );
};

export default HalideLanding;
