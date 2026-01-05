"use client";
import React from "react";
import { motion } from "framer-motion";
import { AWARDS } from "@/const";
import Image from "next/image";
import a0 from "@/../public/awwards/a0.jpg";

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <div className="w-full flex items-center justify-center rounded-2xl col-span-5 relative">
 <motion.div
              key={AWARDS[0].id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              whileHover={{ y: -5 }}
              className="relative group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-600/30 hover:bg-white hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden text-red-600 mx-auto mb-4 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <Image
                  placeholder="blur"
                  height={64}
                  src={AWARDS[0].image}
                  alt={AWARDS[0].title}
                  width={64}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="relative z-10">
                <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-1.5">
                  Winner {AWARDS[0].year}
                </p>
                <h4 className="text-sm font-black text-slate-900 mb-1 group-hover:text-red-600 transition-colors line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                  {AWARDS[0].title}
                </h4>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-tight line-clamp-1">
                  {AWARDS[0].org}
                </p>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-red-100 rounded-full group-hover:bg-red-600 transition-colors" />
            </motion.div>
          </div>
          {AWARDS.slice(1).map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-600/30 hover:bg-white hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden text-red-600 mx-auto mb-4 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <Image
                  placeholder="blur"
                  height={64}
                  src={award.image}
                  alt={award.title}
                  width={64}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="relative z-10">
                <p className="text-red-600 font-black text-[10px] uppercase tracking-widest mb-1.5">
                  Winner {award.year}
                </p>
                <h4 className="text-sm font-black text-slate-900 mb-1 group-hover:text-red-600 transition-colors line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                  {award.title}
                </h4>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-tight line-clamp-1">
                  {award.org}
                </p>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-red-100 rounded-full group-hover:bg-red-600 transition-colors" />
            </motion.div>
          ))}
        </div>
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};

export default AwardsSection;
