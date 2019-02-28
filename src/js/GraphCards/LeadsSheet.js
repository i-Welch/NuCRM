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

class LeadsSheet extends React.PureComponent {
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
                <TableCell align="left" padding="dense">
                  Customer
                </TableCell>
                <TableCell align="right" padding="dense">
                  Last Contact
                </TableCell>
                <TableCell align="right" padding="dense">
                  Status
                </TableCell>
                <TableCell align="right" padding="dense">
                  Source
                </TableCell>
                <TableCell align="right" padding="dense">
                  Age
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.rows.map(row =>
                this.props.editing !== row.id ? (
                  <TableRow key={row.id}>
                    <TableCell align="left" padding="dense">
                      {row.Customer}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.LastContact.getDate()}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Status}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.Source}
                    </TableCell>
                    <TableCell align="right" padding="dense">
                      {row.LastContact.getMinutes - new Date().getMinutes}
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
                      { type: "str", key: "Customer" },
                      { type: "date", key: "LastContact" },
                      { type: "selectStatus", key: "Status" },
                      { type: "selectSource", key: "Source" },
                      { type: "null", key: "null" }
                    ]}
                    handleSave={obj => this.props.handleSave(obj)}
                    handleEdit={() => this.props.handleEdit(null)}
                  />
                )
              )}
              <InlineAdd
                row={this.props.rows.length}
                types={[
                  { type: "str", key: "Customer" },
                  { type: "date", key: "LastContact" },
                  { type: "selectStatus", key: "Status" },
                  { type: "selectSource", key: "Make" },
                  { type: "str", key: "Source" }
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
export default withStyles(styles)(LeadsSheet);
