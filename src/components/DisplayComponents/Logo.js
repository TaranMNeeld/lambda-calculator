import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" style={{marginTop: "10px", marginLeft: "10px"}}/>
    </div>
  );
};

export default Logo;
