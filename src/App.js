import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";
import Header from "./components/Header";
import BottomNavigationComponent from "./components/BottomNavigationComponent";
import Home from "./pages/Home";
import Evaluations from "./pages/Evaluations";
import Toolkit from "./pages/Toolkit";
import Menu from "./pages/Menu";
import InterimEvaluations from "./pages/InterimEvaluation";
import UsTogether from "./pages/UsTogether";
import InstallPromptComponent from "./components/InstallPromptComponent";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#FFF9E2",
          minHeight: "100vh",
          paddingTop: "4.9rem",
        }}
      >
        <Header />
        <Container maxWidth="sm" sx={{ paddingBottom: "4rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evaluaties" element={<Evaluations />} />
            <Route
              path="/evaluaties/tussentijdse"
              element={<InterimEvaluations />}
            />
            <Route
              path="/evaluaties/tussentijdse/wij-samen"
              element={<UsTogether />}
            />
            <Route path="/toolkit" element={<Toolkit />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </Container>
        <BottomNavigationComponent />
        <InstallPromptComponent />
      </Box>
    </Router>
  );
}

export default App;
