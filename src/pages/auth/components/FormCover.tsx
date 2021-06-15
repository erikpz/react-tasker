import React from "react";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import { useLocation } from "react-router";

export const FormCover = () => {
  const classes = useStyles();
  const location = useLocation();
  const loginLoc = location.pathname === "/auth/sign-in";
  return (
    <Box
      className={classes.illustrationContainer}
      style={{
        backgroundImage: loginLoc
          ? "url(/images/login_form.jpg)"
          : "url(/images/register_form.jpg)",
      }}
    >
      <Box className={classes.titleContainer}>
        <Typography variant="h1" align="center" className={classes.title}>
          {loginLoc ? "Hola, Tasker!" : "Conviértete en Tasker"}
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.subtitle}
        >
          {loginLoc
            ? " Organiza tus tareas, ahora."
            : "Empieza a ordenar tus tareas."}
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  illustrationContainer: {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  titleContainer: {
    backgroundColor: "rgb(255,255,255,.0)",
    backdropFilter: "blur(2.8px)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    maxWidth: 400,
  },
  subtitle: {
    color: "#FFF",
    maxWidth: 400,
    marginTop: 70,
  },
}));
