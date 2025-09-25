"use client";
import { useState } from "react";
import { useField } from "formik";
import css from "./CustomBrandSelector.module.css";

interface CustomBrandSelectorProps {
  name: string;
  brands: string[];
  placeholder?: string;
}

const CustomBrandSelector = ({
  name,
  brands,
  placeholder = "Select brand",
}: CustomBrandSelectorProps) => {
  const [field, , helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (brand: string) => {
    helpers.setValue(brand);
    setIsOpen(false);
  };

  return (
    <div className={css.container}>
      <button type="button" className={css.trigger} onClick={toggleDropdown}>
        {field.value || placeholder}
        <span className={css.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className={css.list}>
          {brands.map((brand) => (
            <li
              key={brand}
              className={`${css.listItem} ${
                field.value === brand ? css.active : ""
              }`}
              onClick={() => handleSelect(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomBrandSelector;
