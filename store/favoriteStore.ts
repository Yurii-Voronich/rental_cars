import { Car } from "@/lib/api";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
  favorites: Car[];
  addFavorite: (car: Car) => void;
  removeFavorite: (carId: string) => void;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (car) => {
        const exists = get().favorites.find((c) => c.id === car.id);
        if (!exists) {
          set({ favorites: [...get().favorites, car] });
        }
      },
      removeFavorite: (carId) =>
        set({
          favorites: get().favorites.filter((c) => c.id !== carId),
        }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorites",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
