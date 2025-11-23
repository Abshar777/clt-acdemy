import React, { useRef, useEffect, RefObject } from "react";
import gsap from "gsap";
import { useOnScreen } from "@/hooks/useOnScreen";

interface StepItemProps {
  step: {
    title: string;
    desc: string;
    Graphic: React.FC<{ play: boolean; className?: string }>;
  };
  index: number;
  total: number;
}

const StepItem: React.FC<StepItemProps> = ({ step, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(containerRef as RefObject<HTMLElement>, 0.4);

  // Stagger logic for desktop: Even indices (0, 2) go higher, Odd (1, 3) go lower.
  // We'll handle this via translation to create the wave effect.
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (isOnScreen && containerRef.current) {
      const ctx = gsap.context(() => {
        // Graphic Pop Animation
        gsap.fromTo(
          graphicRef.current,
          { scale: 0, opacity: 0, rotation: -45 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          }
        );

        // Text Reveal Animation (Professional Blur Fade)
        gsap.fromTo(
          textRef.current!.children,
          { y: 20, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.15,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
          }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isOnScreen]);

  return (
    <div
      ref={containerRef}
      className={`
        relative z-10 flex flex-col items-center text-center
        /* Mobile: Vertical spacing */
        mb-16 last:mb-0
        /* Desktop: Horizontal Layout & Spacing */
        lg:mb-0 lg:w-1/4 lg:px-4
        /* Stagger Effect on Desktop to match the wave path */
        ${isEven ? "lg:-translate-y-12" : "lg:translate-y-12"}
      `}
    >
      {/* Graphic Container */}
      <div ref={graphicRef} className="relative mb-8 group">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-brand-500/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Circle Frame */}
        <div
          className="
            relative w-32 h-32 sm:w-40 sm:h-40 
            rounded-full bg-primary/5 backdrop-blur-xl 
            border-2 border-primary 
            flex items-center justify-center 
            shadow-[0_0_30px_rgba(0,0,0,0.3)] 
            group-hover:border-brand-500/50 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]
            transition-all duration-500
        "
        >
          <div className="w-full h-full p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            <step.Graphic
              play={isOnScreen}
              className="w-full h-full drop-shadow-lg"
            />
          </div>
        </div>

        {/* Connector Dots for SVG Path (Purely visual anchors) */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-4 w-2 h-2 rounded-full bg-primary" />
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 w-2 h-2 rounded-full bg-primary" />

        {/* Mobile Connector Dot */}
        {/* <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-500 border-4 border-primary z-20" /> */}
      </div>

      {/* Text Content */}
      <div ref={textRef} className="max-w-[280px] mx-auto relative z-20">
        <div className="inline-block md:mt-0 mt-3 mb-3 px-3 py-1 rounded-full bg-primary border border-primary text-white text-[10px] font-mono text-brand-400 uppercase tracking-widest">
          Step 0{index + 1}
        </div>
        <h2 className="font-bold text-lg md:text-xl mt-4 text-black/90">
          {step.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-black/60 max-w-[180px]">{step.desc}</p>
      </div>
    </div>
  );
};

export default StepItem;
