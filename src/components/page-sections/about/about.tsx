"use client";
import { AboutVideo } from "@/components/global/heroVideo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

// Over 5 Years of experience
// 2000+ student success stories
// Proven performance driven systems.

const goals = [
  "Over 5 Years of experience",
  "2000+ student success stories",
  "Proven performance driven systems.",
];

const About = () => {
  return (
    <div className="w-full grid  md:px-28 px-5 md:py-30   justify-center items-center min-h-screen md:grid-cols-3 grid-cols-1 md:gap-10 relative ">
      <div className="flex flex-col  md:col-span-2 md:items-start items-center gap-2">
        <div className="px-5 mb-4 rounded-full w-fit font-semibold border border-primary text-primary text-center py-2">
          <p className="md:text-sm text-xs uppercase text-nowrap">
            About CLT Academy
          </p>
        </div>
        <h1 className="mb-2 md:text-5xl text-4xl md:text-start text-center  font-bold">
          {" "}
          Our values reflect the mindset we instill in every successful trader
          we build.
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm font-semibold">
            We’re not just an academy — we are a movement.
          </p>
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            Built on clarity in strategy, integrity in action, and results that
            speak louder than promises.
          </p>
        </div>
        <div className="flex flex-col mt-2 gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            At the heart of everything what we teach is a deep belief: Success
            in trading isn’t luck — it’s a mindset, a discipline, a lifestyle.
          </p>
        </div>

        <div className="flex flex-col mt-2 gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            We train traders to think independently, act confidently, and grow
            with purpose.
          </p>
        </div>
        <div className="flex flex-col mt-2 gap-1">
          <p className="text-black/60 md:text-start text-center md:text-base text-sm ">
            We’re here to build traders who don’t just chase trends — they
            create them.
          </p>
        </div>
        <Button
          onClick={() => {
            window.location.href = "/courses";
          }}
          size={"lg"}
          className="md:text-[.8rem] mt-2 font-bold group rounded-2xl"
        >
          Explore Our Courses{" "}
          <FaArrowRight className="group-hover:translate-x-1 duration-900" />
        </Button>
      </div>
      <div className="relative bg-black md:block hidden overflow-hidden rounded-lg max-h-[70vh] col-span-1 w-full h-full ">
        <div className="h-full    fit-image shadow-2xs overflow-hidden   w-full rounded-lg ">
          {/* <Image
            src={"/about.png"}
            alt="goals"
            width={100}
            height={100}
            className="object-cover rounded-lg w-full h-full"
          /> */}
          <AboutVideo />
        </div>
      </div>
    </div>
  );
};

export default About;
