"use client";
import { Form, Formik } from "formik";
import CustomBrandSelector from "../CustomBrandSelector/CustomBrandSelector";
import CustomPriceSelector from "../CustomPriceSelector/CustomPriceSelector";
import css from "./FiltersField.module.css";
import { useFiltersStore } from "@/store/filterStore";
import NumberFormatField from "../NumberField/NumberFeild";

interface FiltersFieldProps {
  brands: string[];
}

interface InitialValues {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

const FiltersField = ({ brands }: FiltersFieldProps) => {
  const { setFilters, clearFilters } = useFiltersStore();

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const handleSubmit = (values: InitialValues) => {
    const hasValue = Object.values(values).some((v) => v && v.trim() !== "");
    if (!hasValue) return;
    clearFilters();
    setFilters(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor="brand" className={css.label}>
            Car brand
          </label>
          <CustomBrandSelector
            name="brand"
            brands={brands}
            placeholder="Choose brand"
          />
        </div>

        <div className={css.field}>
          <label htmlFor="rentalPrice" className={css.label}>
            Price/ 1 hour
          </label>
          <CustomPriceSelector name="rentalPrice" placeholder="Choose price" />
        </div>

        <div className={css.field}>
          <label htmlFor="minMileage" className={css.label}>
            Сar mileage / km
          </label>
          <div className={css.milesFieldWrapper}>
            <div className={css.inputWrapper}>
              <span className={css.prefix}>From</span>
              <NumberFormatField
                name="minMileage"
                className={`${css.LeftMilesField} ${css.withPrefix}`}
              />
            </div>

            <div className={css.inputWrapper}>
              <span className={css.prefix}>To</span>
              <NumberFormatField
                name="maxMileage"
                className={`${css.RightMilesField} ${css.withPrefix}`}
              />
            </div>
          </div>
        </div>

        <button type="submit" className={css.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FiltersField;
