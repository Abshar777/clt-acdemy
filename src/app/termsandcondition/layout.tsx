import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "CLT Academy terms and conditions — the rules and policies governing use of our trading academy website, courses and services in the UAE.",
  path: "/termsandcondition",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
