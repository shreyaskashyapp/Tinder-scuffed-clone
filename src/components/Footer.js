import React from "react"
import tick from "../assets/green.png"
import wrong from "../assets/wrong.png"

export default function Footer(props){
  return(
    <div className="footer">
    <img onClick={props.toggle} className="footer-icon" src={wrong} alt=""/>
    <img onClick={props.toggle} className="footer-icon" src={tick} alt=""/>

    </div>
  )
}