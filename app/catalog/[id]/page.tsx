import { fetchCarById } from "@/lib/api";
import Image from "next/image";
import css from "./CarDetails.module.css";
import RentalForm from "@/components/RentalForm/RentalForm";
import RentalConditions from "@/components/RentalConditions/RentalConditions";
import Accessories from "@/components/Accessories/Accessories";
import CarModel from "@/components/CarModel/CarModel";
import CarSpecifications from "@/components/Car Specifications/CarSpecifications";

interface PageProps {
  params: Promise<{ id: string }>;
}

const CarDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const car = await fetchCarById(id);

  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          width={640}
          height={512}
          alt="car image"
          className={css.image}
          priority
        />

        <RentalForm />
      </div>
      <div className={css.dataWrapper}>
        <CarModel car={car} />
        <RentalConditions car={car} />
        <CarSpecifications car={car} />
        <Accessories car={car} />
      </div>
    </div>
  );
};

export default CarDetailsPage;
