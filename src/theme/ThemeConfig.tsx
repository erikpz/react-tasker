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
