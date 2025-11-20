import CourseCard from "@/components/global/corseCard";
import React from "react";
import { courseData } from "@/const/data";

const CourseListing = () => {
 
  return (
    <div className="w-screen px-1 md:px-10 md:py-10 py-4 flex flex-col gap-4 ">
      <div className="flex flex-col mb-5 w-full  gap-2  items-center">
        <div className="px-5 md:mb-4 rounded-full w-fit font-semibold border border-primary text-primary text-center py-2">
          <p className="md:text-sm text-xs uppercase text-nowrap">Courses</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-black/90 capitalize text-center wow fadeInUp">
          CLT Academy Courses
        </h2>

        <p className="wow fadeInUp text-center md:w-[40%] w-full" data-wow-delay="0.2s">
          We offer a range of courses to help you learn trading and investing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:px-2 px-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2">
        {courseData.map((course, index) => (
          <CourseCard key={index} course={course} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
