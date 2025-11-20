"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Olivia R. Bennett  ",
      title: "USA",
      description: "CLT CHANGED MY TRADING GAME Before CLT, I was jumping between strategies with no structure. The mentorship helped me focus, stay disciplined, and actually enjoy the process of trading. I finally feel like I’m",
    },
    {
      name: "Jasmine P",
      title: "India",
      description: "FINALLY FOUND WHAT WORKS I've tried multiple courses before CLT, but none were this structured. The mentors don’t just teach — they hold you accountable.",
    },
    {
      name: "Aarav M.",
      title: "India",
      description: "MENTORSHIP THAT’s ACTUALLY REAL Weekly reviews with my mentor made all the difference. I was making rookie mistakes, and now I catch them myself.",
    },
    {
      name: "Aarav M.",
      title: "India",
      description: "FINALLY FOUND WHAT WORKS I’ve tried multiple courses before CLT, but none were this structured. The mentors don’t just teach — they hold you accountable.",
    },
  ];
  return (
    <div className="relative   bg-primary -mt-40 md:min-h-[70vh] w-full  gap-10">
      <div className="md:px-20 px-5 flex items-center justify-center  py-20">
     
        <div className="w-full mt-20 md:px-10 px-2">
          <div className="px-5 mb-4 rounded-full w-fit font-semibold border border-white text-white text-center py-2">
            <p className="md:text-sm text-xs uppercase text-nowrap">
              Our Testimonials
            </p>
          </div>
          <h1 className="text-white text-4xl font-bold">
            We’re Happy to get Our Happy Customer Feedback
          </h1>
          <div className="mt-10">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={3}
              // pagination={{ clickable: true }}
              // navigation
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3, 
                },
              }}
              className="py-10"
            >
              {testimonials.map((card, index) => (
                <SwiperSlide
                  className="rounded-2xl bg-white w-full min-h-[23rem] py-6 px-5  gap-4 overflow-hidden"
                  key={index}
                >
                  <div className="flex w-full items-start justify-start px-4 flex-col gap-4">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src="/ts.png"
                        alt="testimonial"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h1 className="text-black text-2xl font-bold">
                          {card.name}
                        </h1>
                        <p className="text-black border-b-4 border-primary  w-fit py-2 text-sm">
                          {card.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((item, index) => (
                        <FaStar key={index} className="text-yellow-500 text-xl" />
                      ))}
                    </div>
                    <p className="text-black/90 border-l-4 border-primary px-4 text-lg">
                        {card.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="absolute z-0 top-0 left-0 w-full h-full flex items-center justify-center">
        <img
          src="https://clt-academy.com/wp-content/uploads/2025/08/trading-academy.webp"
          alt="awward"
          className="w-full opacity-5 object-cover  h-full "
        />
      </div>
    </div>
  );
};

export default Testimonials;
