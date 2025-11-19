"use client";
import React from "react";
import Image from "next/image";
import { GiFlamingTrident } from "react-icons/gi";
import { FaChartLine, FaHandshake, FaMoneyBillTrendUp } from "react-icons/fa6";

const steps = [
  {
    title: "Awareness & Planning",
    desc: "Identify your goals, understanding your purpose.",
    icon: <GiFlamingTrident className="text-5xl -mt-2" />,
  },
  {
    title: "Foundation & Setup",
    desc: "Mastering the tools & strategies",
    icon: <FaMoneyBillTrendUp className="text-5xl -mt-2" />,
  },
  {
    title: "Execution & Growth",
    desc: "Trade Smart • Review Smarter",
    icon: <FaHandshake className="text-5xl -mt-2" />,
  },
  {
    title: "Consistency & Mastery",
    desc: "Become the trader you were meant to be",
    icon: <FaChartLine className="text-5xl -mt-2" />,
  },
];

const Process = () => {
  return (
    <div className="w-screen flex flex-col items-center min-h-screen gap-8 py-10 relative">
      {/* Pill Heading */}
      <div className="px-5 rounded-full border border-primary text-primary font-semibold w-fit text-center py-2">
        <p className="md:text-sm text-xs uppercase text-nowrap">
          Working Process
        </p>
      </div>

      {/* Title */}
      <h1 className="text-4xl bg-white   md:text-5xl font-bold text-black/90 text-center leading-tight">
        We follow these steps to <br /> improve your trading
      </h1>

      {/* SVG Curved Path */}

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 z-10 max-w-6xl w-full relative px-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex relative z-10 flex-col group  cursor-pointer items-center text-center gap-3 ${
              index % 2 == 0 ? "scale-[.9]" : "scale-[1.1]"
            } duration-300`}
          >
            {/* Circle */}
            <div className="w-40 h-40 bg-white rounded-full  flex items-center justify-center relative">
              <div className="w-32 h-32  text-black/70 rounded-full  flex items-center justify-center ">
                {step.icon}
              </div>
            </div>

            {/* Title */}
            <h2 className="font-bold text-lg md:text-xl text-black/90">
              {step.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-black/60 max-w-[180px]">{step.desc}</p>
            <svg
              className="absolute text-primary/70 group-hover:text-primary transition-all duration-500  group-hover:rotate-180"
              width="180"
              height="150"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90 177C138.049 177 177 138.049 177 90C177 41.9512 138.049 3 90 3C41.9512 3 3 41.9512 3 90C3 138.049 41.9512 177 90 177ZM90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z"
                fill="currentColor"
              ></path>
              <path
                d="M153 22C153 25.866 149.866 29 146 29C142.134 29 139 25.866 139 22C139 18.134 142.134 15 146 15C149.866 15 153 18.134 153 22Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M146 29C149.866 29 153 25.866 153 22C153 18.134 149.866 15 146 15C142.134 15 139 18.134 139 22C139 25.866 142.134 29 146 29ZM146 32C151.523 32 156 27.5228 156 22C156 16.4772 151.523 12 146 12C140.477 12 136 16.4772 136 22C136 27.5228 140.477 32 146 32Z"
                fill="white"
              ></path>
              <path
                d="M27 144C27 147.866 23.866 151 20 151C16.134 151 13 147.866 13 144C13 140.134 16.134 137 20 137C23.866 137 27 140.134 27 144Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 151C23.866 151 27 147.866 27 144C27 140.134 23.866 137 20 137C16.134 137 13 140.134 13 144C13 147.866 16.134 151 20 151ZM20 154C25.5228 154 30 149.523 30 144C30 138.477 25.5228 134 20 134C14.4772 134 10 138.477 10 144C10 149.523 14.4772 154 20 154Z"
                fill="white"
              ></path>
            </svg>
          </div>
        ))}
        <div className="w-full md:rotate-0 rotate-90 md:translate-x-0 translate-x-[1rem] absolute top-0 left-0">
          <svg width="1175.5" height="145.5" className="text-primary/20 ">
            <g fill="none" strokeWidth="2">
              <path
                className="dashed1"
                stroke="currentColor"
                strokeDasharray="6, 6"
                d="M4.874,5.310 C4.874,5.310 160.876,216.949 377.890,107.556 C377.890,107.556 612.318,-26.577 759.317,91.500 C759.317,91.500 971.500,225.630 1169.809,1.491"
              ></path>
              <path
                className="dashed2"
                stroke="currentColor"
                strokeDasharray="6, 6"
                d="M4.874,5.310 C4.874,5.310 160.876,216.949 377.890,107.556 C377.890,107.556 612.318,-26.577 759.317,91.500 C759.317,91.500 971.500,225.630 1169.809,1.491"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Process;
