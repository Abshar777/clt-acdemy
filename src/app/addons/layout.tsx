import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = pageMetadata({
  title: "Trading Add-Ons, Tools & Resources",
  description:
    "Boost your trading with CLT Academy add-ons — premium tools, indicators, resources and downloads built for forex and stock traders in the UAE.",
  path: "/addons",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
