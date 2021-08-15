import React, { useState, useContext } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

import { DataGrid } from "@material-ui/data-grid";

//import DeleteIcon from '@material-ui/icons/Delete';
import AppCard from "../Common/AppCard";
import CustomerContext from "../../data/CustomersContext";

//const deleteUserHandler  = (event) => {
//  console.log("+ deleteUserHandler:" + event);
//};
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "first_name",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "last_name",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
    editable: true,
  },
];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const CustomersTable = (props) => {
  console.log("CustomersTable");

  const [pageSize, setPageSize] = useState(20);
  const customerCtx = useContext(CustomerContext);

  //const classes = useStyles();
  return (
    <AppCard className={"AppCard_Table"}>
      <DataGrid
        //rows={props.usersListData}
        rows={customerCtx.data}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
      />
    </AppCard>
  );
};

export default CustomersTable;
