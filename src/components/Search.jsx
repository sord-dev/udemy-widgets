import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";
import axios from "../api/wikipedia";

function Search() {
  const [term, setTerm] = useState("");
  const [debounce, setDebounce] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const debounceTimeout = setInterval(() => {
      setDebounce(term);
    }, 600);

    return () => {
      clearInterval(debounceTimeout);
    };
  }, [term]);

  useEffect(() => {
    if (debounce == "" || debounce == null || debounce == undefined) return;
    const getData = async () => {
      const res = await axios.get("", {
        params: {
          srsearch: debounce,
        },
      });
      setResults(res.data.query.search);
    };

    getData();
  }, [debounce]);

  return (
    <div className='ui container fluid' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div className="ui left icon input" style={{ marginBottom: "15px" }}>
        <i className="search icon"></i>
        <input
          type="text"
          placeholder="Search Wikipedia..."
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>

      <Accordion items={results} />
    </div>
  );
}

export default Search;
