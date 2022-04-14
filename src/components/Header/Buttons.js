import React from "react";
import Popup from "reactjs-popup";
import "./Buttons.css"
import RefreshIcon from '@material-ui/icons/Refresh';
import Add from "../../services/Add";

function Buttons() {
  return (
    <div className="container">

      <div id="button" className="btn-group">
        <button  className="btn1">  PREDICT </button>
        <button   className="btn1">ANALYTICS VIEW</button>
        <button className="btn1"  > ADVANCED SEARCH</button>
      </div>

      <button className="btn1" onClick="window.location.reload();">
      <RefreshIcon>
      </RefreshIcon>
      </button>

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
        <button className="btn1"  >ADD
        {/* <Add /> */}
        </button>
        <button className="btn1"  >EDIT</button>
        <button className="btn1"  >DELETE</button>
      </div>

    </div>
  );
}

export default Buttons;
