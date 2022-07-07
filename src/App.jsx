import Search from "./components/Search";
import Translate from "./components/Translate";
import Color from "./components/Color";
import "./App.css";
import Route from "./components/Route";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <div
      className="ui fluid container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Route path="/">
        <Search />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/color">
        <Color />
      </Route>
    </div>
    </>
  );
}

export default App;
