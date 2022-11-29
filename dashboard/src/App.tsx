import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import Dashboard from "./pages/Dashboard";
import dark from "./styles/themes/dark";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/SelectInput/routes/router";
const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
