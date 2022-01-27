import React from "react"

export default function Chat(props) {
  return (
    <div>
      <img className={props.mode?"img-dark":"img"}src={props.src} alt="" />

    </div>
  )
}