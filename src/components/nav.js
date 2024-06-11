import React from "react";
import logo from "../images/IMG-20230825-WA0107.jpg"
import "./nav.css"
function section(){
  return(
    <div>
       <div className="navbar">
        <img src={logo} alt="" />
        <h5>my travel journal</h5>
       </div>
   
    </div>
  ) 
}

export default section;