import React, { useEffect, useRef, useState } from "react";

function Dropdown({ select, setSelect, options }) {
  const [menu, setMenu] = useState(false);
  const DropdownRef = useRef();

  const renderedOptions = options.map((option) => {
    if (option.value === select.value) return;

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

  useEffect(() => {
    const onBodyClick = (event) => {
      if (DropdownRef.current.contains(event.target)) return;
      setMenu(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <div
      style={{ margin: "10px" }}
      className="ui selection dropdown"
      ref={DropdownRef}
      onClick={() => setMenu((prev) => !prev)}
    >
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
