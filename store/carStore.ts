import { create } from "zustand";
import { Car } from "@/lib/api";

interface CarStore {
  allCars: Car[];
  setCars: (cars: Car[], append?: boolean) => void; // append = true -> додати, false -> замінити
  clearCars: () => void;
}

export const useCarStore = create<CarStore>((set) => ({
  allCars: [],

  setCars: (cars, append = false) =>
    set((state) => ({
      allCars: append
        ? [
            ...state.allCars,
            ...cars.filter((c) => !state.allCars.some((x) => x.id === c.id)),
          ]
        : cars,
    })),

  clearCars: () => set({ allCars: [] }),
}));
