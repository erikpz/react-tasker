import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  AppBar,
  Hidden,
  Toolbar,
  IconButton,
  Theme,
  Typography,
} from "@material-ui/core";
import { alpha } from "../../../utils/helpers";
import { Menu } from "@material-ui/icons";
import Account from "./Account";
import clsx from "clsx";
import { SwitchTheme } from "./SwitchTheme";
import useSettings from "../../../hooks/useSettings";

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const TopBar = (props: any) => {
  const { onOpenNav } = props;
  const classes = useStyles();
  const theme = useTheme();
  const { selectMode } = useSettings();
  const [toggled, setToggled] = useState(false);
  const handleToggleTheme = () => {
    setToggled((s) => !s);
    selectMode(toggled ? "light" : "dark");
  };
  return (
    <AppBar className={classes.rootAppbar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        {/* <Hidden lgUp>
          <IconButton
            onClick={onOpenNav}
            style={{ 
              marginRight: 8,
            }}
          >
            <Menu/>
          </IconButton>
        </Hidden> */}
        <Box>
          <Typography
            variant="h5"
            style={{
              fontStyle: "oblique",
              color: theme.palette.text.primary,
            }}
          >
            TASKER.
          </Typography>
        </Box>
        <Box style={{ flexGrow: 1 }}></Box>
        <Box className={classes.rightMenu}>
          <Box style={{ width: 100}}>
            <SwitchTheme toggled={toggled} onClick={handleToggleTheme} />
          </Box>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  rootAppbar: {
    boxShadow: "none",
    backdropFilter: "blur(8px)",
    backgroundColor: alpha(theme.palette.background.default, 0.7),
    zIndex: 1000,
    /* [theme.breakpoints.up("lg")]: {
      paddingLeft: DRAWER_WIDTH,
    }, */
  },
  toolbar: {
    color: "black",
    backgroundColor: alpha(theme.palette.background.default, 1),
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 5),
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: APPBAR_DESKTOP,
    },
  },
  rightMenu: {
    display: "flex",
    alignItems: "center",
    "& > *:not(:first-of-type)": {
      marginLeft: {
        xs: 0.5,
        sm: 2,
        lg: 3,
      },
    },
  },
}));

export default TopBar;
