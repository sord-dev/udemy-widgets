import Search from "./components/Search";

const ITEMS = [
  { id: 1, title: "This is the title", content: "I'm not very imaginative" },
  {
    id: 2,
    title: "Isn't that neat.",
    content: "I remembered to add IDs straight away",
  },
  {
    id: 3,
    title: "You have a problem",
    content: "The stuff is killing your productivity",
  },
  {
    id: 4,
    title: "Silver Lining?",
    content: "At least you're working now, king.",
  },
];

function App() {
  

  return (
    <div className="ui fluid container" style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <Search items={ITEMS}  />
    </div>
  );
}

export default App;
