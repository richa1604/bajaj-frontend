import React from "react";

const TextInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Enter JSON here"
  />
);

export default TextInput;
