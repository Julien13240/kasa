import React, { useState } from "react";

import "./collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>

        <span className={`arrow ${isOpen ? "" : "open"}`}></span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {typeof content === "string" ? <p>{content}</p> : <ul>{content}</ul>}
        </div>
      )}
    </div>
  );
};

export default Collapse;