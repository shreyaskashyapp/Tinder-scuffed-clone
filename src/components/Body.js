import React from "react"


export default function Body(props) {
  
  return (
    <div className="hero">
      <img className="hero-img" src={props.items.img} alt="" />
      <div className="hero-text">
        <span> {props.items.name}, 19 </span>
        <br/>
        <span>About</span>
      </div>
    </div>

  )
}