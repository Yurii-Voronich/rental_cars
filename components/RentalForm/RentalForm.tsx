import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import css from "./RentalForm.module.css";
import DateField from "../CustomCalendar/CustomCalendar";
import toast from "react-hot-toast";

export interface RentalFormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

const initialValues: RentalFormValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.string().required("Booking date is required"),
  comment: Yup.string(),
});

const RentalForm = () => {
  const handleSubmit = (
    values: RentalFormValues,
    actions: FormikHelpers<RentalFormValues>
  ) => {
    toast.success("Our manager will contact You");
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        {() => (
          <Form className={css.form}>
            <div className={css.inputBox}>
              <Field
                id="name"
                name="name"
                type="text"
                className={css.inputField}
                placeholder="Name*"
              />
              <ErrorMessage name="name">
                {(msg) => <span className={css.errorMessage}>{msg}</span>}
              </ErrorMessage>
            </div>

            <div className={css.inputBox}>
              <Field
                id="email"
                name="email"
                type="text"
                className={css.inputField}
                placeholder="Email*"
              />
              <ErrorMessage name="email">
                {(msg) => <span className={css.errorMessage}>{msg}</span>}
              </ErrorMessage>
            </div>

            <div className={css.inputBox}>
              <DateField />
              <ErrorMessage name="bookingDate">
                {(msg) => <span className={css.errorMessage}>{msg}</span>}
              </ErrorMessage>
            </div>

            <div className={css.inputBox}>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                className={`${css.inputField} ${css.textarea}`}
                placeholder="Comment"
              />
              <ErrorMessage name="comment">
                {(msg) => <span className={css.errorMessage}>{msg}</span>}
              </ErrorMessage>
            </div>

            <button type="submit" className={css.submitBtn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RentalForm;
