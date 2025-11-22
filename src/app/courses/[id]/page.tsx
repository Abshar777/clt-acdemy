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
import { Button } from "@/components/ui/button";
import { courseData, courseDetails } from "@/const/data";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const page = () => {
  const router = useRouter();
  const { id } = useParams();
  const course = courseDetails[id as keyof typeof courseDetails];
  return (
    <>
      <CourseTitleCotainer
        title={course?.name || "Our Courses"}
        description={
          course?.description ||
          "We offer a range of courses to help you learn trading and investing."
        }
      />
      <CourseFaq
        faqItems={course?.faq || []}
        subtitle={course?.detSubtitle || ""}
        title={course?.detTitle || ""}
        description={course?.detDesc || ""}
      />
      <TabListing
        duration={course?.duration || ""}
        title={course?.name || ""}
        tabs={(course?.tabs as any) || []}
      />
      <div className="flex w-full mb-10 md:px-10 px-1 justify-between items-center">
        <Button
          onClick={() => router.push(`/courses/${Number(id) - 1}`)}
          className="bg-gray-200 hover:text-white text-black"
          disabled={Number(id) === 1}
        >
          <FaArrowLeft />
          { "Previous Course"}
        </Button>
        <Button>Enroll Now</Button>
        <Button
          className="bg-gray-200 hover:text-white text-black"
          disabled={Number(id) === course?.tabs.length}
          onClick={() => router.push(`/courses/${Number(id) + 1}`)}
        >
          {"Next Course"}
          <FaArrowRight />
        </Button>
      </div>
      <Cta />

      <div className="mb-20"></div>
    </>
  );
};

export default page;
