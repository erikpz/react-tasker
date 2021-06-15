import React, { FC, useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  makeStyles,
  MenuItem,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Controller, useForm } from "react-hook-form";
import { TaskService } from "../../../services/TaskService";
import Swal from "sweetalert2";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router";
import { unsetUser } from "../../../contexts/actions/userActions";
import { formatStatus, formatStatusReverse } from "../../../utils/helpers";

interface FormTaskProps {
  type: string;
  onClose: () => void;
  onFetch: () => Promise<void>;
  task?: Task;
}

export const FormTask: FC<FormTaskProps> = (props) => {
  const classes = useStyles();
  const { type, onClose, onFetch, task } = props;
  console.log(task);
  const def = {
    title: task?.title,
    description: task?.description,
    status: formatStatusReverse(task?.status as any),
  };
  const [loading, setloading] = useState(false);
  const userctx = useContext(UserContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<CreateTask>();

  const onSubmit = async (dataForm: CreateTask) => {
    setloading(true);
    let response;
    const taskService = TaskService.getInstance();
    if (type === "new") {
      response = await taskService.createTask({
        ...dataForm,
        status: "new",
      });
    } else {
      response = await taskService.updateTask(task?._id as string, {
        ...dataForm,
        status: formatStatus(dataForm.status as any),
      });
    }
    onClose();
    if (response.ok) {
      await Swal.fire({
        title: "Tasked!",
        text:
          type === "new"
            ? "Se agregó una nueva tarea"
            : "Se actualizó la tarea",
        icon: "success",
        confirmButtonText: "ok",
        confirmButtonColor: "#0096c7",
      }).then(async () => {
        await onFetch();
      });
    } else if (response.status === 401) {
      userctx.dispatch(unsetUser());
      localStorage.removeItem("token");
      navigate("/auth");
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
    console.log(response);
  };

  useEffect(() => {
    return () => {
      setloading(false);
    };
  }, []);

  return (
    <Box className={classes.formContainer}>
      <IconButton
        className={classes.closeButton}
        size="small"
        onClick={onClose}
      >
        <Close fontSize="small" color="error" />
      </IconButton>
      <Typography
        variant="subtitle1"
        style={{ fontWeight: 500, fontSize: 20, marginBottom: 20 }}
      >
        {type === "new" ? "Agrega un nueva tarea" : "Actualiza la tarea"}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Título"
        error={!!errors.title?.type}
        className={classes.textField}
        {...register("title", { required: true })}
      />
      <TextField
        fullWidth
        multiline
        variant="outlined"
        label="Descripción"
        error={!!errors.description?.type}
        className={classes.textField}
        {...register("description", { required: true })}
      />
      {type !== "new" && (
        <Controller
          defaultValue={[]}
          name="status"
          control={control}
          rules={{
            required: true,
            validate: (value: any) => value.length !== 0,
          }}
          render={({ field }) => (
            <TextField
              className={classes.textField}
              {...field}
              select
              variant="outlined"
              label="Estado"
              error={!!errors.status}
              style={{ width: "100%" }}
            >
              {["Nueva", "En proceso", "Completada"].map((status: string) => (
                <MenuItem value={status} key={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      )}
      {Object.keys(errors).length > 0 && (
        <Typography
          variant="caption"
          color="error"
          style={{ maxWidth: 400, display: "block" }}
        >
          Campos requeridos
        </Typography>
      )}
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        fullWidth
        style={{ height: 55, marginTop: 15 }}
      >
        {loading ? (
          <CircularProgress color="primary" />
        ) : type === "new" ? (
          "Crear"
        ) : (
          "Actualizar"
        )}
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  formContainer: {
    padding: 25,
    position: "relative" /* 
    maxWidth:400,
    margin:'auto' */,
  },
  closeButton: {
    position: "absolute",
    top: 27,
    right: 20,
  },
  textField: {
    margin: "15px 0",
  },
}));
