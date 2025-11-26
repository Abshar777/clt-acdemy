"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

type FlipCardProps = {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  className?: string;
};

export default function FlipCard({
  title = "Card Title",
  icon = <FaArrowRight />,
  description = "This is the description shown after the card flips.",
  className = "",
}: FlipCardProps) {
  return (
    <div
      className={`inline-block  w-full h-full ${className}`}
      // perspective must be on the parent so the 3D transform is visible
      style={{ perspective: "1000px" }}
    >
      <div
        // inner wrapper: preserve-3d and transition the rotation on hover
        className={`relative w-full h-full  transition-transform duration-700 group`}
      >
        {/* Use a nested wrapper that actually performs the rotation on hover */}
        <div
          className={`w-full h-full bg-primary cursor-pointer rounded-lg shadow-lg [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateX(180deg)]`}
        >
          {/* Front face */}
          <div
            className={`absolute inset-0 overflow-hidden rounded-lg flex flex-col items-center justify-center p-4 bg-primary`}
            style={{ backfaceVisibility: "hidden" }}
          >
            
            <h3 className="md:text-2xl text-lg text-center text-white font-bold">{title}</h3>
            {/* <p className="text-xs text-white/90 mt-1">Hover to see details</p> */}
          </div>

          {/* Back face */}
          <div
            className={`absolute inset-0 rounded-lg p-4 flex flex-col items-start justify-center bg-primary`}
            // rotate the back face so it shows after the wrapper rotates
            style={{
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <p className="text-md text-center text-white font-semibold">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

