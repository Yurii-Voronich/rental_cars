import { Car } from "@/lib/api";
import React from "react";
import css from "./CarSpecifications.module.css";
interface CarSpecificationsProps {
  car: Car;
}
const CarSpecifications = ({ car }: CarSpecificationsProps) => {
  return (
    <section>
      <h2 className={css.subtitle}>CarSpecifications</h2>
      <div className={css.infoWrapper}>
        <p className={css.info}>
          <svg className={css.icon} width={16} height={16}>
            <use href="/sprite.svg#calendar" />
          </svg>
          {`Year: ${car.year}`}
        </p>
        <p className={css.info}>
          <svg className={css.icon} width={16} height={16}>
            <use href="/sprite.svg#car" />
          </svg>
          {`Type: ${car.type}`}
        </p>
        <p className={css.info}>
          <svg className={css.icon} width={16} height={16}>
            <use href="/sprite.svg#fuel-pump" />
          </svg>
          {`Fuel Consumption: ${car.fuelConsumption}`}
        </p>
        <p className={css.info}>
          <svg className={css.icon} width={16} height={16}>
            <use href="/sprite.svg#gear" />
          </svg>
          {`Engine size: ${car.engineSize}`}
        </p>
      </div>
    </section>
  );
};

export default CarSpecifications;
