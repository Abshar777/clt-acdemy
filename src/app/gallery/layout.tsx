import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Gallery — Events, Workshops & Student Wins",
  description:
    "Browse the CLT Academy gallery — trading workshops, seminars, events and student success moments from our Dubai trading academy.",
  path: "/gallery",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
