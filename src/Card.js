import React from "react"
import cat1 from "./images/cat-1.jpg"
import cat2 from "./images/cat-2.jpg"
import cat3 from "./images/cat-3.jpg"
import cat4 from "./images/cat-4.jpg"
import phoneIcon from "./images/phone-solid.svg"
import mailIcon from "./images/envelope-solid.svg"
import "./App.css"


function Card(props) {
    console.log(props);
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={props.img} className="cat-image"></img>
        <h3>{props.name}</h3>
        <div className="info-group">
          <img src={phoneIcon} className="icon-image"></img>
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} className="icon-image"></img>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card