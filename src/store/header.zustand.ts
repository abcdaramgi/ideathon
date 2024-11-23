import { create } from "zustand";

interface HeaderState {
  isMain: boolean;
  setIsMain: (isMain: boolean) => void;
}

export const useHeader = create<HeaderState>((set) => ({
  isMain: false,
  setIsMain: (isMain: boolean) =>
    set((state) => {
      return {
        ...state,
        isMain: isMain,
      };
    }),
}));
