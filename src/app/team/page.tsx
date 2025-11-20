import PageTitleContainer from "@/components/global/pageTitleContainer";
import About from "@/components/page-sections/about/about";
import Qulites from "@/components/page-sections/about/qulites";
import Skills from "@/components/page-sections/about/Skills ";
import CourseListing from "@/components/page-sections/course/courseListing";
import Faq from "@/components/page-sections/home/faq";
import Testimonials from "@/components/page-sections/home/testimonials";
import TeamListing from "@/components/page-sections/team/teamListing";
import React from "react";

const page = () => {
  return (
    <>
      <PageTitleContainer
        title="Our Team"
        description="Our team is a group of experts who are dedicated to helping you learn trading and investing."
      />

      <TeamListing />
    </>
  );
};

export default page;
