"use client";
import { BLOG_POSTS } from "@/const/data";
import React from "react";
import { BlogPostCard } from "./blogCard";
import { BlogSidebar } from "./blogSidebar";

const BlogsListing = () => {
  return (
    <section className="container mt-20 min-h-screen mx-auto px-4 max-w-7xl pb-20">
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
        <div className="lg:w-2/3">
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-28">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>      
  );
};

export default BlogsListing;
