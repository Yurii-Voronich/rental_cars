import { Car } from "@/lib/api";
import css from "./CarModel.module.css";

interface CarModelProps {
  car: Car;
}
const CarModel = ({ car }: CarModelProps) => {
  return (
    <section className={css.section}>
      <h1 className={css.subtitle}>
        {`${car.brand}
      ${car.model},${car.year}`}
      </h1>
      <span className={css.id}>{`Id:${car.id.slice(0, 4)} `}</span>

      <p className={css.location}>
        <svg width={16} height={16}>
          <use href="/sprite.svg#location"></use>
        </svg>
        {car.address.split(",").slice(1, 3).join(",")}
        <span className={css.mileage}>{`Mileage: ${car.mileage}`}</span>
      </p>

      <p className={css.price}>{`${car.rentalPrice}$`}</p>
      <p className={css.description}>{car.description}</p>
    </section>
  );
};

export default CarModel;
