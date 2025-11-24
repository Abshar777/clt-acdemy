import { create } from "zustand";

interface UIStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}));