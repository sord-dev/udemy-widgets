import React, { useState } from "react";

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

function Dropdown() {
  const [menu, setMenu] = useState(false);
  const [select, setSelect] = useState(options[0]);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="item"
        key={option.value}
        value={option.value}
        onClick={() => setSelect(option)}
      >
        {option.label}
      </div>
    );
  });

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="ui selection dropdown" onClick={toggleMenu}>
      <input name="color" />
      <i className="dropdown icon"></i>
      <div className="text">{select.label}</div>
      <div className={menu ? "menu visible transition" : "menu"}>
        {renderedOptions}
      </div>
    </div>
  );
}

export default Dropdown;
