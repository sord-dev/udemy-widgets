import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Color from "./components/Color";
import "./App.css";

function App() {
  return (
    <div
      className="ui fluid container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Translate />
    </div>
  );
}

export default App;
