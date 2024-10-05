import React from "react";
import { useEffect, useState } from "react";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import humidityIcon from "../assets/humidity.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";
import windIcon from "../assets/wind.png";
import Searchbar from "./Searchbar";
import "./components-styles/Weather.css";
import dayjs from "dayjs";

const Weather = () => {
  const now = dayjs();
  const date = now.format("ddd, hh:mm A");
  const apiKey = "e809b342073f343a934e38fabdec2006";

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        cityName: data.name,
        temp: Math.round(data.main.temp),
        maxTemp: Math.round(data.main.temp_max),
        minTemp: Math.round(data.main.temp_min),
        feelsLike: Math.round(data.main.feels_like),
        weatherName: data.weather.main,
      });
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    search("Madison");
  }, []);

  const [weatherData, setWeatherData] = useState({
    humidity: 0,
    windSpeed: 0,
    cityName: "Madison",
    temp: 19,
    maxTemp: 21,
    minTemp: 9,
    feelsLike: 20,
    weatherName: "Sunny",
  });
  const [weatherIcon, setWeatherImage] = useState(clearIcon);

  const { cityName, temp, maxTemp, minTemp, feelsLike, weatherName } =
    weatherData;

  return (
    <div className="outside-container">
      <Searchbar />
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
    </div>
  );
};

export default Weather;
