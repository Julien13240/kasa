import React, { useState } from "react";

import "./panel.scss";

const ExpansionPanel = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpansionPanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expansionPanel">
      <div className="expansionPanel-header" onClick={toggleExpansionPanel}>
        <h3>{title}</h3>

        <span className={`arrow ${isOpen ? "" : "open"}`}></span>
      </div>
      {isOpen && (
        <div className="expansionPanel-content">
          {typeof content === "string" ? <p>{content}</p> : <ul>{content}</ul>}
        </div>
      )}
    </div>
  );
};

export default ExpansionPanel;
