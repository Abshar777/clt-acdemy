"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import g1 from "@/../public/goals.png";

// Over 5 Years of experience
// 2000+ student success stories
// Proven performance driven systems.

const goals = [
  "Over 5 Years of experience",
  "3000+ student success stories",
  "Proven performance driven systems.",
];

const Goals = () => {
  return (
    <div className="w-full grid md:mt-0 mt-20 md:px-28 px-5 md:pt-30 pt-56  justify-center items-center min-h-screen md:grid-cols-2 grid-cols-1 md:gap-10 relative ">
      <div className="relative h-full md:grid hidden grid-cols-3 ">
        <div className="col-span-3 h-full  flex flex-col gap-4">
          <div className="h-full bg-black  shadow-2xs  w-full fit-image rounded-lg overflow-hidden">
            <Image
              src={g1}
              alt="goals"
              width={1000}
              height={1000}
              placeholder="blur"
              className="object-cover opacity-50 rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-start items-center gap-2">
        <div className="px-5 mb-4 rounded-full w-fit font-semibold border border-primary text-primary text-center py-2">
          <p className="md:text-sm text-xs uppercase text-nowrap">
            Our Company Goals
          </p>
        </div>
        <h1 className="mb-2 md:text-5xl text-4xl md:text-start text-center  font-bold">
          {" "}
          CLT isn’t just an academy it’s the foundation of your trading legacy.
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm font-semibold">
            Our Values Reflect the Mindset of Every Successful Trader We Aim to
            Build.
          </p>
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            We’re not just an academy — we’re a movement.
          </p>
        </div>
        <div className="flex flex-col mt-2 gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            Our Values Reflect the Mindset of Every Successful Trader We Aim to
            Build. We’re not just an academy — we’re a movement. We are driven
            by clarity, ensuring every trader understands not just the how, but
            the why behind each decision. We teach our traders to cut through
            market noise and act with precision.
          </p>
        </div>
        <div className="flex mt-4 flex-col gap-2">
          {goals.map((goal) => (
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-primary text-xl" />
              <p className="text-black/60 md:text-start text-center md:text-base text-sm font-semibold ">
                {goal}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-2 gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            And most importantly, we are focused on results. Our methods are
            practical, performance-driven, and built to deliver consistent
            outcomes in real-world markets.
          </p>
        </div>
        <div className="flex flex-col mt-2 gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            We don’t just teach trading — we shape mindsets, build discipline,
            and create leaders in the financial world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
