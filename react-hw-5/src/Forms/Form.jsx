import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { clearShoppingCart } from "../redux/actions/index";
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';

function Checkout({ products }) {
  const dispatch = useDispatch();
  const Validation = Yup.object().shape({
    
  firstName: Yup.string().min(3, "Less than 3 characters.").max(15, "More than 15 characters.").required("First name is required"),
  lastName: Yup.string().min(3, "Less than 3 characters.").max(15, "More than 15 characters.").required("Last name is required"),
  age: Yup.number().min(18, "You must older than 18").required("Age is required"),
  address: Yup.string().min(10, "Less than 10 characters").required("Address is required"),
  phoneNumber: Yup.string().required("Please enter a valid '(###) ###-##-##' format phone number"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          address: '',
          phoneNumber: '',
        }}
        validationSchema={Validation}
        onSubmit={(values) => {
          console.log(values);
          console.log(products);
          dispatch(clearShoppingCart());
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">User's first name</label>
            <Field type="text" name="firstName" id="firstName" />
            <ErrorMessage className="error-message" name="firstName" component="div" />

            <label htmlFor="lastName">User's last name</label>
            <Field type="text" name="lastName" id="lastName" />
            <ErrorMessage className="error-message" name="lastName" component="div" />

            <label htmlFor="age">User's age</label>
            <Field type="number" name="age" id="age" />
            <ErrorMessage className="error-message" name="age" component="div" />

            <label htmlFor="address">Delivery Address</label>
            <Field type="text" name="address" id="address" />
            <ErrorMessage className="error-message" name="address" component="div" />

            <label htmlFor="phoneNumber">Mobile phone number</label>
            <Field name="phoneNumber">
              {({ field }) => (
                <PatternFormat
                  {...field}
                  format="(###) ###-##-##"
                  mask="_"
                  placeholder="(123) 456-78-90"
                />
              )}
            </Field>
            <ErrorMessage className="error-message" name="phoneNumber" component="div" />

<br></br>
            <button className="check" type="submit" disabled={isSubmitting}>
              Checkout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Checkout;
