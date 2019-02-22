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

const InventorySheet = props => (
  <div className="cont">
    <Paper className="pip">
      <div className="ti">
        <p>Inventory</p>
      </div>
      <Table>
        <TableHead>
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
        </TableHead>
        <TableBody>
          {props.rows.map(row =>
            props.editing !== row.id ? (
              <TableRow>
                <TableCell align="none" padding="none">
                  {row.Photo}
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
                    <EditBut color={"#4D6F7F"} />
                    <DelBut color={"#4D6F7F"} />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <InlineForm
                row={row}
                types={[
                  "img",
                  "num",
                  "num",
                  "sel",
                  "sel",
                  "str",
                  "num",
                  "num",
                  "num",
                  "num"
                ]}
              />
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default withStyles(styles)(InventorySheet);
