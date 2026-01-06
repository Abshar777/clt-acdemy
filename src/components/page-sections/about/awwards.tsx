"use client";
import React from "react";
import { motion } from "framer-motion";
import { AWARDS } from "@/const";
import Image from "next/image";

const AwardsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            Global Recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6"
          >
            A Multi-Award Winning <br />
            <span className="text-red-600 italic">Trading Powerhouse</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Our commitment to excellence in financial education and technology
            is recognized by the most prestigious organizations in the Middle
            East and beyond.
          </motion.p>
        </div>

        <div className="grid md:-translate-x-10 md:grid-cols-2 min-h-[55vh] gap-0 md:gap-6">
          <div className="w-full md:h-full h-[300px] rounded-2xl flex items-center md:justify-end justify-center">
            <div className="w-3/5 h-full rounded-xl ">
              <div
                key={AWARDS[0].id}
                className="w-full flex items-end justify-center relative h-full rounded-2xl overflow-hidden"
              >
                <Image
                  placeholder="blur"
                  height={500}
                  src={AWARDS[0].image}
                  alt={AWARDS[0].title}
                  width={500}
                  className="object-cover absolute inset-0 top-0 w-full h-full"
                />
                {/* <div className="w-[95%] mx-auto h-fit relative z-[1] p-2 bg-black/50 backdrop-blur-2xl rounded-2xl mb-2 flex items-center justify-center">
                  <p className="text-white text-sm font-black">
                    {AWARDS[0].title}
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-2 place-items-center min-h-[300px]">
            {AWARDS.slice(1, 7).map((award) => (
              <div
                key={award.id}
                className="w-full flex items-end justify-center relative h-[250px] rounded-2xl overflow-hidden"
              >
                <Image
                  placeholder="blur"
                  height={500}
                  src={award.image}
                  alt={award.title}
                  width={500}
                  className="object-cover absolute inset-0 w-full h-full"
                />
                <div className="w-[95%] mx-auto mb-2 p-2 bg-white/5 backdrop-blur-xl rounded-2xl relative z-[1] text-center">
                  <p className="text-xs font-semibold text-primary">
                    winner {award.year}
                  </p>
                  <p className="text-white text-xs font-semibold">
                    {award.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Infinite Marquee */}
          <div className="md:hidden mt-6 overflow-hidden">
            <div className="marquee gap-2">
              {[...AWARDS.slice(1, 7), ...AWARDS.slice(1, 7)].map(
                (award, index) => (
                  <div
                    key={`${award.id}-${index}`}
                    className="w-[150px] flex-shrink-0 flex items-end justify-center relative h-[200px] rounded-2xl overflow-hidden"
                  >
                    <Image
                      placeholder="blur"
                      height={500}
                      src={award.image}
                      alt={award.title}
                      width={500}
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                    <div className="w-[95%] mx-auto mb-2 p-2 bg-white/5 backdrop-blur-xl rounded-2xl relative z-[1] text-center">
                      <p className="text-xs font-semibold text-primary">
                        winner {award.year}
                      </p>
                      <p className="text-white text-xs font-semibold">
                        {award.title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};

export default AwardsSection;
