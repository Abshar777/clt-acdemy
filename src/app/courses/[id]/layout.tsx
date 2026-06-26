import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

// Self-referential canonical for each course detail page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return pageMetadata({
    title: "Trading Course Details",
    description:
      "Course details, curriculum and enrollment for CLT Academy's trading programs in the UAE.",
    path: `/courses/${id}`,
  });
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
