"use client";
import Image from "next/image";
import ceoImage from "@/../public/ceo.png";
export function CEOMessage() {
  return (
    <div className="w-full px-5 ">
      <section className="w-full md:py-20 py-10 bg-primary rounded-3xl text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            <h2 className="md:text-4xl text-3xl text-center md:text-start text-white font-bold mb-4">
              <b>CEO’s Message</b>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="md:text-lg text-md text-center md:text-start text-white/80 leading-relaxed">
                <b>
                  CLT was founded to close a gap that no one else dared to
                  address.
                </b>{" "}
                For too long, trading academies have fed students bookish
                theories, empty jargon, and recycled charts — knowledge that
                looks good on paper but fails in the real world.
              </p>
              <p className="md:text-lg text-md text-center md:text-start text-white/80 leading-relaxed">
                We saw traders with ambition, but without clarity. They were
                taught what to do but never why to do it. At CLT, we exist to
                change that. We don’t believe in memorizing definitions or
                chasing hype.
              </p>
              <p className="md:text-lg text-md text-center md:text-start text-white/80 leading-relaxed">
                nstead, we teach the ‘why’ behind the markets — the logic,
                structure, and discipline that drive professional decisions. Our
                education is not abstract; it’s institutional-grade training
                designed to empower traders to think, act, and grow like
                professionals.
              </p>
              <p className="md:text-lg text-md text-center md:text-start text-white/80 font-bold leading-relaxed">
                “That is the gap CLT was created to fill — and the mission we
                continue to pursue.”
              </p>
            </div>
            <p className="mt-6 text-white italic">— CEO, CLT Academy</p>
          </div>

          <div className="flex relative fit-image justify-center w-full h-full">
            <div className="absolute  w-[96%] flex items-center justify-center bottom-2 left-2 px-1">
            <div className="bg-white/5 backdrop-blur-3xl  w-full flex flex-col ] py-4 mb-2 px-4 rounded-2xl">
              <h3 className="md:text-xl text-sm font-bold text-white">CEO</h3>
              <p className="md:text-sm text-xs text-white/60">CLT Academy</p>
            </div>
            </div>
            <Image
              src={ceoImage}
              placeholder="blur"
              width={500}
              height={500}
              alt="CEO Image"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
