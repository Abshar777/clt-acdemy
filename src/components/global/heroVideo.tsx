"use client";
import React from "react";

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
      <source src={"/heroBg1.mp4"} type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
