import React from "react";
import { Post } from "@/types";
import "react-quill-new/dist/quill.snow.css";

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-700"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-6xl h-full max-h-[92vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,1)] animate-in slide-in-from-bottom-20 duration-700 custom-scrollbar group">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-[110] w-14 h-14 flex items-center justify-center bg-zinc-800/50 backdrop-blur-xl hover:bg-zinc-700 rounded-2xl text-zinc-400 hover:text-white transition-all shadow-2xl border border-zinc-700/50 active:scale-90"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <div className="relative aspect-[21/10] w-full overflow-hidden border-b border-zinc-800">
          <img
            src={post.photo}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>

          <div className="absolute bottom-12 left-8 md:left-16 right-16">
            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] bg-primary/50 600 text-white rounded-xl shadow-[0_10px_20px_-5px_primary]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="px-8 md:px-20 py-16">
          <div className="flex items-center space-x-6 mb-16 pb-16 border-b border-zinc-800/30">
            <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-500 border border-zinc-800 shadow-inner">
              <i className="fa-solid fa-user-shield text-3xl"></i>
            </div>
            <div>
              <p className="text-zinc-100 font-black text-xl uppercase tracking-tighter">
                {post.author}
              </p>
              <p className="text-zinc-600 text-xs font-black uppercase tracking-widest mt-1">
                Node Synced:{" "}
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className=" mx-auto">
            <div className="text-3xl text-white/80 bg-primary/5 rounded-xl p-4 font-light leading-relaxed mb-16 border-l-4 border-primary/50 500/30 pl-10 italic">
              {post.description}
            </div>

            {/* Safe rendering of Rich Text Content from Quill */}
            <div className="ql-editor rich-content max-w-none text-zinc-300 leading-[1.8] space-y-8 font-serif">
              <div
                // className=""
                // style={{ padding: 0 }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>

        {/* <div className="px-16 py-12 bg-zinc-950/80 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em] gap-4">
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-microchip text-zinc-800"></i>
              <span>Object ID: {post._id}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Schema Rev: {post.__v || 0}</span>
              <i className="fa-solid fa-code-branch text-zinc-800"></i>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PostModal;
