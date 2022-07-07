import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: 'Japanese', value: 'jp'
  },
  {
    label: 'Finnish', value: 'fi'
  },
  {
    label: 'English', value: 'en'
  },
] 

function Translate() {
  const [select, setSelect] = useState(options[2]);
  const [phrase, setPhrase] = useState('')
  
  return (
    <div className="ui container center aligned" style={{ margin: "10px" }}>
      <div className="ui input">
        <input type="text" placeholder="Enter text..." value={phrase} onChange={(e) => setPhrase(e.target.value)}/>
      </div>

      <Dropdown options={options} select={select} setSelect={setSelect} />

      <h1>{phrase}</h1>
      <h3>{`This text will be displayed in ${select.label}.`}</h3>
    </div>
  );
}

export default Translate;
