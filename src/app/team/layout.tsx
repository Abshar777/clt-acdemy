import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Our Expert Trading Mentors",
  description:
    "Meet the CLT Academy team — professional traders and mentors guiding students across the UAE to master forex, stocks and crypto trading.",
  path: "/team",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
