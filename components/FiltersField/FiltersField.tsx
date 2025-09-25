"use client";
import { Field, Form, Formik } from "formik";
import CustomBrandSelector from "../CustomBrandSelector/CustomBrandSelector";
import CustomPriceSelector from "../CustomPriceSelector/CustomPriceSelector";
import css from "./FiltersField.module.css";
interface FiltersFieldProps {
  brands: string[];
  onSubmit: (filters: {
    brand: string;
    rentalPrice: string;
    minMileage: string;
    maxMileage: string;
  }) => void;
}
interface InitialValues {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}
const FiltersField = ({ brands, onSubmit }: FiltersFieldProps) => {
  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const handleSubmit = (values: InitialValues) => {
    onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor="brand" className={css.label}>
            {"Car brand"}
          </label>

          <CustomBrandSelector
            name="brand"
            brands={brands}
            placeholder="Choose brand"
          />
        </div>
        <div className={css.field}>
          <label htmlFor="rentalPrice" className={css.label}>
            {"Price/ 1 hour"}
          </label>
          <CustomPriceSelector name="rentalPrice" placeholder="Choose price" />
        </div>
        <div className={css.field}>
          <label htmlFor="minMileage" className={css.label}>
            {"Сar mileage / km"}
          </label>
          <div className={css.MilesFieldsWrapper}>
            <Field
              id="from"
              name="minMileage"
              placeholder="From"
              className={css.LeftMilesField}
            />
            <Field
              id="to"
              name="maxMileage"
              placeholder="To"
              className={css.RightMilesField}
            />
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
