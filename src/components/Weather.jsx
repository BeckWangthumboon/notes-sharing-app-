import React from "react";
import clearIcon from "../assets/clear.png";
import Searchbar from "./Searchbar";
import "./components-styles/Weather.css";

const Weather = () => {
  return (
    <div className="weather-container">
      <Searchbar />
      <div className="weather-information">
        <p className="city-name">Madison </p>
        <p className="temperature">18C </p>
        <p className="weather-name">Sunny </p>
        <p className="">20/9 Feels like 19</p>
        <p className="">Fri, 2:20 pm</p>
        <img src={clearIcon}></img>
      </div>
    </div>
  );
};

export default Weather;
