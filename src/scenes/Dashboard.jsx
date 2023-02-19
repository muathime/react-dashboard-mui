import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

function Dashboard() {
  return (
    <Box display="flex" justifyContent={"space-between"} sx={{ m: "0 20px 0 5px" }}>
      <Header title={"Dashboard"} subtitle={"Welcome to your Dashboard"} />
    </Box>
  );
}

export default Dashboard