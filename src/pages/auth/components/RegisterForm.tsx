import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
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
import { AuthService } from "../../../services/AuthService";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [visibility, setvisibility] = useState(false);
  const [loading, setloading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputsRegister>();

  const handleRegister = async (formData: InputsRegister) => {
    setloading(true);
    const authService = AuthService.getInstance();
    const response = await authService.createUser(formData);
    console.log(response);
    if (response.ok) {
      localStorage.setItem("token", response.data.data.token);
      Swal.fire({
        title: "Registrado!",
        text: "Te has registrado correctamente",
        icon: "success",
        confirmButtonText: "ok",
      }).then(() => {
        navigate("/auth/sign-in");
      });
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
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" style={{ marginBottom: 20 }}>
            Regístrate
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Nombre"
            error={!!errors.name?.type}
            className={classes.textField}
            {...register("name", { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Apellidos"
            error={!!errors.lastName?.type}
            className={classes.textField}
            {...register("lastName", { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Nombre de usuario"
            error={!!errors.userName?.type}
            className={classes.textField}
            {...register("userName", { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Teléfono"
            error={!!errors.phoneNumber?.type}
            className={classes.textField}
            {...register("phoneNumber", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="E-mail"
            error={!!errors.email?.type}
            className={classes.textField}
            {...register("email", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="URL Foto"
            error={!!errors.profilePhotoUrl?.type}
            className={classes.textField}
            {...register("profilePhotoUrl", { required: true })}
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
            onClick={handleSubmit(handleRegister)}
          >
            {loading ? <CircularProgress size={20} /> : "Registrarse"}
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
              ¿Ya tiene una cuenta?{" "}
              <Link to="/auth/sign-in">Inicia sesión.</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
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
