import React from "react";
import "../../css/EmpActivity.css";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import {
  TableHead,
  TableBody,
  TableRow,
  Paper,
  TableCell
} from "@material-ui/core";
import "../Buttons/DeleteButton";
import "../Buttons/EditButton";
import EditBut from "../Buttons/EditButton";
import DelBut from "../Buttons/DeleteButton";
import InlineForm from "./InlineForm";
import InlineAdd from "./InlineAdd";

const styles = theme => ({
  root: {
    width: "50%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 850
  }
});

class GenericSheets extends React.PureComponent {
  render() {
    return (
      <div className="cont">
        <Paper className="pip">
          <div className="ti">
            <p>Inventory</p>
          </div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="none">Photo</TableCell>
                <TableCell align="right" padding="dense">
                  Stock#
                </TableCell>
                <TableCell align="right" padding="dense">
                  Year
                </TableCell>
                <TableCell align="right" padding="dense">
                  Make
                </TableCell>
                <TableCell align="right" padding="dense">
                  Model
                </TableCell>
                <TableCell align="right" padding="dense">
                  Trim
                </TableCell>
                <TableCell align="right" padding="dense">
                  VIN
                </TableCell>
                <TableCell align="right" padding="dense">
                  Age
                </TableCell>
                <TableCell align="right" padding="dense">
                  Web Price
                </TableCell>
                <TableCell align="right" padding="dense">
                  Lot Price
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.rows.map(row =>
                this.props.editing !== row.id ? (
                  <TableRow key={row.id}>
                    <TableCell align="left" padding="none">
                      {row.Photo !== undefined ? row.Photo : "No Photo"}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Stock}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Year}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Make}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Model}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Trim}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.VIN}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Age}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.WebPrice + " $"}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.LotPrice + " $"}
                    </TableCell>
                    <TableCell align="right" padding="none">
                      <div className={"buttons"}>
                        <EditBut
                          color={"#4D6F7F"}
                          handleClick={() => this.props.handleEdit(row.id)}
                        />
                        <DelBut
                          color={"#4D6F7F"}
                          handleClick={() => this.props.handleDel(row.id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  <InlineForm
                    row={row}
                    types={[
                      { type: "img", key: "Photo" },
                      { type: "number", key: "Stock" },
                      { type: "number", key: "Year" },
                      { type: "selectMake", key: "Make" },
                      { type: "selectModel", key: "Model" },
                      { type: "str", key: "Trim" },
                      { type: "number", key: "VIN" },
                      { type: "number", key: "Age" },
                      { type: "number", key: "WebPrice" },
                      { type: "number", key: "LotPrice" }
                    ]}
                    handleSave={obj => this.props.handleSave(obj)}
                    handleEdit={() => this.props.handleEdit(null)}
                  />
                )
              )}
              <InlineAdd
                row={this.props.rows.length}
                types={[
                  { type: "img", key: "Photo" },
                  { type: "number", key: "Stock" },
                  { type: "number", key: "Year" },
                  { type: "selectMake", key: "Make" },
                  { type: "selectModel", key: "Model" },
                  { type: "str", key: "Trim" },
                  { type: "number", key: "VIN" },
                  { type: "number", key: "Age" },
                  { type: "number", key: "WebPrice" },
                  { type: "number", key: "LotPrice" }
                ]}
                handleAdd={obj => this.props.handleAdd(obj)}
              />
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(GenericSheets);
