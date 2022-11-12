import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import { Home, PositionList, ResumeList } from "./views";
import { ControlBar, Navbar } from "./components";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <ControlBar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/positions" element={<PositionList />} />
              <Route path="/resumes" element={<ResumeList />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
