import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import OurGoalPage from "./pages/OurGoalPage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SupportPage from "./pages/SupportPage";
import TeamPage from "./pages/TeamPage";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4F000B",
      },
      secondary: {
        main: "#FF7F51",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      h4: {
        fontSize: "2rem",
        fontWeight: 700,
        color: "#720026",
        marginBottom: "0.75rem",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/goal" element={<OurGoalPage />} />
          <Route path="/supportus" element={<SupportPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
