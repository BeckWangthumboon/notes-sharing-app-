import React from "react";
import clearIcon from "../assets/clear.png";
import Searchbar from "./Searchbar";
import "./components-styles/Weather.css";
import dayjs from "dayjs";

const Weather = () => {
  const now = dayjs();
  const date = now.format("ddd, hh:mm A");

  return (
    <div className="outside-container">
      <Searchbar />
      <div className="weather-information-container">
        <div className="city-name-container">
          <p className="city-name">Madison</p>
        </div>
        <div className="weather-image-information-container">
          <div className="weather-information">
            <p className="temperature">18&deg;</p>
            <p className="weather-name">Sunny</p>
            <p className="feels-like">20&deg;/9&deg; Feels like 19&deg;</p>
            <p className="current-time">{date}</p>
          </div>
          <div className="weather-image-container">
            <img src={clearIcon}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
