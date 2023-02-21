import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Header from "../components/Header";
import { tokens } from "../theme";
import { mockDataTeam } from "../data/mockData";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const rows = mockDataTeam;
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
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "access",
      headerName: "Access level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            padding="10px"
            width="70%"
            borderRadius="4px"
            display="flex"
            justifyContent="space-between"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[500]
                : colors.greenAccent[700]
            }
          >
            <Typography>{access}</Typography>

            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title={"Teams"} subtitle={"Manage your teams here"} />
      <Box height='75vh' m='45px 0 0 0'>
        <DataGrid
          columns={columns}
          rows={rows}
          // pageSize={5}
          // rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </Box>
    </Box>
  );
}

export default Team;