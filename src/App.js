import React, { useState } from "react";
import axios from "axios";
import TextInput from "./components/TextInput";
import SubmitButton from "./components/SubmitButton";
import Dropdown from "./components/Dropdown";
import DisplayData from "./components/DisplayData";

const App = () => {
  const [jsonData, setJsonData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleInputChange = (e) => {
    setJsonData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const response = await axios.post(
        "http://your-backend-url/api/endpoint",
        parsedData
      );
      setFilteredData(response.data);
      setError(null);
    } catch (error) {
      setError("Invalid JSON format or API error");
      setFilteredData([]);
      console.error(error); // Log error for debugging
    }
  };

  const handleDropdownChange = (selected) => {
    setSelectedOptions(selected);
  };

  const filterData = () => {
    if (!filteredData.length) return [];

    const selectedValues = selectedOptions.map((opt) => opt.value);
    return filteredData.filter((item) => {
      if (typeof item !== "string") return false; // Ensure item is a string

      if (selectedValues.includes("alphabets") && /^[a-zA-Z]+$/.test(item))
        return true;
      if (selectedValues.includes("numbers") && /^[0-9]+$/.test(item))
        return true;

      if (selectedValues.includes("highestLowercase")) {
        const lowercaseChars = item.match(/[a-z]/g);
        if (lowercaseChars) {
          const highestLowercase = String.fromCharCode(
            Math.max(...lowercaseChars.map((c) => c.charCodeAt(0)))
          );
          return item.includes(highestLowercase);
        }
      }
      return false;
    });
  };

  return (
    <div>
      <h1>21BCE0652</h1>
      <TextInput value={jsonData} onChange={handleInputChange} />
      <SubmitButton onClick={handleSubmit} />
      {error && <p>{error}</p>}
      {filteredData.length > 0 && (
        <>
          <Dropdown
            selectedOptions={selectedOptions}
            onChange={handleDropdownChange}
          />
          <DisplayData data={filterData()} />
        </>
      )}
    </div>
  );
};

export default App;
