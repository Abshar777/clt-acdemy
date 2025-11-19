"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FaPhoneAlt } from "react-icons/fa";
import { phoneNumber } from "@/const/data";

export default function Faq() {
  //   Why should I choose CLT Academy over other trading institutions?
  // CLT offers real trading strategies, lifetime mentorship, and a results-driven approach used by professionals and institutions.

  // What programs do you offer for beginners?
  // Our beginner-friendly courses include Forex Foundations, Crypto Basics, and Financial Literacy — all with live support.

  // How does CLT support students after course completion?
  // We provide ongoing trade reviews, access to mentorship calls, community groups, and continuous strategy updates.

  // How do I upgrade or switch courses later?
  // You can upgrade anytime. Your existing payment or course access will be adjusted accordingly.

  // Can I make a career in trading through CLT’s programs?
  // Absolutely. Many students have gone from beginners to consistent traders with CLT’s structured roadmap.

  // What’s the fastest way to enroll and get started?
  // Tap on “Enroll Now” or speak directly to our support on WhatsApp for instant onboarding and payment setup.
  const faqItems = [
    {
      q: "Why should I choose CLT Academy over other trading institutions?",
      a: "CLT offers real trading strategies, lifetime mentorship, and a results-driven approach used by professionals and institutions.",
      delay: "",
      show: false,
    },
    {
      q: "What documents are needed to join?",
      a: "No documents are required. Simply tap “Enroll Now” or WhatsApp us for instant enrollment.",
      delay: "0.2s",
      show: true,
    },
    {
      q: "How do I upgrade or switch courses later?",
      a: "You can upgrade anytime. Your existing payment or course access will be adjusted accordingly.",
      delay: "0.4s",
      show: false,
    },
    {
      q: "Can I make a career in trading through CLT’s programs?",
      a: "Absolutely. Many students have gone from beginners to consistent traders with CLT’s structured roadmap.",
      delay: "0.6s",
      show: false,
    },
    {
      q: "What’s the fastest way to enroll and get started?",
      a: "Tap on “Enroll Now” or speak directly to our support on WhatsApp for instant onboarding and payment setup.",
      delay: "0.8s",
      show: false,
    },
    {
      q: "How does CLT support students after course completion?",
      a: "We provide ongoing trade reviews, access to mentorship calls, community groups, and continuous strategy updates.",
      delay: "0.8s",
      show: false,
    },
  ];

  return (
    <div className="py-20 gridAnim relative md:px-20 px-5 w-full">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className=" top-12 space-y-5">
            <div className="px-5 mb-4 rounded-full w-fit font-semibold border border-primary text-primary text-center py-2">
              <p className="md:text-sm text-xs uppercase text-nowrap">
                Our FAQs
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-black/90 capitalize wow fadeInUp">
              Frequently Asked Questions
            </h2>

            <p className="wow fadeInUp" data-wow-delay="0.2s">
              We've compiled answers to the most common questions about our lab
              services, research process, and capabilities.
            </p>

            <a
              href="https://wa.me/+971507528009?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20this.%20Could%20you%20please%20provide%20details?"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium shadow wow fadeInUp"
              data-wow-delay="0.4s"
            >
              View All FAQs
            </a>
          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div className="bg-primary rounded-2xl p-8 wow fadeInUp">
            <Accordion
              type="single"
              collapsible
              defaultValue={
                faqItems.find((i) => i.show)
                  ? faqItems.find((i) => i.show)!.q
                  : undefined
              }
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.q}
                  className="border-b border-white/20 py-4 wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <AccordionTrigger className="md:text-lg text-md font-medium text-white ">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 flex items-center justify-center ">
        <div className="relative shadow-2xl shadow-black/40  md:w-[86%] w-full z-10  bg-white overflow-hidden rounded-lg px-5 md:flex-row flex-col flex justify-between">
          <div className="flex-1 md:py-10 py-5 relative z-10 flex-col flex md:px-5 px-2 gap-2  justify-center ">
            <h1 className="text-2xl text-black/90 font-bold capitalize ">
              Losing Trades or Missing Confidence?
            </h1>
            <p className="text-sm text-black/90 ">
              Whether you're stuck in a loop or scaling up, <br />
              CLT gives you the tools, systems and mentorship to trade like the
              pros.
            </p>
          </div>
          <div className="flex relative md:px-10 px-2 pt-4 z-10 mb-6 items-center gap-5">
            <FaPhoneAlt className="text-white md:flex hidden  md:text-4xl text-xl" />
            <div className="flex text-white flex-col gap-1">
              <h3 className="md:text-md text-xs uppercase">
                CLARITY STARTS HERE
              </h3>
              <h1 className="md:text-2xl text-xl text-nowrap font-bold">
                {phoneNumber}
              </h1>
            </div>
          </div>
          <div className="bg-primary z-0 w-[30rem] h-[20rem] absolute md:right-[-10%] right-[-5%] md:top-[-20%] top-[70%] rounded-full px-4 py-2"></div>
        </div>
      </div>
    </div>
  );
}
