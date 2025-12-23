"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import t18 from "@/../public/team/t18.jpeg";
import t19 from "@/../public/team/t19.png";
import t20 from "@/../public/team/t20.png";
import t20_1 from "@/../public/team/t20-1.png";
import t45 from "@/../public/team/t45.jpeg";
import t40 from "@/../public/team/t40.jpeg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function OurTeam() {
  const teamMembers = [
    {
      id: 18,
      name: "Edwin ",
      type: "Mentors",
      role: "Master Of Academics",
      bio: "Master Of Academics",
      imageUrl: t18,
      qualifications:
        "BTech, MTech, MBA, PGDIM, PGDHRM,Certified from NPTEL, IRADAI",
      achievements:
        "Published 11 Journal papers above impact factor 5 with ISBN number",
      experience:
        "Former Vice Principal, Polytechnic and Engg. College.9 years of trading experience in both Indian Market, Forex market Focused in gold, silver, WTI oil, UJ, US30, NASDAQ",
    },
    {
      id: 40,
      name: "Aswin",
      type: "Mentors",
      role: "Senior mentor",
      bio: "Senior mentor",
      imageUrl: t40,
    },
    //     Name - Rafat Shaik
    // Profession - Forex Trader & Mentor
    // Qualification -  BBA, Masters in Project Management.
    // Experience - 7+ years in Financial Markets, 4 Years in Forex Market.
    // Focused on Gold and BTC

    {
      id: 20,
      name: "Rafat ",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Trading mentor",
      imageUrl: t20,
      qualifications: "BBA, Masters in Project Management.",
      comfortableAreaInTrading: "Gold and BTC",
      experience: "7+ years in Financial Markets, 4 Years in Forex Market.",
    },
    //     Nihal Azhikodan

    // “6 years of trading experience | Expert in Nasdaq & S&P500 indices | Intraday trader & scalper | Specialized in price action & volume-based trading | Junior Mentor | BBA graduate”
    {
      id: 28,
      name: "Nihal ",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Trading mentor",
      imageUrl: t20_1,
      qualifications: "BBA graduate",
      comfortableAreaInTrading: "Nasdaq & S&P500 indices",
      experience:
        "6 years of trading experience in both Indian Market, Forex market",
    },
    {
      id: 19,
      name: "Sriram",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Trading mentor",
      imageUrl: t19,
    },
    //     Name: Mathson Mathew
    // Designation: Junior Mentor
    // Qualification: Btech (Mechanical)
    // Comfortable Area in Trading: Currency Pairs
    {
      id: 45,
      name: "Mathson Mathew ",
      type: "Mentors",
      role: "Junior Mentor",
      bio: "Junior Mentor",
      imageUrl: t45,
      qualifications: "Btech (Mechanical)",
      comfortableAreaInTrading: "Currency Pairs",
      experience:
        "1 year of trading experience in both Indian Market, Forex market ",
    },
  ];

  return (
    <div className="md:py-10 py-6 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14 flex flex-col items-center justify-center ">
          <div className="px-5 rounded-full mb-2 border border-primary text-primary font-semibold w-fit text-center py-2">
            <p className="md:text-sm text-xs uppercase text-nowrap">
              CLT ACADEMY Mentors
            </p>
          </div>
          <h1 className="md:text-5xl text-4xl text-center md:text-start text-black/90 font-bold">
            Collaboration at the core of innovation
          </h1>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="!pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <Sheet>
                <SheetTrigger>
                  <div className="relative bg-transparent rounded-xl overflow-hidden group">
                    {/* Image Wrapper */}
                    <div className="relative overflow-hidden rounded-2xl bg-[#DBE0E3]">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={500}
                        height={500}
                        className="w-full aspect-[1/1.35] object-cover rounded-2xl transform transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-10 left-6 right-6 text-center z-20 transform translate-y-6 transition-all duration-500 group-hover:-translate-y-6">
                      <h3 className="text-xl font-semibold text-white">
                        {member.name}
                      </h3>

                      {/* Description (hidden until hover) */}
                      <p className="text-white/70 text-sm mt-3 opacity-100 group-hover:opacity-100 transition-all duration-500">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-black/90">
                      {member.name}
                    </SheetTitle>
                    <div className="flex flex-col gap-2">
                      <div className="relative overflow-hidden rounded-2xl bg-[#DBE0E3]">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>

                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          width={500}
                          height={500}
                          className="w-full aspect-[1/1] object-cover rounded-2xl transform transition duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-black/90 font-semibold text-md">
                          <span className="font-bold text-primary">Name:</span> {member.name}
                        </p>
                        <p className="text-black/90 font-semibold text-md">
                          <span className="font-bold text-primary">Role:</span> {member.role}
                        </p>
                        {member.qualifications && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">Qualifications:</span> {member.qualifications}
                          </p>
                        )}
                        {member.comfortableAreaInTrading && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">Comfortable Area in Trading:</span> {member.comfortableAreaInTrading}
                            {member.comfortableAreaInTrading}
                          </p>
                        )}
                        {member.experience && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">Experience:</span> {member.experience}
                          </p>
                        )}
                        {member.achievements && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">Achievements:</span> {member.achievements}
                          </p>
                        )}
                      </div>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
