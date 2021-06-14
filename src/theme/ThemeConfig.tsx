import React from "react";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import borderRadius from "./borderRadius";
import GlobalStyles from "./globalStyles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import useSettings from "../hooks/useSettings";

function ThemeConfig({ children }: any) {
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";
  let paltt = palette[isLight ? "light" : "dark"];
  let shdw = shadows[isLight ? "light" : "dark"];
  const theme = createMuiTheme({
    palette: paltt,
    shadows: shdw,
    typography,
    shape: borderRadius,
    overrides: {
      MuiButton: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        contained: {
          color: paltt.common.white,
          boxShadow: shdw[25].primary,
          backgroundColor: paltt.primary.main,
          "&:hover": {
            backgroundColor: paltt.primary.dark,
          },
        },
        containedPrimary: {
          boxShadow: shdw[25].primary,
        },
        outlined: {
          border: `1px solid ${paltt.grey[500_32]}`,
          "&:hover": {
            backgroundColor: paltt.action.hover,
          },
        },
        text: {
          "&:hover": {
            backgroundColor: paltt.action.hover,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default ThemeConfig;
