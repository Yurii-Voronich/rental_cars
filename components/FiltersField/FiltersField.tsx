"use client";
import css from "./FiltersField.module.css";
import CustomBrandSelector from "../CustomBrandSelector/CustomBrandSelector";
import { Field, Form, Formik } from "formik";
import CustomPriceSelector from "../CustomPriceSelector/CustomPriceSelector";
import { fetchCars } from "@/lib/api";
interface FiltersFieldProps {
  brands: string[];
}
const FiltersField = ({ brands }: FiltersFieldProps) => {
  interface formFieldValues {
    brand: string;
    price: string;
    from: string;
    to: string;
  }
  const initialValues: formFieldValues = {
    brand: "",
    price: "",
    from: "",
    to: "",
  };

  const handleSubmit = async (values: formFieldValues) => {
    const cars = await fetchCars(values);
    console.log(cars);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="space-y-4 p-4">
          <div className={css.formWrapper}>
            <CustomBrandSelector
              name="brand"
              brands={brands}
              placeholder="Choose brand"
            />
            <CustomPriceSelector name="price" placeholder="Choose brand" />
            <Field
              id="from"
              type="text"
              name="from"
              // className={css.inputField}
              placeholder="From"
            />
            <Field
              id="from"
              type="text"
              name="to"
              // className={css.inputField}
              placeholder="From"
            />
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FiltersField;
