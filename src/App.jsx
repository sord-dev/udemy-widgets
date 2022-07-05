import Search from "./components/Search";
import Dropdown from "./components/dropdown";
import './App.css'

function App() {
  
  return (
    <div className="ui fluid container" style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <Search />
      
      <br />

      <Dropdown />
    </div>
  );
}

export default App;
