import React from "react";

import "./NumberButton.css";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button className="number-button">{props.textContent}</button>  
    </>
  );
};

export default NumberButton;