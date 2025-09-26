import { create } from "zustand";
import { Car } from "@/lib/api";

interface CarStore {
  allCars: Car[];
  setCars: (cars: Car[]) => void;
  addCars: (cars: Car[]) => void;
  clearCars: () => void;
}

export const useCarStore = create<CarStore>((set) => ({
  allCars: [],
  setCars: (cars) => set({ allCars: cars }),
  addCars: (cars) => set((state) => ({ allCars: [...state.allCars, ...cars] })),
  clearCars: () => set({ allCars: [] }),
}));
