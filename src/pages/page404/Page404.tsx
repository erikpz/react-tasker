import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { varBounce, varBounceIn } from "../../components/variants";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, Container } from "@material-ui/core"; /* 
import illust from "../../../public/static/illustrations/illustration_404.svg" */
import MotionContainer from "../../components/MotionContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100%",
    alignItems: "center",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
  },
  header: {
    top: 0,
    left: 0,
    lineHeight: 0,
    width: "100%",
    position: "absolute",
    padding: theme.spacing(3, 3, 0),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(5, 5, 0),
    },
  },
}));

function Page404View() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <RouterLink
          to="/"
          style={{ textDecoration: "none", fontSize: 30, color: "black" }}
        >
          TASKER.
        </RouterLink>
      </header>

      <Container>
        <MotionContainer initial="initial" open>
          <Box style={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <motion.div variants={varBounce}>
              <Typography variant="h3" gutterBottom>
                Lo sentimos, página no encontrada.
              </Typography>
            </motion.div>
            <Typography style={{ color: "text.secondary" }}>
              No pudimos encontrar la página que estas buscando. Quizás
              escribiste mal la URL? Revisala de nuevo.
            </Typography>
            <motion.img
              style={{ marginTop: 30, marginBottom: 50 }}
              variants={varBounceIn}
              src="/images/404.svg"
            />
            <Button
              to="/"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Regresar a inicio
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </div>
  );
}

export default Page404View;
