import React, { useState, FC, useEffect } from "react";
import {
  Box,
  Chip,
  IconButton,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import DialogAnimate from "../../../components/DialogAnimate";
import { FormTask } from "./FormTask";
import { Delete, Edit, FiberManualRecord } from "@material-ui/icons";
import { formatStatusReverse } from "../../../utils/helpers";
import { TaskService } from "../../../services/TaskService";
import Swal from "sweetalert2";

interface TodoCardProps {
  task: Task;
  fetchTasks: () => Promise<void>;
}

export const TodoCard: FC<TodoCardProps> = (props) => {
  const { task, fetchTasks } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [openUpdate, setopenUpdate] = useState(false);
  /*  const [taskData, settaskData] = useState<Task>({} as Task); */

  const handleCloseUpdate = () => setopenUpdate(false);
  const handleOpenUpdate = () => setopenUpdate(true);

  /* useEffect(() => {
    settaskData(task);
    return () => {
      settaskData({} as Task);
    };
  }, []); */

  const handleDelete = async () => {
    const taskService = await TaskService.getInstance();
    let response;
    Swal.fire({
      icon: "question",
      title: "¿Seguro quieres eliminar la tarea?",
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: false,
      showCloseButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: "Cancelar",
      confirmButtonColor: "#00AB55",
    }).then(async (result) => {
      if (result.isConfirmed) {
        response = await taskService.deleteTask(task._id);
        fetchTasks();
        if (response.ok)
          Swal.fire("Eliminado", "Se eliminó la tarea.", "success");
      }
    });
  };

  return (
    <>
      <Box className={classes.cardContainer}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">{task.title}</Typography>
          <FiberManualRecord
            color="action"
            fontSize="small"
            style={{
              color:
                task.status === "new"
                  ? theme.palette.primary.main
                  : task.status === "process"
                  ? "orange"
                  : "#00AB55",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          style={{ marginTop: 15, fontWeight: 200, fontStyle: "oblique" }}
        >
          {task.description}
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={5}>
          <Typography variant="caption">
            {" "}
            <span style={{ fontStyle: "oblique" }}>Estado: </span>{" "}
            <Chip
              size="small"
              variant="outlined"
              label={formatStatusReverse(task.status as any)}
              style={{
                fontSize: 12,
                marginLeft: 10,
                color:
                  task.status === "new"
                    ? theme.palette.primary.main
                    : task.status === "process"
                    ? "orange"
                    : "#00AB55",
                borderColor:
                  task.status === "new"
                    ? theme.palette.primary.main
                    : task.status === "process"
                    ? "orange"
                    : "#00AB55",
              }}
            />
          </Typography>
          <Box>
            <IconButton
              onClick={handleOpenUpdate}
              size="small"
              style={{
                backgroundColor: "#cdb4db",
                color: "white",
                marginLeft: 30,
              }}
            >
              <Edit fontSize="small" />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              size="small"
              style={{
                backgroundColor: "#f28482",
                color: "white",
                marginLeft: 5,
              }}
            >
              <Delete fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <DialogAnimate
        open={openUpdate}
        onClose={handleCloseUpdate}
        className={classes.formTask}
      >
        <FormTask
          type="update"
          onClose={handleCloseUpdate}
          onFetch={fetchTasks}
          task={task}
        />
      </DialogAnimate>
    </>
  );
};
const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    /* backgroundColor: theme.palette.primary.light, */
    width: "100%",
    maxWidth: 300,
    maxHeight: 350,
    margin: "auto",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
    padding: 15,
  },
  formTask: {
    width: 500,
    margin: "auto",
  },
}));
