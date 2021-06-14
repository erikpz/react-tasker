import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useForm } from "react-hook-form";

interface InputsLogin {
  userName: string;
  password: string;
}

export const LoginForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [visibility, setvisibility] = useState(false);
  const { handleSubmit, register } = useForm<InputsLogin>();

  const handleLogin = (formData: InputsLogin) => {
    console.log(formData);
  };
  return (
    <Box className={classes.formContainer}>
      <Grid container>
        <Grid item xs={12} /* style={{ backgroundColor: "lightcoral" }} */>
          <Typography variant="h3" align="center" style={{ marginBottom: 50 }}>
            Inicia Sesión
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Nombre de usuario"
            className={classes.textField}
            {...register("userName", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Contraseña"
            className={classes.textField}
            type={visibility ? "text" : "password"}
            {...register("password", { required: true })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setvisibility(!visibility)}
                    edge="end"
                  >
                    {visibility ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            className={classes.loginButton}
            onClick={handleSubmit(handleLogin)}
          >
            Iniciar sesión
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.divider}>
            <Typography
              align="center"
              style={{ color: theme.palette.grey[700] }}
            >
              O
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.register}>
            <Typography
              align="center"
              style={{ color: theme.palette.grey[700] }}
            >
              Regístrate. <span>Aquí.</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    height: "100%",
    padding: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: {
    maxWidth: 400,
    margin: "15px auto",
    display: "block",
  },
  loginButton: {
    maxWidth: 400,
    display: "block",

    margin: "15px auto",
    height: 56,
  },
  divider: {
    maxWidth: 400,
    margin: "15px auto",
    marginTop: 50,
    position: "relative",
    "&:before": {
      position: "absolute",
      top: "40%",
      left: 0,
      content: '""',
      backgroundColor: theme.palette.grey[700],
      width: "40%",
      height: 1,
    },
    "&:after": {
      position: "absolute",
      top: "40%",
      right: 0,
      content: '""',
      backgroundColor: theme.palette.grey[700],
      width: "40%",
      height: 1,
    },
  },
  register: {
    margin: "40px auto",
  },
}));
