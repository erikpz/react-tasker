import React, { useState, FC } from "react";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import DialogAnimate from "../../../components/DialogAnimate";
import { FormTask } from "./FormTask";

export const TodoCard: FC<{ task: Task; fetchTasks: () => Promise<void> }> = (
  props
) => {
  const { task, fetchTasks } = props;
  const classes = useStyles();
  const [openUpdate, setopenUpdate] = useState(false);

  const handleCloseUpdate = () => setopenUpdate(false);
  const handleOpenUpdate = (task: any) => {
    setopenUpdate(true);
  };
  return (
    <>
      <Box className={classes.cardContainer}>
        <Typography>Card title</Typography>
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
    backgroundColor: "lightgreen",
    width: "100%",
    maxWidth: 300,
    height: 300,
    margin: "auto",
  },
  formTask: {
    width: 500,
    margin: "auto",
  },
}));
