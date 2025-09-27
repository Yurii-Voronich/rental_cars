"use client";

import { useState, useEffect } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { CarsResponse, fetchBrands, fetchCars } from "@/lib/api";
import FiltersField from "@/components/FiltersField/FiltersField";
import CarsGrid from "@/components/CarsGrid/CarsGrid";
import css from "./catalog.module.css";
import { useFiltersStore } from "@/store/filterStore";
import { useCarStore } from "@/store/carStore";

const CatalogPage = () => {
  const limit = "12";
  const { allCars, addCars, setCars, clearCars } = useCarStore();
  const { filters } = useFiltersStore();
  const [currentPage, setCurrentPage] = useState(1);

  const brands = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

  const { data, isLoading } = useQuery<CarsResponse, Error>({
    queryKey: ["cars", filters, currentPage],
    queryFn: () => fetchCars({ ...filters, page: currentPage, limit }),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!data) return;

    if (currentPage === 1) {
      setCars(data.cars);
    } else {
      addCars(data.cars.filter((car) => !allCars.some((c) => c.id === car.id)));
    }
  }, [data, currentPage, setCars, addCars]);

  useEffect(() => {
    setCurrentPage(1);
    clearCars();
  }, [filters, clearCars]);

  return (
    <div className={css.container}>
      {brands.data && <FiltersField brands={brands.data} />}

      {allCars.length > 0 && <CarsGrid data={allCars} />}

      {data && data.page < data.totalPages && (
        <button
          className={css.showMoreButton}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
