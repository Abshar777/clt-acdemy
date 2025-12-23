import PageTitleContainer from "@/components/global/pageTitleContainer";
import About from "@/components/page-sections/about/about";
import Qulites from "@/components/page-sections/about/qulites";
import Skills from "@/components/page-sections/about/Skills ";
import ContactFormMap from "@/components/page-sections/contact/contactMap";
import ContactUs from "@/components/page-sections/contact/contactUs";
import Faq from "@/components/page-sections/home/faq";
import Testimonials from "@/components/page-sections/home/testimonials";
import React from "react";
import tTitle from "@/../public/title/2.jpeg"

const page = () => {
  return (
    <>
      <PageTitleContainer
        title="Contact Us"
        imgSrc={tTitle}
        description="We are a team of traders and investors who are dedicated to helping you learn trading and investing."
      />
      <ContactFormMap />
      <ContactUs />
      <Faq />
      <Testimonials />
    </>
  );
};

export default page;
