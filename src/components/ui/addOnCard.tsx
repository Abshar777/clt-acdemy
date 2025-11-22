import React from "react";


    
export default function MarketInsightCard({icon, title, description}: {icon:React.ReactNode, title: string, description: string}) {
  return (
    <div className="min-h-[220px] flex items-start justify-center p-3 ">
      <div className="relative max-w-lg w-full">
        {/* overlapping circle icon */}
        <div className="absolute -top-6 left-6 w-20 h-20 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center shadow-md border-4 border-white overflow-hidden">
          {/* use the uploaded image as the icon; it will fill the circle */}
         {icon}
        </div>

        {/* main card */}
        <div className="bg-primary rounded-xl shadow-lg p-8 pt-16">
          <h3 className="text-2xl font-extrabold text-white">{title}</h3>

          <p className="mt-4 text-white/90 font-semibold leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
