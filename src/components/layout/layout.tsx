import React from "react";

import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBarLayoutComponent from "./app-bar";

interface LayoutComponentProps {
  children: React.ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function LayoutComponent(props: LayoutComponentProps) {
  const { children } = props;

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBarLayoutComponent />

        <Box component="main">{children}</Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default LayoutComponent;
