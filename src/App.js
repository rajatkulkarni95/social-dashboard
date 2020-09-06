import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import { Header } from "./components/Header";
import { OverviewContainer } from "./containers";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Main>
        <Header />
        <OverviewContainer />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  width: calc(${(p) => p.theme.desktop} * 0.9);

  @media (max-width: ${(p) => p.theme.mobile}) {
    width: calc(${(p) => p.theme.mobile} * 0.9);
  }
`;
