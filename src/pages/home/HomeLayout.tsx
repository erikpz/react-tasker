/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { UserService } from "../../services/UserService";
import { setUser, unsetUser } from "../../contexts/actions/userActions";
import TopBar from "./components/Topbar";

const APP_BAR_MOBILE = 64;

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
    const userService = UserService.getInstance();
    const response = await userService.getUser();
    if (response.ok) {
      usrctx.dispatch(setUser(response.data.data));
    } else if (response.status === 401) {
      console.log("Error", response);
      usrctx.dispatch(unsetUser());
      localStorage.removeItem("token");
      navigate("/auth");
    } else {
      console.log("Error", response);
    }
    console.log(response);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  useEffect(() => {
    console.log(usrctx.state);
  });

  return (
    <div className={classes.rootDashLayout}>
      <TopBar onOpenNav={onOpenNav} />
      {/* <NavBar onCloseNav={onCloseNav} isOpenNav={openNav} /> */}
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
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_MOBILE,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(10),
  },
}));

export default HomeLayout;
