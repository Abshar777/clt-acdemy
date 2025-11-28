"use client";
import CourseTitleCotainer from "@/components/global/courseTitleCotainer";
import PageTitleContainer from "@/components/global/pageTitleContainer";
import About from "@/components/page-sections/about/about";
import Qulites from "@/components/page-sections/about/qulites";
import Skills from "@/components/page-sections/about/Skills ";
import CourseFaq from "@/components/page-sections/course/CourseFaq";
import CourseListing from "@/components/page-sections/course/courseListing";
import TabListing from "@/components/page-sections/course/tabListing";
import Cta from "@/components/page-sections/home/cta";
import Faq from "@/components/page-sections/home/faq";
import Testimonials from "@/components/page-sections/home/testimonials";
import { MainPortion } from "@/components/page-sections/services/mainPortion";
import { Button } from "@/components/ui/button";
import { courseData, courseDetails } from "@/const/data";
import { services } from "@/const/services";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const page = () => {
  const router = useRouter();
  const { id } = useParams();
  const course = services[id as keyof typeof courseDetails];
  return (
    <>
      <CourseTitleCotainer
        badge="Services"
        title={course?.name || "Our Services"}
        description={""}
      />
      <MainPortion
        title={course?.mainTitle || "Our Services"}
        description={course?.desc || ""}
        subtitle={course?.q || ""}
      />
      <Cta />
      <Faq />
      <Testimonials />
      {/* <div className="mb-20"></div> */}
    </>
  );
};

export default page;
