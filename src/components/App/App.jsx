import React, { Component } from "react";
import Navbar from "../Navbar";
import TodayComponent from "../TodayComponent";
import ListComponent from "../ListComponent";
import GraphComponent from "../GraphComponent";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar />
        </div>
        <div className="app-today">
          <TodayComponent />
        </div>
        <div className="app-list-graph">
          <ListComponent />
          <GraphComponent />
        </div>
      </div>
    );
  }
}

export default App;
