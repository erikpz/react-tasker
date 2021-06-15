import React, { useContext, useRef, useState } from "react";
import clsx from "clsx";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Avatar,
  Button,
  Divider,
  MenuItem,
  Typography,
  IconButton,
} from "@material-ui/core";
import { alpha } from "../../../utils/helpers";
import { Face, Home } from "@material-ui/icons";
import { UserContext } from "../../../contexts/UserContext";
import { unsetUser } from "../../../contexts/actions/userActions";
import PopoverMenu from "./PopoverMenu";

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: Home,
    linkTo: "/",
  },
  {
    label: "Perfil",
    icon: Face,
    linkTo: "profile",
  },
];

const Account = () => {
  const usrctx = useContext(UserContext);
  const user = usrctx.state.userDetails;
  const classes = useStyles();
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    usrctx.dispatch(unsetUser());
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        className={clsx(classes.btnAvatar, { [classes.isSelected]: isOpen })}
      >
        <Avatar
          alt="My Avatar"
          src={
            usrctx.state.userDetails.profilePhotoUrl !== null
              ? usrctx.state.userDetails.profilePhotoUrl
              : "/images/avatars/avatar_default.jpg"
          }
        />
      </IconButton>

      <PopoverMenu
        width={220}
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorRef.current}
      >
        <Box my={2} px={2.5}>
          <Typography variant="subtitle1" noWrap>
            {`${user.name} ${user.lastName}`}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "text.secondary" }}
            noWrap
          >
            {user.email}
          </Typography>
        </Box>

        <Divider style={{ marginLeft: 8, marginRight: 8 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            className={classes.menuItem}
          >
            <Box style={{ paddingTop: 5, marginRight: 10 }}>
              <option.icon />
            </Box>
            {option.label}
          </MenuItem>
        ))}

        <Box p={2} pt={1.5}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </PopoverMenu>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  menuItem: {
    ...theme.typography.body2,
    padding: theme.spacing(0.5, 2.5),
    display: "flex",
    alignItems: "center",
  },
  btnAvatar: {
    padding: 0,
    width: 44,
    height: 44,
  },
  isSelected: {
    "&:before": {
      zIndex: 1,
      content: "''",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      position: "absolute",
      background: alpha(theme.palette.grey[900], 0.8),
    },
  },
}));

export default Account;
