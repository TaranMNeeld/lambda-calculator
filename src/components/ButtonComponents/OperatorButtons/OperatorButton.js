import React from "react";

import "./OperatorButton.css";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button className="operator-button">{props.textContent.char}</button> 
    </>
  );
};

export default OperatorButton;