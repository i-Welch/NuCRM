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
import { Formik, ErrorMessage } from "formik";
import SaveBut from "../Buttons/SaveButton";
import CancelBut from "../Buttons/CancelButton";

var helper = function(obj, handleChange, data) {
  switch (obj.type) {
    case "number":
      return (
        <div className="tFields">
          <TextField
            type="number"
            name={obj.key}
            value={data}
            onChange={handleChange}
          />
          <ErrorMessage name={obj.key} component="div" />
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
          <TextField
            type="text"
            name={obj.key}
            value={data}
            onChange={handleChange}
          />
          <ErrorMessage name={obj.key} component="div" />
        </div>
      );
    case "select":
      return (
        <div className="tFields">
          <Select
            value={data}
            type="email"
            name={obj.key}
            onChange={handleChange}
          >
            <MenuItem value="Acura">Acura</MenuItem>
            <MenuItem value="Aston Martin">Aston Martin</MenuItem>
            <MenuItem value="Audi">Audi</MenuItem>
          </Select>
          <ErrorMessage name={obj.key} component="div" />
        </div>
      );
    default:
      return Error;
  }
};

const createValues = function(array, data) {
  let temp = {};
  temp.id = data.id;
  array.forEach(element => {
    temp[element.key] = data[element.key];
  });
  return temp;
};

class InlineForm extends React.PureComponent {
  render() {
    return (
      <Formik initialValues={createValues(this.props.types, this.props.row)}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <TableRow>
            {this.props.types.map(type => (
              <TableCell padding="none" align="right" key={type.key}>
                <form>{helper(type, handleChange, values[type.key])}</form>
              </TableCell>
            ))}
            <TableCell padding="none" align="right">
              <div className="buttons">
                <SaveBut
                  color="#4D6F7F"
                  handleClick={() => this.props.handleSave(values)}
                />
                <CancelBut
                  color="#4D6F7F"
                  handleClick={() => this.props.handleEdit()}
                />
              </div>
            </TableCell>
          </TableRow>
        )}
      </Formik>
    );
  }
}
export default InlineForm;
