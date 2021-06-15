import React, { FC, Children } from "react";
import { Box, Grid, Hidden, makeStyles, Theme } from "@material-ui/core";
import { useLocation } from "react-router";

export const AuthLayout: FC<{ children: any }> = (props) => {
  const classes = useStyles();
  const childs = Children.toArray(props.children);
  const location = useLocation();
  const loginLoc = location.pathname === "/auth/sign-in";
  if (loginLoc) {
    return (
      <Box className={classes.loginRoot}>
        <Grid
          container
          className={classes.loginPage}
          style={{ overflowY: "auto" }}
        >
          <Grid item xs={12} sm={6}>
            {childs[0]}
          </Grid>
          <Hidden xsDown>
            <Grid item xs={12} sm={6}>
              {childs[1]}
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    );
  }
  return (
    <Box className={classes.loginRoot}>
      <Grid
        container
        className={classes.loginPage}
        style={{ overflowY: "auto" }}
      >
        <Hidden xsDown>
          <Grid item xs={12} sm={6}>
            {childs[0]}
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={6}>
          {childs[1]}
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
    maxWidth:1200,
    boxShadow: theme.shadows[19],
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
  },
}));
