import { Box } from '@mui/material';
import React from 'react'
import Header from '../components/Header'
import PieChart from '../components/PieChart';

function Pie() {
  return (
    <Box>
      <Header title={"Pie Chart"} subtitle={"Data presentation in Pie Chart"} />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default Pie