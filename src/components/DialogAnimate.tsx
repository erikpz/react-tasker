import clsx from "clsx";
import React from "react";
import { varFadeInUp } from "./variants";
import { motion, AnimatePresence } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
}));

const DialogAnimate = ({
  open = false,
  onClose,
  width = "sm",
  children,
  className,
  ...other
}: any) => {
  const classes = useStyles();

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth={width}
          open={open}
          onClose={onClose}
          PaperComponent={motion.div}
          PaperProps={{ ...varFadeInUp }}
          classes={{ paper: classes.paper }}
          className={clsx(classes.root, className)}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default DialogAnimate;
