import { create } from "zustand";

export const useSceneStore = create((set) => ({
  mixer: null,
  setMixer: (mixer) => set({ mixer }),
}))