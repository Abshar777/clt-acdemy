import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Trading Risk Disclaimer & Disclosure",
  description:
    "CLT Academy disclaimer — trading involves risk. Read our risk disclosure regarding educational content and trading in the UAE.",
  path: "/disclaimer",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
