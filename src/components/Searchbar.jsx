import React from "react";
import searchIcon from "../assets/search.png";
import "./components-styles/Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-bar-container">
      <input className="search-bar"></input>
      <img src={searchIcon} className="search-icon"></img>
    </div>
  );
};

export default Searchbar;
