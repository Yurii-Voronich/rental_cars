"use client";
import { useState } from "react";
import { useField } from "formik";
import css from "./CustomBrandSelector.module.css";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

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
        <span className={css.arrow}>
          {isOpen ? (
            <IoChevronDownSharp className={css.chevron} />
          ) : (
            <IoChevronUpSharp className={css.chevron} />
          )}
        </span>
      </button>

      {isOpen && (
        <div className={css.listWrapper} role="listbox">
          <ul className={css.listInner}>
            {brands.map((brand) => (
              <li
                key={brand}
                className={`${css.listItem} ${
                  field.value === brand ? css.active : ""
                }`}
                onClick={() => handleSelect(brand)}
                role="option"
                aria-selected={field.value === brand}
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomBrandSelector;
