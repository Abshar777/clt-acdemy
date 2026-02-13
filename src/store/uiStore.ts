import { create } from "zustand";
import { Post } from "@/types";

interface UIStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  post: Post | null;
  setPost: (post: Post | null) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
  post: null,
  setPost: (post) => set({ post }),

}));