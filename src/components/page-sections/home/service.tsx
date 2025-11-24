"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/components/global/whatsapp";

const Service = () => {
  const cards = [
    {
      title: "Beginner Trading Program",
      desc: "Perfect for new traders who want a strong foundation.",
      bgImage: "/s1.png",
    },
    {
      title: "Advanced Strategy Mastery",
      desc: "For traders who want to upgrade their skills.",
      bgImage: "/s2.png",
    },
    {
      title: "Pro-Level Mentorship",
      desc: "1-on-1 expert guidance for consistent growth.",
      bgImage: "/s3.png",
    },
    {
      title: "Price Action Course",
      desc: "Master the art of chart reading and real-time analysis.",
      bgImage: "/s4.png",
    },
  ];

  return (
    <div className="w-screen flex justify-center md:px-20 md:py-25 py-10 min-h-screen">
      <div className="w-[90%] ">
        <div className="w-full flex items-center justify-center"></div>

        <div className="grid mt-3 justify-center items-center md:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex flex-col gap-2">
            <div className="px-5 rounded-full mb-2 border border-primary text-primary font-semibold w-fit text-center py-2">
              <p className="md:text-sm text-xs uppercase text-nowrap">
                CLT ACADEMY SERVICES
              </p>
            </div>
            <h1 className="md:text-5xl text-4xl text-center md:text-start text-black/90 font-bold">
              Our Signature Programs, Tailored for Every Trader’s Journey
            </h1>
          </div>
          <p className="text-black/60 md:mt-4 text-md">
            From complete beginners to seasoned traders, our training programs
            are designed to elevate your strategy, sharpen your skills, and
            position you for long-term trading success.
          </p>
        </div>

        {/* Swiper */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            // pagination={{ clickable: true }}
            // navigation
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-10"
          >
            {cards.map((card, index) => (
              <SwiperSlide className="rounded-2xl overflow-hidden" key={index}>
                <div className=" flex flex-col justify-center items-center rounded-2xl min-h-[20rem] border bg-primary relative overflow-hidden hover:scale-[1.03] duration-200 cursor-pointer">
                  <h1 className="text-white text-3xl text-center font-bold">
                    {card.title}
                  </h1>
                  <p className="text-white w-[80%] text-md text-center">
                    {card.desc}
                  </p>
                  <Button onClick={() => {
                    window.location.href = whatsappLink;
                  }} className="bg-white mt-3 md:px-6 md:py-1 rounded-full text-primary hover:bg-white/80">
                    Learn More
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;
