import React from "react";
import Popup from "reactjs-popup";
import "./Buttons.css"
function Buttons() {
  return (
    <div className="container">

      <div id="button" className="btn-group">
        <button  className="btn1">  Predict </button>
        <button   className="btn1">Analytics View</button>
        <button className="btn1"  > Advanced Search</button>
      </div>

      <div className="search-box" align="">
        <input
          className="search-txt"
          type="text"
          name=""
          id="search-inv"
          placeholder="   Search Customer Id"
        />
        <a className="search-btn" href="#"></a>
      </div>

      <div id="button" className="btn-group">
        <button className="btn1"  >Add</button>
        <button className="btn1"  > Edit</button>
        <button className="btn1"  >Delete</button>
      </div>

    </div>
  );
}

export default Buttons;
