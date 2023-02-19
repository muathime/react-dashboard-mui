import { useTheme } from "@emotion/react";
import { BarChartOutlined, CalendarTodayOutlined, ContactPageOutlined, Dashboard, DashboardOutlined, LiveHelpOutlined, ManageAccountsOutlined, MapsHomeWorkOutlined, MenuOutlined, PeopleAltOutlined, PieChartOutlineOutlined, Receipt, ReceiptOutlined, StackedLineChartOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

// MENU ITEM COMPONENT
const Item = ({ title, to, selected, setSelected, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem active={selected === title} icon={icon} onClick={()=>setSelected(title)} style={{color: colors.grey[100]}}>
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
};

function SidePanel() {
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: colors.primary[400],
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                ml={0}
                mr={0}
                //   alignItems="center"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  Telemetry
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}

            {!isCollapsed && (
              <Box mb="1px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={"center"}
                  sx={{ mt: 1 }}
                >
                  <img
                    src={"../../assets/pp.jpg"}
                    alt="profile"
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%", cursor: "pointer" }}
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Antony Munyao
                  </Typography>
                  <Typography
                    variant="h6"
                    color={colors.greenAccent[400]}
                    fontWeight="600"
                    sx={{ m: "3px 0 0 0" }}
                  >
                    Fleet Owner
                  </Typography>
                </Box>
              </Box>
            )}
          </MenuItem>

          <Item
            icon={<DashboardOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Dashboard"
            to="/"
          />

          <Typography variant='h6' color={colors.greenAccent[200]} sx={{m: "10px 0 5px 15px"}}>
            Data
          </Typography>

          <Item
            icon={<PeopleAltOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Manage team"
            to="/team"
          />
          <Item
            icon={<ContactPageOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Contact Information"
            to="/contact"
          />
          <Item
            icon={<ReceiptOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Invoice Balances"
            to="/invoice"
          />

          <Typography variant='h6' color={colors.greenAccent[200]} sx={{m: "10px 0 5px 15px"}}>
            Pages
          </Typography>

          <Item
            icon={<ManageAccountsOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Manage profile"
            to="/form"
          />
          <Item
            icon={<CalendarTodayOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Calendar"
            to="/calendar"
          />
          <Item
            icon={<LiveHelpOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="FAQs Page"
            to="/faq"
          />

          <Typography variant='h6' color={colors.greenAccent[200]} sx={{m: "10px 0 5px 15px"}}>
            Charts
          </Typography>

          <Item
            icon={<BarChartOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Bar Chart"
            to="/bar"
          />
          <Item
            icon={<PieChartOutlineOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Pie Chart"
            to="/pie"
          />

          <Item
            icon={<StackedLineChartOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Line Chart"
            to="/line"
          />

          <Item
            icon={<MapsHomeWorkOutlined />}
            selected={selected}
            setSelected={setSelected}
            title="Geographical Chart"
            to="/geography"
          />

          <Box paddingLeft={isCollapsed ? undefined : "10%"}></Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default SidePanel;
