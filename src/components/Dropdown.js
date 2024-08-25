// components/Dropdown.js
import React from "react";
import Select from "react-select";

const options = [
  { value: "alphabets", label: "Alphabets" },
  { value: "numbers", label: "Numbers" },
  { value: "highestLowercase", label: "Highest Lowercase Alphabet" },
];

const Dropdown = ({ selectedOptions, onChange }) => (
  <Select
    isMulti
    options={options}
    value={selectedOptions}
    onChange={onChange}
  />
);

export default Dropdown;
