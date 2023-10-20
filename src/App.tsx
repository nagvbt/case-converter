import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CaseConvert } from "./components/CaseConvert";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <h1>Case Converter</h1>
          <CaseConvert></CaseConvert>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
