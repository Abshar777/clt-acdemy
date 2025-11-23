import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GraphicProps {
  play: boolean;
  className?: string;
}

// Step 1: Awareness (Radar Scan)
export const GraphicAwareness: React.FC<GraphicProps> = ({ play, className }) => {
  const wrapperRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (play && wrapperRef.current) {
      const ctx = gsap.context(() => {
        
        // gsap.fromTo(" .scanner",
        //   { scale: 0.8, opacity: 0 },
        //   { scale: 1, opacity: 0.3, duration: 2, stagger: 0.3, repeat: -1, ease: "power1.inOut", yoyo: true }
        // );
  
        gsap.to(".scanner", {
        //   rotation: 360,
        //   duration: 4,
        //   repeat: -1,
        //   ease: "none",
        //   transformOrigin: "50% 50%",
        //   transformBox: "fill-box",
        });
  
        gsap.fromTo(".target-lock",
          { scale: 1.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
        );
  
      }, wrapperRef);
  
      return () => ctx.revert();
    }
  }, [play]);
  

  return (
    <svg ref={wrapperRef} viewBox="0 0 200 200" className={className+" animate-spin duration-[400000000000]"} fill="none">
      <defs>
        <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E7000B" stopOpacity="0" />
          <stop offset="100%" stopColor="#E7000B" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      
      {/* Background Rings */}
      <circle cx="100" cy="100" r="80" stroke="#334155" strokeWidth="1" className="circle-ring" opacity="0.3" />
      <circle cx="100" cy="100" r="55" stroke="#334155" strokeWidth="1" className="circle-ring" opacity="0.3" />
      <circle cx="100" cy="100" r="30" stroke="#334155" strokeWidth="1" className="circle-ring" opacity="0.3" />

      {/* Scanner */}
      <g className="scanner">
         <path d="M100 100 L180 100 A80 80 0 0 0 100 20 Z" fill="url(#scanGradient)" />
      </g>

      {/* Center Target */}
      <g className="target-lock">
        <circle cx="100" cy="100" r="4" fill="#E7000B" />
        <path d="M90 100 h-10 M110 100 h10 M100 90 v-10 M100 110 v10" stroke="#E7000B" strokeWidth="2" />
        <rect x="85" y="85" width="30" height="30" rx="4" stroke="#E7000B" strokeWidth="1.5" strokeDasharray="10 100" strokeDashoffset="-20" />
        <rect x="85" y="85" width="30" height="30" rx="4" stroke="#E7000B" strokeWidth="1.5" strokeDasharray="10 100" strokeDashoffset="-80" />
      </g>
    </svg>
  );
};

// Step 2: Foundation (Grid/Structure)
export const GraphicFoundation: React.FC<GraphicProps> = ({ play, className }) => {
  const wrapperRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (play && wrapperRef.current) {
      const ctx = gsap.context(() => {
        // Boxes floating up
        gsap.fromTo(".block-iso",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "back.out(1.7)" }
        );
        // Connection lines
        gsap.fromTo(".connector",
          { strokeDasharray: 100, strokeDashoffset: 100 },
          { strokeDashoffset: 0, duration: 1.5, delay: 0.5, ease: "power2.out" }
        );
      }, wrapperRef);
      return () => ctx.revert();
    }
  }, [play]);

  return (
    <svg ref={wrapperRef} viewBox="0 0 200 200" className={className} fill="none">
      {/* Abstract Isometric Grid */}
      <path d="M50 140 L100 165 L150 140" stroke="#334155" strokeWidth="2" className="connector" />
      <path d="M100 165 L100 90" stroke="#334155" strokeWidth="2" className="connector" />
      
      {/* Blocks */}
      <g className="block-iso">
        <path d="M50 110 L80 125 L80 155 L50 140 Z"fill="#8c2222" stroke="#E7000B"  />
        <path d="M50 110 L80 125 L110 110 L80 95 Z" fill="#E7000B" stroke="#E7000B" />
        <path d="M80 125 L110 110 L110 140 L80 155 Z" fill="#8c2222" stroke="#E7000B" />
      </g>

       <g className="block-iso">
        <path d="M120 110 L150 125 L150 155 L120 140 Z"fill="#8c2222" stroke="#E7000B"  />
        <path d="M120 110 L150 125 L180 110 L150 95 Z" fill="#E7000B" stroke="#E7000B" />
        <path d="M150 125 L180 110 L180 140 L150 155 Z" fill="#8c2222" stroke="#E7000B" />
      </g>

      <g className="block-iso">
        <path d="M85 50 L115 65 L115 95 L85 80 Z" fill="#8c2222" stroke="#E7000B" strokeOpacity="0.5" />
        <path d="M85 50 L115 65 L145 50 L115 35 Z" fill="#E7000B" stroke="#E7000B" strokeOpacity="0.5" />
        <path d="M115 65 L145 50 L145 80 L115 95 Z" fill="#8c2222" stroke="#E7000B" strokeOpacity="0.5" />
      </g>
    </svg>
  );
};

// Step 3: Execution (Chart Growth)
export const GraphicExecution: React.FC<GraphicProps> = ({ play, className }) => {
  const wrapperRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (play && wrapperRef.current) {
      const ctx = gsap.context(() => {
        // Line chart draw
        const pathLength = 300; // approximate
        gsap.fromTo(".chart-line",
          { strokeDasharray: pathLength, strokeDashoffset: pathLength },
          { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }
        );
        // Area fade in
        gsap.fromTo(".chart-area", { opacity: 0 }, { opacity: 0.2, duration: 2, delay: 0.5 });
        // Candlesticks
        gsap.fromTo(".candle",
          { scaleY: 0, transformOrigin: "bottom" },
          { scaleY: 1, duration: 0.6, stagger: 0.2, delay: 0.5, ease: "back.out(1.5)" }
        );
        // Floating data points
        gsap.to(".data-point", { y: -5, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.3 });
      }, wrapperRef);
      return () => ctx.revert();
    }
  }, [play]);

  return (
    <svg ref={wrapperRef} viewBox="0 0 200 200" className={className} fill="none">
       {/* Gradient for area */}
       <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7000B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E7000B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid Lines */}
      <line x1="20" y1="160" x2="180" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="20" y1="120" x2="180" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="20" y1="80" x2="180" y2="80" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

      {/* Area */}
      <path className="chart-area" d="M30 140 L60 110 L90 125 L120 70 L150 90 L170 40 V160 H30 Z" fill="url(#chartGradient)" />

      {/* Main Line */}
      <path className="chart-line" d="M30 140 L60 110 L90 125 L120 70 L150 90 L170 40" stroke="#E7000B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Candles (Decorational) */}
      <rect x="55" y="100" width="10" height="30" rx="2" fill="#E7000B" className="candle" opacity="0.4" />
      <line x1="60" y1="90" x2="60" y2="140" stroke="#E7000B" strokeWidth="1" className="candle" opacity="0.4" />

      <rect x="115" y="60" width="10" height="25" rx="2" fill="#E7000B" className="candle" opacity="0.4" />
      <line x1="120" y1="50" x2="120" y2="90" stroke="#E7000B" strokeWidth="1" className="candle" opacity="0.4" />

      {/* Points */}
      <circle cx="170" cy="40" r="4" fill="#fff" stroke="#E7000B" strokeWidth="2" className="data-point" />
    </svg>
  );
};

// Step 4: Consistency (Infinite Loop/Shield)
export const GraphicConsistency: React.FC<GraphicProps> = ({ play, className }) => {
  const wrapperRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (play && wrapperRef.current) {
      const ctx = gsap.context(() => {
        // Outer ring rotate
        gsap.to(".outer-ring", { rotation: 360, transformOrigin: "center", duration: 10, repeat: -1, ease: "none" });
        // Inner spin opposite
        gsap.to(".inner-hex", { rotation: -360, transformOrigin: "center", duration: 8, repeat: -1, ease: "none" });
        // Core pulse
        gsap.fromTo(".core", 
            { scale: 0.9, opacity: 0.7 }, 
            { scale: 1.1, opacity: 1, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
        );
        // Particles
        gsap.fromTo(".particle",
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: { amount: 0.5, from: "random" }, ease: "back.out" }
        );
      }, wrapperRef);
      return () => ctx.revert();
    }
  }, [play]);

  return (
    <svg ref={wrapperRef} viewBox="0 0 200 200" className={className} fill="none">
       <defs>
        <radialGradient id="coreGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#E7000B" stopOpacity="1" />
          <stop offset="100%" stopColor="#E7000B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Ring */}
      <circle cx="100" cy="100" r="70" stroke="#334155" strokeWidth="1" strokeDasharray="10 10" className="outer-ring" />
      <circle cx="100" cy="100" r="85" stroke="#1e293b" strokeWidth="1" />

      {/* Inner Hexagon */}
      <g className="inner-hex">
        <path d="M100 60 L135 80 L135 120 L100 140 L65 120 L65 80 Z" stroke="#E7000B" strokeWidth="2" fill="none" />
        <path d="M100 70 L125 85 L125 115 L100 130 L75 115 L75 85 Z" stroke="#E7000B" strokeWidth="1" strokeOpacity="0.5" fill="none" />
      </g>

      {/* Core */}
      <circle cx="100" cy="100" r="15" fill="url(#coreGlow)" className="core" />
      <circle cx="100" cy="100" r="8" fill="#fff" className="core" />

      {/* Particles */}
      <circle cx="100" cy="50" r="2" fill="#E7000B" className="particle" />
      <circle cx="143" cy="75" r="2" fill="#E7000B" className="particle" />
      <circle cx="143" cy="125" r="2" fill="#E7000B" className="particle" />
      <circle cx="100" cy="150" r="2" fill="#E7000B" className="particle" />
      <circle cx="57" cy="125" r="2" fill="#E7000B" className="particle" />
      <circle cx="57" cy="75" r="2" fill="#E7000B" className="particle" />
    </svg>
  );
};