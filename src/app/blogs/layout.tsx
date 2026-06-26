import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Trading Blog — Forex, Stocks & Market Insights",
  description:
    "Read the CLT Academy blog for forex, stock and crypto trading insights, strategies and market updates from our UAE-based mentors.",
  path: "/blogs",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
