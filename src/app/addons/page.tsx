import PageTitleContainer from "@/components/global/pageTitleContainer";
import About from "@/components/page-sections/about/about";
import Qulites from "@/components/page-sections/about/qulites";
import Skills from "@/components/page-sections/about/Skills ";
import AddOnsCardListing from "@/components/page-sections/addOns/addOnsCardListing";
import SalesSection from "@/components/page-sections/addOns/sales";
import TraderStackSection from "@/components/page-sections/addOns/trraderStackSection";
import ContactFormMap from "@/components/page-sections/contact/contactMap";
import ContactUs from "@/components/page-sections/contact/contactUs";
import Faq from "@/components/page-sections/home/faq";
import Testimonials from "@/components/page-sections/home/testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <PageTitleContainer
        title="YOUR COMPETETIVE
ADVANTAGE STARTS HERE"
        description="Everything beyond the classroom, build to give you the edge the market respects."
      />
      <AddOnsCardListing />
      <SalesSection />
      <TraderStackSection />
      {/* <ContactUs /> */}

      <div className="mb-20"></div>
    </>
  );
};

export default page;
