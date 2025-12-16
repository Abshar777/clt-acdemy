"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import DSC04938 from "@/../public/gallery/DSC04938.jpg";
import DSC05215 from "@/../public/gallery/DSC05215.jpg";
import DSC05234 from "@/../public/gallery/DSC05234.jpg";
import DSC05244 from "@/../public/gallery/DSC05244.jpg";
import DSC05298 from "@/../public/gallery/DSC05298.jpg";
import DSC05394 from "@/../public/gallery/DSC05394.jpg";
import DSC05396 from "@/../public/gallery/DSC05396.jpg";
import DSC05416 from "@/../public/gallery/DSC05416.jpg";
import DSC05476 from "@/../public/gallery/DSC05476.jpg";
import DSC05499 from "@/../public/gallery/DSC05499.jpg";
import DSC05502 from "@/../public/gallery/DSC05502.jpg";
import DSC05506 from "@/../public/gallery/DSC05506.jpg";
import DSC05510 from "@/../public/gallery/DSC05510.jpg";
import DSC05510_1 from "@/../public/gallery/DSC05510 (1).jpg";
import DSC05520 from "@/../public/gallery/DSC05520.jpg";
import DSC05532 from "@/../public/gallery/DSC05532.jpg";
import DSC05543 from "@/../public/gallery/DSC05543.jpg";
import DSC05585 from "@/../public/gallery/DSC05585.jpg";
import DSC05802 from "@/../public/gallery/DSC05802.jpg";
import DSC05900 from "@/../public/gallery/DSC05900.jpg";
import DSC06214 from "@/../public/gallery/DSC06214.jpg";
import DSC06300 from "@/../public/gallery/DSC06300.jpg";

const images = [
  { src: DSC04938, alt: "", height: 400 },
  { src: DSC05215, alt: "", height: 500 },
  { src: DSC05234, alt: "", height: 350 },
  { src: DSC05244, alt: "", height: 450 },
  { src: DSC05298, alt: "", height: 380 },
  { src: DSC05394, alt: "", height: 420 },
  { src: DSC05396, alt: "", height: 480 },
  { src: DSC05510, alt: "", height: 360 },
  { src: DSC05416, alt: "", height: 440 },
  { src: DSC05476, alt: "", height: 440 },
  { src: DSC05499, alt: "", height: 440 },
  { src: DSC05502, alt: "", height: 440 },
  { src: DSC05506, alt: "", height: 440 },
  { src: DSC05510_1, alt: "", height: 440 },
  { src: DSC05520, alt: "", height: 440 },
  { src: DSC05532, alt: "", height: 440 },
  { src: DSC05543, alt: "", height: 440 },
  { src: DSC05585, alt: "", height: 440 },
  { src: DSC05802, alt: "", height: 440 },
  { src: DSC05900, alt: "", height: 440 },
  { src: DSC06214, alt: "", height: 440 },
  { src: DSC06300, alt: "", height: 440 },
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
