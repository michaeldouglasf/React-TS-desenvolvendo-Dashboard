import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import dark from "./styles/themes/dark";
import Layout from './components/Layout/index';

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List/>
      </Layout>
    </ThemeProvider>
  );
};
export default App;
