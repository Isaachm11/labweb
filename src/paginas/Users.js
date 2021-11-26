import {
  Button,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";
// Import the next line to add firebase to file
import getFirebase from "../firebase/firebaseconfiguration";
import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import "./Users.css";

const useButtonStyles = makeStyles({
  primary: {
    fontSize: 20,
    backgroundColor: "#4CC9F0",
    color: "#fff",
    marginLeft: "auto",
  },
  danger: {
    backgroundColor: "#B5179E",
    color: "#fff",
  },
  edit: {
    backgroundColor: "#B5179E",
    color: "#fff",
  },
});

export default function Users({ currentUser }) {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  //Set the names's value
  const [name, setName] = useState("");
  //Set the last name's value
  const [lastName, setLastName] = useState("");
  //Set the email
  const [email, setEmail] = useState("");

  const firebase = getFirebase();
  const db = firebase.firestore();
  const refSets = firebase.firestore().collection("users");

  function deleteSet(set) {
    refSets
      .doc(set.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  function editSet(updatedUser) {
    setLoading();
    console.log(updatedUser);
    refSets
      .doc(updatedUser.id)
      .update(updatedUser)
      .catch((err) => {
        console.error(err);
      });
  }

  function getUsers() {
    setLoading(true);

    refSets.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setQuestions(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const buttonsClasses = useButtonStyles();

  if (loading) {
    return <Typography variant="h3">Loading...</Typography>;
  }

  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Button
        className={buttonsClasses.primary}
        color="default"
        href="/newUser"
        variant="contained"
      >
        Create new user
      </Button>
      <div id="users">
        <Typography className="title" variant="h4">
          Users
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.map((set) => (
                <TableRow key={set.id}>
                  <TableCell component="th" scope="row">
                    {set.id}
                  </TableCell>
                  <TableCell>{set.name}</TableCell>
                  <TableCell>{set.lastName}</TableCell>
                  <TableCell>{set.email}</TableCell>

                  <TableCell align="center">
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteSet(set)}
                    >
                      Delete
                    </Button>

                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() =>
                        editSet({
                          title: set.id,
                          name,
                          lastName,
                          email,
                          id: set.id,
                        })
                      }
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <Typography className="title" variant="h4">
            Edit an user
          </Typography>
        </div>
        <div>
          <div className="new-set-form">
            <div>
              <TextField
                className="setName"
                label="Name"
                type="text"
                id="desc"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <TextField
                className="setLastName"
                label="Last Name"
                type="text"
                id="desc"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <TextField
                className="setEmail"
                label="Email"
                type="text"
                id="desc"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
