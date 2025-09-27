"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCarById } from "@/lib/api";
import css from "./CarDetails.module.css";
import Image from "next/image";
import RentalForm from "@/components/RentalForm/RentalForm";
import RentalConditions from "@/components/RentalConditions/RentalConditions";
import CarSpecifications from "@/components/Car Specifications/CarSpecifications";
import Accessories from "@/components/Accessories/Accessories";
import CarModel from "@/components/CarModel/CarModel";
const CarDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isSuccess } = useQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id),
    refetchOnMount: false,
  });
  return (
    <>
      {isSuccess && (
        <div className={css.container}>
          <div className={css.imageWrapper}>
            <Image
              src={data.img}
              width={640}
              height={512}
              alt="car image"
              className={css.image}
            />
            <RentalForm />
          </div>
          <div className={css.dataWrapper}>
            <CarModel car={data} />
            <RentalConditions car={data} />
            <CarSpecifications car={data} />
            <Accessories car={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetailsClient;
