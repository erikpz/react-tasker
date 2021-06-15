/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { UserService } from "../../services/UserService";
import { setUser } from "../../contexts/actions/userActions";
import jwt_decode from "jwt-decode";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const HomeLayout = ({ children }: any) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const usrctx = useContext(UserContext);
  const [openNav, setOpenNav] = useState(false);

  const onOpenNav = () => {
    setOpenNav(true);
  };

  const onCloseNav = () => {
    setOpenNav(false);
  };

  const fetchUserDetails = async () => {
    /* if (localStorage.getItem("token")) {
      const jwt = jwt_decode(localStorage.getItem("token") as string);
      console.log(jwt);
    } */
    console.log(localStorage.getItem("token"));
    /* const userService = UserService.getInstance();
    const response = await userService.getUser();
    console.log(response); */
    /* if (response.ok) {
      const {
        id,
        email,
        name,
        lastName,
        phoneNumber,
        createdAt,
        profilePhotoUrl,
      } = response.data.data;
      console.log(response.data.data);
      usrctx.dispatch(setUser)
    } else if (response.status === 401) {
      console.log("Error", response);
      usrctx.dispatch(unsetInfo());
      navigate("/auth");
    } else {
      console.log("Error", response);
    } */
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className={classes.rootDashLayout}>
      {/* <TopBar onOpenNav={onOpenNav} />
      <NavBar onCloseNav={onCloseNav} isOpenNav={openNav} /> */}

      <div className={classes.main}>{children}</div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  rootDashLayout: {
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
  },
  main: {
    /* backgroundColor: 'lightblue', */
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_MOBILE + 40,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
      paddingTop: APP_BAR_DESKTOP + 40,
      /* paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2), */
    },
  },
}));

export default HomeLayout;
