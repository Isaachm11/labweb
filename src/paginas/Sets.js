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
} from "@material-ui/core";
// Import the next line to add firebase to file
// import firebase from "./firebase";
import getFirebase from "../firebase/firebaseconfiguration";
import {
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";

import "./Sets.css";

export default function Sets() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  //Set the category's value
  const [category, setCategory] = useState("");
  //Set the description's value
  const [desc, setDesc] = useState("");
  //Set the initial date's value
  const [initDate, setInitDate] = useState("");
  //Set the questions
  const [firstQuestion, setFirstQuestion] = useState("");
  const [secondQuestion, set2ndQuestion] = useState("");
  //Set the answers (1st question)
  const [questionOneOne, setQOneOne] = useState("");
  const [questionOneTwo, setQOneTwo] = useState("");
  const [questionOneThree, setQOneThree] = useState("");
  //Set the answers (2nd question)
  const [questionTwoOne, setQTwoOne] = useState("");
  const [questionTwoTwo, setQTwoTwo] = useState("");
  const [questionTwoThree, setQTwoThree] = useState("");

  const firebase = getFirebase();
  const db = firebase.firestore();
  const refSets = firebase.firestore().collection("sets");

  function deleteSet(set) {
    refSets
      .doc(set.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // function deleteSet(set) {
  //   // console.log(String(set.id));
  //   // console.log();
  //   // console.log(db);
  //   // console.log(refSets);
  //   // deleteDoc(doc(db, refSets, id));

  //   // const set_query = db.collection("sets").where("id", "==", set.id);
  //   // const q = query(citiesRef, where("state", "==", "CA"));

  //   const q = query(collection(db, "sets"), where("id", "==", String(set.id)));
  //   const querySnapshot = getDocs(q);

  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.id, " => ", doc.data());
  //     doc.ref.delete();
  //   });

  //   // q.get().then(function (querySnapshot) {
  //   //   querySnapshot.forEach(function (doc) {
  //   //     doc.ref.delete();
  //   //   });
  //   // });

  //   // db.collection("sets").doc(q).delete();
  // }

  function editSet(updatedSet) {
    setLoading();
    console.log(updatedSet);
    refSets
      .doc(updatedSet.id)
      .update(updatedSet)
      .catch((err) => {
        console.error(err);
      });
  }

  // const washingtonRef = doc(db, "cities", "DC");

  // Set the "capital" field of the city 'DC'
  // await updateDoc(washingtonRef, {
  //   capital: true,
  // });

  // function editSet(updatedSet) {
  //   const setRef = doc(db, refSets, updatedSet.id);
  //   updateDoc(setRef, {
  //     category: updatedSet.category,
  //     desc: updatedSet.desc,
  //     initDate: updatedSet.initDate,
  //     firstQuestion: updatedSet.firstQuestion,
  //     secondQuestion: updatedSet.secondQuestion,
  //     questionOneOne: updatedSet.questionOneOne,
  //     questionOneTwo: updatedSet.questionOneTwo,
  //     questionOneThree: updatedSet.questionOneThree,
  //     questionTwoOne: updatedSet.questionTwoOne,
  //     questionTwoTwo: updatedSet.questionTwoTwo,
  //     questionTwoThree: updatedSet.questionTwoThree,
  //   });
  // }

  function getSets() {
    setLoading(true);

    refSets.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      console.log(items);
      setQuestions(items);
      setLoading(false);
      console.log(loading);
    });
  }

  useEffect(() => {
    getSets();
  }, []);

  if (loading) {
    return <Typography variant="h3">Loading...</Typography>;
  }

  return (
    <div>
      <NavBar />
      <span class="setButton">
        <Button
          className="newSetButton"
          color="default"
          href="/newSet"
          variant="contained"
        >
          Create new set
        </Button>
      </span>
      <Typography className="title" variant="h4">
        Question Sets
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Set Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Launch date</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Question 1</TableCell>
              <TableCell align="center">Answers for Q1</TableCell>
              <TableCell align="center">Question 2</TableCell>
              <TableCell align="center">Answers for Q2</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((set) => (
              <TableRow key={set.id}>
                <TableCell component="th" scope="row">
                  {set.title}
                </TableCell>
                <TableCell>{set.desc}</TableCell>
                <TableCell>{set.initDate}</TableCell>
                <TableCell>{set.category}</TableCell>
                <TableCell>{set.firstQuestion}</TableCell>
                <TableCell>
                  <Typography>1. {set.questionOneOne}</Typography>
                  <Typography>2. {set.questionOneTwo}</Typography>
                  <Typography>3. {set.questionOneThree}</Typography>
                </TableCell>
                <TableCell>{set.secondQuestion}</TableCell>
                <TableCell>
                  <Typography>1. {set.questionTwoOne}</Typography>
                  <Typography>2. {set.questionTwoTwo}</Typography>
                  <Typography>3. {set.questionTwoThree}</Typography>
                </TableCell>
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
                        title: set.title,
                        category,
                        desc,
                        initDate,
                        firstQuestion,
                        questionOneOne,
                        questionOneTwo,
                        questionOneThree,
                        questionTwoOne,
                        questionTwoTwo,
                        questionTwoThree,
                        secondQuestion,
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
          Edit a set
        </Typography>
      </div>
      <div>
        <div className="new-set-form">
          <div>
            <TextField
              className="setDescription"
              label="Description"
              type="text"
              id="desc"
              variant="outlined"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div>
            <Typography>Choose a category</Typography>
            <Select id="category" onChange={(c) => setCategory(c.target.value)}>
              <MenuItem value="geography">Geography</MenuItem>
              <MenuItem value="history">History</MenuItem>
              <MenuItem value="science">Science</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="training">Training</MenuItem>
            </Select>
          </div>
          <br />
          <div>
            <Typography>
              Write the date in which the game will be published
            </Typography>
            <TextField
              className="setDate"
              type="date"
              id="initDate"
              variant="outlined"
              onChange={(e) => setInitDate(e.target.value)}
            />
          </div>
          <br />
          <Typography variant="h5">
            Write up to 2 questions with 3 answers.
          </Typography>
          <div>
            <Typography>Question 1</Typography>
            <TextField
              className="setDescription"
              label="1st question"
              type="text"
              id="setQuestion1"
              variant="outlined"
              onChange={(first) => setFirstQuestion(first.target.value)}
            />
          </div>
          <Typography>Answers for question 1</Typography>
          <div>
            <div>
              <TextField
                className="setDescription"
                label="1st - The correct one"
                type="text"
                id="setAnswer1-1"
                variant="outlined"
                onChange={(f) => setQOneOne(f.target.value)}
              />
            </div>
            <div>
              <TextField
                className="setDescription"
                label="2nd"
                type="text"
                id="setAnswer1-2"
                variant="outlined"
                onChange={(f) => setQOneTwo(f.target.value)}
              />
            </div>
            <div>
              <TextField
                className="setDescription"
                label="3rd"
                type="text"
                id="setAnswer1-3"
                variant="outlined"
                onChange={(f) => setQOneThree(f.target.value)}
              />
            </div>
          </div>
          <div>
            <Typography>Question 2</Typography>
            <TextField
              className="setDescription"
              label="2nd question"
              type="text"
              id="setQuestion2"
              variant="outlined"
              onChange={(second) => set2ndQuestion(second.target.value)}
            />
          </div>
          <Typography>Answers for question 2</Typography>
          <div>
            <div>
              <TextField
                className="setDescription"
                label="1st - The correct one"
                type="text"
                id="setAnswer2-1"
                variant="outlined"
                onChange={(f) => setQTwoOne(f.target.value)}
              />
            </div>
            <div>
              <TextField
                className="setDescription"
                label="2nd"
                type="text"
                id="setAnswer2-2"
                variant="outlined"
                onChange={(f) => setQTwoTwo(f.target.value)}
              />
            </div>
            <div>
              <TextField
                className="setDescription"
                label="3rd"
                type="text"
                id="setAnswer3-3"
                variant="outlined"
                onChange={(f) => setQTwoThree(f.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
