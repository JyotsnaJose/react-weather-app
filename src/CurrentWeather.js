import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let currentData = {
    temperature: -4,
    feelslike: -12,
    highTemp: -3,
    lowTemp: -5,
    humidity: 50,
    windspeed: 24,
  };
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-sm-6 mb-3">
              <ReactAnimatedWeather
                icon={"CLOUDY"}
                color={"black"}
                size={50}
                animate={true}
              />
              <span id="temperature">{currentData.temperature}</span>
              <span className="unitConversion">
                <a href="/" id="celsius-link" className="active">
                  {" "}
                  ºC
                </a>{" "}
                |
                <a href="/" id="fahenheit-link">
                  {" "}
                  ºF
                </a>
              </span>
              <i className="tempFeelsLike">
                Feels like <span id="feelsLike">{currentData.feelslike}</span>º
              </i>
            </div>
            <div className="col-sm-6 mb-3">
              <ul className="condition-list">
                <li>
                  High : <span id="tempHigh">{currentData.highTemp}</span>º
                </li>
                <li>
                  Low : <span id="tempLow">{currentData.lowTemp}</span>º
                </li>
                <li>
                  Humidity : <span id="humidity">{currentData.humidity}</span>%
                </li>
                <li>
                  Wind : <span id="windSpeed">{currentData.windspeed}</span>km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
