import React from "react";

const DisplayData = ({ data }) => (
  <div>
    <h2>Filtered Data:</h2>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export default DisplayData;
