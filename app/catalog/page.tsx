"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CarsResponse, Car, fetchBrands, fetchCars } from "@/lib/api";
import FiltersField from "@/components/FiltersField/FiltersField";
import CarsGrid from "@/components/CarsGrid/CarsGrid";
import css from "./catalog.module.css";

const CatalogPage = () => {
  const limit = "12";

  const [filters, setFilters] = useState({
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [allCars, setAllCars] = useState<Car[]>([]);

  const brands = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

  const { data, isLoading } = useQuery<CarsResponse, Error>({
    queryKey: ["cars", filters, currentPage],
    queryFn: () => fetchCars({ ...filters, page: currentPage, limit }),
  });

  useEffect(() => {
    if (!data) return;

    if (currentPage === 1) {
      setAllCars(data.cars);
    } else {
      setAllCars((prev) => [...prev, ...data.cars]);
    }
  }, [data, currentPage]);

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setAllCars([]);
  };

  return (
    <div className={css.container}>
      {brands.data && (
        <FiltersField brands={brands.data} onSubmit={handleFiltersChange} />
      )}

      {allCars.length > 0 && <CarsGrid data={allCars} />}

      {data && data.page < data.totalPages && (
        <button
          className={css.showMoreButton}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Show More"}
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
