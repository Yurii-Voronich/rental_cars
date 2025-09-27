"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CarsResponse, fetchBrands, fetchCars } from "@/lib/api";
import FiltersField from "@/components/FiltersField/FiltersField";
import CarsGrid from "@/components/CarsGrid/CarsGrid";
import css from "./catalog.module.css";
import { useFiltersStore } from "@/store/filterStore";
import { useCarStore } from "@/store/carStore";

const CatalogPage = () => {
  const limit = "12";
  const { allCars, setCars } = useCarStore();
  const { filters } = useFiltersStore();
  const [currentPage, setCurrentPage] = useState(1);

  const brandsQuery = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

  const carsQuery = useQuery<CarsResponse, Error>({
    queryKey: ["cars", filters, currentPage] as const,
    queryFn: () => fetchCars({ ...filters, page: currentPage, limit }),
    staleTime: 5000,
  });

  const { data, isLoading } = carsQuery;

  useEffect(() => {
    if (!data) return;

    if (currentPage === 1) {
      setCars(data.cars);
    } else {
      setCars(data.cars, true);
    }
  }, [data, currentPage, setCars]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const isEmpty = !isLoading && allCars.length === 0 && currentPage === 1;

  return (
    <div className={css.container}>
      {isLoading && allCars.length === 0 && (
        <p className={css.text}>Loading...</p>
      )}

      {brandsQuery.data && <FiltersField brands={brandsQuery.data} />}

      {allCars.length > 0 && <CarsGrid data={allCars} />}

      {isEmpty && (
        <p className={css.text}>Sorry, no cars found by your request</p>
      )}

      {allCars.length > 0 && data && currentPage < data.totalPages && (
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
