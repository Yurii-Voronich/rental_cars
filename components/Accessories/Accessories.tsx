import { Car } from "@/lib/api";
import css from "./Accessories.module.css";
interface AccessoriesProps {
  car: Car;
}
const Accessories = ({ car }: AccessoriesProps) => {
  return (
    <section>
      <h2 className={css.subtitle}>RentalConditions</h2>
      <ul className={css.list}>
        {car.accessories.map((acc, idx) => (
          <li key={idx} className={css.item}>
            <svg className={css.icon} width={16} height={16}>
              <use href="/sprite.svg#check-circle" />
            </svg>
            <span className={css.condition}>{acc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Accessories;
