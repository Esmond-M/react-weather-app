import React, { Component } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import "./GraphComponent.css";

class GraphComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleData: [18, 35, 40, 24, 22, 31, 33]
    };
  }
  render() {
    return (
      <div className="graph-container">
        <div className="graph-info">
          <span>
            <i className="fa fa-arrow-left" />
          </span>
          <span>Temperature variation over 7 days</span>
          <span>
            <i className="fa fa-arrow-right" />
          </span>
        </div>
        <div className="graph">
          <Sparklines data={this.state.sampleData}>
            <SparklinesLine color="#fe1743" />
            <SparklinesSpots style={{ fill: "#ffffff" }} />
          </Sparklines>
        </div>
      </div>
    );
  }
}

export default GraphComponent;
