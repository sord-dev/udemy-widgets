import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClickEvent = (index) => {
    setActiveIndex(index);
  };

  const accItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.id}>
        <div
          className={activeIndex == index ? "title active" : "title"}
          onClick={() => handleClickEvent(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={activeIndex == index ? "content active" : "content"}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion" >
      {accItems}
    </div>
  );
}

export default Accordion;
