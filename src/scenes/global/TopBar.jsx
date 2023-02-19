import React from 'react'


import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent={'space-between'} p={2}>
      <Box sx={{backgroundColor: colors.primary[400]}}>
        <InputBase sx={{flex: 1, ml: 3}} placeholder='Search'/>
        <IconButton type='button' sx={{p: 1}}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box>
        <IconButton type='button' onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? (
         <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          ) }
        </IconButton>
        <IconButton type='button'>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton type='button'>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton type='button'>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default TopBar