import React from "react";
import "../Buttons/CancelButton";
import "../Buttons/SaveButton";
import {
  Button,
  TableRow,
  TableCell,
  TextField,
  Select
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import "../../css/EmpActivity.css";
import { Formik, Form, ErrorMessage } from "formik";
import SaveBut from "../Buttons/SaveButton";
import CancelBut from "../Buttons/CancelButton";

var helper = function(type) {
  switch (type) {
    case "num":
      return (
        <div className="tFields">
          <Formik
            initialValues={{ email: "" }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[\d]+$/.test(values.email)) {
                errors.email = "No Num";
              }
              return errors;
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form>
                <TextField
                  type="number"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" />
              </Form>
            )}
          </Formik>
        </div>
      );
    case "img":
      return (
        <Button variant="outlined" color="primary">
          Upload
        </Button>
      );
    case "str":
      return (
        <div className="tFields">
          <Formik
            initialValues={{ email: "" }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextField type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </Form>
            )}
          </Formik>
        </div>
      );
    case "sel":
      return (
        <div className="tFields">
          <Formik
            initialValues={{ email: "" }}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form>
                <Select
                  value={values.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                >
                  <MenuItem value="Acura">Acura</MenuItem>
                  <MenuItem value="Aston Martin">Aston Martin</MenuItem>
                  <MenuItem value="Audi">Audi</MenuItem>
                </Select>
                <ErrorMessage name="email" component="div" />
              </Form>
            )}
          </Formik>
        </div>
      );
    default:
      return Error;
  }
};

const InlineForm = props => (
  <TableRow>
    {props.types.map(type => (
      <TableCell padding="none" align="right">
        <form>{helper(type)}</form>
      </TableCell>
    ))}
    <TableCell padding="none" align="right">
      <div className="buttons">
        <SaveBut color="#4D6F7F" />
        <CancelBut color="#4D6F7F" />
      </div>
    </TableCell>
  </TableRow>
);

export default InlineForm;
