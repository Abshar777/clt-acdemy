import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy & Data Protection",
  description:
    "CLT Academy privacy policy — how we collect, use and protect your personal data across our trading academy website and services.",
  path: "/privacy-policy",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
