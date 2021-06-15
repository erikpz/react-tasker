import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Fab,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { TodoCard } from "../auth/components/TodoCard";
import { TaskService } from "../../services/TaskService";
import { UserContext } from "../../contexts/UserContext";
import { unsetUser } from "../../contexts/actions/userActions";
import { useNavigate } from "react-router";
import { Add } from "@material-ui/icons";
import DialogAnimate from "../../components/DialogAnimate";
import { FormTask } from "../auth/components/FormTask";

export const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const userctx = useContext(UserContext);
  const [openNew, setopenNew] = useState(false);
  const [loading, setloading] = useState(false);
  const [taskList, settaskList] = useState<Task[]>([]);

  const handleCloseNew = () => setopenNew(false);
  const handleOpenNew = () => setopenNew(true);

  const fetchTasks = async () => {
    setloading(true);
    const taskService = TaskService.getInstance();
    const response = await taskService.getTasks();
    console.log(response);
    if (response.ok) {
      settaskList(response.data.data);
    } else if (response.status === 401) {
      userctx.dispatch(unsetUser());
      localStorage.removeItem("token");
      navigate("/auth");
    } else {
      console.log("error fetching tasks");
    }
    setloading(false);
  };

  useEffect(() => {
    fetchTasks();
    return () => {
      settaskList([]);
    };
  }, []);

  return (
    <>
      <Box className={classes.homeContainer}>
        <Typography variant="h3" style={{ fontWeight: 500, marginBottom: 20 }}>
          Organizador
        </Typography>
        {loading ? (
          <Box className={classes.spinnerContainer}>
            <CircularProgress color="primary" size={50} />
          </Box>
        ) : (
          <Box>
            <Grid container spacing={1}>
              <Grid
                container
                item
                xs={12}
                sm={4}
                justify="center"
                alignContent="flex-start"
                spacing={2}
                /* style={{
                  backgroundColor: "lightcoral",
                }} */
              >
                <Typography
                  variant="subtitle2"
                  align="center"
                  style={{ margin: "10px auto 20px auto" }}
                >
                  Nuevas
                </Typography>
                {taskList
                  .filter((t: Task) => t.status === "new")
                  .map((t: Task) => (
                    <Grid item xs={12} key={t._id}>
                      <TodoCard task={t} fetchTasks={fetchTasks} />
                    </Grid>
                  ))}
              </Grid>

              <Grid
                container
                item
                xs={12}
                sm={4}
                justify="center"
                alignContent="flex-start"
                spacing={2}
                /* style={{
                  backgroundColor: "lightcoral",
                }} */
              >
                <Typography
                  align="center"
                  variant="subtitle2"
                  style={{ margin: "10px auto 20px auto" }}
                >
                  En proceso
                </Typography>
                {taskList
                  .filter((t: Task) => t.status === "process")
                  .map((t: Task) => (
                    <Grid item xs={12} key={t._id}>
                      <TodoCard task={t} fetchTasks={fetchTasks} />
                    </Grid>
                  ))}
              </Grid>

              <Grid
                container
                item
                xs={12}
                sm={4}
                justify="center"
                alignContent="flex-start"
                spacing={2}
                /* style={{
                  backgroundColor: "lightcoral",
                }} */
              >
                <Typography
                  align="center"
                  variant="subtitle2"
                  style={{ margin: "10px auto 20px auto", maxHeight: 20 }}
                >
                  Completadas
                </Typography>
                {taskList
                  .filter((t: Task) => t.status === "done")
                  .map((t: Task) => (
                    <Grid item xs={12} key={t._id}>
                      <TodoCard task={t} fetchTasks={fetchTasks} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>

      <DialogAnimate
        open={openNew}
        onClose={handleCloseNew}
        className={classes.formTask}
      >
        <FormTask type="new" onClose={handleCloseNew} onFetch={fetchTasks} />
      </DialogAnimate>

      <Fab className={classes.fab} onClick={handleOpenNew}>
        <Add />
      </Fab>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    /* backgroundColor: "lightblue", */
    minHeight: "100%",
  },
  fab: {
    position: "fixed",
    bottom: 30,
    right: 45,
    zIndex: 10000,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      bottom: 20,
      right: 20,
    },
  },
  spinnerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formTask: {
    width: 500,
    margin: "auto",
  },
}));
