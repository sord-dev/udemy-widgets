import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "The Colour Red",
    value: "red",
  },
  {
    label: "The Colour Green",
    value: "green",
  },
  {
    label: "The Colour Blue",
    value: "blue",
  },
];

function Color() {
  const [select, setSelect] = useState(options[0]);

  return (
    <>
      <label
        htmlFor="colour dropdown"
        className="ui label"
        style={{ marginTop: "10px" }}
      >
        Choose a Color
      </label>

      <Dropdown options={options} select={select} setSelect={setSelect} />

      <div>
        <p className={select.value}>{`This text is ${select.value}!`}</p>
      </div>
    </>
  );
}

export default Color;
