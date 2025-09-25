"use client";
import { useState } from "react";
import { useField } from "formik";
import css from "./CustomPriceSelector.module.css";

interface CustomBrandSelectorProps {
  name: string;
  placeholder?: string;
}

const CustomPriceSelector = ({
  name,
  placeholder = "Select brand",
}: CustomBrandSelectorProps) => {
  const [field, , helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (brand: string) => {
    helpers.setValue(brand);
    setIsOpen(false);
  };
  const price = ["30", "40", "50", "60", "70", "80"];
  return (
    <div className={css.container}>
      <button type="button" className={css.trigger} onClick={toggleDropdown}>
        {field.value || placeholder}
        <span className={css.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className={css.list}>
          {price.map((price) => (
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
