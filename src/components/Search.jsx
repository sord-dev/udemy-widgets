import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";

function Search({ items }) {
  const [term, setTerm] = useState('');
  const [debounce, setDebounce] = useState(null);

  useEffect(() => {
    const debounceTimeout = setInterval(() => {
      setDebounce(term);
    }, 1000);

    return () => {
      clearInterval(debounceTimeout);
    };
  }, [term]);

  useEffect(() => {
    console.log(debounce);
  }, [debounce]);

  return (
    <div style={{ marginTop: "15px" }}>
      <div className="ui left icon input" style={{ marginBottom: "15px" }}>
        <i className="search icon"></i>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>

      <Accordion items={items} />
    </div>
  );
}

export default Search;
