import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "About CLT Academy — UAE's Leading Trading Institute",
  description:
    "Learn about CLT Academy, the UAE's trusted trading institute in Dubai. Our mission, mentors and proven record training thousands of traders across the Emirates.",
  path: "/about",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
