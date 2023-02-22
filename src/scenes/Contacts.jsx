import {
  ChildCareOutlined,
  ElderlyOutlined,
} from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import Header from "../components/Header";
import { tokens } from "../theme";
import { mockDataContacts } from "../data/mockData";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = mockDataContacts;
  const columns = [
    { field: "id", headerName: "ID",},
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
      field: "age",
      headerName: "Age",
      renderCell: ({ row: { age } }) => {
        return (
          <Box
            padding="10px"
            width="100%"
            borderRadius="4px"
            display="flex"
            justifyContent="space-between"
            backgroundColor={
              age > 18
                ? colors.greenAccent[500]
                : colors.greenAccent[700]
            }
          >
            <Typography>{age}</Typography>
            {age < 18 && <ChildCareOutlined />}
            {age > 17 && <ElderlyOutlined />}
          </Box>
        );
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "registrarId",
      headerName: "Registrar Code",
      flex: 1,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  return (
    <Box m="20px">
      <Header title={"Contacts"} subtitle={"Reach us for support"} />
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
          "& .MuiCheckbox-colorPrimary": {
            color: colors.greenAccent[700],
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

export default Contacts;
