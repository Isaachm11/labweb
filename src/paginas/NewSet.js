// import getFirebase from "../firebase/firebaseconfiguration";
// import { getFirestore } from "@firebase/firestore";
// import firebase from "@firebase/app-compat";

import getFirebase from "../firebase/firebaseconfiguration";
import { collection, addDoc } from "firebase/firestore";
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

import "./NewSet.css";
import FirebaseFunctions from "../funciones/FirebaseFunctions";

// const ref = firebase.firestore().collection("sets");
const firebase = getFirebase();
// const firestore = firebase.firestore().collection("sets");

const db = firebase.firestore();

export default function NewSet() {
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
  //Set the title's value
  const [title, setTitle] = useState("");

  // Add a new document with a generated id.
  // const docRef = await addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan",
  // });
  // console.log("Document written with ID: ", docRef.id);

  function addSet(newSet) {
    const docRef = addDoc(collection(db, "sets"), {
      title: newSet.title,
      category: newSet.category,
      desc: newSet.desc,
      initDate: newSet.initDate,
      firstQuestion: newSet.firstQuestion,
      secondQuestion: newSet.secondQuestion,
      questionOneOne: newSet.questionOneOne,
      questionOneTwo: newSet.questionOneTwo,
      questionOneThree: newSet.questionOneThree,
      questionTwoOne: newSet.questionTwoOne,
      questionTwoTwo: newSet.questionTwoTwo,
      questionTwoThree: newSet.questionTwoThree,
      id: newSet.id,
    });
    console.log("Document written with ID: ", docRef.id);
  }

  // function addSet(newSet) {
  //   ref
  //     .doc(newSet.id)
  //     .set(newSet)
  //     .catch((err) => {
  //       console.error(err);
  //     });

  //   return <Redirect to="/sets" />;
  // }

  return (
    <>
      <NavBar />
      <span class="new-set-body">
        <Button color="secondary" href="/sets" variant="contained">
          Go back
        </Button>
        <Typography className="title" variant="h4">
          New Set
        </Typography>
      </span>
      <form className="new-set-form">
        <span className="newSetInput">
          <div>
            <TextField
              label="Set title"
              type="text"
              id="title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
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
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                addSet({
                  title,
                  category,
                  desc,
                  initDate,
                  firstQuestion,
                  secondQuestion,
                  questionOneOne,
                  questionOneTwo,
                  questionOneThree,
                  questionTwoOne,
                  questionTwoTwo,
                  questionTwoThree,
                  id: uuidv4(),
                })
              }
            >
              Add set
            </Button>
          </div>
        </span>
      </form>
    </>
  );
}
