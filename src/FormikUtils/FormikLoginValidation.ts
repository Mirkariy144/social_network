import { FormikErrors } from "formik";

export interface FormikLoginValidation {
  email: string;
  password: string;
}

export const validateEmail = (values: FormikLoginValidation) => {
  const errors: FormikErrors<FormikLoginValidation> = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
