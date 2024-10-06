import React from "react";
import { useEffect, useState, useRef } from "react";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import Searchbar from "./Searchbar";
import "./components-styles/Weather.css";
import dayjs from "dayjs";
import Dropdown from "./Dropdown";

const Weather = () => {
  const now = dayjs();
  const date = now.format("ddd, hh:mm A");

  const apiKey = "e809b342073f343a934e38fabdec2006";

  const dropdownOptions = [
    {
      unit: "C",
      system: "metric",
    },
    {
      unit: "F",
      system: "imperial",
    },
  ];

  const [weatherData, setWeatherData] = useState(false);
  const [weatherIcon, setWeatherImage] = useState(clearIcon);
  const [units, setUnits] = useState("metric");

  const handleUnitSelect = (unit) => {
    setUnits(unit);
    if (weatherData.cityName) {
      search(weatherData.cityName, unit);
    }
  };

  const search = async (city, unitSystem = units) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unitSystem}&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        cityName: data.name,
        temp: Math.round(data.main.temp),
        maxTemp: Math.round(data.main.temp_max),
        minTemp: Math.round(data.main.temp_min),
        feelsLike: Math.round(data.main.feels_like),
        weatherName: data.weather[0].main,
        weatherId: String(data.weather[0].id),
      });

      const weatherId = String(data.weather[0].id);
      switch (weatherId) {
        case "800":
          setWeatherImage(clearIcon);
          break;
        default:
          switch (weatherId[0]) {
            case "2":
              setWeatherImage(rainIcon);
              break;
            case "3":
              setWeatherImage(drizzleIcon);
              break;
            case "5":
              setWeatherImage(rainIcon);
              break;
            case "6":
              setWeatherImage(snowIcon);
              break;
            case "7":
              setWeatherImage(cloudIcon);
              break;
            case "8":
              setWeatherImage(cloudIcon);
              break;
            default:
              setWeatherImage(clearIcon);
              break;
          }
      }
    } catch (error) {
      setWeatherData(false);
      console.log("Error in fetching data");
    }
  };

  const { cityName, temp, maxTemp, minTemp, feelsLike, weatherName } =
    weatherData;

  return (
    <div className="outside-container">
      <Dropdown
        dropdownOptions={dropdownOptions}
        onUnitSelect={handleUnitSelect}
      />

      <h1 className="weather-app-title">Weather App</h1>
      <Searchbar onClickSearch={search} />
      {weatherData ? (
        <>
          <div className="weather-information-container">
            <div className="city-name-container">
              <p className="city-name">{cityName}</p>
            </div>
            <div className="weather-image-information-container">
              <div className="weather-information">
                <p className="temperature">{temp}&deg;</p>
                <p className="weather-name">{weatherName}</p>
                <p className="feels-like">
                  {maxTemp}&deg;/{minTemp}&deg; Feels like {feelsLike}
                  &deg;
                </p>
                <p className="current-time">{date}</p>
              </div>
              <div className="weather-image-container">
                <img src={weatherIcon}></img>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="intro-message">Enter a city name!</p>
        </>
      )}
    </div>
  );
};

export default Weather;
