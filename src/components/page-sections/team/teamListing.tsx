"use client";
import CourseCard from "@/components/global/corseCard";
import TeamCard from "@/components/global/teamCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import t1 from "@/../public/t1.png";
import t2 from "@/../public/t2.png";
import t3 from "@/../public/t3.png";
import t4 from "@/../public/t4.png";
import t5 from "@/../public/t5.png";
import t6 from "@/../public/t6.png";
import t7 from "@/../public/t7.png";
import t8 from "@/../public/t8.png";
import t9 from "@/../public/t9.png";
import t10 from "@/../public/t10.png";
import t11 from "@/../public/t11.png";
import t12 from "@/../public/t12.png";
import t13 from "@/../public/t13.png";
import t14 from "@/../public/t14.png";
import t15 from "@/../public/t15.png";
import t16 from "@/../public/t16.png";
import t17 from "@/../public/t17.png";
import t18 from "@/../public/t18.jpeg";
import t19 from "@/../public/t19.png";
import t20 from "@/../public/t20.jpeg";
import t20_1 from "@/../public/t20-1.jpeg";
import t21 from "@/../public/t21.png";
import t22 from "@/../public/t22.png";
import t23 from "@/../public/t23.png";
import t24 from "@/../public/t24.png";
import t25 from "@/../public/t25.jpeg";
import t26 from "@/../public/t26.jpeg";
import t27 from "@/../public/t27.png";
import t29 from "@/../public/t29.jpeg";
import t30 from "@/../public/t30.jpeg";
import t31 from "@/../public/t31.jpeg";
import tc1 from "@/../public/t-c1.png";
import tc2 from "@/../public/t-c2.jpeg";
import t32 from "@/../public/t32.jpeg";
import t33 from "@/../public/t33.jpeg";
import t34 from "@/../public/t34.jpeg";
import t35 from "@/../public/t35.jpeg";
import t36 from "@/../public/t36.jpeg";
import t37 from "@/../public/t37.jpeg";
import t38 from "@/../public/t38.jpeg";
import t39 from "@/../public/t39.jpg";
import t40 from "@/../public/t40.jpeg";

const TeamListing = () => {
  const teamData = [
    {
      id: 1,
      name: "Fasir Khalid",
      type: "Advisors",
      role: "Director of Sales Performance",
      bio: "Director of Sales Performance",
      imageUrl: t1,
    },
    {
      id: 22,
      name: "Fathimath Thanseera",
      type: "Operations",
      role: "HR Manager",
      bio: "HR Manager",
      imageUrl: t30,
    },
    {
      id: 25,
      name: "Falja Nizar",
      type: "Customer Service",
      role: "Head Of Customer Service",
      bio: "Head Of Customer Service",
      imageUrl: t25,
    },
    {
      id: 18,
      name: "Edwin ",
      type: "Mentors",
      role: "Master Of Academics",
      bio: "Master Of Academics",
      imageUrl: t18,
    },
   
    {
      id: 2,
      name: "Mohammed Sanjeed",
      type: "Advisors",
      role: "Sales Team Leader",
      bio: "Sales Team Leader",
      imageUrl: t2,
    },
    {
      id: 4,
      name: "Ajmal Ummer",
      type: "Advisors",
      role: "Sales Team Leader",
      bio: "Sales Team Leader",
      imageUrl: t4,
    },
    

   


    {
      id: 40,
      name: "Aswin",
      type: "Mentors",
      role: "Senior mentor",
      bio: "Senior mentor",
      imageUrl: t40,
    },

    {
      id: 20,
      name: "Rafat ",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Trading mentor",
      imageUrl: t20,
    },
    {
      id: 28,
      name: "Nihal ",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Trading mentor",
      imageUrl: t20_1,
    },
    {
      id: 19,
      name: "Sriram",
      type: "Mentors",
      role: "Trading mentor",
      bio: "Trading mentor",
      imageUrl: t19,
    },
    {
      id: 30,
      name: "Nandana Jayakrishnan",
      type: "Operations",
      role: "HR Executive",
      bio: "HR Executive",
      imageUrl: t31,
    },
    {
      id: 32,
      name: "Ansa Abdul Offur",
      type: "Operations",
      role: "Assistant Manager in Marketing",
      bio: "Assistant Manager in Marketing",
      imageUrl: t32,
    },
    {
      id: 6,
      name: "Alwin Bose",
      type: "Advisors",
      role: "Assistant Team Leader",
      bio: "Assistant Team Leader",
      imageUrl: t6,
    },
    {
      id: 7,
      name: "Kiran",
      type: "Advisors",
      role: "Assistant Team Leader",
      bio: "Assistant Team Leader",
      imageUrl: t7,
    },
    {
      id: 13,
      name: "Aleesha",
      type: "Advisors",
      role: "Assistant Team Leader",
      bio: "Assistant Team Leader",
      imageUrl: t13,
    },
    {
      id: 14,
      name: "Bindhyasree",
      type: "Advisors",
      role: "Assistant Team Leader",
      bio: "Assistant Team Leader",
      imageUrl: t14,
    },
    {
      id: 23,
      name: "Mohamadaffan Memon",
      type: "Operations",
      role: "PR& Communication Executive",
      bio: "PR& Communication Executive",
      imageUrl: t23,
    },

    {
      id: 24,
      name: "Della Mariyam",
      type: "Customer Service",
      role: "Customer Relationship Manager",
      bio: "Customer Relationship Manager",
      imageUrl: t24,
    },

    {
      id: 26,
      name: "Nubin Nuhais",
      type: "Operations",
      role: "System Engineer",
      bio: "System Engineer",
      imageUrl: t26,
    },

    {
      id: 29,
      name: "Ifa Fathima",
      type: "Operations",
      role: "Data Engineer ",
      bio: "Data Engineer",
      imageUrl: t29,
    },

    {
      id: 3,
      name: "Rashida Pudhuveettil",
      type: "Advisors",
      role: "Business Development Manager",
      bio: "Business Development Manager",
      imageUrl: t3,
    },

    {
      id: 5,
      name: "Farsana Sirajudheen",
      type: "Advisors",
      role: "Business Development Manager",
      bio: "Business Development Manager",
      imageUrl: t5,
    },
   
    {
      id: 8,
      name: "Neha",
      type: "Advisors",
      role: "Academic Counsellor",
      bio: "Academic Counsellor",
      imageUrl: t8,
    },
    {
      id: 9,
      name: "Nidha Noushal",
      type: "Advisors",
      role: "Academic Counsellor",
      bio: "Academic Counsellor",
      imageUrl: t9,
    },
    {
      id: 10,
      name: "Arun Sivan",
      type: "Advisors",
      role: "Academic Counsellor",
      bio: "Academic Counsellor",
      imageUrl: t10,
    },
    {
      id: 11,
      name: "Maneesha",
      type: "Advisors",
      role: "Academic Counsellor",
      bio: "Academic Counsellor",
      imageUrl: t11,
    },
    {
      id: 12,
      name: "Karthika",
      type: "Customer Service",
      role: "Department of Customer Service",
      bio: "Department of Customer Service",
      imageUrl: t12,
    },
    
    {
      id: 16,
      name: "Kadeejath",
      type: "Customer Service",
      role: "Department of Customer Service",
      bio: "Department of Customer Service",
      imageUrl: t16,
    },
    {
      id: 17,
      name: "Muneera",
      type: "Advisors",
      role: "Academic Counsellor",
      bio: "Academic Counsellor",
      imageUrl: t17,
    },
    {
      id: 33,
      name: "VIVEK P",
      type: "Operations",
      role: "Social Media Coordinator",
      bio: "Social Media Coordinator",
      imageUrl: t33,
    },
    {
      id: 34,
      name: "Mrudhul K",
      type: "Operations",
      role: "Graphic Designer",
      bio: "Graphic Designer",
      imageUrl: t34,
    },
    {
      id: 35,
      name: "Vaishnav C",
      type: "Operations",
      role: "Content Writer",
      bio: "Content Writer",
      imageUrl: t35,
    },
    {
      id: 36,
      name: "Muhammed Rashid",
      type: "Operations",
      role: "Video editor",
      bio: "Video editor",
      imageUrl: t36,
    },
    {
      id: 37,
      name: "sayyid mursal",
      type: "Operations",
      role: "videographer",
      bio: "videographer",
      imageUrl: t37,
    },
    {
      id: 38,
      name: "Ardra B",
      type: "Operations",
      role: "Content writer",
      bio: "Content writer",
      imageUrl: t38,
    },

    //     Nandana Jayakrishnan
    // HR Executive

    // Fathimath Thanseera
    // HR Manager

    // Mohamadaffan Memon
    // PR& Communication Executive

    // Della Mariyam
    // Department of Customer Service

    // Falja Nizar
    // Head Of Customer Service

    // Nubin Nuhais
    // Information Technology Head

    // Quratul Ain
    // Department of Customer Service
  ];
  const mansgementData = [
    {
      id: 100,
      name: "MOHAMMED AQIB LAPIA",
      type: "Management",
      role: "Chief Executive Officer",
      bio: "Chief Executive Officer",
      imageUrl: tc1,
    },
    {
      id: 101,
      name: "MOHAMMED FAIZEEN",
      type: "Management",
      role: "Chief Operating Officer",
      bio: "Chief Operating Officer",
      imageUrl: tc2,
    },
  ];
  const tabs = [
    "All",
    "Management",
    "Mentors",
    "Customer Service",
    "Advisors",
    "Operations",
  ];
  const [currentTab, setCurrentTab] = useState("All");
  return (
    <div className="w-screen px-1 md:px-10 md:py-10 py-4 flex flex-col gap-4 ">
      <div className="flex w-full justify-between">
        <div className="flex flex-col mb-5 w-full  gap-2  items-center">
          <div className="px-5 md:mb-4 rounded-full w-fit font-semibold border border-primary text-primary text-center py-2">
            <p className="md:text-sm text-xs uppercase text-nowrap">Our Team</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black/90 capitalize text-center wow fadeInUp">
            Meet Our {currentTab} Team Members
          </h2>

          <p
            className="wow fadeInUp text-center md:w-[40%] w-full"
            data-wow-delay="0.2s"
          >
            Our team is a group of experts who are dedicated to helping you
            learn trading and investing.
          </p>
          <Tabs value={currentTab} onValueChange={setCurrentTab}>
            <TabsList>
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="grid mb-10 justify-center justify-self-center items-center w-full grid-cols-2 md:px-2 px-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2">
        {[...mansgementData,...teamData ]
          .filter((team) =>
            currentTab === "All" ? true : team.type === currentTab
          )
          .map((team, index) => (
            <>
              {team.type == "Management" ? (
                <div className={`lg:col-span-2 flex items-center ${index % 2 == 0 ? "justify-end" : "justify-start"} col-span-1`}>
                  <TeamCard key={index} member={team} />
                </div>
              ) : (
                <TeamCard key={index} member={team} />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default TeamListing;
