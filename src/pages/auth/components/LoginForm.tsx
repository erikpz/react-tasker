import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Hidden,
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
import { AuthService } from "../../../services/AuthService";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [visibility, setvisibility] = useState(false);
  const [loading, setloading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputsLogin>();

  const handleLogin = async (formData: InputsLogin) => {
    setloading(true);
    const authService = AuthService.getInstance();
    const response = await authService.login(formData);
    console.log(response);
    if (response.ok) {
      localStorage.setItem("token", response.data.data.token);
      navigate("/");
    } else {
      Swal.fire({
        title: "Algo salió mal.",
        text: "Intentalo de nuevo.",
        icon: "error",
        confirmButtonText: "ok",
        confirmButtonColor: "#FF4842",
      });
    }
    setloading(false);
  };

  return (
    <form className={classes.formContainer}>
      <Grid container spacing={2}>
        <Hidden smUp>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="center"
              style={{ marginBottom: 20, fontStyle: "oblique" }}
            >
              TASKER.
            </Typography>
          </Grid>
        </Hidden>
        <Grid item xs={12} /* style={{ backgroundColor: "lightcoral" }} */>
          <Typography variant="h3" align="center" style={{ marginBottom: 20, color:theme.palette.grey[700] }}>
            Inicia Sesión
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Nombre de usuario"
            error={!!errors.userName?.type}
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
            error={!!errors.password?.type}
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
        {Object.keys(errors).length > 0 && (
          <Grid item xs={12}>
            <Typography
              variant="caption"
              color="error"
              style={{ maxWidth: 400, display: "block" }}
            >
              Campos requeridos
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            fullWidth
            disabled={loading}
            variant="contained"
            className={classes.loginButton}
            type="submit"
            onClick={handleSubmit(handleLogin)}
          >
            {loading ? <CircularProgress size={20} /> : "Iniciar sesión"}
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
              Regístrate. <Link to="/auth/sign-up">Aquí.</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    height: "100%",
    padding: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  textField: {},
  loginButton: {
    maxWidth: 400,
    display: "block",

    margin: "15px auto",
    height: 56,
  },
  divider: {
    maxWidth: 400,
    margin: "auto",
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
    margin: "10px auto",
  },
}));
