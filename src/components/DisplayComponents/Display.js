import React, {useState, useEffect} from "react";

const Display = () => {

  let [output, setOutput] = useState("0");

  return <div>{/* Display any props data here */}<h1>{output}</h1></div>;
};

export default Display;