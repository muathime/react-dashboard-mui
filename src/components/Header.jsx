import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'

function Header({title, subtitle}) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box sx={{ml: '20px', mb: '20px'}}>
      <Typography variant="h5" fontWeight={"bold"} color={colors.grey[300]}>
        {title}
      </Typography>
      <Typography fontSize={12} fontWeight={"bold"} color={colors.greenAccent[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header