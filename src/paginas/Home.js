import React, { Component } from "react";
import "./Home.css";

import FakeGraphCard from "../components/FakeGraphCard";
import NavBar from "../components/NavBar";

function Home({ currentUser }) {
  return (
    <div>
      <NavBar currentUser={currentUser} />
      <FakeGraphCard />
    </div>
  );
}

export default Home;
