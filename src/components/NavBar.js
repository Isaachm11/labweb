// import firebase from "firebase";
import "firebase/compat/auth";
import {
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import "./NavBar.css"

/* import { AuthContext } from '../pages/auth/Auth'; */

function NavBar({ currentUser }) {
  /* const { currentUser } = useContext(AuthContext); */
  /* const currentUserEmail = currentUser ? currentUser.email : ''; */

  /*  console.log(currentUser); */

  const logOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <AppBar color="primary" position="sticky" id={"navbar"} >
        <Toolbar className="toolBar" variant="regular">
          <Typography variant="h5">Welcome, {currentUser} to...</Typography>
          <Typography variant="h5" className="ml-auto">
            KNOWLEDGE RALLY
          </Typography>
          {/* <Typography variant='body2'>{`Welcome ${currentUserEmail}`}</Typography> */}
          <ButtonGroup
            className="navButtons"
            variant="text"
            color="inherit"
            aria-label="outlined button group"
          >
            <Button href="/">Home</Button>
            <Button href="/sets">Sets</Button>
            <Button href="/users">Users</Button>
            <Button href="/logout">Logout</Button>
            {/* <Button href="/" color="secondary" onClick={logOut}>
              Logout
            </Button> */}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
