import React, { Component } from "react";
import "./TodayComponent.css";
import { getIconClassName } from "../../utils/utils";

class TodayComponent extends Component {
  render() {
    const weatherId = 300;
    const iconClass = getIconClassName(weatherId);
    const windSpeedUnit = "m/s"; // other unit is:miles/hr

    return (
      <div className="today-component-container">
        <div className="date-container">
          <div>Friday</div>
          <div>May 04,2018</div>
        </div>

        <div className="icon-desc-container">
          <div className="icon-conatainer">
            <i className={`wi wi-owm-${weatherId} weather-icon ${iconClass}`} />
          </div>
          <div className="weather-desc">Heavy Rain</div>
        </div>

        <div className="temp-container">
          <div className="temp-text">
            <span>24</span>
            <i className="wi wi-degrees" />
          </div>
          <div className="high-low-container">
            <div className="high-low-item">
              <span>
                <i className="wi wi-direction-up" />
              </span>
              <span>Max</span>
              <span>
                <span>28&#x00B0;</span>
              </span>
            </div>
            <div className="high-low-item">
              <span>
                <i className="wi wi-direction-down" />
              </span>
              <span>Min</span>
              <span>
                <span>18&#x00B0;</span>
              </span>
            </div>
          </div>
        </div>

        <div className="extra-info-container">
          <div className="extra-info-item">
            <span>
              <i className="wi wi-humidity" />
            </span>
            <span>Humidity</span>
            <span>34%</span>
          </div>
          <div className="extra-info-item">
            <span>
              <i className="wi wi-barometer" />
            </span>
            <span>Pressure</span>
            <span>34 hPa</span>
          </div>
          <div className="extra-info-item">
            <span>
              <i className="wi wi-strong-wind" />
            </span>
            <span>Wind Speed</span>
            <span>10 {windSpeedUnit}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TodayComponent;
