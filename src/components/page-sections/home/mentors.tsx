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
import { ScrollArea } from "@/components/ui/scroll-area";

export default function OurTeam() {

//   [10:32 pm, 23/12/2025] Nubin Delta: Name : Ashwin. 
// BIO: Ashwin blends years of banking expertise with a passion for simplifying financial concepts. His continuous pursuit of certifications across forex, derivatives, and investor training reflects his dedication to being not just a mentor but a foundational force in CLT's education ecosystem.

// Background: Former Banker | Bachelor of Commerce | Diploma in Hospitality
// Strengths: Client education, foundational market understanding, structured growth for beginners. 
// Certifications: Certified Financial technician, Forex trading and analysis diploma, NISM Certified, CISI Certified, AFCM Certified. 

// Experience: 6+ years Into Trading and personalized Education. 

// Strengths:  Foundational excellence in financial education. 
// Empathy and student centric mentoring, Consistency and discipline, Adaptability to learner needs.
// [11:05 pm, 23/12/2025] Nubin Delta: Name : Mathson Mathew
// BIO: Mathson is a disciplined mentor with sharp technical insights. With a mechanical mind and trading edge in FX markets, he blends logic and strategy to help students master the psychology and patience required in trading.

// Background: B.Tech in Mechanical Engineering

// Certifications: NSE certified, Forex trading masterclass CISI Certified, AFCM Certified. 

// Experience: 4+ years Into Trading and personalized Education. 

// Strengths: Currency pairs, Swing trading, Balanced Approach of risk and psychology, Technically rooted with mechanical precision.
// [11:05 pm, 23/12/2025] Nubin Delta: Name : Rafat
// BIO: Rafat offers a deep-rooted understanding of the volatility and power of gold and crypto trading. His structured mentoring style and command of long-term charting give students a strong sense of direction.

// Background: BBA, Master’s in Project Management

// Certifications: NSE certified, Forex trading masterclass CISI Certified, AFCM Certified, CFA- Investments. 

// Experience: 7+ years Into Trading and personalized Education. 

// Strengths: Fast moving & Volatile instruments like gold and bitcoin, Analytical mind with strategical thinking, Price psychology, Entry and exit points strategy.
// [11:05 pm, 23/12/2025] Nubin Delta: Name : EDWIN JOY. 
// BIO: A rare academic-trader blend, Edwin is the brain behind CLT’s academic curriculum. With deep research in trading instruments and a commitment to structured learning, his mentorship blends discipline and data.
// Background: BTech, MTech, MBA, PGDIM, PGDHRM
// Additional Credentials: Certified by NPTEL, IRADAI

// Certifications: Certified Financial technician, Forex trading and analysis diploma, NISM Certified, CISI Certified, AFCM Certified. Bloomberg market concepts, Financial modeling, MITx Micromasters in Finance. 

// Markets: Gold, Oil, US30, NASDAQ

// Experience: 11+ years Into Trading and personalized Education. 

// Strengths:  Academic leadership, Research oriented studies, Multi asset multi market technical mastery. curriculum architect, Quality controller. Forex Analyst
  const teamMembers = [
    {
      id: 18,
      name: "Edwin Joy",
      type: "Mentors",
      role: "Master Of Academics",
      
      bio: "Ashwin blends years of banking expertise with a passion for simplifying financial concepts. His continuous pursuit of certifications across forex, derivatives, and investor training reflects his dedication to being not just a mentor but a foundational force in CLT's education ecosystem.",
      background: "Former Vice Principal, Polytechnic and Engg. College.9 years of trading experience in both Indian Market, Forex market Focused in gold, silver, WTI oil, UJ, US30, NASDAQ",
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
      name: "Ashwin",
      type: "Mentors",
      role: "Senior mentor",
      bio: "Ashwin blends years of banking expertise with a passion for simplifying financial concepts. His continuous pursuit of certifications across forex, derivatives, and investor training reflects his dedication to being not just a mentor but a foundational force in CLT's education ecosystem.",
      background: "Former Bank employee at Co operative bank",
      imageUrl: t40,
      qualifications: "Bachelor of commerce, Diploma in Hospitality Managment",
      experience: "Former Bank employee at Co operative bank",
    },

    {
      id: 20,
      name: "Rafat ",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Rafat offers a deep-rooted understanding of the volatility and power of gold and crypto trading. His structured mentoring style and command of long-term charting give students a strong sense of direction.",
      background: "BBA, Masters in Project Management",
      imageUrl: t20,
      qualifications: "BBA, Masters in Project Management.",
      comfortableAreaInTrading: "Gold and BTC",
      experience: "7+ years in Financial Markets, 4 Years in Forex Market.",
    },
    {
      id: 28,
      name: "Nihal ",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Nihal is a disciplined mentor with sharp technical insights. With a mechanical mind and trading edge in FX markets, he blends logic and strategy to help students master the psychology and patience required in trading.",
      background: "BBA graduate",
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
      bio: "Sriram is a disciplined mentor with sharp technical insights. With a mechanical mind and trading edge in FX markets, he blends logic and strategy to help students master the psychology and patience required in trading.",
      background: "B.E, MBA, Certified from NISM- PGCCM",
      imageUrl: t19,
      qualifications: "B.E, MBA, Certified from NISM- PGCCM",
      achievements: "Created 200+ educational YouTube videos on Forex & financial markets, Mentored 100+ traders across the GCC region",
      experience: "6+ years GCC experience in financial markets, Former Deputy Manager – Kotak Securities Limited, 7+ years trading experience across Indian markets, Forex & Crypto, Core focus on Gold, Silver, GBPUSD, EURUSD & NASDAQ",
    },
    {
      id: 45,
      name: "Mathson Mathew ",
      type: "Mentors",
      role: "Junior Mentor",
      bio: "Mathson Mathew is a disciplined mentor with sharp technical insights. With a mechanical mind and trading edge in FX markets, he blends logic and strategy to help students master the psychology and patience required in trading.",
      background: "B Tech in Mechanical Engineering",
      imageUrl: t45,
      qualifications: "B Tech in Mechanical Engineering ",
      comfortableAreaInTrading: "Currency Pairs",
      experience:
        "4+ years of market experience. 2 year experience as a Forex Mentor. Expertise in swing trading with proper risk management and psychology and also worked in trading sales field. ",
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
                  <div className="relative image-anime bg-transparent rounded-xl overflow-hidden group">
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
                        {member.role}
                      </p>
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent >
                  <ScrollArea className="h-[95vh]">
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
                          <span className="font-bold text-primary">Name:</span>{" "}
                          {member.name}
                        </p>
                        <p className="text-black/90 font-semibold text-md">
                          <span className="font-bold text-primary">Role:</span>{" "}
                          {member.role}
                        </p>
                        {member.qualifications && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">
                              Qualifications:
                            </span>{" "}
                            {member.qualifications}
                          </p>
                        )}
                        {member.comfortableAreaInTrading && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">
                              Comfortable Area in Trading:
                            </span>{" "}
                            {member.comfortableAreaInTrading}
                            {member.comfortableAreaInTrading}
                          </p>
                        )}
                        {member.experience && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">
                              Experience:
                            </span>{" "}
                            {member.experience}
                          </p>
                        )}
                        {member.achievements && (
                          <p className="text-black/90 font-semibold text-md">
                            <span className="font-bold text-primary">
                              Achievements:
                            </span>{" "}
                            {member.achievements}
                          </p>
                        )}
                      </div>
                    </div>
                  </SheetHeader>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
