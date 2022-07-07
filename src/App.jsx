import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="ui fluid container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Search />

      <br />
      <button
        className="ui button"
        style={{ marginBottom: "10px" }}
        onClick={() => setShow((prev) => !prev)}
      >
        show dropdown
      </button>
      {show && <Dropdown />}
    </div>
  );
}

export default App;
