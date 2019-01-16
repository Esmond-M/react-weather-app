import React, { Component } from "react";
import Navbar from "../Navbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Navbar />;
  }
}

export default App;
