import React from "react";
import { Calendar, User, Folder, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}
interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="bg-white mb-12 flex flex-col group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Meta Data */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer">
          <Calendar size={16} className="text-red-500" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer">
          <User size={16} className="text-red-500" />
          <span>by {post.author}</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer">
          <Folder size={16} className="text-red-500" />
          <span>{post.category}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={16} className="text-red-500" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors cursor-pointer leading-tight">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

      {/* Enroll Button */}
      <div>
        <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-gray-800 font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 group">
          Enroll Now
          <ArrowRight
            size={18}
            className="text-red-600 group-hover:text-white transition-colors"
          />
        </button>
      </div>
    </article>
  );
};
