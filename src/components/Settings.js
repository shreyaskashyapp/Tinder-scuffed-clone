import React from "react"


export default function Settings(props){
  return(
    <div className="settings" onClick={props.handleMode}>
    <img className={props.mode?"img-dark":"img"} src={props.src} alt="" />
    </div>
  )
}