"use client";
import { whatsappLink } from "@/components/global/whatsapp";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Cta = () => {
  return (
    <div className="w-screen flex items-center  justify-center px-3">
      <div className="w-full min-h-[30vh] py-10 md:flex-row flex-col bg-primary rounded-lg md:px-25 flex items-center justify-between">
        <h1 className="text-white md:w-1/2 w-[90%] text-4xl font-bold">
          We build traders, not just strategies. Clarity, Confidence and
          Constant support whereever you need.
        </h1>
        <Button
          size={"lg"}
          className="md:text-[.8rem] md:mt-0 mt-10 scale-[1.3] bg-white hover:bg-white/90 text-primary font-bold group rounded-2xl"
          onClick={() => {
            window.location.href = whatsappLink;
          }}
        >
          Start Your Journey{" "}
          <FaArrowRight className="group-hover:translate-x-1 duration-900" />
        </Button>
      </div>
    </div>
  );
};

export default Cta;
