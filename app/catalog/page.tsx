import FiltersField from "@/components/FiltersField/FiltersField";
import { fetchBrands } from "@/lib/api";

import CatalogCleint from "./catalog.client";

const catalog = async () => {
  const brands = await fetchBrands();

  return (
    <div>
      <FiltersField brands={brands} />

      <CatalogCleint />
    </div>
  );
};

export default catalog;
