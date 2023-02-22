import {
  HourglassBottomOutlined,
  HourglassTopOutlined,
} from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import Header from "../components/Header";
import { tokens } from "../theme";
import { mockDataInvoices } from "../data/mockData";
import moment from "moment/moment";
import { date } from "yup";

function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = mockDataInvoices;
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Cost (Ksh)",
      renderCell: ({row:{cost}}) => {
        return <Typography>{(cost * 126).toFixed(2)}</Typography>
      },
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "date",
      headerName: "Due date",
      flex: 1,
      renderCell: ({ row: { date } }) => {
        return (
          <Box
            padding="10px"
            width="100%"
            borderRadius="4px"
            display="flex"
            justifyContent="space-between"
            backgroundColor={
              moment(date).isAfter(moment().format("MM-DD-YYYY"), "day")
                ? colors.greenAccent[500]
                : colors.redAccent[700]
            }
          >
            <Typography>{date}</Typography>
            {moment(date).isAfter(moment().format("MM-DD-YYYY"), "day") ? (
              <HourglassTopOutlined />
            ) : (
              <HourglassBottomOutlined />
            )}
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="10px 5px 0 5px">
      <Header title={"Invoices"} subtitle={"Manage Invoices"} />
      <Box
        height="75vh"
        m="5px 0 0 0"
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.grey[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
          "& .MuiDataGrid-main": {
            border: "none",
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            // border: "none",
          },
          "& .name-column--cell": {
            color: colors.grey[100],
          },
          "& .MuiDataGrid-row Mui-selected": {
            maxHeight: "none !important",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[700],
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

export default Invoices