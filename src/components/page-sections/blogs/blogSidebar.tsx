"use client";
import React, { useEffect, useState } from "react";
import { Search, ChevronRight, Calendar } from "lucide-react";
import { BLOG_POSTS, CATEGORIES, RECENT_NEWS } from "@/const/data";
import { Post } from "@/types";

export const BlogSidebar: React.FC = () => {
  const [tags, setTags] = useState<Record<string, number>>({});
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(true);

  // Sync with Backend

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
      );
      if (response.ok) {
        const data = await response.json();
        setRecentPosts(data.slice(0, 3));
      } else {
        setRecentPosts(BLOG_POSTS.slice(0, 3));
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setRecentPosts(BLOG_POSTS);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchTags = async () => {
    console.log("FETCH TAGS ", process.env.NEXT_PUBLIC_BACKEND_URL);
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/tags`,
      );
      if (response.ok) {
        const data = await response.json();
        setTags(data);
        console.log("TAGS", data);
      } else {
        setTags(CATEGORIES);
        console.log("TAGS from local", CATEGORIES);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setTags(CATEGORIES);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);
  return (
    <aside className="w-full space-y-10">
      {/* Search Widget */}
      <div className="bg-white">
        <form className="relative flex items-center">
          <input
            type="text"
            placeholder="Search here ..."
            className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-gray-600"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 text-red-600 hover:text-red-700"
          >
            <Search size={20} />
          </button>
        </form>
      </div>

      {/* Categories Widget */}
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Categories</h3>
          <div className="w-8 h-1 bg-red-600 rounded-full"></div>
        </div>
        <ul className="space-y-4">
          {Object.keys(tags).map((cat, index) => (
            <li key={index} className="group">
              <a
                href={`?category=${cat}`}
                className="flex items-center justify-between text-gray-600 group-hover:text-red-600 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <ChevronRight
                    size={16}
                    className="text-gray-400 group-hover:text-red-600 transition-colors"
                  />
                  {cat}
                </span>
                <span className="text-sm text-gray-500">({tags[cat]})</span>
              </a>
              <div className="h-px bg-gray-100 mt-3 w-full group-last:hidden"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent News Widget */}
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Recent News</h3>
          <div className="w-8 h-1 bg-red-600 rounded-full"></div>
        </div>
        <div className="space-y-6">
          {recentPosts.map((news) => (
            <div key={news._id} className="flex gap-4 group cursor-pointer">
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                <img
                  src={news.photo}
                  alt={news.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
                  <Calendar size={12} className="text-red-500" />
                  <span>{news.createdAt}</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                  {news.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
