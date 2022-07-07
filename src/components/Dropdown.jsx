import React, { useEffect, useRef, useState } from "react";
import DropdownDisplay from "./DropdownDisplay";

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
  const DropdownRef = useRef();

  const renderedOptions = options.map((option) => {
    if (option.value === select.value) return;

    const handleSelection = (option) => {
      setSelect(option);
    };

    return (
      <div
        className="item"
        key={option.value}
        value={option.value}
        onClick={() => handleSelection(option)}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    const onBodyClick = (event) => {
      if (DropdownRef.current.contains(event.target)) {
        return;
      }
      setMenu(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <label htmlFor="colour dropdown" className="ui label">
        Choose a Color
      </label>

      <div
        style={{ margin: "10px" }}
        className="ui selection dropdown"
        ref={DropdownRef}
        onClick={toggleMenu}
      >
        <input name="color" />
        <i className="dropdown icon"></i>
        <div className="text">{select.label}</div>
        <div className={menu ? "menu visible transition" : "menu"}>
          {renderedOptions}
        </div>
      </div>

      <div>
        <DropdownDisplay color={select.value} />
      </div>
    </>
  );
}

export default Dropdown;
