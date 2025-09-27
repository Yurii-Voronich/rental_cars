import { useField } from "formik";
import React, { useState, useEffect, useRef } from "react";

interface NumberFormatFieldProps {
  name: string;
  className?: string;
  placeholder?: string;
}

const NumberFormatField = ({
  name,
  className,
  placeholder,
}: NumberFormatFieldProps) => {
  const [field, , helpers] = useField(name);
  const [display, setDisplay] = useState(field.value || "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (field.value === "") {
      setDisplay("");
    } else {
      setDisplay(formatNumber(field.value));
    }
  }, [field.value]);

  const formatNumber = (value: string) => {
    // прибираємо все, крім цифр
    const numericValue = value.replace(/\D/g, "");
    if (numericValue === "") return "";
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // вставляємо кому
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, ""); // чистий рядок
    if (/^\d*$/.test(rawValue)) {
      // дозволяємо тільки цифри або пустий рядок
      helpers.setValue(rawValue); // Formik зберігає чистий рядок
      setDisplay(formatNumber(rawValue)); // UI форматування
    }
  };

  return (
    <input
      ref={inputRef}
      value={display}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default NumberFormatField;
