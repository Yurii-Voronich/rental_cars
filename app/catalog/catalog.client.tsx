"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/api";

const CatalogClient = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchCars(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading cars</p>;

  return (
    <div>
      {data?.cars?.map((car) => (
        <div key={car.id}>
          <p>
            {car.brand} {car.model} ({car.year})
          </p>
        </div>
      ))}
    </div>
  );
};

export default CatalogClient;
