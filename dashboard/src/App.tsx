import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import Dashboard from "./pages/Dashboard";
import dark from "./styles/themes/dark";
const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
