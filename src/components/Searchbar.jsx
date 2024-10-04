import React from "react";
import searchIcon from "../assets/search.png";
import "./components-styles/Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-bar-container">
      <input className="search-bar" placeholder="Enter city name"></input>
      <button className="search-button">
        <img src={searchIcon} className="search-icon"></img>
      </button>
    </div>
  );
};

export default Searchbar;
