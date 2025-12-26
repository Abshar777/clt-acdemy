"use client";
import { Button } from "@/components/ui/button";
import { phoneNumber } from "@/const/data";
import Image, { StaticImageData } from "next/image";
import awward from "@/../public/awward.png";
import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { IoCalculator } from "react-icons/io5";

import { LuNotebookPen } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import HeroVideo, { AboutHeroVideo } from "./heroVideo";
import { cn } from "@/lib/utils";

const PageTitleContainer = ({
  title,
  description,
  isVideo = false,
  imgSrc = awward,
}: {
  title: string;
  description: string;
  isVideo?: boolean;
  imgSrc?: StaticImageData;
}) => {
  return (
    <div className="w-screen relative bg-black flex  flex-col pb-18 justify-center  md:px-20 px-5 md:gap-14 gap-4  ">
      <div className="flex relative z-10 h-[80vh] pt-25 md:px-6 px-2 flex-col md:w-1/2 w-full md:items-start items-center justify-center gap-4">
        <h1 className="md:text-6xl text-5xl md:text-start text-center  text-white font-bold">
          {title}
        </h1>
        <p className="text-white/90 md:text-base text-sm md:text-start text-center">
          {description}
        </p>
      </div>

      <div className="absolute z-0 top-0 left-0 fit-image w-full h-full bg-linear-to-r to-primary/30 from-black">
        {!isVideo && (
          <Image
            src={imgSrc}
            alt={title}
            width={500}
            placeholder="blur"
            height={500}
            className={cn("object-cover w-full h-full ",
              imgSrc === awward ? "opacity-10" : "opacity-20"
            )}
          />
        )}
        {isVideo && <AboutHeroVideo />}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-black">
        <iframe
          allowTransparency={true}
          frameBorder={0}
          src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%20Index%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%20Cash%20CFD%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%20to%20USD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22fundfloat.ae%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22fundfloat.ae%2F%22%7D"
          title="ticker tape TradingView widget"
          lang="en"
          style={{
            userSelect: "none",
            boxSizing: "border-box",
            display: "block",
            height: "44px",
            width: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default PageTitleContainer;
