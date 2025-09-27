import { Car } from "@/lib/api";
import css from "./RentalConditions.module.css";
interface RentalConditionProps {
  car: Car;
}
const RentalConditions = ({ car }: RentalConditionProps) => {
  return (
    <section>
      <h2 className={css.subtitle}>RentalConditions</h2>
      <ul className={css.list}>
        {car.rentalConditions.map((condition, idx) => (
          <li key={idx} className={css.item}>
            <svg className={css.icon} width={16} height={16}>
              <use href="/sprite.svg#check-circle" />
            </svg>
            <span className={css.condition}>{condition}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RentalConditions;
