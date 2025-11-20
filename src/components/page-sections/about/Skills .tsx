"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full   md:px-28  px-5 md:py-30   min-h-[40vh] flex items-center justify-center md:gap-10 relative ">
      <div className="flex flex-col md:w-[60%] w-full  md:items-start items-center gap-2">
        <h1 className="mb-2 text-center md:text-5xl text-4xl   font-bold">
          {" "}
          Our Expertise & Skills Cover Every Corner of Trading
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-black/60  text-center md:text-base text-sm font-semibold">
            From mastering market trends to managing risk like a pro, we bring
            real-world strategies, technical precision, and deep market insights
            to help you trade with confidence. Whether you're just starting or
            scaling up — we've got the tools, training, and mindset to guide
            your journey.
          </p>
        </div>

        <div className="grid grid-cols-2 w-full gap-4">
          <div className="flex flex-col mt-4 items-center justify-center w-full  gap-2">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-black/60 md:text-start text-center md:text-base text-sm font-semibold">
                Account Growth
              </h1>
              <h1 className="text-primary text-2xl font-bold">30%</h1>
            </div>
            <Progress value={30} color="primary" className="w-full" />
          </div>
          <div className="flex flex-col mt-4 items-center justify-center w-full  gap-2">
            <div className="flex items-center justify-between gap-2">
              <h1 className="text-black/60 md:text-start text-center md:text-base text-sm font-semibold">
                Confidence Boosted
              </h1>
              <h1 className="text-primary text-2xl font-bold">90%</h1>
            </div>
            <Progress value={90} color="primary" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
