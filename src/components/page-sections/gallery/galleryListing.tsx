"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import img1 from "@/../public/gallery/img1.jpg";
import img2 from "@/../public/gallery/img2.jpg";
import img3 from "@/../public/gallery/img3.jpg";
import img4 from "@/../public/gallery/img4.jpg";
import img5 from "@/../public/gallery/img5.jpg";
import img6 from "@/../public/gallery/img6.jpg";
import img7 from "@/../public/gallery/img7.jpg";
import img8 from "@/../public/gallery/img8.jpg";
import img9 from "@/../public/gallery/img9.jpg";
import img10 from "@/../public/gallery/img10.jpg";
import img11 from "@/../public/gallery/img11.jpg";
import img12 from "@/../public/gallery/img12.jpg";
import img13 from "@/../public/gallery/img13.jpg";
import img14 from "@/../public/gallery/img14.jpg";
import img15 from "@/../public/gallery/img15.jpg";
import img16 from "@/../public/gallery/img16.jpg";
import img17 from "@/../public/gallery/img17.jpg";
import img18 from "@/../public/gallery/img18.jpg";
import img19 from "@/../public/gallery/img19.jpg";
import img20 from "@/../public/gallery/img20.jpg";
import img21 from "@/../public/gallery/img21.jpg";
import img22 from "@/../public/gallery/img22.jpg";


const images = [
  { src: img1, alt: "", height: 400 },
  { src: img2, alt: "", height: 500 },
  { src: img3, alt: "", height: 350 },
  { src: img4, alt: "", height: 450 },
  { src: img5, alt: "", height: 380 },
  { src: img6, alt: "", height: 420 },
  { src: img7, alt: "", height: 480 },
  { src: img8, alt: "", height: 360 },
  { src: img9, alt: "", height: 440 },
  { src: img10, alt: "", height: 440 },
  { src: img11, alt: "", height: 440 },
  { src: img12, alt: "", height: 440 },
  { src: img13, alt: "", height: 440 },
  { src: img14, alt: "", height: 440 },
  { src: img15, alt: "", height: 440 },
  { src: img16, alt: "", height: 440 },
  { src: img17, alt: "", height: 440 },
  { src: img18, alt: "", height: 440 },
  { src: img19, alt: "", height: 440 },
  { src: img20, alt: "", height: 440 },
  { src: img21, alt: "", height: 440 },
  { src: img22, alt: "", height: 440 },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="columns-1 md:p-[4rem] p-[1rem] gap-4 space-y-4 md:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="group relative break-inside-avoid overflow-hidden rounded-lg"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative overflow-hidden"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full transition-all duration-300 object-cover"
              style={{ height: image.height }}
              placeholder="blur"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            >
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-sm font-medium text-white"
                >
                  {image.alt}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
