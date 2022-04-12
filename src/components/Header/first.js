import React from "react";
import Logo from "../../images/logo.svg";
import Group from "../../images/Group 20399.svg";
import "./first.css";
function First() {
  return (
    <div className="conatiner">
      <div className="image-container">
        <div>
          <img src={Group} />
        </div>
        <div>
          <img src={Logo} />
        </div>
      </div>
      <div id="invoice">
        Invoice List
      </div>
    </div>
  );
}

export default First;
