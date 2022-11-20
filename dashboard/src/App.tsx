import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import dark from "./styles/themes/dark";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
