"use client";
import CourseCard from "@/components/global/corseCard";
import TeamCard from "@/components/global/teamCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";

const TabListing = ({
  duration,
  title,
  tabs,
}: {
  duration: string;
  title: string;
  tabs: {
    label: string;
    valeTitel: string;
    valeTitel2: string;
    valeTitel3: string;
    values: string[];
    values2: string[];
    values3: string[];
  }[];
}) => {
  //   Muhammed Musthafa
  // Trading Mentor

  // Sirjaf Siddik
  // Trading Mentor

  // Amal krishna
  // Trading Mentor

  const [currentTab, setCurrentTab] = useState(tabs[0].label);
  const [currentTabData, setCurrentTabData] = useState(tabs[0]);
  useEffect(() => {
    setCurrentTabData(tabs.find((tab) => tab.label === currentTab) || tabs[0]);
  }, [currentTab]);
  return (
    <div className="w-screen px-1 md:px-10 md:py-10 py-4 flex flex-col gap-4 ">
      <div className="flex w-full justify-between">
        <div className="flex flex-col mb-5 w-full  gap-2 md:px-0 px-2  items-center">
          <div className="px-5 md:mb-4 rounded-full w-fit font-semibold border border-primary text-primary text-center py-2">
            <p className="md:text-sm text-xs uppercase text-nowrap">
              {duration}
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black/90 capitalize text-center wow fadeInUp">
            {title}
          </h2>

          <Tabs value={currentTab} onValueChange={setCurrentTab}>
            <TabsList className="mt-2 mb-4  flex flex-wrap gap-2">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.label}
                  className="text-md "
                  onClick={() => setCurrentTab(tab.label)}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="md:w-[80%] w-full min-h-[30vh] px-10 py-5 rounded-lg bg-gray-100 flex flex-col gap-2 ">
            <h3 className="text-xl font-bold text-black/60 capitalize">
              {currentTabData.valeTitel}
            </h3>
            {currentTabData.values?.length > 0 && currentTabData.values.map((value, index) => (
              <p key={index} className="text-md font-semibold text-black/50">
                {value}
              </p>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-xl font-bold text-black/60 capitalize">
                {currentTabData.valeTitel2}
              </h3>
              {currentTabData.values2?.length > 0 && currentTabData.values2.map((value, index) => (
                <p key={index} className="text-md font-semibold text-black/50">
                  {value}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-2 ">
              <h3 className="text-xl font-bold text-black/60 capitalize">
                {currentTabData.valeTitel3}
              </h3>
              {currentTabData.values3?.length > 0 && currentTabData.values3.map((value, index) => (
                <p key={index} className="text-md font-semibold text-black/50">
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabListing;
