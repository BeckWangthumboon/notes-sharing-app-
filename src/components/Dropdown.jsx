import React from "react";
import "./components-styles/Dropdown.css";
import { useState } from "react";

const Dropdown = ({ dropdownOptions, onUnitSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [units, setUnits] = useState("metric");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionsSelect = (unit) => {
    setUnits(unit);
    setIsOpen(false);
    onUnitSelect(unit);
  };

  return (
    <div className="dropdown-menu-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {units === "metric" ? "C" : "F"}&deg;
        <i class="bx bx-chevron-down dropdown-icon"></i>
      </button>
      {isOpen && (
        <div className="options-menu">
          <p
            className="options top-option"
            onClick={() => {
              handleOptionsSelect(dropdownOptions[0].system);
            }}
          >
            {dropdownOptions[0].unit}&deg;
          </p>
          <p
            className="options bottom-option"
            onClick={() => {
              handleOptionsSelect(dropdownOptions[1].system);
            }}
          >
            {dropdownOptions[1].unit}&deg;
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
