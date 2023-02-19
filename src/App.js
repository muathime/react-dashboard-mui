import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Bar from "./scenes/Bar";
import Calendar from "./scenes/Calendar";
import Contacts from "./scenes/Contacts";
import Dashboard from "./scenes/Dashboard";
import Faq from "./scenes/Faq";
import Form from "./scenes/Form";
import Geography from "./scenes/Geography";
import SidePanel from "./scenes/global/SidePanel";
import TopBar from "./scenes/global/TopBar";
import Invoices from "./scenes/Invoices";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import Team from "./scenes/Team";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidePanel />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/form" element={<Form />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/invoice" element={<Invoices />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/team" element={<Team />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
