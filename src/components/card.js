import React from "react";
import "./card.css"
export default function Card(props){
  return(
    <div className="cardmain">
        <div className="card1">
            <div className="cardimg">
            <img src={props.imges} alt=""/>
            </div>
            <div className="cardtext">
                <div className="topimg">
                    <p><img src={props.location} alt=""/></p>
                    <b><span>{props.countryname}</span></b>
                    <a href="jkhh">{props.locationtext}</a>
                </div>
                <div className="cardheading">
                    <h1>{props.heading}</h1>
                </div>
                <div className="carddate">
                    <h5>{props.date}</h5>
                </div>
                <div className="carddiscription">
                    <p>{props.discription}</p>
                </div>
                


            </div>
        </div>
       
   
    </div>
  ) 
}

