import { create } from "zustand";

interface Filters {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

interface FiltersStore {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  clearFilters: () => void;
}

const initialFilters: Filters = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

export const useFiltersStore = create<FiltersStore>((set) => ({
  filters: initialFilters,
  setFilters: (filters) => set({ filters }),
  clearFilters: () => set({ filters: initialFilters }),
}));
