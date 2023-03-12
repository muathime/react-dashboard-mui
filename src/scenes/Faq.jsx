import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";
import Header from "../components/Header";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";

function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      m={"0 15px 0 15px"}
      sx={{
        "& .MuiAccordionSummary-root": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiAccordion-region": {
          // backgroundColor: colors.blueAccent[200],
        },
      }}
    >
      <Header title="FAQs" subtitle="Check this out for self support" />

      {/* PANEL 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{ color: colors.greenAccent[300], fontWeight: "bold" }}
          >
            Q: What is a fleet management platform?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: colors.primary[100], fontStyle: "italic" }}>
            A: A fleet management platform is a software system designed to help
            businesses manage their fleet of vehicles. It typically includes
            features such as vehicle tracking, maintenance scheduling, driver
            management, and fuel monitoring.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* PANEL 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{ color: colors.greenAccent[300], fontWeight: "bold" }}
          >
            Q: What are the key features of a fleet management platform?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: colors.primary[100], fontStyle: "italic" }}>
            A: Some key features of a fleet management platform include vehicle
            tracking, maintenance scheduling, driver management, fuel
            monitoring, reporting and analytics, and integration with other
            software systems.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* PANEL 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{ color: colors.greenAccent[300], fontWeight: "bold" }}
          >
            Q: How does a fleet management platform help businesses save money?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: colors.primary[100], fontStyle: "italic" }}>
            A: A fleet management platform can help businesses save money in a
            number of ways. By tracking vehicle usage and maintenance schedules,
            it can help prevent breakdowns and reduce repair costs. It can also
            help businesses optimize routes and reduce fuel consumption, leading
            to cost savings over time.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* PANEL 4 */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{ color: colors.greenAccent[300], fontWeight: "bold" }}
          >
            Q: Is a fleet management platform easy to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: colors.primary[100], fontStyle: "italic" }}>
            A: Yes, most fleet management platforms are designed to be
            user-friendly and easy to use. Many offer intuitive interfaces and
            customizable dashboards to make it easy for businesses to access the
            information they need.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
