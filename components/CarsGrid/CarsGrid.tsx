import Image from "next/image";
import css from "./CarsGrid.module.css";
import { Car } from "@/lib/api";
import Link from "next/link";
interface CarsGridProps {
  data: Car[];
}
const CarsGrid = ({ data }: CarsGridProps) => {
  return (
    <ul className={css.list}>
      {data.map((car, index) => (
        <li key={`${car.id}-${index}`}>
          <Image src={car.img} alt={car.description} width={276} height={268} />
          <div className={css.carModelDescription}>
            <span>{car.brand} </span>
            <span className={css.model}>{`${car.model},`}</span>
            <span>{car.year}</span>
            <span className={css.price}>{`${car.rentalPrice}$`}</span>
          </div>
          <div className={css.address}>
            <span className={css.part}>
              {car.address.split(",").slice(1, 2).toString().trim()}
            </span>
            <span className={css.part}>
              {car.address.split(",").slice(2, 3).toString().trim()}
            </span>
            <span className={css.part}>{car.rentalCompany}</span>
          </div>
          <div className={css.type}>
            <span className={css.part}>{car.type}</span>
            <span className={css.part}>
              {`${car.mileage.toLocaleString("ru-RU")} km`}
            </span>
          </div>
          <Link href={`catalog/${car.id}`}>learn more</Link>
        </li>
      ))}
    </ul>
  );
};

export default CarsGrid;
