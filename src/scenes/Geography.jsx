import { Box } from "@mui/material";
import React from "react";
import GeographyChart from "../components/GeographyChart";
import Header from "../components/Header";

function Geography() {
  return (
    <Box>
      <Header title={"Data Maps"} subtitle={"Geographical data distribution"} />
      <Box>
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Geography;
