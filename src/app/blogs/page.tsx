import PageTitleContainer from "@/components/global/pageTitleContainer";
import BlogsListing from "@/components/page-sections/blogs/blogsListing";
import { getBlogPosts } from "@/lib/getBlogPosts";
import React from "react";

const page = async () => {
  const posts = await getBlogPosts();
  return (
    <>
      <PageTitleContainer
        title="Blogs"
        description="Everything beyond the classroom, build to give you the edge the market respects."
      />
      <BlogsListing initialPosts={posts} />

      <div className="mb-20"></div>
    </>
  );
};

export default page;
