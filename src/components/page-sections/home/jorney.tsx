"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import awward from "@/../public/awward.png";
import { whatsappLink } from "@/components/global/whatsapp";

// 1000 +
// Active Courses
// 10 +
// Millions in profits booked
// 60000 +
// Live sessions conducted.
// 20000 +
// Add ons & resources downloaded
const jorneyData = [
  {
    number: 3000,
    description: "Students Trained",
    class: "",
  },
  {
    number: 1000,
    description: "Active Courses",
    class: "",
  },
  {
    number: 10,
    description: "Millions in profits booked",
    class: "",
  },
  {
    number: 60000,
    description: "Live sessions conducted.",
    class: "col-span-[1.5]",
  },
  {
    number: 20000,
    description: "Add ons & resources downloaded",
    class: "col-span-2",
  },
];

const Jorney = () => {
  return (
    <div className="w-full relative md:px-4 px-2 mt-10">
      <div className="w-full md:min-h-[70vh]   rounded-lg overflow-hidden relative  bg-black ">
        <div className="relative py-15  z-10 w-full h-full flex items-center justify-center flex-col gap-4">
          <div className="flex-col flex gap-2">
            <h1 className="text-white md:text-start text-center md:text-5xl text-4xl uppercase font-bold">
              Our Journey
            </h1>
            <h2 className="text-white/80 md:text-xl text-base text-center  font-bold">
              From Confused To Confident
            </h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 md:w-[70%] w-full px-2 gap-2">
            {jorneyData.map((item) => (
              <div
                className={`bg-white/5 cursor-pointer hover:-translate-y-1  duration-500 group  flex items-center  justify-center gap-4  py-10 backdrop-blur-sm md:px-6 px-3 rounded-lg ${item.class}`}
              >
                <div className="flex flex-col ">
                  <h1 className="md:text-4xl text-2xl text-nowrap text-white font-bold">
                    {item.number}+
                  </h1>
                  <p className="text-sm  text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button
          onClick={() => {
            window.location.href = whatsappLink;
          }}
            size={"lg"}
            className="md:text-[.8rem] font-bold group rounded-2xl"
          >
            Start Your Journey{" "}
            <FaArrowRight className="group-hover:translate-x-1 duration-900" />
          </Button>
        </div>
        <div className="absolute fit-image z-0 top-0 left-0 w-full h-full flex items-center justify-center">
          <Image
            src={awward}
            alt="awward"
            width={1000}
            height={1000}
            className="w-full opacity-20 object-cover  h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Jorney;
