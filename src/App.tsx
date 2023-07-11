import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import {
  HomePage,
  OurGoalPage,
  ProjectsPage,
  SupportPage,
  TeamPage,
} from "./pages";
import { Header, NavBar } from "./components";
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
    breakpoints: {
      values: {
        xs: 450,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
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
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/goal" element={<OurGoalPage />} />
          <Route path="/supportus" element={<SupportPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
