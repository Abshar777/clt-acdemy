'use client'
import React, { useRef, useEffect, RefObject } from "react";
import StepItem from "@/components/ui/stepItem";
import {
  GraphicAwareness,
  GraphicFoundation,
  GraphicExecution,
  GraphicConsistency,
} from "@/components/global/graphics";
import gsap from "gsap";
import { useOnScreen } from "@/hooks/useOnScreen";

const steps = [
  {
    title: "Awareness & Planning",
    desc: "Identify your goals, understanding your purpose.",
    Graphic: GraphicAwareness,
  },
  {
    title: "Foundation & Setup",
    desc: "Mastering the tools & strategies.",
    Graphic: GraphicFoundation,
  },
  {
    title: "Execution & Growth",
    desc: "Trade Smart • Review Smarter.",
    Graphic: GraphicExecution,
  },
  {
    title: "Consistency & Mastery",
    desc: "Become the trader you were meant to be.",
    Graphic: GraphicConsistency,
  },
];

// Desktop: Animated Sine Wave connecting staggered items
const DesktopWave: React.FC<{ play: boolean }> = ({ play }) => {
  return (
    <svg
      className="hidden lg:block absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 overflow-visible pointer-events-none z-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="red" stopOpacity="0" />
          <stop offset="15%" stopColor="red" stopOpacity="0.6" />
          <stop offset="85%" stopColor="red" stopOpacity="0.6" />
          <stop offset="100%" stopColor="red" stopOpacity="0" />
        </linearGradient>
        <mask id="dashMask">
          <path
            // S-Curve logic connecting staggered points:
            // 12.5% (Top) -> 37.5% (Bottom) -> 62.5% (Top) -> 87.5% (Bottom)
            d="M 0 50 C 6 50, 6 20, 12.5 20 C 25 20, 25 80, 37.5 80 C 50 80, 50 20, 62.5 20 C 75 20, 75 80, 87.5 80 C 94 80, 94 50, 100 50"
            stroke="white"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </mask>
      </defs>

      {/* Background Faint Line */}
      <path
        d="M 0 50 C 6 50, 6 20, 12.5 20 C 25 20, 25 80, 37.5 80 C 50 80, 50 20, 62.5 20 C 75 20, 75 80, 87.5 80 C 94 80, 94 50, 100 50"
        stroke="white"
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
        className="opacity-30"
      />

      {/* Animated Glowing Path */}
      <path
        d="M 0 50 C 6 50, 6 20, 12.5 20 C 25 20, 25 80, 37.5 80 C 50 80, 50 20, 62.5 20 C 75 20, 75 80, 87.5 80 C 94 80, 94 50, 100 50"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="8 8"
        vectorEffect="non-scaling-stroke"
        className={`transition-all duration-[3s] ease-linear ${
          play ? "animate-dash-flow opacity-100" : "opacity-0"
        }`}
      />

      <style>{`
                .animate-dash-flow {
                    animation: dashMove 20s linear infinite;
                }
                @keyframes dashMove {
                    from { stroke-dashoffset: 0; }
                    to { stroke-dashoffset: -1000; }
                }
            `}</style>
    </svg>
  );
};

// Mobile: Vertical Center Line
const MobileTimeline: React.FC<{ play: boolean }> = ({ play }) => (
  <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px  z-0">
    <div
      className={`absolute top-0 left-0 w-full border-2 opacity-50 border-primary border-dashed transition-all duration-[2s] ease-out ${
        play ? "h-[80%] opacity-50" : "h-0 opacity-0"
      }`}
      style={{ boxShadow: "0 0 1px red" }}
    />
  </div>
);

const TradingRoadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(containerRef as RefObject<HTMLElement>, 0.1);

  useEffect(() => {
    if (isVisible && headerRef.current) {
      const words = headerRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { y: 50, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [isVisible]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-40 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none -z-10" />

      {/* Header */}
      <div
        ref={headerRef}
        className=" w-full flex flex-col items-center justify-center px-6 lg:px-8 text-center mb-10 lg:mb-32 relative z-10"
      >
       <div className="px-5 rounded-full border border-primary text-primary font-semibold w-fit text-center py-2">
        <p className="md:text-sm text-xs uppercase text-nowrap">
          Working Process
        </p>
      </div>

      {/* Title */}
      <h1 className="text-4xl bg-white md:mt-0 mt-3   md:text-5xl font-bold text-black/90 text-center leading-tight">
        We follow these steps to <br /> improve your trading
      </h1>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Connection Paths */}
        <DesktopWave play={isVisible} />
        <MobileTimeline play={isVisible} />

        {/* Steps Container */}
        <div
          className="
            relative z-10
            flex flex-col 
            lg:flex-row lg:justify-between lg:items-start
            lg:h-[400px] /* Fixed height for wave alignment */
        "
        >
          {steps.map((step, index) => (
            <StepItem
              key={index}
              step={step}
              index={index}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingRoadmap;
