"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AnimationProps {
  onComplete?: () => void;
}

interface ChartDataPoint {
  x: number;
  y: number;
}

const Loader: React.FC<AnimationProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  const candleContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    setShow(true);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      gsap.set(".char", { y: 100, opacity: 0 });
      gsap.set(".candle", { scaleY: 0, transformOrigin: "bottom" });
      gsap.set(".grid-line", { scaleX: 0, transformOrigin: "left" });
      gsap.set(".main-path", {
        drawSVG: 0,
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      });

      tl.to(".grid-line", {
        scaleX: 1,
        duration: 1,
        stagger: 0.1,
        ease: "expo.inOut",
      });

      tl.to(
        ".candle",
        {
          scaleY: (i) => gsap.utils.random(0.2, 1),
          duration: 0.8,
          stagger: {
            amount: 0.5,
            from: "start",
          },
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      tl.to(
        ".main-path",
        {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power3.inOut",
        },
        "-=1"
      );

      tl.to(".flash-overlay", {
        opacity: 0.4,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });

      tl.to(
        candleContainerRef.current,
        {
          opacity: 0.2,
          scale: 1.1,
          filter: "blur(4px)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      tl.to(
        ".char",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power4.out",
        },
        "-=0.8"
      );

      tl.to(
        ".subtitle",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
        delay: 0.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const candles = Array.from({ length: 15 }).map((_, i) => {
    const isGreen = i % 3 !== 0;
    const height = Math.random() * 60 + 20;
    return { isGreen, height };
  });

  const splitText = "CLT ACADEMY".split("").map((char, index) => (
    <span key={index} className="char inline-block whitespace-pre">
      {char}
    </span>
  ));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99] flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-10 ${
          show ? "opacity-20" : "opacity-0"
        } pointer-events-none`}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="grid-line w-full h-[1px] bg-white/70" />
        ))}
      </div>

      <div
        className={`relative w-full md:max-w-4xl max-w-2xl h-96 flex items-center justify-center ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Chart Visualization Container */}
        <div
          ref={candleContainerRef}
          className="absolute inset-0 flex items-end justify-between px-10 pb-10"
        >
          {candles.map((candle, i) => (
            <div
              key={i}
              className={`candle w-4 rounded-sm mx-1 ${
                candle.isGreen
                  ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              }`}
              style={{ height: `${candle.height}%` }}
            />
          ))}

          {/* SVG Line Overlay */}
          <svg
            ref={chartRef}
            className="absolute md:scale-100 scale-75 inset-0 w-full  h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              className="main-path stroke-white/40"
              d="M 40 300 C 100 280, 150 320, 200 250 S 300 100, 400 180 S 550 250, 600 150 S 750 200, 850 50"
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Text Layer */}
        <div
          ref={textRef}
          className="relative z-10 text-center mix-blend-screen"
        >
          <h1 className="text-5xl md:text-9xl font-display font-bold tracking-tighter text-white overflow-hidden">
            {splitText}
          </h1>
          <p className="subtitle opacity-0 translate-y-4 text-xl md:text-2xl text-trading-green font-light tracking-[0.5em] mt-4 uppercase">
            Master the Markets
          </p>
        </div>
      </div>

      <div
        ref={overlayRef}
        className="flash-overlay fixed inset-0 bg-white opacity-0 pointer-events-none mix-blend-overlay"
      ></div>
    </div>
  );
};

export default Loader;
