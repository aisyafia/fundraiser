import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import OurGoalPage from "./pages/OurGoalPage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SupportPage from "./pages/SupportPage";

function App() {
  return (
    <Container>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/goal" element={<OurGoalPage />} />
        <Route path="/supportus" element={<SupportPage />} />
      </Routes>
    </Container>
  );
}

export default App;
