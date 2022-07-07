import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Finnish",
    value: "fi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Albanian",
    value: "sq",
  },
  {
    label: "Amharic",
    value: "am",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Armenian",
    value: "hy",
  },
];

function Translate() {
  const [select, setSelect] = useState(options[0]);
  const [phrase, setPhrase] = useState("");

  return (
    <div className="ui container center aligned" style={{ marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="ui input">
          <input
            type="text"
            placeholder="Enter text..."
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label htmlFor="">Select Language</label>
          <Dropdown options={options} select={select} setSelect={setSelect} />
        </div>
      </div>

      <Convert phrase={phrase} language={select} />
    </div>
  );
}

export default Translate;
