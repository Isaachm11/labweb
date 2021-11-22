import React, { Component } from "react";
import "./Home.css";

import FakeGraphCard from "../components/FakeGraphCard";
import NavBar from "../components/NavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FakeGraphCard />
      </div>
    );
  }
}

export default Home;
