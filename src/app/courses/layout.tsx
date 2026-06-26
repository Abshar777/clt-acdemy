import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Forex & Stock Trading Courses in Dubai",
  description:
    "Explore CLT Academy's expert-led forex, stock and crypto trading courses in Dubai & the UAE — beginner to advanced, with live mentorship and certification.",
  path: "/courses",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
