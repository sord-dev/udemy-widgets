import React from "react";
import Dropdown from "./Dropdown";

function Translate() {
  return (
    <div className="ui container center aligned" style={{ margin: "10px" }}>
      <div className="ui input">
        <input type="text" placeholder="Enter text..." />
      </div>

      <Dropdown />
    </div>
  );
}

export default Translate;
