// import firebase from './firebase';
import getFirebase from "../firebase/firebaseconfiguration";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import NavBar from "../components/NavBar";

import "./NewUser.css";

const firebase = getFirebase();
const db = firebase.firestore();
const ref = firebase.firestore().collection("users");

export default function NewUser() {
  //Set the name
  const [name, setName] = useState("");
  //Set the last name
  const [lastName, setLastName] = useState("");
  //Set the email
  const [email, setEmail] = useState("");

  function addSet(newUser) {
    ref
      .doc(newUser.id)
      .set(newUser)
      .catch((err) => {
        console.error(err);
      });

    return <Redirect to="/sets" />;
  }

  return (
    <>
      <NavBar />
      <span class="new-set-body">
        <Button color="secondary" href="/users" variant="contained">
          Go back
        </Button>
        <Typography className="title" variant="h4">
          New User
        </Typography>
      </span>
      <form className="new-set-form">
        <span className="newUserInput">
          <div>
            <TextField
              label="Set Name"
              type="text"
              id="name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <TextField
              label="Set Last Name"
              type="text"
              id="lastName"
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <TextField
              label="Set Email"
              type="text"
              id="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <br />

          <div>
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                addSet({
                  name,
                  lastName,
                  email,
                  id: uuidv4(),
                })
              }
            >
              Add User
            </Button>
          </div>
        </span>
      </form>
    </>
  );
}
