import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

// Self-referential canonical for each service detail page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return pageMetadata({
    title: "Trading Service Details",
    description:
      "Service details and offerings from CLT Academy — trading education and mentorship in the UAE.",
    path: `/services/${id}`,
  });
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
