import React from "react";
import ReactDOM from "react-dom/client"; // Importeer de nieuwe client API
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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
      fontSize: 16,
      color: "rgba(2, 2, 2, 0.87)",
    },
    h4: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 600,
      fontSize: 15,
      color: "rgba(2, 2, 2, 0.87)",
    },
    h4: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 600,
      fontSize: 15,
      color: "rgba(2, 2, 2, 0.87)",
    },
    body1: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      fontSize: 14,
      color: "rgba(2, 2, 2, 0.60)",
    },
    body2: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      fontSize: 13,
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
      color: "rgba(2, 2, 2, 0.60)",
    },
    body5: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      fontSize: 14,
      color: "rgba(2, 2, 2, 0.60)",
    },
    body5: {
      fontFamily: "Montserrat, Arial",
      fontWeight: 400,
      fontSize: 14,
      color: "rgba(2, 2, 2, 0.60)",
    },
  },
});

// Search for the root container
const container = document.getElementById("root");

// Make the root container a root
const root = ReactDOM.createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker geregistreerd: ", registration);
      })
      .catch((registrationError) => {
        console.log("ServiceWorker registratie fout: ", registrationError);
      });
  });
}
