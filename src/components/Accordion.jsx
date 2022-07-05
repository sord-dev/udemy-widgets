import React, { useState } from "react";

function Accordion({ items }) {
  const [count, setCount] = useState(0);

  const AccordionItem = ({ title, content }) => {
    return (
      <>
        <div className="title" onClick={handleClickEvent}>
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
      </>
    );
  };

  const handleClickEvent = (event) => {
    console.log(event)
  }

  const accItems = items.map((item) => (
    <AccordionItem key={item.id} title={item.title} content={item.content} />
  ));

  return <div className="ui styled accordion">{accItems}</div>;
}

export default Accordion;
