import React from "react";
import searchIcon from "../assets/search.png";
import { useRef } from "react";
import "./components-styles/Searchbar.css";

const Searchbar = ({ onClickSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const city = inputRef.current.value;
    if (city) {
      onClickSearch(city);
      inputRef.current.value = "";
    } else {
      alert("Enter City Name");
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        placeholder="Enter city name"
        ref={inputRef}
        aria-label="City name input"
      ></input>
      <button className="search-button" onClick={handleSearch} alt="Search">
        <img src={searchIcon} className="search-icon"></img>
      </button>
    </div>
  );
};

export default Searchbar;
