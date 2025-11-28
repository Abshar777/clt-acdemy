"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";
import React, { useState } from "react";

const HeroVideo = () => {
  
  return (
    <video
      loop
      muted
      autoPlay
      playsInline
      poster="/poster.png"
      preload="none"
      controls={false}
      className="w-full pointer-events-none h-full object-cover opacity-20"
    >
      <source src={"/heroBg.mp4"} type="video/mp4" />
    </video>
  );
};

export const HeroVideoMobile = () => {
  
  return (
    <video
      loop
      muted
      autoPlay
      playsInline
      poster="/poster.png"
      preload="none"
      controls={false}
      className="w-full pointer-events-none h-full object-cover opacity-20"
    >
      <source src={"/heroBg1.mp4"} type="video/mp4" />
    </video>
  );
};

export const AboutVideo = () => {
  // video only wwant play its 33 sec then it will restart
 
  return (
    <video
      loop
      muted
      autoPlay
      playsInline
      poster="/poster.png"
      preload="none"
      controls={false}
      id="about-video"
      className="w-full  pointer-events-none rounded-lg  h-full object-cover opacity-40"
    >
      <source src={"/heroBg1.mp4"} type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
