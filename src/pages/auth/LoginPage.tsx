import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { LoginForm } from "./components/LoginForm";
import { FormCover } from "./components/FormCover";

export const LoginPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loginRoot}>
      <Grid container className={classes.loginPage}>
        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormCover />
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  loginRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginPage: {
    width: "90%",
    height: "90%",
    boxShadow: theme.shadows[19],
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
  },
  illustrationContainer: {
    height: "100%",
    backgroundColor: "lightgreen",
  },
}));
