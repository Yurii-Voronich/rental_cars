"use client";
import { useState } from "react";
import { useField } from "formik";
import css from "./CustomPriceSelector.module.css";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

interface CustomPriceSelectorProps {
  name: string;
  placeholder?: string;
}

const CustomPriceSelector = ({
  name,
  placeholder = "Select price",
}: CustomPriceSelectorProps) => {
  const [field, , helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (price: string) => {
    helpers.setValue(price); // Formik зберігає чисте число
    setIsOpen(false);
  };

  const priceOptions = ["30", "40", "50", "60", "70", "80"];

  return (
    <div className={css.container}>
      <button
        type="button"
        className={`${css.trigger} ${field.value ? css.hasValue : ""}`}
        onClick={toggleDropdown}
      >
        {field.value ? `To $${field.value}` : placeholder}
        <span className={css.arrow}>
          {isOpen ? (
            <IoChevronDownSharp className={css.chevron} />
          ) : (
            <IoChevronUpSharp className={css.chevron} />
          )}
        </span>
      </button>

      {isOpen && (
        <ul className={css.list}>
          {priceOptions.map((price) => (
            <li
              key={price}
              className={`${css.listItem} ${
                field.value === price ? css.active : ""
              }`}
              onClick={() => handleSelect(price)}
            >
              {price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomPriceSelector;
