import React, { Component } from "react";
import Navbar from "../Navbar";
import TodayComponent from "../TodayComponent";
import ListComponent from "../ListComponent";
import GraphComponent from "../GraphComponent";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "C",
      queryString: ""
    };
  }

  onUnitChange = newUnit => {
    this.setState(
      {
        unit: newUnit
      },
      this.notifyStateChange
    );
  };

  onSearchSubmit = query => {
    this.setState(
      {
        queryString: query
      },
      this.notifyStateChange
    );
  };

  notifyStateChange = () => {
    // Fetch data for new unit
    // Fetch data for city/zipcode
    console.log(this.state);
  };

  render() {
    return (
      <div className="app-container">
        <div className="app-nav">
          <Navbar
            searchSubmit={this.onSearchSubmit}
            changeUnit={this.onUnitChange}
            unit={this.state.unit}
          />
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
