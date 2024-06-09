import React from "react";
import ReactDOM from "react-dom/client"; // Importeer de nieuwe client API
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // Changed to serviceWorkerRegistration

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
    h6: {
      fontFamily: '"Baloo 2", Arial',
      fontWeight: 800,
    },
    h7: {
      fontFamily: '"Baloo 2", Arial',
      fontWeight: 400,
    },
    h5: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 800,
      fontSize: 14,
      color: "rgba(2, 2, 2, 0.87)",
    },
    body1: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      fontSize: 11,
    },
    body2: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      fontSize: 10,
      color: "rgba(2, 2, 2, 0.60)",
    },
    body3: {
      fontFamily: '"Baloo 2", Arial',
      fontSize: 8,
    },
    body4: {
      fontFamily: "Montserrat, Arial",
      fontSize: 10,
      fontStyle: "italic",
    },
    body5: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      fontSize: 14,
      color: "rgba(2, 2, 2, 0.87)",
    },
  },
});

// Zoek het root element
const container = document.getElementById("root");

// Maak een root met de nieuwe API
const root = ReactDOM.createRoot(container);

// Render de applicatie
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register();
