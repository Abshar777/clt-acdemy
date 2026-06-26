import { pageMetadata } from "@/const/seo";
import { Metadata } from "next";
import React from "react";

// Self-referential canonical for each blog post so it is not
// canonicalised to the homepage. The [slug] segment is the post title.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = decodeURIComponent(slug);
  return pageMetadata({
    title,
    path: `/blogs/${slug}`,
  });
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
