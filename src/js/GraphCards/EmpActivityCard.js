import React from "react";
import "../../css/EmpActivity.css";
import Table from "@material-ui/core/Table";
import { TableHead, TableBody, TableRow, Paper } from "@material-ui/core";
import { TableCell } from "@material-ui/core";

const EmpActivity = props => (
  <Paper className="pap">
    <div className="ti">
      <p>Employee Activity</p>
    </div>
    <Table>
      <TableHead>
        <TableRow padding="none">
          <TableCell padding="none">Sales Rep</TableCell>
          <TableCell align="right" padding="dense">
            Ups
          </TableCell>
          <TableCell align="right" padding="dense">
            Calls
          </TableCell>
          <TableCell align="right" padding="dense">
            Emails
          </TableCell>
          <TableCell align="right" padding="dense">
            Texts
          </TableCell>
          <TableCell align="right" padding="dense">
            Tasks
          </TableCell>
          <TableCell align="right" padding="dense">
            ODue Tasks
          </TableCell>
          <TableCell align="right" padding="dense">
            Sold
          </TableCell>
          <TableCell align="right" padding="dense">
            Login Time
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map(row => (
          <TableRow key={row.key}>
            <TableCell align="center" padding="none">
              {row.name}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.Ups}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.Calls}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.Emails}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.Texts}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.Tasks}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.ODueTasks}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.Sold}
            </TableCell>
            <TableCell align="center" padding="none">
              {row.LoginTime}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default EmpActivity;
