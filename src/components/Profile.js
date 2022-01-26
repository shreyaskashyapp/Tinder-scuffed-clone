import React from "react"

export default function Profile(props) {
  return (
    <div>
      <img className="img" src={props.src} alt="" />
    </div>
  )
}