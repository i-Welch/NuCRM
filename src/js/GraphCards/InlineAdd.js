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
import AddButton from "../Buttons/AddButton";
import hash from "object-hash";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

var helper = function(obj, handleChange, data, setFieldValue) {
  switch (obj.type) {
    case "number":
      return (
        <div className="tFields">
          <TextField
            type="number"
            name={obj.key}
            value={data || ""}
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
            value={data || ""}
            onChange={handleChange}
          />
          <ErrorMessage name={obj.key} component="div" />
        </div>
      );
    case "selectMake":
      return (
        <div className="tFields">
          <Select
            value={data || ""}
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
    case "selectModel":
      return (
        <div className="tFields">
          <Select
            value={data || ""}
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
    case "selectStatus":
      return (
        <div className="tFields">
          <Select
            value={data || ""}
            type="email"
            name={obj.key}
            onChange={handleChange}
          >
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Negotiation">Negotiation</MenuItem>
            <MenuItem value="Lost">Lost</MenuItem>
          </Select>
          <ErrorMessage name={obj.key} component="div" />
        </div>
      );
    case "selectSource":
      return (
        <div className="tFields">
          <Select
            value={data || ""}
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
    case "date":
      return (
        <div className="tFields">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              value={data || ""}
              name={obj.key}
              onChange={e => setFieldValue(obj.key, e)}
            />
          </MuiPickersUtilsProvider>
        </div>
      );
    default:
      return Error;
  }
};

const createValues = function(array, data) {
  let temp = {};
  array.forEach(element => {
    if (element.type === "date") {
      temp[element.key] = new Date();
    } else {
      temp[element.key] = data[element.key];
    }
  });
  return temp;
};

class InlineAdd extends React.PureComponent {
  Add(obj) {
    let temp = { id: hash(obj), ...obj };
    this.props.handleAdd(temp);
  }
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
          isSubmitting,
          setFieldValue
        }) => (
          <TableRow>
            {this.props.types.map(type => (
              <TableCell padding="none" align="right" key={type.key}>
                <form>
                  {helper(type, handleChange, values[type.key], setFieldValue)}
                </form>
              </TableCell>
            ))}
            <TableCell padding="none" align="right">
              <div className="buttons">
                <AddButton handleClick={() => this.Add(values)} />
              </div>
            </TableCell>
          </TableRow>
        )}
      </Formik>
    );
  }
}
export default InlineAdd;
