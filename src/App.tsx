import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import {
  HomePage,
  ProjectsPage,
  SupportPage,
  TeamPage,
  SignUpPage,
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
        marginBottom: "0.85rem",
      },
      body1: {
        fontSize: "0.9rem",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 800,
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
          <Route path="/supportus" element={<SupportPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/joinus" element={<SignUpPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
