import React from "react";
import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core";

export const FormCover = () => {
  const classes = useStyles();
  return (
    <Box className={classes.illustrationContainer}>
      <Box className={classes.titleContainer}>
        <Typography variant="h1" align="center" className={classes.title}>
          HOLA, TASKER!
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.subtitle}
        >
          Organiza tus tareas, ahora.
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  illustrationContainer: {
    height: "100%",
    width: "100%",
    backgroundImage: "url(/images/form_cover.jpg)",
    backgroundSize: "cover",
    overflow:'hidden'
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
